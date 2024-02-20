import React from 'react'
import '../css/List.css'
import Input from './Input'
import Button from './Button'

function CheckboxList({id, checkBool, listContent, removeList, checkToggle}) {
  const changeCheckBool = () => {
    checkToggle(id)
  }

  const handleRemoveList = () => {
    removeList(id)
  }

  return (
    <div className="checkboxListDiv" key={id}>
      <Input
        type={'checkbox'}
        className={'checkboxInput'}
        checked={checkBool}
        onChange={changeCheckBool}
      />
      <p className={checkBool ? 'checkboxP_2' : 'checkboxP_1'}>{listContent}</p>
      <Button name={'X'} onClick={handleRemoveList} className={'deleteListButton'} />
    </div>
  )
}

export default CheckboxList
