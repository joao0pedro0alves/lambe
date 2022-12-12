import {StyleSheet} from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: THEME.SPACING.MD
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    nickname: {
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        color: THEME.COLORS.CAPTION_900,
        fontSize: THEME.FONT_SIZE.MD,
        marginTop: THEME.SPACING.MD
    },
    email: {
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        color: THEME.COLORS.CAPTION_500,
        fontSize: THEME.FONT_SIZE.SM,
        marginBottom: THEME.SPACING.MD
    },
    button: {
        width: 150,
        height: 42,
        marginVertical: THEME.SPACING.MD,
        padding: THEME.SPACING.MD,
        backgroundColor: THEME.COLORS.PRIMARY,
        borderRadius: THEME.SPACING.SM,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        color: THEME.COLORS.TEXT,
        marginRight: THEME.SPACING.LG,
        textTransform: 'uppercase',
    },
})
