import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: THEME.SPACING.MD,
    },
    commentContainer: {
        flexDirection: "row",
        marginTop: THEME.SPACING.SM,
    },
    auhorNickname: {
        marginRight: THEME.SPACING.SM,
        color: THEME.COLORS.CAPTION_500,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.XS,
    },
    commentContent: {
        color: THEME.COLORS.CAPTION_400,
        fontSize: THEME.FONT_SIZE.XS,
        flex: 1,
    },
})
