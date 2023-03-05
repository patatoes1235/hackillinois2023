import {useState} from "react";
import 'react-quill/dist/quill.snow.css';

const PostItem = (props) => {
	return ((props.display != "list" && props.cover))
	//return (props.display == "card" || (props.display != "list" && props.cover))
		? <ImgPost {...props} />
		: <TextPost {...props} />
	;
}

const TextPost = ({title, content, contact}) => {
	const [showFull, setShowFull] = useState(false);

	return (
		<div
			className={`${showFull ? "" : "partial-hide"} post-container text-post bordered ql-snow justify-content-center`}
			onClick={() => setShowFull(!showFull)}
		>
			<div className="post-title">{title}</div>
			{contact && <div className="post-subtitle"><b>Contact:</b> {contact}</div>}
			<div className="post-content ql-editor" dangerouslySetInnerHTML={{__html: content}}></div>
		</div>
	);
}

const ImgPost = ({title, content, contact, cover}) => {
	const [showFull, setShowFull] = useState(false);

	return (
		<div
			className={`post-container img-post bordered ql-snow col justify-content-center my-2`}
			onClick={() => setShowFull(!showFull)}
		>
			<img src={cover} />
			<div className="post-title">{title}</div>
		</div>
	);
}

export default PostItem;
