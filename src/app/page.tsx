'use client'
import { WalletConnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WalletMultiButton />
    </main>
  )
}
