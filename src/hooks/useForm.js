import { useState } from 'react'

export const useForm = () => {

  const [formData, setFormData] = useState({})

  const handleInputChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name] : target.value
    })
  }

  return [ formData, handleInputChange ]
}