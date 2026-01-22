
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { PostListPage } from './components/PostListPage';
import { PostDetailPage } from './components/PostDetailPage';
import { Children } from 'react';
import { RootLayout } from './components/RootLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [

      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/posts",
        element: <PostListPage />
      },
      {
        path: "/posts/:postId",
        element: <PostDetailPage />
      }

    ]

  }




])


function App() {

  return (
    <>

      <RouterProvider router={router} />

    </>
  )

}

export default App
