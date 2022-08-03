const { request } = require("express");
const Express = require("express");
const Joi = require("joi");
const { indexOf } = require("underscore");
const router = Express.Router();

const slots = [];

router.get("/", (req, res) => {
  res.send(slots);
});

router.post("/", (req, res) => {
  const new_class = {
    id: slots.length + 1,
    class_name: req.body.class_name,
    capacity: parseInt(req.body.capacity),
    enrolled: [],
    waitinglist: [],
  };

  slots.push(new_class);
  res.send(slots);
});

router.put("/:class_name", (req, res) => {
  const course = slots.find((s) => s.class_name === req.params.class_name);
  if (!course) {
    res.status(404).send("requested course was not found");
    return;
  }
  if (course.enrolled.length == course.capacity) {
    course.waitinglist.push(req.body.user);
    res.send(req.body.user + " has been added to waiting list");
    return;
  } else {
    course.enrolled.push(req.body.user);
    res.send(req.body.user + " has been added to enrolled");
  }
});

router.delete("/:class_name", (req, res) => {
  const course = slots.find((s) => s.class_name === req.params.class_name);
  if (!course) {
    res.status(404).send("requested course was not found");
    return;
  }
  const user_check = course.enrolled.find((u) => u === req.body.user);
  if (!user_check) {
    res.status(404).send(req.body.user + " has not not enrolled to the class");
    return;
  }
  const index = course.enrolled.indexOf(req.body.user);
  if (index == -1) {
    res.status(404).send(req.body.user + " has not not enrolled to the class");
    return;
  }
  course.enrolled.splice(index, 1);
  if (course.waitinglist.length > 0) {
    course.enrolled.push(course.waitinglist[0]);
    course.waitinglist.splice(0, 1);
    res.send(
      "user has been removed and person from waiting list has been moved to enrolled "
    );
    return;
  }
  res.send("user has been removed from the enrolled course");
});
module.exports = router;
