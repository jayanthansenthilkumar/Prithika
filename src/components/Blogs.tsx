
import { Calendar, Clock } from "lucide-react";

const Blogs = () => {
  const blogs = [
    {
      title: "Building Modern Web Applications with React",
      excerpt: "Learn how to create scalable and maintainable React applications using modern best practices.",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
      date: "Nov 28, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    },
    {
      title: "CSS Grid vs Flexbox: Complete Guide",
      excerpt: "Understanding when and how to use CSS Grid and Flexbox for modern layouts.",
      date: "Nov 10, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Blogs</h2>
          <p className="text-xl text-gray-300">Thoughts, tutorials, and insights about web development</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article key={index} className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{blog.title}</h3>
                <p className="text-gray-300 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
