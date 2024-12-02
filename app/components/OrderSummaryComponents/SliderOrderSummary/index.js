import Text from '@/components/Text'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'
import OrderSummarySlider from '../OrderSummarySlider'
import OrderSummaryAutoSlider from '../OrderSummaryAutoSlider'
import Container from '@/components/Container'

const SliderOrderSummary = () => {
  return (
    <Container className="pt-2">
         <Card className="p-5 shadow-lg hidden md:flex">
        <CardContent>
          <Text className="mb-2">Have a PromoCode?</Text>
          {/* <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="PromoCode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl> */}
          <div className="flex">
            <Input
              placeholder="Enter PromoCode*"
              className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0"
            />
            <Button>Apply</Button>
          </div>
          {/* </FormControl>
                    <FormMessage className="text-[12px] !mt-0" />
                  </FormItem>
                )}
              />
            </form>
          </Form> */}
        </CardContent>
      </Card>
      <OrderSummarySlider />
    </Container>
  )
}

export default SliderOrderSummary