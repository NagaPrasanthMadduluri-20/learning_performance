import { Mail, Printer } from 'lucide-react'
import React from 'react'

const EmailEnquire = () => {
  return (
    <div>
        <div className='flex justify-between sm:gap-x-5'>
            <div className='sm:flex text-[11px] items-center gap-x-2 cursor-pointer font-bold underline underline-offset-1 opacity-75 hidden'>Email Schedule </div>
            <div className='flex text-[11px] items-center gap-x-2 cursor-pointer font-bold underline underline-offset-1 opacity-75 '> Print Schedule </div>
            <div className="text-[11px] px-2 py-0 font-bold cursor-pointer  underline underline-offset-1"> Enquire Now </div>
        </div>
    </div>
  )
}

export default EmailEnquire