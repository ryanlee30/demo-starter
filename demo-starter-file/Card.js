import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Video } from "expo-av";

const Card = ({ card }) => {
  const [videoIndex, setVideoIndex] = useState(0);
  const changeVideo = () => {
    setVideoIndex((videoIndex + 1) % 3);
  };

  return (
    <TouchableWithoutFeedback onPress={changeVideo}>
      <View style={styles.card}>
        <Video
          source={{uri: card.videos[videoIndex]}}
          isMuted={true}
          shouldPlay
          isLooping
          resizeMode="cover"
          style={styles.cardVideo}
        /> 
        <Text style={styles.txt}> {card.name} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 0.9,
    borderRadius: 20,
    shadowRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#B1D0E0",
    backgroundColor: "#CEE5D0",
  },
  cardVideo: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    flex: 1.0,
    resizeMode: "contain",
    backgroundColor: "#000",
  },
  txt: {
    position: "absolute",
    top: 0,
    paddingTop: 15,
    width: 200,
    height: 100,
    fontWeight: "bold",
    fontSize: 40,
    color: "#AEFEFF",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowRadius: 20
  },
});
