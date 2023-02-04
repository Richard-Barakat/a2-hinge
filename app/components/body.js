import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Profiles from "../../assets/Profiles";
import { Themes } from "../../assets/Themes";
import Icons from "../../assets/Icons"

const {shadowColor, shadowOpacity, shadowRadius, shadowOffset} = Themes.light.shadows
// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// create body component
export default function Body() {
    return (
        <View style = {styles.profileBody}>
            <ImageBackground 
            source={Profiles.mtl.image}
            style={styles.image} 
            imageStyle={styles.imageStyle}
            >
                <Text style={styles.textName}>{Profiles.mtl.name}</Text>
                <Text style={styles.textCaption}>{Profiles.mtl.caption}</Text>
            </ImageBackground>

            <View style={styles.audioBox}>
                <Text style={styles.textSong}>My hottest take</Text>
                <View style={styles.player}>
                    <Image source={Icons.player.light} style={styles.playerIcon}/>
                    <Image source={Icons.audioWave.light} style={styles.audioWaveIcon}/>
                </View>
            </View>

        </View>
    );
};

// define style (size, position, orienatation, color, etc)
const styles = StyleSheet.create({
    profileBody: {
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 16,
    }, 
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1 / 1.1,
        justifyContent: 'space-between',
        shadowColor: shadowColor,
        shadowOpacity: shadowOpacity,
        shadowRadius: shadowRadius,
        shadowOffset: shadowOffset
    },
    imageStyle: {
        borderRadius: 14,
    },
    textName: {
        paddingLeft: 14,
        paddingTop: 8,
        color: 'white',
        fontFamily: 'Sydney',
        fontSize: 36
    },
    textCaption: {
        padding: 12,
        color: 'white',
        fontFamily: 'Sydney',
        fontSize: 18
    },
    audioBox: {
        width: "100%",
        height: "28%",
        backgroundColor: Themes.light.bgSecondary,
        borderRadius: 28,
        marginTop: 15,
        shadowColor: shadowColor,
        shadowOpacity: shadowOpacity,
        shadowRadius: shadowRadius,
        shadowOffset: shadowOffset
    },
    textSong: {
        padding: 22,
        color: 'black',
        fontFamily: 'Sydney',
        fontSize: 28
    },
    playerIcon: {
        height: windowWidth * 0.14,
        width: windowWidth * 0.14,
    },
    audioWaveIcon: {
        height: windowWidth * 0.11,
        width: windowWidth * 0.62,
    },
    player: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 22,
        marginRight: 22,
    }
});


