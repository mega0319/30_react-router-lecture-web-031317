import React, { Component } from 'react'

import StudentList from '../components/StudentList'
import StudentForm from '../components/StudentForm'
import { Redirect } from 'react-router-dom'
import { fetchStudents, createStudent, deleteStudent }  from '../api'

class StudentsContainer extends Component {

  constructor(){
    super()
    this.state = {
      students: []
    }

  }

  componentDidMount(){
    fetchStudents()
      .then( data => this.setState({
        students: data
      }) )
  }

  handleDeletedStudent(studentID){
    deleteStudent(studentID)
      .then( data => this.setState({
        students: data
      }) )
      .then( () => <Redirect to='/students' /> )
      alert("STUDENT DELETED!")
  }

  handleAddStudent(name){
    createStudent(name)
      .then( (student) => {
        this.setState( prevState =>  ({ students: [...prevState.students, student] }) )
      })
      .catch(e => console.log(e))
  }

  render(){
    return (
      <div>
        <StudentList students={this.state.students} onSubmit={this.handleAddStudent.bind(this)} onDelete={this.handleDeletedStudent.bind(this)}/>
      </div>
    )
  }
}

export default StudentsContainer
