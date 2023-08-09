import React from "react";


function useLocalStorage(itemName, initialValue) {
  
    const [item,setItems] = React.useState(initialValue);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
    

    React.useEffect( () => {
    setTimeout( () => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue) );
          parsedItem=initialValue;
        }else {
          parsedItem = JSON.parse(localStorageItem);
          setItems(parsedItem);
        }
        setLoading(false); 
      } catch (error) {
        setLoading(false);
        setError(true);
      } 
    }

    ,2000);
    
    } , []
      
    );
  
    
  
    // const [item, setItems] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItems(newItem);
    };
  
    return {item, 
            saveItem, 
            loading, 
            error,} ;
  
  }
  export {useLocalStorage}
  
  