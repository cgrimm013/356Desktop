const express = require('express')
var myParser = require("body-parser");
const app = express()
app.use(myParser.urlencoded({extended : true}));
app.use(myParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = 8181

let assignments = [{
  id: 0,
  type: "Reading",
  class: "CS 428",
  assignmentDay: {
    day: 1, //1-31, according to the month
    month: "February",
    year: "2019"
  },
  dueDate: {
    day: 2,
    month: "February",
    year: "2019"
  },
  descr: "Read the mythical man month chapters 16-19 by next class."
},
{
  id: 1,
  type: "Project",
  class: "CS 356",
  assignmentDay: {
    day: 4, //1-31, according to the month
    month: "February",
    year: "2019"
  },
  dueDate: null, //dueDate is optional
  descr: "Finish writing the backend server by the end of today"
}]

let classes = [{
  id: 2,
  name: "CS 428"
},
{
  id: 3,
  name: "CS 404"
},
{
  id: 4,
  name: "CS 356"
}]

let id = 4;

const createAssignment = (req) => {
  id = id + 1; //increment the id
  let newAssignment = {
    id: id,
    type: req.body.type,
    class: req.body.class,
    assignmentDay: req.body.assignmentDay,
    dueDate: req.body.dueDate, //dueDate is optional
    descr:  req.body.descr
  }
  return newAssignment;
}

app.get('/api/assignments', (req, res) => {
  res.send(assignments)
})

app.post('/api/assignments', (req, res) => {
  let newAssignment = createAssignment(req);
  assignments.push(newAssignment);
  //res.send(newAssignment);
  res.send(assignments);
})

app.delete('/api/assignments/:id', (req, res) => {
  let deleteID = parseInt(req.params.id);
  let removeIndex = assignments.map(assignment => { return assignment.id; }).indexOf(deleteID);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that assignment doesn't exist");
    return;
  }
  assignments.splice(removeIndex, 1);
  //res.sendStatus(200);
  res.send(assignments);
})

app.get('/api/classes', (req, res) => {
  res.send(classes)
})

app.post('/api/classes', (req, res) => {
  id = id + 1;
  let newClass = {
    id: id,
    name: req.body.name
  };
  classes.push(newClass);
  //res.send(newClass);
  res.send(classes);
})

app.delete('/api/classes/:id', (req, res) => {
  let deleteID = parseInt(req.params.id);
  let removeIndex = classes.map(aClass => { return aClass.id; }).indexOf(deleteID);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that class doesn't exist");
    return;
  }
  classes.splice(removeIndex, 1);
  //res.sendStatus(200);
  res.send(classes);
})

app.listen(port, () => console.log(`Desktop server app listening on port ${port}!`))
