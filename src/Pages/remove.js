 {/* experiment */}
      <div className="text-3xl font-bold mt-8 ml-8">New Arrivals</div>
      <div className="flex flex-wrap justify-center">
        {/* Product 1 */}
        <div className="m-4 border-[1px] relative group">
          <div className="overflow-hidden h-32">
            <img
              src={product}
              alt="Product 1"
              className="transition-transform transform translate-y-32 hover:-translate-y-0"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="font-bold text-xl mb-2">Flower Base</div>
              <div className="text-gray-500 mb-2">Blank and White</div>
              <div className="font-semibold text-xl">35.00 ₹</div>
              <div className="mt-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">
                  Add to Cart
                </button>
                <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg m-2 hover:bg-gray-400">
                  View Details
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-green-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
         {/* experiment */}
