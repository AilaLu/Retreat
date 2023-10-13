import { useState, createContext } from "react";
import { useSelector } from "react-redux"

export const DateContext = createContext();

export const DateProvider = (props) => {
 
 const [value, setValue] = useState(new Date());
 let year = value.getUTCFullYear();
 let month = value.getUTCMonth() + 1;
 let date = value.getUTCDate();

 const checkInObj = useSelector((state) => state.checkInReducer);
 const checkInArr = Object.values(checkInObj);

 const findCheckIn = checkInArr.find(
   (checkIn) =>
     checkIn?.year === year &&
     checkIn?.month === month &&
     checkIn?.date === date
 );
 
  return (
    <DateContext.Provider value={{ sign: "captain Lu", value, setValue, year, month, date, findCheckIn }}>
      {props.children}
    </DateContext.Provider>
  );
};
