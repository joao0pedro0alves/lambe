import {useState} from "react"
import {
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert,
} from "react-native"
import {FontAwesome} from "@expo/vector-icons"

import {styles} from "./styles"
import {THEME} from "../../theme"

export function AddComment() {
    const [comment, setComment] = useState("")
    const [isEditing, setIsEditing] = useState(false)

    function handleAddComment() {
        Alert.alert("Comentário adicionado", comment)
    }

    return (
        <View style={styles.container}>
            {isEditing ? (
                <View style={styles.innerContainer}>
                    <TextInput
                        autoFocus
                        placeholder="Descreva seu comentário..."
                        style={styles.input}
                        value={comment}
                        onChangeText={setComment}
                        onSubmitEditing={handleAddComment}
                    />

                    <TWF
                        onPress={() => setIsEditing(false)}
                    >
                        <FontAwesome name="times" size={THEME.FONT_SIZE.MD} />
                    </TWF>
                </View>
            ) : (
                <TWF onPress={() => setIsEditing(true)}>
                    <View style={styles.innerContainer}>
                        <FontAwesome
                            name="comment-o"
                            size={THEME.FONT_SIZE.LG}
                        />
                        <Text style={styles.caption}>
                            Adicione um comentário...
                        </Text>
                    </View>
                </TWF>
            )}
        </View>
    )
}
