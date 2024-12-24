import Link from "next/link";
import {Montserrat} from 'next/font/google'
import { blogData } from "./data/blogs";

const Mont = Montserrat({
  subsets:["latin"],
  weight:["800"]
});




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
