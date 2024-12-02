import Container from '@/components/Container'
import React from 'react'

const BlogLayout = ({children}) => {
  return (
    <div className='bg-lightbackground/40'>
    <Container className="py-6">{children}</Container>
    </div>
  )
}

export default BlogLayout