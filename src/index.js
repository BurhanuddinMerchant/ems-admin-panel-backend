//setting up express
const express = require("express");

// start up instance of express to run as our app
const app = new express();

// setting up the port
const port = process.env.PORT || 3000;

// used to parse the json object in req.body
app.use(express.json());

//import the required routers
const AdminRouter = require("./routers/Admin");
const EventRouter = require("./routers/Events");
const ParticipantRouter = require("./routers/Participants");
const StatisticsRouter = require("./routers/Statistics");

// use the imported routers
app.use(AdminRouter);
app.use(EventRouter);
app.use(ParticipantRouter);
app.use(StatisticsRouter);

//listen to the port wherever the server is set
app.listen(port);

//pushed form the local submaster branch
