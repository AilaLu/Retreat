import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./AllCategories.css";
import { getCategoriesThunk } from "../../../store/categoryReducer";
// import { ProductCard } from "../ProductCard";
// import { getAllFavorites } from "../../store/favoritesReducer";
// import { getTransactionItemsThunk } from "../../store/transactionReducer";

export const AllCategories = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  // const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(getCategoriesThunk())
    // dispatch(getAllFavorites(user ? user : null))
    // dispatch(getTransactionItemsThunk())
  }, [dispatch]);

  // useEffect(() => {
  //   }, [dispatch])

  if (!user) return null;

  return (
    <>
      <h1>All Categories</h1>
      <div>Hello {user.username}</div>
    </>
  );
};
