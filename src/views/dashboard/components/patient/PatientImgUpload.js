import { BsCloudArrowUp } from 'react-icons/bs'
import { useRef } from 'react'

const PatientImgUpload = () => {
  const inputRef = useRef(null)

  const uploadFile = (e) => {
    inputRef.current = e.target.files[0].name
  }

  return (
    <>
      <label for="file" className='p-0 m-5 col border-primary rounded' style={{ border: '2px dotted', cursor: 'pointer' }} title="Clickez" >
        <div className='p-2 m-5'>
          <BsCloudArrowUp style={{ width: '100px', height: '100px' }} />
          <br />
          Clickez ici pour ajouter un fichier
          <br />
          <input ref={inputRef} type="file" name="file" id='file' onChange={uploadFile} style={{ display: 'none' }} />
        </div>
      </label>
    </>
  )
}

export default PatientImgUpload
