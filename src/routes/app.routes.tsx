import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {FontAwesome} from "@expo/vector-icons"

import {Home} from "../screens/Home"
import {AddPhoto} from "../screens/AddPhoto"
import {ProfileRoutes} from "./profile.routes"

import {THEME} from "../theme"

const {Navigator, Screen} = createBottomTabNavigator()

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: THEME.COLORS.PRIMARY,
            }}
        >
            <Screen
                name="home"
                component={Home}
                options={{
                    title: "Feed",
                    tabBarIcon: (props) => (
                        <FontAwesome
                            name="home"
                            size={props.size}
                            color={props.color}
                        />
                    ),
                }}
            />
            <Screen
                name="add"
                component={AddPhoto}
                options={{
                    title: "Add Picture",
                    tabBarIcon: (props) => (
                        <FontAwesome
                            name="camera"
                            size={props.size}
                            color={props.color}
                        />
                    ),
                }}
            />
            <Screen
                name="profile"
                component={ProfileRoutes}
                options={{
                    title: "Profile",
                    tabBarIcon: (props) => (
                        <FontAwesome
                            name="user"
                            size={props.size}
                            color={props.color}
                        />
                    ),
                }}
            />
        </Navigator>
    )
}
