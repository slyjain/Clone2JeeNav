import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App';
import Dashboard from './Components/Dashboard/DashboardChatGPT';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App classname="" />,
    children: [
      {
        index: true,
        element: <LearnColumn />
      }, {
        path: "/dashboard",
        element: <Dashboard name={"Samyak Rote"} />
      }

    ]
  },

]);
import "./index.css"
import LearnColumn from './Components/LearnColumn/LearnColumn';


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />

    </ChakraProvider>
  </React.StrictMode>,
)