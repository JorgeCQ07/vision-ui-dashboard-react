import React, { useState, useEffect } from 'react';
import '../../../../assets/css/modal-style.css';

function EventModal({ start, end, isMultiDay, timeStart, timeEnd, selectedEvent, onSubmit, onDelete, onClose }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [startTime, setStartTime] = useState(timeStart);
    const [endTime, setEndTime] = useState(timeEnd);
    const [startDate, setStartDate] = useState(start.split('T')[0]);
    const [endDate, setEndDate] = useState(end.split('T')[0]);
    const [isMultiDays, setIsMultiDay] = useState(start !== end);
    const [eventColor, setEventColor] = useState('green');

    useEffect(() => {
        if (selectedEvent) {
            setTitle(selectedEvent.title);
            setDescription(selectedEvent?.extendedProps?.description);
            setEmail(selectedEvent?.extendedProps?.attendees[0].email);
            setEventColor(selectedEvent.color || 'green');

            if (selectedEvent.start && selectedEvent.end) {
                const startEventDate = new Date(selectedEvent.start);
                const endEventDate = new Date(selectedEvent.end);
                const startHourString = `${String(startEventDate.getHours()).padStart(2, '0')}:${String(startEventDate.getMinutes()).padStart(2, '0')}`;
                setStartTime(startHourString);
                
                const eventIsMultiDay = startEventDate.toISOString().split('T')[0] !== endEventDate.toISOString().split('T')[0];
                setIsMultiDay(eventIsMultiDay);
                const endHourString = `${String(endEventDate.getHours()).padStart(2, '0')}:${String(endEventDate.getMinutes()).padStart(2, '0')}`;
                setEndTime(endHourString);

                setStartDate(startEventDate.toISOString().split('T')[0]);
                if (eventIsMultiDay) {
                    endEventDate.setDate(endEventDate.getDate());
                    setEndDate(endEventDate.toISOString().split('T')[0]);
                } else {
                    setEndDate(startEventDate.toISOString().split('T')[0]);
                }
            } else {
                setStartDate(start.split('T')[0]);
                setEndDate(end.split('T')[0]);
                setStartTime(timeStart);
                setEndTime(timeEnd);
            }
        }
    }, [selectedEvent, start, end, timeStart, timeEnd]);

    const handleSubmit = () => {
        if (!title || !description || !email || !startTime || !endTime) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        const startDateTime = new Date(`${startDate}T${startTime}`);
        const endDateTime = isMultiDays ? new Date(`${endDate}T${endTime}`) : new Date(`${startDate}T${endTime}`);

        if (startDateTime >= endDateTime) {
            alert('La hora de fin debe ser posterior a la hora de inicio.');
            return;
        }

        const id = selectedEvent ? selectedEvent.id : "";
        const location = selectedEvent ? selectedEvent.extendedProps?.location : "";

        onSubmit({
            id: id,
            title: title,
            start: startDateTime,
            end: endDateTime,
            color: eventColor,
            extendedProps: {
                location: location,
                description,
                attendees: [{ email }]
            }
        });
        onClose();
    }

    return (
        <div className="modal-container">
            <div className="modal">
                <div>
                    <label>
                        Título
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Descripción
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Email
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Hora de inicio
                        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Hora de fin
                        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Fecha de inicio
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </label>
                </div>
                {isMultiDays && (
                    <div>
                        <label>
                            Fecha de fin
                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </label>
                    </div>
                )}
                <div>
                    <label>
                        Color del evento:
                        <input 
                            type="color" 
                            value={eventColor} 
                            onChange={(e) => setEventColor(e.target.value)} 
                        />
                    </label>
                </div>
                <button onClick={handleSubmit}>{selectedEvent ? 'Actualizar evento' : 'Agregar evento'}</button>
                {selectedEvent && <button onClick={onDelete} style={{ marginLeft: '10px' }}>Eliminar</button>}
                <button onClick={onClose} style={{ marginLeft: '10px' }}>Cerrar</button>
            </div>
        </div>
    );
}

export default EventModal;
