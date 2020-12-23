import React from 'react'
import { homeObjOne } from './Data'
import InfoSection from '../../components/InfoSection/InfoSection'

function Home() {
    return (
        <>
        <InfoSection {...homeObjOne} />
        </>
    )
}

export default Home;
