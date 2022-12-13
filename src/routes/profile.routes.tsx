import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {useAuth} from "../hooks/useAuth"

import {Profile} from "../screens/Profile"
import {Signin} from "../screens/Signin"
import {Signup} from "../screens/Signup"

const {Navigator, Screen} = createNativeStackNavigator()

export function ProfileRoutes() {
    const {isAuthenticated} = useAuth()

    return (
        <Navigator
            initialRouteName={isAuthenticated ? "me" : "signin"}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="me" component={Profile} />
            <Screen name="signin" component={Signin} />
            <Screen
                name="signup"
                component={Signup}
                options={{
                    animation: "slide_from_right",
                }}
            />
        </Navigator>
    )
}
