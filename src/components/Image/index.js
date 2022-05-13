import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import styles from './Image.module.scss';
import avatar from '@/assets/img/avatar.jpg';
import images from '@/assets/img';

function Image({ src, className, fallback: customFallback = images.Noimg, ...props }, ref) {
    const [_fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={_fallback || src}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
