import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const chat = () => {
  return (
    <ScrollView contentContainerStyle={{flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 40, flexDirection: "column", justifyContent: "space-between"}}>
      <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <TouchableOpacity style={{width: 50, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 20, marginTop: 40, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
          <Image source={require("../assets/images/lef.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 50, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 20, marginTop: 40, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
          <Image source={require("../assets/images/lef.png")}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "column", gap: 30, alignItems: "center"}}>
        <Text style={{ fontSize: 40, textAlign: "center", fontWeight: "bold", color: "#757474" }}>BrainBox</Text>
        <View style={{backgroundColor: "#F7F7F8", height: 82, borderRadius: 14, justifyContent: "center", alignItems: "center"}}>
          <Text style={{ fontSize: 15, textAlign: "center", fontWeight: "medium", color: "#A0A0A5" }}>Remembers what user said 
          earlier in the conversation</Text>
        </View>
      </View>
      <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <TextInput placeholder='Search' style={{outline: "none", }} />
        <TouchableOpacity>
          <Image source={require("../assets/images/lef.png")}/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default chat