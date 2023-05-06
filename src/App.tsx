import React from 'react';
import { ApiProvider } from './gql-client';
import './app.css';
import { Example } from './example-component/example';

export const App = () => (
    <ApiProvider>
        <Example />
    </ApiProvider>
);
