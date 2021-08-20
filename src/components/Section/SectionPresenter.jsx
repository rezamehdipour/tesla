import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

// Icons
import { FiChevronDown } from "react-icons/fi";

// Scss
import "./SectionPresenter.scss";
const SectionPresenter = (props) => {
	const sectionPresenterElement = useRef();
	const sectionPresenterAnimatedArrow = useRef();

	const handleSectionPresenterScroll = (event) => {
		let a = Math.floor(window.scrollY / window.innerHeight);
		let b = window.innerHeight * a;
		let c = window.scrollY - b;
		let d = c / window.innerHeight; // Scrolled percentage of section

		// Hide Section Presenter Animated Arrow after first section
		if (a > 0) {
			if (sectionPresenterAnimatedArrow.current.style.display !== "none") {
				sectionPresenterAnimatedArrow.current.style.display = "none";
			}
		} else {
			if (sectionPresenterAnimatedArrow.current.style.display !== "block") {
				sectionPresenterAnimatedArrow.current.style.display = "block";
			}
		}

		// Handle Scroll Opacity Animation
		if (d >= 0 && d <= 0.1) {
			sectionPresenterElement.current.style.opacity = 1;
		} else if (d > 0.1 && d <= 0.4) {
			sectionPresenterElement.current.style.opacity = 1 - (d - 0.1) * 3.33;
		} else if (d > 0.4 && d < 0.8) {
			sectionPresenterElement.current.style.opacity = 0;
		} else if (d > 0.8) {
			sectionPresenterElement.current.style.opacity = (d - 0.8) * 5;
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleSectionPresenterScroll);
	}, []);

	const data = useSelector((state) => {
		return state.sectionPresenterData;
	});

	return (
		<div id="section-presenter" ref={sectionPresenterElement}>
			<div className="top">
				<h1 className="title">{data.title}</h1>
				<h2 className="subtitle" dangerouslySetInnerHTML={{ __html: data.subtitle }}></h2>
			</div>
			<div className="bottom">
				<a className="custom-order" href={data.buttons[0].url} target="_blank" rel="noreferrer">
					<span>{data.buttons[0].title}</span>
				</a>
				<a className="existing-inventory" href={data.buttons[1].url} target="_blank" rel="noreferrer">
					<span>{data.buttons[1].title}</span>
				</a>
			</div>
			<div className="arrow" ref={sectionPresenterAnimatedArrow}>
				<FiChevronDown />
			</div>
		</div>
	);
};

export default SectionPresenter;
