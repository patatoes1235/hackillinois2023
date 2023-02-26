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
		<div className="container-fluid w-75 mt-5">
			<div className="col w-100 justify-content-center my-2">
				<div className="row w-100 my-2 ">
					<div className="col-4 mb-2">
						<input
							className="w-100 p-2"
							type="text"
							placeholder="Add a post title"
							value={title}
							onChange={(ev) => setTitle(ev.target.value)}
							style={{fontWeight: "bold", fontSize: "1.4em"}}
						/>
					</div>
				</div>
				<Toolbar/>
				<ReactQuill
					className="my-2 h-100"
					theme="snow"
					modules={modules}
					formats={formats}
					placeholder={"Write post here"}
					value={text}
					onChange={setText}
				/>
				<div className="col w-100">
					<Button className="float-right mx-2" style={{float: "right"}} onClick={post}>Post</Button>
					<Button className="float-right mx-2" style={{float: "right"}} onClick={cancel}>Cancel</Button>
				</div> 
			</div>
		</div>
	);
}

export default Textbox;
