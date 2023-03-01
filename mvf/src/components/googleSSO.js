import Script from 'next/script'
import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/router';

const handleCredentialResponse = (response) => {
  
  console.log("Encoded JWT ID token: " + response.credential);
};
const signin = function () {
    console.log("ONLOAD COMPLETE");
    google.accounts.id.initialize({
    client_id: "651818466301-l0vv3o7h1qa0et26c7lue8ecdhd1j90o.apps.googleusercontent.com",
    callback: handleCredentialResponse
  })
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
  );
}

function GoogleSSO() {
  
  return (
//     <GoogleLogin
//   onSuccess={credentialResponse => {
//     console.log(credentialResponse);
//   }}
//   onError={() => {
//     console.log('Login Failed');
//   }}
// />
  <div>
      {/* <div className="root"
        id="buttonDiv"
        data-type="icon"
        data-shape="circle"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        onClick={signin}>google button</div>  */}

      <div id="g_id_onload"
        data-client_id="651818466301-l0vv3o7h1qa0et26c7lue8ecdhd1j90o.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="http://localhost/api/signin"
        data-auto_prompt="false"> 
      </div>
      <div className="g_id_signin"
        data-type="icon"
        data-shape="circle"
        data-theme="outline"
        data-text="signin_with"
        data-size="large">
      </div>
      <span onLoad={signin}></span>
  </div>
  );
}

export default GoogleSSO;