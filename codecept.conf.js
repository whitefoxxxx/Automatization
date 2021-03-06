require("ts-node/register");
const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./tests API/*_test.ts",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "http://localhost",
      show: true,
      windowSize: "1200x900",
      waitForNavigation: ["networkidle2", "domcontentloaded"],
    },
  },
  include: {
    I: "./steps_file.js",
    main: "./pages/main.js",
    login: "./pages/login.js",
    logout: "./pages/logout.js",
    wrpass: "./pages/wrpass.js",
    wrlogin: "./pages/wrlogin.js",
    navigation: "./pages/navigation.js",
    switchlang: "./pages/switchlang.js",
  },
  bootstrap: null,
  mocha: {},
  name: "Automatization",
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: false,
    },
    allure: {
      enabled: true,
      outputDir: "allure",
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
