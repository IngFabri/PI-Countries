const axios = require("axios")
const {Country} = require("../db")

const dataFilter = (data)=>{
    const result = [];
    data.forEach(({name,cca3,capital,subregion,area,flags,continents,population}) => result.push({
        id: cca3,
        commonName: name.common,
        officialName: name.official,
        image: [flags.png, flags.svg],
        continent: continents[0],
        capital: capital === undefined? "Unknown": capital[0],
        subregion: subregion === undefined? "Unknown" : subregion,
        area: area,
        population:population
    }))
    return result;
}

const dbFill = async ()=>{
    try {
        const apiResponse = await axios("http://localhost:5000/countries").then(response => response.data)
        
        let filteredData = dataFilter(apiResponse)
        
        return filteredData.forEach(country => Country.create(country))
        
    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = dbFill;
