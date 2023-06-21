import React from 'react';
import ReactDOM  from 'react-dom/client';

const parent = React.createElement("div", { id: "parent" }, [
React.createElement("div", { id: "child" },[ 
React.createElement("h1", {}, "I am h1 tag"),
React.createElement("h2", {}, "I am h2 tag")
]),
React.createElement("div", { id: "child2" },[ 
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag")
    ])
])


const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello world from React");

//heading is just object created using React.createElement 
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);  // this method will put heading object to dom
root.render(parent);  
