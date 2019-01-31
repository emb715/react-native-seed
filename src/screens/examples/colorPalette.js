import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import color from 'color';
import variables from '../../theme/variables';

const styles = StyleSheet.create({
  container: {
    padding: variables.gap.md,
  },
  title: {},
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    alignContent: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    margin: variables.gap.sm,
    // backgroundColor: variables.colors.neutral[500],
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
  const { neutral } = variables.colors;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Neutral Palette</Text>
      <ScrollView contentContainerStyle={styles.content} horizontal>
        {Object.keys(neutral).map((index) => {
          const isLight = color(neutral[index]).isLight() ? styles.text_BLACK : styles.text_LIGHT;
          return (
            <View key={index} style={[styles.box, { backgroundColor: neutral[index] }]}>
              <Text style={[styles.box__text, isLight]}>{index}</Text>
              <Text style={[styles.box__text, isLight]}>{neutral[index]}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  )
};

export default ColorPalette;