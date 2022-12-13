import {View, Image, Text} from "react-native"
import {Gravatar} from "react-native-gravatar"

import icon from "../../assets/imgs/icon.png"
import {useAuth} from "../../hooks/useAuth"

import {styles} from "./styles"

export function Header() {

    const {currentUser} = useAuth()

    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Image source={icon} style={styles.logo} />
                <Text style={styles.title}>Lambe Lambe</Text>

                {currentUser && (
                    <View style={styles.profile}>
                        <View>
                            <Text style={styles.hello}>Bem vindo,</Text>
                            <Text style={styles.username}>{currentUser?.name}</Text>
                        </View>
                        <Gravatar
                            style={styles.avatar}
                            options={{
                                email: currentUser?.email,
                                secure: true,
                            }}
                        />
                    </View>
                )}
            </View>
        </View>
    )
}
