import {useState, useRef} from "react";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import {Button} from 'react-bootstrap';
import Toolbar from './toolbar';

// import ReactQuill dynamically
// required for Next.JS
const ReactQuill = dynamic(
	async () => {
		const { default: Quill } = await import("react-quill");

		return ({ forwardedRef, ...props }) => <Quill ref={forwardedRef} {...props} />;
	},
	{
		ssr: false
	}
);

const Textbox = () => {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const quill = useRef();

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
				<Toolbar quill={quill} />
				<ReactQuill
					theme="snow"
					modules={modules}
					formats={formats}
					placeholder={"Write post here"}
					value={text}
					onChange={setText}
					forwardedRef={quill}
				/>
				<Button onClick={cancel}>Cancel</Button>
				<Button onClick={post}>Post</Button>
			</div>
		</div>
	);
}

export default Textbox;
