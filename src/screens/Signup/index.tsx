import {useState} from "react"
import {View, Image, TextInput, TouchableOpacity, Text} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {SafeAreaView} from "react-native-safe-area-context"
import {FontAwesome} from '@expo/vector-icons'

import icon from "../../assets/imgs/icon.png"

import {styles} from "./styles"
import {THEME} from "../../theme"

export function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")

    const {navigate} = useNavigation()

    async function createUser() {
        navigate("me")
    }

    function goSignin() {
        navigate("signin")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={icon} style={styles.logo} />
                <Text style={styles.title}>Cadastrar</Text>
            </View>

            <TextInput
                placeholder="Seu nome"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
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

            <TouchableOpacity onPress={createUser} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goSignin} style={styles.link}>
                <FontAwesome
                    name='chevron-left'
                    color={THEME.COLORS.CAPTION_400}
                    size={THEME.FONT_SIZE.SM}
                />
                <Text style={styles.linkText}>Já possui um cadastro? Entrar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
