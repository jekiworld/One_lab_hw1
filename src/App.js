import logo from './logo.svg';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Add from './page/Add';
import List from './page/List';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/add",
      element: <Add/>
    },
    {
      path: "/list",
      element: <List/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
