/* 
	idea: 
		player upgrades mostly armor and health, is tank. 
		enemies upgrade attack mostly, but also defense.
    so full of honor, any failure means death.
*/

import { useState } from 'react';
import DealDamage from './DealDamage';

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
  
  const Player_Attack = () => {
    // editing enemy obj, so copying, then writing.
    let e_tmp = e;
    e_tmp.hp -= DealDamage(DMG_CONST, p, e);
    SetE(e_tmp);
    console.log(e.hp);
    // e doesn't update on the page??
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
        <button onClick={Player_Attack}>attack</button>
      </div>
    </div>
  );
}

export default App;
