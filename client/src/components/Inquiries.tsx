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
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-[#3D52A0] text-center mb-8">Inquiries</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#3D52A0] font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your.email@example.com"
                      {...field}
                      className="border-2 border-[#7091E6] focus-visible:ring-[#3D52A0] rounded-md px-4 py-2 transition-colors
                      focus:border-[#3D52A0] hover:border-[#3D52A0]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 font-medium" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#3D52A0] font-semibold">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your username"
                      {...field}
                      className="border-2 border-[#7091E6] focus-visible:ring-[#3D52A0] rounded-md px-4 py-2 transition-colors
                      focus:border-[#3D52A0] hover:border-[#3D52A0]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 font-medium" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[#3D52A0] text-white hover:bg-[#7091E6] transition duration-200
              py-3 text-lg font-semibold rounded-md shadow-sm hover:shadow-md"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className="bg-white rounded-xl p-6 shadow-lg">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#3D52A0] text-2xl font-bold">
              Confirm Submission
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="text-black">
                <span className="text-lg">Are you sure you want to submit this inquiry? Please verify your information:</span>
                {formData && (
                  <div className="mt-4 bg-[#EDE8F5] p-4 rounded-lg border-2 border-[#7091E6]">
                    <div className="mb-2">
                      <span className="font-semibold text-[#3D52A0]">Email:</span> {formData.email}
                    </div>
                    <div>
                      <span className="font-semibold text-[#3D52A0]">Username:</span> {formData.username}
                    </div>
                  </div>
                )}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-6 space-x-4">
            <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 font-medium px-6">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirm}
              className="bg-[#3D52A0] text-white hover:bg-[#7091E6] font-medium px-6"
            >
              Submit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}