const {Activity} = require("../../db")

const getActivitiesC = async ()=>{
    const activitiesList = await Activity.findAll()
    return activitiesList
}

module.exports = getActivitiesC;