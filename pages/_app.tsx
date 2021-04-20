import { AppProps } from 'next/app';
import React from 'react';
import '../styles.scss';

const RunwayApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default RunwayApp;
