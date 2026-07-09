import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "./Container.scss";

const Container = ({ htmlId, className, title, menuItems, children }) => {

    const containerClassName = classNames(
        "content-block",
        className
    )

    return (
        <div id={htmlId} className={containerClassName}>
            <h3>{title}</h3>
            <div className="menu-items">{menuItems}</div>
            {children}
        </div>
    );
}

Container.propTypes = {
    htmlId: PropTypes.string,
    clasName: PropTypes.string,
    children: PropTypes.node
};

export default Container;