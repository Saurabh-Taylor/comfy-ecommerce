import { useSelector } from "react-redux";
import { SectionTitle, CheckoutForm, CartTotals } from "../components";
import toast from "react-hot-toast";
import { redirect } from "react-router";

export const loader = (store) => async () => {
  const user = store.getState().user.user;
  if (!user) {
    toast.success("User Doesnt Exist Please Login")
     return redirect("/login");
     
  }

  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((store) => store.cart.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text={"Your Cart is Empty"} />;
  }

  return (
    <>
      <SectionTitle text={"Place Your Order"} />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
