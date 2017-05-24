export function fetchStudents(){
  return fetch("http://localhost:3000/api/v1/students")
    .then( res => res.json() )
}

export function createStudent(name){
  return fetch("http://localhost:3000/api/v1/students", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify( {student: {name: name}} )
  })
  .then( res => res.json() )
}

export function deleteStudent(studentID){
  return fetch(`http://localhost:3000/api/v1/students/${studentID}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  })
  .then( res => res.json() )
}

export function editStudent(studentID, newName){
  return fetch(`http://localhost:3000/api/v1/students/${studentID}/edit`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify( {student: {name: newName}} )
  })
  .then( res => res.json() )
}
