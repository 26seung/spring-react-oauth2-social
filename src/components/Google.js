// import React from 'react';
// import { GoogleLogin } from "react-google-login";
// import Axios from "axios";


// const Google = () => {

//     const config = {
//         headers: {
//           "Content-Type": "application/json; charset=utf-8",
//         },
//       };
      
//       const responseGoogle = async (response) => {
//         console.log(1, response);
//         let jwtToken = await Axios.post(
//           "http://localhost:8080/api/auth/login",
//           JSON.stringify(response),
//           config
//         );
//         if (jwtToken.status === 200) {
//           console.log(2, jwtToken.data);
//           localStorage.setItem("jwtToken", jwtToken.data);
//         }
//       };

//     return (
//         <div>
//             <GoogleLogin
//              clientId="985224645316-ctpdrv84dd7uncunsfvrr66c0f66gdmr.apps.googleusercontent.com"
//              buttonText="Login"
//              onSuccess={responseGoogle}
//              onFailure={responseGoogle}
//              cookiePolicy={"single_host_origin"}
//            />
//         </div>
//     );
// };

// export default Google;