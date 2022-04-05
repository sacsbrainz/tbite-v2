import React from 'react'

interface TextAreaProps {
  id: string
  name: string
  placeholder: string
  value: string
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  error: boolean
  errorMessage: string | undefined
}

function Textarea({
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
  errorMessage = '',
  ...props
}: TextAreaProps) {
  return (
    <div className="mb-3 w-full">
      <textarea
        value={value}
        onChange={onChange}
        className="w-full rounded-md border-gray-500 border-opacity-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
        autoComplete="off"
        rows={3}
        style={{ resize: 'none' }}
        id={id}
        name={name}
        placeholder={placeholder}
        {...props}
      ></textarea>
      {error ? (
        <p className="text-sm italic text-red-500">*{errorMessage}</p>
      ) : null}
    </div>
  )
}

export default Textarea
