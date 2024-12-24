import Link from "next/link";
import {Montserrat} from 'next/font/google'

const Mont = Montserrat({
  subsets:["latin"],
  weight:["800"]
});


export const blogData = [
  {
    name: "blog1",
    title: "Introduction to PHP",
    description: "Learn the basics of PHP, a powerful scripting language widely used for web development.",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "blog2",
    title: "Meta: Shaping the Future of Social Media",
    description: "Dive into Meta's vision for the future, redefining the way we connect and interact online.",
    image: "https://images.unsplash.com/photo-1665799871677-f1fd17338b43?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "blog3",
    title: "What is Cloud Computing?",
    description:
      "Cloud computing is a revolutionary technology that allows individuals and businesses to access computing resources",
    image: "https://images.unsplash.com/photo-1667984390527-850f63192709?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "blog4",
    title: "The Importance of Programming",
    description: "Discover why programming is a vital skill in the modern world, empowering innovation and problem-solving.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "blog5",
    title: "The AI Era: Transforming Our World",
    description: "Explore how artificial intelligence is revolutionizing industries and shaping the future.",
    image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "blog6",
    title: "What is Blockchain?",
    description:
      "Blockchain is a decentralized, secure digital ledger technology that records transactions across a network.",
    image: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Blogs = () => {
  return (
    <section className="text-gray-600 bg-white body-font">
      <div className="container px-5 py-11 mx-auto">
      <div className='text-white mb-5 flex gap-3 items-center'>
        <Link href="/" className="hover:bg-indigo-500 hover:text-white flex gap-1 text-[10px] items-center bg-black w-8 px-2 py-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</Link>
      <h1 className={`${Mont.className} text-black font-bold text-4xl`}>Blogs</h1>
    </div>
        <div className="flex flex-wrap -m-4">
          {blogData.map((blog) => (
            <div key={blog.name} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={blog.image}
                  alt={blog.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{blog.title}</h1>
                  <p className="leading-relaxed mb-3">{blog.description}</p>
                  <div className="flex items-center flex-wrap">
                    <Link
                      href={`/blogs/${blog.name.toLowerCase()}`}
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
