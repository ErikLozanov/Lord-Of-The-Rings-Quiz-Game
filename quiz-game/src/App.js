import {Routes, Route, useNavigate} from 'react-router-dom';

import { MainMenu } from "./components/MainMenu/MainMenu";
import { About } from './components/About/About';

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/start-quiz' element={<h1>Quiz</h1>} />
        <Route path='/fun-facts' element={<h1>Fun Facts</h1>} />
        <Route path='/about' element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
