import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Text, Button } from 'react-native';
import Buttons from '../../components/Buttons';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PostItem extends Component {

    /*  Fail  componentDidMount() {
           this.props.getCommentByPostId(this.props.list.id);
       }
   */
    renderBody() {
        const { list, expanded } = this.props;

        if (expanded) {
            return (
                <View style={styles.Body}  >
                    <Text style={styles.BodyText} >
                        UserId: {list.item.userId}
                    </Text>
                    <Text style={styles.Body}  >
                        Body: {list.item.body}
                    </Text>
                    <View style={{ marginLeft: 30, }} >
                        <Buttons />
                    </View>

                </View>

            )
        }
    }


    render() {

        const { id, title } = this.props.list.item;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectpost(id)}
            >
                <View>
                    <Text style={styles.Title}>
                        Title:{title}
                    </Text>

                    {this.renderBody()}
                </View>


            </TouchableWithoutFeedback>

        );
    }
}




const styles = StyleSheet.create({
    Title: {
        fontSize: 18,
        paddingLeft: 15,
        color: "#333580",
        borderWidth: 0.5,
        borderColor: "#16082f",
        borderRadius: 55,
        padding: 20,
        textAlign: "center",
        backgroundColor: "white"
    },
    Body: {
        paddingLeft: 15,
        backgroundColor: "white",
        borderRadius: 25,
        textAlign: "center",

    },
    BodyText: {
        textAlign: "center",
        color: "#101010"
    }
})



const mapStateToProps = (state, ownProps) => {

    const expanded = state.selectListItem === ownProps.list.item.id;

    return { expanded: expanded, comment: state.getComment };
};

export default connect(mapStateToProps, actions)(PostItem);