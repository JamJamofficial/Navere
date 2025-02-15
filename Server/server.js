const express = require('express')
const cors = require("cors")
const app = express()
const { JsonCalendar } = require('json-calendar')
const calendar = new JsonCalendar()
const port = 3000
app.use(cors())
app.get('/api/calendar', (req, res) => {
  const daysOfTheWeek = calendar.weeks;
  return res.json({daysOfTheWeek: daysOfTheWeek})

})
app.listen(port, () => {
  console.log(`Navere server is listening on port ${port}`)
})

app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body;

  if (!title) {
      return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = {
      id: daysOfTheWeek.now(), 
      title,
      description: description || '',
      createdAt: new daysOfTheWeek()
  };

  res.status(201).json({ message: 'Task created successfully', task: newTask });
});

