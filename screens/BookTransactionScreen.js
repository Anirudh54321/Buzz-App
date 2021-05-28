import React from'react';
import{Text,View,TouchableOpacity,StyleSheet} from'react-native';
import*as Permissions from'expo-permissions'
import{BarCodeScanner} from'expo-barcode-scanner'
export default class TransactionScreen extends React.Component{
    constructor(){
        super(
          this.state = {
            hasCameraPermissions: null,
             scanned: false,
              scannedData: '', 
              buttonState: 'normal'
          }  
        )
    }
    render(){
        return(
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Issue Or Return</Text>
            </View>
        )
    }
}