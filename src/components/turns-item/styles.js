import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 90,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10
    },
    containerTouchable: {
        flex: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        marginHorizontal: 7,
        fontSize: 18,
        fontFamily: 'Philosopher-Regular',
        color: COLORS.text,
    },

    containerData: {
        flexDirection: "column",
        height: 100,
        justifyContent: "space-evenly"
    },

    containerGroup: {
        width: 110,
        flexDirection: "row",
        alignItems: "center"
    },

    containerClient: {
        width: 200,
        flexDirection: "row",
        alignItems: "center"
    },

    textClient: {
        marginHorizontal: 7,
        fontSize: 18,
        fontFamily: 'Philosopher-Regular',
        color: COLORS.text,
    },

    containerTop: {
        width: 340,
        flexDirection: "row-reverse",
        justifyContent: "space-between"
    },
    containerBottom: {
        width: 340,
        flexDirection: "row-reverse",
        justifyContent: "space-between"
    },
});