import { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setSectionPresenterData } from "../../redux/sectionPresenter/sectionPresenterDataSlice";
import { toggleSideMenu } from "../../redux/sideMenu/sideMenuSlice";

// Libraries
import { Link as Scroll } from "react-scroll";

// Components
import Modal from "../Modal/Modal";

// Svg
import TeslaLogo from "../../svg/TeslaLogo";

// Scss
import "./Header.scss";

const Header = (props) => {
	const dispatch = useDispatch();

	// Changes SectionPresenter Data in Redux
	const handleChangeSectionPresenter = (elementId, element, data) => {
		dispatch(setSectionPresenterData(data));
	};

	const productsData = {
		modelS: {
			title: "model s",
			subtitle:
				"Order Online for <a href='https://www.tesla.com/support/taking-delivery?redirect=no' target='_blank'>Touchless Delivery</a>",
			buttons: [
				{
					title: "custom order",
					url: "https://www.tesla.com/models/design",
				},
				{
					title: "existing inventory",
					url: "https://www.tesla.com/inventory/new/ms",
				},
			],
		},
		// ——————————
		model3: {
			title: "model 3",
			subtitle:
				"Order Online for <a href='https://www.tesla.com/support/taking-delivery?redirect=no' target='_blank'>Touchless Delivery</a>",
			buttons: [
				{
					title: "custom order",
					url: "https://www.tesla.com/model3/design",
				},
				{
					title: "existing inventory",
					url: "https://www.tesla.com/inventory/new/m3",
				},
			],
		},
		// ——————————
		modelX: {
			title: "model x",
			subtitle:
				"Order Online for <a href='https://www.tesla.com/support/taking-delivery?redirect=no' target='_blank'>Touchless Delivery</a>",
			buttons: [
				{
					title: "custom order",
					url: "https://www.tesla.com/modelx/design",
				},
				{
					title: "existing inventory",
					url: "https://www.tesla.com/inventory/new/mx",
				},
			],
		},
		// ——————————
		modelY: {
			title: "model y",
			subtitle:
				"Order Online for <a href='https://www.tesla.com/support/taking-delivery?redirect=no' target='_blank'>Touchless Delivery</a>",
			buttons: [
				{
					title: "custom order",
					url: "https://www.tesla.com/modely/design",
				},
				{
					title: "existing inventory",
					url: "https://www.tesla.com/inventory/new/my",
				},
			],
		},
		// ——————————
		solarRoof: {
			title: "solar roof",
			subtitle: "Produce Clean Energy From Your Roof",
			buttons: [
				{
					title: "order now",
					url: "https://www.tesla.com/solarroof/design",
				},
				{
					title: "learn more",
					url: "https://www.tesla.com/solarroof",
				},
			],
		},
		// ——————————
		solarPanels: {
			title: "solar panels",
			subtitle: "Lowest Cost Solar Panels in America",
			buttons: [
				{
					title: "order now",
					url: "https://www.tesla.com/energy/design",
				},
				{
					title: "learn more",
					url: "https://www.tesla.com/solarpanels",
				},
			],
		},
	};

	const handleToggleSideMenu = (e) => {
		e.preventDefault();
		dispatch(toggleSideMenu());
	};

	// Popup
	const [showPopup, setShowPopup] = useState(false);
	const handleToggleShowPopup = () => {
		setShowPopup((prevState) => !prevState);
	};

	return (
		<>
			<Modal show={showPopup} toggleShow={handleToggleShowPopup} />
			<header id="header">
				<div className="container mx-auto">
					<div className="logo" onClick={() => handleToggleShowPopup()}>
						<TeslaLogo />
					</div>
					<ol>
						<li>
							<Scroll to="model-s" smooth={true} duration={500} offset={0}>
								model s
							</Scroll>
							<Scroll
								className="hidden"
								to="model-s"
								spy={true}
								offset={-200}
								onSetActive={(elementId, element) =>
									handleChangeSectionPresenter(elementId, element, productsData.modelS)
								}
							>
								model s
							</Scroll>
						</li>
						<li>
							<Scroll to="model-3" smooth={true} duration={500}>
								model 3
							</Scroll>
							<Scroll
								className="hidden"
								to="model-3"
								spy={true}
								offset={-200}
								onSetActive={(elementId, element) =>
									handleChangeSectionPresenter(elementId, element, productsData.model3)
								}
							>
								model 3
							</Scroll>
						</li>
						<li>
							<Scroll to="model-x" smooth={true} duration={500} offset={0}>
								model x
							</Scroll>
							<Scroll
								className="hidden"
								to="model-x"
								spy={true}
								offset={-200}
								onSetActive={(elementId, element) =>
									handleChangeSectionPresenter(elementId, element, productsData.modelX)
								}
							>
								model x
							</Scroll>
						</li>
						<li>
							<Scroll to="model-y" smooth={true} duration={500} offset={0}>
								model y
							</Scroll>
							<Scroll
								className="hidden"
								to="model-y"
								spy={true}
								offset={-200}
								onSetActive={(elementId, element) =>
									handleChangeSectionPresenter(elementId, element, productsData.modelY)
								}
							>
								model y
							</Scroll>
						</li>
						<li>
							<Scroll to="solar-roof" smooth={true} duration={500} offset={0}>
								solar roof
							</Scroll>
							<Scroll
								className="hidden"
								to="solar-roof"
								spy={true}
								offset={-200}
								onSetActive={(elementId, element) =>
									handleChangeSectionPresenter(elementId, element, productsData.solarRoof)
								}
							>
								solar roof
							</Scroll>
						</li>
						<li>
							<Scroll to="solar-panels" smooth={true} duration={500} offset={0}>
								solar panels
							</Scroll>
							<Scroll
								className="hidden"
								to="solar-panels"
								spy={true}
								offset={-200}
								onSetActive={(elementId, element) =>
									handleChangeSectionPresenter(elementId, element, productsData.solarPanels)
								}
							>
								solar panels
							</Scroll>
						</li>
					</ol>
					<ol>
						<li>
							<a href="https://shop.tesla.com/" target="_blank" rel="noreferrer">
								shop
							</a>
						</li>
						<li>
							<a href="https://www.tesla.com/teslaaccount" target="_blank" rel="noreferrer">
								account
							</a>
						</li>
						<li>
							<a href="/" onClick={(e) => handleToggleSideMenu(e)}>
								menu
							</a>
						</li>
					</ol>
					<ol>
						<li>
							<a href="/" onClick={(e) => handleToggleSideMenu(e)}>
								menu
							</a>
						</li>
					</ol>
				</div>
			</header>
		</>
	);
};

export default Header;
