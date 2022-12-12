import {Text, View} from "react-native"
import {Gravatar} from "react-native-gravatar"

import {styles} from "./styles"

export interface IAuthor {
    email: string,
    nickname: string
}

interface AuthorProps {
    data: IAuthor
}

export function Author({data}: AuthorProps) {
    return (
        <View style={styles.container}>
            <Gravatar 
                options={{
                    email: data.email,
                    secure: true
                }}
                style={styles.avatar}
            />
            
            <View>
                <Text
                    style={styles.nickname}
                >
                    {data.nickname}
                </Text>
                <Text
                    style={styles.email}
                >
                    {data.email}
                </Text>
            </View>
        </View>
    )
}
