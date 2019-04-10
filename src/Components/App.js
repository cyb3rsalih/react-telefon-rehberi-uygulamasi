import React, { Component } from 'react';
import '../App.css';
import Contacts from './Contacts'
import axios from 'axios'

class App extends Component {

  state={
    users:[],
    isLoading:true,
    contacts: [
      {
          name:'Mehmet',
          phone:'12313124',
      },
      {
          name:'Mesut',
          phone: '23242112',
      }
    ]
  }

  addContact = (contact) => {
    const {contacts} = this.state

    contacts.push(contact)
    this.setState({
      contacts
    })
  }

  componentDidMount(){

    setTimeout(() => fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json() )
    .then(users => {this.setState({users,isLoading:false})}), 3000  )

    // axios.get('https://jsonplaceholder.typicode.com/users')
    // .then(users => users.data)
    // .then(users => {this.setState({users,isLoading:false})})
    
  }

  render() {
    return (
      <div className="App">
       <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
       <h1>Users</h1>
       
       {
        this.state.isLoading ? 'Loading...' : 
         this.state.users.map(user => 
       <div className={'userList'} key={user.id}>
      
        {user.name} - @{user.username.toLowerCase()}
       </div>

       )}
      </div>
    );
  }
}

export default App;
