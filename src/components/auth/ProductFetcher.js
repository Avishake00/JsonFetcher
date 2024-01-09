'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductTable from './ProductTable';

const ProductFetcher = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://s3.amazonaws.com/open-to-cors/assignment.json'
        );
        const data = response.data;

        // Extract products object from the response
        const productsObj = data.products;

        // Convert the products object into an array
        const productsArray = Object.keys(productsObj).map((key) => ({
          id: key,
          ...productsObj[key],
        }));

        // Sort the array based on descending popularity
        const sortedData = productsArray.sort((a, b) => b.popularity - a.popularity);

        setProducts(sortedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <h1 className='text-sm font-serif font-semibold ml-96 underline '>Product Table (Ordered by Popularity):</h1>

    <ProductTable products={products} />
    </div>
  );
};

export default ProductFetcher;
