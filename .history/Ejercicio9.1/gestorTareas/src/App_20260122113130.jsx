import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';

import HomePage from './components/HomePage';
import TaskListPage from './components/TaskListPage';
import NewTaskPage from './components/NewTaskPage';
import TaskDetailPage from './components/TaskDetailPage';
import NotFoundPage from './components/NotFoundPage';

const ProfilePage = lazy(() => import('./com/ProfilePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          { index: true, element: <TaskListPage /> },
          { path: 'new', element: <NewTaskPage /> },
          { path: 'task/:taskId', element: <TaskDetailPage /> },
        ],
      },

      {
        path: 'profile',
        element: (
          <Suspense fallback={<p>Cargando perfil...</p>}>
            <ProfilePage />
          </Suspense>
        ),
      },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
