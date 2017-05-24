import React from 'react'
import StudentsContainer from '../containers/StudentsContainer'


const StudentsShow = (props) => {
  console.log(props)
  return (
  <div>
    <h2> ID: {props.id} </h2>
    <h3> Name: {props.student} </h3>
    <button onClick={ () => props.onDelete(props.id) }>Delete Student</button>
  </div>
)
}


export default StudentsShow
