import { useContext } from "react";
import {TextInput,NumberInput,TextBar,SelectInput} from "../../Componet/Form/Index";
import { DriverContex } from "../../Store/Context/DriverContex";

const DriverForm = () => {
  const {status,regester, selectiv}=useContext(DriverContex)

  return (
    <form action="../index.php">
      <TextInput model={selectiv} description=" Your Name:" type="text" id="DriverName"/>
      <TextInput model={selectiv} description=" Your FullName:" type="text" id="FullName"/>
      <TextInput model={selectiv} description=" Your Email:" type="email" id="email"/>
      <TextInput model={selectiv} description=" how old are you?" type="date" id="year"/>
      <NumberInput model={selectiv} description=" your number phone:" type="tel" id="tell"/>
      <TextBar model={selectiv} description="Write something.." id="capshen" />
      <SelectInput model={selectiv} description=" your number phone:" id="statuseDriver" list={status} text="statusName"/>
      <button type="button" className="btn danger" onClick={()=>regester()}>Regester</button>
    </form>
  );
};
export default DriverForm;
