import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        padding: THEME.SPACING.MD,
        borderBottomWidth: 1,
        borderBottomColor: THEME.COLORS.BACKGROUND_600,
        width: "100%",
    },
    toolbar: {
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        height: 30,
        width: 30,
        resizeMode: "contain",
    },
    title: {
        color: THEME.COLORS.CAPTION_900,
        fontFamily: THEME.FONT_FAMILY.SERIF.REGULAR,
        fontSize: THEME.FONT_SIZE.LG,
        height: 30,
    },
})
