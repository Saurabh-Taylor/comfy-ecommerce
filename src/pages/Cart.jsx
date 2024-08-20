import { useSelector } from "react-redux";
import { CartItems, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector(store=> store.user.user)

  const numItemsInCart = useSelector((store) => store.cart.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text={"Your Cart is Empty"} />;
  }

  return (
    <>
      <SectionTitle text={"Shopping Cart"} />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItems />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to={"/checkout"} className="btn btn-primary btn-block mt-8 ">
              {" "}
              Proceed To Checkout{" "}
            </Link>
          ) : (
            <Link to={"/login"} className="btn btn-primary btn-block mt-8 ">
              {" "}
              Please Login First{" "}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
