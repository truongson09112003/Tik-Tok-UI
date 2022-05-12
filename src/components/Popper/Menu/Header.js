import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Menu({ title, onBack, custom = false }) {
    return (
        <div
            className={cx('header', {
                custom,
            })}
        >
            <i className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon className={cx('icon-header')} icon={faChevronLeft} />
            </i>
            <p className={cx('header-title')}>{title}</p>
        </div>
    );
}

export default Menu;
