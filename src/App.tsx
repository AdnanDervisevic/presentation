import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'collector-portal-framework';
import { MainMenu, Footer, Logo } from './components';
import { PresentationView } from './views/Presentation';
import { Aftonbladet } from './views/Aftonbladet';

const Container = styled.div(({ theme }) => ({
    backgroundColor: theme.colors.offWhite,
    display: 'flex',

    [theme.breakpoints.mobileAndLower]: {
        flexDirection: 'column',
    },
}));

const Header = styled.header(({ theme }) => ({
    width: 280,
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    minHeight: '100vh',
    background: theme.colors.sidebarBlue,
    color: theme.colors.white,

    [theme.breakpoints.mobileAndLower]: {
        width: 'auto',
        minHeight: 'auto',
    },
}));

const Main = styled.main(({ theme }) => ({
    display: 'block',
    width: '100%',
    maxWidth: 1200,
    minHeight: 250,
    position: 'relative',
    backgroundColor: theme.colors.white,
    borderRight: `1px solid ${theme.colors.lightGray}`,
}));

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Logo />
                    <MainMenu />
                    <Footer onlyInDesktop={true} />
                </Header>

                <Main>
                    <Switch>
                        <Route path="/presentation" component={PresentationView} />
                        <Route path="/aftonbladet" component={Aftonbladet} />

                        <Redirect from={'/'} to={'/presentation'} />
                    </Switch>
                </Main>

                <Footer onlyInMobile={true} />
            </Container>
        );
    }
}
