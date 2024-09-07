import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        aspectRatio: 3/1,
    },
    slide1: {
      flex: 1,
      aspectRatio: 3/1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      aspectRatio: 3/1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      aspectRatio: 3/1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
})

const Slide = () => {
  return (
    <section className="mt-8 overflow-hidden">
      <h2 className='text-xl font-bold px-6'>人気のブランド店</h2>
      <div className="mt-4">
        <Swiper style={styles.wrapper} showsButtons={true} loop={true} autoplay={true}>
            <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
            </View>
        </Swiper>
      </div>
    </section>
  )
}

export default Slide