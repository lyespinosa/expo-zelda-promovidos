import React from 'react';
import { Text, View,TouchableOpacity} from 'react-native';

export default function Button() {
  return (
    <TouchableOpacity 
    className="bg-[#a1b9bc] py-4 px-16 border-b-4 border-[#6f9499] rounded">
      <Text className=" text-stone-50 font-bold">Iniciar sesion</Text>
    </TouchableOpacity>
  );
}


