import {View, Image, Text} from "react-native"

import icon from "../../assets/imgs/icon.png"

import {styles} from "./styles"

export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Image source={icon} style={styles.logo} />

                <Text style={styles.title}>Lambe Lambe</Text>
            </View>
        </View>
    )
}
