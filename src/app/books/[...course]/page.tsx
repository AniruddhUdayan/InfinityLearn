import Home from '@/components/bookspage'
import React from 'react'

const Books = ({ params }: any) => {
  return (
    <div>
      <Home params={params}/>
    </div>
  )
}

export default Books
