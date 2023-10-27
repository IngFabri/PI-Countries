const filter = (countries,continent,difficulty)=>{
    const filterByContinent = [];
    countries.forEach(country => {
        if(country.continent === continent){
            filterByContinent.push(country)
        }
    })
    return continent === "all"? countries : filterByContinent
}

export default filter;