import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Link } from 'expo-router'

const onboard1 = () => {
  return (
    <ScrollView style={{height: "100%", flex: 1, backgroundColor: "#FFFFFF"}} >
      <View style={{flexDirection: "column", gap: 20, justifyContent: "center", alignItems: "center", margin: 40}}>
        <Link href="/auths/register" style={{color: "#D7D7D7", fontSize: 18, fontWeight: "semibold", textAlign: "right"}}>Skip</Link>
        <Image source={require("../assets/images/ig1.png")}/>
        <Image source={require("../assets/images/sl.png")} />
        <Text style={{color: "#23262F", fontSize: 34, fontWeight: "bold", textAlign: "center"}}>Chat With Your
          Favourite Ai</Text>
        <Text style={{color: "#8E9295", fontSize: 16, textAlign: "center",lineHeight: 26}}>Chat with the smartest AI Future Experience power of AI with us</Text>
        <View style={{flexDirection: "row", gap: 10, paddingHorizontal: 15, borderRadius: 14, justifyContent: "space-between", alignItems: "center",  boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px", height: 64, width: 154}}>
          <Link href="/"><Image source={require("../assets/images/lin.png")} /></Link>
          <Image source={require("../assets/images/line.png")} />
          <Link href="/onboard"><Image source={require("../assets/images/lie.png")} /></Link>
        </View>
      </View>
    </ScrollView>
  )
}

export default onboard1