import React,{useState,useEffect} from 'react';

const Home = ()=>{
    const [data,setData] =useState([])

    useEffect(() => {
      fetch('/mypost',{
         headers:{
             "Authorization":"Bearer "+localStorage.getItem("jwt")

         } 
      }) .then(res=>res.json())
      .then(result=>{
           
            setData(result.mypost)
      })
    },[])
const deletePost = (postId)=>{
    fetch(`/deletepost/${postId}`,{
        method:"delete",
        headers:{
            Authorization:"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json)
    .then(result=>{
       
        const newData=data.filter(item=>{
            return item._id !== result._idw
        })
        setData(newData)
        window.location.reload(true)
    })
}
    return(
        <div className="home">
            {
                data.map(item=>{
                    return(
                        <div className="card home-card" key={item._id}>
                    <h2>{item.title}</h2>
                    <div className="card content">
                    <p>{item.body}</p>
                    <p>{item.jobdescription}</p>
                   
                    </div>
                    <div style={{textAlign:"center"}}>
                    <button className="btn waves-effect waves-light #64b5f6 blue darken-1 mybtn" onClick={()=>deletePost(item._id)}
                     >Delete
                    </button>
                    </div>
                  </div>
                    )
                })
            }
                
         </div>
        
    )
}
export default Home