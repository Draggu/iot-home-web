/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: unknown;
  UUID: string;
  Void: unknown;
};

export type Device = {
  channel?: Maybe<Scalars['Int']>;
  deviceName: Scalars['String'];
  displayName: Scalars['String'];
  id: Scalars['UUID'];
  isReportingVoltage: Scalars['Boolean'];
  kind: DeviceKind;
};

export type DeviceInput = {
  channel?: InputMaybe<Scalars['Int']>;
  deviceName: Scalars['String'];
  displayName: Scalars['String'];
  isReportingVoltage: Scalars['Boolean'];
  kind: DeviceKind;
};

export enum DeviceKind {
  Light = 'LIGHT',
  Shutter = 'SHUTTER',
  Switch = 'SWITCH'
}

export type LightStatus = {
  brightness: Scalars['Int'];
  power: Scalars['Boolean'];
};

export type Mutation = {
  addDevice: Device;
  lightDevice: Scalars['Void'];
  lightDeviceRefresh: Scalars['Void'];
  removeDevice: Scalars['Void'];
  shutterDevice: Scalars['Void'];
  shutterDeviceRefresh: Scalars['Void'];
  switchDevice: Scalars['Void'];
  switchDeviceRefresh: Scalars['Void'];
};


export type MutationAddDeviceArgs = {
  device: DeviceInput;
};


export type MutationLightDeviceArgs = {
  brightness: Scalars['Int'];
  id: Scalars['UUID'];
};


export type MutationLightDeviceRefreshArgs = {
  id: Scalars['UUID'];
};


export type MutationRemoveDeviceArgs = {
  displayName: Scalars['UUID'];
};


export type MutationShutterDeviceArgs = {
  id: Scalars['UUID'];
  position: Scalars['Int'];
};


export type MutationShutterDeviceRefreshArgs = {
  id: Scalars['UUID'];
};


export type MutationSwitchDeviceArgs = {
  id: Scalars['UUID'];
  switch: SwitchStatus;
};


export type MutationSwitchDeviceRefreshArgs = {
  id: Scalars['UUID'];
};

export type Query = {
  allDevices: Array<Device>;
  lastDayVoltage: Array<VoltageReportUnit>;
};


export type QueryLastDayVoltageArgs = {
  deviceName: Scalars['String'];
};

export enum ShutterDirection {
  Closing = 'CLOSING',
  Opening = 'OPENING',
  Stop = 'STOP'
}

export type ShutterStatus = {
  direction: ShutterDirection;
  position: Scalars['Int'];
  target: Scalars['Int'];
};

export type Subscription = {
  lightDeviceStatus: LightStatus;
  shutterDeviceStatus: ShutterStatus;
  switchDeviceStatus: Scalars['Boolean'];
  voltageReport: VoltageReportUnit;
};


export type SubscriptionLightDeviceStatusArgs = {
  id: Scalars['UUID'];
};


export type SubscriptionShutterDeviceStatusArgs = {
  id: Scalars['UUID'];
};


export type SubscriptionSwitchDeviceStatusArgs = {
  id: Scalars['UUID'];
};


export type SubscriptionVoltageReportArgs = {
  deviceName: Scalars['String'];
};

export enum SwitchStatus {
  Off = 'OFF',
  On = 'ON',
  Toggle = 'TOGGLE'
}

export type VoltageReportUnit = {
  timestamp: Scalars['DateTime'];
  voltage: Scalars['Int'];
};

export type AllDevicesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDevicesQuery = { allDevices: Array<{ id: string, displayName: string, deviceName: string, channel?: number | null, kind: DeviceKind, isReportingVoltage: boolean }> };

export type AddDeviceMutationVariables = Exact<{
  channel: Scalars['Int'];
  deviceName: Scalars['String'];
  displayName: Scalars['String'];
  isReportingVoltage: Scalars['Boolean'];
  kind: DeviceKind;
}>;


export type AddDeviceMutation = { addDevice: { id: string } };

export type ShutterPositionMutationVariables = Exact<{
  id: Scalars['UUID'];
  position: Scalars['Int'];
}>;


export type ShutterPositionMutation = { shutterDevice: unknown };

export type ShutterRefreshMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type ShutterRefreshMutation = { shutterDeviceRefresh: unknown };

export type ShutterDeviceStatusSubscriptionVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type ShutterDeviceStatusSubscription = { shutterDeviceStatus: { position: number, direction: ShutterDirection, target: number } };


export const AllDevicesDocument = gql`
    query allDevices {
  allDevices {
    id
    displayName
    deviceName
    channel
    kind
    isReportingVoltage
  }
}
    `;

