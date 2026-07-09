import React from 'react'
import Container from 'components/containers/container/Container';
import Section from 'components/containers/section/Section';
import './Info.scss';

const Info = () => {
    return (
        <>
            <Container title="Informacje o aplikacji">
                <Section className="info" isCollapse={false}>
                    <div className="col-xs-12 col-sm-12 info-row">
                        <h3>Producent:</h3>
                        <p>KSIBB.PL IT SOLUTIONS Sp. z o.o. </p>
                    </div>
                </Section>
            </Container>
        </>
    )
}
export default Info;