import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Best practices and architectural patterns for creating maintainable React applications that scale with your team and user base.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "React",
    },
    {
      title: "Introduction to Machine Learning with Python",
      excerpt:
        "A beginner-friendly guide to getting started with machine learning, covering fundamental concepts and practical implementations.",
      date: "March 8, 2024",
      readTime: "12 min read",
      category: "AI/ML",
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt:
        "Understanding the differences between CSS Grid and Flexbox, and learning when to use each for optimal layout design.",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "CSS",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development and technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden card-shadow border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-primary"></div>
              <div className="p-6 space-y-4">
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary/10"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
