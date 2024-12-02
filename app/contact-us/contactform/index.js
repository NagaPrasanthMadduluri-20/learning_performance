import Container from '@/components/Container'
import React from 'react'
import FormFields from '../../components/EnquiryForm/FormFields'
import Text from '@/components/Text'
import { Separator } from '@/components/ui/separator'

const ContactForm = () => {
  return (
    <Container>
        <div className="bg-[url('/contact-form-bg.jpg')] px-1 py-2 md:px-36 md:py-20">
           <div className='bg-background px-2 py-2 md:px-20 md:py-10'>
            <Text variant='h2' className="text-center mb-5">
                Enquiry Form
            </Text>
            <Separator className="bg-blue-600"/>
         <FormFields  formType="Contact" />
         </div>
        </div>
        
    </Container>
  )
}

export default ContactForm