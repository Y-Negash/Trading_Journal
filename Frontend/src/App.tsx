import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AnalyticsPage from './pages/Analytics/AnalyticsPage';
import IssuesPage from './pages/Issues/IssuesPage';
import Trade from './pages/TradePage/Trade';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/analytics',
    element: <AnalyticsPage />
  },
  {
    path: '/issues',
    element: <IssuesPage />
  },
  {
    path: '/trades',
    element: <Trade />
  }
]);

function App() {
  console.log('Render');
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
