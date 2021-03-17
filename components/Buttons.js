import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Buttons = () => {

    const [like, SetLike] = useState(0);
    const [share, SetShare] = useState(0);
    const [repost, SetRepost] = useState(0);
    const [comment, SetComment] = useState(0);




    return (
        <View style={{ height: 250, textAlign: "center" }}>
            <Text style={{ textAlign: "center", fontSize: 30 }}>
                <Button title="like" onPress={() => SetLike(like + 1)} />
                {like}
            </Text>


            <Text style={{ textAlign: "center", fontSize: 30 }} >
                <Button title="share" onPress={() => SetShare(share + 1)} />

                {share}


            </Text>

            <Text style={{ textAlign: "center", fontSize: 30 }}>
                <Button title="repost" onPress={() => SetRepost(repost + 1)} />
                {repost}
            </Text>

            <Text style={{ textAlign: "center", fontSize: 30 }}>
                <Button title="comment" onPress={() => SetComment(comment + 1)} />
                {comment}
            </Text>

        </View>

    );
};

const styles = StyleSheet.create({
    Button: {
        height: 10
    }
})


export default Buttons;