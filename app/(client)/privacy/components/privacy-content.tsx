"use client";

import type React from "react";

import { motion } from "motion/react";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  Shield,
  Eye,
  Database,
  Cookie,
  Globe,
} from "lucide-react";
import Link from "next/link";

interface PrivacySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export function PrivacyContent() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "information-collection"
  );

  const toggleSection = (sectionId: string) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

  // Last updated date
  const lastUpdated = "May 22, 2025";

  const privacySections: PrivacySection[] = [
    {
      id: "information-collection",
      title: "Information Collection",
      icon: <Database className="h-6 w-6 text-[#F97316]" />,
      content: (
        <div className="space-y-4">
          <p>
            We collect several different types of information for various
            purposes to provide and improve our services to you. The types of
            information we may collect include:
          </p>
          <h4 className="text-lg font-semibold text-color-1 dark:text-[#F5F5F5]">
            Personal Data
          </h4>
          <p>
            While using our services, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you. This may include, but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
          </ul>

          <h4 className="text-lg font-semibold text-color-1 dark:text-[#F5F5F5]">
            Usage Data
          </h4>
          <p>
            We may also collect information on how our services are accessed and
            used. This Usage Data may include information such as your
            computer's Internet Protocol address (e.g., IP address), browser
            type, browser version, the pages of our services that you visit, the
            time and date of your visit, the time spent on those pages, unique
            device identifiers, and other diagnostic data.
          </p>
        </div>
      ),
    },
    {
      id: "information-use",
      title: "Use of Information",
      icon: <Eye className="h-6 w-6 text-[#F97316]" />,
      content: (
        <div className="space-y-4">
          <p>TechNova uses the collected data for various purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>
              To allow you to participate in interactive features of our
              services when you choose to do so
            </li>
            <li>To provide customer support</li>
            <li>
              To gather analysis or valuable information so that we can improve
              our services
            </li>
            <li>To monitor the usage of our services</li>
            <li>To detect, prevent and address technical issues</li>
            <li>
              To provide you with news, special offers and general information
              about other goods, services and events which we offer
            </li>
          </ul>
          <p>
            We will never sell your personal information to third parties. Any
            information shared with third-party service providers is done so
            solely for the purpose of facilitating our services to you, and
            these providers are contractually obligated to maintain the
            confidentiality and security of your information.
          </p>
        </div>
      ),
    },
    {
      id: "cookies",
      title: "Cookies and Tracking",
      icon: <Cookie className="h-6 w-6 text-[#F97316]" />,
      content: (
        <div className="space-y-4">
          <p>
            We use cookies and similar tracking technologies to track activity
            on our services and hold certain information.
          </p>
          <p>
            Cookies are files with a small amount of data which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            website and stored on your device. Tracking technologies also used
            are beacons, tags, and scripts to collect and track information and
            to improve and analyze our services.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent.
          </p>
          <h4 className="text-lg font-semibold text-color-1 dark:text-[#F5F5F5]">
            Types of Cookies We Use
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium">Session Cookies:</span> We use
              Session Cookies to operate our services.
            </li>
            <li>
              <span className="font-medium">Preference Cookies:</span> We use
              Preference Cookies to remember your preferences and various
              settings.
            </li>
            <li>
              <span className="font-medium">Security Cookies:</span> We use
              Security Cookies for security purposes.
            </li>
            <li>
              <span className="font-medium">Analytics Cookies:</span> We use
              analytics cookies to track and measure usage of the site so we can
              continue to produce engaging content.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <Shield className="h-6 w-6 text-[#F97316]" />,
      content: (
        <div className="space-y-4">
          <p>
            The security of your data is important to us, but remember that no
            method of transmission over the Internet, or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your personal data, we cannot guarantee
            its absolute security.
          </p>
          <p>Our security measures include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of data both in transit and at rest</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Access controls and authentication procedures</li>
            <li>Regular security training for all staff</li>
            <li>Physical security measures for our offices and data centers</li>
            <li>Incident response procedures</li>
          </ul>
          <p>
            We regularly review and update our security practices to ensure we
            are using the most current and effective methods to protect your
            data.
          </p>
        </div>
      ),
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      icon: <Globe className="h-6 w-6 text-[#F97316]" />,
      content: (
        <div className="space-y-4">
          <p>
            Our services may contain links to other sites that are not operated
            by us. If you click on a third-party link, you will be directed to
            that third party's site. We strongly advise you to review the
            Privacy Policy of every site you visit.
          </p>
          <p>
            We have no control over and assume no responsibility for the
            content, privacy policies, or practices of any third-party sites or
            services.
          </p>
          <h4 className="text-lg font-semibold text-color-1 dark:text-[#F5F5F5]">
            Third-Party Service Providers
          </h4>
          <p>
            We may employ third-party companies and individuals to facilitate
            our services ("Service Providers"), to provide services on our
            behalf, to perform service-related services, or to assist us in
            analyzing how our services are used.
          </p>
          <p>
            These third parties have access to your Personal Data only to
            perform these tasks on our behalf and are obligated not to disclose
            or use it for any other purpose. Our third-party service providers
            include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analytics providers (e.g., Google Analytics)</li>
            <li>Customer relationship management systems</li>
            <li>Email service providers</li>
            <li>Hosting and cloud infrastructure providers</li>
            <li>Payment processors</li>
          </ul>
        </div>
      ),
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      icon: <Shield className="h-6 w-6 text-[#F97316]" />,
      content: (
        <div className="space-y-4">
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information. These may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The right to access the personal information we have about you
            </li>
            <li>
              The right to request correction of inaccurate personal information
            </li>
            <li>The right to request deletion of your personal information</li>
            <li>
              The right to object to processing of your personal information
            </li>
            <li>
              The right to request restriction of processing your personal
              information
            </li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the contact
            information provided at the end of this Privacy Policy. We will
            respond to your request within a reasonable timeframe.
          </p>
          <h4 className="text-lg font-semibold text-color-1 dark:text-[#F5F5F5]">
            California Privacy Rights
          </h4>
          <p>
            If you are a California resident, you have specific rights regarding
            your personal information under the California Consumer Privacy Act
            (CCPA). For more information about your California privacy rights,
            please contact us.
          </p>
          <h4 className="text-lg font-semibold text-color-1 dark:text-[#F5F5F5]">
            European Privacy Rights
          </h4>
          <p>
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights under the General Data Protection
            Regulation (GDPR). We aim to take reasonable steps to allow you to
            correct, amend, delete, or limit the use of your Personal Data.
          </p>
        </div>
      ),
    },
    {
      id: "policy-changes",
      title: "Changes to This Policy",
      icon: <Calendar className="h-6 w-6 text-[#F97316]" />,
      content: (
        <div className="space-y-4">
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
          <p>
            For significant changes, we will make reasonable efforts to provide
            a more prominent notice, such as an email notification or a
            statement on our homepage.
          </p>
          <p>
            Your continued use of our services after any changes to this Privacy
            Policy constitutes your acceptance of the changes.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-6 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-color-1 dark:text-[#F5F5F5]" />
              <h2 className="text-xl font-bold text-color-1 dark:text-[#F5F5F5]">
                Privacy Policy Overview
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At TechNova, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services. Please read this
              privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the site.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-color-1 dark:text-[#F5F5F5]">
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-2">
                {privacySections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setExpandedSection(section.id);
                      document
                        .getElementById(section.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 transition-colors duration-200"
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {privacySections.map((section) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 text-left"
                  >
                    <div className="flex items-center gap-3">
                      {section.icon}
                      <h3 className="text-lg font-semibold text-color-1 dark:text-[#F5F5F5]">
                        {section.title}
                      </h3>
                    </div>
                    {expandedSection === section.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === section.id ? "auto" : 0,
                      opacity: expandedSection === section.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                      {section.content}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold text-color-1 dark:text-[#F5F5F5] mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <span className="font-medium">By email:</span>{" "}
                privacy@technova.com
              </li>
              <li>
                <span className="font-medium">By phone:</span> +1 (555) 123-4567
              </li>
              <li>
                <span className="font-medium">By mail:</span> 123 Innovation
                Street, Tech City, TC 12345
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.
              </p>
              <div className="mt-4">
                <Link
                  href="/"
                  className="text-[#F97316] hover:text-color-1 dark:hover:text-[#F5F5F5] transition-colors duration-200"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
