const { Router } = require("express");
const getCountries = require("../handlers/countriesHandlers/getCountries");
const getCountryById = require("../handlers/countriesHandlers/getCountryById");
const createActivity = require("../handlers/activitiesHandlers/createActivity");
const getActivities = require("../handlers/activitiesHandlers/getActivities")

const router = Router();

router.get("/countries", getCountries)
router.get("/countries/:id", getCountryById)
router.get("/activities", getActivities)
router.post("/activities", createActivity)

module.exports = router;
