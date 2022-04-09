import ReactDom from "react-dom";
import { Fragment } from "react";

// Svgs
import { VscChromeClose } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

// Scss
import "./Modal.scss";

const Modal = ({ show, toggleShow }) => {
	if (!show) return null;

	return ReactDom.createPortal(
		<Fragment>
			<div className="backdrop" onClick={toggleShow}></div>
			<div className="container">
				<div className="close" onClick={toggleShow}>
					<VscChromeClose />
				</div>

				<div className="header">
					<div className="projectName">&lt;Tesla HomePage Clone/&gt;</div>
					<div className="author">by Reza Mehdipour</div>
				</div>

				<div className="socials">
					<a
						href="https://github.com/rezamehdipour"
						target="_blank"
						rel="noreferrer"
						className="github"
					>
						<SiGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/rezamehdipour/"
						target="_blank"
						rel="noreferrer"
						className="linkedin"
					>
						<FaLinkedin />
					</a>
				</div>
			</div>
		</Fragment>,
		document.getElementById("modal")
	);
};

export default Modal;
