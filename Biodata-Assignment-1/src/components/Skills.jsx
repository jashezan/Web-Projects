import './../App.css';
import React from 'react'

const Skills = (props) => {
  return (
    <section>
      <h5>Skills</h5>
      <ul>
        {props.skills.map(topic=>{
          return (<li>{topic}</li>)
        })}
      </ul>
    </section>
  )
}

Skills.defaultProps = {
  skills: []
}

export default Skills