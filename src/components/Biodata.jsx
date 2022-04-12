import './../App.css';
import React from 'react'
import Interests from './Interests'
import Personal from './Personal'
import Reference from './Reference'
import Skills from './Skills'

const Biodata = (props) => {
  return (
    <section className='container my-5'>
      <h2 className='App my-5'>Biodata of {props.name}</h2>
      <Personal name={props.name} phone={props.phone} email={props.email}/>
      <Skills skills={props.skills}/>
      <Interests interests={props.interests}/>
      <Reference refer={props.refer}/>
      <br />
      <hr />
      <br />
    </section>
  )
}

export default Biodata