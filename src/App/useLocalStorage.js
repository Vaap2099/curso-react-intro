import React from "react";


function useLocalStorage(itemName, initialValue) {
  
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue) );
      parsedItem=initialValue;
    }else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItems] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItems(newItem);
    };
  
    return [item, saveItem] ;
  
  }
  export {useLocalStorage}
  