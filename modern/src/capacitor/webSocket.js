import { CapacitorWebsocket } from '@miaz/capacitor-websocket';
import { Preferences } from '@capacitor/preferences';

const socket = {};

const handleMessage = (msg) => {
  if (socket.onmessage) {
    socket.onmessage(msg);
  }
};
async function addListeners() {
  await CapacitorWebsocket.addListener('default:message', handleMessage);
}

async function init() {
  await addListeners();
  const { value } = await Preferences.get({ key: 'cookie' });
  await CapacitorWebsocket.build({
    name: 'default',
    url: `wss://${process.env.REACT_APP_URL_NAME}/api/socket`,
    headers: { Cookie: value },
  });
  await CapacitorWebsocket.applyListeners({ name: 'default' });
  await CapacitorWebsocket.connect({ name: 'default' });
}

export default function capacitorWebSocket() {
  init().then();
  return socket;
}
