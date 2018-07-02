import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// export all action creators as actions from index.js under actions folder
import * as actions from '../actions';

class ListItem extends Component {

  //const { titleStyle } = styles;
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;
    const selectedLibraryId = this.props.selectedLibraryId;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)} >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>;
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state) => {
  // will add { selectedLibraryId: state.selectedLibraryId } to props
  return { selectedLibraryId: state.selectedLibraryId };
};

/*
connect's second argument:
  1. pass action creators to listItem's props;
  2. connect to redux store, whenever any action creator is called,
  it will be dispatch to store automatically (we don't need to call store.dispatch()!!)
*/
export default connect(mapStateToProps, actions)(ListItem);
