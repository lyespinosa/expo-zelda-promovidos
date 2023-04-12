import React from "react";
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const TextInputExample = ({ secure, password, placeholder}) => {
    
    const [focus, setFocus] = useState(false);

    const [isSecure, setIsSecure] = useState(secure);


  return (
    <View className=" font-bold p-x mb-4 w-72 bg-stone-50 rounded flex-row items-center border-1 border-gray-400 focus:border-blue-500 focus:border " >
    <TextInput
        className="flex-1 px-3 py-1 text-xl w-"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={isSecure}
        placeholder={placeholder}
        password={password}
    />
    {secure &&
        <Icon
            style={{ paddingRight: 15 }}
            name={isSecure ? "eye" : 'eye-slash'}
            size={20}
            color='gray'
            onPress={() => setIsSecure(!isSecure)}
        />
    }
</View>
  );
};


export default TextInputExample;
