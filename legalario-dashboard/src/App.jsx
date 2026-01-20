import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import UsersPage from './features/users/UsersPage';
import UserPage from './features/users/UserPage';


const queryClient = new QueryClient();

function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Theme 
            panelBackground="translucent" 
            appearance="dark" 
            accentColor="blue"
          >
            <Routes>
              <Route path="/" element={<UsersPage />} />
              <Route path="/users/new" element={<UserPage />} />
            </Routes>
          </Theme>
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
