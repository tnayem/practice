import React from 'react';

const AddUser = () => {
    const handleAddUser = (e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const myUser = {name,email}
        console.log(myUser);
    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Enter Your Name'/> <br />
                <input type="email" name="email" placeholder='Enter Your Email'/><br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;