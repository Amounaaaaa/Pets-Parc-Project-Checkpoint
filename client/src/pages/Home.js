import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../actions/productActions";

const Home = () => {
  const dispatch = useDispatch();

  const Products = useSelector((state) => state.productReducer);
  const { products, loading, error } = Products;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <h1>
    
      </h1>
    </div>
  );
};

export default Home;
