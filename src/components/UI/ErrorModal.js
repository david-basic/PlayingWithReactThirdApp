import React from "react";

import styleClasses from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
    return (
        <div>
            <div className={styleClasses.backdrop} onClick={props.onConfirmError}/>
            <Card className={styleClasses.modal}>
                <header className={styleClasses.header}>
                    <h2>{props.errorTitle}</h2>
                </header>
                <div className={styleClasses.content}>
                    <p>{props.errorMessage}</p>
                </div>
                <footer className={styleClasses.actions}>
                    <Button onClick={props.onConfirmError}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;
