import { useState } from 'react';
import './App.css';
import moods from './data/mood';
import MoodOption from './components/MoodOption';
import Playlist from './components/Playlist';

function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="app-container">
      <h1>Mood Music</h1>
      <div className="main-content">
        <div className="mood-selection">
          <div className="mood-options">
            {Object.entries(moods).map(([moodKey, moodData]) => (
              <MoodOption
                key={moodKey}
                mood={moodData}
                isSelected={selectedMood === moodKey}
                onClick={() => setSelectedMood(moodKey)}
              />
            ))}
          </div>
          <button 
            onClick={() => setSelectedMood(
              Object.keys(moods)[Math.floor(Math.random() * Object.keys(moods).length)]
            )}
            className="random-button"
          >
            🎲 Surprise Me
          </button>
        </div>
        
        <div className="video-container">
          <Playlist mood={selectedMood ? moods[selectedMood] : null} />
        </div>
      </div>
    </div>
  );
}

export default App
