import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function fetchtasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
    }, [])
    
    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasks.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}