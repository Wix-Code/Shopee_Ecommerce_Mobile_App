import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const login = () => {
  return (
    <ScrollView contentContainerStyle={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 20
    }}>
      <View style={{width: "100%", flexDirection: "column", gap: 30}}>
        <Text style={{fontSize: 52, fontWeight: "bold", color: "#202020"}}>Login</Text>
        <View style={{alignItems: "center", gap: 10, display: "flex", flexDirection: "row"}}>
          <Text style={{fontSize: 18, color: "#202020"}}>Good to see you back!</Text>
          <Image source={require("../../assets/images/heart.png")} />
        </View>
        <TextInput placeholder='email' style={{backgroundColor: "#F8F8F8", paddingHorizontal: 20, height: 52, outline: "none", borderRadius: 50, color: "#D2D2D2", fontSize: 14}} />
        <TouchableOpacity style={{backgroundColor: "#004CFF", justifyContent: "center", alignItems: "center", height: 60, borderRadius: 14}}>
          <Text style={{color: "#F3F3F3", fontSize: 18}}>Next</Text>
        </TouchableOpacity>
        <Text style={{color: "#202020", fontSize: 18, textAlign: "center"}}>Cancel</Text>
      </View>
    </ScrollView>
  )
}

export default login