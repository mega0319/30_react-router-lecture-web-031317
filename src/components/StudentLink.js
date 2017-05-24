import React from 'react'


class StudentLink extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <h3> Name: {this.props.name} </h3>
      </div>
    )
  }
}

export default StudentLink
