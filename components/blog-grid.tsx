import { useState } from "react";
import { motion } from "motion/react";
import { BlogPostCard } from "@/components/blog-post-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { blogPosts } from "@/const";

export function BlogGrid() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full py-12 md:py-24 bg-[#F5F5F5] dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 bg-white dark:bg-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-2 dark:text-[#F5F5F5]">
              No articles found
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Try adjusting your search query
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
