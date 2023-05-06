import React, { useEffect } from 'react';
import {
    DeviceKind,
    useAddDeviceMutation,
    useAllDevicesQuery,
} from '../generated/gql';
import { ExampleShutter } from './example-shutter';

export const Example = () => {
    const { data, loading, refetch } = useAllDevicesQuery();

    const [addDevice, { reset, client }] = useAddDeviceMutation({
        onCompleted() {
            refetch();
        },
        onError(err) {
            // handle error

            reset();
        },
    });

    useEffect(() => {
        addDevice({
            variables: {
                deviceName: 'light',
                displayName: 'roleta jadalnia',
                channel: 1,
                isReportingVoltage: true,
                kind: DeviceKind.Shutter,
            },
        });
    }, []);

    return (
        <div>
            {loading ? (
                <div>loading...</div>
            ) : (
                <>
                    shutters:
                    {data!.allDevices
                        .filter(({ kind }) => kind === DeviceKind.Shutter)
                        .map(shutter => (
                            <ExampleShutter
                                key={shutter.id}
                                id={shutter.id}
                                displayName={shutter.displayName}
                            />
                        ))}
                </>
            )}
        </div>
    );
};
