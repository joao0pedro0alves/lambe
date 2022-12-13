import {View, FlatList} from "react-native"
import {Post, IPost} from "../Post"

import {styles} from "./styles"

interface FeedProps {
    posts: IPost[]
}

export function Feed({posts}: FeedProps) {
    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({item: post}) => <Post data={post} />}
            contentContainerStyle={styles.container}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    )
}
