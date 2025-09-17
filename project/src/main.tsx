import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Error boundary to catch and log any startup errors
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error('❌ App startup error:', error);
    return (
      <div style={{ 
        padding: '20px', 
        textAlign: 'center', 
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fee2e2',
        color: '#991b1b',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <h1>Website Loading Error</h1>
        <p>There was an issue loading the website. Please refresh the page or contact us directly.</p>
        <div style={{ marginTop: '20px' }}>
          <a href="tel:1300718760" style={{ 
            backgroundColor: '#dc2626', 
            color: 'white', 
            padding: '10px 20px', 
            textDecoration: 'none', 
            borderRadius: '5px',
            marginRight: '10px'
          }}>
            Call 1300 718 760
          </a>
          <a href="mailto:info@allsector.com.au" style={{ 
            backgroundColor: '#2563eb', 
            color: 'white', 
            padding: '10px 20px', 
            textDecoration: 'none', 
            borderRadius: '5px'
          }}>
            Email Us
          </a>
        </div>
      </div>
    );
  }
};

// Safe initialization with error handling
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }

  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
} catch (error) {
  console.error('❌ Failed to initialize React app:', error);
}
