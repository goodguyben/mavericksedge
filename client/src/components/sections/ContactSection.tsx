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
import { Button as ShadcnButton } from "@/components/ui/button";
import { Button } from "@/components/ui/custom-button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface ContactSectionProps {
  fullPage?: boolean;
}

type ContactFormValues = z.infer<typeof contactSubmissionSchema>;

export default function ContactSection({ fullPage = false }: ContactSectionProps) {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (values: ContactFormValues) =>
      apiRequest("POST", "/api/contact", values),
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: "Success!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: Error) => {
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

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
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
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-maverick-orange" />
                </div>
                <div>
                  <p className="text-sm text-[#AAAAAA]">Email</p>
                  <p>info@mavericksedge.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-maverick-orange" />
                </div>
                <div>
                  <p className="text-sm text-[#AAAAAA]">Address</p>
                  <p>123 Innovation Drive, Suite 200</p>
                  <p>Vancouver, BC, Canada</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg text-maverick-orange hover:bg-opacity-20 transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg text-maverick-orange hover:bg-opacity-20 transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg text-maverick-orange hover:bg-opacity-20 transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg text-maverick-orange hover:bg-opacity-20 transition duration-300"
                aria-label="Twitter"
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
