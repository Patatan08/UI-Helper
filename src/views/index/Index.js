import React, { useCallback } from 'react';
import Button from 'devextreme-react/button';
import { useNavigate } from 'react-router';
import "./Index.scss";

const Index = () => {
    const navigate = useNavigate();

    const menuItems = [
        { icon: "fa-solid fa-address-card", text: "Widok 1", route: "/view1" },
        { icon: "fa-solid fa-clipboard-list", text: "Widok 2", route: "/view2" }
    ];

    const handleNavigation = useCallback((route) => {
        navigate(route);
    }, [navigate]);

    return (
        <div className="content-block">
            <div className="row gy-4">
                {menuItems.map((item, index) => (
                    <div key={index} className="col-md-3">
                        <div className="dx-card">
                            <Button
                                icon={item.icon}
                                text={item.text}
                                width={"100%"}
                                height={"25vh"}
                                onClick={() => handleNavigation(item.route)}
                                elementAttr={{
                                    class: 'index-button'
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;