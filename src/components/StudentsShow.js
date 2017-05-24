import React from 'react'
import StudentsContainer from '../containers/StudentsContainer'
import StudentEdit from './StudentEdit'
import { Route, Link } from 'react-router-dom'

const StudentsShow = (props) => {
  return (
  <div>
    <h2> ID: {props.student.id} </h2>
    <h3> Name: {props.student.name} </h3>
    <button className="btn btn-default" onClick={ () => props.onDelete(props.student.id) }>Delete Student</button>
    <Link className="btn btn-default" to={`/students/${props.student.id}/edit`} >Update Student</Link>
    <Route path="/students/:id/edit" render={ () => <StudentEdit student={props.student} onEdit={props.onEdit}/> } />
  </div>
)
}


export default StudentsShow
