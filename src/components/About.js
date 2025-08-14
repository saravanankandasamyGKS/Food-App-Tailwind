import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg my-10">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">
        About Us
      </h1>
      <p className="text-lg italic text-center text-green-500 mb-12">
        Delivering happiness, one meal at a time.
      </p>

      <section className="mb-10 px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          We are a passionate team behind your favorite food delivery app,
          bringing the best restaurants and chefs right to your doorstep.
          Whether it’s a midnight craving or a family feast, we’ve got your
          hunger covered.
        </p>
      </section>

      <section className="mb-10 px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          What We Do
        </h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Our platform connects you to a wide variety of restaurants, cafes, and
          cloud kitchens. With real-time tracking, secure payments, and
          lightning-fast delivery, we ensure every order is smooth and
          satisfying.
        </p>
      </section>

      <section className="mb-10 px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          To revolutionize the way India eats. We aim to make food ordering
          faster, smarter, and more enjoyable—anytime, anywhere.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
