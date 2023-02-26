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
		if (ev.key == "Enter")
			search();
	}

	return (
		<div>
		    <input
    			type="text"
    			placeholder="Search..."
    			value={keywords}
    			onChange={(ev) => setKeywords(ev.target.value)}
    			onKeyUp={handleKeyUp}
			    style={{padding: "2px", margin: "10px", marginLeft: "40px"}}
    		/>
			<Search size={20}/>
		</div>
	)
}

export default SearchBar;
