"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAnimation } from "@/lib/provider/animation-provider";
import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const SendMessage = () => {
  const { ref, inView } = useAnimation("contact");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateMailtoHref = () => {
    const recipient = "unitellao@unitel.com.la";
    const subject = encodeURIComponent(
      `Message from ${formData.name || "Anonymous"} (Company: ${
        formData.company || "N/A"
      })`
    );
    const body = encodeURIComponent(
      `Hello,\n\n` +
        `You have received a message from:\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company}\n\n` +
        `Message:\n${formData.message}\n`
    );
    return `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6 }}
        className="bg-color-1/65 backdrop-blur-sm rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-[#F5F5F5] mb-6">
          Send Us a Message
        </h3>
        <div className="space-y-6">
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
          <a href={generateMailtoHref()}>
            <Button
              type="button"
              className="w-full bg-white text-color-2 hover:bg-white/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-color-1/20"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SendMessage;
