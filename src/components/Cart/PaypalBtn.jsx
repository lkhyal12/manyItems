import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalBtn = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
         import.meta.env.VITE_PAYPAL_CLIENT_ID,
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) =>
          actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          })
        }
        onApprove={(data, actions) => actions.order.capture().then(onSuccess)}
        onError={onError}
      ></PayPalButtons>
    </PayPalScriptProvider>
  );
};

export default PaypalBtn;
