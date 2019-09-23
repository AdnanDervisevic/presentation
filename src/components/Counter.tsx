import React, { useState } from 'react';
import { Button, H1, ButtonGroup } from 'collector-portal-framework/dist/components';
import styled from 'collector-portal-framework';

const Container = styled.div({
    display: 'flex',
    alignItems: 'center',
});

export const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <ButtonGroup style={{ height: '100%' }}>
                <Button size="small" onClick={() => setCount(prev => prev - 1)}>
                    Minska
                </Button>
            </ButtonGroup>

            <H1 style={{ margin: 16, minWidth: 50, textAlign: 'center' }}>{count}</H1>

            <ButtonGroup style={{ height: '100%' }}>
                <Button size="small" onClick={() => setCount(prev => prev + 1)}>
                    Öka
                </Button>
            </ButtonGroup>
        </Container>
    );
};
