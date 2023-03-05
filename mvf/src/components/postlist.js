import PostItem from "./postitem";

const Postlist = ({results, display}) => {
	return (
		<div className={`post-list ${display}-view container-fluid w-75 mt-5`}>
			{results.map((props, idx) => (
				<PostItem key={idx} display={display} {...props}/>
			))}
		</div>
	);
}

export default Postlist;
