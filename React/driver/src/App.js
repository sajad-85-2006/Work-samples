
import './App.css';
import { DriverProvider } from './Store/Context/DriverContex';
import DriverPage from './Viwe/DriverTask/DriverPage';

function App() {
  return (
    <div >
      <DriverProvider>
        <DriverPage/>
      </DriverProvider>
    </div>
  );
}

export default App;
