// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const {
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
    } = req.body
    const msg = {
      to: 'info@info.com',
      from: 'tbite.tk@gmail.com',
      subject: `${name.toUpperCase()} Placed An Order`,
      html: `<strong>Customer Name:${' '} ${name} <br> Customer Phone No:${' '} ${phone} <br>  dish:${' '} ${dish} <br> quantity:${' '} ${quantity} <br> location:${' '} ${location}</strong>`,
    }
    try {
      await sgMail.send(msg)
      res.status(200).json({ success: true })
    } catch (error) {
      res.status(200).json({ success: false })
    }
  }
}
