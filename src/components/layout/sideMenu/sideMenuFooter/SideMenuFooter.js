import React from 'react'
import { useNavigate } from 'react-router';
import { Button } from 'devextreme-react';
import { InfoIcon, QuestionIcon } from 'components/icons/Icons';

const SideMenuFooter = () => {
    const navigate = useNavigate();
    const onInfoPage = () => {
        navigate("/info");
    }
    
    return (
        <div className="sidebar-footer">
            <Button className="sidebar-footer-btn" onClick={onInfoPage}>
                <InfoIcon />
            </Button>
        </div>
    )
}
export default SideMenuFooter;