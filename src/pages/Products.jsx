import React from "react";
import { Filters, PaginationContainer, ProductContainer } from "../components";
import { axiosInstance } from "../axiosInstance";

const url = "/products";

export const loader = async ({ request }) => {
  /*
  It takes a URL string from the request.url property.
  It creates a URL object from that URL string.
  It extracts the query parameters using the searchParams property.
  It converts the query parameters into an iterable of key-value pairs using the entries() method.
  It spreads these key-value pairs into an array.
  It uses Object.fromEntries() to create a new object where the key-value pairs become properties of the object.
  */
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await axiosInstance(url , {params});
  const products = response.data.data;
  //meta contains the pagination , companies , categories
  const meta = response.data.meta;
  return { products, meta , params };
};

const Products = () => {
  return (
    <div>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;
