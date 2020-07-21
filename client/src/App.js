import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from './components/Navbar'
import './App.css'

import {BrowserRouter,Route, Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'

import EmployerSignin from './components/screens/EmployerSignin'
import EmployerSignup from './components/screens/EmployerSignup'
import  Createjob from './components/screens/Createjob'
import Appliedjob from './components/screens/Appliedjob'
import {reducer,initialState} from './reducer/EmployerReducer'


export const EmployerContext=createContext()


const Routing=()=>{
  const history=useHistory()
  // this is here when user just closes the application and doesnot log out
  const {state,dispatch} =useContext(EmployerContext)
useEffect(()=>{
  const employer=JSON.parse(localStorage.getItem("employer"))
  if(employer){
    dispatch({type:"EMPLOYER",payload:employer})
    history.push('/')
  }
  else{
    history.push('/employersignin')
  }
},[])
  return(
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>
   
    <Route path="/employersignup">
    <EmployerSignup />
    </Route>
    <Route path="/employersignin">
    <EmployerSignin />
    </Route>
    <Route path="/create">
    <Createjob />
    </Route>
    <Route path="/applied">
    <Appliedjob />
    </Route>
    </Switch>
  )
}



function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <EmployerContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar />
   <Routing />
    </BrowserRouter>
    </EmployerContext.Provider>
  );
}

export default App;
