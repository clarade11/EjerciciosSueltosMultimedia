import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View , Button} from 'react-native';

//useeffect= cuando se renderiza el programa se hace esa funcion y hace cambios en la pantalla.
//(Se usa para llamar a apis)
// hay que ponerle =>>>  ,[])  y así termina, si no se pone entraría en bucle. 
//Si quisieramos x veces se pondría el valor dentro de los corchetes
//el fetch sirve para llamar a las apis


function Detalle() {
  const [fruits,setFruits]=useState(null);
  //siempre igual
  useEffect(() => {
    fetch("http://10.0.2.2:8080/fruits")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('getting data from fectch', responseJson);
        setFruits(responseJson)
      })
      .catch(error => console.log(error))
  }, []);

  const renderizarItem = ({ item }) => (
    <View>
      <Text>Nombre: {item.name}       Precio: {item.price}</Text>

    </View>
  );

  //--------ELEMENTOS DE LA PANTALLA-------
  return (
    <FlatList
      data={fruits}
      renderItem={renderizarItem}
      keyExtractor={item=>item.id}
    />

  )
}
export default Detalle;
