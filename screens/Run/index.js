import React,{ useState} from "react";
import { View, Text, Pressable,TextInput } from "react-native";
import { Avatar } from "react-native-elements";
import { validateInput } from "../../constants/validation";
import styles from "./styles";
const RunScreen = () => {

    //helper function for  validators
    const [metricValue, setMetricValue] =useState('0.1')
    

    const changeMetricValueHandler =input =>{
        if (validateInput(input)){
        setMetricValue(input);
        }
        
    };


  return (
    <View
      style={{
        height: "100%",
        with: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 48,
      }}
    >
      
      <Pressable onPress={() => console.warn("Open")}>

        <TextInput style={styles.metricValue} 
        keyboardType="decimal-pad"
         value = {metricValue}
         onChangeText={ changeMetricValueHandler }
         />


        <Text style={{ alignSelf: "center", fontSize: 16 }}>Kilometro</Text>
      </Pressable>
      <View style={{
          justifyContent: "space-between",
          alignItems: "center",
      }}>
      <Avatar
        size ={100}
        activeOpacity={0.7}
        rounded
        title = "START"
        onPress={()=> console.warn('works')}
        titleStyle={{fontSize: 22, color:'#000', fontWeight:'bold'}}
        containerStyle={{backgroundColor: '#fe9836'}}
      />
      <Pressable onPress={() => console.warn("togglin")} 
      style={{
          padding:8,
          borderWidth:1, 
          borderRadius:28,
          borderColor: '#ccc',
          marginTop:28  ,
    }} >
        {/* Pressable  button*/}
        <Text style={{fontSize:14, fontWeight:'bold' }}>distance</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default RunScreen;
