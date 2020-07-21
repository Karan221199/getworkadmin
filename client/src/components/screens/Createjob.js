import React, { useState} from 'react'
import {useHistory} from 'react-router-dom'
import  M from 'materialize-css'

const Createjob=()=>{
    const history=useHistory()
    const [cname,setCname] = useState("")
    const [aboutc,setAboutc] = useState("")
    const [jobdescription,setJobDescription] = useState("")

    const PostData = ()=>{
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
               title:cname,
               body:aboutc,
               jobdescription:jobdescription
            })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    M.toast({html: data.error,classes:"#c62828 red darken-3"})
                }
                else{
                    M.toast({html:"created post successfully",classes:"#8bc34a light-green" })
                    history.push('/')
                }
        }).catch(err=>{
            console.log(err)
        })
    }


    return(
        <div className="card input-field "
        style={{
            margin:"10px auto",
            maxWidth:"600px",
            padding:"10px",
            textAlign:"center",
            marginTop:"50px"
        }}
        >
            <h2>Getwork</h2>
            <input type="text" placeholder="Company name"
             value={cname}
             onChange={(e)=>setCname(e.target.value)}
            />
            <input type="text" placeholder="About Company"
             value={aboutc}
             onChange={(e)=>setAboutc(e.target.value)}
            />
            <input type="text" placeholder="Job Description"
             value={jobdescription}
             onChange={(e)=>setJobDescription(e.target.value)}
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1 mybtn"  onClick={()=>PostData()}
            >Create Job
            </button>
        </div>
    )
}

export default Createjob