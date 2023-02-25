import Textbox from '../components/textbox';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navbar';
import '../styles/textbox.css';

function App({Component, pageProps}) {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default App;
