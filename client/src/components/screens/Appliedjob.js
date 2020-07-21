import React,{useState,useEffect} from 'react';

const Appliedjob = ()=>{
   
    const [data,setData] =useState([])

    useEffect(() => {
      fetch('/myjobs',{
         headers:{
             "Authorization":"Bearer "+localStorage.getItem("jwt")

         } 
      }) .then(res=>res.json())
      .then(result=>{
         
            setData(result.mypost)
      })
    },[])
    
    return(
        <div className="home">
            {
                data.map(item=>{
                    return(
                        <div className="card home-card" key={item._id}>
                    <h2>{item.title}</h2>
                    <div className="card content">
                    <p><h3>Applied By :</h3> {item.appliedBy.name}</p>
                    <p>{item.appliedBy.email}</p>
                   
                    </div>
                
                  </div>
                    )
                })
            }
                
         </div>
        
    )
}
export default Appliedjob