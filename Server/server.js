const express = require('express')
const app = express()
const port = 3000

app.get('/api/students', (req, res) => {
  res.json([{
    id: 1,
    name: 'Jomiloju',
    course: 'Software Engineering',
    level: '400',
    school: 'Oxford'
  },{
    id: 2,
    name: 'Daniel',
    course: 'Electrical Engineering',
    level: '100',
    school: 'University of Lagos'
  }])
})

// POST -> api/students/add
// UPDATE

// Designing specifications for our booking application.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})