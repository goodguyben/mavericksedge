import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { contactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { logger } from '@/lib/logger';

interface ContactSectionProps {
  fullPage?: boolean;
}

interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export default function ContactSection({ fullPage = false }: ContactSectionProps) {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (values: ContactFormValues) => {
      logger.log("Submitting form with values:", values);
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: async (response) => {
      logger.log("Form submission successful:", response);
      const data = await response.json();
      logger.log("Response data:", data);
      toast({
        title: "Success!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: Error) => {
      logger.error("Form submission error:", error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (values: ContactFormValues) => {
    mutation.mutate(values);
  };

  return (
    <section id="contact" className="py-24 px-5 md:px-10 bg-[#121212]">
      <div className="container mx-auto">
        {!fullPage && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Ready to take your business to the next level? Contact us today to discuss your project
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="w-full p-3 bg-[#1E1E1E] border border-gray-700 rounded-lg focus:outline-none focus:border-maverick-orange transition duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="w-full p-3 bg-[#1E1E1E] border border-gray-700 rounded-lg focus:outline-none focus:border-maverick-orange transition duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(123) 456-7890"
                          className="w-full p-3 bg-[#1E1E1E] border border-gray-700 rounded-lg focus:outline-none focus:border-maverick-orange transition duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Service Interested In</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full p-3 bg-[#1E1E1E] border border-gray-700 rounded-lg focus:outline-none focus:border-maverick-orange transition duration-300">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="marketing">Marketing & Creative Services</SelectItem>
                          <SelectItem value="ai-integration">AI Integration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project"
                          className="w-full p-3 bg-[#1E1E1E] border border-gray-700 rounded-lg focus:outline-none focus:border-maverick-orange transition duration-300 min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex w-full">
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-maverick-orange text-white rounded-lg font-medium transition-all duration-300 hover:bg-maverick-orange/90 flex items-center justify-center"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </Form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1E1E1E] p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-maverick-orange" />
                </div>
                <div>
                  <p className="text-sm text-[#AAAAAA]">Phone</p>
                  <p>+1 (250) 883-8849</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-maverick-orange" />
                </div>
                <div>
                  <p className="text-sm text-[#AAAAAA]">Email</p>
                  <p>info@mavericksedge.ca</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-maverick-orange" />
                </div>
                <div>
                  <p className="text-sm text-[#AAAAAA]">Address</p>
                  <p>6908 100 Avenue NW, Suite B</p>
                  <p>Edmonton, AB T6A 0G2, Canada</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/mavericksedge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg text-maverick-orange hover:bg-opacity-20 transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/mavericksedge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg text-maverick-orange hover:bg-opacity-20 transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/mavericks-edge/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg text-maverick-orange hover:bg-opacity-20 transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/mavericksedge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg text-maverick-orange hover:bg-opacity-20 transition duration-300"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}