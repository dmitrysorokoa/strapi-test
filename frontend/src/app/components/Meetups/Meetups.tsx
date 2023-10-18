'use client'

import { useEffect } from 'react'

export default function Meetups() {
  const meetups = 
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/meetups`, {
  headers: {Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`}
})
   .then(resp => resp.json())
   .then(json => console.log(JSON.stringify(json)))
  }, [])

  return (
    <div>
      meetups
    </div>
  )
}
