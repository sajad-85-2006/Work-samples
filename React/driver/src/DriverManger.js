import { useContext, useState } from "react";
import Modal from "../../Componet/Modal";
import { DriverContex } from "../../Store/Context/DriverContex";
import DriverCodre from "./DriverCodre";
import DriverForm from "./DriverForm";
import DriverMeno from "./DriverMeno";

const DriverManger = () => {
  const {status}=useContext(DriverContex)
  const { task, setTask } = useContext(DriverContex);
  const [show, setshow] = useState(0);
  const [showModal, setshowoModal] = useState(false);
  const [selectiv,setSelectiv]=useState({id:0 ,DriverName: "",FullName:"",email:"",tell:"",capshen: "", year: 0,statuseDriver: "1"})
  const regester =()=>{
    if(selectiv.id===0){
      let id =1
      if(task.length !== 0){
        id= task[task.length-1].id+1
      }
      task.id=id
      setTask([...task,selectiv])
      setshowoModal(false)
    }else{
      const index =task.findIndex(val=>val.id===selectiv.id)
      if(index.id !==-1){
        const temp =[...task];
        temp[index]=selectiv;

        setTask([...temp]);
        setshowoModal(false)
      }
    }

  }
  const remove =(id)=>{
    const index = task.findIndex(
      (val)=>val.id===id
    )
    if(index !== -1){
      const temp =[...task]
      temp.splice(index,1)
      setTask([...temp])
    }
  }
  const edit =(id)=>{
    const selectiv=task.find(val=>val.id===id)
    if(selectiv){
      setSelectiv({...selectiv})
      setshowoModal(true)
    }
  }
  const restFormShow=()=>{
    setshowoModal(true)
    setSelectiv({id:0 ,DriverName: "",FullName:"",email:"",tell:"",capshen: "", year: 0,statuseDriver: "1"})
  }
  return (
    <div style={{padding:0}}>
      <div className="sa">
        <button onClick={()=>restFormShow()} className="btn warning">Click</button>
        <h3 className="titel">Task Driver</h3>
        <Modal show={showModal} hide={setshowoModal} title="Driver Form">
          <DriverForm setSelectiv={setSelectiv} selectiv={selectiv} regester={regester} status={status}/>
        </Modal>
      </div>
      <DriverMeno edit={edit} remove={remove} setshow={setshow} task={task} />
      <DriverCodre status={status} task={task} show={show} />
    </div>
  );
};
export default DriverManger;
