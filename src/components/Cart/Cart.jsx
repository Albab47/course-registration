import PropTypes from "prop-types";

const Cart = ({ carts }) => {
    const totalCredit = carts.reduce((acc, crr) => acc + crr.credit, 0);
    const totalPrice = carts.reduce((acc, crr) => acc + crr.price, 0)


  return (
    <div className="w-full md:w-1/4 bg-white rounded-2xl p-6 self-start">
      <h3 className="text-lg text-info font-bold">
        Credit Hour Remaining {20 - totalCredit} hr
      </h3>
      <div className="divider"></div>
      <div>
        <h3 className="font-bold">Course name:</h3>
        <ol className="list-decimal list-inside">
          {carts.map((cart) => (
            <li key={cart.id}>{cart.name}</li>
          ))}
        </ol>
      </div>
      <div className="divider"></div>
      <p>Total Credit Hour : {(totalCredit > 20) ? alert('You can do only 20 credit') : totalCredit}</p>
      <div className="divider"></div>
      <p>Total Price : {totalPrice} USD</p>
    </div>
  );
};

Cart.propTypes = {
  carts: PropTypes.array,
};

export default Cart;
