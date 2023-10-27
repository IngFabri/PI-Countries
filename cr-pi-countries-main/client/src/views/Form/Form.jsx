import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Form.module.css";
import { createActivity } from "../../redux/actions";

const validate1 = (target,value)=>{
    switch(target){
        case "name":
            const nameRegex = /^[A-Za-z\s-]+$/
            if(value.length < 10 || value.length > 50 || !nameRegex.test(value)){
                return "Please enter 10-50 characters, using letters only."
            }
            return "";
        
        case "description": 
            if(value.length < 50){
                return "Description must be at least 50 characters."
            }
            return "";            
    }
}

const validate2 = (values,errors)=>{
    if((errors.name === "" && 
    errors.description === "") 
    && (values.difficulty !== null 
        && values.duration !== null 
        && values.season !== null 
        && values.countries.length > 0)) return true
    console.log(errors.name,errors.description,values.difficulty,values.duration,values.season,values.countries);
    return false
}

const Form = ()=>{

    const dispatch = useDispatch()
    const countryNames = useSelector(({countries}) => countries.map(country => country.commonName)).sort();
    const difficultyLevels = [1,2,3,4,5]
    const seasons = ["Spring", "Summer", "Autumn", "Winter"]

    const [values,setValues] = useState({
        name:"",
        difficulty: null,
        duration: null,
        season: null,
        description: "",
        countries: []
    })

    const [errors,setErrors] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        description:"",
        countries:""
    })

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        if(name !== "countries"){
            setValues({...values,[name]:value})
            setErrors({...errors, [name]:validate1(name,value)})
        }else{
            !values.countries.includes(value) && setValues({...values,countries:[...values.countries,value]})
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        if(validate2(values,errors)){
            dispatch(createActivity(values))
        }else{
            alert("Debe completar todos los campos primero")
        }
    }
    const handleDelete = ({target})=>{
        const newValues = values.countries.filter(country => country !== target.name)
        setValues({...values,countries:newValues})
    }

    return (
        <div className={styles.container}>
            <h1>Activity creation form</h1>
            <form>

                <label>Name: </label>{errors.name !== "" && <p>{errors.name}</p>}
                <input type="text" name="name" onChange={handleChange} value={values.name}/>
                <br/>

                <label>Difficulty:</label>
                {difficultyLevels.map((level) => (
                    <label key={level}>
                    <input
                      type="radio"
                      name="difficulty"
                      value={level}
                      onChange={handleChange}
                    />
                    {level}
                  </label>
                ))}
                <br/>

                <label>Duration: (hours)  </label>
                <input type="number" name="duration" onChange={handleChange}/>
                <br/>

                <label>Season:</label>
                <select name="season" onChange={handleChange}>
                    <option value="none">None</option>
                    {seasons.map(season => (
                        <option value={season} key={season}>{season}</option>
                    ))}
                </select>
                <br/>

                <label>Description:</label>{errors.description !== "" && <p>{errors.description}</p>}
                <textarea name="description" onChange={handleChange} value={values.description}></textarea>
                <br/>

                <label>Countries: </label>
                <select name="countries" onChange={handleChange}>
                    <option value="None" >None</option>
                    {countryNames.map(name => (
                        <option value={name} key={name}>{name}</option>
                    ))}
                </select>
                <ul>
                    {values.countries.map(country=><li key={country}>{country}<button onClick={handleDelete} name={country}>X</button></li>)}
                </ul>
                <br/>

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form;