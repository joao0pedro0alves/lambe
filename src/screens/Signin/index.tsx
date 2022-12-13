import {useState} from "react"
import {View, Image, TextInput, TouchableOpacity, Text} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {SafeAreaView} from "react-native-safe-area-context"
import {FontAwesome} from "@expo/vector-icons"

import icon from "../../assets/imgs/icon.png"
import {useAuth} from "../../hooks/useAuth"

import {styles} from "./styles"
import {THEME} from "../../theme"

export function Signin() {
    const {signIn} = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {navigate} = useNavigation()

    async function handleSignin() {
        await signIn({
            email,
            password
        })

        navigate("me")
    }

    function goSignup() {
        navigate("signup")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={icon} style={styles.logo} />
                <Text style={styles.title}>Lambe Lambe</Text>
            </View>

            <TextInput
                placeholder="E-mail"
                style={styles.input}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Senha"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity onPress={handleSignin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goSignup} style={styles.link}>
                <Text style={styles.linkText}>Criar nova conta</Text>
                <FontAwesome
                    name="chevron-right"
                    color={THEME.COLORS.CAPTION_400}
                    size={THEME.FONT_SIZE.SM}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}
