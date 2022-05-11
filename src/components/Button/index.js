import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    primary,
    outLine,
    text,
    disabled = false,
    sizeS = false,
    sizeL = false,
    rounded = false,
    to,
    href,
    children,
    onClick,
    ...propsAdd
}) {
    let Component = 'button';

    const props = {
        onClick,
        ...propsAdd,
    };

    // remove event button when is disable
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const clases = cx('wrapper', {
        primary,
        outLine,
        sizeS,
        sizeL,
        text,
        disabled,
        rounded,
    });

    return (
        <Component className={clases} {...props}>
            <span>{children}</span>
        </Component>
    );
}

export default Button;
