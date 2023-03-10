import React, { useState } from "react";

import styleClasses from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                errorTitle: "Invalid input!",
                errorMessage: "Please enter name and age (non-empty values).",
            });
            return;
        }

        if (+enteredAge < 1) {
            // by adding a plus, I force enteredAge to be a num instead of string by default
            setError({
                errorTitle: "Invalid input!",
                errorMessage: "Please enter age greater then 0.",
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge); // passing data to app so it can be displayed in another component

        setEnteredUsername("");
        setEnteredAge("");
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        console.log(enteredUsername);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        console.log(enteredAge);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && (
                <ErrorModal
                    errorTitle={error.errorTitle}
                    errorMessage={error.errorMessage}
                    onConfirmError={errorHandler}
                />
            )}
            <Card className={styleClasses.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        onChange={usernameChangeHandler}
                        value={enteredUsername}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />

                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
