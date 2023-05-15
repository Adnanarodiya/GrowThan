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
        noto:["'Noto Sans', sans-serif"],
      },
      backgroundImage: {
        hero: "url('../../build/img/Background.png')",
        about: "url('../../build/img/aboutusbg-img.png')",
        services: "url('../../build/img/services-bg.png')",
        contact: "url('../../build/img/contact-us-bg.png')",
        card: "url('../../build/img/card-bg-image.png')",
        contactus: "url('../../build/img/card-bg-image.png')",
        cta: "url('../../build/img/service-cta.png')",
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