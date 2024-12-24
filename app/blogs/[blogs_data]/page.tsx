"use client"

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import {Montserrat} from 'next/font/google'

const Mont = Montserrat({
  subsets:["latin"],
  weight:["900"]
});

type BlogDetails = {
  [key: string]: {
    title: string;
    description: string;
    image: string;
  };
};

type Comment = {
  id: number;
  text: string;
  createdAt: Date;
};

const blogDetails: BlogDetails = {
  blog1: {
    title: "Introduction to PHP",
    description: "Learn the basics of PHP, a powerful scripting language widely used for web development.PHP is a versatile scripting language widely used for web development, enabling developers to create dynamic and interactive websites. Known for its simplicity and compatibility with various databases, PHP powers many popular platforms and frameworks, making it an essential tool for building scalable and efficient web applications.",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  blog2: {
    title: "Meta: Shaping the Future of Social Media",
    description: "Meta is revolutionizing the digital landscape by focusing on immersive technologies like augmented and virtual reality, fostering deeper connections and transforming how we engage with content, communities, and commerce. Through innovative platforms and tools, Meta aims to build a seamless digital ecosystem that bridges the gap between the physical and virtual worlds, shaping a future where communication and collaboration know no boundaries.",
    image: "https://images.unsplash.com/photo-1665799871677-f1fd17338b43?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  blog3: {
    title: "What is Cloud Computing?",
    description:
      "Cloud computing is a revolutionary technology that allows individuals and businesses to access computing resources, such as servers, storage, databases, networking, software, and analytics, over the internet. Instead of relying solely on local hardware or on-premises data centers, cloud computing provides a flexible and scalable approach to managing IT infrastructure and applications. The cloud operates on a pay-as-you-go model, enabling users to only pay for the resources they use, much like utility services such as electricity or water. This approach eliminates the need for costly hardware investments and maintenance, allowing businesses to focus on innovation and growth.",
    image: "https://images.unsplash.com/photo-1667984390527-850f63192709?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  blog4: {
    title: "The Importance of Programming",
    description: "Discover why programming is a vital skill in the modern world, empowering innovation and problem-solving.Programming is a fundamental skill in today’s digital age, driving innovation and solving complex problems across industries. It empowers individuals to create technology, automate tasks, analyze data, and develop solutions that improve efficiency and enhance everyday life. As a cornerstone of the modern world, programming fosters creativity, critical thinking, and adaptability in an ever-evolving technological landscape.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  blog5: {
    title: "The AI Era: Transforming Our World",
    description: "Explore how artificial intelligence is revolutionizing industries and shaping the future.Artificial intelligence is at the heart of the modern era, transforming industries by automating processes, enhancing decision-making, and driving innovation. From personalized recommendations to advanced robotics, AI is reshaping how we work, live, and interact, making technology smarter, more efficient, and deeply integrated into our daily lives.",
    image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  blog6: {
    title: "What is Blockchain?",
    description:
      "Blockchain is a decentralized, secure digital ledger technology that records transactions across a network. It enables transparency, immutability, and trust in various applications, including cryptocurrency, supply chain, and finance.Blockchain is a decentralized, secure digital ledger that records transactions across multiple computers. It ensures transparency, immutability, and trust, making it ideal for applications like cryptocurrency, supply chain management, and secure data sharing.",
    image: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export default function Blogs() {
  const params = useParams();
  const blogsData = Array.isArray(params?.blogs_data) ? params.blogs_data[0] : params?.blogs_data;
  const blog = blogsData ? blogDetails[blogsData.toLowerCase()] : null;

  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (!blog) {
    return <h1 className="px-5 font-medium text-3xl">Blog not found.</h1>;
  }

  const handleAddComment = () => {
    if (!comment.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const newComment: Comment = { id: Date.now(), text: comment, createdAt: new Date() };
      setComments([...comments, newComment]);
      setComment("");
    } catch (err) {
      setError("Failed to add comment.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <div className="text-black mb-5">
          <Link href="/blogs" className="flex gap-1 text-[10px] items-center bg-gray-200 w-20 px-2 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <h1>Go Back</h1>
          </Link>
        </div>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[300px] md:h-[500px] lg:h-[800px] object-cover rounded-lg mb-6"
        />
        <h1 className={`${Mont.className} text-2xl md:text-4xl font-bold text-gray-900 mb-4`}>{blog.title}</h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">{blog.description}</p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Comments</h2>
          <div className="space-y-4">
            {comments.map((c) => (
              <div key={c.id} className="p-4 bg-gray-100 rounded-lg shadow flex justify-between items-start">
                <div>
                  <p className="text-gray-800">{c.text}</p>
                  <span className="text-sm text-gray-500">
                    {new Date(c.createdAt).toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteComment(c.id)}
                  className="text-red-500 hover:text-white hover:bg-red-500 p-2 rounded-md shadow-md shadow-red-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

                </button>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              onClick={handleAddComment}
              disabled={loading}
              className="mt-3 px-4 py-2 bg-indigo-500 font-semibold text-white rounded-lg shadow hover:bg-indigo-600 disabled:bg-gray-400"
            >
              {loading ? "Posting..." : "Post Comment"}
            </button>
          </div>

          {error && <p className="text-red-500 mt-3">{error}</p>}
        </section>
      </div>
    </>
  );
}
