// pages/about.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {Montserrat,Poppins} from 'next/font/google'

const Mont = Montserrat({
  subsets:["latin"],
});
const Pop = Poppins({
  subsets:["latin"],
  weight:["200","300","400","800"]
});


export default function About() {
  return (
    <>
      <Head>
        <title>About | TechBlogs</title>
      </Head>
      <div className={` container mx-auto px-5 py-12`}>
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="flex gap-2 items-center text-gray-700 hover:text-gray-900 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <span className="text-sm">Back to Home</span>
          </Link>
        </div>

        {/* About Section */}
        <div className="flex flex-wrap items-center">
  <div className="w-full md:w-1/2 px-4 flex items-center">
    <Image
      src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="About TechBlogs"
      className="rounded-lg shadow-lg object-cover h-full"
      width={800}
      height={800}
      priority
    />
  </div>

  <div className="w-full md:w-1/2 px-4">
    <h1 className={`${Pop.className} text-4xl font-bold text-gray-900 mb-6 mt-4`}>About TechBlogs</h1>
    <p className="text-lg text-gray-700 leading-relaxed">
      Welcome to TechBlogs, your go-to destination for insightful content on the latest in technology, programming, and digital innovation. Our mission is to provide high-quality, informative, and practical articles that help individuals and businesses stay updated with the ever-evolving tech landscape.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      At TechBlogs, we explore a wide range of topics, including programming languages, cloud computing, artificial intelligence, blockchain, and more. Whether you're a seasoned developer or just starting your tech journey, we aim to break down complex concepts into easy-to-understand insights that foster learning and growth.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Thank you for visiting TechBlogs – we’re here to support your tech journey and keep you connected to the latest trends and innovations.
    </p>
  </div>
</div>


        {/* Highlights Section */}
        <section className="mt-12">
          <h2 className={`${Pop.className} text-3xl font-semibold text-gray-800 text-center mb-8`}>Why Choose TechBlogs?</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Image
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Insightful Content"
                  className="w-16 h-16 mx-auto mb-4 rounded-full"
                  width={64}
                  height={64}
                />
                <h3 className={`${Mont.className} text-xl font-bold text-gray-900 mb-2`}>Insightful Content</h3>
                <p className="text-gray-600">Deep dives into trending tech topics and emerging innovations.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Image
                  src="https://images.unsplash.com/photo-1639916991657-e74ba7546b28?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Expert Authors"
                  className="w-16 h-16 mx-auto mb-4 rounded-full"
                  width={64}
                  height={64}
                />
                <h3 className={`${Mont.className} text-xl font-bold text-gray-900 mb-2`}>Expert Authors</h3>
                <p className="text-gray-600">Articles written by experienced developers and industry professionals.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Image
                  src="https://images.unsplash.com/photo-1663507897721-c6c216a8fb28?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Practical Solutions"
                  className="w-16 h-16 mx-auto mb-4 rounded-full"
                  width={64}
                  height={64}
                />
                <h3 className={`${Mont.className} text-xl font-bold text-gray-900 mb-2`}>Practical Solutions</h3>
                <p className="text-gray-600">Step-by-step guides to help solve real-world problems effectively.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
