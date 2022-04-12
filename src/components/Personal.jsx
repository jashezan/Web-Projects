import './../App.css';
import React from 'react'

const Personal = (props) => {
  return (
    <section>
      <h5>Personal Information</h5>
      <ul className='list-type'>
        <li>
          <strong>Name: </strong>
          <span>{props.name}</span>
        </li>
        <li>
          <strong>Phone: </strong>
          <span>{props.phone}</span>
        </li>
        <li>
          <strong>Email: </strong>
          <span>{props.email}</span>
        </li>
      </ul>
    </section>
  )
}

Personal.defaultProps = {
  name: "No Name",
  phone: "+8800000000000",
  email: "nothing@gmail.com"
}

export default Personal