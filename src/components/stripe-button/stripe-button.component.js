import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // checkout value must bbe in cents
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51INYEkBnnqmDHXMqmX7k6UYBncJj4tGCMmmR3sHfmi5aIt9YmsX1YWsMgLY0gEqr3NPaCAnfGLWJJ2PSshiLSfIb00rcunPyNV";

  // taken token => to pass to backend
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing LLC"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
