import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AuthProvider from './context/AuthProvider.jsx';
import { RouterProvider } from 'react-router';
import { router } from './routes/Routes.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './context/ThemeContext.jsx';

// Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap your app with QueryClientProvider first, then AuthProvider */}
    <QueryClientProvider client={queryClient}>

    <ThemeProvider>
        <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>

    </QueryClientProvider>
  </StrictMode>
);
