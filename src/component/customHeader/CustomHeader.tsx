import React, { FC } from "react";
import { Appbar } from "react-native-paper";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import DropDown from "../CustomDropDown/CustomDropDown";
import { styles } from "./style";
import { HeaderProps } from "../../../types";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import CustomButton from "../CustomButton";
import { Link } from "react-router-native";

const CustomHeader: FC<HeaderProps> = ({ title, onPress, location, isHome, headerStyle, color }) => {
  const { container, item, text, item2, item3 } = styles;
  const _handleMore = () => console.log("Shown more");
  return (
    <View style={[container, headerStyle]}>
      <TouchableOpacity onPress={onPress} style={item}>
        {
          isHome ?
            <MaterialIcons name="menu" size={30} color={color} />
            :
            <AntDesign name="arrowleft" size={30} color={color} />
        }

      </TouchableOpacity>

      {title && <View style={item2}>
        <Text style={text}>{title}</Text>
      </View>}

      {location && <View style={item2}><DropDown textcolor={{ color: color }} color={color} />
      </View>}
      <Link component={TouchableOpacity} to="/post-details" style={item3}>
      <Ionicons name="person-circle" size={30} color={color} />
      </Link>
    </View>
  );
};
export default CustomHeader;
