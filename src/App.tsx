import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import './App.css';
import { CreateUser } from './CreateUser';
import { UserList } from "./UserList"

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>React Query Demo</h1>
        </header>
        <UserList />
				<CreateUser />
      </div>
    </QueryClientProvider>
  );
}

export default App;
