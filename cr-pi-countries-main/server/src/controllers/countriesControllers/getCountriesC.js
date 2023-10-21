const {Country} = require("../../db")

const getCountriesC = async ()=>{
    return await Country.findAll()
}

module.exports = getCountriesC