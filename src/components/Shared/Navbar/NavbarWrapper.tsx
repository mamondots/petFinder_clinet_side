import React from 'react';
import Navbar from './Navbar'; // Import the client-side Navbar component
import { cookies } from 'next/headers';

export default function NavbarWrapper() {
  const accessToken = cookies().get('accessToken')?.value;

  return <Navbar accessToken={accessToken} />;
}
