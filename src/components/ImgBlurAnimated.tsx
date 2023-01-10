import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

// Custom NextJs Img-loader
const ImgBlurAnimated = (props: ImageProps) => {
    const [blur, setBlur] = useState(false);

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
            {...props}
            onLoadingComplete={() => setBlur(true)}
            style={
                blur
                    ? { filter: 'blur(0rem)', transition: '0.3s' }
                    : {
                          filter: 'blur(1em)'
                      }
            }
        />
    );
};

export default ImgBlurAnimated;
