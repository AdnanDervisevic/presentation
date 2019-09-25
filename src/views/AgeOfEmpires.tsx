import React from 'react';
import { PageContainer, PageHeader, FetchHandler, ListItem, TextLink } from 'collector-portal-framework/dist/components';
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
});

export const AgeOfEmpires: React.FC = () => {
    return (
        <>
            <PageHeader title="Age of Empires API Example" />

            <PageContainer>
                <FetchHandler apiMethod={getCivilizations} errorText="Need more wood. Wololo!">
                    {response => (
                        <List>
                            <span>Gratefully fetched from </span>
                            <TextLink href="https://age-of-empires-2-api.herokuapp.com/docs">Age of Empires II Api</TextLink>

                            {response.civilizations.map((civ, index) => renderDetails(civ, response.civilizations, index))}
                        </List>
                    )}
                </FetchHandler>
            </PageContainer>
        </>
    );
};

const renderDetails = (civ: Swagger.Civilization, civilizations: Swagger.Civilization[], index: number): JSX.Element => (
    <ListItem key={civ.id} item={{ title: civ.name, subTitle: civ.team_bonus, details: civ.expansion }}>
        <DetailsContainer>
            <List>
                {civ.civilization_bonus &&
                    civ.civilization_bonus.map(bonus => <ListItem key={civilizations.length + index} item={{ title: bonus }} />)}
            </List>
        </DetailsContainer>
    </ListItem>
);
