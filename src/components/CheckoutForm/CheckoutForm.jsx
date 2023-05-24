import { useState } from 'react'
import './CheckoutForm.css'

export const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleConfirm = (event) => {
    event.preventDefault()

    const userData = {
      name,
      phone,
      email
    }

    onConfirm(userData)
  }

  return (
    <div >
      <form className='ContainerCheckout' onSubmit={handleConfirm}>
        <label className='Label'>
          Nombre
        </label>
        <input
          className='Input'
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <label className='Label'>
          Teléfono
        </label>
        <input
          className='Input'
          type="text"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
        <label className='Label'>
          Email
        </label>
        <input
          className='Input'
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <button className='btn' type="submit">Confirmar</button>
      </form>
    </div>
  )
}
