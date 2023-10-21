const {Activity} = require("../../db")

const getActivitiesC = async ()=>{
    const activitiesList = await Activity.findAll()
    if(activitiesList.length === 0) throw Error("No se han creado actividades al momento")
    return activitiesList
}

module.exports = getActivitiesC;