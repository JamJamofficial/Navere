import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function fetchcalendar() {
    const [calendar, setCalendar] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/calendar')
            .then(response => response.json())
            .then(data => setCalendar(data))
    }, [])

    return (
        <div>
            <h1>Calendar</h1>
            <ul>
                {calendar.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}