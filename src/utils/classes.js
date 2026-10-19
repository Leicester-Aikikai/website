import { weeklyClass, classOverrides } from '../data/classes.js'
import { londonDateIso, eventDateTime } from './events.js'

function sessionForDate(date, overrides, schedule, now) {
  const override = overrides[date] || {}
  const start = override.start || schedule.start
  const end = override.end || schedule.end
  const cancelled = override.cancelled === true
  const [year, month, day] = date.split('-')
  const event = { date: `${day}.${month}.${year}` }
  const startsAt = new Date(eventDateTime(event, start)).getTime()
  // Keep a cancellation visible until the regular class would have finished.
  const endsAt = new Date(eventDateTime(event, cancelled ? schedule.end : end)).getTime()
  return { date, start, end, cancelled, changed: start !== schedule.start || end !== schedule.end,
    message: override.message || '', inProgress: !cancelled && now.getTime() >= startsAt && now.getTime() < endsAt, endsAt }
}

export function getNextClass(now = new Date(), overrides = classOverrides, schedule = weeklyClass) {
  const day = new Date(`${londonDateIso(now)}T12:00:00Z`)
  day.setUTCDate(day.getUTCDate() + (schedule.weekday - day.getUTCDay() + 7) % 7)
  let session = sessionForDate(day.toISOString().slice(0, 10), overrides, schedule, now)
  if (now.getTime() >= session.endsAt) {
    day.setUTCDate(day.getUTCDate() + 7)
    session = sessionForDate(day.toISOString().slice(0, 10), overrides, schedule, now)
  }
  return session
}

export function formatClassDate(date) {
  return new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' }).format(new Date(`${date}T12:00:00Z`))
}
