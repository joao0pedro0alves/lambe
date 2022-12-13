import {SafeAreaView} from "react-native-safe-area-context"

import {useFeed} from "../../hooks/useFeed"
import {Header} from "../../components/Header"
import {Feed} from "../../components/Feed"

import {styles} from "./styles"

export function Home() {
    const {posts} = useFeed()

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Feed 
                posts={posts}
            />
        </SafeAreaView>
    )
}
