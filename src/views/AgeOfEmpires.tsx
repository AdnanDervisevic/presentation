import React from 'react';
import { PageContainer, PageHeader, FetchHandler, ListItem } from 'collector-portal-framework/dist/components';
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
                        {response.civilizations!.map(civ => (
                            <ListItem key={civ.id} item={{ title: civ.name, subTitle: civ.team_bonus, details: civ.expansion }}>
                                <DetailsContainer>
                                    <ListContainer>
                                        {civ.civilization_bonus!.map(bonus => (
                                            <ListItem item={{ title: bonus }} />
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
