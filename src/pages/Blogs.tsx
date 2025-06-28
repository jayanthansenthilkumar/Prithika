
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, Tag, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "React", "JavaScript", "CSS", "Web Development", "Tutorial"];

  const blogs = [
    {
      id: 1,
      title: "Building Modern Web Applications with React",
      excerpt: "Learn how to create scalable and maintainable React applications using modern best practices, hooks, and state management solutions.",
      content: "In this comprehensive guide, we'll explore the fundamentals of building modern React applications...",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      tags: ["React", "JavaScript", "Frontend"]
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development in the next decade.",
      content: "Web development is constantly evolving, with new frameworks, tools, and methodologies emerging...",
      date: "Nov 28, 2023",
      readTime: "12 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["Trends", "Future", "Technology"]
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: Complete Guide",
      excerpt: "Understanding when and how to use CSS Grid and Flexbox for modern layouts with practical examples and use cases.",
      content: "CSS Grid and Flexbox are powerful layout systems that revolutionized how we build web layouts...",
      date: "Nov 10, 2023",
      readTime: "6 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      tags: ["CSS", "Layout", "Grid", "Flexbox"]
    },
    {
      id: 4,
      title: "JavaScript ES2024: New Features Overview",
      excerpt: "Discover the latest JavaScript features and improvements introduced in ES2024 with practical examples.",
      content: "JavaScript continues to evolve with new features that make development more efficient...",
      date: "Oct 25, 2023",
      readTime: "10 min read",
      category: "JavaScript",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=400&fit=crop",
      tags: ["JavaScript", "ES2024", "Features"]
    },
    {
      id: 5,
      title: "Building Accessible Web Applications",
      excerpt: "A comprehensive guide to web accessibility, including WCAG guidelines, testing tools, and implementation strategies.",
      content: "Web accessibility is crucial for creating inclusive digital experiences...",
      date: "Oct 12, 2023",
      readTime: "15 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
      tags: ["Accessibility", "WCAG", "Inclusive Design"]
    },
    {
      id: 6,
      title: "React Performance Optimization Techniques",
      excerpt: "Advanced techniques for optimizing React applications including memo, useMemo, useCallback, and code splitting.",
      content: "Performance optimization is crucial for creating smooth user experiences...",
      date: "Sep 28, 2023",
      readTime: "14 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "Performance", "Optimization"]
    }
  ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thoughts, tutorials, and insights about web development, technology trends, 
              and my journey as a developer.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your search criteria.</p>
            </div>
          )}
          
          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter to get the latest articles and tutorials 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white text-gray-900"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-2 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blogs;
