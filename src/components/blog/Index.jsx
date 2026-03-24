import React from "react";

import { FiCalendar, FiUser } from "react-icons/fi";
import Container from "../common/Container";

const BlogComp = () => {
  const blogs = [
    {
      title: "আজকের সবজির বাজার দর কেন বাড়ছে?",
      desc: "সাম্প্রতিক সময়ে সবজির দামের উত্থান-পতনের কারণ এবং এর পেছনের অর্থনৈতিক বিশ্লেষণ।",
      date: "১২ মার্চ ২০২৫",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e"
    },
    {
      title: "কৃষকদের জন্য গুরুত্বপূর্ণ ৫টি টিপস",
      desc: "ফসলের উৎপাদন বাড়াতে এবং লাভ বৃদ্ধি করতে কিছু কার্যকরী টিপস।",
      date: "১০ মার্চ ২০২৫",
      author: "Expert",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      title: "ধানের বাজার বিশ্লেষণ ২০২৫",
      desc: "ধানের বর্তমান বাজার পরিস্থিতি এবং ভবিষ্যৎ সম্ভাবনা নিয়ে বিস্তারিত আলোচনা।",
      date: "৮ মার্চ ২০২৫",
      author: "Market Analyst",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc"
    },
    {
      title: "ফলমূলের দাম কেন কমছে?",
      desc: "বাজারে ফলমূলের দামের পরিবর্তনের কারণ এবং এর প্রভাব।",
      date: "৫ মার্চ ২০২৫",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "মাছের বাজারে নতুন ট্রেন্ড",
      desc: "বর্তমান মাছের বাজারে চাহিদা ও সরবরাহের নতুন পরিবর্তন।",
      date: "২ মার্চ ২০২৫",
      author: "Expert",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
    },
    {
      title: "কিভাবে সঠিক দামে পণ্য বিক্রি করবেন",
      desc: "ব্যবসায়ীদের জন্য প্রাইসিং স্ট্রাটেজি এবং বাজার বিশ্লেষণ।",
      date: "১ মার্চ ২০২৫",
      author: "Business Guide",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
    }
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-br from-[#f8fffe] to-[#e8f5ef]">
      <Container>
        <div className="px-4 sm:px-6 md:px-0">

          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="heading-one text-[#253d4e] mb-4">
              ব্লগ ও আর্টিকেল
            </h1>
            <p className="para-normal text-gray-600 max-w-2xl mx-auto">
              বাজার দর, কৃষি এবং ব্যবসা সংক্রান্ত গুরুত্বপূর্ণ তথ্য ও বিশ্লেষণ
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#e8f5ef] overflow-hidden hover:shadow-lg hover:shadow-[#3bb77e]/10 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <FiCalendar /> {blog.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <FiUser /> {blog.author}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="heading-five text-[#253d4e] mb-2 group-hover:text-[#3bb77e] transition-colors">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="para-normal text-gray-600 mb-4">
                    {blog.desc}
                  </p>

                  {/* Read More */}
                  <button className="text-[#3bb77e] para-medium font-semibold hover:underline">
                    বিস্তারিত পড়ুন →
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
};

export default BlogComp;