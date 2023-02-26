import {useState} from "react";

import SearchBar from "@/components/searchbar";
import Postlist from "@/components/postlist";

function Home() {
	const [results, setResults] = useState([
		{
			title: "Alphabet",
			content: "<p>the <em>quick</em> <span style=\"color: rgb(230, 0, 0);\">brown </span>fox jumped over the <strong>lazy dog</strong></p>"
		}, {
			title: "Out of context quote",
			content: "<blockquote>What is a volume?</blockquote><p>- Kenny</p>"
		}, {
			title: "Kenny's favorite string",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
	]);

	return (
		<div className="Home w-100 h-100 justify-content-center">
			<SearchBar setResults={setResults}/>
			<Postlist results={results}/>
		</div>
	)
}

export default Home;
