import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'react-memory-leak',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
