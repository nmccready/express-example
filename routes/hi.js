export default (app) => {
  app.get('/hi', (req, resp) => {
    resp.send('hi');
  });
};
