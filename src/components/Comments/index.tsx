import {View, Text} from "react-native"
import {IAuthor} from "../Author"

import {styles} from "./styles"

export interface IComment {
    author: IAuthor
    content: string
}

interface CommentsProps {
    data: IComment[]
}

export function Comments({data}: CommentsProps) {
    return (
        <View style={styles.container}>
            {data.length > 0 ? (
                <>
                    {data.map((comment, index) => (
                        <View style={styles.commentContainer} key={index}>
                            <Text style={styles.auhorNickname}>
                                {comment.author.nickname}:
                            </Text>
                            <Text numberOfLines={1} style={styles.commentContent}>
                                {comment.content}
                            </Text>
                        </View>
                    ))}
                </>
            ) : null}
        </View>
    )
}
