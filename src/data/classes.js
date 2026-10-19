import { club } from './club.js'

// Regular weekly class: weekday uses Sunday = 0 through Saturday = 6.
export const weeklyClass = { weekday: 5, start: club.start, end: club.end }

// Edit this object for one-off changes, keyed by the Friday date (YYYY-MM-DD).
// Times use the Europe/London timezone and 24-hour HH:MM format.
// Past entries stop affecting the notice automatically; regular hours resume.
export const classOverrides = {
  '2026-10-23': { start: '18:00', end: '20:00' },
  '2026-11-06': { start: '18:00', end: '20:00' },
  '2026-12-04': { start: '18:00', end: '20:00' },
  '2027-03-26': { start: '18:00', end: '20:00' },
  '2027-06-25': { start: '18:00', end: '20:00' },
  '2027-10-01': { start: '18:00', end: '20:00' },

  // Examples only — uncomment and change the date/details when confirmed:
  // '2026-12-25': { cancelled: true, message: 'No training this Friday.' },
  // '2026-12-18': { start: '18:30', end: '20:30', message: 'Earlier training this week.' }
}
