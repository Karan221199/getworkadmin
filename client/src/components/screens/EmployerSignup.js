import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const EmployerSignup = ()=>{
    const history=useHistory()
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")

    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid email",classes:"#c62828 red darken-3"})
            return 
        }
        fetch("/employersignup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                password:password,
                email:email
            })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    M.toast({html: data.error,classes:"#c62828 red darken-3"})
                }
                else{
                    M.toast({html:data.message,classes:"#8bc34a light-green" })
                    history.push('/employersignin')
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
             <input type="text" 
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
             <input type="password" 
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=>PostData()}
            >SignUp
            </button>
            <h5>
                    <Link to="/employersignin">Have an account?</Link>
                </h5>
        </div>
    </div>
    )
}
export default EmployerSignup