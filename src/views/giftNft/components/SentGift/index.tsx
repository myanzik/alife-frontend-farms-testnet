import React, { useContext, useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import NftList from './NftList'
import nfts from '../../../../config/constants/newnfts'
import { NftProviderContext } from '../../contexts/NftProvider'

const SentGift = () => {
  const { myGifts, myNfts, myGiftsdetails,getNftSentDetails } = useContext(NftProviderContext)

  useEffect(()=> getNftSentDetails(),[getNftSentDetails])
  return (
    <div>
      <NftList nfts={myGiftsdetails} />
    </div>
  )
}

export default SentGift
