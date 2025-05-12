import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const TShirt = () => {
  const { t } = useTranslation();
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [addAnother, setAddAnother] = useState(false);
  
  // Use t for some translations
  const orderFormTitle = t('order-form-title', 'T-shirt Order Form');
  const orderButtonText = t('place-order-button', 'Place Order');

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Order Form Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0074D9] mb-6">Get a T-Shirt!</h1>
          <img 
            src="/shirt-sample.svg" 
            alt="T-shirt design example" 
            className="w-80 h-80 object-contain mx-auto mb-8" 
          />
        </div>
        
        {/* T-shirt Order Form */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-[#0074D9] shadow-lg overflow-hidden mb-8">
            <CardHeader className="bg-[#0074D9] text-white">
              <CardTitle className="text-xl">{orderFormTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <img 
                    src="/blank-tshirt.jpg" 
                    alt="Blank T-shirt" 
                    className="w-full h-48 object-contain mb-4 rounded-md"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="size" className="text-[#0074D9] font-semibold mb-1 block">
                        Size <span className="text-red-500">*</span>
                      </Label>
                      <Select defaultValue="m">
                        <SelectTrigger className="border-[#FFB6D2] focus:ring-[#FF5CBF]">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="xs">XS</SelectItem>
                          <SelectItem value="s">S</SelectItem>
                          <SelectItem value="m">M</SelectItem>
                          <SelectItem value="l">L</SelectItem>
                          <SelectItem value="xl">XL</SelectItem>
                          <SelectItem value="xxl">XXL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="color" className="text-[#0074D9] font-semibold mb-1 block">
                        Color <span className="text-red-500">*</span>
                      </Label>
                      <Select defaultValue="white">
                        <SelectTrigger className="border-[#FFB6D2] focus:ring-[#FF5CBF]">
                          <SelectValue placeholder="Select color" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="white">White</SelectItem>
                          <SelectItem value="black">Black</SelectItem>
                          <SelectItem value="gray">Gray</SelectItem>
                          <SelectItem value="blue">Blue</SelectItem>
                          <SelectItem value="pink">Pink</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center">
                      <Checkbox 
                        id="add-another" 
                        checked={addAnother}
                        onCheckedChange={(checked) => setAddAnother(checked as boolean)}
                        className="border-[#FF5CBF] data-[state=checked]:bg-[#FF5CBF]"
                      />
                      <Label htmlFor="add-another" className="ml-2 text-[#6E7B8B]">
                        Add another?
                      </Label>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="bg-[#0074D9] text-white p-3 mb-4">
                    <h3 className="font-semibold">Shipping</h3>
                  </div>
                  
                  <div className="mb-4">
                    <Label className="text-[#0074D9] font-semibold mb-1 block">
                      Shipping Options <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup 
                      defaultValue="standard" 
                      value={shippingMethod}
                      onValueChange={setShippingMethod}
                      className="space-y-2"
                    >
                      <div className="flex items-center">
                        <RadioGroupItem 
                          value="standard" 
                          id="standard" 
                          className="border-[#FF5CBF] text-[#FF5CBF]"
                        />
                        <Label htmlFor="standard" className="ml-2 text-[#6E7B8B]">
                          Standard Delivery (5-7 Days)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <RadioGroupItem 
                          value="express" 
                          id="express" 
                          className="border-[#FF5CBF] text-[#FF5CBF]"
                        />
                        <Label htmlFor="express" className="ml-2 text-[#6E7B8B]">
                          Express Delivery (2-3 Days)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#6E7B8B]">Grand Total</span>
                      <div className="font-bold text-[#0074D9]">
                        $0.00 <span className="text-xs font-normal text-[#6E7B8B]">(calculated)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="firstName" className="text-[#0074D9] font-semibold mb-1 block">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="firstName" 
                      className="border-[#FFB6D2] focus:ring-[#FF5CBF] focus:border-[#FF5CBF]" 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="streetAddress" className="text-[#0074D9] font-semibold mb-1 block">
                      Street Address <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="streetAddress" 
                      className="border-[#FFB6D2] focus:ring-[#FF5CBF] focus:border-[#FF5CBF]" 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="addressLine2" className="text-[#0074D9] font-semibold mb-1 block">
                      Address Line 2
                    </Label>
                    <Input 
                      id="addressLine2" 
                      className="border-[#FFB6D2] focus:ring-[#FF5CBF] focus:border-[#FF5CBF]" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-[#FF5CBF] text-white hover:bg-[#FFB6D2] hover:text-[#0074D9] py-3 text-lg font-semibold">
                  {orderButtonText}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TShirt; 