import React,{useState,useContext} from 'react';
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
import {EmployerContext} from '../../App'
const EmployerSignin = ()=>{
    const {state,dispatch}=useContext(EmployerContext)
    const history=useHistory()
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid email",classes:"#c62828 red darken-3"})
            return 
        }
        fetch("/employersignin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password:password,
                email:email
            })
            }).then(res=>res.json())
            .then(data=>{
                
                if(data.error){
                    M.toast({html: data.error,classes:"#c62828 red darken-3"})
                }
                else{
                    localStorage.setItem("jwt",data.token)
                    localStorage.setItem("employer",JSON.stringify(data.employer))
                    dispatch({type:"EMPLOYER",payload:data.employer})
                    M.toast({html:"signed in successfully",classes:"#8bc34a light-green" })
                    history.push('/')
                }
        }).catch(err=>{
            console.log(err)
        })
    }


    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Getwork</h2>
                <input type="text" 
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
             <input type="password" 
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=>PostData()} 
                >Signin
                </button>
                <h5>
                    <Link to="/employersignup">Dont have an account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default EmployerSignin