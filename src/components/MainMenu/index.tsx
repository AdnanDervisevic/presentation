import * as React from 'react';
import { MainMenu as CollectorPortalMainMenu, MainMenuItem } from 'collector-portal-framework/dist/components';

const menuIcons = {
    house: require('./icons/house.svg'),
    documents: require('./icons/documents.svg'),
};

export const MainMenu: React.StatelessComponent = () => {
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

    return <CollectorPortalMainMenu items={menuItems} />;
};
