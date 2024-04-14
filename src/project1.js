import * as react from 'react';
import { View,Text, StyleSheet } from 'react-native';

const project1 =()=>{
    return(
        <View style={styles.Mystyle}>
            <Text style={styles.Textstyle}>Hello word</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    Mystyle:{
        width:100,
        height:100,
        backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center',
    },
    Textstyle:{
        color:'back'
    }
})
export default project1;