import { EventInput } from '@fullcalendar/core'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Laundry',
    groupid: 1,
    start: todayStr,
    allDay: false,
    daysOfWeek: [1],
    editable: true
  },
  {
    id: createEventId(),
    title: 'Dishes',
    groupid: 2,
    start: todayStr + 'T12:00:00',
    editable: true
  }
]

export function createEventId() {
  return String(eventGuid++)
}
