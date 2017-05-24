import React, { Component } from 'react'

import StudentList from '../components/StudentList'
import StudentForm from '../components/StudentForm'
import { Redirect } from 'react-router-dom'
import { fetchStudents, createStudent, deleteStudent, editStudent }  from '../api'

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
      alert("STUDENT DELETED!")
      this.props.history.push('/students')
  }

  handleAddStudent(name){
    createStudent(name)
      .then( (student) => {
        this.setState( prevState =>  ({ students: [...prevState.students, student] }) )
      })
      .catch(e => console.log(e))
  }

  handleEditStudent(studentInfo, newName){
    editStudent(studentInfo.id, newName)
    .then( (students) => {
      this.setState({
        students: students
      })
    })
    .then( () => console.log("EUREKA!!"))
    alert(`${newName} is ${studentInfo.name}'s new name!`)
  }

  render(){
    return (
      <div>
        <StudentList students={this.state.students} onSubmit={this.handleAddStudent.bind(this)} onDelete={this.handleDeletedStudent.bind(this)} onEdit={this.handleEditStudent.bind(this)}/>
      </div>
    )
  }
}

export default StudentsContainer
