import {useState} from "react";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import {Button} from 'react-bootstrap';
import Toolbar from './toolbar';

const Textbox = () => {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const modules = {
		toolbar: {
			container: '.toolbar-container',
		},
		history: {}
	};
	const formats = [
		'header',
		'bold', 'italic', 'underline', 'strike',
		'blockquote', 'code-block',
		'color', 'background',
		'list', 'bullet',
		'link', 'image', 'video'
	];

	const post = () => {
		// todo upload to db
		// title is a simple string
		// text is an HTML string
		console.log(title);
		console.log(text);
	}

	const cancel = () => {
		// todo go back to previous page
		console.log('return');
	}

	return (
		<div className="container w-100">
			<div className="col w-75 border border-primary justify-content-center">
				<input
					type="text"
					placeholder="Add a post title"
					value={title}
					onChange={(ev) => setTitle(ev.target.value)}
				/>
				<br/><br/>
				<Toolbar/>
				<ReactQuill
					theme="snow"
					modules={modules}
					formats={formats}
					placeholder={"Write post here"}
					value={text}
					onChange={setText}
				/>
				<Button onClick={cancel}>Cancel</Button>
				<Button onClick={post}>Post</Button>
			</div>
		</div>
	);
}

export default Textbox;
