import React, {useContext, useState} from 'react'

import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Input, Text} from "react-native-elements";
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";

const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(state);

    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
        />
        <Spacer/>
        <Input
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
        />
        {state.errorMessage ? <Text
            style={styles.errorMessage}>{state.errorMessage}</Text> : null}
        <Spacer>
            <Button title="Sign Up"
                    onPress={() => signup({email, password})}/>
        </Spacer>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Spacer>
                <Text style={styles.link}>Already have an account? Sign in instead</Text>
            </Spacer>
        </TouchableOpacity>
    </View>
};

SignupScreen.navigationOptions = () => {
    return {
        header: () => null,
    }
}

const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
    },
    link:{
        color: 'blue',
    }

})

export default SignupScreen;
