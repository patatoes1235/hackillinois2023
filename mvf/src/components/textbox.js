import {useState, useRef} from "react";
import axios from "axios";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import {Button} from 'react-bootstrap';
import FlashMessage from "./flashmessage";
import Toolbar from './toolbar';
import flashmessage from "./flashmessage";
import {useRouter} from "next/router";

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
	const [flash, setFlash] = useState(false);
	const quill = useRef();
	const router = useRouter();

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
		axios.post('/api/search', {
			title, content, contact
		}).then((res) => {
			//console.log(res);
			setTitle("");
			setContent("");
			setContact("");
			setFlash("Posted!");
		}).catch((err) => {
			//console.log(err);
		});
	}

	const cancel = () => {
		router.push('/');
	}

	return (
		<div className="container-fluid w-75 mt-5">
			<div className="col w-100 justify-content-center my-2">
				<input
					className="w-100 post-title mb-2"
					type="text"
					placeholder="Add a post title"
					value={title}
					onChange={(ev) => setTitle(ev.target.value)}
				/>
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
						className="h-100"
						type="text"
						placeholder="Add your contact info"
						value={contact}
						onChange={(ev) => setContact(ev.target.value)}
					/>
					<Button variant="success" className="float-right mx-2" onClick={post}>Post</Button>
					<Button variant="danger" className="float-right mx-2" onClick={cancel}>Cancel</Button>
				</div>
			</div>
			<FlashMessage duration={2000} visible={flash} callback={() => {
				//console.log('end flash');
				setFlash(false);
			}}>
				{flash}
			</FlashMessage>
		</div>
	);
}

export default Textbox;
