import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome =()=>{
    const router = useRouter();
    return(
    <View >
        <View style= {styles.container}>
            <Text style = {styles.userName}>Hi, John doe</Text>
            <Text style = {styles.welcomeMessage}>Good Morning</Text>
        </View>

        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput 
                style={styles.searchInput} 
                value = "" 
                onChange={()=>{}}
                placeholder="What are you looking for?"
                />
            </View>
            <TouchableOpacity style={styles.searchBtn}><Image source={icons.search} resizeModel="contain" style={styles.searchBtnImage}/></TouchableOpacity>
        </View>

    </View>
    )
}
export default Welcome;