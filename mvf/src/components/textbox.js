import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

function Textbox() {
	return (
		<div class="container w-100">
			<div class="col w-75 border border-primary justify-content-center">
				<ReactQuill theme="snow" />
			</div>
		</div>
	);
}

export default Textbox;
