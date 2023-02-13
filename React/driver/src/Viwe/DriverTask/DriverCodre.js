import { useContext } from "react"
import { DriverContex } from "../../Store/Context/DriverContex"

const DriverCodre =()=>{
  const {show,task}=useContext(DriverContex)
    return(
        <div className="tabcontent">
          
        {task && task.map(
          (val)=>{
            if(val.id === show){
              return(
                <div key={val.id}>
                  
                  <img className="img"  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
                  
                  <h3 className="titel_1 text">{val.DriverName}</h3>
                  <h4 className="text full">{val.FullName}</h4>
                  <h4 className="text full">{val.year}</h4>
                  {console.log(val.year)}
                  {val.statuseDriver == 1 ?<h3 style={{color:"green"}}>Available<span className="fa fa-dot-circle-o"></span></h3>:<h3 style={{color:"red"}}>Out of reach<span className="fa fa-dot-circle-o"></span></h3>}
                  <p className="taxt_1"><b>Captin:</b></p>
                  <p>{val.capshen}</p><br/>
                  <p><b>Calle:</b></p>
                  <span className="icon fa fa-phone"></span><p className="text_3"><b>phone:</b></p><p className="text_3">{val.tell}</p><br/>
                  <span className="icon fa fa-envelope-o" ></span><p className="text_2"><b>email:</b></p><p className="text_2">{val.email }</p>

    
                </div>
                )
            }
          }
        )}
     
      </div>
    )
}
export default DriverCodre;