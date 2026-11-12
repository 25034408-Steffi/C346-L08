
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const Boat = ({ name, description, picture, icon_name, icon_color }) => {
    return (
        <View style={styles.boatContainer}>
            
            <Image
                source={picture}
                style={styles.image}
                />

            <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                    {name}
                    </Text>
                    <FontAwesome6
                        name={icon_name}
                        color={icon_color}
                        size={20}
                    />
                </View>
                    <Text style={styles.description}>
                        {description}
                    </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boatContainer: {
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)'
    },
    textContainer: {
        paddingHorizontal: 15,
        paddingBottom: 20
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 8,
    },
    title: {
        fontSize: 20,
        color: '#1A1A1A',
        fontWeight: 'bold'
    },
    description: {
        color: '#333333',
        marginTop: 5
    },
    image: {
        width: '100%',
        height: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
});

export default Boat;