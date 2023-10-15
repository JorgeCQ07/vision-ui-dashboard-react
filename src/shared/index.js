import APIRequest from "../utils/axios.config";

export function createEvent(eventTemplate) {
  return APIRequest.post('/calendar/create', eventTemplate);
}

export function getEvents() {
  return APIRequest.get('/calendar/events/');
}

export function getEvent(eventId) {
  return APIRequest.get(`/calendar/event/${eventId}`);
}

export function deleteEvent(eventId) {
  return APIRequest.delete(`/calendar/delete/${eventId}`);
}

export function updateEvent(eventId, eventTemplate) {
  return APIRequest.put(`/calendar/update/${eventId}`, eventTemplate);
}
