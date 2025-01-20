import React, { useState } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Pencil, Eraser, Trash2, Undo2, Redo2, Palette } from "lucide-react-native"
import ColorPicker from "./ColorPicker"

const DrawingToolbar = ({ currentTool, onToolChange, onUndo, onRedo, onClear, currentColor, onColorChange }) => {
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false)

  return (
    <View style={styles.toolbar}>
      <TouchableOpacity style={styles.tool} onPress={onUndo}>
        <Undo2 size={24} color="#666" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tool, currentTool == "pen" && styles.activeTool]}
        onPress={() => onToolChange("pen")}
      >
        <Pencil size={24} color={currentTool == "pen" ? "#505482" : "#666"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tool, currentTool == "eraser" && styles.activeTool]}
        onPress={() => onToolChange("eraser")}
      >
        <Eraser size={24} color={currentTool == "eraser" ? "#505482" : "#666"} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tool} onPress={onRedo}>
        <Redo2 size={24} color="#666" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tool} onPress={() => setIsColorPickerVisible(true)}>
        <Palette size={24} color="#666" />
        <View style={[styles.currentColor, { backgroundColor: currentColor }]} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tool} onPress={onClear}>
        <Trash2 size={24} color="#666" />
      </TouchableOpacity>

      <ColorPicker
        isVisible={isColorPickerVisible}
        onClose={() => setIsColorPickerVisible(false)}
        onColorChange={onColorChange}
        currentColor={currentColor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tool: {
    padding: 8,
    borderRadius: 4,
    position: "relative",
  },
  activeTool: {
    backgroundColor: "#F0F0F0",
  },
  currentColor: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#DDD",
  },
})

export default DrawingToolbar

