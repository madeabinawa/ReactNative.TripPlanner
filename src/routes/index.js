import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { blueColor, btnColor } from '../utils/theme';
import { TouchableHighlight, View } from 'react-native';
import { Home, Plan } from '../pages';


const Router = () => {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const options = {
        headerShown: false,
    }

    // ADD FAB COMPONENTS
    const Fab = () => {
        return (
            <TouchableHighlight
                onPress={() => { console.log('presseds') }}
                style={{
                    height: 48,
                    width: 48,
                    bottom: 20,
                    backgroundColor: 'transparent',
                    borderRadius: 48 / 2
                }}>
                <View style={{
                    height: 48,
                    width: 48,
                    backgroundColor: btnColor,
                    borderRadius: 48 / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Icon
                        name='add'
                        color='#ffffff' />
                </View>
            </TouchableHighlight>
        )
    }

    // SCREEN YANG MENAMPILKAN BOTTOM TAB BAR
    const BottomTabBar = () => {
        return (<Tab.Navigator
            tabBarOptions={{ showLabel: false }}>
            {/* PAGES ROUTE */}
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name="home"
                        color={focused ? blueColor : 'grey'} />
                )
            }} />
            <Tab.Screen name="Add" component={Home} options={{
                tabBarButton: (props) => {
                    return (<Fab />)
                }
            }} />
            <Tab.Screen name="Tes" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name="flight"
                        color={focused ? blueColor : 'grey'} />
                )
            }} />
        </Tab.Navigator>)
    }

    return (
        // ROUTE SCREEN YANG TIDAK MENAMPILKAN BOTTOM TABBAR
        <Stack.Navigator>
            <Stack.Screen name="Home" component={BottomTabBar} options={options} />
            <Stack.Screen name="Plan" component={Plan} options={options} />
        </Stack.Navigator>

    )
}

export default Router
