import {View, FlatList, ActivityIndicator} from "react-native"
import {Post, IPost} from "../Post"

import {styles} from "./styles"
import {THEME} from "../../theme"

interface FeedProps {
    isLoading: boolean
    posts: IPost[]
}

export function Feed({posts, isLoading}: FeedProps) {
    if (isLoading) {
        return (
            <>
                <ActivityIndicator
                    color={THEME.COLORS.PRIMARY}
                    size={THEME.FONT_SIZE.LG}
                />
            </>
        )
    }

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
