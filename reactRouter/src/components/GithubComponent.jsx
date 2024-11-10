import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function GithubComponent() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/kraken-ops')
    //   .then(resp => resp.json())
    //   .then(data => {
    //     setData(data);
    //   })
    // }, [])

    const data = useLoaderData();
    
  return (
    <div className='flex justify-center m-4'>
        <img src={data.avatar_url} alt="Git picture" height={150} width={150}></img>
        <div className='text-center  m-4 text-black'>Github Name : {data.name}
        </div>

    </div>
    
  )
}

export default GithubComponent

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/kraken-ops")
    return response.json()
}