import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ShowFootage from './SecondPageComponent/ShowFootage';
import Incidents from './ThirdPageComponent/Incidents';
import Error from './Error';
import MainBody from './FirstPageComponent/MainBody';

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <Error/>,
    children: [
      {
        path: "/",
        element: <MainBody/>
      },
      {
        path: "/showFootage",
        element: <ShowFootage/>
      },
      {
        path: "/incidents",
        element: <Incidents/>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={AppRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
