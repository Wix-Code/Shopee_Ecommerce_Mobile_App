import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ask from './subpages/Ask';

const chat = () => {
  const loading = true;
  return (
    <ScrollView contentContainerStyle={{flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 40, flexDirection: "column", justifyContent: "space-between"}}>
      <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <TouchableOpacity style={{width: 50, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 20, marginTop: 40, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
          <Image source={require("../assets/images/lef.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 50, height: 50, justifyContent: "center", alignItems: "center", marginTop: 40 }}>
          <Image source={require("../assets/images/icon.png")}/>
        </TouchableOpacity>
      </View>
      {
        loading ? (<Ask />) : (<View style={{flexDirection: "column", gap: 10, alignItems: "center"}}>
          <Text style={{ fontSize: 40, textAlign: "center", fontWeight: "bold", color: "#757474", marginBottom: 50 }}>BrainBox</Text>
          <View style={{backgroundColor: "#F7F7F8", height: 82, borderRadius: 14, justifyContent: "center", alignItems: "center"}}>
            <Text style={{ fontSize: 15, textAlign: "center", fontWeight: "medium", color: "#A0A0A5" }}>Remembers what user said 
            earlier in the conversation</Text>
          </View>
          <View style={{backgroundColor: "#F7F7F8", height: 82, borderRadius: 14, justifyContent: "center", alignItems: "center"}}>
            <Text style={{ fontSize: 15, textAlign: "center", fontWeight: "medium", color: "#A0A0A5" }}>Remembers what user said 
            earlier in the conversation</Text>
          </View>
        </View>)
      }
      <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 50, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", paddingHorizontal: 10, borderRadius: 10, marginBottom: 40}}>
        <TextInput placeholder='Send a message.' style={{outline: "none", width: "100%", fontSize: 16, color: "#A3A3A8", }} />
        <TouchableOpacity>
          <Image source={require("../assets/images/Send.png")}/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default chat