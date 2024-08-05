import Icon from "./extensions/icon.png";
import Logo from "./extensions/logo.svg";

export default {
  config: {
    head: {
      favicon: Icon,
    },
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Icon,
    },
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Won Games",
        "Auth.form.welcome.subtitle": "Login to your favorite games store",
        "app.components.LeftMenu.navbrand.title": "Dashboard",
      },
    },
    theme: {
      light: {},
      dark: {
        colors: {
          primary100: "#030415",
          primary600: "#f231a5",
          primary700: "#f231a5",
          neutral: "#0d102f",
          neutral100: "#030415",
        },
      },
    },
    locales: [],
  },
  bootstrap() {},
};
