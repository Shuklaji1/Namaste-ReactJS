import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://marketplace.canva.com/EAFowsrK6x8/1/0/1600w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-rYbQJ_qtaz8.jpg"></img>
            </div>
            <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
        </ul>
            </div>
        </div>
    )
}
const ResCard = (props) => {

    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisines}</h4>
            <h4>4.4 stars</h4>
            <h4>38 mins</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
        <div className="Search"> Search</div>
        <div className="res-container"> 
        <ResCard
        resName= "random Foods"
        cuisines="Biryani, North Indians"
        />
        <ResCard
        resName= "Lodu Foods"
        cuisines="land, loda paav"
        />
        <ResCard
        resName= "res Foods"
        cuisines= "paav,chomt"
        />
        </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className= "app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);


// const heading = React.createElement("h1",
//     {
//         id: "heading",
//         xyz: "random"
//     },
//     "Hello World from React and App.js");


// React Element
// React.createElement ==> Object ==> HTMLElement(render)

//JSX
//--JSX makes life easy
// const jsxHeading = (< h1 id="heading"
//     className="head" tabIndex= "5" >
//     Namaste React using JSX 
//     You can write here whatever</h1>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); 

// React Component
//--> we are going to use functional Component
// const HeadingComponent = () => {
//     return (
//         <h1>
//             Namaste React using React Component
//         </h1>
//     )    
// };
// const Heading = () => (
//     <h2 className="random">
//         It's a new things
//     </h2>
// )
// const Title = () => (
//     <h1 className="random">
//         Another Nested Things
//     </h1>
// )
// const random = (
//     <h1>
//         New way to nest things
//     </h1>
// )
// const number = 10000;
// const HeadingComponent = () => (
//     <div id = "container">
//         {random}
//         <h1> {number} </h1>
//         <Heading/>
//         <h1 id = "heading">
//         Namaste React with React Component
//     </h1>
//     <Title/>
//     </div>
    
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);

