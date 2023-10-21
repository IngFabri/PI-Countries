const {Country} = require("../../db")
const {Op} = require("sequelize")

const getByName = async (name)=>{
    const results = await Country.findAll({
        where:{
            [Op.or]:[
                { officialName: { [Op.iLike]: `%${name}%` } },
                { commonName: { [Op.iLike]: `%${name}%` } },
            ]
        }
    })
    if(results.length === 0) throw Error(`No se encuentran paises con el nombre ${name}`)
    return results;
}

module.exports = getByName;