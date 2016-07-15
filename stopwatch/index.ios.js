var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
} = ReactNative;

var StopWatch = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={[styles.timerWrapper, this.border('red')]}>
          <Text>
            00:00.00
          </Text>
        </View>
        <View style={[styles.buttonWrapper, this.border('green')]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer, this.border('blue')]}>
        <Text>
          I am a list of laps.
        </Text>
      </View>
    </View>
  },
  startStopButton: function() {
    return <TouchableHighlight onPress={console.log('start')}>
      <Text style={styles.border}>
        Start
      </Text>
    </TouchableHighlight>
  },
  lapButton: function() {
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 3
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  border: {
    borderColor: 'blue',
    borderWidth: 1
  },
  header: { // Yellow
    flex: 1
  },
  footer: { // Blue
    flex: 1
  }, timerWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwatch', function() {
  return StopWatch;
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
