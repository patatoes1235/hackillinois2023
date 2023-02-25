import {useState, useEffect, useRef} from "react";
import ReactQuill from 'react-quill';
import {Button} from 'react-bootstrap';
import 'react-quill/dist/quill.snow.css';
import '../textbox.css';

const Icon = ({name}) => {
	return (
		<span className="material-icons">
			{name}
		</span>
	);
};
const Toolbar = () => {
	const [expanded, setExpanded] = useState(false);
	const [showExpand, setShowExpand] = useState(true);

	const toolbarRef = useRef();

	//update toolbar on resize, expand, collapse
	useEffect(() => {
		window.addEventListener('resize', updateToolbar);
		updateToolbar();
		return () => window.removeEventListener('resize', updateToolbar); //cleanup
	}, [expanded]);

	//updates button groups based on position and collapse needs
	const updateToolbar = () => {
		const groups = toolbarRef.current.children;
		const xPos = groups[0].getBoundingClientRect().x; //x pos of leftmost elements
		const yPos = groups[0].getBoundingClientRect().y; //y pos of elements on first line

		let collapseRest = false;
		for (const group of groups) {
			//collapse/expand
			if (collapseRest)
				group.classList.add('collapsed');
			else
				group.classList.remove('collapsed'); //required to determine pos

			if (!expanded && group.getBoundingClientRect().y !== yPos) {
				group.classList.add('collapsed');
				collapseRest = true;
			}

			//hide divider on leftmost children
			if (group.getBoundingClientRect().x === xPos)
				group.classList.add('leftmost');
			else
				group.classList.remove('leftmost');
		}

		//remove expand button if not needed
		setShowExpand(groups[groups.length - 1].getBoundingClientRect().y !== yPos);
	}

	const undo = () => {
		//todo
		//quill.history.undo();
	}

	const redo = () => {
		//todo
		//quill.history.redo();
	}

	return (
		<div className="toolbar-container">
			<div id="toolbar" ref={toolbarRef}>
			    <span className="ql-formats">
			      <button className="tooltipped" title="undo" onClick={undo}>
				      <Icon name="undo" size="18px"/>
			      </button>
				     <button className="tooltipped" title="redo" onClick={redo}>
				      <Icon name="redo" size="18px"/>
			      </button>
			    </span>
				<span className="ql-formats">
    				<button className="ql-bold tooltipped" title="bold"></button>
    				<button className="ql-italic tooltipped" title="italic"></button>
    				<button className="ql-underline tooltipped" title="underline"></button>
    				<button className="ql-strike tooltipped" title="strikethrough"></button>
			    </span>
				<span className="ql-formats">
    		        <select className="ql-color tooltipped" title="font color"></select>
    		        <select className="ql-background tooltipped" title="highlight"></select>
    		    </span>
				<span className="ql-formats">
    		        <button className="ql-list tooltipped" value="ordered" title="numbered list"></button>
    		        <button className="ql-list tooltipped" value="bullet" title="bulleted list"></button>
    		        <button className="ql-list tooltipped" value="check" title="checklist"></button>
    		    </span>
				<span className="ql-formats">
    		        <button className="ql-blockquote tooltipped" title="blockquote"></button>
    				<button className="ql-code-block tooltipped" title="insert code block"></button>
    		    </span>
				<span className="ql-formats">
    				<button className="ql-link tooltipped" title="insert link"></button>
    				<button className="ql-image tooltipped" title="insert image"></button>
    				<button className="ql-video tooltipped" title="insert video"></button>
    		    </span>
				<span className="ql-formats">
    		        <button className="ql-clean tooltipped" title="remove formatting"></button>
    		    </span>
			</div>

			<button className={`expand-button ${!showExpand && 'hidden'}`} onClick={() => setExpanded(!expanded)}>
				<Icon name={expanded ? 'expand_less' : 'expand_more'} />
			</button>
		</div>
	);
};

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
				<input type="text" value={title} onChange={(ev) => setTitle(ev.target.value)} />
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
