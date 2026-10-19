import test from 'node:test'
import assert from 'node:assert/strict'
import { events } from '../src/data/events.js'
import { eventDateIso, eventDateTime, eventCalendar, getEventUrl, splitEvents, londonDateIso, getEventSchema } from '../src/utils/events.js'

const makeEvent = (date, id = date) => ({ date, id, title: 'Aikido, practice; together', description: 'First line\nSecond line', location: { name: 'Dojo', address: 'Leicester, UK' }, time: { start: '19:00', end: '21:00' }, instructors: ['Instructor'] })

test('sorts shuffled events into nearest upcoming and most recent past without mutating data', () => {
  const original = ['21.11.2026', '14.12.2025', '20.10.2026', '19.10.2026'].map(date => makeEvent(date))
  const { upcoming, past } = splitEvents(original, new Date('2026-10-19T12:00:00Z'))
  assert.deepEqual(upcoming.map(event => event.date), ['19.10.2026', '20.10.2026', '21.11.2026'])
  assert.deepEqual(past.map(event => event.date), ['14.12.2025'])
  assert.equal(original[0].date, '21.11.2026')
  assert.equal(splitEvents(original, new Date('2027-01-01T12:00:00Z')).upcoming.length, 0)
})

test('uses the UK calendar date around midnight regardless of visitor timezone', () => {
  assert.equal(londonDateIso(new Date('2026-07-18T23:30:00Z')), '2026-07-19')
  assert.equal(splitEvents([makeEvent('18.07.2026')], new Date('2026-07-18T23:30:00Z')).past.length, 1)
})

test('event schema and calendar account for BST and GMT', () => {
  const summer = makeEvent('19.07.2026')
  const winter = makeEvent('21.11.2026')
  assert.equal(eventDateTime(summer, '19:00'), '2026-07-19T19:00:00+01:00')
  assert.equal(eventDateTime(winter, '19:00'), '2026-11-21T19:00:00+00:00')
  assert.equal(getEventSchema(summer, 'https://leicesteraikikai.com').startDate, '2026-07-19T19:00:00+01:00')
  const calendar = eventCalendar(summer, 'https://leicesteraikikai.com', new Date('2026-01-01T00:00:00Z'))
  assert.match(calendar, /DTSTART:20260719T180000Z/)
  assert.match(calendar, /SUMMARY:Aikido\\, practice\\; together/)
  assert.match(calendar, /DESCRIPTION:First line\\nSecond line/)
  assert.ok(calendar.endsWith('END:VCALENDAR\r\n'))
})

test('calendar folds UTF-8 text to 75 octets without splitting characters', () => {
  const event = makeEvent('19.07.2026')
  event.description = '合気道 '.repeat(100)
  const content = eventCalendar(event, 'https://leicesteraikikai.com')
  for (const line of content.split('\r\n')) assert.ok(new TextEncoder().encode(line).length <= 75)
  assert.ok(content.replace(/\r\n /g, '').includes(event.description))
})

test('preserves every published event URL with unique routes and valid dates', () => {
  assert.equal(new Set(events.map(getEventUrl)).size, events.length)
  for (const event of events) {
    assert.match(eventDateIso(event.date), /^\d{4}-\d{2}-\d{2}$/)
    assert.match(getEventUrl(event), /^\/events\/\d{4}-\d{2}-\d{2}\/[\w-]+$/)
  }
})
