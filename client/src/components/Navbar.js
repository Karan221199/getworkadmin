//hide-on-med-and-down

import React,{useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {EmployerContext} from '../App'
const Navbar = ()=>{
  const history=useHistory()
const {state,dispatch} = useContext(EmployerContext)
const renderList = ()=>{
  if(state){
    return [
      <li><Link to="/applied">Applicants</Link></li>,
      
      <li><Link to="/create">CreateJob</Link></li>,
      <li>
          <button className="btn waves-effect waves-light #64b5f6 red darken-1 mybtn" 
              onClick={()=>{
                localStorage.clear()
                dispatch({type:"CLEAR"})
                history.push('/employersignin')
              }}
           >Logout
            </button>
      </li>
    ]
  }
  else{
      return [
       
        <li><Link to="/employersignin">EmployerSignin</Link></li>,
        <li><Link to="/employersignup">EmployerSignup</Link></li>
      ]
  }
}

    return(
        <nav>
        <div className="nav-wrapper white">
           
          <Link to={state?"/" : "/signin"} className="brand-logo left">Getwork</Link>
          <ul id="nav-mobile" className="right">
           {renderList()}
          </ul>
        </div>
      </nav>
    )
  
}
export default Navbar