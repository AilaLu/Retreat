import {  useSelector } from "react-redux";
import "./CategoryCard.css";

export const CategoryCard = ({category}) => {
  // console.log('********** in category card component*******', category);

  return (
    <>
      <h1>Category</h1>
   <div>{category.name}</div>
    </>
  );
};
