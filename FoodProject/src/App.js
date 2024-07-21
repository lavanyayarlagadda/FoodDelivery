import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import ContactUs from "./Components/ContactUs";
import RestaurantsDetails from "./Components/RestaurantsDetails";
import { Provider } from "react-redux";
import store from "./Store";
import Cart from "./Components/Cart";

// This structure printed in the below in core react by using React.createElement
/* <div id="parent">
<div id="child1">
<h1>H1Child1</h1>
<h2>H2Child2</h2>
</div>
<div id="child2">
<h1> H1Child2</h1>
<h2> H2Child2</h2>
</div>
</div> */

// react element always return a object like heading is print in a object
//attributes are like print props in object (attributeslike id and class)
//if we have multiple childrens that are need to be print by using array, the 3 atribute is the children
// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("div", { id: "child1" }, "h1Child1"),
//     React.createElement("div", { id: "child1" }, "h2Child1"),
//   ]),
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("div", { id: "child2" }, "h1Child2"),
//     React.createElement("div", { id: "child2" }, "h2Child2"),
//   ]),
// ]);
// console.log(heading)

// For react element
// const reactElement = (<h1 className="heading">React Element </h1>)
//  //For creating the root and accessing the root
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  //For render Purpose / print
//  root.render(reactElement);
// render method used to convert object into tags and and print that text.

//For react component
// for  creating the functional component in react we have to create name with caps letter
// if  call one component in another component that is called as component composation
//  const  ReactComponent1= ()=>{
//   return(
//     <div>
//       <ReactComponent/>
//       <h1>
//         React Component1
//       </h1>
//     </div>
//   )
//  }

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/aboutUs", element: <About /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/restaurant/:resId", element: <RestaurantsDetails /> },
      {path:"/cart",element:<Cart/>}
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={createRouter} />
  </Provider>
);
