import './App.css';
import { useEffect, useState } from 'react';

function Simulator() {
    const initial_supply = 1000;

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    const [total_supply, setTotalSupply] = useState(initial_supply);

    const [amountNURUsers, setAmountNURUsers] = useState();
    const [amountNURTreasury, setAmountNURTreasury] = useState();
    const [amountNURStaking, setAmountNURStaking] = useState();
    const [amountlNUR, setAmountlNUR] = useState();

    const [treasuryNUR, setTreasuryNUR] = useState(0);
    const [treasuryMIM, setTreasuryMIM] = useState(0);
    const [dexNUR, setDexNUR] = useState(initial_supply);
    const [dexMIM, setDexMIM] = useState(initial_supply);
    const [usersNUR, setUsersNUR] = useState(0);
    const [usersMIM, setUsersMIM] = useState(initial_supply*10);
    const [userslNUR, setUserslNUR] = useState(0);
    
    const [NURstaked, setNURstaked] = useState(0);
    const [businessMIM, setBusinessMIM] = useState(0);

    const [price, setPrice] = useState(dexMIM/dexNUR);
    const [fPrice, setfPrice] = useState(price);
    const [percRewards, setPercRewards] = useState();
    const [percBusiness, setPercBusiness] = useState();
    const [prize, setPrize] = useState(0);
    const [winnerNumber, setWinnerNumber] = useState(0);
    const [day, setDay] = useState(0);

    function buyNURbyUsers() {
        const amountNUR = parseFloat(amountNURUsers);
        let priceo = dexMIM / dexNUR;
        let pricef = (parseFloat(dexMIM) + amountNUR - 1) / (parseFloat(dexNUR) - amountNUR  + 1);
        let _fPrice = (priceo + pricef) / 2;
        setfPrice(_fPrice.toFixed(4));
        if (parseFloat(usersMIM) >= amountNUR * _fPrice && parseFloat(dexNUR) >= amountNUR) { 
          let uMIM = parseFloat(usersMIM) - amountNUR * _fPrice;
          let uNUR = parseFloat(usersNUR) + amountNUR;
          let dMIM = parseFloat(dexMIM) + amountNUR * _fPrice;
          let dNUR = parseFloat(dexNUR) - amountNUR; 
          setUsersMIM(uMIM.toFixed(2));
          setUsersNUR(uNUR.toFixed(2));
          setDexMIM(dMIM.toFixed(2));
          setDexNUR(dNUR.toFixed(2));
          setPrice((dMIM / dNUR).toFixed(2));
        }else {
            alert("No enough liquidity")
        } 
      }

      function sellNURbyUsers() {
        const amountNUR = parseFloat(amountNURUsers);
        let fix = initial_supply + initial_supply - parseFloat(dexNUR);
        let priceo = (fix - 1) / (parseFloat(dexNUR) + 1);
        let pricef = (fix - amountNUR) / (parseFloat(dexNUR) + amountNUR);
        let _fPrice = (priceo + pricef) / 2;
        setfPrice(_fPrice.toFixed(4));
        if (usersNUR >= amountNUR && dexMIM >= amountNUR * _fPrice) { 
          let uMIM = parseFloat(usersMIM) + amountNUR * _fPrice;
          let uNUR = parseFloat(usersNUR) - amountNUR;
          let dMIM = parseFloat(dexMIM) - amountNUR * _fPrice;
          let dNUR = parseFloat(dexNUR) + amountNUR; 
          setUsersMIM(uMIM.toFixed(2));
          setUsersNUR(uNUR.toFixed(2));
          setDexMIM(dMIM.toFixed(2));
          setDexNUR(dNUR.toFixed(2));
          setPrice((dMIM / dNUR).toFixed(2));
        }else {
            alert("No enough liquidity")
        } 
      }
      function buyNURbyTreasury() {
        const amountNUR = parseFloat(amountNURTreasury);
        let priceo = dexMIM / dexNUR;
        let pricef = (parseFloat(dexMIM) + amountNUR - 1) / (parseFloat(dexNUR) - amountNUR  + 1);
        let _fPrice = (priceo + pricef) / 2;
        setfPrice(_fPrice.toFixed(4));
        if (parseFloat(treasuryMIM) >= amountNUR * _fPrice && parseFloat(dexNUR) >= amountNUR) { 
          let tMIM = parseFloat(treasuryMIM) - amountNUR * _fPrice;
          let tNUR = parseFloat(treasuryNUR) + amountNUR;
          let dMIM = parseFloat(dexMIM) + amountNUR * _fPrice;
          let dNUR = parseFloat(dexNUR) - amountNUR; 
          setTreasuryMIM(tMIM.toFixed(2));
          setTreasuryNUR(tNUR.toFixed(2));
          setDexMIM(dMIM.toFixed(2));
          setDexNUR(dNUR.toFixed(2));
          setPrice((dMIM / dNUR).toFixed(2));
        }else {
            alert("No enough liquidity")
        } 
      }

      function sellNURbyTreasury() {
        const amountNUR = parseFloat(amountNURTreasury);
        let fix = initial_supply + initial_supply - parseFloat(dexNUR);
        let priceo = (fix - 1) / (parseFloat(dexNUR) + 1);
        let pricef = (fix - amountNUR) / (parseFloat(dexNUR) + amountNUR);
        let _fPrice = (priceo + pricef) / 2;
        setfPrice(_fPrice.toFixed(4));
        if (treasuryNUR >= amountNUR && dexMIM >= amountNUR * _fPrice) { 
          let tMIM = parseFloat(treasuryMIM) + amountNUR * _fPrice;
          let tNUR = parseFloat(treasuryNUR) - amountNUR;
          let dMIM = parseFloat(dexMIM) - amountNUR * _fPrice;
          let dNUR = parseFloat(dexNUR) + amountNUR; 
          setTreasuryMIM(tMIM.toFixed(2));
          setTreasuryNUR(tNUR.toFixed(2));
          setDexMIM(dMIM.toFixed(2));
          setDexNUR(dNUR.toFixed(2));
          setPrice((dMIM / dNUR).toFixed(2));
        }else {
            alert("No enough liquidity")
        } 
      }

      function stakeNUR() {
          const amountNUR = parseFloat(amountNURStaking);
          let _usersNUR = parseFloat(usersNUR);
          let _NURstaked = parseFloat(NURstaked);
          if (_usersNUR >= amountNUR) { 
              let uNUR = _usersNUR - amountNUR;
              let Ns = _NURstaked + amountNUR;
              setUsersNUR(uNUR.toFixed(2));
              setNURstaked(Ns.toFixed(2));
              setCounter(7);
          }else {
            alert("No enough NUR balance")
        } 
      }

      function unstakeNUR() {
        const amountNUR = parseFloat(amountNURStaking);
        let _usersNUR = parseInt(usersNUR);
        let _NURstaked = parseInt(NURstaked);
        if (_NURstaked >= amountNUR) { 
            let uNUR = _usersNUR + amountNUR;
            let Ns = _NURstaked - amountNUR;
            setUsersNUR(uNUR.toFixed(2));
            setNURstaked(Ns.toFixed(2));
        }else {
            alert("No enough NUR staked")
        } 
    }

      function buylNUR() {
          const minStaked = 10;
          let amount = parseInt(amountlNUR);
          let _usersMIM = parseInt(usersMIM);
          let _NURstaked = parseInt(NURstaked);
          let _userslNUR = parseInt(userslNUR);
          let _treasuryMIM = parseInt(treasuryMIM)
          if (_usersMIM >= amount && _NURstaked >= minStaked && parseInt(counter) === 0) {
              let uMIM = _usersMIM - amount;
              let lNUR = _userslNUR + amount;
              let tMIM = _treasuryMIM + amount;
              setUsersMIM(uMIM.toFixed(2));
              setUserslNUR(lNUR);
              setTreasuryMIM(tMIM.toFixed(2));
          } else {
              alert("You have to stake at least 10 NUR and wait 7 days");
          }
      }

      function mintNUR(amount) {
        setTreasuryNUR((parseFloat(treasuryNUR) + parseFloat(amount)).toFixed(2));
      }

      function getMIMforBusiness() {
        let amount = parseInt(percBusiness)/100 * treasuryMIM;
        let tMIM = parseFloat(treasuryMIM) - amount; 
        let bMIM = parseFloat(businessMIM) + amount;
        setTreasuryMIM(tMIM.toFixed(2));
        setBusinessMIM(bMIM.toFixed(2));
      }

      
      function playLotto() {
        const min_lnur = 1;
        //let _prize = parseInt(treasuryNUR);
        let _prize = userslNUR * percRewards/100;
        if (userslNUR > min_lnur && treasuryNUR >= _prize) {   
            setPrize(_prize.toFixed(2));
            let tickets = parseInt(userslNUR);
            setWinnerNumber(Math.floor(Math.random() * (tickets + 1)));
            let tNUR = parseFloat(treasuryNUR) - _prize;
            let uNUR = parseFloat(usersNUR) + _prize;
            setTreasuryNUR(tNUR.toFixed(2));
            setUsersNUR(uNUR.toFixed(2));
            setUserslNUR(0);
            setDay(parseInt(day) + 1);
        }else {
            alert("No enough lNUR to play Lotto")
        } 
      }

    return (
        <div className="App">
          <header className="App-header">
                <h1>LottoDAO</h1>

                <table className="center" border="1">
                        <tr>
                            <th colSpan={2}>
                                <h2>Treasury</h2>
                            </th>
                            <th colSpan={2}>
                                <h2>DEX</h2>
                            </th>
                            <th colSpan={3}>
                                <h2>Users</h2>
                            </th>
                            <th colSpan={1}>
                                <h2>Staked</h2>
                            </th>
                            <th colSpan={1}>
                                <h2>Business</h2>
                            </th>
                        </tr>
                        <tr>
                            <th>NUR</th>
                            <th>MIM</th>
                            <th>NUR</th>
                            <th>MIM</th>
                            <th>NUR</th>
                            <th>MIM</th>
                            <th>lNUR</th>
                            <th>NUR</th>
                            <th>MIM</th>
                        </tr>
                        <tr>
                            <td valign="top" align="center"> 
                                {treasuryNUR}
                            </td>
                            <td valign="top" align="center">      
                                {treasuryMIM}
                            </td>
                            <td valign="top" align="center">      
                                {dexNUR}
                            </td>
                            <td valign="top" align="center"> 
                                {dexMIM}
                            </td>
                            <td valign="top" align="center">      
                                {usersNUR}
                            </td>
                            <td valign="top" align="center">      
                                {usersMIM}
                            </td>
                            <td valign="top" align="center">      
                                {userslNUR}
                            </td>
                            <td valign="top" align="center">      
                                {NURstaked}
                            </td>
                            <th valign="top" align="center">
                                {businessMIM}
                            </th>
                        </tr>
                </table>


                <h3>Price: {price} MIM/NUR, Total Supply: {total_supply} NUR</h3>

                <p>Avg Price: {fPrice} MIM</p>

                <div style={{ display: "flex" }}>
                    <button onClick={buyNURbyUsers}>Buy NUR by Users</button>
                    <button onClick={sellNURbyUsers}>Sell NUR by Users</button>
                </div>
                <input onChange={e => setAmountNURUsers(e.target.value)} placeholder="amount NUR" />

                <br/>

                <div style={{ display: "flex" }}>
                    <button onClick={buyNURbyTreasury}>Buy NUR by Treasury</button>
                    <button onClick={sellNURbyTreasury}>Sell NUR by Treasury</button>
                </div>
                <input onChange={e => setAmountNURTreasury(e.target.value)} placeholder="amount NUR" />

                <br/>

                <div style={{ display: "flex" }}>
                    <button onClick={stakeNUR}>Stake NUR by Users</button>
                    <button onClick={unstakeNUR}>Unstake NUR by Users</button>
                </div>
                <input onChange={e => setAmountNURStaking(e.target.value)} placeholder="amount NUR" />

               
                <p>Waiting to buy lNUR: {counter} days</p>
                <button onClick={buylNUR}>Buy lNUR by Users</button>
                <input onChange={e => setAmountlNUR(e.target.value)} placeholder="amount lNUR (1MIM/lNUR)" />
                
                <br/>

                <button onClick={() => {setTotalSupply((parseFloat(total_supply) + percRewards/100 * parseFloat(treasuryMIM)).toFixed(2)); 
                                        mintNUR(percRewards/100 * userslNUR)}}>Mint NUR for rewards</button>
                <input onChange={e => setPercRewards(e.target.value)} placeholder="Perc (0-100) of Treasury" />

                <br/>

                <button onClick={getMIMforBusiness}>Get MIM for Business</button>
                <input onChange={e => setPercBusiness(e.target.value)} placeholder="Perc (0-100) of Treasury" />

                <h4>Lotto {day}</h4>
                <button onClick={playLotto}>Play Lotto</button>
        
                <p>Winner: {winnerNumber}</p>
                <p>Reward: {prize} NUR</p>


          </header>

        </div>
    );

}

export default Simulator;
