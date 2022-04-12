import './../App.css';
import React from 'react';

const Interests = (props) => {
  return (
    <section>
      <h5>Interests</h5>
      <ul className='list-sqaure'>
        {props.interests.map(topic=>{
          return (<li>{topic}</li>)
        })}
      </ul>
    </section>
  )
}

export default Interests