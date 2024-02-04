import React from 'react';

export interface ProductCardProps {
  price: number;
  description: string;
  url: string;
  onAddClick: () => void;
  onRemoveClick: () => void;
 
}

const ProductCard: React.FC<ProductCardProps> = ({ price, description, onAddClick, onRemoveClick, url }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-2 ml-2">
      <div className="mb-3 rounded-md ">
        <img  src={url} alt="Product Image" className="w-full h-52 object-cover rounded-md" />
      </div>

      <div className="mb-2">
        <h2 className="text-xl font-bold">{description}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>

      <div className="flex justify-between">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md" onClick={onAddClick}>
          Adicionar
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md" onClick={onRemoveClick}>
          Remover
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
