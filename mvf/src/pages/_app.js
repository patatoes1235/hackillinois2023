import {useState, useEffect} from "react";
import Script from "next/script";
import Textbox from '../components/textbox';
// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navbar';
import '../styles/styles.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Fetch all posts (in /pages/api/posts.ts)

function App({Component, pageProps}) {
  const [darkmode, setDarkmode]	= useState(false);

  useEffect(() => {
	  console.log(darkmode);
  }, [darkmode]);

  return (

    <div className="App w-100 h-100">
      {/* <Script src="https://accounts.google.com/gsi/client" beforeInteractive /> */}
      <Script src="https://accounts.google.com/gsi/client" async defer/>

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
