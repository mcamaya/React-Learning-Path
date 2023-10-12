import React, { useState } from "react";

function useLocalStorage(fieldName, initialValue) {
  const localStorageInfo = localStorage.getItem(fieldName);
  let parsedItem;

  if (!localStorageInfo || localStorageInfo == false) {
    parsedItem = initialValue;
    localStorage.setItem(fieldName, JSON.stringify(initialValue));
  } else {
    parsedItem = JSON.parse(localStorageInfo);
  }

  const [items, setItems] = useState(parsedItem);

  const saveItems = (newItem) => {
    localStorage.setItem(fieldName, JSON.stringify(newItem));
    setItems(newItem);
  };

  return [items, saveItems];
}

export default useLocalStorage;
