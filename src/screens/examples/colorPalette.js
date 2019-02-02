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
  const { neutral, primary, secundary, accent } = variables.colors;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
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
      <View style={styles.card}>
        <Text style={styles.title}>Primary Palette</Text>
        <ScrollView contentContainerStyle={styles.content} horizontal>
          {Object.keys(primary).map((index) => {
            const isLight = color(primary[index]).isLight() ? styles.text_BLACK : styles.text_LIGHT;
            return (
              <View key={index} style={[styles.box, { backgroundColor: primary[index] }]}>
                <Text style={[styles.box__text, isLight]}>{index}</Text>
                <Text style={[styles.box__text, isLight]}>{primary[index]}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Secundary Palette</Text>
        <ScrollView contentContainerStyle={styles.content} horizontal>
          {Object.keys(secundary).map((index) => {
            const isLight = color(secundary[index]).isLight() ? styles.text_BLACK : styles.text_LIGHT;
            return (
              <View key={index} style={[styles.box, { backgroundColor: secundary[index] }]}>
                <Text style={[styles.box__text, isLight]}>{index}</Text>
                <Text style={[styles.box__text, isLight]}>{secundary[index]}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Accent Palette</Text>
        <ScrollView contentContainerStyle={styles.content} horizontal>
          {Object.keys(accent).map((index) => {
            const isLight = color(accent[index]).isLight() ? styles.text_BLACK : styles.text_LIGHT;
            return (
              <View key={index} style={[styles.box, { backgroundColor: accent[index] }]}>
                <Text style={[styles.box__text, isLight]}>{index}</Text>
                <Text style={[styles.box__text, isLight]}>{accent[index]}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  )
};

export default ColorPalette;