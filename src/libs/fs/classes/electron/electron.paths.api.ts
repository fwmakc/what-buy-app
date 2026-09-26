export const electronPathsAPI = async (): Promise<void> => {
  const { contextBridge, ipcRenderer } = await import('electron');
  const path = await import('path');

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
};

export const electronPathsAPIHandle = async (): Promise<void> => {
  const { app, ipcMain } = await import('electron');

  ipcMain.handle('get-path', (_event, pathName) => {
    return app.getPath(pathName);
  });
};
