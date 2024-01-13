import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

const BottomTabs =()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel:"Home"}}/>
        </Tab.Navigator>
    )
}