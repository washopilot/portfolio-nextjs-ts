import { Global } from '@emotion/react';

const Fonts = () => (
    <Global
        styles={`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap');
      `}
    />
);

export default Fonts;
