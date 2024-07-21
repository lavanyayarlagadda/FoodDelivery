import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./Components/VideoContainer";
import WatchPage from "./Components/WatchPage";


function App() {
  const appRouter = createBrowserRouter([{
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<VideoContainer/>, 
      },
      {
        path:'/watch',
        element:<WatchPage/>, 
      }
    ]
  }])
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
