/* eslint-disable react/prop-types */

export default function PriceOption({ option }) {
  const { name, price } = option;
  return (
    <div className="bg-blue-500 rounded-xl p-4 text-white">
      <h2>
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h4 className="text-4xl">{name}</h4>
    </div>
  );
}
