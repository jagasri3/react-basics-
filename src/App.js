
// import React from 'react'
// import './App.css';

// export default function App() {
//   return (
//     <div>
//       <h1 style={{textAlign:"center"}}>DATA FORM</h1>
//       <form>
//         <table>
//           <tr></tr>
//           <tr>
//             <td CLASS = "R1">NAME</td>
//             <td CLASS = "R2"><input type = "text" placeholder='ENTER NAME'></input></td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">REG NO</td>
//             <td CLASS = "R2"><input type = "text" placeholder='ENTER REG NO'></input></td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">DATE OF BIRTH</td>
//             <td CLASS = "R2"><input type = "date"></input></td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">EMAIL</td>
//             <td CLASS = "R2"><input type = "email" placeholder='ENTER EMAIL ID'></input></td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">PHONE NUMBER</td>
//             <td CLASS = "R2"><input type = "text" placeholder='ENTER PHONE NUMBER'></input></td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">GENDER</td>
//             <td CLASS = "R2">
//                <input type = "radio" id = "male" name = "GENDER" value="MALE"></input>MALE
//               <input type = "radio" id = "female" name = "GENDER" value="FEMALE"></input>FEMALE
//             </td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">HOBBIES</td>
//             <td CLASS = "R2">
//                <input type = "checkbox" id = "draw" name = "HOBBIES" value="DRAWING"></input>DRAWING
//                <input type = "checkbox" id = "PLAY" name = "HOBBIES" value="PLAYING"></input>PLAYING
//                <input type = "checkbox" id = "SING" name = "HOBBIES" value="SINGING"></input>SINGING
//             </td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">COUNTRY</td>
//             <td CLASS = "R2">
//             <select id="country" name="country">
//               <option value="usa">India</option>
//               <option value="canada">Canada</option>
//               <option value="uk">UK</option>
//               <option value="australia">usa</option>
//               <option value="germany">Germany</option>
//              </select>
//             </td>
//           </tr>
//           <tr>
//             <td CLASS = "R1">COMMENTS</td>
//             <td CLASS = "R2">
//                <textarea placeholder='Type your comments'></textarea>
//             </td>
//           </tr>
//           <tr></tr>
//         </table>
//         <button>SUBMIT</button>
//       </form>
//     </div>
//   )
// }
// import FunctionalCom from "./COMPONENTS/FunctionalCom";
// export default function App()
// {
//   <div>
//     <FunctionalCom/>
//   </div>
// } 
// import React from 'react'

// export default function App()
// {
//   return(
//     <div>
//       <PropsFunctional name="sachin"></PropsFunctional>
//       <PropsClass college="Skct"></PropsClass>
//     </div>
//   )
// }
// import React from 'react'

// import PropsFunctionalEX1 from './COMPONENTS/Day4/PropsFunctionalEX1'
// import StateFunction from './COMPONENTS/Day4/StateFunction'
// import StateHoldsObject from './COMPONENTS/Day4/StateHoldsObject'
// import DefaultProps from './COMPONENTS/Day4/DefaultProps'
// import ArrowProps from './COMPONENTS/Day4/ArrowProps'
// import DyanamicRendering from './COMPONENTS/Day4/DyanamicRendering'


// export default function App()
// {

//     return (
//       <div>
//         <PropsFunctional name="jagasri"></PropsFunctional>
//         <PropsFunctionalEX1 college="SKCT" place="Coimbatore"></PropsFunctionalEX1>
//         <ArrowProps name="BTS"></ArrowProps>
//        <StateClassCom/>
//        <StateFunction/> 
//        <StateHoldsObject/>
//        <ParentChildComunication/>
//        <TwoWayBinding></TwoWayBinding>
//        <DefaultProps/>
//        <DyanamicRendering/>
//       </div>
//     )
  
// }

// App.js

// import React from 'react';
// //import SignIn from './SignIn';

// const App = () => {
//   return (
//     <div>
//       <h1>Your App Name</h1>
//       <SignIn />
//     </div>
//   );
// };

// export default App;

export default function App()
{
return(
  <div>
      <BrowserRouter>
      
      <ul>
        <li>
          <Link to="/login">Login Page</Link>
        </li>
        <li>
          <Link to  ="/signup">signup</Link>
        </li>
      </ul>
      <Routes>
       <Route path="/login" element= <Login/> ></Route>
       <Route path="/signup" element= <Signup/> ></Route>
         </Routes>

         </BrowserRouter>
      
</div>
)
}
