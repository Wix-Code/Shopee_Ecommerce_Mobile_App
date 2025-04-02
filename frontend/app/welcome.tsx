import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const welcome = () => {
  return (
   <ScrollView contentContainerStyle={{backgroundColor: "#FFFFFF", flex: 1, paddingHorizontal: 40, flexDirection: "column", justifyContent: "flex-end", alignItems: "center", paddingBottom: 40, gap: 40}}>
      <Image source={require("../assets/images/Logo.png")}/>
      <View style={{flexDirection: "column", gap: 20}}>
        <Text style={{fontSize: 38, color: "#323142", fontWeight: "bold", marginBottom: 40, textAlign: "center"}} > Welcome to 
        BrainBox</Text>
        <TouchableOpacity style={{backgroundColor: "#141718", height: 65, borderRadius: 40, justifyContent: 'center', alignItems: "center"}}>
          <Link href="/auths/login" style={{fontSize: 16, color: "#F3F5F6", fontWeight: "medium", textAlign: "center"}}>Log in</Link>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "#E3E3E3", height: 65, borderRadius: 40, justifyContent: 'center', alignItems: "center"}}>
          <Link href="/auths/register" style={{fontSize: 16, color: "#B1B1B1", fontWeight: "medium", textAlign: "center"}}>Sign up</Link>
        </TouchableOpacity>
        <View style={{flexDirection: "row", alignItems: "center", gap: 5, justifyContent: "center" }}>
          <Text style={{ fontSize: 16, color: "#ACADB9", fontWeight: "medium" }}>Already have an account?</Text>
          <Link style={{ fontSize: 16, color: "#323142", fontWeight: "semibold" }} href="/auths/login">Sign In</Link>
        </View>
      </View>
      <View style={{width: "100%"}}>
        <Text style={{fontSize: 16, color: "#ACADB9", fontWeight: "medium", textAlign: "center"}}>Continue With Accounts</Text>
        <View style={{flexDirection: "row", width: "100%", gap: 10,  marginTop: 20}}>
          <TouchableOpacity style={{backgroundColor: "#ffd9d5", height: 57, borderRadius: 14, justifyContent: 'center', alignItems: "center", flex: 1}}>
            <Text style={{fontSize: 14, color: "#D44638", fontWeight: "semibold", textAlign: "center"}}>GOOGLE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: "#cedeff", height: 57, borderRadius: 14, justifyContent: 'center', flex: 1, alignItems: "center"}}>
            <Text style={{fontSize: 14, color: "#4267B2", fontWeight: "semibold", textAlign: "center"}}>FACEBOOK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default welcome