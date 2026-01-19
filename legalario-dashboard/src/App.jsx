import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import UsersPage from './features/users/UsersPage';


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
              <Route path="/users" element={<UsersPage />} />
              {/* <Route path="products/new" element={<ProductPage />} /> */}
            </Routes>
        </Theme>
      </BrowserRouter>
  </QueryClientProvider>
  
  )
}

export default App
