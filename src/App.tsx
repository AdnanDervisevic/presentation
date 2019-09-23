import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Footer } from './components';
import { PresentationView } from './views/Presentation';
import { PortalContainer, PortalHeader, PortalMain } from 'collector-portal-framework/dist/components';
import { MainMenuItem } from 'collector-portal-framework/dist/components/PortalHeader/MainMenu';
import { AgeOfEmpires } from './views/AgeOfEmpires';

const logoImage = require('./components/icons/swedish-logo.svg');

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
        path: '/age-of-empires',
        label: 'Age of Empires',
        icon: menuIcons.documents,
    },
];

export default class App extends React.Component {
    render() {
        return (
            <PortalContainer>
                <PortalHeader logoImage={logoImage} logoTarget="" siteName={'Presentation'} menuItems={menuItems} menuFooter={<Footer />} />

                <PortalMain>
                    <Switch>
                        <Route path="/presentation" component={PresentationView} />
                        <Route path="/age-of-empires" component={AgeOfEmpires} />

                        <Redirect from={'/'} to={'/presentation'} />
                    </Switch>
                </PortalMain>

                <Footer onlyInMobile={true} />
            </PortalContainer>
        );
    }
}
