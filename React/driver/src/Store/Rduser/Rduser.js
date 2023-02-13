const Rduser= (state,action)=>{
    const {showModal,selectiv,task}=state
    switch (action.type) {
      case "regester":
        if(selectiv.id===0){
          let id = 1
          if(task.length !== 0){
            id= task[task.length-1].id+1
          }
          selectiv.id=id
          
          return{...state,task:[...task,selectiv],showModal:false,selectiv:{id:0 ,DriverName: "",FullName:"",email:"",tell:"",capshen: "", year: 0,statuseDriver: "1"}}
        }else{
          const index =task.findIndex(val=>val.id===selectiv.id)
          if(index.id !==-1){
            task[index]=selectiv;
    
            return{...state,task:task,showModal:false,selectiv:{id:0 ,DriverName: "",FullName:"",email:"",tell:"",capshen: "", year: 0,statuseDriver: "1"}}
          }else {
            return state;
        }
          }
    case "showModalViwe":{
      return {...state,showModal:true}
    }
    case "selectViweName":
      {
        return {...state,selectiv:{id:0 ,DriverName: "",FullName:"",email:"",tell:"",capshen: "", year: 0,statuseDriver: "1"}}
      }
    case "edit":
      {
        const {task}=state
        const temp=task.find(val=>val.id===action.peylod)
        if(temp){
          return{...state,selectiv:temp,showModal:true}
        }
      }
      case "hideModal":
        {
          return{...state,showModal:false}
        }
        case "remove":
          {
            const index = task.findIndex((val)=>val.id===action.peylod)
            if(index !== -1){
              task.splice(index,1)
              return{...state,task:task}
            }
          }
      default:
        return state;
    }
  }
  export default Rduser;