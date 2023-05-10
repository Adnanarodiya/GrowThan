/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#162466",
          light: "#5956e8",
          dark: "#181b31",
        },

        red: {
          DEFAULT: "#ff3b33",
          light: "#ff1850",
        },

        white: {
          DEFAULT: "#ffffff",
        },

        gray: {
          DEFAULT: "#d0d0d0",
        },
      },
      fontFamily: {
        Nunito: ['"Nunito", sans-serif'],
      },
      backgroundImage: {
        hero: "url('../../build/img/Banner Image.png')",
        about: "url('../../build/img/Banner Image ab.png')",
        services: "url('../../build/img/services.png')",
        card: "url('../../build/img/card-bg.png')",
        cta: "url('../../build/img/cta.png')",
        work: "url('../../build/img/process-bg.png')",
        testimonial: "url('../../build/img/testimonial-bg.png')",
        subscribe: "url('../../build/img/Subscribe-bg-img.png')",

      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: "1320px",
      },
    },
  },
  plugins: [],
};
