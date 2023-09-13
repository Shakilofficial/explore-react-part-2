import './App.css';
import Counter from './counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick() {
    alert('Button Clicked')
  }
  function handleClick2() {
    alert('You Clicked Second Button')
  }
  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('You Clicked Third Button') }}>Click 3</button>
      {/* Complex Way to add event handler */}
      <button onClick={() =>addToFive(3)} >Click Me</button>
    </>
  )
}

export default App
