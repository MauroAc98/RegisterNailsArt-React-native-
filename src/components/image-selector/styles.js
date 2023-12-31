import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:20
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:COLORS.backgroundList
    },
    image: {
        width: '100%',
        height: '100%'
    },
})