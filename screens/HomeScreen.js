import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import PostItem from './Post/PostItem';
import { getAllPost } from '../actions/index';
import Buttons from '../components/Buttons';

class HomeScreen extends Component {

    // call the action creater
    componentDidMount() {
        this.props.getAllPost();
    }

    renderItem(list) {
        return <PostItem list={list} />
    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: "#828ac6" }}>
                <Header text="Home Screen" />

                <FlatList
                    data={this.props.listAll}
                    renderItem={this.renderItem}
                    keyExtractor={(list) => list.id.toString()}
                />

            </View>

        );
    }
}


const mapStateToProps = state => {
    return {
        listAll: state.listAll
    }
}


export default connect(mapStateToProps, { getAllPost })(HomeScreen);