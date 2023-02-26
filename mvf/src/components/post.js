import 'react-quill/dist/quill.snow.css';

const Post = ({title, content}) => {
	return (
		<div className="post-container bordered ql-snow col w-100 justify-content-center my-2">
		    <div className="post-title">{title}</div>
			<div className="post-content ql-editor" dangerouslySetInnerHTML={{__html: content}}></div>
		</div>
	);
}

export default Post;
