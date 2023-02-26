import {useState} from "react";
import {Search} from "react-bootstrap-icons";
import axios from "axios";

const SearchBar = ({setResults}) => {
	const [keywords, setKeywords] = useState("");

	const search = async () => {
		//todo replace "keywords" with response, as array of objects
		//w/ keys title, content (do not need to remove excess keys)
		//
		//see example below

		//let response = await axios.get('/api/search', {
		//	keyword: keywords,
		//	getAll: false
		//});

		const test = [{
			title: "Hurray",
			content: `Search for "${keywords}" successful`,
			excessKeys: "Don't care"
		}, {
			title: "This is another post",
			content: "yayayayayay"
		}];

		setResults(test);
	}

	const handleKeyUp = (ev) => {
		if (ev.key === "Enter")
			search();
	}

	return (
		<div className="search-container container-fluid w-75 mt-5">
		    <input
    			type="text"
    			placeholder="Search..."
    			value={keywords}
    			onChange={(ev) => setKeywords(ev.target.value)}
    			onKeyUp={handleKeyUp}
			    className="searchbar"
    		/>
			<Search size={20} style={{width: "50px"}} onClick={search}/>
		</div>
	)
}

export default SearchBar;
