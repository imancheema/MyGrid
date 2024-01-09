import React from "react";
import "./Schedule2.css";
import Navbar from "./NavBar";
import {
    EventApi,
    DateSelectArg,
    EventClickArg,
    EventContentArg,
    formatDate,
  } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';

    interface ScheduleAppState {
        weekendsVisible: boolean;
        currentEvents: EventApi[];
    }
      
    export default class Schedule2 extends React.Component<{}, ScheduleAppState> {
        state: ScheduleAppState = {
            weekendsVisible: true,
            currentEvents: []
        };

        render() {
            return(
                <body className="Body">
                    <div className="Header">
                        <Navbar />
                    </div>
                    <div className ="Mainbody">
                      <div className='Sidebar'>
                        {this.renderSidebar()}
                      </div>
                      <div className='Calendar'>
                          <FullCalendar
                              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                              headerToolbar={{
                                  left: 'prev,next today',
                                  center: 'title',
                                  right: 'timeGridDay,timeGridWeek,dayGridMonth'
                              }}
                              initialView='timeGridWeek'
                              editable={true}
                              selectable={true}
                              selectMirror={true}
                              dayMaxEvents={true}
                              handleWindowResize={true}
                              weekends={this.state.weekendsVisible}
                              initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                              select={this.handleDateSelect}
                              eventContent={renderEventContent} // custom render function
                              eventClick={this.handleEventClick}
                              eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                              /* you can update a remote database when these fire:
                              eventAdd={function(){}}
                              eventChange={function(){}}
                              eventRemove={function(){}}
                              */
                          />
                      </div>
                    </div>
                </body>
            );
        };

        renderSidebar() {
            return (
              <div className='Schedule-sidebar'>
                <div className='Schedule-sidebar-section'>
                  <h2>Events({this.state.currentEvents.length})</h2>
                </div>
                <div className='Schedule-sidebar-section'>
                  <ul>
                    {this.state.currentEvents.map(renderSidebarEvent)}
                  </ul>
                </div>
              </div>
            )
          }
        
          handleWeekendsToggle = () => {
            this.setState({
              weekendsVisible: !this.state.weekendsVisible
            })
          }
        
          handleDateSelect = (selectInfo: DateSelectArg) => {
            let title = prompt('Please enter a new title for your event')
            let calendarApi = selectInfo.view.calendar
        
            calendarApi.unselect() // clear date selection
        
            if (title) {
              calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
              })
            }
          }
        
          handleEventClick = (clickInfo: EventClickArg) => {
            if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
              clickInfo.event.remove()
            }
          }
        
          handleEvents = (events: EventApi[]) => {
            this.setState({
              currentEvents: events
            })
          }
    };

    function renderEventContent(eventContent: EventContentArg) {
        return (
          <>
            <b>{eventContent.timeText}</b>
            <i>{eventContent.event.title}</i>
          </>
        )
      }
      
      function renderSidebarEvent(event: EventApi) {
        return (
          <li key={event.id}>
            <b>{formatDate(event.start!, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
            <i>{event.title}</i>
          </li>
        )
      }