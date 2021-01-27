import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.10.104:3333'
});

export default api;

/**
 * IOS com emulador: localhost
 * IOS com físico: ip da máquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com físco: IP da máaquina
 */