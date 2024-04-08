import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Popular from './Popular';
import Story from './Story';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        {/* <Popular /> */}
        <Story />
      </div>
    </BrowserRouter>
  );
}

export default App;
