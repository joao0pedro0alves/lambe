import {SafeAreaView} from "react-native-safe-area-context"
import {Text, TouchableOpacity} from "react-native"
import {FontAwesome} from '@expo/vector-icons'
import {Gravatar} from "react-native-gravatar"

import {styles} from "./styles"
import {THEME} from "../../theme"

export function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <Gravatar
                style={styles.avatar}
                options={{
                    email: "joao.alves1032003@gmail.com",
                    secure: true,
                }}
            />

            <Text style={styles.nickname}>João Pedro</Text>
            <Text style={styles.email}>joao.alves1032003@gmail.com</Text>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Sair</Text>
                <FontAwesome
                    name='sign-out'
                    size={THEME.FONT_SIZE.LG}
                    color={THEME.COLORS.TEXT}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}
