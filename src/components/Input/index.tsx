import { ChangeEvent, useState } from "react";

export const Input = () => {
    const [name, setName] = useState("");
    const [size, setSize] = useState(0);

    const handleName=(event: ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value)
    }

    const handleSize=(event: ChangeEvent<HTMLInputElement>)=>{
        setSize(parseInt(event.target.value))
    }
    
    

    return(
        <div>
        <form>
        <input type="text" placeholder="imię" onChange={handleName} />
        <input type="number" placeholder="numer buta" onChange={handleSize} />
        <button type="submit">Wyślij</button>
        </form>
        <span>Imię: {name}</span>
        <span>Numer buta: {size}</span>
        </div>
    )
}