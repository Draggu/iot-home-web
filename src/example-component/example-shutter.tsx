import React, { useEffect, useRef, useState } from 'react';
import {
    ShutterDeviceStatusSubscription,
    useShutterDeviceStatusSubscription,
    useShutterPositionMutation,
    useShutterRefreshMutation,
} from '../generated/gql';

export const ExampleShutter = ({
    id,
    displayName,
}: {
    id: string;
    displayName: string;
}) => {
    const [shutterStatus, setShutterStatus] = useState<
        ShutterDeviceStatusSubscription['shutterDeviceStatus']
    >();

    const [inputValue, setInputValue] = useState<string>('0');

    useShutterDeviceStatusSubscription({
        onData({ data }) {
            setShutterStatus(data.data!.shutterDeviceStatus);
        },
        variables: {
            id,
        },
    });

    const [setShutterPosition, { reset }] = useShutterPositionMutation({
        onCompleted() {},
        onError(err) {
            // handle error

            reset();
        },
        variables: {
            id,
            position: +inputValue,
        },
    });

    const [forceShutterStatus] = useShutterRefreshMutation({
        variables: {
            id,
        },
    });

    useEffect(() => {
        forceShutterStatus();
    }, []);

    return (
        <div>
            shutter: {displayName}
            {shutterStatus && (
                <>
                    <div>direction: {shutterStatus.direction}</div>
                    <div>position: {shutterStatus.position}</div>
                    <div>target: {shutterStatus.target}</div>
                </>
            )}
            <input
                type="text"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <button
                onClick={() => {
                    setShutterPosition();
                }}
            >
                set shutter position
            </button>
        </div>
    );
};
