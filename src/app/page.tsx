import React from 'react'
import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Github from '../components/Github'

const page = () => {
  return (
    <div className='min-h-screen space-y-12'>
      <Navbar/>
      <Introduction/>
      <Skills/>
      <Projects/>
      <Github></Github>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page