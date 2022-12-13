import {useCallback} from "react"
import {SafeAreaView} from "react-native-safe-area-context"
import {Text, TouchableOpacity} from "react-native"
import {useNavigation, useFocusEffect} from "@react-navigation/native"
import {FontAwesome} from "@expo/vector-icons"
import {Gravatar} from "react-native-gravatar"

import {useAuth} from "../../hooks/useAuth"

import {styles} from "./styles"
import {THEME} from "../../theme"

export function Profile() {
    const {navigate} = useNavigation()

    const {currentUser, signOut} = useAuth()

    async function handleSignOut() {
        await signOut()
        navigate("home")
    }

    useFocusEffect(
        useCallback(() => {

            if (currentUser === null) {
                navigate("signin")
            }
            
        }, [currentUser])
    )

    return (
        <SafeAreaView style={styles.container}>
            <Gravatar
                style={styles.avatar}
                options={{
                    email: currentUser?.email,
                    secure: true,
                }}
            />

            <Text style={styles.nickname}>{currentUser?.name}</Text>
            <Text style={styles.email}>{currentUser?.email}</Text>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={handleSignOut}
            >
                <Text style={styles.buttonText}>Sair</Text>
                <FontAwesome
                    name="sign-out"
                    size={THEME.FONT_SIZE.LG}
                    color={THEME.COLORS.TEXT}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}
