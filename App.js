import React from 'react';
import ReactDOM  from 'react-dom/client';


//React Element 
const title =  (
    <h1 className='head' id="heading">Namaste From React 😊😂</h1>
    );

const Title = () => (
<h1 className='head' id="heading">Namaste From React 😊</h1>
);

// const HeaderComponent = () =>{
//     return <h1>Namaste React Functional Component 🚀</h1>
// }
//React Fragment  - behave like empty tag
const HeaderComponent = () =>( 

    <React.Fragment>
     <div id="container">
      {/* {title} */}
      <Title/>
     <h1>Namaste React Functional Component 🚀</h1>
     <div id='container-2'></div>
     </div>
     </React.Fragment>

     );

// const HeaderComponent1 = () => <h1>Namaste React Functional Component 🚀</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeaderComponent/>)


// const parent = React.createElement("div", { id: "parent" }, [
// React.createElement("div", { id: "child" },[ 
// React.createElement("h1", {}, "I am h1 tag"),
// React.createElement("h2", {}, "I am h2 tag")
// ]),
// React.createElement("div", { id: "child2" },[ 
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag")
//     ])
// ])


// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello world from React");

// //heading is just object created using React.createElement 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);  // this method will put heading object to dom
// root.render(parent);  
