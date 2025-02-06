'use client';
import Image from 'next/image';
import { FaCode, FaPaintBrush, FaServer, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 border-4 border-white rounded-lg shadow-lg max-w-5xl mx-auto flex flex-col items-center text-center">
      {/* Profile Section */}
      <div className="p-4">
        <Image 
          src="/profile.jpg" 
          alt="Profile Picture" 
          width={150} 
          height={150} 
          className="rounded-full mx-auto border-4 border-white" 
        />
        <h1 className="text-4xl font-bold mt-2">Reval Rafifasya Jr</h1>
        <p className="text-lg">Full Stack Developer | UI/UX Designer</p>
      </div>

      {/* About Section */}
      <section className="mt-6 p-4 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold mb-2">About Me</h2>
        <p className="text-lg">I am a passionate developer with experience in modern web technologies and design. I specialize in creating dynamic and user-friendly web applications.</p>
      </section>

      {/* Skills Section */}
      <section className="mt-6 p-4 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold mb-2">Skills</h2>
        <div className="flex justify-center space-x-4 mt-2 text-4xl">
          <FaCode />
          <FaPaintBrush />
          <FaServer />
        </div>
        <p className="text-lg mt-2">JavaScript, React, Next.js, Node.js, UI/UX Design, Tailwind CSS, MongoDB, Express.js</p>
      </section>

      {/* Services Section */}
      <section className="mt-6 p-4 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold mb-2">Services</h2>
        <p className="text-lg">I offer a range of services including:</p>
        <ul className="list-disc list-inside mt-2 text-lg text-center">
          <li className="mb-1">Web Development</li>
          <li className="mb-1">UI/UX Design</li>
          <li className="mb-1">Backend Development</li>
          <li className="mb-1">API Development</li>
          <li>Performance Optimization</li>
        </ul>
      </section>

      {/* Portfolio Section */}
      <section className="mt-6 p-4 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold mb-2">Portfolio</h2>
        <p className="text-lg">Here are some of my recent projects:</p>
        <ul className="list-disc list-inside mt-2 text-lg text-center">
          <li className="mb-1">E-commerce Platform</li>
          <li className="mb-1">Portfolio Website</li>
          <li className="mb-1">Admin Dashboard</li>
          <li className="mb-1">Social Media App</li>
          <li>Landing Pages</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="mt-6 p-4 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold mb-2">Contact</h2>
        <p className="text-lg flex justify-center items-center space-x-2">
          <FaEnvelope /> reval.rafifasya@example.com | <FaPhone /> +6281234567890
        </p>
      </section>
    </div>
  );
}

