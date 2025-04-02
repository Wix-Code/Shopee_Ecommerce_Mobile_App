import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signup = () => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: "#FFFFFF", flex: 1, paddingHorizontal: 40, flexDirection: "column", justifyContent: "space-between", paddingBottom: 40}}>
      <TouchableOpacity style={{width: 50, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 20, marginTop: 40, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <Image source={require("../../assets/images/lef.png")}/>
      </TouchableOpacity>
      <View style={{flexDirection: "column", gap: 20}}>
        <Text style={{fontSize: 38, color: "#323142", fontWeight: "bold", marginBottom: 40}} >Create your
          Account</Text>
        <View style={{flexDirection: "row", paddingHorizontal: 20, gap: 10, alignItems: "center", height: 65, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: 14}}>
          <Image source={require("../../assets/images/user.png")}/>
          <TextInput style={{fontSize: 14, color: "#C2C3CB", fontWeight: "medium", outline: "none", width: "100%"}} placeholder='Fullname'/>
        </View>
        <View style={{flexDirection: "row", gap: 10, alignItems: "center", height: 65, paddingHorizontal: 20, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: 14}}>
          <Image source={require("../../assets/images/email.png")}/>
          <TextInput style={{fontSize: 14, color: "#C2C3CB", fontWeight: "medium", outline: "none", width: "100%"}} placeholder='Enter Your Email'/>
        </View>
        <View style={{flexDirection: "row", gap: 10, alignItems: "center", height: 65, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", paddingHorizontal: 20, borderRadius: 14}}>
          <Image source={require("../../assets/images/lo.png")}/>
          <TextInput style={{fontSize: 14, color: "#C2C3CB", fontWeight: "medium", outline: "none", width: "100%"}} placeholder='Password'/>
        </View>
        <TouchableOpacity style={{backgroundColor: "#141718", height: 65, borderRadius: 14, justifyContent: 'center', alignItems: "center"}}>
          <Text style={{fontSize: 16, color: "#F3F5F6", fontWeight: "medium", textAlign: "center"}}>Register</Text>
        </TouchableOpacity>
        <View style={{flexDirection: "row", alignItems: "center", gap: 5, justifyContent: "center" }}>
          <Text style={{ fontSize: 16, color: "#ACADB9", fontWeight: "medium" }}>Already have an account?</Text>
          <Link style={{ fontSize: 16, color: "#323142", fontWeight: "semibold" }} href="/auths/login">Sign In</Link>
        </View>
      </View>
      <View>
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

export default signup