import React, {useState} from "react";
import { SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,

} from "react-native";



import DateTimePickerModal from 'react-native-modal-datetime-picker'

import {MaterialIcons,Entypo} from '@expo/vector-icons';

import CustomButtom from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const GoogleImage = '../../../assets/images/google.png'
const FacebookImage = '../../../assets/images/facebook.png'
const TwitterImage = '../../../assets/images/twitter.png'

const RegisterScreenImageSrc = '../../../assets/registration.png'

const RegisterScreen = () => {
    const [date, setDate] = useState (new Date())
    const [open, setOpen] = useState(false)
    const [birthLabel, setBirthLabel] = useState('Data de Nascimento')

    return(
        <SafeAreaView
        style={{
            display: 'flex',
            justifyContent: 'center'
        }}  
        > 

        <ScrollView
        showsVerticalScrollIndicator= {false}
        style = {{
            paddingHorizontal: 25
        }}
        >
            <View style = {{
                alignItems: 'center'
            }}
            >
    <Image
    source={require(RegisterScreenImageSrc)}
    style={{
        height: 300,
        width: 300,
        transform: [
            {
                rotate: '-5deg'
            }
        ]
    }}
    >
    </Image>
            </View>
    <Text
    style= {{
        fontSize: 20,
        fontWeight:200 ,
        color:'#0000' ,
        marginBottom: 30

    }}
    > Registrar</Text>

    <View
        style={{
            flexDirection: 'row',
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
        <Text
        style={{
            textAlign: 'center',
            color:'#000',
            marginBottom: 30
        }}
        >
            Ou, Registre-se com o seu e-mail....
        </Text>

        <CustomInput
            label = {'E-Mail'}
            icon={
                <MaterialIcons
                    name='alternate-email'
                    size={20}
                    color='#cccccc'
                    style={{marginRight:5}}

                />
            }
            keyboardType={'email-address'}

        />
        <CustomInput
            label = {'Informe aqui o seu nome completo ...'}
            keyboardType={'default'}
        />

        <CustomInput
            label = {'Informe aqui o seu nome de usuario ...'}
            keyboardType={'default'}
        />

<CustomInput
            label = {'Informe sua Senha'}
            icon={
                <Entypo
                    name='key'
                    size={20}
                    color='#cccccc'
                    style={{marginRight:5}}
                />
            }
            InputType={'password'}
        />

        
<CustomInput
            label = {'Confirme a sua senha ...'}
            icon={
                <Entypo
                    name='key'
                    size={20}
                    color='#cccccc'
                    style={{marginRight:5}}
                />
            }
            InputType={'password'}
        />

        <View
        style={{
            flexDirection: 'row',
            borderBottomColor: '#000',
            borderBottomWidth: 1,
            paddingBottom: 8,
            paddingBottom: 30
        }}
        >
   <Entypo
                    name='calendar'
                    size={20}
                    color='#cccccc'
                    style={{marginRight:5}}
                />
                <TouchableOpacity onPress={()=> setOpen(true)}>
                    <Text
                    style={{
                        color:'#000',
                        marginLeft: 5,
                        marginTop: 5
                    }}
                    >
                    {birthLabel}
                  </Text>
                </TouchableOpacity>
                
        </View>
        <DateTimePickerModal
                    isVisible={open}
                    mode="date"
                    maximumDate={new Date('2010-12-31')}
                    minimumDate={new Date('1970-01-01')}
                    accessibilityLanguage="Protuguese"
                    onConfirm={date =>{
                        setOpen(false)
                        setDate(date)
                        setBirthLabel(date.toDateString())
                    }}
                    onCancel={()=>{
                        setOpen(false)
                    }
                    }
                />

                <CustomButtom label={'Registrar'} onPress={()=>{}}/>
                    <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'center',
                        marginBottom: 30

                    }}
                    >
                        <Text>Já possui cadastro?</Text>
                        <TouchableOpacity onPress={()=> {}}>
                        <Text
                        style={{
                            color:'#000',
                            fontWeight: '700'
                        }}
                        >
                            Login
                        </Text>

                        </TouchableOpacity>
                    </View>
        </ScrollView>

    

        </SafeAreaView>
    )
        
    
}

export default RegisterScreen


