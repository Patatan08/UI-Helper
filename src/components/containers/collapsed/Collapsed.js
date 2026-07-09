import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDownIcon, ChevronUpIcon } from '../../icons/Icons';
import { Button } from 'devextreme-react';
import './Collapsed.scss';

const Collapsed = ({ children, collapsed: initialCollapsed = false, collapsedItems, collapsedChildren, menuItems, sectionTitle }) => {
    const [collapsed, setCollapsed] = useState(initialCollapsed);

    const onCollapseSectionClick = (event) => {
        let currentDiv = event.element.offsetParent;
        let containerDiv = currentDiv;

        while (containerDiv && containerDiv.tagName !== 'BODY') {
            if (containerDiv.classList.contains('dx-card') && containerDiv.classList.contains('responsive-paddings')) {
                break;
            }
            containerDiv = containerDiv.parentElement;
        }

        if (containerDiv) {
            containerDiv.classList.toggle("resizable-padding");
        }

        setCollapsed(!collapsed);
    };

    return (
        <div>
            <div>
                <h2>{sectionTitle}</h2>
                <ul className="nav">
                    {collapsed ? collapsedItems : ""}
                    <div className="menu-item">
                        {menuItems}
                    </div>
                    <li>
                        <Button className="collapse-link-own" onClick={onCollapseSectionClick} title={collapsed ? "test1" : "test2"}>
                            {collapsed ? <div><ChevronDownIcon /></div> : <div><ChevronUpIcon /></div>}
                        </Button>
                    </li>
                </ul>
                <div />
            </div>
            <div>
                {!collapsed ? children : collapsedChildren}
            </div>
        </div>
    );
};

Collapsed.propTypes = {
    //Should border be displayed
    borderd: PropTypes.bool,
    //Child components.
    children: PropTypes.node,
    //Is section collapsed
    collapsed: PropTypes.bool,
    //Unique html id.
    htmlId: PropTypes.string,
    //Menu items visible when collapsed.
    collapsedItems: PropTypes.node,
    //Child components to display when collapsed.
    collapsedChildren: PropTypes.node,
    //Additional menu items.
    menuItems: PropTypes.node,
    //Section title.
    sectionTitle: PropTypes.string,
};

export default Collapsed;
