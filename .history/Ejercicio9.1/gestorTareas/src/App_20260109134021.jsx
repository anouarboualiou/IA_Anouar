import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import { RootLayout } from "./layouts/RootLayout"
import { HomePage } from "./components/HomePage"
import { DashboardLayout } from "./layouts/DashboardLayout"
import { TaskListPage } from "./components/TaskListPage"
import { NewTaskPage } from "./components/NewTaskPage"


const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [

          {
            path:"/dashboard",
            element: <TaskListPage/>

          },
          {
            path:"/dashbard/new",
            element: <NewTaskPage/>

          }
        ]
      }
    ]
  }
])

function App() {
  

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
