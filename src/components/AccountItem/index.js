import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import img from '@/assets/img';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('avata')}>
                <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/81b750a215c3d4e278e2d4882c6ead98~c5_100x100.jpeg?x-expires=1652288400&x-signature=KWhs%2FR74WWEMdea9IPmq1L7%2BKik%3D" />
            </span>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    truongson09112003
                    <img src={img.check} alt="Người nổi tiếng" />
                </h4>
                <p className={cx('name')}>Trường Sơn 😊</p>
            </div>
        </div>
    );
}

export default AccountItem;
