import { useState } from "react";
import { Link as Scroll } from "react-scroll";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu } from "../../redux/sideMenu/sideMenuSlice";

// Svg
import { VscChromeClose } from "react-icons/vsc";
import { IoIosGlobe } from "react-icons/io";
import { HiOutlineChevronLeft } from "react-icons/hi";

// Scss
import "./SideMenu.scss";
const Menu = (props) => {
	const dispatch = useDispatch();

	const sideMenuOptions = [
		{ title: "existing inventory", url: "https://www.tesla.com/inventory/new/m3" },
		{ title: "used inventory", url: "https://www.tesla.com/inventory/used/m3" },
		{ title: "trade-in", url: "https://www.tesla.com/tradein" },
		{ title: "test drive", url: "https://www.tesla.com/drive" },
		{ title: "cybertruck", url: "https://www.tesla.com/cybertruck" },
		{ title: "roadster", url: "https://www.tesla.com/roadster" },
		{ title: "semi", url: "https://www.tesla.com/semi" },
		{ title: "charging", url: "https://www.tesla.com/charging" },
		{ title: "powerwall", url: "https://www.tesla.com/powerwall" },
		{ title: "commercial energy", url: "https://www.tesla.com/commercial" },
		{ title: "utilities", url: "https://www.tesla.com/utilities" },
		{ title: "find us", url: "https://www.tesla.com/findus" },
		{ title: "support", url: "https://www.tesla.com/support" },
		{ title: "investor relations", url: "https://ir.tesla.com/" },
	];

	const showSideMenu = useSelector((state) => state.sideMenu);

	const handleToggleSideMenu = () => {
		dispatch(toggleSideMenu());
	};

	const [languagesMenuShow, setLanguagesMenuShow] = useState(false);
	const handleLanguageMenuShow = () => {
		setLanguagesMenuShow((prevState) => !prevState);
	};
	const languages = [
		{
			continent: "north america",
			countries: [
				{ country: "united states", languages: ["english"] },
				{ country: "canada", languages: ["english", "Français"] },
				{ country: "méxico", languages: ["español"] },
				{ country: "puerto rico", languages: ["english", "Español"] },
			],
		},
		{
			continent: "europe",
			countries: [
				{ country: "belgium", languages: ["nederlands", "Français"] },
				{ country: "česko", languages: ["čeština"] },
				{ country: "danmark", languages: ["dansk"] },
				{ country: "deutschland", languages: ["deutsch"] },
			],
		},
		{
			continent: "middle-east",
			countries: [
				{ country: "ישראל", languages: ["עִברִית"] },
				{ country: "UAE", languages: ["english"] },
				{ country: "jordan", languages: ["english"] },
			],
		},
		{
			continent: "asia/pacific",
			countries: [
				{ country: "中国大陆", languages: ["简体中文"] },
				{ country: "hong kong", languages: ["繁體中文", "english"] },
				{ country: "singapore", languages: ["english"] },
			],
		},
	];

	return (
		<>
			<div
				id="sidemenu-backdrop"
				className={showSideMenu === true ? "show" : null}
				onClick={(e) => handleToggleSideMenu(e)}
			></div>
			<aside id="sidemenu" className={showSideMenu === true ? "show" : null}>
				<div className="controls">
					{languagesMenuShow && (
						<button className="back" onClick={() => handleLanguageMenuShow()}>
							<HiOutlineChevronLeft width="5px" />
							<span>Back</span>
						</button>
					)}
					<button className="close" onClick={(e) => handleToggleSideMenu(e)}>
						<VscChromeClose />
					</button>
				</div>
				<div className="scrollable-menu">
					{!languagesMenuShow && (
						<>
							<ol className="menu">
								<li className="show-till-1200">
									<Scroll to="model-s" spy={true} smooth={true} duration={500} offset={0}>
										model s
									</Scroll>
								</li>
								<li className="show-till-1200">
									<Scroll to="model-3" spy={true} smooth={true} duration={500} offset={0}>
										model 3
									</Scroll>
								</li>
								<li className="show-till-1200">
									<Scroll to="model-x" spy={true} smooth={true} duration={500} offset={0}>
										model x
									</Scroll>
								</li>
								<li className="show-till-1200">
									<Scroll to="model-y" spy={true} smooth={true} duration={500} offset={0}>
										model y
									</Scroll>
								</li>
								<li className="show-till-1200">
									<Scroll
										to="solar-roof"
										spy={true}
										smooth={true}
										duration={500}
										offset={0}
									>
										solar roof
									</Scroll>
								</li>
								<li className="show-till-1200">
									<Scroll
										to="solar-panels"
										spy={true}
										smooth={true}
										duration={500}
										offset={0}
									>
										solar panels
									</Scroll>
								</li>
								{sideMenuOptions.map(({ title, url }, index) => {
									return (
										<li key={index}>
											<a href={url} target="_blank" rel="noreferrer">
												{title}
											</a>
										</li>
									);
								})}
							</ol>
							<div className="lang" onClick={() => handleLanguageMenuShow()}>
								<div className="icon">
									<IoIosGlobe />
								</div>
								<div className="texts">
									<div className="country">United States</div>
									<div className="language">English</div>
								</div>
							</div>
						</>
					)}

					{languagesMenuShow &&
						languages.map((language, index) => {
							return (
								<div className="language-area" key={index}>
									<h3 className="continent">{language.continent}</h3>
									<ol>
										{language.countries.map(({ country, languages }, index) => {
											return (
												<li
													key={index}
													className={country === "united states" ? "active" : null}
												>
													<div className="country">
														<h4>{country}</h4>
													</div>
													<div className="languages">
														{languages.map((language, i) => (
															<a href="/" key={i}>
																{language}
															</a>
														))}
													</div>
												</li>
											);
										})}
									</ol>
								</div>
							);
						})}
				</div>
			</aside>
		</>
	);
};

export default Menu;
