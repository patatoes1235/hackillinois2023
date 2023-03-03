import {useState} from "react";
import 'react-quill/dist/quill.snow.css';
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";


const Post = ({title, content, contact}) => {
	const [showFull, setShowFull] = useState(false);
	console.log("JSON OBJECT: ", JSON.parse(content));
	let converter = new QuillDeltaToHtmlConverter(JSON.parse(content)["ops"], {});
	let converted_string = converter.convert();
	console.log("CONVERTED STRING: ", converted_string);
	return (
		<div
			className={`${showFull ? "" : "partial-hide"} post-container bordered ql-snow col w-100 justify-content-center my-2`}
			onClick={() => setShowFull(!showFull)}
		>
		    <div className="post-title">{title}</div>
			{contact && <div className="post-subtitle"><b>Contact:</b> {contact}</div>}
			<div className="post-content ql-editor" dangerouslySetInnerHTML={{__html: converted_string}}></div>
		</div>
	);
}

export default Post;
