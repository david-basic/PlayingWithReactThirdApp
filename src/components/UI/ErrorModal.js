import React, { Fragment } from "react";

import styleClasses from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
	return <div className={styleClasses.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
	return (
		<Card className={styleClasses.modal}>
			<header className={styleClasses.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styleClasses.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styleClasses.actions}>
				<Button onClick={props.onConfirm}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return (
		<Fragment>
			{createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById("backdrop-root")
			)}
		</Fragment>
	);
};

export default ErrorModal;
