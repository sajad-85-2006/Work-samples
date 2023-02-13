import { useContext } from "react";
import { DriverContex } from "../../Store/Context/DriverContex";

const DriverMeno =()=>{
  const {setshow,task,remove,edit}=useContext(DriverContex)
  return(
    <div className="tab">
      {
        task&&task.map(
          (val,index)=><button key={index} name="sad" className="tablink" onClick={()=>setshow(val.id)}>{val.DriverName}
           <span style={{color:val.statuseDriver ==1?"green":"red"}} className="fa fa-dot-circle-o icon_online" ></span>
            <span onClick={()=>edit(val.id)} className="fa fa-pencil-square-o hover_1"></span>
            <span  onClick={()=>remove(val.id)} name="sad" className="fa fa-times hover_2"></span>
            </button>
        )
      }
    </div>
  )
}

export default DriverMeno;