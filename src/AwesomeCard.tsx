import {
  View,
  Text,
  StyleSheet,
  Platform,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  TouchableWithoutFeedback,
} from 'react-native'
import React, { Children } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

type ButtonDirection = 'row' | 'column'

interface AwesomeCardProps {
  iconId: string
  title?: string
  cardColors: string[]
  textColor?: string
  iconColor: string
  style?: StyleProp<ViewStyle>
  children?: string
  buttons?: AwesomeCardButton[]
  buttonDirection?: ButtonDirection
}

interface AwesomeCardButton {
  iconId: string
  onPress: () => void
}

const AwesomeCard = (props: AwesomeCardProps) => {
  const {
    iconColor,
    iconId,
    title,
    textColor,
    cardColors,

    style,
    children,
    buttons,
    buttonDirection,
  } = props

  const headerTitleStyle = [
    styles.headerTitle,
    { color: textColor },
  ] as StyleProp<TextStyle>
  const headerSubtitleStyle = [
    styles.headerSubtitle,
    { color: textColor },
  ] as StyleProp<TextStyle>
  const textStyle = [styles.text, { color: textColor }] as StyleProp<TextStyle>

  const cardStyle = [style, styles.card] as StyleProp<ViewStyle>

  const mainContainerStyle = [
    styles.mainContainer,
    { flexDirection: buttonDirection === 'row' ? 'column' : 'row' },
  ] as StyleProp<ViewStyle>

  let buttonContainerStyle = [styles.buttonContainer] as StyleProp<ViewStyle>
  let buttonStyle = [styles.button] as StyleProp<ViewStyle>
  let buttonSeperatorStyle = [styles.buttonSeperator] as StyleProp<ViewStyle>

  if (buttonDirection === 'row') {
    buttonContainerStyle = [
      styles.buttonContainer,
      { flexDirection: 'row' },
    ] as StyleProp<ViewStyle>
    buttonSeperatorStyle = [
      styles.buttonSeperator,
      { borderLeftWidth: 1, borderLeftColor: 'white' },
    ] as StyleProp<ViewStyle>
  } else {
    buttonContainerStyle = [
      styles.buttonContainer,
      { flexDirection: 'column' },
    ] as StyleProp<ViewStyle>
    buttonSeperatorStyle = [
      styles.buttonSeperator,
      { borderBottomWidth: 1, borderBottomColor: 'white' },
    ] as StyleProp<ViewStyle>
  }

  const cardColorsInternal = cardColors
  if (cardColorsInternal.length === 1) {
    cardColorsInternal.push(cardColors[0])
  }

  return (
    <LinearGradient colors={cardColors} style={cardStyle}>
      <View style={styles.headerContainer}>
        <FontAwesome5 name={iconId} size={28} color={iconColor} solid />
        <View style={styles.headerTextContainer}>
          <Text style={headerTitleStyle}>New documents</Text>
          {/* <Text style={headerSubtitleStyle}>TEST</Text> */}
        </View>
      </View>
      <View style={mainContainerStyle}>
        <View style={styles.textContainer}>
          <Text style={textStyle}>{children}</Text>
        </View>
        <View style={buttonContainerStyle}>
          {buttons?.map((value, index) => {
            return (
              <View
                style={{
                  flexDirection: buttonDirection === 'row' ? 'row' : 'column',
                }}
              >
                {buttons.length > 1 && index !== 0 && (
                  <View style={buttonSeperatorStyle}></View>
                )}
                <TouchableOpacity style={buttonStyle} onPress={value.onPress}>
                  <FontAwesome5
                    name={value.iconId}
                    size={25}
                    color={iconColor}
                    solid
                  />
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
  },
  mainContainer: { flexDirection: 'row' },
  buttonContainer: {
    justifyContent: 'flex-end',
    marginLeft: 8,
  },
  buttonSeperator: {},
  button: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 10,
    paddingLeft: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingLeft: 15,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  headerTextContainer: {
    justifyContent: 'center',
    marginStart: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontFamily:
      Platform.OS === 'ios' ? 'AppleSDGothicNeo-Thin' : 'sans-serif-thin',
  },
  headerSubtitle: {
    fontFamily:
      Platform.OS === 'ios' ? 'AppleSDGothicNeo-Thin' : 'sans-serif-thin',
  },
  textContainer: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    flexShrink: 1,
  },
  text: {
    textAlign: 'justify',
    fontFamily:
      Platform.OS === 'ios' ? 'AppleSDGothicNeo-Thin' : 'sans-serif-thin',
    fontSize: 20,
    flex: 1,
  },
})

export { AwesomeCard, AwesomeCardProps, ButtonDirection }
