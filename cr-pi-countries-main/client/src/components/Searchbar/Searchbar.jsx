import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/actions";

const SearchBar = ()=>{

    const dispatch = useDispatch()
    const [input,setInput] = useState("")

    const handleInput = (event)=>{
        setInput(event.target.value)
    }

    const handleClick = ()=>{
        if(input !== ""){
            dispatch(search(input))
            setInput("")
        }
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleInput} onKeyDown={(event)=>{if(event.key === "Enter")return handleClick();}}></input>
            <button onClick={handleClick}>Buscar</button>
        </div>
    )
}

export default SearchBar;