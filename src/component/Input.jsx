import React from 'react'

function Input({
  className,
  type,
  name,
  value,
  onChange,
  maxLength,
  placeholder,
  checked
}) {
  return (
    <div>
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        checked={checked}
      />
    </div>
  )
}

export default Input
