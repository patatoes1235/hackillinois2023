import {useState, useEffect} from "react";

const FlashMessage = ({visible, duration, callback, children}) => {
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		//console.log("start flash");
		if (visible)
			setTimer(setTimeout(callback, duration));
		else {
			window.clearTimeout(timer);
			callback();
		}

		return () => window.clearTimeout(timer);
	}, [visible]);

	return (visible) ? (<div className="flash-message alert alert-warning">{children}</div>) : null;
}

export default FlashMessage;
