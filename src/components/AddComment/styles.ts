import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: THEME.SPACING.MD
    },
    innerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: THEME.SPACING.MD,
    },
    input: {
        width: '90%',
        marginHorizontal: THEME.SPACING.MD,
    },
    caption: {
        color: THEME.COLORS.CAPTION_300,
        marginHorizontal: THEME.SPACING.MD
    },
})
