# Event Routes Implementation

## Overview
This document describes the implementation of individual event routes for the Leicester Aikikai website.

## Route Format
Each event has its own unique URL following this format:
```
/events/:date/:title
```

### Example URLs
- `/events/2023-12-10/joint-course-with-melton-byakko-kan-aikido`
- `/events/2023-10-22/leicester-aikikai-dojo-course-october-2023`
- `/events/2023-09-15/aikido-beginners-course-2023`
- `/events/2023-06-11/dojo-10th-year-anniversary-course`

## Implementation Details

### 1. Events.vue Component
The Events component includes:

#### Event Data Structure
```javascript
events: [
  {
    date: '10.12.2023',           // DD.MM.YYYY format
    title: 'Event Title',
    type: 'course',
    id: 'event-2023-12-10'        // HTML element ID
  }
]
```

#### Helper Methods
- `parseDate(dateStr)`: Converts DD.MM.YYYY to JavaScript Date object
- `createSlug(title)`: Converts event title to URL-friendly slug
- `formatDateForUrl(dateStr)`: Converts DD.MM.YYYY to YYYY-MM-DD
- `getEventUrl(event)`: Generates full event URL
- `scrollToEvent()`: Scrolls to specific event when accessed via direct URL

#### Scroll Behavior
When an event is accessed via its direct URL (e.g., `/events/2023-12-10/joint-course-with-melton-byakko-kan-aikido`):
1. The component extracts the date parameter
2. Finds the corresponding event element by ID
3. Smoothly scrolls to center the event on the screen

### 2. Router Configuration
The router includes two event-related routes:

```javascript
// Main events page
{
  path: '/events',
  name: 'Events',
  component: Events
}

// Individual event detail
{
  path: '/events/:date/:title',
  name: 'EventDetail',
  component: Events
}
```

Both routes render the same Events component, but the detail route includes date and title parameters for scrolling to the specific event.

### 3. Sitemap Generation
The `generate-sitemap.mjs` script automatically includes all event URLs:

```javascript
const events = [
  { date: '2023-12-10', title: 'joint-course-with-melton-byakko-kan-aikido' },
  // ... more events
]
```

Run `npm run sitemap` to regenerate the sitemap after adding new events.

## Adding New Events

### Step 1: Add Event Data
Add the event to the `events` array in `Events.vue`:

```javascript
{
  date: '31.12.2024',
  title: 'New Event Title',
  type: 'course',
  id: 'event-2024-12-31'
}
```

### Step 2: Add Event HTML
Add the event HTML in the template with the matching ID:

```html
<div id="event-2024-12-31" class="mb-5 position-relative ps-5" :class="{ 'opacity-75': isEventPast('31.12.2024') }">
  <!-- Event content -->
</div>
```

### Step 3: Update Sitemap Script
Add the event to the `events` array in `scripts/generate-sitemap.mjs`:

```javascript
const events = [
  { date: '2024-12-31', title: 'new-event-title' },
  // ... existing events
]
```

### Step 4: Regenerate Sitemap
```bash
npm run sitemap
```

## URL Format Rules
- Date: YYYY-MM-DD format (e.g., 2023-12-10)
- Title: lowercase, alphanumeric and hyphens only
  - Spaces → hyphens
  - Apostrophes and special characters → removed
  - Multiple hyphens → single hyphen

### Examples
- "Joint course with Melton Byakko-Kan Aikido" → `joint-course-with-melton-byakko-kan-aikido`
- "Aikido Beginner's Course 2023" → `aikido-beginners-course-2023`
- "Dojo 10th year anniversary course" → `dojo-10th-year-anniversary-course`

## SEO Benefits
1. **Unique URLs**: Each event has its own shareable URL
2. **Descriptive Slugs**: URLs contain readable event titles
3. **Sitemap Integration**: All event URLs included in sitemap.xml
4. **Deep Linking**: Direct links to specific events
5. **User Experience**: Smooth scrolling to event when accessed via URL

## Testing
To test event routes:
1. Start dev server: `npm run dev`
2. Navigate to `/events/2023-12-10/joint-course-with-melton-byakko-kan-aikido`
3. Verify the page scrolls to the correct event
4. Check that past events are greyed out automatically

## Notes
- The main `/events` route shows all events
- Individual event routes (`/events/:date/:title`) show all events but scroll to the specific one
- Both routes use the same component for consistency
- Event dates automatically determine if they should be greyed out
- The scroll behavior includes a smooth animation for better UX

