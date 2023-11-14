import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { convertToApiEvent, convertToFullCalendarEvent, convertToApiEvents } from './functions/index';
import EventModal from '../Modal/index'
import { getEvents, createEvent, updateEvent, deleteEvent } from '../../../../shared/index';
import '../../../../assets/css/calendar-style.css'

function Calendar() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStart, setSelectedStart] = useState('');
  const [selectedEnd, setSelectedEnd] = useState('');
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await getEvents();
      const apiEvents = response.data.map(convertToApiEvent);
      const fullCalendarEvents = apiEvents.map(convertToFullCalendarEvent);
      setEvents(fullCalendarEvents);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDateSelect = (selectInfo) => {
    let start = selectInfo.startStr;
    let end = selectInfo.endStr;
    const currentView = selectInfo.view.type;
    if (currentView === 'dayGridMonth') {
      end = new Date(new Date(end).getTime() - 60000).toISOString();
    }
    const multiDay = start.split('T')[0] !== end.split('T')[0];
    setSelectedStart(start);
    setSelectedEnd(end);
    setIsMultiDay(multiDay);
    setIsModalOpen(true);
    setSelectedEvent(null);
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setIsModalOpen(true);
  };

  const handleEventSubmit = async (event) => {
    if (event.id) {
      try {
        const apiEvent = convertToApiEvents(event);
        await updateEvent(apiEvent.eventId, apiEvent);
        setEvents(prevEvents => {
          return prevEvents.map(e => e.id === event.id ? event : e);
        });
      } catch (err) {
        console.error("An error occurred while submitting the event:", err);
      }
    } else {
      try {
        const apiEvent = convertToApiEvents(event);
        await createEvent(apiEvent);
        setEvents([]);
        await fetchEvents();
      } catch (err) {
        console.error("An error occurred while submitting the event:", err);
      }
    }
    setIsModalOpen(false);
  };

  const handleEventDelete = async () => {
    try {
      if (selectedEvent && selectedEvent.id) {
        await deleteEvent(selectedEvent.id);
        setEvents(prevEvents => prevEvents.filter(e => e.id !== selectedEvent.id));
        setIsModalOpen(false);
      }
    } catch (err) {
      console.error("An error occurred while deleting the event:", err);
    }
  };

  const defaultTimeStart = "09:00";
  const defaultTimeEnd = "10:00";
  const timeStart = selectedStart.split('T')[1]?.substr(0, 5) || defaultTimeStart;
  const timeEnd = selectedEnd.split('T')[1]?.substr(0, 5) || defaultTimeEnd;

  return (
    <div className='calendar-container'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        selectable={true}
        selectMirror={false}
        dayMaxEvents={true}
        weekends={true}
        events={events}
        allDaySlot={false}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />
      {isModalOpen &&
        <EventModal
          start={selectedStart}
          end={selectedEnd}
          isMultiDay={isMultiDay}
          timeStart={timeStart}
          timeEnd={timeEnd}
          selectedEvent={selectedEvent}
          onSubmit={handleEventSubmit}
          onDelete={handleEventDelete}
          onClose={() => setIsModalOpen(false)}
        />
      }
    </div>
  );
}

export default Calendar;
