import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapsed from '../collapsed/Collapsed';
import './Section.scss';

const Section = ({ htmlId, className, title, children, icon, isCollapse = true }) => {
    const sectionClassName = classNames(
        "dx-card",
        "responsive-paddings",
        className
    );

    return (
        <div id={htmlId} className={sectionClassName}>
            <div className="section-container">
                <h4>{title}</h4>
                {isCollapse ? (
                <Collapsed
                    menuItems={
                        <div className="section-container-icon">
                            {icon}
                        </div>
                    }
                >
                    {children}
                </Collapsed>
                
            ):
            (
                <div>{children}</div>
            )}
            </div>
        </div>
    );
};

Section.propTypes = {
    htmlId: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.node,
    isCollapse: PropTypes.bool
};

export default Section;
