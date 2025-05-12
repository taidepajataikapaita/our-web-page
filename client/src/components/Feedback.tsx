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
import { submitFeedback, FeedbackData } from '@/services/feedbackService';
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import { MessageSquare, Check, Send } from "lucide-react";

// Define the schema for validation
const FormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  feedback: z.string().min(5, { message: "Feedback must be at least 5 characters." }),
});

export function Feedback() {
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      feedback: "",
    },
  });

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState<FeedbackData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setFormData(data);
    setDialogOpen(true);
  }

  const handleConfirm = async () => {
    try {
      if (!formData) return;
      
      setIsSubmitting(true);
      await submitFeedback(formData);

      toast.success("Your feedback has been submitted successfully!");
      setDialogOpen(false);
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to submit feedback');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#FFB6D2] py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0074D9] mb-4">
                Share Your Feedback
              </h1>
              <p className="text-[#6E7B8B] text-lg mb-6">
                We value your thoughts and suggestions. Let us know what you think about our 
                workshops, t-shirts, or any other aspect of our services.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-white p-4 rounded-full w-48 h-48 flex items-center justify-center">
                <MessageSquare size={100} className="text-[#FF5CBF]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-[#FFB6D2]">
          <h2 className="text-2xl font-bold text-[#0074D9] mb-8 text-center">Send Us Your Feedback</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0074D9] font-semibold">{t('feedback-your-name')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="border-2 border-[#FFB6D2] focus-visible:ring-[#FF5CBF] rounded-md px-4 py-2 transition-colors
                        focus:border-[#FF5CBF] hover:border-[#FF5CBF]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 font-medium" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0074D9] font-semibold">{t('feedback-your-email')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="your.email@example.com"
                        type="email"
                        {...field}
                        className="border-2 border-[#FFB6D2] focus-visible:ring-[#FF5CBF] rounded-md px-4 py-2 transition-colors
                        focus:border-[#FF5CBF] hover:border-[#FF5CBF]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 font-medium" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0074D9] font-semibold">{t('feedback-your-feedback')}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please share your thoughts with us..."
                        {...field}
                        className="border-2 border-[#FFB6D2] focus-visible:ring-[#FF5CBF] rounded-md px-4 py-2 transition-colors
                        focus:border-[#FF5CBF] hover:border-[#FF5CBF] min-h-[160px] resize-y"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 font-medium" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-[#FF5CBF] text-white hover:bg-white hover:text-[#FF5CBF] border border-[#FF5CBF] transition duration-200
                py-3 text-lg font-semibold rounded-md shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {t('feedback-send-feedback-button')}
              </Button>
            </form>
          </Form>

          <div className="mt-12 bg-[#FFB6D2] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#0074D9] mb-4">Why Your Feedback Matters</h3>
            <div className="space-y-4 text-[#6E7B8B]">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white p-1 rounded-full">
                  <Check size={16} className="text-[#FF5CBF]" />
                </div>
                <p>Your feedback helps us improve our workshops and t-shirt designs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white p-1 rounded-full">
                  <Check size={16} className="text-[#FF5CBF]" />
                </div>
                <p>We use your suggestions to develop new creative concepts</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white p-1 rounded-full">
                  <Check size={16} className="text-[#FF5CBF]" />
                </div>
                <p>Every comment helps us better understand what our community wants</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#FFB6D2]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#0074D9] text-2xl font-bold">
              Confirm Submission
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="text-black">
                <span className="text-lg">Are you sure you want to send this message? Please verify your information:</span>
                {formData && (
                  <div className="mt-4 bg-[#FFB6D2] bg-opacity-20 p-4 rounded-lg border-2 border-[#FFB6D2]">
                    <div className="mb-2">
                      <span className="font-semibold text-[#0074D9]">Name:</span> {formData.name}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-[#0074D9]">Email:</span> {formData.email}
                    </div>
                    <div>
                      <span className="font-semibold text-[#0074D9]">Feedback:</span>
                      <p className="mt-1 whitespace-pre-wrap">{formData.feedback}</p>
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
              disabled={isSubmitting}
              className="bg-[#FF5CBF] text-white hover:bg-white hover:text-[#FF5CBF] border border-[#FF5CBF] font-medium px-6 flex items-center gap-2"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send size={16} />}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 