/**
 * __useAllDevicesQuery__
 *
 * To run a query within a React component, call `useAllDevicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDevicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDevicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllDevicesQuery(baseOptions?: Apollo.QueryHookOptions<AllDevicesQuery, AllDevicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllDevicesQuery, AllDevicesQueryVariables>(AllDevicesDocument, options);
      }
export function useAllDevicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllDevicesQuery, AllDevicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllDevicesQuery, AllDevicesQueryVariables>(AllDevicesDocument, options);
        }
export type AllDevicesQueryHookResult = ReturnType<typeof useAllDevicesQuery>;
export type AllDevicesLazyQueryHookResult = ReturnType<typeof useAllDevicesLazyQuery>;
export type AllDevicesQueryResult = Apollo.QueryResult<AllDevicesQuery, AllDevicesQueryVariables>;
export const AddDeviceDocument = gql`
    mutation addDevice($channel: Int!, $deviceName: String!, $displayName: String!, $isReportingVoltage: Boolean!, $kind: DeviceKind!) {
  addDevice(
    device: {channel: $channel, deviceName: $deviceName, displayName: $displayName, isReportingVoltage: $isReportingVoltage, kind: $kind}
  ) {
    id
  }
}
    `;
export type AddDeviceMutationFn = Apollo.MutationFunction<AddDeviceMutation, AddDeviceMutationVariables>;

/**
 * __useAddDeviceMutation__
 *
 * To run a mutation, you first call `useAddDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDeviceMutation, { data, loading, error }] = useAddDeviceMutation({
 *   variables: {
 *      channel: // value for 'channel'
 *      deviceName: // value for 'deviceName'
 *      displayName: // value for 'displayName'
 *      isReportingVoltage: // value for 'isReportingVoltage'
 *      kind: // value for 'kind'
 *   },
 * });
 */
export function useAddDeviceMutation(baseOptions?: Apollo.MutationHookOptions<AddDeviceMutation, AddDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDeviceMutation, AddDeviceMutationVariables>(AddDeviceDocument, options);
      }
export type AddDeviceMutationHookResult = ReturnType<typeof useAddDeviceMutation>;
export type AddDeviceMutationResult = Apollo.MutationResult<AddDeviceMutation>;
export type AddDeviceMutationOptions = Apollo.BaseMutationOptions<AddDeviceMutation, AddDeviceMutationVariables>;
export const ShutterPositionDocument = gql`
    mutation shutterPosition($id: UUID!, $position: Int!) {
  shutterDevice(id: $id, position: $position)
}
    `;
export type ShutterPositionMutationFn = Apollo.MutationFunction<ShutterPositionMutation, ShutterPositionMutationVariables>;

/**
 * __useShutterPositionMutation__
 *
 * To run a mutation, you first call `useShutterPositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShutterPositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shutterPositionMutation, { data, loading, error }] = useShutterPositionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      position: // value for 'position'
 *   },
 * });
 */
export function useShutterPositionMutation(baseOptions?: Apollo.MutationHookOptions<ShutterPositionMutation, ShutterPositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShutterPositionMutation, ShutterPositionMutationVariables>(ShutterPositionDocument, options);
      }
export type ShutterPositionMutationHookResult = ReturnType<typeof useShutterPositionMutation>;
export type ShutterPositionMutationResult = Apollo.MutationResult<ShutterPositionMutation>;
export type ShutterPositionMutationOptions = Apollo.BaseMutationOptions<ShutterPositionMutation, ShutterPositionMutationVariables>;
export const ShutterRefreshDocument = gql`
    mutation shutterRefresh($id: UUID!) {
  shutterDeviceRefresh(id: $id)
}
    `;
export type ShutterRefreshMutationFn = Apollo.MutationFunction<ShutterRefreshMutation, ShutterRefreshMutationVariables>;

/**
 * __useShutterRefreshMutation__
 *
 * To run a mutation, you first call `useShutterRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShutterRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shutterRefreshMutation, { data, loading, error }] = useShutterRefreshMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useShutterRefreshMutation(baseOptions?: Apollo.MutationHookOptions<ShutterRefreshMutation, ShutterRefreshMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShutterRefreshMutation, ShutterRefreshMutationVariables>(ShutterRefreshDocument, options);
      }
export type ShutterRefreshMutationHookResult = ReturnType<typeof useShutterRefreshMutation>;
export type ShutterRefreshMutationResult = Apollo.MutationResult<ShutterRefreshMutation>;
export type ShutterRefreshMutationOptions = Apollo.BaseMutationOptions<ShutterRefreshMutation, ShutterRefreshMutationVariables>;
export const ShutterDeviceStatusDocument = gql`
    subscription shutterDeviceStatus($id: UUID!) {
  shutterDeviceStatus(id: $id) {
    position
    direction
    target
  }
}
    `;

/**
 * __useShutterDeviceStatusSubscription__
 *
 * To run a query within a React component, call `useShutterDeviceStatusSubscription` and pass it any options that fit your needs.
 * When your component renders, `useShutterDeviceStatusSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShutterDeviceStatusSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useShutterDeviceStatusSubscription(baseOptions: Apollo.SubscriptionHookOptions<ShutterDeviceStatusSubscription, ShutterDeviceStatusSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ShutterDeviceStatusSubscription, ShutterDeviceStatusSubscriptionVariables>(ShutterDeviceStatusDocument, options);
      }
export type ShutterDeviceStatusSubscriptionHookResult = ReturnType<typeof useShutterDeviceStatusSubscription>;
export type ShutterDeviceStatusSubscriptionResult = Apollo.SubscriptionResult<ShutterDeviceStatusSubscription>;