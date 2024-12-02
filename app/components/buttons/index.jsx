import React from 'react'
import Primary from './variants/primary'
import { Button } from '@/components/ui/button'


const variants = {
    "primary":  <Primary/>,
}

export default function Buttons({variant, ...props}) {
    const Component = variants[variant]
    return <Button {...props} />
}
