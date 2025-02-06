import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12
    },
    headerBar: {
        height: 45,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logo: {
        width: 140,
        height: 27
    },
    cart: {
        width: 30,
        height: 30
    },
    busca: {
        marginBottom: 10
    },
    destaques: {
        color: COLORS.dark_gray,
        fontWeight: "bold",
        marginTop: 10
    },
    cartQtd: {
        fontSize: FONT_SIZE.xsm,
        color: COLORS.white,
        borderRadius: 10,
        backgroundColor: COLORS.red,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
        position: "absolute",
        top: -10,
        right: -2
    }
}