import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [calendar, setCalendar] = useState<{ id: string; day: string }[][]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/calendar")
      .then((response) => response.json())
      .then((data) => {
        setCalendar(data.daysOfTheWeek);
    } );
  }, []);
  return (
    <div>
      <h1>Calendar</h1>
      <ul>
        {calendar.map((month) => (
          month.map((item) => (
            <li key={item.id}>{item.day}</li>
          ))
        ))}
      </ul>
    </div>
  );
}
export default App;
