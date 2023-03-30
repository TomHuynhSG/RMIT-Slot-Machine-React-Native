// Explanation: Take some existing code from others in the community
import {useState} from 'react';
import { View } from 'react-native';
import { styles, randomString, randomNumber, SpinButton, LogoImage, SlotMachineCharacter, SlotMachineNumber, useSound } from './components/GameHelper';

export default function App () {

    // Explanation: Set some settings for the game

    // Explanation: The speed of the spin (YOUR TASK 2)
    const gameSpeed = 2000;

    // Explanation: Data for first slot machine (Characters) (YOUR TASK 3)
    const [slot1, setSlot1] = useState('hello');
    const range1="abcdefghijklmnopqrstuvwxyz";

    const [slot4, setSlot4] = useState('rmit');

    // Explanation: Data for second slot machine (Number) (YOUR TASK 9)
    const [slot2, setSlot2] = useState(2023);

    // Explanation: Data for third slot machine (Emojis symbols) (YOUR TASK 12)
    const symbols = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌'];
    const [slot3, setSlot3] = useState('2351');
    const range3="012345";

    // Explanation: Create Sound Effect Object (YOUR TASK 7)
    const { playSound } = useSound(require('./assets/spin.mp3'));

    // Explanation: What happens if we press the spin button
    const spin = () => {

      // Explanation: Play the sound effect (YOUR TASK 8)
      playSound();

      // Explanation: Change the values for slot 1 (YOUR TASK 6)
      setSlot1(randomString(range1, 5))
      setSlot4(randomString(range1, 4))

      // Explanation: Change the values for slot 2 (YOUR TASK 11)
      setSlot2(randomNumber(9999))

      // Explanation: Change the values for slot 2 (YOUR TASK 14)
      setSlot3(randomString(range3, 4))
    }

    // Explanation: Display some visual components on the mobile screen
    return (
        <View style={styles.appContainer}>
            {/* Logo here (YOUR TASK 1) */}
            <LogoImage filePath={require('./assets/rmit-slot-machine-logo.png')} />
            
            <View style={styles.gameContainer}>
        
                {/* Slot machine here (YOUR TASK 4) */}
                <SlotMachineNumber slot={slot1} range={range1} speed={gameSpeed} />
                <SlotMachineNumber slot={slot4} range={range1} speed={gameSpeed} />

                {/* Slot machine here (YOUR TASK 10) */}
                <SlotMachineNumber slot={slot2} speed={gameSpeed} />

                {/* Slot machine here (YOUR TASK 13) */}
                <SlotMachineCharacter slot={slot3} range={range3} speed={gameSpeed} symbols={symbols} />
            </View>

            {/* Spin button here (YOUR TASK 5) */}
            <SpinButton text="Spin Me 🎰" onPress={spin} />
            
        </View>
    );
}
