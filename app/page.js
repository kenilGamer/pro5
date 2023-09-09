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
    <>
    <div id="sidenav">
        <i id="close" class="ri-close-circle-fill"></i>
        
        <div id="elems">
            <h3>menu</h3>
            <a href="index.htlm">home</a>
            <a href="#">panel</a>
            <a href="#">loging</a>
            <a href="#">logout</a>
        </div>
    </div>
    <div id="background">
        <div id="nav">
            <i id="mune" class="ri-menu-2-line"></i>
        </div>
        <div id="hv">
            <h1>WECOME</h1>
            <p></p>
            <div id="elemnts">
                <div class="elemnts">
                    <div class="pic">
                    <div class="new">
                    <i ></i>
                    <h2>MINECRAFT</h2>
                        </div>
                    </div>
                </div>
                <div class="elemnts"><div class="pic">
                    <div class="new">
                    <i ></i>
                    <h2>GTA5</h2>
                        </div>
                    </div></div>
                <div class="elemnts">
                    <div class="pic">
                    <div class="new">
                    <i></i>
                    <h2>ROBLO</h2>
                        </div>
                    </div></div>
                <div class="elemnts"><div class="pic">
                    <div class="new">
                    <i></i>
                    <h2>forza motorsport </h2>
                        </div>
                    </div></div></div>

            </div>
        </div>
    </>
  )
}

export default page