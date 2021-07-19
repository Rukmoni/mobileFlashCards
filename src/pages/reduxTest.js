import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import { setDecks,getDecksfromApi } from "../reduxStore/decksSlice";
import { State } from "../reduxStore/store";
/**
 * version 1: use mapDispatchToProps to access bound action creators
 */

// needed for typescript only
// the component needs to know about the props that get added via `connect` in order to access them
/* interface ReduxTest {
  increment: () => void;
  decrement: () => void;
  count: number;
}
 */
class ReduxTest extends React.Component{
  render() {
    return (
      <View>
     <Text>State:{this.props.count.decks.length}</Text>
        <TouchableOpacity onPress={() => this.props.getDecksfromApi()}>
      <Text>ReduxTest</Text>
      </TouchableOpacity>
        
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.decks
});

export default connect(mapStateToProps, { getDecksfromApi })(ReduxTest);
