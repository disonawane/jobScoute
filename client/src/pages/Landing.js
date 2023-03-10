import React from 'react'


import main from "../assets/images/main.svg"

import styled from 'styled-components'
import "./style.css"

import Wrapper from '../assets/wrappers/LandingPage'
import Logo from "../assets/images/Logo.png"
import "../assets/css/index.css"
import {Link,Navigate} from "react-router-dom"
import { useAppContext } from '../context/appContext'
const Landing = () => {
  const {user} = useAppContext()
  return (
    <React.Fragment>

      {user && <Navigate to = '/'/>}
    <Wrapper>
        <nav>
        <img  src={Logo} alt = "JobScoute" className='logo ' />
            
        </nav>
<div className='container page'>
<div className='info'>
<h1 className='title-job'>
    Job <span>tracking</span>  app
</h1 >
<p>
I'm baby selvage mlkshk distillery, jianbing synth four dollar toast photo booth pickled neutra gochujang authentic locavore cold-pressed hexagon disrupt.
</p>
<Link to = "/register" className='btn btn-hero'>
Login/Register
</Link>

</div>
<img src = {main} alt = "job hunt" className='img main-img'/>
</div>

    </Wrapper>
    </React.Fragment>
  )
}



export default Landing