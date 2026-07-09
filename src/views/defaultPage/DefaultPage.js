import React from 'react';
import { useNavigate } from 'react-router-dom';
import SingleCard from 'components/singleCard/SingleCard';
import { Button } from 'devextreme-react/button';
import './DefaultPage.scss';

const DefaultPage = () => {
    const navigate = useNavigate();

    const onReturnPage = () => {
        navigate(-1)
    };

    const onIndexPage = () => {
        navigate("/index");
    };

    return (
        <div className="default-page">
            <SingleCard title="404" description="Przepraszamy, ale nie mogliśmy znaleźć tej strony">
                <div className="default-page-container">
                    <Button text="Strona poprzednia" icon="return" onClick={onReturnPage} />
                    <Button text="Strona główna" icon="home" onClick={onIndexPage} />
                </div>
            </SingleCard>
        </div>
    );
};

export default DefaultPage;
