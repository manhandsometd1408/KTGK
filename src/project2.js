import * as react from 'react';
import { View, StyleSheet,Button,TouchableOpacity,Text } from 'react-native';

const project2 =()=>{
    return(
        <View style={styles.container}>
            <Button
            title='Button 1'
            onPress={()=>alert("Hello!")}
            />
            <TouchableOpacity
            onPress={()=>alert("hello 2!")}
            style={styles.Mystyle}
            >
                <Text style={styles.text}>Button 2</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center'
    },
    button:{
        backgroundColor:"blue",
        marginTop:10,
        alignItems: 'center',
        padding:10
    },
    text:{
        color:'white',
        fontSize: 18
    }
})
export default project2;