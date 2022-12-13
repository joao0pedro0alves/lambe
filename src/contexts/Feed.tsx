import {createContext, useState} from "react"
import {uniqueId} from "lodash"

import {IComment} from "../components/Comments"
import {IPost} from "../components/Post"

import {samplePosts} from '../mock/samplePosts'
import {useAuth} from "../hooks/useAuth"

export interface IPostImage {
    uri: string
    base64?: string | null
}
export interface IPostData {
    image: IPostImage
    comments?: IComment[]
}

interface FeedContextData {
    posts: IPost[]

    createPost: (postData: IPostData) => Promise<void>
    addPostComment: (postId: string, comment: IComment) => Promise<void>
}

interface FeedProviderProps {
    children: React.ReactNode
}

export const FeedContext = createContext<FeedContextData>({} as FeedContextData)

export function FeedProvider({children}: FeedProviderProps) {
    const [posts, setPosts] = useState<IPost[]>([...samplePosts])

    const {currentUser} = useAuth()

    async function createPost({image, comments = []}: IPostData) {
        if (currentUser) {

            const newPost: IPost = {
                id: uniqueId(),
                image,
                comments,
                author: {
                    email: currentUser?.email,
                    nickname: currentUser?.name
                }
            }
    
            setPosts(previousPosts => previousPosts.concat(newPost))
        }

    }

    function _addComment(post: IPost, comment: IComment): IPost {
        return {...post, comments: post.comments.concat(comment)}
    }

    async function addPostComment(postId: string, comment: IComment) {
        setPosts(previousPosts => previousPosts.map(
            post => post.id !== postId ? post : _addComment(post, comment) 
        ))
    }

    return (
        <FeedContext.Provider
            value={{
                posts,
                createPost,
                addPostComment
            }}
        >
            {children}
        </FeedContext.Provider>
    )
}
