// const heading = React.createElement("h1",
//     {
//         id: "heading",
//         xyz: "random"
//     },
//     "Hello World from React and App.js");

const parent = React.createElement("div",
    { id: "parent" },
    [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h1", {}, "I am another h2 tag")
    ]
);

//JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);