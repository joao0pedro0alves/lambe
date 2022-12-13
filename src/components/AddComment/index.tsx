import {useState} from "react"
import {
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback as TWF,
} from "react-native"
import {FontAwesome} from "@expo/vector-icons"

import {useAuth} from "../../hooks/useAuth"
import {useFeed} from "../../hooks/useFeed"

import {styles} from "./styles"
import {THEME} from "../../theme"

interface AddCommentProps {
    postId: string
}

export function AddComment({postId}: AddCommentProps) {
    const {currentUser, isAuthenticated} = useAuth()
    const {addPostComment} = useFeed()

    const [content, setContent] = useState("")
    const [isEditing, setIsEditing] = useState(false)

    function handleAddComment() {
        if (currentUser) {
            addPostComment(postId, {
                content,
                author: {
                    email: currentUser?.email,
                    nickname: currentUser?.name,
                },
            })
        }

        setContent("")
        setIsEditing(false)
    }

    if (!isAuthenticated) return null

    return (
        <View style={styles.container}>
            {isEditing ? (
                <View style={styles.innerContainer}>
                    <TextInput
                        autoFocus
                        placeholder="Descreva seu comentário..."
                        style={styles.input}
                        value={content}
                        onChangeText={setContent}
                        onSubmitEditing={handleAddComment}
                    />

                    <TWF onPress={() => setIsEditing(false)}>
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
