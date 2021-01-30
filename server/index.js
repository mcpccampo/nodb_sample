const express = require('express');
const PORT = 3050;
const showCtrl = require('./showCtrl');

// setup server
const app = express();
app.use(express.json());

// endpoint
app.get('/api/shows', showCtrl.getShows);
app.post('/api/shows',showCtrl.addShow)
app.post('/api/show/:id', showCtrl.updateShow)

// run server
app.listen(PORT, () => {
  console.clear();
  console.log(`App Running on Port ${PORT}`);
});
