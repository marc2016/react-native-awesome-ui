import {
  View,
  Text,
  StyleSheet,
  Platform,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

interface AwesomeButtonProps {
  iconId: string
  title?: string
  buttonColors: string[]
  dotColor: string
  textColor?: string
  iconColor: string
  style?: StyleProp<ViewStyle>
  onPress?: () => {}
}

const AwesomeButton = (props: AwesomeButtonProps) => {
  const {
    iconColor,
    iconId,
    title,
    textColor,
    buttonColors,
    dotColor,
    onPress,
    style,
  } = props

  const buttonContainerStyle = [style, styles.buttonContainer]

  const iconContainerStyle = [
    styles.iconContainer,
    { backgroundColor: dotColor },
  ]

  const titleStyle = [styles.title, { color: textColor }] as StyleProp<
    TextStyle
  >

  if (buttonColors.length === 1) {
    buttonColors.push(buttonColors[0])
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient style={buttonContainerStyle} colors={buttonColors}>
        <Text style={titleStyle}>{title}</Text>
        <View style={iconContainerStyle}>
          <FontAwesome5
            name={iconId}
            size={20}
            color={iconColor}
            solid
            style={styles.icon}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {},
  icon: {
    textAlign: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'red',
    borderRadius: 50,
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    flexGrow: 1,

    fontSize: 30,

    fontFamily:
      Platform.OS === 'ios' ? 'AppleSDGothicNeo-Thin' : 'sans-serif-thin',
  },
})

export { AwesomeButton, AwesomeButtonProps }
