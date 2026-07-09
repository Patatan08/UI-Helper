import React from 'react';
import Button from 'devextreme-react/button';
import { Item, Location } from 'devextreme-react/responsive-box';

function IndexItem({ text, row, col, onRedirect }) {
    return (
        <Item >
            <Location row={row} col={col} />
            <div className="dx-card responsive-paddings">
                <Button icon="menu" text={text} width={"100%"} height={"25vh"} onClick={onRedirect} />
            </div>
        </Item>
    );
}

export default IndexItem;