import { useEffect, useState } from 'react'

const TextBar = ({model,id,description,validation,type}) => {

    const [value,setValue]=useState(model[id])

    useEffect(()=>{
        setValue(model[id]);
    },[model,id]);

    const handleChange = (e) => {
        setValue(e.target.value);
        model[id]=e.target.value;
    }

    return (<>
    <textarea placeholder={description} id={id} value={value} onChange={handleChange} {...validation}/>
    </>)
}

export default TextBar;