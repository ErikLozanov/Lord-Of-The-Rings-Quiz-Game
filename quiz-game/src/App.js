import {Routes, Route, useNavigate} from 'react-router-dom';

import { useContext, useState } from "react";
import { QuizContext } from './helpers/Contexts';

import { MainMenu } from "./components/MainMenu/MainMenu";
import { About } from './components/About/About';
import { FunFacts } from './components/FunFacts/FunFacts';
import { Quiz } from './components/Quiz/Quiz';
import { EasyMode } from './components/Quiz/Modes/EasyMode';
import { MediumMode } from './components/Quiz/Modes/MediumMode';
import { HardMode } from './components/Quiz/Modes/HardMode';
import { EndScreen } from './components/Quiz/EndScreen';

function App() {
  const [gameState,setGameState] = useState('');
  const [score,setScore] = useState(0);

  const contextValues = {
      gameState,
      setGameState,
      score,
      setScore
  }

  return (
      <QuizContext.Provider value={contextValues}>
    <div>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/start-quiz' element={<Quiz />} />
        <Route path='/fun-facts' element={<FunFacts />} />
        <Route path='/about' element={<About />} />
        <Route path='/quiz/easy-mode' element={<EasyMode />}></Route>
        <Route path='/quiz/medium-mode' element={<MediumMode />}></Route>
        <Route path='/quiz/hard-mode' element={<HardMode />}></Route>
        <Route path='/quiz/end-screen' element={<EndScreen />} />
      </Routes>
      
    </div>
      </QuizContext.Provider>
  );
}

export default App;
