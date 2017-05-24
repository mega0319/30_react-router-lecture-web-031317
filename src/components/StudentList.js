import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
// import StudentsShow from './StudentsShow'
import StudentLink from './StudentLink'
import StudentForm from './StudentForm'
// function handleClick(e){
//   e.preventDefault();
//   <StudentLink name={name} id={i+1}/>
// }
import StudentsShow from './StudentsShow'

function StudentList(props) {
  const nameEls = props.students.map( (student) =>
      <li key={student.id}>
        <Link to={'/students/' + (student.id) } >{student.name}</Link>
      </li>
  )


  return (
      <div className='col-md-4'>
        <ul>
          { nameEls }
        </ul>
        <Switch>
          <Route path="/students/new" render={ () => <StudentForm onSubmit={props.onSubmit} /> } />
          <Route path="/students/:id" render={ ({match}) => {
            const id = match.params.id
            const student = props.students.find( (student) => student.id === parseInt(id))
            if (student){
              return (
                <StudentsShow student={student.name} id={student.id} onDelete={props.onDelete}/>
              )
            }else{
              return (
                null
              )
            }
          } } />
        </Switch>
      </div>
  )
}


export default StudentList
