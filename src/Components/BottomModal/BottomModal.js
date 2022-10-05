import React from "react";
import { View, Text, Modal, TouchableWithoutFeedback } from "react-native";
import { width } from "react-native-dimension";

export default class BottomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  renderOutSideTouchable = (onTouch) => {
    //console.log('hhh',this.props)
    const view = <View style={{ flex: 1, width: "100%" }} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={this.closePopUp}
        style={{ flex: 1, width: "100%" }}
      >
        {view}
      </TouchableWithoutFeedback>
    );
  };

  showPopUp = () => {
    this.setState({ show: true });
  };
  closePopUp = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.state.show}
        onRequestClose={this.closePopUp}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#000000AA",
            justifyContent: "flex-end",
          }}
        >
          {this.renderOutSideTouchable(this.props.onTouchOutsideClose)}
          <View
            style={{
              backgroundColor: "#FDFAF6",
              width: "100%",
              borderTopStartRadius: width(7),
              borderTopEndRadius: width(7),
              backgroundColor: "#27447A",
              //paddingHorizontal:,
              height: this.props.low && this.props.low == true ? "28%" : "35%",
            }}
          >
            {this.props.renderContentComponent}
          </View>
        </View>
      </Modal>
    );
  }
}
