import React from 'react';
import { PageContainer, PageHeader, FetchHandler, ListItem, TextLink } from 'collector-portal-framework/dist/components';
import { getCivilizations } from '../api';
import styled from 'collector-portal-framework';

const DetailsContainer = styled.div(({ theme }) => ({
    backgroundColor: theme.colors.lightOffWhite,
    borderRadius: theme.borderRadius.large,
    padding: 12,
}));

const ListContainer = styled.ul({
    margin: 0,
    padding: 0,
});

export const AgeOfEmpires: React.FC = () => (
    <>
        <PageHeader title="Age of Empires API Example" />

        <PageContainer>
            <FetchHandler apiMethod={getCivilizations} errorText="Need more wood. Wololo!">
                {response => (
                    <ListContainer>
                        <span>Gratefully fetched from </span>
                        <TextLink href="https://age-of-empires-2-api.herokuapp.com/docs">Age of Empires II Api</TextLink>

                        {response.civilizations!.map((civ, index) => (
                            <ListItem key={civ.id} item={{ title: civ.name, subTitle: civ.team_bonus, details: civ.expansion }}>
                                <DetailsContainer>
                                    <ListContainer>
                                        {civ.civilization_bonus!.map(bonus => (
                                            <ListItem key={response.civilizations!.length + index} item={{ title: bonus }} />
                                        ))}
                                    </ListContainer>
                                </DetailsContainer>
                            </ListItem>
                        ))}
                    </ListContainer>
                )}
            </FetchHandler>
        </PageContainer>
    </>
);
