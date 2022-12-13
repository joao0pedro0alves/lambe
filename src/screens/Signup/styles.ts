import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: THEME.SPACING.MD,
    },
    header: {
        alignItems: 'center',
        marginBottom: THEME.SPACING.MD
    },
    logo: {
        width: 60,
        height: 60,
        marginBottom: THEME.SPACING.SM
    },
    title: {
        color: THEME.COLORS.CAPTION_900,
        fontFamily: THEME.FONT_FAMILY.SERIF.REGULAR,
        fontSize: THEME.FONT_SIZE.LG,
        height: 30,
    },
    input: {
        width: "100%",
        height: 52,
        marginTop: THEME.SPACING.MD,
        backgroundColor: THEME.COLORS.BACKGROUND_400,
        borderRadius: THEME.SPACING.SM,
        paddingLeft: THEME.SPACING.MD,
    },
    button: {
        width: "100%",
        height: 52,
        marginTop: THEME.SPACING.MD,
        padding: THEME.SPACING.MD,
        backgroundColor: THEME.COLORS.PRIMARY,
        borderRadius: THEME.SPACING.SM,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        color: THEME.COLORS.TEXT,
        textTransform: "uppercase",
    },

    link: {
        marginTop: THEME.SPACING.MD,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        borderBottomColor: THEME.COLORS.CAPTION_400,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    linkText: {
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        color: THEME.COLORS.CAPTION_400,
        marginLeft: THEME.SPACING.MD
    },
})
