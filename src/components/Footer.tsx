import * as React from 'react';
import styled from 'collector-portal-framework';
import { Text } from 'collector-portal-framework/dist/components';

const FooterContainer = styled.footer<FooterProps>(({ onlyInDesktop, onlyInMobile, theme }) => {
    const styles = {
        background: theme.colors.sidebarBlueDark,
        color: theme.colors.white,
    };

    if (onlyInDesktop) {
        return {
            ...styles,
            [theme.breakpoints.mobileAndLower]: {
                display: 'none',
            },
        };
    } else if (onlyInMobile) {
        return {
            ...styles,
            display: 'none',

            [theme.breakpoints.mobileAndLower]: {
                display: 'block',
                marginTop: 40,
            },
        };
    }

    return styles;
});

const FooterSection = styled.div(({ theme }) => ({
    padding: 20,

    '&:not(:last-child)': {
        borderBottom: `1px solid ${theme.colors.sidebarBlue}`,
    },
}));

const linkStyles = {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'opacity 150ms',
    opacity: 0.5,

    '&:hover': {
        opacity: 1,
    },
};

const linkButtonStyles = {
    ...linkStyles,
    display: 'inline-block',
    background: 'no-repeat left center',
    backgroundSize: '20px 20px',
    padding: '12px 12px 12px 28px',
};

const Link = styled.a(linkStyles);

const LogOutLink = styled.a({
    ...linkButtonStyles,
});

const OnlyInMobile = styled.div(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.mobileAndLower]: {
        display: 'block',
    },
}));

interface FooterProps {
    onlyInDesktop?: boolean;
    onlyInMobile?: boolean;
}

export const Footer: React.StatelessComponent<FooterProps> = ({ onlyInDesktop, onlyInMobile }) => (
    <FooterContainer onlyInDesktop={onlyInDesktop} onlyInMobile={onlyInMobile}>
        {onlyInMobile && (
            <FooterSection>
                <OnlyInMobile>
                    <LogOutLink href="/auth/logout">{'logOut'}</LogOutLink>
                </OnlyInMobile>
            </FooterSection>
        )}

        <FooterSection>
            <div>
                <Text>{'Footer stuff'}</Text>
            </div>
            <div>
                <Link href={`mailto:${'customerServiceEmailAddress'}`}>{'Goes here'}</Link>
            </div>
        </FooterSection>
    </FooterContainer>
);
