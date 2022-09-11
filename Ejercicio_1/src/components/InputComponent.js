import React from 'react'

export const InputComponent = ({register,error,label,placeholder,type}) => {
  return (
    <div className=''>
        <label className='col text-left' >{label}: </label>
        <input type={type} className='col-md-12 form-control'  placeholder={placeholder}{...register} />
        {error && (<p className='text-danger text-align-left'>{error}</p>)}
    </div>
  )
}
