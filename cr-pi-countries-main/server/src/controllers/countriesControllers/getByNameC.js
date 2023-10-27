const {Country} = require("../../db")
const {Op} = require("sequelize")

const getByName = async (name)=>{
    const results = await Country.findAll({
        where:{ commonName: { [Op.iLike]: `%${name}%` } }
    })
    return results;
}

module.exports = getByName;