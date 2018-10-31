import Typhography from "typography";

const typhography = new Typhography( {
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    googleFonts: [
        {
            name: "Montserrat",
            styles: ["700"]
        },
        {
            name: "Open Sans",
            styles: ["400"]
        }
    ],
    headerFontFamily: ['Montserrat', 'Helvtica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Open Sans', 'sans-serif']
});

typhography.injectStyles();

export default typhography;