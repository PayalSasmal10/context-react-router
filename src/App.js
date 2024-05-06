import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ListItems } from './components/ListItems';
import { DetailsPage } from './components/DetailsPage';
import { Price } from './components/Price';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListItems/>
    },
    {
      path: "details/:id",
      element: <DetailsPage/>
    },
    {
      path: "price/:id",
      element: <Price/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
