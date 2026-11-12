import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import Boat from "./components/Boat";

class AllBoats extends React.Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>

                  <Text style={styles.heading}>
                      GetABoat - For Sale
                  </Text>
               
                  <Boat
                      name='Sea Ray 500 Sundancer'
                      description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'
                      picture={require("./img/sea_ray.jpg")}
                      icon_name="sailboat"
                      icon_color="grey"
                  />

                <Boat
                    name='Four Winns Horizon 180'
                    description='A sporty look and refined details truly set the Horizon 180 above all others.'
                    picture={require("./img/four_winns.jpg")}
                    icon_name="bolt-lightning"
                    icon_color="blue"
                    />
        
                    <Boat
                    name='Flipper 640 ST'
                    description='A modern take on the classic, traditional hardtop and perfect for a family picnic.'
                    picture={require("./img/flipper.jpg")}
                    icon_name="sailboat"
                    icon_color="grey"
                />
 

                <Boat
                    name='Princess V48'
                    description='There is the option for an open design with a full-length cockpit and sunroof,
                    or the enclosed deck saloon model, available with the option of a climate controlled interior.'
                    picture={require("./img/princess.jpg")}
                    icon_name="bolt-lightning"
                    icon_color="blue"
                    />
      
                <Boat
                    name='Bayliner 175 Bowrider'
                    description='Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'
                    picture={require("./img/bayliner.jpg")}
                    icon_name="sailboat"
                    icon_color="grey"
                />

                <Boat
                    name='Fairline Targa 47'
                    description='Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'
                    picture={require("./img/fairline.jpg")}
                    icon_name="bolt-lightning"
                    icon_color="blue"
                />
            </ScrollView>

        )
    }
}


const styles = StyleSheet.create({
    container: {
      padding: 20
    },
  
    heading: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#1E3A5F',
      textAlign: 'center',
      marginBottom: 25,
      marginTop: 40
  }
})
export default AllBoats;
