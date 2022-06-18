import PropTypes from 'prop-types';

import './GlobalStyles.scss';
import './base.scss';

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

function GlobalStyles({ children }) {
    return children;
}

export default GlobalStyles;
