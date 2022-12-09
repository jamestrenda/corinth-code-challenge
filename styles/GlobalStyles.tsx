import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle({
  html: {
    ...tw`bg-gray-900`,
    backgroundImage: `url(/matt-gross-9aCkSl6YcXg-unsplash.jpg)`,
    backgroundPosition: 'top left',
    backgroundRepeat: 'repeat',
    backgroundSize: '500px',
    backgroundBlendMode: 'luminosity',
  },
  body: {
    ...tw`antialiased p-4 bg-[rgba(0,0,0,.3)] min-h-screen`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
