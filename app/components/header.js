import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import Icons from "../../assets/Icons"

// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// create body component (define content here)
export default function Header() {
    return (
        <View style = {styles.header}>
            <Image source={Icons.menu.light} style={styles.headerIcons}/>
            <Text style={styles.title}>ensom</Text>
            <Image source={Icons.sun} style={styles.headerIcons}/>
        </View>
    );
};

// define style (size, position, orienatation, color, etc)
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: windowHeight * 0.035,
    },
    headerIcons: {
        height: windowWidth * 0.125,
        width: windowWidth * 0.125,
        margin: windowWidth * 0.04
    },
    title: {
        fontFamily: 'Sydney-Bold',
        fontSize: 36,
    }
});
