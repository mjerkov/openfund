import { Elements } from '@stripe/react-stripe-js'

import { stripePromise } from 'src/lib/stripe'
import { PaymentForm } from 'src/components/Checkout'

export const SetPayment = () => (
  <Elements stripe={stripePromise}>
    <div className="max-w-xl">
      <PaymentForm />
    </div>
  </Elements>
)
