import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfileScreen from './screens/UserProfileScreen';
import GoalSettingScreen from './screens/GoalSettingScreen';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="UserProfile" component={UserProfileScreen} />
                <Stack.Screen name="GoalSetting" component={GoalSettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
