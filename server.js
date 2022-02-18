const jsonServer = require("json-server");
const server = jsonServer.create();
let match = {
  game: [
    { id: 1, lead: 455 },
    { id: 3, lead: 34 },
    { id: 9, lead: 775 },
  ],
};
const router = jsonServer.router(match);
const middlewares = jsonServer.defaults();

setInterval(() => {
  match.game.forEach((game, index) => {
    if (index === 0) {
      game.lead += 6;
      return;
    } else if (index === 1) {
      game.lead += 2;
      return;
    } else {
      game.lead += 8;
      return;
    }
  });
}, 1000);
setTimeout(() => {
  match.game.push({ id: 6, lead: 475 });
}, 5000);
setInterval(() => console.log(match), 2000);

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
server.get("/match", (req, res) => {
  res.send(match);
});
