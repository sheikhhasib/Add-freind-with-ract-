import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import User from './components/user/User';
import fakeUsers from './fakedata/fakeUsers';
function App() {
  const [users,setUser] = useState([]);
  const [addUser,setAddUser] = useState([]);
  useEffect(()=>{
    // fetch('https://randomuser.me/api/?results=15')
    // .then(res => res.json())
    // .then(data => setUser(data.results));
    setUser(fakeUsers.results)

  },[])


  const addFriendHandler = (user) => {
    const newUser = [...addUser,user]
    setAddUser(newUser);
  }
  // const total = addUser.reduce((sum,user) => sum+user.salary,0);
  // console.log(total);
  let total = 0;
  for (let i = 0; i < addUser.length; i++) {
    let salary = addUser[i].salary;
    let numSalary = Number(salary);
    total += numSalary;
  }

  return (
    <div className="App">
      <Header></Header>
        <div className="main-container">
            <div className="user-container">
                <div className="user-header">
                  <h2>All Users Here</h2>
                </div>
                {
                  users.map(user => <User user={user} key={user.phone} addFriendHandler={addFriendHandler}></User>)
                }
            </div>
            <div className="addUser">
                <div className="addUserHeader">
                  <h2>Added Users</h2>
                </div>
                <div className="card">
                  <div className="card-child">
                    <h3> total Added : {addUser.length}</h3>
                    <h3>total salary : {total}</h3>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
