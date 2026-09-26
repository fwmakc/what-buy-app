// eslint-disable-next-line no-undef
const { contextBridge, ipcRenderer } = require('electron');
// eslint-disable-next-line no-undef
const path = require('path');

contextBridge.exposeInMainWorld('electronPathsAPI', {
    app: async () => {
      return await ipcRenderer.invoke('get-path', 'assets');
    },

    cache: async () => {
      const userData = await ipcRenderer.invoke('get-path', 'userData');
      return path.join(userData, 'cache');
    },

    data: async () => {
      const userData = await ipcRenderer.invoke('get-path', 'userData');
      return path.join(userData, 'data');
    },

    documents: async () => {
      return await ipcRenderer.invoke('get-path', 'documents');
    },

    home: async () => {
      return await ipcRenderer.invoke('get-path', 'home');
    },
});
