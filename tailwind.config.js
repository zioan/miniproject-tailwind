module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html'],
    // content: ['./dist/**/*.html','./dist/**/*.js', './dist/**/*.php'],
    },
    
  darkMode: 'class', // or 'media' or 'class'
  // media take the system (device) default theme if any
  theme: {
    debugScreens: {
      position: ["top", "left"],
    },
    extend: {
      // fontFamily: {
      //   myHeadline: ["Oswald"],
      // },
      colors: {
        myColor: "#212f49",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
