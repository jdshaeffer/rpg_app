import { useState } from 'react';
import dealDamage from './DealDamage';

/* 
	idea: 
		player upgrades mostly armor and health, is tank. 
		enemies upgrade attack mostly, but also defense.
    so full of honor, any failure means death.
*/

function App() {
  const DMG_CONST = 10;

  const [p, SetP] = useState({
    hp: 10,
    atk: 10,
    def: 10
  });
  const [e, SetE] = useState({
    hp: 10,
    atk: 10,
    def: 10
  });
  
  const playerAttack = () => {
    // editing enemy obj, so copying, then writing.
    let eTmp = { ...e };
    eTmp.hp -= dealDamage(DMG_CONST, p, e);
    SetE(eTmp);
    console.log(e.hp);
    SetP(p);
  };


  return (
    <div className="App">
      <div className="stats">
        <h1>player</h1>
        <h3>hp: {p.hp}</h3>
        <h3>atk: {p.atk}</h3>
        <h3>def: {p.def}</h3>

        <br />
        <br />

        <h1>enemy</h1>
        <h3>hp: {e.hp}</h3>
        <h3>atk: {e.atk}</h3>
        <h3>def: {e.def}</h3>
      </div>
      <div className="buttons">
        <button onClick={playerAttack}>attack</button>
      </div>
    </div>
  );
}

export default App;
