import test from 'node:test'
import assert from 'node:assert/strict'
import { getNextClass, formatClassDate } from '../src/utils/classes.js'

const next = (instant, changes = {}) => getNextClass(new Date(instant), changes)
test('selects the next Friday with the regular 7pm–9pm hours and a British date', () => {
  const session = next('2026-10-19T12:00:00Z')
  assert.equal(session.date, '2026-10-23')
  assert.match(formatClassDate(session.date), /^Friday,? 23 October 2026$/)
  assert.equal(session.start, '19:00')
  assert.equal(session.end, '21:00')
  assert.equal(session.cancelled, false)
  assert.equal(session.changed, false)
})

test('retains today’s session while in progress, then rolls forward exactly at its end', () => {
  assert.equal(next('2026-11-06T18:59:59Z').inProgress, false)
  assert.equal(next('2026-11-06T19:00:00Z').inProgress, true)
  assert.equal(next('2026-11-06T20:59:59Z').date, '2026-11-06')
  assert.equal(next('2026-11-06T21:00:00Z').date, '2026-11-13')
})

test('uses British Summer Time regardless of the visitor’s timezone and handles the clock change', () => {
  assert.equal(next('2026-07-24T18:00:00Z').inProgress, true)
  assert.equal(next('2026-07-24T19:59:59Z').date, '2026-07-24')
  assert.equal(next('2026-07-24T20:00:00Z').date, '2026-07-31')
  assert.equal(next('2026-10-23T20:00:00Z').date, '2026-10-30')
  assert.equal(next('2026-10-30T20:00:00Z').inProgress, true)
  assert.equal(next('2026-07-23T23:30:00Z').date, '2026-07-24')
})

test('keeps a cancellation visible until the scheduled end instead of silently skipping it', () => {
  const changes = { '2026-10-23': { cancelled: true, message: 'No training this Friday.' } }
  const session = next('2026-10-23T18:30:00Z', changes)
  assert.equal(session.date, '2026-10-23')
  assert.equal(session.cancelled, true)
  assert.equal(session.inProgress, false)
  assert.equal(session.message, 'No training this Friday.')
  assert.equal(next('2026-10-23T20:00:00Z', changes).date, '2026-10-30')
})

test('uses changed hours for the notice and rollover, then returns to the regular hours', () => {
  const changes = { '2026-10-23': { start: '18:00', end: '20:00', message: 'Earlier class.' } }
  const session = next('2026-10-23T17:00:00Z', changes)
  assert.equal(session.start, '18:00')
  assert.equal(session.end, '20:00')
  assert.equal(session.changed, true)
  assert.equal(session.inProgress, true)
  const following = next('2026-10-23T19:00:00Z', changes)
  assert.equal(following.date, '2026-10-30')
  assert.equal(following.start, '19:00')
  assert.equal(following.end, '21:00')
  assert.equal(following.changed, false)
  assert.equal(following.message, '')
})

test('supports later finishes, partial time overrides and information-only notices', () => {
  assert.equal(next('2026-11-06T21:30:00Z', { '2026-11-06': { end: '22:00' } }).inProgress, true)
  assert.equal(next('2026-11-06T21:30:00Z', { '2026-11-06': { end: '22:00' } }).start, '19:00')
  assert.equal(next('2026-11-06T18:00:00Z', { '2026-11-06': { message: 'Please arrive early.' } }).changed, false)
})
