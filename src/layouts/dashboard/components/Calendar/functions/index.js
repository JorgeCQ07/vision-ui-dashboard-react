export const convertToFullCalendarEvent = (apiEvent) => {
  return {
    id: apiEvent.eventId,
    title: apiEvent.summary,
    start: apiEvent.start.dateTime,
    end: apiEvent.end.dateTime,
    color: 'green',
    extendedProps: {
      location: "",
      description: apiEvent.description,
      attendees: apiEvent.attendees,
    }
  }
}

export const convertToApiEvents = (fullCalendarEvent) => {
  return {
    eventId: fullCalendarEvent.id,
    summary: fullCalendarEvent.title,
    location: "",
    description: fullCalendarEvent.extendedProps.description,
    start: {
      dateTime: fullCalendarEvent.start,
      timeZone: "America/Costa_Rica"
    },
    end: {
      dateTime: fullCalendarEvent.end,
      timeZone: "America/Costa_Rica"
    },
    attendees: fullCalendarEvent.extendedProps.attendees,
  }
}

export function convertToApiEvent(item) {
  return {
    eventId: item.id,
    summary: item.summary || "",
    location: item.location || "",
    description: item.description || "",
    start: {
      dateTime: item.start && item.start.dateTime ? new Date(item.start.dateTime) : new Date(),
      timeZone: item.start ? item.start.timeZone : "America/Costa_Rica"
    },
    end: {
      dateTime: item.end && item.end.dateTime ? new Date(item.end.dateTime) : new Date(),
      timeZone: item.end ? item.end.timeZone : "America/Costa_Rica"
    },
    attendees: item.attendees ?
      item.attendees
        .filter((attendee) => attendee && attendee.email)
        .map((attendee) => ({ email: attendee.email }))
      : [""]
  };
}
