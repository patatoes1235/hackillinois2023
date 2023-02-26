import {useState} from "react";
import {Search} from "react-bootstrap-icons";
import axios from "axios";

const SearchBar = ({setResults}) => {
	const [keywords, setKeywords] = useState("");

	const search = async () => {
		let response = await axios.get('/api/search', {
			params: {
			keyword: keywords,
			getAll: false
		}});
		console.log(response.data);

		setResults(response.data);
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
