import './../App.css';
import React from 'react'

const Reference = (props) => {
  return (
    <section>
      <h5>Referenced by</h5>
      <ul className='list-type'>
        <li>
          <strong>{props.refer}</strong> <br />
          <em> Software Engineer, Interactive Care. </em>
        </li>
      </ul>
    </section>
  )
}

Reference.defaultProps = {
  refer: "Mahir Asief"
}

export default Reference