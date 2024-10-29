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

  
  
  const handleFileUpload = (outputState: any) => {
    const { successEntries } = outputState;

    if (successEntries && successEntries.length > 0) {
      const fileUrl = successEntries[0].cdnUrl;
      if (fileUrl) {
        onUpload(fileUrl);
        router.refresh();
      }
    }
  }

  return (
    <FileUploaderRegular
      sourceList="local, url, camera, dropbox"
      classNameUploader="uc-light"
      pubkey="6157eb79ba28ac7f49de"
      onChange={handleFileUpload}
    />
  )
}

export default UploadCareButton
