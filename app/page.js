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
        <div id="nav">
            <img src="https://cdn.discordapp.com/attachments/1081506489505677382/1144590787481456670/d0b5453eb4d88b0d4e4a0cb01cd084af.png"/>
            <h1>GODCRAFT</h1>
            <a href="index.html">HOME</a>
            <a href="bothost.html">BOT HOST</a>
            <a href="website.html">WEB HOST</a>
            <a href="games.html">GAMES HOST</a>   
            <a href="https://discord.gg/8y5rymQ75V">DISCORD SERVER</a>    
        </div>
        <div id="cursor"></div>
        <div id="cursor-blur"></div>
        <video autoplay loop muted src="vip2.mp4"></video>
        <div id="main">
            <div id="page1">
                <h1>WECOME TO GOD HOST</h1>
                <h2>best hosting </h2>
                <p>Discord bot hosting involves deploying and running a Discord bot on a server or cloud platform. This allows the bot to remain active and responsive 24/7, even when the developer's computer is offline. Bot hosting services provide the necessary infrastructure to keep the bot running, ensuring that it can process commands, respond to messages, and perform its designated functions within Discord servers.</p>
            </div>
            <div id="page2">
                <div id="scroller">
                    <div id="scroller-in">
                        <h4>SERVICES</h4>
                        <h4>GAMES HOST</h4>
                        <h4>BOT HOST</h4>
                        <h4>WEB HOST</h4>
                    </div>
                </div>
                <div id="about-us">
                    <img src="https://images-ext-1.discordapp.net/external/zapN_82-zgmdRfNGCvZMuI6D53argYJjWSAmWUL3_tU/https/img.redbull.com/images/c_fill%2Cw_1200%2Ch_600%2Cg_auto%2Cf_auto%2Cq_auto/redbullcom/2020/4/28/bjoyslzjb3uxqyg82uz2/minecraft?width=960&height=480" alt="" width="250px" height="350px">
                    <div id="about-us-in">
                        <h3>ABOUT US</h3>
                        <P>**Discord Bot Hosting:**
                            Discord bot hosting involves deploying and running a Discord bot on a server or cloud platform. This allows the bot to remain active and responsive 24/7, even when the developer's computer is offline. Bot hosting services provide the necessary infrastructure to keep the bot running, ensuring that it can process commands, respond to messages, and perform its designated functions within Discord servers.
                            
                            **Minecraft Hosting:**
                            Minecraft hosting refers to the practice of renting server resources to create and maintain a dedicated Minecraft game server. Hosting providers offer optimized hardware and network connectivity to ensure smooth gameplay for all players. This service allows you to customize your Minecraft experience by adding mods, plugins, and texture packs, and it enables you to invite friends or other players to join your virtual world.
                            
                            **Game Hosting:**
                            Game hosting involves renting server space to support various online multiplayer games. Hosting providers offer servers tailored to specific games, equipped with the necessary resources for optimal performance. This service ensures that players can connect, communicate, and engage in gameplay without experiencing lag or connection issues. Game hosting contributes to a seamless and enjoyable multiplayer gaming experience.
                            
                            If you have more specific questions about any of these hosting types, feel free to ask for further details!</P>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" alt="">
                </div>
                <div id="cards-container">
                    <div class="card" id="card1">
                        <div class="overlay">
                            <h4>bot hosting</h4>
                            <p>Discord bot hosting involves deploying and running a Discord bot on a server or cloud platform. This allows the bot to remain active and responsive 24/7, even when the developer's computer is offline. Bot hosting services provide the necessary infrastructure to keep the bot running, ensuring that it can process commands, respond to messages, and perform its designated functions within Discord servers.

                            </p>
                        </div>
                    </div>
                    <div class="card" id="card2">
                        <div class="overlay">
                            <h4>web hosting</h4>
                            <p>Website hosting is the service of providing server resources and infrastructure to make websites accessible on the internet. When you create a website, it consists of various files, such as HTML, CSS, images, and scripts. Website hosting companies store these files on powerful servers that are connected to the internet 24/7. Website hosting services come in different types, including shared hosting, virtual private servers (VPS), and dedicated servers, each offering varying levels of performance, security, and customization options.</p>
                        </div>
                    </div>
                    <div class="card" id="card3">
                        <div class="overlay">
                            <h4>games hosting</h4>
                            <p>Game hosting involves the provision of server infrastructure for online multiplayer video games. When players engage in online gaming, their interactions and gameplay actions need to be synchronized across all participants. Game hosting providers often offer specialized server options optimized for specific games, enabling players to enjoy smooth, immersive, and uninterrupted multiplayer experiences.</p>
                        </div>
                    </div>
                </div>
              
            </div>
            <div id="page3">
                <p>MCProHosting is a prominent Minecraft server hosting provider that offers a simple setup process and a variety of server plans. They provide features like automatic backups, easy mod installation, and solid performance for Minecraft enthusiasts. Their user-friendly platform is designed to cater to both newcomers and experienced Minecraft server administrators.</p>
                <img id="colon1" src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg" alt="">
                <img id="colon2" src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg" alt="">
            </div>
            <div id="page4">
                <h1>WHO IS THE OWNERS?</h1>
                <div class="elem">
                    <h2>OWNER</h2>
                    <img src="https://cdn.discordapp.com/attachments/1081506489505677382/1144510496012255282/image.png" height="450px" alt="">

                </div>
                <div class="elem">
                    <h2>CO-OWNER</h2>
                    <img src="https://cdn.discordapp.com/attachments/1081506489505677382/1144511332205465620/image.png" alt="">

                </div>
                <div class="elem">
                    <h2>ADMIN</h2>
                    <img src="https://cdn.discordapp.com/attachments/1096295678801625180/1144513973195128862/image.png" alt="">
                </div>
            </div>
            <div id="footer">
                <img src="https://cdn.discordapp.com/attachments/1081506489505677382/1144590787481456670/d0b5453eb4d88b0d4e4a0cb01cd084af.png"  alt=""/>
                <div id="f1">
                  
                </div>
                <div id="f2">
                  <h3>bot hosting</h3>
                  <h3>web hosting</h3>
                  <h3>game hosting</h3>
                </div>
                <div id="f3">
                  <h3>shop</h3>
                  <h3>LEAGUES</h3>
                  <h3>Contact us</h3>
                </div>
                <div id="f4">
                  <h4>
                  Email id godcrafts@.fun <br>
                  <a href="https://discord.gg/XZASZQyXpq">Discord server</a>
                  </h4>
                </div>
              </div>
              <div id="bots">
                <h4>&copy;COPYRIGHT BY KENILGAMER</h4 >
            </div>
        </div>
    </>
  )
}

export default page