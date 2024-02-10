import React from "react";
import "./Schedule2.css";
import Navbar from "./NavBar";
import {
    EventApi,
    DateSelectArg,
    EventClickArg,
    EventContentArg,
  } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';


  
    interface ScheduleAppState {
        weekendsVisible: boolean;
        currentEvents: EventApi[];
    }

    window.onload = function(){
      let list = document.getElementById('Container') as HTMLElement;
      const showButton = document.getElementById('recur');
      const hideButton = document.getElementById('closemodal');
      
      new Draggable(list, {
        itemSelector: ".fc-event",
        eventData: function(eventEl) {
          let title = eventEl.getAttribute("title");
          let id = eventEl.getAttribute("data");
          return {
            title: title,
            id: id
          };
        }
      })

      showButton!.addEventListener("click", () => {
        const dialog = (document.getElementById('modal') as HTMLDialogElement);
         dialog.showModal();
        
      });  

      hideButton!.addEventListener("click", () => {
        const dialog = (document.getElementById('modal') as HTMLDialogElement);
         dialog.close();
        
      });  
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
                              droppable={true}
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
                    <h2>Load Name({this.state.currentEvents.length})</h2>
                  </div>
                  <div id='Container' className='Schedule-sidebar-section'>
                      {this.state.currentEvents.map(event => (
                      <div id ="allevents" className="fc-event" title={event.title} key={event.id}>
                        {event.title}
                      </div>
                      ))}
                  </div>
                  <button className='recur' id='recur'>Add Recurring Event
                  </button>
                  <dialog id="modal" className="modal">
                      <span className = "Title">Add a Recurring Event</span>
                      <button className="exit" id ="closemodal">X</button>
                      <div className="info">
                          <div className="q1">Please select what type of load this is: 
                            <select className="loads">
                              <option value="Item1">Laundry</option>
                              <option value="Item2">Dishes</option>
                            </select>
                          </div>
                          <div className="q2">Please enter what time you want the load to start:
                           <input className ="input2" type="time"></input>
                           </div>
                          <div className="q3">Please enter what time you want the load to end: 
                          <input className ="input3" type="time"></input>
                          </div>
                          <div className="q4">Please specify what day you want the event to run on</div>
                          <div className="day">
                            <div>
                                <label>Mon</label>
                                <label>Tue</label>
                                <label>Wed</label>
                                <label>Thu</label>
                                <label>Fri</label>
                                <label>Sat</label>
                                <label>Sun</label>
                            </div>
                            <div>
                                <input value="mon" type="checkbox"></input>
                                <input value="tue" type="checkbox"></input>
                                <input value="wed" type="checkbox"></input>
                                <input value="thu" type="checkbox"></input>
                                <input value="fri" type="checkbox"></input>
                                <input value="sat" type="checkbox"></input>
                                <input value="sun" type="checkbox"></input>
                            </div>
                          </div>
                          <div className ="q5">Pleasy specify if you want the event to repeat weekly or monthly</div>
                          <label className="daily">Daily</label><input value="day" type="checkbox"></input>
                          <label className="monthly">Monthly</label><input value="month" type="checkbox"></input>
                      </div>
                  </dialog>

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
              clickInfo.event.remove;
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