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
  outlineOnly?: boolean
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

    outlineOnly,
    style,
    children,
    buttons,
    buttonDirection,
  } = props

  const headerTitleStyle = [
    styles.headerTitle,
    { color: textColor },
  ] as StyleProp<TextStyle>

  const headerContainerStyle = [
    styles.headerContainer,
    { borderBottomColor: outlineOnly ? cardColors[0] : 'white' },
  ] as StyleProp<ViewStyle>

  const textStyle = [styles.text, { color: textColor }] as StyleProp<TextStyle>

  const cardStyle = [style, styles.card] as StyleProp<ViewStyle>
  const cardOutlineStyle = [
    style,
    styles.cardOutline,
    { borderWidth: 1, borderColor: cardColors[0] },
  ] as StyleProp<ViewStyle>

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
      {
        borderLeftWidth: 1,
        borderLeftColor: outlineOnly ? cardColors[0] : 'white',
      },
    ] as StyleProp<ViewStyle>
  } else {
    buttonContainerStyle = [
      styles.buttonContainer,
      { flexDirection: 'column' },
    ] as StyleProp<ViewStyle>
    buttonSeperatorStyle = [
      styles.buttonSeperator,
      {
        borderBottomWidth: 1,
        borderBottomColor: outlineOnly ? cardColors[0] : 'white',
      },
    ] as StyleProp<ViewStyle>
  }

  const cardColorsInternal = cardColors
  if (cardColorsInternal.length === 1) {
    cardColorsInternal.push(cardColors[0])
  }

  const contentHeader = (
    <View style={headerContainerStyle}>
      <FontAwesome5 name={iconId} size={28} color={iconColor} solid />
      <View style={styles.headerTextContainer}>
        <Text style={headerTitleStyle}>{title}</Text>
      </View>
    </View>
  )

  const contentMain = (
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
  )

  return (
    <View>
      {outlineOnly ? (
        <View style={cardOutlineStyle}>
          {contentHeader}
          {contentMain}
        </View>
      ) : (
        <LinearGradient colors={cardColors} style={cardStyle}>
          {contentHeader}
          {contentMain}
        </LinearGradient>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  cardOutline: {
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
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
    paddingTop: 10,
    paddingBottom: 8,
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
