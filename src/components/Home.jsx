// Components
import SideMenu from "./SideMenu/SideMenu";
import Header from "./Header/Header";
import Section from "./Section/Section";
import SectionPresenter from "./Section/SectionPresenter";

const Home = (props) => {
	return (
		<>
			<SideMenu />
			<Header />
			<SectionPresenter />
			<Section />
		</>
	);
};

export default Home;
