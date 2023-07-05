import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./card.style";

const Card = ({imgPath, imgTitle}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <TouchableOpacity style={styles.logoContainer}>
            <Image source={imgPath} style={styles.logoImage}/>
        </TouchableOpacity>
        <View style={styles.infoWrapper}>
            <Text style={styles.name}>{imgTitle} </Text>
        </View>
    </TouchableOpacity>

  )
}

export default Card;