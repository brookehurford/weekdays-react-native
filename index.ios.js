// Import code that we need
var Moment = require('moment');
var React = require('react');
var ReactNative = require('react-native');
var AppRegistry = ReactNative.AppRegistry;
var Text = ReactNative.Text;
var View = ReactNative.View;
var StyleSheet = ReactNative.StyleSheet;
var DayItem = require('./src/day-items');

// Create a react Component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function(){
    var dayItems = [];

    for(var i=0; i<7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      dayItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }
    return dayItems;
  }
});

// Style the React Component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show the react component on the screen

AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
})
