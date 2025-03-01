import React from "react";

const CallToAction = () => {
  return (
    <section id="contact" className="w-full relative py-24">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-background to-black/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto border border-gray-200 p-12 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">
            Let's Create Something Amazing
          </h2>

          <p className="text-center text-gray-700 mb-8">
            Send me an email or explore my portfolio and discover the stories
            waiting to be told through film.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-2 bg-black text-white font-medium hover:bg-black/90 transition-colors"
            >
              Contact
            </a>
            <a
              href="#films"
              className="px-6 py-2 bg-white text-black border border-black font-medium hover:bg-gray-50 transition-colors"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
