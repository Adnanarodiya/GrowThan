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
        noto: ["'Noto Sans', sans-serif"],
      },
      backgroundImage: {
        hero: "url('/img/Background.png')",
        about: "url('/img/aboutusbg-img.png')",
        services: "url('/img/services-bg.png')",
        contact: "url('/img/contact-us-bg.png')",
        card: "url('/img/card-bg-image.png')",
        contactus: "url('/img/contact-us-card.png')",
        detailBg: "url('/img/detail-form-bg.png')",
        tcBg: "url('/img/tc-bg.png')",
        cta: "url('/img/service-cta.png')",
        work: "url('/img/process-bg.png')",
        testimonial: "url('/img/testimonial-bg.png')",
        subscribe: "url('/img/Subscribe-bg-img.png')",
        termsBg: "url('/img/terms-bg.png')",
        careerBg: "url('/img/career-bg.png')",
        BlogBg: "url('/img/Blog-bg.png')",
        joinUsBg: "url('/img/join-us-bg.png')",
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
