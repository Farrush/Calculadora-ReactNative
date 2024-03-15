import {StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native'

export default function Botao(props){
  return(
      <TouchableOpacity onPress={()=>props.press(props.nome)}>
        <View style={styles.botao}><Text style={styles.texto}>{props.nome}</Text></View>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  botao:{
    width: Dimensions.get('window').width / 4,
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    },
  texto:{
    fontSize: 24,
    fontWeight: 500,
    
  }
})