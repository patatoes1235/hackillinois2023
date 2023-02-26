import Textbox from '../components/textbox';
// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navbar';
import '../styles/textbox.css';

function App({Component, pageProps}) {
  return (
    <div className="App w-100 h-100">
      <div>
        <NavBar />
      </div>
      <div className="w-100 h-100">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default App;
