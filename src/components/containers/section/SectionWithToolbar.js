import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import { Button } from 'devextreme-react';
import { ChevronDownIcon, ChevronUpIcon } from 'components/icons/Icons';
import "./SectionWithToolbar.scss";

const SectionWithToolbar = ({ htmlId, className, title, children, before, center, after, isCollapse = true }) => {
    const [collapsed, setCollapsed] = useState(true);

    const onCollapse = () => {
        setCollapsed(!collapsed);
    };

    const sectionClassName = classNames(
        "dx-card",
        "new-section-container",
        className
    );

    return (
        <div id={htmlId} className={sectionClassName}>
            <Toolbar className="section-toolbar">
                <Item location="before">
                    {before}
                    <span className="title">{title}</span>
                </Item>
                <Item location="center">
                    {center}
                </Item>
                <Item location="after">
                    {after}
                    {isCollapse && <Button onClick={onCollapse}>
                        {collapsed ? <div><ChevronUpIcon /></div> : <div><ChevronDownIcon /></div>}
                    </Button>}
                </Item>
            </Toolbar>
            {collapsed ? <div className="responsive-paddings">{children}</div> : null}
        </div>
    );
};

SectionWithToolbar.propTypes = {
    htmlId: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.node,
    isCollapse: PropTypes.bool
};

export default SectionWithToolbar;
