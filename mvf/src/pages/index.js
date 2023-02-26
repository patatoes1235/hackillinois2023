import {useState} from "react";

import Textbox from "../components/textbox";
import SearchBar from "@/components/searchbar";

function Home() {
	const [results, setResults] = useState();

	return (
		<div className="Home w-100 h-100 justify-content-center">
			<SearchBar />
		</div>
	)
}

export default Home;
