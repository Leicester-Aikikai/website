export function eventDateIso(date) {
  const [day, month, year] = date.split('.')
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}

export function createSlug(title) {
  return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()
}

export function getEventUrl(event) {
  return `/events/${eventDateIso(event.date)}/${createSlug(event.title)}`
}

export function londonDateIso(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now)
  const value = type => parts.find(part => part.type === type).value
  return `${value('year')}-${value('month')}-${value('day')}`
}

export function splitEvents(events, now = new Date()) {
  const today = londonDateIso(now)
  return {
    upcoming: events.filter(event => eventDateIso(event.date) >= today).sort((a, b) => eventDateIso(a.date).localeCompare(eventDateIso(b.date))),
    past: events.filter(event => eventDateIso(event.date) < today).sort((a, b) => eventDateIso(b.date).localeCompare(eventDateIso(a.date)))
  }
}

export function formatEventDate(date) {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' }).format(new Date(`${eventDateIso(date)}T12:00:00Z`))
}

export function formatTime(time) {
  const [hour, minute] = time.split(':')
  return `${Number(hour) % 12 || 12}:${minute}${Number(hour) >= 12 ? 'pm' : 'am'}`
}

export function eventDateTime(event, time) {
  // All existing event venues are in the UK. Account for British Summer Time.
  const iso = eventDateIso(event.date)
  const hour = Number(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', hour: '2-digit', hourCycle: 'h23' }).format(new Date(`${iso}T12:00:00Z`)))
  return `${iso}T${time}:00${hour === 12 ? '+00:00' : '+01:00'}`
}

export function instructorNames(event) {
  return (event.instructors || []).map(person => typeof person === 'string' ? person : person.name)
}

export function getEventSchema(event, siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    url: `${siteUrl}${getEventUrl(event)}`,
    startDate: eventDateTime(event, event.time.start),
    endDate: eventDateTime(event, event.time.end),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    ...(event.image ? { image: `${siteUrl}${event.image}` } : {}),
    location: { '@type': 'Place', name: event.location.name, address: event.location.address },
    performer: instructorNames(event).map(name => ({ '@type': 'Person', name }))
  }
}

function escapeIcal(value) {
  return value.replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;')
}

export function eventCalendar(event, siteUrl, now = new Date()) {
  const stamp = date => new Date(date).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const lines = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Leicester Aikikai//Events//EN', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT',
    `UID:${event.id}@leicesteraikikai.com`, `DTSTAMP:${stamp(now)}`,
    `DTSTART:${stamp(eventDateTime(event, event.time.start))}`, `DTEND:${stamp(eventDateTime(event, event.time.end))}`,
    `SUMMARY:${escapeIcal(event.title)}`, `DESCRIPTION:${escapeIcal(event.description)}`,
    `LOCATION:${escapeIcal(`${event.location.name}, ${event.location.address}`)}`,
    `URL:${siteUrl}${getEventUrl(event)}`, 'END:VEVENT', 'END:VCALENDAR'
  ]
  // RFC 5545 limits physical lines to 75 octets, including UTF-8 characters.
  return lines.map(line => {
    const folded = []
    let current = ''
    for (const char of line) {
      if (new TextEncoder().encode(current + char).length > 75) { folded.push(current); current = ' ' }
      current += char
    }
    folded.push(current)
    return folded.join('\r\n')
  }).join('\r\n') + '\r\n'
}
