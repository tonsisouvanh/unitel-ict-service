import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-color-2/10 px-3 py-1 text-sm text-color-2">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-color-2 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <Card className="border-zinc-200 shadow-sm transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <Quote className="h-8 w-8 text-[#F97316]" />
                <p className="text-zinc-500">
                  "Their team delivered our project on time and within budget.
                  The quality of their work exceeded our expectations."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-color-2/10 p-1">
                    <div className="h-10 w-10 rounded-full bg-color-2/20" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-color-2">
                      Sarah Johnson
                    </h4>
                    <p className="text-xs text-zinc-500">CTO, TechStart Inc.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 shadow-sm transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <Quote className="h-8 w-8 text-[#F97316]" />
                <p className="text-zinc-500">
                  "We've been working with them for over 3 years now. They've
                  become an integral part of our development team."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-color-2/10 p-1">
                    <div className="h-10 w-10 rounded-full bg-color-2/20" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-color-2">
                      Michael Chen
                    </h4>
                    <p className="text-xs text-zinc-500">
                      Product Manager, GlobalTech
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 shadow-sm transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <Quote className="h-8 w-8 text-[#F97316]" />
                <p className="text-zinc-500">
                  "Their expertise in modern web technologies helped us
                  transform our outdated platform into a cutting-edge solution."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-color-2/10 p-1">
                    <div className="h-10 w-10 rounded-full bg-color-2/20" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-color-2">
                      Emily Rodriguez
                    </h4>
                    <p className="text-xs text-zinc-500">CEO, InnovateCorp</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
