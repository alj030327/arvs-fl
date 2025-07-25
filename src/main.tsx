import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import IntegrationService from '@/services/integrationService'

// Initialize all integrations on app startup
IntegrationService.initializeIntegrations();

createRoot(document.getElementById("root")!).render(<App />);
