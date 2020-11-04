import { useState } from 'react'
import { Form, Label, TextField, FieldError } from '@redwoodjs/forms'

import { useCheckout } from 'src/components/Checkout'
import { Button } from '../UI/Button/Button'
import { Lead } from '../UI'

export const SetShipping = () => {
  const { checkout, setShipping } = useCheckout()
  const [state, setState] = useState({
    loading: false,
    error: null,
  })

  const onSubmit = async (input) => {
    setState({ ...state, error: null, loading: true })
    setShipping({ input }).catch((error) => {
      setState({ ...state, error: error.message, loading: false })
    })
  }

  return (
    <Form
      onSubmit={onSubmit}
      validation={{ mode: 'onBlur' }}
      className="max-w-md space-y-4 "
    >
      {state.error && <p className="form-error">{state.error}</p>}
      <Lead as="h2">Billing Details</Lead>
      <div className="field">
        <Label name="name" errorClassName="label-error">
          Name
        </Label>
        <TextField
          name="name"
          placeholder="Bender Bending Rodriguez"
          defaultValue={checkout?.customer?.shipping?.name}
          validation={{
            required: 'Name is required',
          }}
          errorClassName="input-error"
        />
        <FieldError name="name" className="field-error" />
      </div>

      <div className="field">
        <Label name="line1" errorClassName="label-error">
          Street
        </Label>
        <TextField
          name="line1"
          placeholder="123 Short Circuit Drive"
          defaultValue={checkout?.customer?.shipping?.address?.line1}
          validation={{
            required: 'Street address is required',
          }}
          errorClassName="input-error"
        />
        <FieldError name="line1" className="field-error" />
      </div>

      <div className="field" style={{ paddingTop: '0' }}>
        <TextField
          name="line2"
          defaultValue={checkout?.customer?.shipping?.address?.line2}
          placeholder="#5"
          errorClassName="input-error"
        />
      </div>
      <div className="flex items-end justify-between">
        <div className="field" style={{ width: '66.666666%' }}>
          <Label name="city" errorClassName="label-error">
            City
          </Label>
          <TextField
            name="city"
            placeholder="Bishop"
            defaultValue={checkout?.customer?.shipping?.address?.city}
            validation={{
              required: 'City is required.',
            }}
            errorClassName="input-error"
          />
          <FieldError name="city" className="field-error" />
        </div>

        <div className="field" style={{ width: '33.333333%' }}>
          <Label name="state" errorClassName="label-error">
            State
          </Label>
          <TextField
            name="state"
            placeholder="AI"
            defaultValue={checkout?.customer?.shipping?.address?.state}
            validation={{
              required: 'State is required.',
            }}
            errorClassName="input-error"
          />
          <FieldError name="state" className="field-error" />
        </div>

        <div className="field" style={{ width: '33.333333%' }}>
          <Label name="postalCode" errorClassName="label-error">
            Postal Code
          </Label>
          <TextField
            name="postalCode"
            placeholder="W9 1ER"
            defaultValue={checkout?.customer?.shipping?.address?.postalCode}
            validation={{
              required: 'Postal Code is required.',
            }}
            errorClassName="input-error"
          />
          <FieldError name="postalCode" className="field-error" />
        </div>
      </div>

      <div className="field">
        <Button type="submit" disabled={state.loading}>
          Next: Payment Method
        </Button>
      </div>
    </Form>
  )
}
