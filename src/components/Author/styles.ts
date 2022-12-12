import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 15,
        marginHorizontal: THEME.SPACING.MD,
    },
    nickname: {
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.CAPTION_900,
    },
    email: {
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,
        color: THEME.COLORS.CAPTION_500,
    }
})
