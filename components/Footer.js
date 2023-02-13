import { StyleSheet, Text, View } from 'react-native';
import RoundPlus from '../assets/icons/roundPlus.svg';
import { THEME } from '../assets/themes/theme'

const Footer = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={{alignItems: 'center', margin: 15}}>
                    <RoundPlus/>
                </View>
                <View>
                    <Text style={styles.footerText}>Vos idées sont précieuses, prenez en soin!</Text>
                </View>
            </View>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        color: THEME.mode.subText,
        fontFamily: 'signikaNegativeRegular',
    }
});
