import Head from 'next/head';
import React from 'react';

import App from '../src/components/App';

export default function Home() {
  return (
    <>
      <Head>
        <title>Runway Frontend Exercise</title>
        <link rel="icon" href="https://runway.com/favicon-32x32.png" />
      </Head>
      <App />
    </>
  );
}
