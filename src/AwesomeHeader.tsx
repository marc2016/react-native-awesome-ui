import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

interface AwesomeHeaderProps {
  iconId: string
  title: string
  subtitle?: string
  backgroundColors: string[]
  textColor: string
  iconColor: string
}

const AwesomeHeader = (props: AwesomeHeaderProps) => {
  const {
    subtitle,
    iconColor,
    iconId,
    title,
    textColor,
    backgroundColors,
  } = props

  if (backgroundColors.length === 1) {
    backgroundColors.push(backgroundColors[0])
  }

  return (
    <LinearGradient colors={backgroundColors} style={[styles.headerContainer]}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        {subtitle && (
          <Text style={[styles.subtitle, { color: textColor }]}>
            {subtitle}
          </Text>
        )}
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={iconId} size={40} color={iconColor} solid />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomRightRadius: 35,
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    justifyContent: 'center',
    marginTop: 12,
    marginStart: 20,
    marginBottom: 12,
  },
  iconContainer: {
    alignSelf: 'flex-end',
    borderRadius: 50,
    padding: 14,
  },
  title: {
    fontSize: 38,
    letterSpacing: 5,
    fontFamily:
      Platform.OS === 'ios' ? 'AppleSDGothicNeo-Thin' : 'sans-serif-thin',
  },
  subtitle: {
    fontSize: 20,
    fontFamily:
      Platform.OS === 'ios' ? 'AppleSDGothicNeo-Thin' : 'sans-serif-thin',
  },
})

export { AwesomeHeader, AwesomeHeaderProps }
