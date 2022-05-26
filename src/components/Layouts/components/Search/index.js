import className from 'classnames/bind';
import styles from './Search.module.scss';
import AccountItem from '@/components/AccountItem';
import { Wrapper as PopperWrapper, Menu } from '@/components/Popper';
import { SearchIcon, LoadingIcon } from '../../../Icons';
import { useDebounce } from '@/hooks';

import { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function Search() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputElementRef = useRef();

    // handle user nhap liên tục value chánh hiện tương bắn required liên tục lên máy chủ
    const debounce = useDebounce(searchText, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResults([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then((data) => data.json())
            .then((res) => {
                setSearchResults(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounce]);

    const handleClear = () => {
        inputElementRef.current.focus();
        setSearchResults([]);
        setSearchText('');
    };

    const handleHidenResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchInput = e.target.value;

        if (!searchInput.startsWith(' ')) {
            setSearchText(searchInput);
        }
    }

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-account-title')}>Tài khoản </h4>
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
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
                    onChange={(e) => handleChange(e)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchText && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <div className={cx('loading')}>
                        <LoadingIcon className={cx('loading-rotate')} />
                    </div>
                )}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
