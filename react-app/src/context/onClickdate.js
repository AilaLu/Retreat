import { useState, createContext } from "react";
import { useSelector } from "react-redux"

export const DateContext = createContext();

export const DateProvider = (props) => {
 
 const [selectedDate, setSelectedDate] = useState(new Date());
 let year = selectedDate.getUTCFullYear();
 let month = selectedDate.getUTCMonth() + 1;
 let date = selectedDate.getUTCDate();

 const checkInObj = useSelector((state) => state.checkInReducer);
 const checkInArr = Object.values(checkInObj);

 const findCheckIn = checkInArr.find(
   (checkIn) =>
     checkIn?.year === year &&
     checkIn?.month === month &&
     checkIn?.date === date
 );
 
  return (
    <DateContext.Provider value={{ sign: "captain Lu", selectedDate, setSelectedDate, year, month, date, findCheckIn }}>
      {props.children}
    </DateContext.Provider>
  );
};
