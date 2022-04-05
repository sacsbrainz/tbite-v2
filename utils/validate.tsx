import React from 'react'

export const validate = ({
  name,
  phone,
  dish,
  quantity,
  location,
}: {
  name: string
  phone: string
  dish: string
  quantity: string
  location: string
}) => {
  const errors: {
    name?: string
    phone?: string
    dish?: string
    quantity?: string
    location?: string
  } = {}
  if (!name || name.trim() === '') {
    errors.name = 'Name is Required'
  }
  if (!phone || phone.trim() === '') {
    errors.phone = 'Phone no: is Required'
  }
  if (!dish || dish.trim() === '') {
    errors.dish = 'dish is Required'
  }
  if (!quantity || quantity.trim() === '') {
    errors.quantity = 'quantity is Required'
  }
  if (!location || location.trim() === '') {
    errors.location = 'quantityis Required'
  }

  return errors
}
