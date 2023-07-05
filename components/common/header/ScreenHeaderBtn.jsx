import React from "react";
import { View , Text,Image, TouchableOpacity } from "react-native";

import styles from "./screenheader.style.js";

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress})=>{
    return(
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image
             source={iconUrl}
             resizeModel="cover"
             style={styles.btnImg(dimension)}/>
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn;