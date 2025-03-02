﻿const express = require('express')
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