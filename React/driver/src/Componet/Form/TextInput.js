import { useEffect, useState } from 'react'

const TextInput = ({model,id,description,validation,type}) => {

    const [value,setValue]=useState(model[id])

    useEffect(()=>{
        setValue(model[id]);
    },[model,id]);

    const handleChange = (e) => {
        setValue(e.target.value);
        model[id]=e.target.value;
    }

    return (<>
        <input  {...validation} id={id} value={value} placeholder={description} type={type} onChange={handleChange} />
    </>)
}

export default TextInput;