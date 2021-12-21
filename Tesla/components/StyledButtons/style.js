import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        width: '100%',
        marginBottom: 15
    },
    button: {
        backgroundColor: '#36363c',
        // backgroundColor: '#d7d6d7',
        height: 40,
        marginHorizontal: 10,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase'
    }
});

export default styles;