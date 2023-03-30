import { StyleSheet} from 'react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import SlotMachine from 'react-native-slot-machine';
import { Audio } from 'expo-av';
import { useState } from 'react';

export const randomString = (characters, length) => {
  let result = '';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const randomNumber = (max) => {
  let i = Math.floor(Math.random() * max).toString();
  return i;
}


export const LogoImage = ({ filePath }) => {
  return (
    <Image style={styles.logo} source={filePath} />
  );
};

export function SpinButton(props) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export function SlotMachineNumber(props) {
  return (
    <View style={styles.rowSlots}>
      <SlotMachine text={props.slot} range={props.range} width={45} height={55}  duration={props.speed} />
    </View>
  );
}


export function SlotMachineCharacter(props) {
  return (
    <View style={styles.rowSlots}>
      <SlotMachine text={props.slot} range={props.range} renderContent={c => <Text style={{fontSize: 25}}>{props.symbols[c]}</Text>} duration={props.speed} />
    </View>
  );
}

export const useSound = (song) => {
  const [sound, setSound] = useState(null);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(song);
    sound.setIsLoopingAsync(false);
    setSound(sound);
    await sound.playAsync();
  };

  const stopSound = async () => {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }
  };

  return { playSound, stopSound };
};


export const styles = StyleSheet.create({
  appContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  rowSlots: {
    marginVertical: 30
  },
  logo: {
    width: 320,
    height:200,
  },
  gameContainer: {
    justifyContent: 'space-between', 
    alignItems: 'center',
  }, 
  buttonContainer: {
    backgroundColor: '#DA291C',
    borderRadius: 10,
    padding: 30
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  }
});