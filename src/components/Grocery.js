import React from "react";

const GroceryPage = () => {
  return (
    <div className="grocery-container max-w-6xl mx-auto p-6 bg-green-50 rounded-lg shadow-md my-10">
      <header className="grocery-header text-center mb-8">
        <h1 className="text-4xl font-extrabold text-green-700 mb-2">
          FreshCart Grocery
        </h1>
        <p className="text-green-600 text-lg">
          Fresh groceries delivered to your door in 30 minutes!
        </p>
      </header>

      <section className="grocery-items mb-12">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">
          Popular Items
        </h2>
        <div className="items-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              img: "https://media.istockphoto.com/id/995518546/photo/assortment-of-colorful-ripe-tropical-fruits-top-view.jpg?s=612x612&w=is&k=20&c=_5n0Qf_osohv32NYsdlKVks2XohdlALQCAiXA3qjkDA=",
              alt: "Fruits",
              label: "Fresh Fruits",
            },
            {
              img: "https://media.istockphoto.com/id/139496979/photo/assortment-of-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=Tns4-67GV8LoJoN9YYwRM9PhpYKQ4kfbWg70_NJc9L8=",
              alt: "Vegetables",
              label: "Organic Vegetables",
            },
            {
              img: "https://media.istockphoto.com/id/544807136/photo/various-fresh-dairy-products.jpg?s=612x612&w=0&k=20&c=U5T70bi24itoTDive1CVonJbJ97ChyL2Pz1I2kOoSRo=",
              alt: "Dairy",
              label: "Dairy Products",
            },
            {
              img: "https://media.istockphoto.com/id/1473199888/photo/salty-snacks-party-mix-an-assortment-of-crispy-appetizers-overhead.jpg?s=612x612&w=is&k=20&c=ttQjOvBAWBm9Dpj5ZZAnOF1n_cJQjNZEJ-J4ghlRt0E=",
              alt: "Snacks",
              label: "Snacks & Chips",
            },
          ].map(({ img, alt, label }) => (
            <div
              key={label}
              className="item-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img className="w-full h-40 object-cover" src={img} alt={alt} />
              <p className="p-4 font-semibold text-green-700 text-center">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta text-center">
        <h3 className="text-2xl font-semibold text-green-800 mb-4">
          Start Shopping Now!
        </h3>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
          Order Groceries
        </button>
      </section>
    </div>
  );
};

export default GroceryPage;
