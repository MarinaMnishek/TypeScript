

export interface Todos {
  userId: number
  id: number
  title: string
  completed: boolean
}


export function  getTodosByCount(count:number) {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then (response => response.text())
    .then<Todos>(responseText => JSON.parse(responseText).slice(0, count)
    )
}



//====================

export interface Users {
  id: number
  name: string
  username: string
  email: string
  address: Address
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode:string
  geo: {
    lat: string
    lng: string
  }
  phone: string

}




export function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then (response => response.text())
    .then<Users>(responseText => JSON.parse(responseText))
    .then(data => data)
}

export  function getUserGeo () {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then (response => response.text())
    .then<Users>(responseText => JSON.parse(responseText))
    .then(data => data.address)
}




