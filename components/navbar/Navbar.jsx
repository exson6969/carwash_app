import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    <Tab.Navigator>
        <Tab.Screen name ="Home" component =""/>
        <Tab.Screen name ="Book Now" component =""/>
        <Tab.Screen name ="My Bookings" component =""/>
        <Tab.Screen name ="Notification" component =""/>
        <Tab.Screen name ="Contact" component =""/>
    </Tab.Navigator>
}

export default Tabs;