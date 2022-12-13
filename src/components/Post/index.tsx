import {View, Image, ImageSourcePropType} from "react-native"

import {Author, IAuthor} from "../Author"
import {Comments, IComment} from "../Comments"
import {AddComment} from "../AddComment"

import {styles} from "./styles"

export interface IPost {
    id: string
    image: ImageSourcePropType
    comments: IComment[]
    author: IAuthor
}

interface PostProps {
    data: IPost
}

export function Post({data}: PostProps) {
    return (
        <View style={styles.container}>
            <Image source={data.image} style={styles.postImage} />

            <Author
                data={{
                    email: data.author.email,
                    nickname: data.author.nickname,
                }}
            />

            <Comments data={data.comments} />
            <AddComment postId={data.id} />
        </View>
    )
}
