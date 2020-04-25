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

interface AwesomeCardProps {
  iconId: string
  title?: string
  cardColor: string
  textColor?: string
  iconColor: string
  style?: StyleProp<ViewStyle>
  children?: string
  buttons?: AwesomeCardButton[]
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
    cardColor,

    style,
    children,
    buttons,
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

  const cardStyle = [
    style,
    styles.card,
    { backgroundColor: cardColor },
  ] as StyleProp<ViewStyle>

  return (
    <View style={cardStyle}>
      <View style={styles.headerContainer}>
        <FontAwesome5 name={iconId} size={28} color={iconColor} solid />
        <View style={styles.headerTextContainer}>
          <Text style={headerTitleStyle}>New documents</Text>
          {/* <Text style={headerSubtitleStyle}>TEST</Text> */}
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={textStyle}>{children}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {buttons?.map((value, index) => {
            return (
              <View>
                {buttons.length > 1 && index !== 0 && (
                  <View
                    style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}
                  ></View>
                )}
                <TouchableOpacity style={styles.button} onPress={value.onPress}>
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
    </View>
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
  button: {
    borderTopColor: 'white',
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

export { AwesomeCard, AwesomeCardProps }
