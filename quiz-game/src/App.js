import {Routes, Route, useNavigate} from 'react-router-dom';

import { useContext, useState } from "react";
import { QuizContext } from './helpers/Contexts';

import { MainMenu } from "./components/MainMenu/MainMenu";
import { About } from './components/About/About';
import { FunFacts } from './components/FunFacts/FunFacts';
import { Quiz } from './components/Quiz/Quiz';
import { QuizMode } from './components/Quiz/Modes/QuizModes';
import { EndScreen } from './components/Quiz/EndScreen';
import { Footer } from './components/Footer/Footer';

function App() {
  const [gameState,setGameState] = useState('');
  const [score,setScore] = useState(0);
  const [currMode, setCurrMode] = useState([]);


  const contextValues = {
      gameState,
      setGameState,
      score,
      setScore,
      currMode,
      setCurrMode
  }

  return (
      <QuizContext.Provider value={contextValues}>
    <div>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/start-quiz' element={<Quiz />} />
        <Route path='/fun-facts' element={<FunFacts />} />
        <Route path='/about' element={<About />} />
        <Route path='/quiz/quizMode' element={<QuizMode />}></Route>
        <Route path='/quiz/end-screen' element={<EndScreen />} />
      </Routes>
      
    </div>
    <Footer />
      </QuizContext.Provider>
  );
}

export default App;
