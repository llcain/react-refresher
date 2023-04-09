import React from 'react';
import ReactDom from 'react-dom/client';
import '../src/index.css';

import Garage from './components/Garage';

// const element = <h1>Hello World</h1>;

// const colors =["red", "green", "blue"];
// const items = colors.map(color => `<li>${color}</li>`);
// console.log(items);

// const myelement = (
//     <table>
//       <tr>
//         <th>Name</th>
//       </tr>
//       <tr>
//         <td>John</td>
//       </tr>
//       <tr>
//         <td>Elsa</td>
//       </tr>
//     </table>
//   );

// const myelement = <h1>LaQuisha Cain</h1>

//  ReactDom.render(myelement, document.getElementById('root'));



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Garage />);
 



