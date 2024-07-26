import { useState } from "react";
import { formatPrice } from "../constants";

const FormRange = ({ name, label, size , price }) => {
  const step = 1000;
  const maxPrice = 10000000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        step={step}
        className={`range range-primary ${size} `}
        onChange={(e) => setSelectedPrice(e.target.value)}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2" >
        <span className="font-bold text-md" > min price: 0 </span>
        <span className="font-bold text-md" > max price: {formatPrice(maxPrice)} </span>
      </div>
    </div>
  );
};

export default FormRange;
