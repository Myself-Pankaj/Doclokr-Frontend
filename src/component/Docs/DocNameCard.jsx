import React, { Fragment } from 'react'
import {BsCheck2Square} from 'react-icons/bs'
const DocNameCard = ({ myPublicDoc }) => {
  return (
    <Fragment>
        <div className='docList'>
        <BsCheck2Square/>
        <h1>{myPublicDoc.name}</h1>
        </div>

    </Fragment>
  )
}

export default DocNameCard