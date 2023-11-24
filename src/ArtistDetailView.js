import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getImage } from "./api-client";


export default class ArtistDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }

  componentDidMount() {
    const { name } = this.props.artist;
    getImage(name, (image) => this.setState({ image: image }));
  }
  render() {
    const { name, image, listeners, id, streamable } = this.props.artist;
    return (
      <View style={styles.container}>
      
        <View style={styles.info}>
          <View style={styles.header}>
            <Image
                style={styles.img}
                source={{ uri: this.state.image || image }}
                onError={(error) => console.error("Error al cargar la imagen", error)}
              />
              <Text style={styles.name}>{name}</Text>
          </View>
          
            <View style={styles.details}>
              <Text>
                <Text style={styles.tag}>Mbid:</Text> {id}
              </Text>
              <Text>
                <Text style={styles.tag}>Listeners: </Text> {listeners}
              </Text>
              <Text>
                <Text style={styles.tag}>Streamable: </Text> {streamable}
              </Text>
            </View> 
        
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#F0EFED",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  details: {
    height: 100,
    margin: 30,
    padding: 20,
    justifyContent:"center",
    borderRadius: 5,
    backgroundColor:"#FCF7EC",
    shadowColor: "#6F6650",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  tag: {
    fontWeight: "bold",
    fontSize: 16,
    margin: 15,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
