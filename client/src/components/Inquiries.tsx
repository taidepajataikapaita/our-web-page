"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { inquiriesService } from '@/services/inquiriesService';

// Define the schema for validation
const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
});

export function Inquiries() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      username: "",
    },
  });

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState<{ email: string; username: string } | null>(null);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setFormData(data);
    setDialogOpen(true);
  }

  const handleConfirm = async () => {
    try {
      if (!formData) return;
      
      await inquiriesService.submitInquiry(formData);
      
      toast.success("Your information has been submitted successfully!");
      setDialogOpen(false);
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to submit inquiry');
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#EDE8F5] rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#3D52A0]">Inquiries</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#3D52A0]">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="you@example.com" 
                    {...field} 
                    className="border-[#7091E6] focus:border-[#3D52A0]"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#3D52A0]">Username</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your username" 
                    {...field} 
                    className="border-[#7091E6] focus:border-[#3D52A0]"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full bg-[#3D52A0] text-white hover:bg-[#7091E6] transition duration-200"
          >
            Submit
          </Button>
        </form>
      </Form>

      <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className="bg-[#EDE8F5]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#3D52A0]">
              Confirm Submission
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="text-black">
                <span>Are you sure you want to submit this inquiry? Please verify your information:</span>
                {formData && (
                  <div className="mt-2 text-sm bg-white p-3 rounded-md">
                    <div className="mb-1">
                      <span className="font-medium">Email:</span> {formData.email}
                    </div>
                    <div>
                      <span className="font-medium">Username:</span> {formData.username}
                    </div>
                  </div>
                )}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleConfirm}
              className="bg-[#3D52A0] text-white hover:bg-[#7091E6]"
            >
              Submit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}