import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const reset = () => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: "#FFFFFF", flex: 1, paddingHorizontal: 40, flexDirection: "column", justifyContent: "space-between", paddingBottom: 40}}>
      <TouchableOpacity style={{width: 50, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 20, marginTop: 40, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <Image source={require("../../assets/images/lef.png")}/>
      </TouchableOpacity>
      <View style={{flexDirection: "column", gap: 20}}>
        <Text style={{fontSize: 38, color: "#323142", fontWeight: "bold", marginBottom: 40}}>Enter Your Phone
        Number</Text>
        <View style={{flexDirection: "row", gap: 10, alignItems: "center", height: 65, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", paddingHorizontal: 20, borderRadius: 14}}>
          <Image source={require("../../assets/images/lo.png")}/>
          <TextInput style={{fontSize: 14, color: "#C2C3CB", fontWeight: "medium", outline: "none", width: "100%"}} placeholder='Phone Number'/>
        </View>
        <TouchableOpacity style={{backgroundColor: "#141718", height: 65, borderRadius: 14, justifyContent: 'center', alignItems: "center"}}>
          <Text style={{fontSize: 16, color: "#F3F5F6", fontWeight: "medium", textAlign: "center"}}>Verification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "#E3E3E3", height: 65, borderRadius: 14, justifyContent: 'center', alignItems: "center"}}>
          <Text style={{fontSize: 16, color: "#B1B1B1", fontWeight: "medium", textAlign: "center"}}>Later</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default reset