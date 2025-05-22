import {
  CalendarDays,
  ChevronLeft,
  MessageSquare,
  Share2,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

interface BlogPostDetailProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    image: string;
    readTime: string;
    comments: number;
    content: string;
  };
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-color-1 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 code-pattern"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <Badge
              className="bg-[#F97316] hover:bg-[#F97316]/90"
              variant="secondary"
            >
              {post.category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter text-[#F5F5F5] sm:text-4xl md:text-5xl max-w-[900px]">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#F5F5F5]/80">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4 text-[#F97316]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4 text-[#F97316]" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4 text-[#F97316]" />
                <span>{post.comments} comments</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="w-full py-12 md:py-24 bg-[#F5F5F5] dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-between gap-4"
            >
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="border-color-1 text-color-1 hover:bg-color-1 hover:text-white"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-color-1 text-color-1 hover:bg-color-1 hover:text-white"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
