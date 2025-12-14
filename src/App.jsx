// src/App.jsx
import React from "react";
import WhatsappFloatingButton from "./components/WhatsappFloatingButton";

import {
  cornrows,
  Shortcornrow,
  braids,
  Black,
  Curls,
  strokes,
  baby,
} from "./assets";
import TikTokGrid from "./components/TikTokGrid";

export default function App() {
  // Replace with any social media link
  const galleryImages = [cornrows, Shortcornrow, baby, Black, Curls, strokes];
  const whatsappLink =
    "https://wa.me/2349015087642?text=Hello%20I%20am%20interested%20in%20your%20hair%20services";

  return (
    <div className="font-sans text-gray-900 bg-black min-h-screen ">
      {/* HERO */}
      <div
        id="Header"
        className="relative bg-cover bg-center md:bg-right md:bg-contain md:bg-no-repeat max-w-4xl mx-auto"
      >
        <section className="relative text-start sm:text-start px-4 sm:px-8 md:px-12 border-b-4 border-dotted h-full py-10 sm:py-20 md:py-40 flex flex-col justify-center sm:backdrop-blur-none sm:bg-transparent backdrop-blur-sm bg-black/40">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 sm:drop-shadow-none drop-shadow-lg">
            BHEES'S HAIR LAB
          </h1>
          <p className="mt-4 max-w-sm text-sm sm:text-base md:text-lg   text-white sm:drop-shadow-none drop-shadow-md">
            Discover a world of sophisticated and personalized beauty of
            <span> Bhee's Hair Lab</span>. Our salon is more than just a place
            to get your hair done - it's a sanctuary where your unique style and
            beauty take center shape.
          </p>
          <div className="flex mt-5">
            <p className="text-yellow-300">&#9733;</p>
            <p className="text-yellow-300">&#9733;</p>
            <p className="text-yellow-300">&#9733;</p>
            <p className="text-yellow-300">&#9733;</p>
            <p className="text-yellow-300">&#9733;</p>
          </div>

          <p className="mt-2 text-white sm:drop-shadow-none drop-shadow-md">
            100<sup>+</sup> Happy and Satisfied Customers
          </p>
        </section>
      </div>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-3xl mx-auto ">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-300">
          Our Services
        </h2>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          <div className="col-span-3 md:col-span-1 border-2 border-solid p-4 rounded-lg h-full relative">
            <img
              src={braids}
              alt="Braids"
              className="absolute top-1 left--1 right-1 w-14 h-14 rounded-full object-cover border-2 border-yellow-300"
            />
            <h3 className="text-sm font-bold text-yellow-300">
              Braids / Plaits
            </h3>
            <p className=" mt-5 text-white">
              Neat and professional braids tailored to your preferred style. We
              ensure comfort and clean finishing.
            </p>
          </div>

          <div className="col-span-3 md:col-span-1 border-2 border-solid p-4 rounded-lg h-full relative">
            <img
              src={cornrows}
              alt="Cornrows"
              className="absolute top-1 left--1 right-1 w-14 h-14 rounded-full object-cover border-2 border-yellow-300"
            />
            <h3 className="text-sm font-bold text-yellow-300">Cornrows</h3>
            <p className=" mt-5 text-white">
              Clean, stylish cornrows suitable for all hair types. Perfect for
              everyday looks and events.
            </p>
          </div>

          <div className="col-span-3 md:col-span-1 border-2 border-solid p-4 rounded-lg h-full relative">
            <img
              src={baby}
              alt="Kids Hair Styling"
              className="absolute top-1 left--1 right-1 b w-14 h-14 rounded-full object-cover border-2 border-yellow-300"
            />
            <h3 className="text-sm font-bold text-yellow-300">
              Kids Hair Styling
            </h3>
            <p className=" mt-4 text-white">
              Gentle plaiting for children — neat, comfortable, and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-300">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md h-full"
            >
              <img
                src={src}
                alt="hair style"
                className="h-full w-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>
      {/* VIDEO EMBED */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-300">
          Take a Look at Our Work on TikTok
        </h2>

        <TikTokGrid />
        <p className="text-center mt-6 text-white">
          click on view profile on the video to watch more of our video also do
          well to follow, like and comment on our videos. Thank you!
        </p>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg0 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center text-yellow-300">
          About Us
        </h2>
        <p className=" text-center max-w-2xl mx-auto text-white">
          We specialize in clean, long-lasting braids and plaiting. Our mission
          is to give you a beautiful, confident look with high-quality work.
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-6 text-white border-t-2 border-dotted max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {/* Left side - Contact info */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-yellow-300">
              Contact
            </h2>
            <p className="mb-4">Phone: +234 901 508 7642</p>
            <p className="mb-4">
              WhatsApp:{" "}
              <a
                href={whatsappLink}
                className="underline hover:text-yellow-300"
              >
                Chat with Us
              </a>
            </p>
            <p className="text-start mt-8">&copy; 2025 Bhees Braiding</p>
          </div>

          {/* Right side - Social links with icons */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-yellow-300">
              Follow Us
            </h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 hover:text-yellow-300 transition"
              >
                <svg
                  className="w-6 h-6  text-white bg-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.92.6-1.43 1.38-1.43 1.02 0 1.6.7 1.6 1.82v3.95h2.5M7 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.6 12.6H5.4v-8.5h3.2v8.5z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-yellow-300 transition"
              >
                <svg
                  className="w-6 h-6  text-white bg-pink-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.3 2c-2 0-3.5 1.5-3.5 3.5v8.4c0 2 1.5 3.5 3.5 3.5h8.4c2 0 3.5-1.5 3.5-3.5V7.5c0-2-1.5-3.5-3.5-3.5H7.5m9.6 1.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8m-5.1 1.4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://www.tiktok.com/@bheezurumshairlab?is_from_webapp=1&sender_device=pc"
                className="flex items-center gap-3 hover:text-yellow-300 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a1.5 1.5 0 0 0-2.12 0l-7.07 7.07-3.54-3.54a1.5 1.5 0 0 0-2.12 2.12l4.6 4.6a1.5 1.5 0 0 0 2.12 0l8.13-8.13a1.5 1.5 0 0 0 0-2.12z" />
                </svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <WhatsappFloatingButton />
    </div>
  );
}

/* Converts social media links into embeddable iframe URLs */
function convertTikTok(url) {
  // extract video ID
  const match = url.match(/video\/(\d+)/);
  if (!match) return null;
  const id = match[1];
  return `https://www.tiktok.com/embed/${id}`;
}
