import {useState, useEffect} from "react";
import Textbox from '../components/textbox';
// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navbar';
import '../styles/styles.css';

// Fetch all posts (in /pages/api/posts.ts)

function App({Component, pageProps}) {
  const [darkmode, setDarkmode]	= useState(false);

  useEffect(() => {
	  console.log(darkmode);
  }, [darkmode]);

  return (
    <div className="App w-100 h-100">
      <div>
        <NavBar darkmode={darkmode} setDarkmode={setDarkmode}/>
      </div>
      <div className="w-100 h-100">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default App;
