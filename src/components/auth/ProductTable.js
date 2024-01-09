// ... (other imports)

const ProductTable = ({ products }) => {
  const showScrollBar = products.length > 20;

  return (
    <div className="flex justify-center items-center pt-8">
      <div
        className={`overflow-x-auto ${
          showScrollBar ? "max-h-[500px] overflow-y-auto" : ""
        }`}
      >
        <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-300 border border-collapse border-gray-300 dark:border-gray-600 rounded-md">
          <thead className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:bg-gradient-to-r from-gray-800 to-gray-700 text-gray-800 dark:text-gray-200 uppercase border-b border-gray-300 dark:border-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3 sticky top-0 bg-gray-50 z-10">
                ID
              </th>
              <th scope="col" className="px-6 py-3 sticky top-0 bg-gray-50 z-10">
                Title
              </th>
              <th scope="col" className="px-6 py-3 sticky top-0 bg-gray-50 z-10">
                Price
              </th>
              <th scope="col" className="px-6 py-3 sticky top-0 bg-gray-50 z-10">
                Popularity
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-200 transition duration-150">
                <th className="py-2 px-4 border-b border-gray-300">{product.id}</th>
                <td className="py-2 px-4 border-b border-gray-300">{product.title}</td>
                <td className="py-2 px-4 border-b border-gray-300">${product.price}</td>
                <td className="py-2 px-4 border-b border-gray-300">{product.popularity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
