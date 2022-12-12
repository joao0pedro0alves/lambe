import {useState} from "react"
import {SafeAreaView} from "react-native-safe-area-context"
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Alert,
} from "react-native"
import * as ImagePicker from "expo-image-picker"

import {styles} from "./styles"

type Result = {
    uri: string
    base64?: string | null
}

export function AddPhoto() {
    const [result, setResult] = useState<Result | null>(null)
    const [comment, setComment] = useState("")

    async function pickImage() {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.canceled) {
            setResult({
                uri: result.assets[0].uri,
                base64: result.assets[0].base64,
            })
        }
    }

    async function savePhoto() {
        Alert.alert("Imagem salva com sucesso", comment)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma imagem</Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: result?.uri,
                        }}
                    />
                </View>

                <TouchableOpacity onPress={pickImage} style={styles.button}>
                    <Text style={styles.buttonText}>Escolha a foto</Text>
                </TouchableOpacity>

                <View
                    style={{
                        flex: 1,
                        justifyContent: "flex-end",
                    }}
                >
                    <TextInput
                        placeholder="Algum comentário para a foto?"
                        style={styles.input}
                        value={comment}
                        onChangeText={setComment}
                    />

                    <TouchableOpacity
                        onPress={savePhoto}
                        style={[styles.button, styles.buttonSave]}
                    >
                        <Text style={styles.buttonText}>Salvar postagem</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
