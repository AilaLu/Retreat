import {useEffect} from "react"
import OpenModalButton from "../../OpenModalButton";
import {EditCategoryModal} from "../EditCategoryModal"
import { DeleteCategoryModal } from "../DeleteCategoryModal";
import { IconSelectModal } from "../../Tasks/IconSelectModal";
import "./CategoryCard.css";
import { useDispatch } from "react-redux";
import { getCategoriesThunk } from "../../../store/categoryReducer";
import { getTasksThunk } from "../../../store/taskReducer";

export const CategoryCard = ({category}) => {
  const tasks = Object.values(category.tasks)
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getTasksThunk(category.id))
  }, [dispatch]);

//  console.log('********** in category card component*******', tasks);
if (!tasks) return null;
  return (
    <session className="border">
      <h6>Category id {category.id}</h6>
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
   <div>{category.name}</div>
   <div>{tasks.map(task => 
    (<img key={task.id} width="48" height="48" src={task.icon} alt={task.title}/>
    )
   )}</div>
   <div className="add-task">
     <OpenModalButton
          buttonText="Create New Task"
          // buttonStyle={}
          modalComponent={<IconSelectModal categoryId={category.id} />}
          />
   </div>
   {/* ( <div key={task.id}>{task.title}</div>) */}
    </session>
  );
};

