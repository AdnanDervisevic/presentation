import React from 'react';
import { Counter } from '../components/Counter';
import { PageHeader, PageContainer } from 'collector-portal-framework/dist/components';

export const PresentationView: React.FC = () => {
    return (
        <>
            <PageHeader title="Now with extra Collector Portal feeling!" />

            <PageContainer>
                <Counter />
            </PageContainer>
        </>
    );
};
