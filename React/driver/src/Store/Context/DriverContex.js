import { createContext, useEffect, useReducer, useState } from "react";
import Rduser from "../Rduser/Rduser";

const DriverContex = createContext([])

const DriverProvider=({children})=>{
      const [status,setstauus]=useState([
        {id:1,statusName:"Available"},
        {id:2,statusName:"Out of reach"}
      ]);
      const intialState ={
        show:0,
        showModal:false,
        selectiv:{id:0 ,DriverName: "",FullName:"",email:"",tell:"",capshen: "", year:"",statuseDriver: 1},
        task:[
          {id: 1,DriverName: "sajad",FullName:"Mohamad Sajad Pourajam",email:"sajad.prj85@gmail.com",year: "2000-06-09",tell:"09130613276",capshen: "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.",statuseDriver: 1},
          {id: 2,DriverName: "ali",FullName:"ali Pourajam",email:"sajad.prj85@gmail.com",year: "1996-03-13",tell:"09130613276",capshen: "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.",statuseDriver: 2},
          {id: 3,DriverName: "sara",FullName:"sara Pourajam",email:"sajad.prj85@gmail.com",year: "2000-03-09",tell:"09130613276",capshen: "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.",statuseDriver: 2},
          {id: 4,DriverName: "dara",FullName:"dara Pourajam",email:"sajad.prj85@gmail.com",year: "1990-11-01",tell:"09130613276",capshen: "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.",statuseDriver: 1},
          {id: 5,DriverName: "morteza",FullName:"morteza Pourajam",email:"sajad.prj85@gmail.com",year: "1999-09-09",tell:"09130613276",capshen: "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.",statuseDriver: 1},
          {id: 6,DriverName: "mahsa",FullName:"mahsa jafary",email:"sajad.prj85@gmail.com",year: "1999-09-09",tell:"09130613276",capshen: "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.",statuseDriver: 1},
          {id: 7,DriverName: "mohamad",FullName:"Mohamad Sajad Pourajam",email:"sajad.prj85@gmail.com",year: "1999-09-09",tell:"09130613276",capshen: "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.",statuseDriver: 2},
          {id: 8,DriverName: "reza",FullName:"Mohamad Sajad Pourajam",email:"sajad.prj85@gmail.com",year: "1999-09-09",tell:"09130613276",capshen: "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.",statuseDriver: 1},
          {id: 9,DriverName: "anahita",FullName:"Mohamad Sajad Pourajam",email:"sajad.prj85@gmail.com",year: "1999-09-09",tell:"09130613276",capshen: "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.",statuseDriver: 1},
          {id: 10 ,DriverName: "saba",FullName:"Mohamad Sajad Pourajam",email:"sajad.prj85@gmail.com",year: "1999-09-09",tell:"09130613276",capshen: "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.",statuseDriver: 2},
        ]
      }
      const [state,dispach]=useReducer(Rduser,intialState)
      const [show, setshow] = useState(0);
      const {showModal,selectiv,task}=state
 
      const regester =()=>{
        dispach({type:"regester"})
    
      }
      const remove =(id)=>{
        dispach({type:"remove",peylod:id})
        }
      
      const edit =(id)=>{
        dispach({type:"edit",peylod:id})
      }
      const restFormShow=()=>{
        dispach({type:"showModalViwe"})
        dispach({type:"selectViweName"})
      }
      const hideModal=()=>{
        dispach({type:"hideModal"})
      }
     
      return <DriverContex.Provider value={{status:status,setstauus:setstauus,intialState:intialState,show,setshow,regester,showModal,selectiv,task,edit,hideModal,remove,restFormShow
      }}>
          {children}
      </DriverContex.Provider>
}
export {DriverContex,DriverProvider}