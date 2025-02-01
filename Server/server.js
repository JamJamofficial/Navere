const express = require('express')
const app = express()
const port = 3000
app.get('/api/calendar', (req, res) => {
  return res.json({daysOfTheWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})