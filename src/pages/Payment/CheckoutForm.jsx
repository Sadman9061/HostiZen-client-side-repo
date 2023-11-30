import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";



const CheckoutForm = () => {



    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const  {user} = useContext(AuthContext);
    // const [cart, refetch] = useCart();
    // const navigate = useNavigate();
    const params = useParams();
    console.log(params.payment);

    const totalPrice = 200
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    // cartIds: cart.map(item => item._id),
                    // menuItemIds: cart.map(item => item.menuId),
                    memberShip:params?.payment,
                    
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                // refetch();
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the taka paisa",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                    // navigate('/dashboard/checkout/:paymentHistory')
                }

            }
        }

    }

    // const [error, setError] = useState('');
    // const [clientSecret, setClientSecret] = useState('');
    // const [transactionId, setTransactionId] = useState('');
    // const stripe = useStripe();
    // const elements = useElements();
    // const axiosSecure = useAxiosSecure();
    // const { user } = useContext(AuthContext);
    // const price = 100;
    // useEffect(() => {
    //     if (price > 0) {
            
    //         axiosSecure.post('/create-payment-intent', { price: price })
    //             .then(res => {
    //                 console.log(res.data.clientSecret);
    //                 setClientSecret(res.data.clientSecret);
    //             })
    //     }


    // }, [axiosSecure, price])

    // const handleSubmit = async (event) => {

    //     event.preventDefault();
    //     if (!stripe || !elements) {

    //         return;
    //     }
    //     const card = elements.getElement(CardElement);
    //     if (card == null) {
    //         return;
    //     }
    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card,
    //     });

    //     if (error) {
    //         console.log('[error]', error);
    //         setError(error.message);
    //     } else {
    //         console.log('[PaymentMethod]', paymentMethod);
    //         setError('');
    //     }
    //     //   confirm payment
    //     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: card,
    //             billing_details: {
    //                 email: user?.email,
    //                 name: user?.displayName,
    //             }
    //         }
    //     })

    //     if (confirmError) {
    //         console.log("confirm error")
    //     }
    //     else {
    //         console.log("payment intent", paymentIntent);
    //         if (paymentIntent.status === 'succeeded') {
    //             console.log("transactionId", paymentIntent.id);
    //             setTransactionId(paymentIntent.id)
    //             // save to database
    //             const payment = {
    //                 email: user?.email,
    //                 name: user?.displayName,
    //                 transactionId: paymentIntent.id,
    //                 status: 'Purchased',
    //                 date: new Date(),
    //             }

    //             const res = await axiosSecure.post('/payments', payment);
    //             console.log('payment saved', res.data);

    //             if (res.data?.paymentResult?.insertedId){
    //                  console.log(res.data);
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: "Thank you for the taka paisa",
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });


    //             } 


    //         }


    //     }
    // }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4 " type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600 mt-4"> Your transaction id: {transactionId} </p>}

        </form>
    );
};

export default CheckoutForm;