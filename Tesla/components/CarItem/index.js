import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from './style'
import StyledButtons from '../StyledButtons'

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require("../../assets/Images/ModelS.jpeg")}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subTitle}>Starting at $69,480</Text>
            </View>

            <StyledButtons type="primary" content="Custom Order"/>
            <StyledButtons type="secondry" content="Existing Inventory"/>
        </View>
    );
};

export default CarItem;
