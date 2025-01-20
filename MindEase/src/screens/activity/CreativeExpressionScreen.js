import React, { useRef, useState } from "react"
import { View, StyleSheet, PanResponder } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Svg, { Path } from "react-native-svg"
import FooterNavigation from "../../components/Footer"
import HeaderWithBackButton from "../../components/HeaderWithBackButton"
import DrawingToolbar from "../../components/DrawingToolbar"
import { globalStyles } from "../../styles/global"

const maxWidth = 375

const CreativeExpressionScreen = ({ navigation }) => {
  const [paths, setPaths] = useState([])
  const [currentPath, setCurrentPath] = useState(null)
  const [currentTool, setCurrentTool] = useState("pen")
  const [currentColor, setCurrentColor] = useState("#000000")
  const [currentWidth, setCurrentWidth] = useState(4)
  const [undoStack, setUndoStack] = useState([])

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event) => {
        console.log("INi adalah curr tool", currentTool)
        const { locationX, locationY } = event.nativeEvent
        const newPath = {
          d: `M ${locationX} ${locationY}`,
          stroke: currentTool === "eraser" ? "#AFAFAF" : currentColor,
          strokeWidth: currentTool === "eraser" ? 20 : currentWidth,
        }
        setCurrentPath(newPath)
        setPaths((prevPaths) => [...prevPaths, newPath])
      },
      onPanResponderMove: (event) => {
        const { locationX, locationY } = event.nativeEvent
        setCurrentPath((prevPath) => {
          const updatedPath = {
            ...prevPath,
            d: `${prevPath.d} L ${locationX} ${locationY}`,
          }
          setPaths((prevPaths) => prevPaths.map((p, index) => (index === prevPaths.length - 1 ? updatedPath : p)))
          return updatedPath
        })
      },
      onPanResponderRelease: () => {
        setCurrentPath(null)
        setUndoStack([])
      },
    }),
  ).current

  const handleToolChange = (tool) => {
    setCurrentTool(tool)
  }

  const handleUndo = () => {
    if (paths.length > 0) {
      const lastPath = paths[paths.length - 1]
      setPaths((prevPaths) => prevPaths.slice(0, -1))
      setUndoStack((prevStack) => [...prevStack, lastPath])
    }
  }

  const handleRedo = () => {
    if (undoStack.length > 0) {
      const pathToRedo = undoStack[undoStack.length - 1]
      setUndoStack((prevStack) => prevStack.slice(0, -1))
      setPaths((prevPaths) => [...prevPaths, pathToRedo])
    }
  }

  const handleClear = () => {
    setPaths([])
    setUndoStack([])
  }

  const handleColorChange = (color) => {
    setCurrentColor(() => {
      if (currentTool === "eraser") {
        setCurrentTool("pen");
      }
      console.log("Changing color to:", color);
      return color;
    });
  }

  const handleBackPress = () => {
    navigation.navigate("Activity")
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#505482", "#FFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={globalStyles.backgroundimage}
        >
          <HeaderWithBackButton title="Creative Emotional Expression" isWhite={true} onBackPress={handleBackPress} />
          <View style={styles.content}>
            <View style={styles.canvasContainer} {...panResponder.panHandlers}>
              <Svg height="100%" width="100%" style={styles.canvas}>
                {paths.map((path, index) => (
                  <Path key={index} d={path.d} stroke={path.stroke} strokeWidth={path.strokeWidth} fill="none" />
                ))}
              </Svg>
            </View>
            <DrawingToolbar
              currentTool={currentTool}
              onToolChange={handleToolChange}
              onUndo={handleUndo}
              onRedo={handleRedo}
              onClear={handleClear}
              currentColor={currentColor}
              onColorChange={handleColorChange}
            />
          </View>
          <FooterNavigation />
        </LinearGradient>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    maxWidth: maxWidth,
  },
  content: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  canvasContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  canvas: {
    backgroundColor: "white",
  },
})

export default CreativeExpressionScreen
