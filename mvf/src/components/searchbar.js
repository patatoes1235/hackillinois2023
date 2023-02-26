import {useState} from "react";
import {Search} from "react-bootstrap-icons";

const SearchBar = ({setResults}) => {
	const [keywords, setKeywords] = useState("");

	const search = () => {
		//todo search db for keywords
		setResults(keywords); // replace "keywords" with search results
	}

	const handleKeyUp = (ev) => {
		//todo consider searching as the user types, without waiting for enter?
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
