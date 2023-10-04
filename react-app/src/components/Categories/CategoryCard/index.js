import {  useSelector } from "react-redux";
import "./CategoryCard.css";

export const CategoryCard = ({category}) => {
 
 const tasks = Object.values(category.tasks)
 console.log('********** in category card component*******', tasks);
 
  return (
    <>
      <h1>Category</h1>
   <div>{category.name}</div>
{/* <div>{category.tasks.map(task => )}</div> */}
    </>
  );
};
