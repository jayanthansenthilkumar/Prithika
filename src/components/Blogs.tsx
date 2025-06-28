
import { Calendar, Clock, Eye, Heart, Share2, ArrowRight } from "lucide-react";

const Blogs = () => {
  const blogs = [
    {
      title: "Building Modern Web Applications with React & TypeScript",
      excerpt: "Learn how to create scalable and maintainable React applications using modern best practices, TypeScript integration, and advanced patterns.",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      views: "2.1k",
      likes: "89",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      category: "React",
      featured: true
    },
    {
      title: "The Future of Web Development: AI Integration",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development, including AI-powered tools and automation.",
      date: "Nov 28, 2023",
      readTime: "12 min read",
      views: "3.5k",
      likes: "156",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      category: "AI & Tech",
      featured: true
    },
    {
      title: "CSS Grid vs Flexbox: Complete Developer Guide",
      excerpt: "Understanding when and how to use CSS Grid and Flexbox for modern layouts with practical examples and real-world applications.",
      date: "Nov 10, 2023",
      readTime: "6 min read",
      views: "1.8k",
      likes: "67",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      category: "CSS",
      featured: false
    },
    {
      title: "Full-Stack Development with Node.js and MongoDB",
      excerpt: "Master backend development with Node.js, Express, and MongoDB. Build robust APIs and handle data efficiently.",
      date: "Oct 25, 2023",
      readTime: "15 min read",
      views: "2.9k",
      likes: "134",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      category: "Backend",
      featured: false
    },
    {
      title: "Advanced JavaScript Patterns Every Developer Should Know",
      excerpt: "Dive deep into advanced JavaScript concepts, design patterns, and modern ES6+ features that will elevate your coding skills.",
      date: "Oct 12, 2023",
      readTime: "10 min read",
      views: "4.2k",
      likes: "203",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      category: "JavaScript",
      featured: false
    },
    {
      title: "Responsive Design Principles for Modern Web Apps",
      excerpt: "Learn the essential principles of responsive design and how to create applications that work beautifully on all devices.",
      date: "Sep 30, 2023",
      readTime: "7 min read",
      views: "1.6k",
      likes: "45",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Design",
      featured: false
    }
  ];

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const regularBlogs = blogs.filter(blog => !blog.featured);

  return (
    <section id="blogs" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold gradient-text mb-6">Latest Blogs</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology trends, 
            and the ever-evolving world of software engineering
          </p>
        </div>
        
        {/* Featured Blogs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
            Featured Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredBlogs.map((blog, index) => (
              <article key={index} className="gradient-border card-hover group">
                <div className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                        {blog.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {blog.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye size={16} />
                          <span>{blog.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart size={16} />
                          <span>{blog.likes}</span>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group">
                        Read More 
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Regular Blogs */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
            Recent Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog, index) => (
              <article key={index} className="gradient-border card-hover group">
                <div className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full">
                        {blog.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="p-2 bg-black/70 text-white rounded-full hover:bg-black/90 transition-colors duration-200">
                        <Share2 size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye size={14} />
                          <span>{blog.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart size={14} />
                          <span>{blog.likes}</span>
                        </div>
                      </div>
                      <button className="text-xs text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20">
          <div className="gradient-border card-hover">
            <div className="bg-gray-800/50 p-12 rounded-xl text-center">
              <h3 className="text-3xl font-bold gradient-text mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to my newsletter to get the latest articles, tutorials, and insights 
                delivered straight to your inbox. No spam, just quality content!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
