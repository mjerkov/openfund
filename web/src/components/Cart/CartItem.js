import { useCart, CartProduct } from 'src/components/Cart'

export const CartItem = ({ item }) => {
  const { updateItemAmount, deleteItem } = useCart()

  const onChange = (e) => {
    updateItemAmount({ id: item.id, amount: e })
  }

  return (
    <div className="cart-item">
      <CartProduct product={item} />
      <div className="cart-item-tools">
        <div className="cart-item-qty">
          Quantity:
          <input
            name="amount"
            type="number"
            min="20"
            value={item.qty || 1}
            className="cart-item-qty-field"
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        </div>
        <button
          onClick={() => deleteItem({ id: item.id })}
          className="btn-subdued"
        >
          Remove
        </button>
      </div>
    </div>
  )
}