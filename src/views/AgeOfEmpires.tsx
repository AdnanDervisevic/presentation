import React, { useState } from 'react';
import { PageContainer, PageHeader, FetchHandler, ListItem, TextLink, Paginator } from 'collector-portal-framework/dist/components';
import { getCivilizations } from '../api';
import styled from 'collector-portal-framework';

const DetailsContainer = styled.div(({ theme }) => ({
    backgroundColor: theme.colors.lightOffWhite,
    borderRadius: theme.borderRadius.large,
    padding: 12,
}));

const List = styled.ul({
    margin: 0,
    padding: 0,
    marginBottom: 32,
});

export const AgeOfEmpires: React.FC = () => {
    const [activePage, setActivePage] = useState(1);
    const pageSize = 5;

    const renderDetails = (civ: Swagger.Civilization): JSX.Element => (
        <ListItem key={civ.id} item={{ title: civ.name, subTitle: civ.team_bonus, details: civ.expansion }}>
            <DetailsContainer>
                <List>
                    {civ.civilization_bonus &&
                        civ.civilization_bonus.map(bonus => <ListItem key={`${Math.random()}`} item={{ title: bonus }} />)}
                </List>
            </DetailsContainer>
        </ListItem>
    );

    return (
        <>
            <PageHeader title="Age of Empires API Example" />

            <PageContainer>
                <FetchHandler apiMethod={getCivilizations} errorText="Need more wood. Wololo!">
                    {response => (
                        <>
                            <List>
                                <span>Gratefully fetched from </span>
                                <TextLink href="https://age-of-empires-2-api.herokuapp.com/docs">Age of Empires II Api</TextLink>

                                {response.civilizations.slice((activePage - 1) * pageSize, activePage * pageSize).map(renderDetails)}
                            </List>

                            <Paginator
                                activePage={activePage}
                                numberOfItems={response.civilizations.length}
                                numbersInMiddle={5}
                                onChange={setActivePage}
                                pageSize={pageSize}
                            />
                        </>
                    )}
                </FetchHandler>
            </PageContainer>
        </>
    );
};
