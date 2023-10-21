const getActivitiesC = require("../../controllers/activitiesControllers/getActivitiesC")

const getActivities = async (req,res)=>{
    try {
        const activities = await getActivitiesC()
        return res.status(203).json(activities)
    } catch (error) {
        return res.status(403).json(error.message)
    }
}

module.exports = getActivities;