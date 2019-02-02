import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Color from 'color';
import variables from '../../theme/variables';

const styles = StyleSheet.create({
  container: {},
  title: {},
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    padding: variables.gap.md,
    marginBottom: variables.gap.md,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  box: {
    alignContent: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    margin: variables.gap.sm,
  },
  box__text: {
    textAlign: 'center',
  },
  text_LIGHT: {
    color: 'white',
  },
  text_BLACK: {
    color: 'black',
  },
});

const ColorPalette = () => {
  const { colors } = variables;
  return (
    <View style={styles.container}>
    {Object.keys(colors).map((color) => (
      <View key={color} style={styles.card}>
        <Text style={styles.title}>{`${color.toUpperCase()} Palette`}</Text>
        <ScrollView contentContainerStyle={styles.content} horizontal>
          {Object.keys(colors[color]).map((index) => {
            const isLight = Color(colors[color][index]).isLight() ? styles.text_BLACK : styles.text_LIGHT;
            return (
              <View key={index} style={[styles.box, { backgroundColor: colors[color][index] }]}>
                <Text style={[styles.box__text, isLight]}>{index}</Text>
                <Text style={[styles.box__text, isLight]}>{colors[color][index]}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    ))}
    </View>
  )
};

export default ColorPalette;