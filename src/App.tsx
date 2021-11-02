import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import './App.css';
import { UserDisplay } from "./UserDisplay"

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>React Query + GraphQL Demo</h1>
        </header>
        <UserDisplay />
      </div>
    </QueryClientProvider>
  );
}

export default App;
