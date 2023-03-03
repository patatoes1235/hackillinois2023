import {useState, useRef} from "react";
import axios from "axios";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import {Button} from 'react-bootstrap';
import Toolbar from './toolbar';
import { useRouter } from "next/router";
// import useSwr from 'swr';

// const poster = (query) =>
//   fetch('/api/hello', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({ query }),
//   })
//     .then((res) => res.json())
//     .then((json) => json.data);
// const fetcher = (query) =>
// 	fetch('/api/hello',
// 	{
// 		method: 'GET',
// 		headers: {
// 			'Content-type': 'application/json',
// 		},
// 		body: JSON.stringify({query})
// 			.then((res) => res.json())
// 			.then((json => json.data))
// 	})

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
	const [contact, setContact] = useState('');
	const [content, setContent] = useState('');
	const quill = useRef();
	const router = useRouter();
	// let quillDelta = new Delta();

	// ReactQuill.on('text-change', function(delta, oldDelta, source) {
	// 	console.log(delta, oldDelta, source);
	// 	quillDelta = concat(delta);
	// 	console.log(quillDelta);
	// })

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
		let delta = JSON.stringify(quill.current.getEditor().getContents());
		console.log(delta)
		axios.post('/api/search', {
			title, delta, contact
		}).then((res) => {
			console.log(res);
			setTitle("");
			setContent("");
			setContact("");
		}).catch((err) => {
			console.log(err);
		});
	}

	const cancel = () => {
		router.push('/')
		// axios.get('/api/search', {
		// 	params: {
		// 	keyword: "Kenny",
		// 	getAll: false
		// }}).then((res) => {
		// 	console.log(res);
		// }).catch((err) => {
		// 	console.log(err);
		// });
	}

	return (
		<div className="container-fluid w-75 mt-5">
			<div className="col w-100 justify-content-center my-2">
				<div className="row w-100 my-2">
					<div className="col-4 mb-2">
						<input
							className="w-100 post-title"
							type="text"
							placeholder="Add a post title"
							value={title}
							onChange={(ev) => setTitle(ev.target.value)}
						/>
					</div>
				</div>
				<Toolbar quill={quill} />
				<ReactQuill
					className="my-2 h-100"
					theme="snow"
					modules={modules}
					formats={formats}
					placeholder={"Write post here"}
					value={content}
					onChange={setContent}
					forwardedRef={quill}
				/>
				<div className="col w-100">
					<input
						className="h-100 float-right"
						type="text"
						placeholder="Add your contact info"
						value={contact}
						onChange={(ev) => setContact(ev.target.value)}
					/>
					<Button className="float-right mx-2 post" style={{float: "right"}} onClick={post}>Post</Button>
					<Button className="float-right mx-2 cancel" style={{float: "right"}} onClick={cancel}>Cancel</Button>
				</div>
			</div>
		</div>
	);
}

export default Textbox;
