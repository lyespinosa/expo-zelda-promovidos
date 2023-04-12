import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import Button from "../components/Button";
import Input from "../components/TextInputExample";

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center bg-[#92c582]">
      <Text className=" text-stone-50 font-bold">Ingrese sus datos</Text>
      <View>
        <Input secure={false} placeholder={"Usuario"} password={false} />
        <Input secure={true} placeholder={"Contraseña"} password={true} />
      </View>

      <Button></Button>
      <StatusBar style="auto" />
    </View>
  );
}
