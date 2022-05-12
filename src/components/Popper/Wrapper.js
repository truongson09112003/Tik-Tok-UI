import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, custom }) {
    return (
        <div
            className={cx('wrapper', {
                custom,
            })}
        >
            {children}
        </div>
    );
}

export default Wrapper;
