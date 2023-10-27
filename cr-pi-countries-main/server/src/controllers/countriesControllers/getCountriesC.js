const {Country,Activity} = require("../../db")

const getCountriesC = async ()=>{
    const countries = await Country.findAll({include:Activity})
    return countries
}

module.exports = getCountriesC