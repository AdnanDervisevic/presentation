import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Footer, } from './components';
import { PresentationView } from './views/Presentation';
import { Aftonbladet } from './views/Aftonbladet';
import { PortalContainer, PortalHeader, PortalMain } from 'collector-portal-framework/dist/components';
import { MainMenuItem } from 'collector-portal-framework/dist/components/PortalHeader/MainMenu';

const logoImage = require('./components/icons/swedish-logo.svg')

const menuIcons = {
    house: require('./components/icons/house.svg'),
    documents: require('./components/icons/documents.svg'),
};

const menuItems: MainMenuItem[] = [
    {
        path: '/presentation',
        label: 'Översikt',
        icon: menuIcons.house,
    },
    {
        path: '/aftonbladet',
        label: 'Aftonbladet',
        icon: menuIcons.documents,
    },
];

export default class App extends React.Component {
    render() {
        return (
            <PortalContainer>
                <PortalHeader
                    logoImage={logoImage}
                    logoTarget=""
                    siteName={"Presentation"}
                    menuItems={menuItems}
                    menuFooter={<Footer />}
                />

                <PortalMain>
                    <Switch>
                        <Route path="/presentation" component={PresentationView} />
                        <Route path="/aftonbladet" component={Aftonbladet} />

                        <Redirect from={'/'} to={'/presentation'} />
                    </Switch>
                </PortalMain>

                <Footer onlyInMobile={true} />
            </PortalContainer>
        );
    }
}
