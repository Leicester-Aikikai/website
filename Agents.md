# Events Structure and Update Process

This document outlines the structure of events and the process for updating them on the Leicester Aikikai website.

## Event Structure

Events are defined as an array of objects in `src/data/events.js`. Each event object has the following structure:

```javascript
{
  date: 'DD.MM.YYYY',
  title: 'Event Title',
  description: 'A detailed description of the event.',
  type: 'course' | 'seminar' | 'other',
  id: 'event-YYYY-MM-DD',
  image: '/img/event-image.jpg',
  location: {
    name: 'Location Name',
    address: 'Location Address'
  },
  time: {
    start: 'HH:MM',
    end: 'HH:MM'
  },
  price: 'Event price information',
  instructors: [
    { name: 'Instructor Name', profile: '/instructors/instructor-profile-url' },
    // or as a string
    'Instructor Name'
  ]
}
```

## Event Update Process

When a new event is added or an existing one is updated, the website will update automatically. The following files are involved in this process:

### 1. Event Data

The core event information is stored in a dedicated file, making it the single source of truth for all events.

-   **File:** `src/data/events.js`
-   **Action:** Add, update, or remove event objects from the `events` array.

### 2. Home Page

The Home page automatically displays the latest upcoming event. No manual editing is required.

-   **File:** `src/views/Home.vue`
-   **Action:** This file reads from `src/data/events.js` and uses a computed property to find the next event. The "Latest Event" section will only be displayed if there is an upcoming event.

### 3. Sitemap

To ensure search engines are aware of new event pages, the `sitemap.xml` file must be regenerated.

-   **File:** `scripts/generate-sitemap.mjs`
-   **Action:** This script now reads directly from `src/data/events.js`. After updating the events, run the following command in your terminal to regenerate the `sitemap.xml` file:

```bash
node scripts/generate-sitemap.mjs
```
