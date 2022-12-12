import {StyleSheet, Dimensions} from "react-native"
import {THEME} from "../../theme"

const {width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: THEME.SPACING.MD,
    },
    title: {
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        marginTop: THEME.SPACING.MD,
        textAlign: 'center'
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        height: width * 3 / 4,
        backgroundColor: THEME.COLORS.BACKGROUND_400,
        marginTop: THEME.SPACING.MD,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width,
        height: width * 3 / 4,
        resizeMode: 'center'
    },
    button: {
        width: '100%',
        height: 52,
        marginVertical: THEME.SPACING.MD,
        padding: THEME.SPACING.MD,
        backgroundColor: THEME.COLORS.PRIMARY,
        borderRadius: THEME.SPACING.SM,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonSave: {
        backgroundColor: THEME.COLORS.SUCCESS,
    },
    buttonText: {
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        color: THEME.COLORS.TEXT,
        textTransform: 'uppercase'
    },
    input: {
        width: '100%',
        height: 52,
        marginTop: THEME.SPACING.XL,
        backgroundColor: THEME.COLORS.BACKGROUND_400,
        borderRadius: THEME.SPACING.SM,
        paddingLeft: THEME.SPACING.MD
    },
})
