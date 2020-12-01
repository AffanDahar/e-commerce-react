import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripButton = ({price}) => {

    const stripePrice = price * 100
    const publishKey = 'pk_test_51HRFZiHNYT6gBQUqnf0enwUuT4axfTBQAkEfjxXHvLZ9lRSgR0iULfQUlwsnpFLYf29vRsuesNs5cOF5vMQbifaK00RugfAufD'
    const onToken =token => {
        console.log(token)
        alert('Payment done')
    }
    
    return (
        <div>
            <StripeCheckout
            label='Pay now'
            name = 'Crown'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
            />
        </div>
    )

}

export default StripButton
