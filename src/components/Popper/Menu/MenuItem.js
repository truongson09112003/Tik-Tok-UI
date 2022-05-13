import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button
            {...data}
            className={cx('button-menu', {
                separate: data.separate,
            })}
            custom="menu-item"
            onClick={onClick}
        >
            <span className={cx('menu-span')}>{data.icon}</span>
            <span>{data.title}</span>
        </Button>
    );
}

export default MenuItem;
