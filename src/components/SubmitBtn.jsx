import React from 'react'
import { useNavigation } from 'react-router'

const SubmitBtn = ({text}) => {

    const navigation = useNavigation()
    const  isSubmitting = navigation.state === "submitting"
  return (
    <button className='btn btn-primary btn-block ' disabled={isSubmitting} > 
        {isSubmitting?(<>
            <span className='loading-spinner loading ' ></span>
            sending...
        </>):(text)}
        
    </button>

  )
}

export default SubmitBtn