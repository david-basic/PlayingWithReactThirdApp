import React, { useRef, useState } from "react";

import styleClasses from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (
            enteredName.trim().length === 0 ||
            enteredUserAge.trim().length === 0
        ) {
            setError({
                errorTitle: "Invalid input!",
                errorMessage: "Please enter name and age (non-empty values).",
            });
            return;
        }

        if (+enteredUserAge < 1) {
            // by adding a plus, I force enteredUserAge to be a num instead of string by default
            setError({
                errorTitle: "Invalid input!",
                errorMessage: "Please enter age greater then 0.",
            });
            return;
        }

        props.onAddUser(enteredName, enteredUserAge); // passing data to app so it can be displayed in another component
        
        // usually not okay to change state of a DOM object using refs but here
        // it is oke since we are changing the user input not the element itself
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
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
                    <input id="username" type="text" ref={nameInputRef} />

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef} />

                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
