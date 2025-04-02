import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ask = () => {
  const loader = true
  return (
    <View>
      <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
        <Image source={require("../../assets/images/im.png")} />
        <Text style={{color: "#2F2F2F", fontSize: 14}}>Explain quantum computing in simple terms</Text>
        <Image source={require("../../assets/images/copy.png")}/>
      </View>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Image source={require("../../assets/images/log.png")}/>
          <View style={{flexDirection: "row", gap: 10}}>
            <Image source={require("../../assets/images/copy.png")}/>
            <Image source={require("../../assets/images/share.png")}/>
          </View>
        </View>
        <Text style={{color: "#494949", fontSize: 12, fontWeight: "medium", marginTop: 20}}>As an AI, I don't have real-time access to IMDb's rankings, and my
          training only goes up until September 2021. However, I can provide
          you with a list of critically acclaimed movies that were highly rated
          at that time. Please note that opinions on the "best" movies can
          vary, and IMDb ratings may change over time. Here are ten
          highly regarded films as of September 2021:

          "The Shawshank Redemption" (1994) - Directed by Frank Darabont.
          "The Godfather" (1972) - Directed by Francis Ford Coppola.
          "The Godfather: Part II" (1974) - Directed by Francis Ford Coppola.
          "The Dark Knight" (2008) - Directed by Christopher Nolan.
          "Pulp Fiction" (1994) - Directed by Quentin Tarantino.
          "Schindler's List" (1993) - Directed by Steven Spielberg.
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 40 }}>
        {loader ? (<TouchableOpacity style={{flexDirection: "row", alignItems: "center", justifyContent: "center" ,gap: 10, borderColor: "#CCCCCC", borderWidth: 1, height: 48, width: 186, borderRadius: 14, paddingHorizontal: 10}}>
          <Image source={require("../../assets/images/rec.png")}/>
          <Text style={{color: "#616161", fontSize: 13, fontWeight: "medium"}}>Stop generating...</Text>
        </TouchableOpacity>) :
        (<TouchableOpacity style={{flexDirection: "row", alignItems: "center", gap: 10, borderColor: "#CCCCCC", borderWidth: 1, height: 48, width: 186, borderRadius: 14, justifyContent: "center", paddingHorizontal: 10}}>
          <Image source={require("../../assets/images/compare.png")}/>
          <Text style={{color: "#616161", fontSize: 13, fontWeight: "medium"}}>Regenerate Response</Text>
        </TouchableOpacity>)}

      </View>
    </View>
  )
}

export default ask