'use client'
import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

type Props = {
  onUpload: (e: string) => any
}


const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()

  return (
    <div>
     <FileUploaderRegular
         sourceList="local, url, camera, dropbox"
         classNameUploader="uc-light"
         pubkey="6157eb79ba28ac7f49de"
      />
    </div>
  )
}

export default UploadCareButton