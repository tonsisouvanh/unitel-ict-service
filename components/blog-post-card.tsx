import { CalendarDays, ChevronRight, MessageSquare, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface BlogPostCardProps {
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
  };
  featured?: boolean;
}

export function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  return (
    <Card
      className={`overflow-hidden py-0 border-0 shadow-lg ${
        featured ? "lg:flex" : ""
      }`}
    >
      <div className={`relative ${featured ? "lg:w-1/2" : ""}`}>
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={"/assets/images/blog-card-placeholder.jpg"}
            width={500}
            height={500}
            alt={post.title}
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <Badge
          className="absolute text-white left-4 top-4 bg-color-1 hover:bg-color-1/90"
          variant="secondary"
        >
          {post.category}
        </Badge>
      </div>
      <div className={`flex flex-col ${featured ? "lg:w-1/2" : ""}`}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 text-sm text-zinc-500 mb-3">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4 text-color-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4 text-color-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4 text-color-1" />
              <span>{post.comments}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-color-2 mb-2 line-clamp-2 hover:text-color-1 transition-colors duration-200">
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </h3>
          <p className="text-zinc-500 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="text-sm text-zinc-500">{post.readTime} read</div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Link href={`/blog/${post.id}`}>
            <Button
              variant="outline"
              className="border-color-2 text-color-2 hover:bg-color-2 hover:text-white"
            >
              Read More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
