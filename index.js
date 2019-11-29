const app = require("express")();

app.use((req, res, next) => {
  res.status(200).send("nice one");
});

app.listen(8000);
