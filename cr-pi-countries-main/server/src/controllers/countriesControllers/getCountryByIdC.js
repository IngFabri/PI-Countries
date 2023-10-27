const {Country,Activity} = require("../../db")


const getCountryByIdC = async (id)=>{
    const country = await Country.findOne({where:{id:id},include:Activity}).then((country) => {
        return country === null? {} : country.dataValues
    })
    return country
}

module.exports = getCountryByIdC;