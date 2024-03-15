import {SafeAreaView, View, FlatList, Dimensions} from 'react-native';
import Botao from './components/Botao.js'
import Resultados from './components/Resultados'
import Botoes from './assets/Botoes'
import {useState} from 'react'
export default function App() {
  const [ numAtual, setNumAtual ] = useState("")

  const [ ultNum, setUltNum ] = useState("")

function calcular(){
    const numeros = numAtual.split(" ")
    const nums = []
    const ops = []

    for(let i = 0; i < numeros.length; i++){
      if(i % 2 === 0)
        nums.push(parseFloat(numeros[i]))
      else
        ops.push(numeros[i])
    }

    let indexNums = 1, indexOps = 0, resultado = nums[0]
    while(indexNums < nums.length && indexOps < ops.length){

      switch(ops[indexOps]){
        case "+":
          resultado += nums[indexNums]
          break;
        case "-":
          resultado -= nums[indexNums]
        break;
        case "/":
          resultado = resultado / nums[indexNums]
        break;
        case "*":
          resultado *= nums[indexNums]
        break;
      }
      indexNums++
      indexOps++
    }


    setNumAtual(resultado)
}
  function mudaUltimaOp(novoNum){
        for(let i = numAtual.length-1; i > 0; i--){
          if(numAtual[i] === "+"){
            novoNum = novoNum.substring(0,i)+"- "+novoNum.substring(i+4, novoNum.length-1)
            break
          }
          if(numAtual[i] === "-"){
            novoNum = novoNum.substring(0,i)+"+ "+novoNum.substring(i+4, novoNum.length-1)
            break
          }
          if(numAtual[i] === "*"){
            novoNum = novoNum.substring(0,i)+"/ "+novoNum.substring(i+4, novoNum.length-1)
            break
          }
          if(numAtual[i] === "/"){
            novoNum = novoNum.substring(0,i)+"* "+novoNum.substring(i+4, novoNum.length-1)
            break
          }
        }
        return novoNum
  }
  function pressionado(botao){
    let novoNum
    switch(botao){
      case "+":
      case "-":
        if(numAtual.length === 0)// Se não tem número e quero adicionar um sinal ao meu primeiro número (+ ou -)
          setNumAtual(botao)
        else
          setNumAtual(numAtual + " " + botao + " ")
        break;
      case "/":
      case "*":
        setNumAtual(numAtual + " " + botao + " ")

      break;
      case "DEL":
        if(numAtual[numAtual.length - 1] !== " ")
          setNumAtual(numAtual.substring(0, numAtual.length - 1))
        else
          setNumAtual(numAtual.substring(0, numAtual.length - 3))
      break;
      case "C":
        setNumAtual("")
        setUltNum("")
      break;
      case "CE":
        setNumAtual("0")
      break;
      case ",":
        setNumAtual(numAtual+".")
      break;
      case "+/-":
        novoNum = numAtual
        setNumAtual(mudaUltimaOp(novoNum))
      break;
      case "=":
        if(numAtual.split(" ").length > 2 && numAtual[numAtual.length-1] !== " "){
          calcular()
          setUltNum(numAtual+" = ")
        }
      break;
      default:
        if(numAtual !== "0")
          setNumAtual(numAtual+botao)
        else
          setNumAtual(botao)
      break;
    }

  }

  return (
    <SafeAreaView style={{backgroundColor: '#1f1f1f', height: Dimensions.get('window').height}}>
      <View>
        <Resultados hist={ultNum} res={numAtual}/>
          <FlatList
              data={Botoes}
              keyExtractor={(index) => index}
              renderItem={({item}) => <Botao press={nome => pressionado(nome)} nome={item.nome}/>}
              horizontal={false}
              numColumns={4}
          />
      </View>
    </SafeAreaView>
  );
}


