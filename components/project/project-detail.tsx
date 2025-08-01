import { ProjectNotFound } from "@/app/(client)/projects/components/project-not-found";
import {
  getNextProject,
  getPreviousProject,
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/projects";
import { CalendarDays, Clock, Quote, User } from "lucide-react";
import Image from "next/image";
import { Breadcrumb } from "../breadcrumb";
import { ProjectGallery } from "./project-gallery";
import { ProjectLinks } from "./project-links";
import { ProjectNavigation } from "./project-navigation";
import { ProjectTechnologies } from "./project-technologies";
import { RelatedProjects } from "./related-projects";

type Props = {
  slug: string;
};

export default function ProjectDetail({ slug }: Props) {
  const project = getProjectBySlug(slug);
  if (!project) {
    return <ProjectNotFound />;
  }

  const previousProject = getPreviousProject("e-commerce-platform");
  const nextProject = getNextProject("e-commerce-platform");
  const relatedProjects = getRelatedProjects("e-commerce-platform");

  return (
    <main className="relative flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-color-1 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 code-pattern">
          <Image
            src={project.images[0].src || "/assets/placeholder.svg"}
            alt={project.images[0].alt}
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Breadcrumb />
            <div className="inline-block rounded-lg bg-[#F5F5F5]/60 px-3 py-1 text-sm text-">
              {project.category}
            </div>
            <h1 className="text-3xl text-shadow-sm font-bold tracking-tighter text-[#F5F5F5] sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-[900px] text-shadow-sm text-[#F5F5F5]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {project.subtitle}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Project Details */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-lgd border">
                <Image
                  width={500}
                  height={500}
                  src={project.images[0].src || "/placeholder.svg"}
                  alt={project.images[0].alt}
                  className="w-full max-md:h-[300px] h-[500px] object-contain"
                />
              </div>

              {/* Project Description */}
              <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
                <h2 className="text-2xl font-bold text-color-1 dark:text-[#F5F5F5] mb-4">
                  Project Overview
                </h2>
                <p>{project.description}</p>

                <h3 className="text-xl font-bold text-color-1 dark:text-[#F5F5F5] mt-8 mb-4">
                  The Challenge
                </h3>
                <p>{project.challenge}</p>

                <h3 className="text-xl font-bold text-color-1 dark:text-[#F5F5F5] mt-8 mb-4">
                  Our Solution
                </h3>
                <p>{project.solution}</p>

                <h3 className="text-xl font-bold text-color-1 dark:text-[#F5F5F5] mt-8 mb-4">
                  The Outcome
                </h3>
                <p>{project.outcome}</p>
              </div>

              {/* Project Gallery */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-color-1 dark:text-[#F5F5F5] mb-6">
                  Project Gallery
                </h2>
                <ProjectGallery
                  images={project.images}
                  videos={project.videos}
                />
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="mb-12 bg-gray-50 hidden dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <Quote className="h-8 w-8 text-[#F97316] mb-4 opacity-50" />
                  <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="rounded-full bg-color-1/10 p-1 mr-4">
                      <div className="h-12 w-12 rounded-full bg-color-1/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-color-1 dark:text-[#F5F5F5]">
                          {project.testimonial.author.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-color-1 dark:text-[#F5F5F5]">
                        {project.testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {project.testimonial.position},{" "}
                        {project.testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            {/* <div className="lg:col-span-1">
              <div className="bg-gray-50 border rounded-lg p-6 shadow-md sticky top-24">
                <h3 className="text-xl font-bold text-color-1 dark:text-[#F5F5F5] mb-6">
                  Project Details
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-[#F97316] mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">
                        Client
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CalendarDays className="h-5 w-5 text-[#F97316] mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">
                        Release year
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.date}
                      </p>
                    </div>
                  </div>

                  <div className="flexd hidden items-start">
                    <Clock className="h-5 w-5 text-[#F97316] mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">
                        Duration
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.duration}
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-color-1 dark:text-[#F5F5F5] mb-4">
                  Technologies
                </h3>
                <div className="mb-8">
                  <ProjectTechnologies technologies={project.technologies} />
                </div>

                <h3 className="text-xl font-bold text-color-1 dark:text-[#F5F5F5] mb-4">
                  Project Links
                </h3>
                <ProjectLinks links={project.links} />
              </div>
            </div> */}
            <div className="lg:col-span-1">
              <div className="bg-white/60 dark:bg-white/5 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 sticky top-24">
                <h3 className="text-xl font-bold text-color-1 dark:text-[#F5F5F5] mb-6">
                  Project Details
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-[#F97316] mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">
                        Client
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CalendarDays className="h-5 w-5 text-[#F97316] mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">
                        Release year
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#F97316] mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">
                        Duration
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.duration}
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-color-1 dark:text-[#F5F5F5] mb-4">
                  Technologies
                </h3>
                <div className="mb-8">
                  <ProjectTechnologies technologies={project.technologies} />
                </div>

                <h3 className="text-xl font-bold text-color-1 dark:text-[#F5F5F5] mb-4">
                  Project Links
                </h3>
                <ProjectLinks links={project.links} />
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <ProjectNavigation
            previousProject={previousProject}
            nextProject={nextProject}
          />

          {/* Related Projects */}
          <RelatedProjects projects={relatedProjects} />
        </div>
      </section>
      {/* <div className="absolute z-[-1] h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div> */}
      <div className="absolute z-[-1] h-full w-full bottom-0 opacity-10">
        <Image
          src={"/assets/images/wavetech.png"}
          alt=""
          width={500}
          height={500}
          sizes="100vw"
          className="object-contain w-full h-full"
        />
      </div>
    </main>
  );
}
