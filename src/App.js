import './App.css';
import { useState } from 'react';

function App() {

  const initial_supply = 1000;
  //const fee = ((initial_supply + 1) / (initial_supply - 1) - 1).toFixed(4); 

  const [supplyNUR, setSupplyNUR] = useState();
  const [supplyMIM, setSupplyMIM] = useState();
  const [amountNUR, setAmountNUR] = useState();
  //const [amountMIM, setAmountMIM] = useState();

  const [percentageToAdd, setPercentageToAdd] = useState();

  const [total_supply, setTotalSupply] = useState(initial_supply);
  const [perc, setPerc] = useState();
  //const [current_supply, setCurrentSupply] = useState();
  const [price, setPrice] = useState(0);
  const [fPrice, setfPrice] = useState(price);

  const [treasureNUR, setTreasureNUR] = useState(initial_supply);
  const [treasureMIM, setTreasureMIM] = useState(initial_supply);
  const [dexNUR, setDexNUR] = useState(0);
  const [dexMIM, setDexMIM] = useState(0);
  const [usersNUR, setUsersNUR] = useState(0);
  const [usersMIM, setUsersMIM] = useState(initial_supply);

  const [prize, setPrize] = useState(0);
  const [winnerNumber, setWinnerNumber] = useState(0);


  function addMIM() {
    setUsersMIM(usersMIM + parseInt(supplyMIM));
  }

  function mintNUR() {
    setTreasureNUR(treasureNUR + parseInt(supplyNUR));
  }

  function addLiquidity() {
    let amountToAdd = treasureNUR * percentageToAdd / 100;
    if (percentageToAdd >= 0 && percentageToAdd <= 100 && amountToAdd > 0 && amountToAdd <= treasureMIM) {
      console.log("Amount (NUR/MIM) to tranfer from Treasure to DEX:", amountToAdd);
      let tMIM = treasureMIM - amountToAdd;
      let tNUR = treasureNUR - amountToAdd;
      let dMIM = dexMIM + amountToAdd;
      let dNUR = dexNUR + amountToAdd; 
      setTreasureMIM(tMIM);
      setTreasureNUR(tNUR);
      setDexMIM(dMIM);
      setDexNUR(dNUR);
      setPrice((dMIM / dNUR).toFixed(2));
    }
  }

  function buyNURbyUsers() {
    let priceo = dexMIM / dexNUR;
    let pricef = (parseInt(dexMIM) + parseInt(amountNUR) - 1) / (parseInt(dexNUR) - amountNUR  + 1);
    let _fPrice = (priceo + pricef) / 2;
    setfPrice(_fPrice.toFixed(4));
    if (usersMIM >= amountNUR * _fPrice && dexNUR >= amountNUR) { 
      let uMIM = parseFloat(usersMIM) - amountNUR * _fPrice;
      let uNUR = usersNUR + parseInt(amountNUR);
      let dMIM = parseFloat(dexMIM) + amountNUR * _fPrice;
      let dNUR = dexNUR - parseInt(amountNUR); 
      setUsersMIM(uMIM.toFixed(2));
      setUsersNUR(uNUR);
      setDexMIM(dMIM.toFixed(2));
      setDexNUR(dNUR);
      setPrice((dMIM / dNUR).toFixed(2));
    } 
  }

  function buyNURbyTreasure() {
    let priceo = dexMIM / dexNUR;
    let pricef = (parseInt(dexMIM) + parseInt(amountNUR) - 1) / (parseInt(dexNUR) - amountNUR  + 1);
    let _fPrice = (priceo + pricef) / 2;
    setfPrice(_fPrice.toFixed(4));
    if (treasureMIM >= amountNUR * _fPrice && dexNUR >= amountNUR) { 
      let tMIM = parseFloat(treasureMIM) - amountNUR * _fPrice;
      let tNUR = treasureNUR + parseInt(amountNUR);
      let dMIM = parseFloat(dexMIM) + amountNUR * _fPrice;
      let dNUR = dexNUR - parseInt(amountNUR); 
      setTreasureMIM(tMIM.toFixed(2));
      setTreasureNUR(tNUR);
      setDexMIM(dMIM.toFixed(2));
      setDexNUR(dNUR);
      setPrice((dMIM / dNUR).toFixed(2));
    } 
  }

  function sellNURbyUsers() {
    let fix = initial_supply + initial_supply - parseInt(dexNUR);
    let priceo = (fix - 1) / (parseInt(dexNUR) + 1);
    let pricef = (fix - parseInt(amountNUR)) / (parseInt(dexNUR) + parseInt(amountNUR));
    let _fPrice = (priceo + pricef) / 2;
    setfPrice(_fPrice.toFixed(4));
    if (usersNUR >= amountNUR && dexMIM >= amountNUR * _fPrice) { 
      let uMIM = parseFloat(usersMIM) + amountNUR * _fPrice;
      let uNUR = usersNUR - parseInt(amountNUR);
      let dMIM = parseFloat(dexMIM) - amountNUR * _fPrice;
      let dNUR = dexNUR + parseInt(amountNUR); 
      setUsersMIM(uMIM.toFixed(2));
      setUsersNUR(uNUR);
      setDexMIM(dMIM.toFixed(2));
      setDexNUR(dNUR);
      setPrice((dMIM / dNUR).toFixed(2));
    }
  }

  function sellNURbyTreasure() {
    let fix = initial_supply + initial_supply - parseInt(dexNUR);
    let priceo = (fix - 1) / (parseInt(dexNUR) + 1);
    let pricef = (fix - parseInt(amountNUR)) / (parseInt(dexNUR) + parseInt(amountNUR));
    let _fPrice = (priceo + pricef) / 2;
    setfPrice(_fPrice.toFixed(4));
    if (treasureNUR >= amountNUR && dexMIM >= amountNUR * _fPrice) { 
      let tMIM = parseFloat(treasureMIM) + amountNUR * _fPrice;
      let tNUR = treasureNUR - parseInt(amountNUR);
      let dMIM = parseFloat(dexMIM) - amountNUR * _fPrice;
      let dNUR = dexNUR + parseInt(amountNUR); 
      setTreasureMIM(tMIM.toFixed(2));
      setTreasureNUR(tNUR);
      setDexMIM(dMIM.toFixed(2));
      setDexNUR(dNUR);
      setPrice((dMIM / dNUR).toFixed(2));
    }
  }

  function playLotto() {
    let _prize = perc / 100 * treasureMIM;
    setPrize(_prize);
    console.log(`Playing ${perc}% of ${treasureMIM}: ${_prize}`);
    let tickets = parseInt(usersNUR);
    setWinnerNumber(Math.floor(Math.random() * (tickets + 1)));
    
    if (treasureMIM > _prize) {
      let tMIM = parseFloat(treasureMIM) - _prize;
      let uMIM = parseFloat(usersMIM) + _prize;
      setTreasureMIM(tMIM.toFixed(2));
      setUsersMIM(uMIM.toFixed(2));
    }
  }

  return (
    <div className="App">
      <header className="App-header">    
        <h3 className="subheader">Price: {price} MIM/NUR, Total Supply: {total_supply} NUR</h3>
        <h3 className="subheader">Treasure: {treasureNUR} NUR, {treasureMIM} MIM</h3>
        <h3 className="subheader">DEX: {dexNUR} NUR, {dexMIM} MIM</h3>
        <h3 className="subheader">Users: {usersNUR} NUR, {usersMIM} MIM</h3>

        <br/>

        <button onClick={addLiquidity}>Add Liquidity</button>
        <input onChange={e => setPercentageToAdd(e.target.value)} placeholder="Perc treasure (0-100)" />

        <br/>

        <button onClick={addMIM}>Add MIM to Users</button>
        <input onChange={e => setSupplyMIM(e.target.value)} placeholder="Amount MIM" />

        <br/>

        <button onClick={() => {setTotalSupply(total_supply + parseInt(supplyNUR)); mintNUR()}}>Mint NUR</button>
        <input onChange={e => setSupplyNUR(e.target.value)} placeholder="Amount NUR" />

        <br/>


        <button onClick={buyNURbyUsers}>Buy NUR by Users</button>
        <input onChange={e => setAmountNUR(e.target.value)} placeholder="amount NUR" />
        
        <br/>

        <button onClick={sellNURbyUsers}>Sell NUR by Users</button>
        <input onChange={e => setAmountNUR(e.target.value)} placeholder="amount NUR" />

        <br/>

        <button onClick={buyNURbyTreasure}>Buy NUR by Treasure</button>
        <input onChange={e => setAmountNUR(e.target.value)} placeholder="amount NUR" />
        
        <br/>

        <button onClick={sellNURbyTreasure}>Sell NUR by Treasure</button>
        <input onChange={e => setAmountNUR(e.target.value)} placeholder="amount NUR" />


        <p>Avg Price: {fPrice} MIM</p>

        <button onClick={playLotto}>Play Lotto</button>
        <input onChange={e => setPerc(e.target.value)} placeholder="Percentage (0-100)" />

        <p>Winner: {winnerNumber}</p>
        <p>Prize: {prize} MIM</p>
        
        <br/>


      </header>
    </div>
  );
}

export default App;
