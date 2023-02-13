import { useEffect, useState } from 'react'


const NumberInput = ({model,id,description,validation,type}) => {

    const [value,setValue]=useState(model[id])

    useEffect(()=>{
        setValue(model[id]);
    },[model,id]);

    const handleChange = (e) => {
        setValue(e.target.value);
        model[id]=Number(e.target.value);
    }

    return (<>
        <input placeholder={description} {...validation}  id={id} value={value} type={type} onChange={handleChange} />
    </>)
}

export default NumberInput;