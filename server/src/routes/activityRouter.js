const { Router } = require("express");
const { getActivityHandler, postActivityHandler } = require("../handlers/activityHandlers");
const activityRouter = Router();

activityRouter.get("/", getActivityHandler);
activityRouter.post("/",postActivityHandler);
module.exports = activityRouter
