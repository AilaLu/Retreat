import {  useSelector } from "react-redux";
import OpenModalButton from "../../OpenModalButton";
import {EditCategoryModal} from "../EditCategoryModal"
import { DeleteCategoryModal } from "../DeleteCategoryModal";
import "./CategoryCard.css";

export const CategoryCard = ({category}) => {
 
 const tasks = Object.values(category.tasks)
 // console.log('********** in category card component*******', tasks);
 
  return (
    <session className="border">
      <h6>Category id {category.id}</h6>
   <div>{category.name}</div>
   <div className="edit-delete-category">
   <OpenModalButton
        buttonText="Edit Category"
        // buttonStyle={}
        modalComponent={<EditCategoryModal categoryId={category.id}/>} 

        />
   <OpenModalButton
        buttonText="Delete Category"
        // buttonStyle={}
        modalComponent={<DeleteCategoryModal categoryId={category.id}/>} 

        />
   </div>
{/* <div>{category.tasks.map(task => )}</div> */}
    </session>
  );
};
