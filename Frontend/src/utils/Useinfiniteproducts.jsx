import { useEffect, useState } from "react";
import axios from "../api/AxiosConfig";
import { loadlazyproduct } from "../../store/reducers/Productslice";
import { useDispatch, useSelector } from "react-redux";

const Useinfiniteproducts = () => {
  const [hasMore, sethasMore] = useState(true);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const fetchedproducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=8&_start=${products.length}`
      );
      if (data.length > 0) {
        dispatch(loadlazyproduct(data));
        if (data.length < 8) {
          sethasMore(false);
        }
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchedproducts();
  }, []);
  return {products,hasMore,fetchedproducts};
};

export default Useinfiniteproducts;
