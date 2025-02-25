"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setFormData(data); // Store the submitted data
    setDialogOpen(true); // Open the confirmation dialog
  }

  const handleConfirm = () => {
    // Handle the confirmed submission here
    console.log("Confirmed submission:", formData);
    setSuccessMessage("Your information has been submitted. Contact us if you have any further questions.");
    setDialogOpen(false);

    // Clear the input fields
    form.reset();

    // Set a timeout to clear the success message after 15 seconds
    setTimeout(() => {
      setSuccessMessage(null);
    }, 15000);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold">Inquiries</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <div>
          <Input
            type="email"
            placeholder="you@example.com"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{form.formState.errors.email.message}</AlertDescription>
            </Alert>
          )}
        </div>
        <div>
          <Input
            placeholder="Your username"
            {...form.register("username")}
          />
          {form.formState.errors.username && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{form.formState.errors.username.message}</AlertDescription>
            </Alert>
          )}
        </div>
        <Button type="submit" className="hover:bg-blue-500 hover:text-white transition duration-200">
          Submit
        </Button>
      </form>

      {/* Success Message */}
      {successMessage && (
        <div className="mt-4 text-green-600">
          {successMessage}
        </div>
      )}

      {/* Alert Dialog for confirmation */}
      <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Submission</AlertDialogTitle>
          </AlertDialogHeader>
          <p>Are you sure you want to submit your information?</p>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-200 text-gray-600 hover:bg-gray-300">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-blue-500 text-white hover:bg-blue-600" onClick={handleConfirm}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}