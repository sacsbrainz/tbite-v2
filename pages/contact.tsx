import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import { validate } from '../utils/validate'

function contact() {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    dish: '',
    quantity: '',
    location: '',
  })

  const [errors, setErrors] = useState<{
    name?: string
    phone?: string
    dish?: string
    quantity?: string
    location?: string
  }>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errors = validate(values)
    const isError = Object.keys(errors).length
    if (isError && isError > 0) {
      setErrors(errors)
      return
    }
    try {
      const res = await fetch('api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        setValues({ name: '', phone: '', dish: '', quantity: '', location: '' })
      }
    } catch (error) {
      console.error(error)
    }
    console.log(values)
  }

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      <div>
        <Header />
        <div className="h-1/2 w-full bg-[#edf0f9] pb-5  dark:bg-black dark:text-white">
          <div className="sm:w-1/1 mx-auto flex flex-col items-center px-3 pt-5  md:w-1/2 lg:w-1/3">
            <h1 className="btn items-center justify-center rounded-full border-0 bg-white text-black shadow-2xl dark:bg-black  dark:text-white">
              Contact Us
            </h1>
            <h1 className="py-4">A Taste Of Home. </h1>
            <a
              className="btn flex items-center justify-center rounded-full border-0 bg-white px-5 py-3 text-black shadow-2xl hover:bg-white hover:text-[#912121] dark:bg-black dark:text-white"
              href="https://t.me/cryptoservicestrend"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className=""
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              Whatsapp{' '}
            </a>
          </div>
          <div className="px-3 pt-10">
            <form
              onSubmit={handleSubmit}
              className="sm:w-1/1 mx-auto flex flex-col items-center px-3 dark:bg-black dark:text-white md:w-1/2  lg:w-1/3"
            >
              <Input
                error={!!errors.name}
                errorMessage={errors.name}
                onChange={onChange}
                value={values.name}
                id="name"
                name="name"
                placeholder="Name"
              />
              <Input
                error={!!errors.phone}
                errorMessage={errors.phone}
                onChange={onChange}
                value={values.phone}
                id="phone"
                name="phone"
                placeholder="Phone no."
              />
              <Input
                error={!!errors.dish}
                errorMessage={errors.dish}
                onChange={onChange}
                value={values.dish}
                id="dish"
                name="dish"
                placeholder="Dish"
              />
              <Input
                error={!!errors.quantity}
                errorMessage={errors.quantity}
                onChange={onChange}
                value={values.quantity}
                id="quantity"
                name="quantity"
                placeholder="Quantity"
              />
              <Textarea
                error={!!errors.location}
                errorMessage={errors.location}
                onChange={onChange}
                value={values.location}
                id="location"
                name="location"
                placeholder="Location"
              />
              <button
                className="mt-6 items-center justify-center rounded-full border-0 bg-white  px-9 py-2 text-lg text-black shadow-2xl disabled:cursor-not-allowed disabled:bg-opacity-50 dark:bg-black dark:text-white "
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default contact
