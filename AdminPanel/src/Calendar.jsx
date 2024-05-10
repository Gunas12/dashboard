import React, { useState } from 'react';
import events from './data/event.json';
import './Calendar.css';

function Calendar() {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const getDaysInMonth = (month, year) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysArray = [];
        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push(new Date(year, month, i));
        }
        return daysArray;
    };

    const getEventsForDay = (date) => {
        const dateString = date.toISOString().split('T')[0];
        return events.filter(event => {
            const eventStartDateString = new Date(event.start).toISOString().split('T')[0];
            const eventEndDateString = new Date(event.end).toISOString().split('T')[0];
            return dateString >= eventStartDateString && dateString <= eventEndDateString;
        });
    };
    

    const handleMonthChange = (direction) => {
        if (direction === 'prev') {
            setSelectedMonth(prevMonth => (prevMonth === 0 ? 11 : prevMonth - 1));
            setSelectedYear(prevYear => (selectedMonth === 0 ? prevYear - 1 : prevYear));
        } else if (direction === 'next') {
            setSelectedMonth(prevMonth => (prevMonth === 11 ? 0 : prevMonth + 1));
            setSelectedYear(prevYear => (selectedMonth === 11 ? prevYear + 1 : prevYear));
        }
    };

  
    const eventsForMonth = getDaysInMonth(selectedMonth, selectedYear).map(day => {
        const eventsForDay = getEventsForDay(day);
        return { day, events: eventsForDay };
    });

    return (
        <main className="main-container">
            <div className="main-title">
                <h3>Calendar</h3>
            </div>
            <div className="main-cards">
                <div className="calendar-header">
                    <button onClick={() => handleMonthChange('prev')}>&#8249;</button>
                    <h4>{new Date(selectedYear, selectedMonth).toLocaleDateString('default', { month: 'long', year: 'numeric' })}</h4>
                    <button onClick={() => handleMonthChange('next')}>&#8250;</button>
                </div>
                <div className="calendar-grid">
                    {eventsForMonth.map(({ day, events }) => (
                        <div key={day.toISOString()} className="calendar-day">
                            <span>{day.getDate()}</span>
                            {events.map((event, index) => (
                                <div key={index} className="event-badge">{event.name}</div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Calendar;
