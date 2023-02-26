import {useState} from "react";
import 'react-quill/dist/quill.snow.css';

const Post = ({title, content, contact}) => {
	const [showFull, setShowFull] = useState(false);

	return (
		<div
			className={`${showFull ? "" : "partial-hide"} post-container bordered ql-snow col w-100 justify-content-center my-2`}
			onClick={() => setShowFull(!showFull)}
		>
		    <div className="post-title">{title}</div>
			{contact && <div className="post-subtitle"><b>Contact:</b> {contact}</div>}
			<div className="post-content ql-editor" dangerouslySetInnerHTML={{__html: content}}></div>
		</div>
	);
}

export default Post;
