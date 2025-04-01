import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 40, flexDirection: "column", justifyContent: "space-between"}}>
      <TouchableOpacity style={{width: 50, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 20, marginTop: 40, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <Image source={require("../assets/images/lef.png")}/>
      </TouchableOpacity>
      <View style={{justifyContent: "center", flexDirection: "column", gap: 40, display: "flex", alignItems: "center"}}>
        <Image source={require("../assets/images/Logo.png")}/>
        <Text style={{fontSize: 40, textAlign: "center", fontWeight: "bold", color: "#141718"}}> Welcome to 
          BrainBox</Text>
        <Text style={{fontSize: 18,textAlign: "center", color: "#616161", lineHeight: 30}}>Start chatting with ChattyAI now.
        You can ask me anything.</Text>
      </View>
      <View style={{width: "100%", marginBottom: 60}}>
        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#141718", height: 62, borderRadius: 18}}>
          <Text style={{fontSize: 15, color: "#FFFFFF"}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default home