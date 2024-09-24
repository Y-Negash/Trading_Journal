import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AnalyticsPage from './pages/Analytics/AnalyticsPage';
import IssuesPage from './pages/Issues/IssuesPage';
import TradePage from './pages/TradePage/TradePage';
import { useState } from 'react';
import { Trade } from './interfaces';

function App() {
  
  const [trades, setTrades] = useState<Trade[]>([]);
  
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage trades={trades} setTrades={setTrades}/>,
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
      element: <TradePage trades={trades} />
    }
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
