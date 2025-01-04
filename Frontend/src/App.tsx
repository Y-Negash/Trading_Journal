import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Home/Dashboard';
import AnalyticsPage from './pages/Analytics/AnalyticsPage';
import IssuesPage from './pages/Issues/IssuesPage';
import TradePage from './pages/TradePage/TradePage';
import { useState,useEffect } from 'react';
import { Trade, Issue } from './interfaces';

function App() {
  
  const [trades, setTrades] = useState<Trade[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [filteredTrades, setFilteredTrades] = useState<Trade[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

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
    setTrades((prevTrades) => [...prevTrades, newTrade]);
    if(newTrade.issues[0] !== undefined){
      setIssues((prevIssues) => [...prevIssues, newTrade.issues[0]]);
    }
  }
  
  const deleteTrade = async (tradeId: number) => {
      await fetch(`http://localhost:8080/trades/${tradeId}`, {
          method: 'DELETE'
      })
      setTrades((prevTrades) => prevTrades.filter((trade) => trade.tradeId !== tradeId)) 
}

const deleteIssue = async (issueId: number) => {
  await fetch(`http://localhost:8080/issues/${issueId}`,{
    method: 'DELETE'
  })
  setIssues((prevIssues) => prevIssues.filter((issue)=> issue.issueId !== issueId))
}
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
        <Dashboard 
          addTrade={addTrade} 
          trades={trades} 
          issues={issues}
          />,
    },
    {
      path: '/analytics',
      element: <AnalyticsPage />
    },
    {
      path: '/issues',
      element: 
      <IssuesPage 
        issues={issues}
        deleteIssue={deleteIssue}
      />
    },
    {
      path: '/trades',
      element: 
        <TradePage 
          trades={trades} 
          filteredTrades={filteredTrades}
          setFilteredTrades={setFilteredTrades}
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
          deleteTrade = {deleteTrade}
          />
    }
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
