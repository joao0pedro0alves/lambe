import {uniqueId} from "lodash"
import {IPost} from "../components/Post"

export const samplePosts: IPost[] = [
    {
        id: uniqueId(),
        image: require("../assets/imgs/fence.jpg"),
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
        image: require("../assets/imgs/bw.jpg"),
        author: {
            email: "julio_rod@gmail.com",
            nickname: "Julio Rodrigues",
        },
        comments: [],
    },
    {
        id: uniqueId(),
        image: require("../assets/imgs/boat.jpg"),
        author: {
            email: "joao.alves1032003@gmail.com",
            nickname: "João Pedro",
        },
        comments: [],
    },
]
