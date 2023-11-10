import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './Items/User';

function App() {
  

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Users />,
    },
  ]);

 
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
