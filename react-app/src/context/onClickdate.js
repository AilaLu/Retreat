import { useState, createContext } from "react";

export const DateContext = createContext();

export const DateProvider = (props) => {
 
 const [value, setValue] = useState(new Date());
 let year = value.getUTCFullYear();
 let month = value.getUTCMonth() + 1;
 let date = value.getUTCDate();
 
  return (
    <DateContext.Provider value={{ sign: "captain Lu", value, setValue, year, month, date }}>
      {props.children}
    </DateContext.Provider>
  );
};
