import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AnalyticsPage from './pages/Analytics/AnalyticsPage';
import IssuesPage from './pages/Issues/IssuesPage';
import TradePage from './pages/TradePage/TradePage';
import { useState,useEffect } from 'react';
import { Trade, Issue } from './interfaces';

function App() {
  
  const [trades, setTrades] = useState<Trade[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);

  const loadTrades = async () => {
    const trades = await fetch('http://localhost:8080/trades');
    const tradeData = await trades.json();
    setTrades(tradeData);
    
    const issues = await fetch('http://localhost:8080/issues');
    const issuesData = await issues.json();
    setIssues(issuesData);
}
  useEffect(() => {
      loadTrades()
  },[])

  const addTrade = async (trade: Omit<Trade, 'id'>) => {
    const response = await fetch('http://localhost:8080/trades',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            },
        body: JSON.stringify(trade),
        });
    const newTrade = await response.json();
    setTrades([...trades, newTrade]);
  }
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage addTrade={addTrade} trades={trades} issues={issues}/>,
    },
    {
      path: '/analytics',
      element: <AnalyticsPage />
    },
    {
      path: '/issues',
      element: <IssuesPage issues={issues}/>
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
