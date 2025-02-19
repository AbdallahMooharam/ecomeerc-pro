import React from 'react';

const links = [
  { name: "Services", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Our Team", href: "#" },
  { name: "Contact Us", href: "#" },
];

const stats = [
  { name: "Projects Completed", value: "100+" },
  { name: "Happy Clients", value: "200+" },
  { name: "Years of Experience", value: "5+" },
  { name: "Awards", value: "10+" },
];

const AboutUs = () => {
  return (
    <div>
      {/* About Us Section */}
      <div  id="about" className="bg-gray-50 py-24 sm:py-32 flex justify-center">
        <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
      </div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We are a creative team that always strives to provide the best. We believe in the power of collaboration and creativity.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
