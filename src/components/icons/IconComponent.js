import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconComponent = ({ icon }) => {
    return (
        <FontAwesomeIcon
            icon={icon} />
    );
};

IconComponent.propTypes = {
    //Icon name or icon component.
    icon: PropTypes.oneOf([PropTypes.string, PropTypes.node])
};

export default IconComponent;