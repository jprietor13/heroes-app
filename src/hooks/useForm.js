import { useState } from 'react'

export const useForm = () => {

  const [formData, setFormData] = useState({
    searchText: ''
  })

  const handleInputChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name] : target.value
    })
  }

  return [ formData, handleInputChange ]
}