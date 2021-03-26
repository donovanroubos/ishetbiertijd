import './App.css';

function App() {
  const currentDate = new Date()
  const hour = currentDate.getHours()
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[new Date().getDay()];

  const correctDay = dayName === 'Friday' || dayName === 'Saturday' || dayName === 'Sunday'
  
  const isBeerTime = hour >= 16 && hour >= 0 && correctDay
  
  return (
    <div className="App">
      <header className="App-header">
        <img src="bier.png" className="App-logo" alt="bier" />
        <p>{ isBeerTime ? 'JAAA!!1!🎉' : 'NEE 😢' }</p>
      </header>
      <footer className="App-footer">
        <p>Wanneer deze illu mooi begint te worden weet je dat je genoeg bier hebt gedronken</p>
      </footer>
    </div>
  );
}

export default App;
