import React, { use, useState } from 'react';

const AddUser = ({usersData}) => {
    const lodedUsersData = use(usersData)
    const [users,setUser]= useState(lodedUsersData)
    console.log(typeof usersData);
    const handleAddUser = (e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const myUser = {name,email}
        fetch("http://localhost:3000/users",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myUser),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            myUser._id = data.insertedId
            const newUser = [...users,myUser]
            setUser(newUser)
        })
    }
    const handleUserDelete=(id) =>{
        console.log("Delete successfully id: ",id);
        fetch(`http://localhost:3000/users/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                const remainingUsers = users.filter(user=>user._id != id)
                setUser(remainingUsers)
            }
            console.log(data);
        })
    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Enter Your Name'/> <br />
                <input type="email" name="email" placeholder='Enter Your Email'/><br />
                <input type="submit" value="Add User" />
            </form>
            {/* Show users */}
            <div>
                {
                    users?.map(user=><h2>{user?.name} <button onClick={()=>handleUserDelete(user._id)} className='font-bold'>X</button></h2>)
                }
            </div>
        </div>
    );
};

export default AddUser;