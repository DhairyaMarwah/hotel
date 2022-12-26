import logo from './logo.svg'; 
import Navigation from './routes/routes';
import { BrowserRouter } from "react-router-dom"; 
function App() {
  return (
    <BrowserRouter>
    
    <Navigation/>
    </BrowserRouter>
  );
}

export default App;
