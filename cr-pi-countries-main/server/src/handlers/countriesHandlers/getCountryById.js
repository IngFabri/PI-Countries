const getCountryByIdC = require("../../controllers/countriesControllers/getCountryByIdC")

const getCountryById = async (req,res)=>{
    const {id} = req.params;
    try {
        const response = await getCountryByIdC(id)
        if(Object.keys(response).length === 0){
            throw Error("Pais no encontrado")
        }
        return res.status(201).json(response)
    } catch (error) {
        return res.status(401).json(error.message)
    }
}

module.exports = getCountryById;