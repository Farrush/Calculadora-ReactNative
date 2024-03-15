import {View, Text, StyleSheet} from 'react-native'

export default function Resultados(props){
  return(
      <View style={styles.resultados}>
          <Text  style={{fontSize: 24, ...styles.texto}}>{props.hist}</Text>
          <Text style={{fontSize: 36, ...styles.texto}}>{props.res}</Text>
      </View>
  )
}
const styles = StyleSheet.create({
      resultados:{
        height: 120,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 10
      },
      texto:{
        color: '#FEFEFE',
        textAlign: 'center'
      }
});