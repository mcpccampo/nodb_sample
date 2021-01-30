const data = require('./data.json');
let id = data.length + 1;

module.exports = {
  getShows: (req, res) => {
    res.status(200).send(data);
  },
  addShow: (req, res) => {
    const { year, title, summary, poster, streamingService, watched, seasons } = req.body;
    const body = {
      year,
      title,
      summary,
      poster,
      streamingService,
      watched,
      seasons,
      id,
    };
    data.push(body);
    id++;
    res.status(200).send(data);
  },
  updateShow: (req, res) => {
    const { id } = req.params;
    const { watched } = req.body;

    const foundIndex = data.findIndex((element) => element.id === +req.id);
    if (foundIndex === -1) {
      res.status(404).send('show not found');
    } else {
      data[foundIndex] = { ...data[foundIndex], watched: watched };
      res.status(200).send(data[foundIndex]);
    }
  },
};
