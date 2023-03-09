import React from "react";

import styleClasses from "./AddUser.module.css";
import Card from '../UI/Card'
import Button from '../UI/Button'

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={styleClasses.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />

                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />

                <Button type="submit">Add user</Button>
            </form>
        </Card>
    );
};

export default AddUser;
