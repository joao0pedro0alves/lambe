import {useState} from "react"
import {SafeAreaView} from "react-native-safe-area-context"
import {useNavigation} from "@react-navigation/native"
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Alert
} from "react-native"
import * as ImagePicker from "expo-image-picker"

import {IPostImage} from "../../contexts/Feed"
import {useAuth} from "../../hooks/useAuth"
import {useFeed} from "../../hooks/useFeed"

import {styles} from "./styles"

export function AddPhoto() {
    const [image, setImage] = useState<IPostImage | null>(null)
    const [comment, setComment] = useState("")

    const {navigate} = useNavigation()

    const {currentUser, isAuthenticated} = useAuth()
    const {createPost} = useFeed()

    async function pickImage() {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.canceled) {
            setImage({
                uri: result.assets[0].uri,
                base64: result.assets[0].base64,
            })
        }
    }

    async function savePhoto() {
        if (image && currentUser) {
            
            await createPost({
                image: image,
                comments: [
                    {
                        content: comment,
                        author: {
                            email: currentUser.email,
                            nickname: currentUser.name,
                        },
                    },
                ],
            })

            setImage(null)
            setComment('')

            navigate('home')
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma imagem</Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: image?.uri,
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
                        value={comment}
                        onChangeText={setComment}
                        editable={isAuthenticated}
                        style={styles.input}
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
