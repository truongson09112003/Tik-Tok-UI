import className from 'classnames/bind';
import styles from './Search.module.scss';
import AccountItem from '@/components/AccountItem';
import { Wrapper as PopperWrapper, Menu } from '@/components/Popper';
import { SearchIcon, LoadingIcon } from '../../../Icons';

import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputElementRef = useRef();

    useEffect(() => {
        setSearchResults([1, 2, 3]);
    }, []);

    const handleClear = () => {
        inputElementRef.current.focus();
        setSearchResults([]);
        setSearchText('');
    };

    const handleHidenResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-account-title')}>Tài khoản </h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHidenResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputElementRef}
                    value={searchText}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchText && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <div className={cx('loading')}>
                    <LoadingIcon className={cx('loading-rotate')} />
                </div> */}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
