// { <div id="parent">
//        <div id="child">
//            <h1>I am h1 tag</h1>
//         <div id="child2">
//             <h2>I am h2 tag<h2>
//         </div> 
//     </div> }


const parent=React.createElement("div", 
{id:"parent"},
[React.createElement("div",
 {id:"Child"},
React.createElement("h1",
{},
"I am h1 haha tag"))],
[React.createElement("div",
 {id:"CHILD"},
React.createElement("h2",
{},
"I am h2 haha tag"))]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);