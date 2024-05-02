import React from 'react';
import { View } from 'react-native';
import Photos from '../../constants/Photos';

interface Props {
    route: string;
    isFocused: boolean;
}

const BottomTabIcon = ({ route, isFocused }: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const renderIcon = (route: string, isFocused: boolean) => {
        let height: number = 34;
        let width: number = 34;

        switch (route) {
            case 'Home':
                return (
                    <Photos.HomeIcon
                        width={width}
                        height={height}
                        fill={isFocused ? '#0067FF' : '#ffffff'}
                    />
                );
            case 'Logout':
                return (
                    <Photos.LogoutIcon
                        width={width}
                        height={height}
                        fill={isFocused ? '#0067FF' : '#ffffff'}
                    />
                );
            case 'Tasks':
                return (
                    <Photos.TasksIcon
                        width={width}
                        height={height}
                        fill={isFocused ? '#0067FF' : '#ffffff'}
                    />
                );
            // case 'Profile':
            //     return (
            //         <ProfileIcon
            //             width={width}
            //             height={height}
            //             fill={isFocused ? '#0067FF' : '#ffffff'}
            //         />
            //     );
            default:
                break;
        }
    };

    return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;