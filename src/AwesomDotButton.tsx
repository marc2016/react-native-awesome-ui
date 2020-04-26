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

interface AwesomeDotButtonProps {
  iconId: string
  title?: string
  dotColors: string[]
  textColor?: string
  iconColor: string
  size?: number
  width?: number
  onPress?: () => {}
}

const AwesomeDotButton = (props: AwesomeDotButtonProps) => {
  const {
    iconColor,
    iconId,
    title,
    textColor,
    dotColors,
    size,
    onPress,
    width,
  } = props
  const newSize = size ?? 40
  const dotSize = newSize + 30
  const newWidth = width ?? dotSize * 2

  const dotButtonStyle = [
    styles.dotButton,
    { height: dotSize, width: dotSize },
  ] as StyleProp<ViewStyle>

  const buttonContainerStyle = [
    styles.buttonContainer,
    { width: dotSize },
  ] as StyleProp<ViewStyle>

  const titleStyle = [
    styles.title,
    { color: textColor, fontSize: 18, marginHorizontal: (dotSize / 2) * -1 },
  ] as StyleProp<TextStyle>

  if (dotColors.length === 1) {
    dotColors.push(dotColors[0])
  }

  return (
    <View style={buttonContainerStyle}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={dotColors} style={dotButtonStyle}>
          <FontAwesome5 name={iconId} size={newSize} color={iconColor} solid />
        </LinearGradient>
        <Text style={titleStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  dotButton: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {},
  buttonContainer: {
    overflow: 'visible',
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 5,
    flexWrap: 'nowrap',
    fontFamily:
      Platform.OS === 'ios' ? 'AppleSDGothicNeo-Thin' : 'sans-serif-thin',
  },
})

export { AwesomeDotButton, AwesomeDotButtonProps }
