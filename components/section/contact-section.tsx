"use client";

import { useAnimation } from "@/lib/provider/animation-provider";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import SendMessage from "./send-message";

export function ContactSection() {
  const { ref, inView } = useAnimation("contact");

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
        "Nongbone Road, Naxay Village, Saysettha District, Vientiane Capital, Laos",
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
                  <span className="text-[#F5F5F5]">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F5F5F5]/80">Saturday</span>
                  <span className="text-[#F5F5F5]">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F5F5F5]/80">Sunday</span>
                  <span className="text-[#F5F5F5]">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Send mail */}
          <SendMessage />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
