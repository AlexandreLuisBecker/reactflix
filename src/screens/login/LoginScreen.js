import React from "react";
// componentes que vao ser utilizados para a tela de login//
import { 
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet
 } from "react-native";

 // Importando biblioteca de icones // 
 // npm i react-native-vector-icons//

 //import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
 //import IonicIcons from 'react-native-vector-icons/Ionicons'
 import {MaterialIcons,Entypo} from '@expo/vector-icons';
 import CustomButtom from '../../components/CustomButton'
 import CustomInput from '../../components/CustomInput'



 const GoogleImage = '../../../assets/images/google.png'
 const FacebookImage = '../../../assets/images/facebook.png'
 const TwitterImage = '../../../assets/images/twitter.png'

const LoginScreen = ({navigation}) => {

    return(
        <SafeAreaView style={styles.screen} >
        <View style={{paddingHorizontal:25}}>
            <Text style={{
                fontSize: 28,
                fontWeight:'500',
                color: '#000',
                marginBottom:30,
            }}>
                Login
            </Text>
            <CustomInput
            label={'E-mail'}
            icon={
                <MaterialIcons
                    name='alternate-email'
                    size={20}
                    color='#cccccc'
                    style={{marginRight:5}}

                />
            }
            keybordType="email-address"
            />
    
            <CustomInput
                label={'Password'}
                icon={
                    <Entypo
                        name='key'
                        size='20'
                        color='#cccccc'
                        style={{marginRight:5}}

                    />
                }
                inputType='password'
                fieldButtonLabel={'Esqueceu sua senha?'}
                fieldButtonFunction={()=>{}}

            />
            <CustomButtom
                label={'Login'}
                onPress={()=> {}}
            />
            <Text
             style={{
                textAlign:'center',
                color: '#000',
                marginBottom: 20,
             
            }}>
                Ou logar com...
            </Text>
            <View style={{
                flexDirection:'row',
                justifyContent: 'space-between',
                marginBottom: 30
            }}>

                <TouchableOpacity
                 style={{
                    borderColor: '#ddd',
                    borderWidth: 2,
                    borderRadius: 10,
                    paddingHorizontal: 30,
                    paddingVertical: 10
                }}
                    onPress={() => {}} >
                    <Image
                        source={require(GoogleImage)}
                        style={{
                            height: 24,
                            width: 24
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                style={{
                    borderColor: '#ddd',
                    borderWidth: 2,
                    borderRadius: 10,
                    paddingHorizontal: 30,
                    paddingVertical: 10
                }}
                    onPress={() => {}} >
                    <Image
                        source={require(FacebookImage)}
                        style={{
                            height: 24,
                            width: 24
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                style={{
                    borderColor: '#ddd',
                    borderWidth: 2,
                    borderRadius: 10,
                    paddingHorizontal: 30,
                    paddingVertical: 10
                }}
                    onPress={() => {}} >
                    <Image
                        source={require(TwitterImage)}
                        style={{
                            height: 24,
                            width: 24
                        }}
                    />
                </TouchableOpacity>

            </View>
           
            <View style={{
                flexDirection: 'row',
                justifyContent:'center',
                marginBottom: 30
            }}>
                <Text>Novo por aqui?</Text>
                <TouchableOpacity
                    onPress={() => {}}>
                    <Text>Registrar-se!</Text>
                </TouchableOpacity>
            </View>
        </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    screen:{
    
      display:'flex',
        justifyContent: 'center',
        paddingVertical:50

    }
})

export default LoginScreen
