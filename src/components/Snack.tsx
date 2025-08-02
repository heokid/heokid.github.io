import { useRef } from 'react';


function Snack({ snackId }) {
  const inputRef = useRef(null);


  return (
    <>
     <script async src='/embed.js' />
    <div ref={inputRef} id='snackcontainer' className='snackcontainer' data-snack-id={snackId} data-snack-platform="android" data-snack-preview="true" data-snack-theme="dark" data-snack-supportedplatforms="android" data-snack-device-android="pixel8pro"></div>
    </>
  )
}

export default Snack
