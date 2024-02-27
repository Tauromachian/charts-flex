// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

const themeColors = {
  dark: false,
  colors: { accent: "#703D57", neutral: "#ebfdff" }
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
