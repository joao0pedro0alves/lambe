import React, {
    createContext,
    useCallback,
    useEffect,
    useState,
} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

import {USER_KEY, TOKEN_KEY} from "../utils/storage-keys"
import {api} from "../services/api"
// import {apiEndPoints} from "../constants/apiEndPoints"
// import {alertMessage} from "../services/alertMessage"

interface Credencials {
    email: string
    password: string
}

interface User {
    name: string
    email: string
}

interface AuthContextData {
    currentUser: User | null
    isAuthenticated: boolean
    loading: boolean

    signIn: (credencials: Credencials) => Promise<void>
    signOut: () => Promise<void>
}

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({children}: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchStorageUser = async () => {
            const storageUser = await AsyncStorage.getItem(USER_KEY)
            const storageToken = await AsyncStorage.getItem(TOKEN_KEY)

            if (storageUser && storageToken) {
                api.defaults.headers.common["Authorization"] =
                    JSON.parse(storageToken)
                setCurrentUser(JSON.parse(storageUser))
            }

            setLoading(false)
        }

        fetchStorageUser()
    }, [])

    const signIn = useCallback(async (credencials: Credencials) => {
        
        setCurrentUser({
            name: 'João Pedro',
            email: 'joao.alves1032003@gmail.com'
        })

        // setLoading(true)

        // try {
        //     const response = await api.post(apiEndPoints.session, {
        //         email: credencials.email,
        //         password: credencials.password,
        //     })

        //     const data = response.data.auth_token
        //     const token = data.jwtoken

        //     const user = {
        //         name: data.name,
        //         supervisor: data.supervisor,
        //         operations: data.operations,
        //     }

        //     api.defaults.headers.common["Authorization"] = token

        //     await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))
        //     await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(token))

        //     setCurrentUser(user)
        // } catch (error) {
        //     console.log(error)
        // }

        // setLoading(false)
    }, [])

    const signOut = useCallback(async () => {
        await AsyncStorage.multiRemove([USER_KEY, TOKEN_KEY])
        setCurrentUser(null)
    }, [])

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                isAuthenticated: !!currentUser,
                loading,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
