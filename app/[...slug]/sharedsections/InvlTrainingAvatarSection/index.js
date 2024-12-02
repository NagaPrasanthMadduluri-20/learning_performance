import Container from '@/components/Container'
import Text from '@/components/Text'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const InvlTrainingAvatar = () => {
    const data = [
        {img: 'intel.svg'},
        {img: 'amazon.svg'},
        {img: 'king.svg'},
        {img: 'infosys.svg'},
        {img: 'Total.svg'},
        {img: 'ge.svg'},
        {img: 'etisalat.svg'},
         // Add more image URLs as needed
       ];
  return (
    <div className= "bg-primary md:bg-[url('/Corporate-Training-Solutions-bg.png')] bg-contain bg-no-repeat py-1">
    <Container >
      <div className="grid grid-cols-10">
        <div className="md:col-span-4"></div>
        <div className="col-span-full md:col-span-6">
          <Text variant="h2" className="text-primary-foreground mb-3 md:mb-8 font-bold">Corporate Group Training </Text>

          <ul className="text-primary-foreground list-disc ml-5 mb-5 space-y-1 text-[18px]">
            <li>Experienced &amp; Industry Specific Trainers </li>
            <li>Deliver sessions across continents via Live Online </li>
            <li>Training in your Language </li>
            <li>Customized Trainings</li>
          </ul> 
         <Text className="text-[20px] font-semibold text-yellow-300 mt-8">Trusted by Top Companies</Text>
         <div className='flex flex-wrap gap-3 items-center mt-8'>
         {data.map((imageUrl, index) => (
         <div key={index} className='flex items-center justify-center bg-background rounded-full w-20 h-20 p-2'>
            <Image src={`https://alpha.invensislearning.com/storage/images/logos/clients/${imageUrl.img}`} alt={`corporate-training-icon-${imageUrl.img}`} width={80} height={80}/>
         </div>
         ))}
         </div>
         <Button variant="secondary" className="mt-10 font-semibold px-7 h-12 text-[18px]"><Link href={`/corporategrouptraining`}> Explore More </Link> </Button>
        </div>
       
      </div>
    </Container>
  </div>
  )
}

export default InvlTrainingAvatar