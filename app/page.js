"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [userdata, setuserdata] = useState("")
  const [num, setnum] = useState(10)
  const getdate = async()=> {
  const help = await  axios.get("https://picsum.photos/v2/list")
  const a = JSON.stringify(help.data)
  setuserdata(a)
  }
  return (
    <div>
      <button onClick={getdate}> click</button>
      {userdata}
    </div>
  )
}

export default page