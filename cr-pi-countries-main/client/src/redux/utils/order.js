const order = (filteredCountries,order)=>{
    switch(order){
        case "a-z":
            const a_z = filteredCountries.sort((a,b)=>{
                const nameA = a.commonName.toLowerCase()
                const nameB = b.commonName.toLowerCase()
                if(nameA < nameB){
                    return -1
                }
                if(nameB<nameA){
                    return 1
                }
                else{
                    return 0
                }
            })
            return a_z;
        
        case "z-a": 
            const z_a = filteredCountries.sort((a,b)=>{
                const nameA = a.commonName.toLowerCase()
                const nameB = b.commonName.toLowerCase()
                if(nameB < nameA){
                    return -1
                }
                if(nameA<nameB){
                    return 1
                }
                else{
                    return 0
                }
            });
            return z_a;

        case "ascending":
            const ascending = filteredCountries.sort((a,b)=>{
                const popA = a.population
                const popB = b.population
                if(popA < popB){
                    return -1
                }
                if(popB < popA){
                    return 1
                }
                else{
                    return 0
                }
            });
            return ascending;

        case "descending":
            const descending = filteredCountries.sort((a,b)=>{
                const popA = a.population
                const popB = b.population
                if(popA < popB){
                    return 1
                }
                if(popB < popA){
                    return -1
                }
                else{
                    return 0
                }
            });
            return descending;
            

        default: return filteredCountries 
    }
}

export default order;