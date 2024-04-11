import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

import { Load } from "../models/loads.ts";
import { Schedule } from "../models/schedule.ts";


export function createEvents(loads: Load[]) {
  return loads.map((load) => {
    return {
      id: load.Id,
      title: load.Name
    }
  });
}

export function initialize_initial_events(schedules: Schedule[]){
    return schedules.map((schedule): EventInput => ({
      id: schedule.Id,
      title: schedule.Title,
      startTime: schedule.Start,
      endTime: schedule.End,
      allDay: false,
      daysOfWeek: schedule.Dayofweek.reduce((accum: Number[], val, index) => val == true ? [...accum, index] : accum, []),
      editable: true,
      startRecur: schedule.StartRecur,
      endRecur: schedule.EndRecur,
      groupId: schedule.Id,
  }));
}

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
