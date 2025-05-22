"use client";
import type React from "react";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useAnimation } from "@/lib/provider/animation-provider";

export function ContactSection() {
  const { ref, inView } = useAnimation("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Email",
      details: "unitellao@unitel.com.la",
      link: "mailto:unitellao@unitel.com.la",
    },
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: "Phone",
      details: "+8562099856868",
      link: "tel:+021999666",
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Office",
      details:
        "Nongbone Road, Phonxay Village, Saysettha District, Vientiane Capital, Laos",
      link: "https://maps.app.goo.gl/D49pJLot3z9YW6on8",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 bg-no-repeat bg-cover relative overflow-hidden bg-[url(/assets/images/contact-bg.jpg)]"
    >
      <div className="absolute inset-0 bg-color-2/40"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-[#F5F5F5]/10 px-3 py-1 text-sm text-[#F5F5F5]">
            Contact Us
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-[#F5F5F5] sm:text-5xl">
            Let's Build Something Amazing Together
          </h2>
          <p className="max-w-[900px] text-[#F5F5F5]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ready to start your project? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-color-1/65 backdrop-blur-sm rounded-lg p-6 space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="rounded-full bg-[#F5F5F5]/10 p-3">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F5F5F5]">
                      {item.title}
                    </h3>
                    <p className="text-[#F5F5F5]/80">{item.details}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-color-1/65 backdrop-blur-sm rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">
                Our Office Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#F5F5F5]/80">Monday - Friday</span>
                  <span className="text-[#F5F5F5]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F5F5F5]/80">Saturday</span>
                  <span className="text-[#F5F5F5]">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F5F5F5]/80">Sunday</span>
                  <span className="text-[#F5F5F5]">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="bg-color-1/65 backdrop-blur-sm rounded-lg p-6"
          >
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-6">
              Send Us a Message
            </h3>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg bg-green-500/20 p-6 text-center"
              >
                <h4 className="text-lg font-bold text-[#F5F5F5] mb-2">
                  Thank You!
                </h4>
                <p className="text-[#F5F5F5]/80">
                  Your message has been received. We'll get back to you as soon
                  as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#F5F5F5]">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#F5F5F5]/10 border-[#F5F5F5]/20 text-[#F5F5F5] placeholder:text-[#F5F5F5]/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#F5F5F5]">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#F5F5F5]/10 border-[#F5F5F5]/20 text-[#F5F5F5] placeholder:text-[#F5F5F5]/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[#F5F5F5]">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-[#F5F5F5]/10 border-[#F5F5F5]/20 text-[#F5F5F5] placeholder:text-[#F5F5F5]/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#F5F5F5]">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px] bg-[#F5F5F5]/10 border-[#F5F5F5]/20 text-[#F5F5F5] placeholder:text-[#F5F5F5]/50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-color-2 hover:bg-white/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-color-1/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
