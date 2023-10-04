import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../../OpenModalButton";
import { AddCategoryModal } from "../AddCategoryModal";
import "./AllCategories.css";
import { getCategoriesThunk } from "../../../store/categoryReducer";
import { CategoryCard } from "../CategoryCard";
// import { getAllFavorites } from "../../store/favoritesReducer";
// import { getTransactionItemsThunk } from "../../store/transactionReducer";

export const AllCategories = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const categoriesObj = useSelector((state) => state.categories);
  const categoriesArr = Object.values(categoriesObj);
  // console.log('********** in all categories component*******', categoriesArr);

  useEffect(() => {
    dispatch(getCategoriesThunk());
    // dispatch(getAllFavorites(user ? user : null))
    // dispatch(getTransactionItemsThunk())
  }, [dispatch]);

  if (!user) return null;

  return (
    <>
      <h1>All Categories</h1>
      <div>Hello {user.username}</div>
      <session>
        {categoriesArr.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </session>
      <div className="add-category">
        <OpenModalButton
          buttonText="Create New Category Block"
          // buttonStyle={}
          modalComponent={<AddCategoryModal />}
        />
      </div>
    </>
  );
};
