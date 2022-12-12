import {uniqueId} from "lodash"
import {FlatList} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"

import {Header} from "../../components/Header"
import {Post, IPost} from "../../components/Post"

import {styles} from "./styles"

const POSTS: IPost[] = [
    {
        id: uniqueId(),
        image: require("../../assets/imgs/fence.jpg"),
        author: {
            email: "joao.alves1032003@gmail.com",
            nickname: "João Pedro",
        },
        comments: [
            {
                author: {nickname: "Joana Elena Silva", email: ""},
                content: "Excelente foto!!",
            },
            {
                author: {nickname: "Rafael Gustavo", email: ""},
                content:
                    "Não gostei muito, você deveria ter usado um ângulo melhor.",
            },
        ],
    },
    {
        id: uniqueId(),
        image: require("../../assets/imgs/bw.jpg"),
        author: {
            email: "julio_rod@gmail.com",
            nickname: "Julio Rodrigues",
        },
        comments: [],
    },
    {
        id: uniqueId(),
        image: require("../../assets/imgs/boat.jpg"),
        author: {
            email: "joao.alves1032003@gmail.com",
            nickname: "João Pedro",
        },
        comments: [],
    },
]

export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />

            <FlatList
                data={POSTS}
                keyExtractor={(item) => item.id}
                renderItem={({item: post}) => <Post data={post} />}
            />
        </SafeAreaView>
    )
}
