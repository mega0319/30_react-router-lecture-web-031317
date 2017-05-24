import React from 'react'

export default class StudentEdit extends React.Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
  }
  // function handleEdit(e){
  //   e.preventDefault()
  //   props.onEdit()

  handleEditInput(e){
    e.preventDefault()
    console.log("GOT TO BASE 1!")
    this.props.onEdit(this.props.student, this.state.input)
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    })
    console.log(this.state.input)
  }

  render(){
    return (
      <div>
        <form onSubmit={ (e) => this.handleEditInput(e)}>
          <input type='text' defaultValue={this.props.student.name} onChange={this.handleChange.bind(this)} ></input>
          <input className='btn btn-default' type='submit' value='Submit Edit' ></input>
        </form>
      </div>
    )
  }

}
