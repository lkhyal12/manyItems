import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalBtn = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "BAAeHmGaeL1xmw7Ryz9o6P6xVlMgafy0gSDP3QUNRvjcBo7YqLpK9eFG_8NiT_psZThIxobFWUhXGpN20U",
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
