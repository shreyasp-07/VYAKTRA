import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import  ParticleBackground  from './components/ui/ParticleBackground';
import SalesAgent from './components/common/SalesAgent';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10">
          <AppRoutes />
          <SalesAgent />
        </div>
      </div>
    </Router>
  );
}

export default App;