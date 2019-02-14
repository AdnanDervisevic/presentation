import React from 'react';
import { Logo as PortalLogo } from 'collector-portal-framework/dist/components';

const logoImage = require('./swedish-logo.svg');

export const Logo: React.FC = () => <PortalLogo image={logoImage} siteName="MySite" location={''} />;
