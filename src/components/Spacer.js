import React from 'react'
import {View, StackView, StyleSheet} from "react-native";
import AccountScreen from "../screens/AccountScreen";

const Spacer = ({children})=>{
    return <View style={styles.spacer}>{children}</View>
};
const styles = StyleSheet.create({
    spacer: {
        margin: 15,
    }
})

export default Spacer;

