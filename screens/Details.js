import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-elements';

export default class Details extends Component {
    static navigationOptions = {
        title: 'Details'
    }
    constructor(props){
        super(props);
    }
    render() {
        const { navigation } = this.props;
        const matches = JSON.parse(navigation.getParam('matches', 'No matches found'));
        console.log(matches);
      
        return (
            <View>
          <ScrollView>
            <Card style={styles.container}>
              {
                matches.map((item, key) => (
                  <View key={key} style={styles.subContainer}>
                    {
                        item.group ? <View><Text h3>{item.group}</Text></View> : <View></View>
                    }
                    <View>
                      <Text h3>{item.team1.name} vs {item.team2.name}</Text>
                    </View>
                    <View>
                      <Text h5>{item.date}</Text>
                    </View>
                    <View>
                      <Text h4>{item.score1} - {item.score2}</Text>
                    </View>
                    {
                        item.goals1.length > 0 ? 
                        item.goals1.map((item2, key2) => (
                            <View key={key2}>
                              <Text h4>{item2.name} ({item2.minute})</Text>
                            </View>
                          )) : <View></View>
                    }
                    {
                        item.goals2.length > 0 ? 
                        item.goals2.map((item3, key3) => (
                            <View key={key3}>
                              <Text h5>{item3.name} ({item3.minute})</Text>
                            </View>
                          )) : <View></View>
                    }
                  </View>
                ))
              }
            </Card>
          </ScrollView>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    subContainer: {
        flex: 1,
        paddingBottom: 20,
        borderBottomWidth: 2,

    }
})