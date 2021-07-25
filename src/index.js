//const element = document.createElement('h1')
//element.innerText = 'Hello React'
//const container = document.getElementById('root')
//container.appendChild(element)
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.mx%2Fpin%2F802485227332707308%2F&psig=AOvVaw29b7T1ABZsj9SAvjh8vSbl&ust=1627255597211000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjgou_t_PECFQAAAAAdAAAAABAK
import { USERWHITESPACABLE_TYPES } from '@babel/types'
import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: 'Humberto',
  lastName: 'Hernandez',
  avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.mx%2Fpin%2F802485227332707308%2F&psig=AOvVaw29b7T1ABZsj9SAvjh8vSbl&ust=1627255597211000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjgou_t_PECFQAAAAAdAAAAABAK'
}
function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
    return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello Stranger</h1>
}

const name = 'Humberto'


const element = (
  <div>
     <h1>{getGreeting(user)}</h1>
     <img src={user.avatar}/>
  </div>
)
const container = document.getElementById('root')

//ReactDOM.render(__QUE__,__DONDE__)

ReactDOM.render(element, container)