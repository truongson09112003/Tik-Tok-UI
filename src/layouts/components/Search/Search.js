import className from 'classnames/bind';
import { useState, useRef, useEffect, useMemo } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import { SearchIcon, LoadingIcon } from '../../../components/Icons';
import { useDebounce } from '@/hooks';
import * as searchService from '@/services/searchService';
import Renderresult from './RenderResult';

const cx = className.bind(styles);

Search.propTypes = {};

function Search() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputElementRef = useRef();

    // handle user nhap liên tục value chánh hiện tương bắn required liên tục lên máy chủ
    const debounceValue = useDebounce(searchText, 500);

    const RenderItemAccount = useMemo(
        () => (attrs) => {
            return (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-account-title')}>Tài khoản </h4>
                        <Renderresult searchResults={searchResults} />
                    </PopperWrapper>
                </div>
            );
        },
        [searchResults],
    );

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResults([]);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);

            const results = await searchService.search(debounceValue);

            setLoading(false);

            setSearchResults(results);
        };

        fetchApi();
    }, [debounceValue]);

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
    };

    const handleSubmitSearch = (e) => {
        e.preventDefault();
    };

    return (
        /* 
            Using a wrapper <div> tag around the reference element solves
            this by creating a new parentNode context. 
        */
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResults.length > 0}
                render={RenderItemAccount}
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
                    <button className={cx('search-btn')} onMouseDown={(e) => handleSubmitSearch(e)}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
