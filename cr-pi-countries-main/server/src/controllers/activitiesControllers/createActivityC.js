const {Activity,Country} = require("../../db")

const createActivityC = async (activity)=>{
    const {name,difficulty,duration,season,description,countries} = activity;
    if(!name || !difficulty || !duration || !season || !description) throw Error("datos insuficientes para crear la actividad")
    const createdActivity = await Activity.create({name,difficulty,duration,season,description})
    for(let i=0; i<countries.length; i++){
        Country.findOne({where:{officialName:countries[i]},attributes:["id"]})
        .then(({dataValues})=>dataValues.id)
        .then(id => createdActivity.addCountries(id))
    }
    
    return createdActivity
}

module.exports = createActivityC;