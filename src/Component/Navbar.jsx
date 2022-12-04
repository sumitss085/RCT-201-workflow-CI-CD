import React from 'react'
import { useState,useEffect } from 'react'

const Navbar = () => {

    const [repo ,setrepo]=useState([])



    const HandleClick = async(type)=>{

        let response =await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${type}&sort=stargazers_count&order=desc`)

        let data =await response.json()

        setrepo(data.items)


    }

   useEffect(()=>{
    HandleClick("all")


   },[])





  return (
    <>
     <nav>
        <div>
            <h4 onClick={()=>HandleClick("all")}>
                ALL
            </h4>
        </div>

        <div>
            <h4 onClick={()=>HandleClick("html")}>
                HTML
            </h4>
        </div>

        <div>
            <h4 onClick={()=>HandleClick("css")}>
                CSS
            </h4>
        </div>

        <div>
            <h4 onClick={()=>HandleClick("js")}>
                JAVASCRIPT
            </h4>
        </div>
       </nav>
     

     <div className="repo_div">
        {
          repo.map((repo)=>(
            <div key ={repo.id} className="repo_div">
                <img src={repo.owner.avatar_url} alt="pic" width="100px"/> 

                <h3>Name {repo.name}</h3>
                <h3>Language {repo.language}</h3>
                <p>Forks_count - {repo.forks_count}</p>
                <p>Stargazers_count  -{repo.stargazers_count}</p>


            </div>
          ))  
        }


     </div>
    </>
   

  )
}

export default Navbar