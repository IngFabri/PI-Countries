const dbFill = require("../../controllers/dbFill")
const getCountriesC = require("../../controllers/countriesControllers/getCountriesC")
const getByName = require("../../controllers/countriesControllers/getByNameC")

const getCountries = async (req,res)=>{
    try {
        const {name} = req.query;
        const response = name? await getByName(name) : await getCountriesC()
        return res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = getCountries;