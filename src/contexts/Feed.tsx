import {createContext, useState} from "react"
import {IPost} from "../components/Post"

import {samplePosts} from '../mock/samplePosts'

interface PostData {
    content: string
    image: {
        uri: string
        base64: string
    }
}

interface FeedContextData {
    posts: IPost[]

    createPost: (postData: PostData) => Promise<void>
    updatePost: (id: string, postData: PostData) => Promise<void>
    deletePost: (id: string) => Promise<void>
}

interface FeedProviderProps {
    children: React.ReactNode
}

export const FeedContext = createContext<FeedContextData>({} as FeedContextData)

export function FeedProvider({children}: FeedProviderProps) {
    const [posts, setPosts] = useState<IPost[]>([...samplePosts])

    async function createPost() {
        setPosts([])
    }

    async function updatePost() {
        setPosts([])
    }

    async function deletePost() {
        setPosts([])
    }

    return (
        <FeedContext.Provider
            value={{
                posts,
                createPost,
                updatePost,
                deletePost
            }}
        >
            {children}
        </FeedContext.Provider>
    )
}
