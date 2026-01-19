import { useState, type FormEvent } from "react";

export const useForm = <T>( initialState: T) => {
  
  const [formData, setFormData] = useState(initialState);
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const resetForm = () => {
    setFormData({ ...initialState })
  }

  const onSubmit = (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

  }
    
  return {
    ...formData,
    formData,
    onChange,
    resetForm,
    onSubmit,
  }
}