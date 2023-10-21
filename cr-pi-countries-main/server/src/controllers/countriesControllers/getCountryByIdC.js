const {Country,Activity} = require("../../db")


const getCountryByIdC = async (id)=>{
    const country = await Country.findOne({where:{id:id},includes:Activity}).then((country) => country === null? {} : country.dataValues)
    return country
}

module.exports = getCountryByIdC;