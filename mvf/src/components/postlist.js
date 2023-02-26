import Post from "./post";

const Postlist = ({results}) => {
	return (
		<div className="post-list container-fluid w-75 mt-5">
			{results.map(({title, content, contact}, idx) => (<Post title={title} content={content} contact={contact} key={idx}/>))}
		</div>
	);
}

export default Postlist;
