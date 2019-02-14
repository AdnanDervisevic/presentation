import React, { useState } from 'react';
import { Button, H1 } from 'collector-portal-framework/dist/components';
import styled from 'collector-portal-framework';

const Container = styled.div({
    display: 'flex',
});

export const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <Button size="small" onClick={() => setCount(prev => prev - 1)}>
                Minska
            </Button>

            <H1 style={{ margin: 16 }} centered>
                {count}
            </H1>

            <Button size="small" onClick={() => setCount(prev => prev + 1)}>
                Öka
            </Button>
        </Container>
    );
};
