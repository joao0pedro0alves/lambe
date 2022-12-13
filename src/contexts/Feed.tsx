import {Alert} from 'react-native'
import {createContext, useState} from "react"
import {uniqueId} from "lodash"

import {IComment} from "../components/Comments"
import {IPost} from "../components/Post"
import {api} from "../services/api"

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
    isLoading: boolean

    createPost: (postData: IPostData) => Promise<void>
    addPostComment: (postId: string, comment: IComment) => Promise<void>
}

interface FeedProviderProps {
    children: React.ReactNode
}

export const FeedContext = createContext<FeedContextData>({} as FeedContextData)

export function FeedProvider({children}: FeedProviderProps) {
    const [posts, setPosts] = useState<IPost[]>([...samplePosts])
    const [isLoading, setIsLoading] = useState(false)

    const {currentUser} = useAuth()

    async function createPost({image, comments = []}: IPostData) {
        if (currentUser) {
            setIsLoading(true)

            try {               
                const newPost: IPost = {
                    id: uniqueId(),
                    image,
                    comments,
                    author: {
                        email: currentUser?.email,
                        nickname: currentUser?.name
                    }
                }
    
                // Save on firebase store
                await api.post('/posts.json', {...newPost})
                
                setPosts(previousPosts => 
                    previousPosts.concat(newPost)
                )

            } catch (error) {
                Alert.alert('Erro', 'Não foi possível salvar o Post! Tente novamente.')
            } finally {
                setIsLoading(false)
            }
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
                isLoading,
                createPost,
                addPostComment
            }}
        >
            {children}
        </FeedContext.Provider>
    )
}
