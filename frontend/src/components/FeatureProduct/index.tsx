import React from "react";
import products from "./products.json";
import Image from "next/image";

const FeatureProduct = () => {
  return (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
      {products.map((product, idx) => (
        <div
          key={product.name}
          className={`flex flex-col justify-center bg-white rounded-lg sm:rounded-2xl shadow-lg p-3 sm:p-5 lg:p-8 relative ${
            idx % 2 === 1 ? "md:top-8 md:ml-8" : "z-10"
          }`}
        >
          <div
            className="w-full h-56 relative mb-6 rounded-lg  sm:rounded-xl overflow-hidden"
            style={{ minHeight: 224 }}
          >
            <Image
              src={product.img}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            {product.name}
          </h2>
          <p className="text-gray-600 text-base">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureProduct;
