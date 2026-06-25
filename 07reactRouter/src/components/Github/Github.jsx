import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //      fetch('https://api.github.com/users/Aditya0714')
    //      .then((res) => res.json())
    //      .then((data)=>{
    //         console.log(data);
    //         setData(data)
    //      })
    // },[])

    return (
    <div className="flex items-center justify-center m-2 bg-yellow-600 text-white p-4 text-3xl">
        <div className="m-2 rounded-2xl bg-gray-600 font-bold text-white p-3 text-3xl">
            Github Followers : {data.followers} <br/>
            Username : {data.login}<br/>
            Public Repo : {data.public_repos}
        </div>
        <img
            src={data.avatar_url}
            alt="Github_Profile_Pic"
            className="ml-4"
            width={300}
        />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Aditya0714')
    return response.json()
}