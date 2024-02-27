// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

export const themeColors = {
  dark: false,
  colors: {
    accent: "#703D57",
    accent2: "#EB8A90",
    accent3: "#FAC748",
    neutral: "#ebfdff"
  }
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "themeColors",
    themes: {
      themeColors
    }
  }
});
