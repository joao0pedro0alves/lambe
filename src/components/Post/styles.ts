import {Dimensions, StyleSheet} from "react-native"

const {width} =  Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    postImage: {
        width,
        height: width * 3 / 4,
        resizeMode: 'contain'
    }
})
