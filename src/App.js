import Header from './Components/Header/Header'
import CardList from './Components/Cart/CardList';
import data from './Components/Cart/CartData.json'
import { useState } from 'react';


// This function serves as the main component of the application.
function App() {
  let [totalitems, setTotalItems] = useState(data.length);
  console.log('Total Items--> ',totalitems);
  let updatedItemList = (list) => {
      let totalItemsUpdated = list.reduce((sum, val) => {
        return sum + val.amount;
      },0)
      setTotalItems(totalItemsUpdated);
  }
  return(
      <>
      <Header cartTotal = {totalitems} />
      <CardList updatefn = {updatedItemList} />
      </>
 );
}

export default App;