import { loadStripe } from "@stripe/stripe-js";
import DashboardSectionTitle from "../../components/DashboardSectionTitle/DashboardSectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";

// todo:
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {

    return (
        <>
            <DashboardSectionTitle heading={'Payment'}></DashboardSectionTitle>
            <div className="mx-4 md:mx-8 lg:mx-20 ">
                <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </>
    );
};

export default Payment;