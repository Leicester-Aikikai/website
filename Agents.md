# Events Structure and Update Process

This document outlines the structure of events and the process for updating them on the Leicester Aikikai website.

## Event Structure

Events are defined as an array of objects within the `events` data property in `src/views/Events.vue`. Each event object has the following structure:

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

When a new event is added or an existing one is updated, the following files need to be modified to ensure the website is up-to-date:

### 1. Update Home Page

The Home page displays the latest upcoming event. To update this, modify the `latestEvent` data property in `src/views/Home.vue`.

-   **File:** `src/views/Home.vue`
-   **Action:** Update the `latestEvent` object with the new event's details. The `showLatestEvent` computed property will automatically handle showing the event only if its date is in the future or the current day.

```javascript
// src/views/Home.vue

// ...
data() {
  return {
    latestEvent: {
      date: '19.07.2026',
      title: 'Course with Stuart Lovering 6th dan shidoin from Tudor Grange dojo',
      description: '...',
      image: '/img/leicester-aikikai-july-19th-2026.jpg',
      url: '/events/2026-07-19/course-with-stuart-lovering-6th-dan-shidoin-from-tudor-grange-dojo'
    }
  };
},
// ...
```

### 2. Update Sitemap

To ensure search engines are aware of the new event page, the `sitemap.xml` file must be updated.

-   **File:** `scripts/generate-sitemap.mjs`
-   **Action:** Add a new entry for the event in the `events` array. The title should be slugified.

```javascript
// scripts/generate-sitemap.mjs

// ...
const events = [
  { date: '2026-07-19', title: 'course-with-stuart-lovering-6th-dan-shidoin-from-tudor-grange-dojo' },
  // ... other events
];
// ...
```

-   **Run script:** After updating the `events` array, run the following command in your terminal to regenerate the `sitemap.xml` file:

```bash
node scripts/generate-sitemap.mjs
```

