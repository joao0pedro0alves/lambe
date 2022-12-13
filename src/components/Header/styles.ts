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

    profile: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    hello: {
        color: THEME.COLORS.CAPTION_400,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,
    },
    username: {
        color: THEME.COLORS.CAPTION_900,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.XS,
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft: THEME.SPACING.MD
    }
})
