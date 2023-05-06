import React, { ReactNode } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
    uri: 'http://172.16.0.200/gql',
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: 'ws://172.16.0.200/gql/subscriptions',
    }),
);

const client = new ApolloClient({
    uri: 'http://172.16.0.200/gql',
    link: split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        wsLink,
        httpLink,
    ),
    cache: new InMemoryCache(),
});

export const ApiProvider = ({ children }: { children: ReactNode }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
