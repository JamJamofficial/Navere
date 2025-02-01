const express = require('express')
const app = express()
const { JsonCalendar } = require('json-calendar')
const calendar = new JsonCalendar()
const port = 3000
app.get('/api/calendar', (req, res) => {
  const daysOfTheWeek = calendar.weeks;
  return res.json({daysOfTheWeek: daysOfTheWeek})

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})