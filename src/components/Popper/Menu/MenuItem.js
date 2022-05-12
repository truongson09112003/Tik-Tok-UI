import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    let Component = 'div';
    let Test = false;

    const props = {};

    if (data.to) {
        Component = Link;
        props.to = data.to;
    }
    if (data.check === 'check') {
        Test = true;
    }
    return (
        <Component {...props} className={cx('menu-item')}>
            <span className={cx('menu-span')}>{data.icon}</span>
            <Button
                className={cx({
                    spanised: { Test },
                })}
            >
                {data.title}
            </Button>
        </Component>
    );
}

export default MenuItem;
