import React, {useEffect, useRef, useState} from 'react'
import '../css/List.css'
import Input from '../component/Input'
import Button from '../component/Button'
import Checkbox from '../component/Checkbox'

function ToDoList() {
  const [listValue, setListValue] = useState('')
  const [todoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem('todoList')) || []
  )

  const listKey = useRef(parseInt(localStorage.getItem('ListKey')) || 0)

  const changeListValue = event => {
    setListValue(event.target.value)
  }

  const addList = event => {
    event.preventDefault()
    const checkBool = false
    if (listValue === '') {
      alert('할 일 목록을 입력해주세요.')
    } else {
      const newList = {
        listContent: listValue,
        id: listKey.current,
        checked: checkBool
      }
      listKey.current += 1
      setToDoList([newList, ...todoList])
      setListValue('')
    }
  }

  const removeList = id => {
    const remainList = todoList.filter(remove => remove.id !== id)
    setToDoList(remainList)
  }

  const checkToggle = id => {
    setToDoList(
      todoList.map(toggle =>
        toggle.id === id ? {...toggle, checked: !toggle.checked} : toggle
      )
    )
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
    localStorage.setItem('ListKey', parseInt(listKey.current))
  }, [todoList])

  return (
    <div>
      <div>
        <form className="todoListForm">
          <Input
            type={'text'}
            className={'todoListInput'}
            value={listValue || ''}
            onChange={changeListValue}
            placeholder={'Write your List...'}
          />
          <Button
            className={'addListButton'}
            name={'+'}
            type={'submit'}
            onClick={addList}
          />
        </form>
      </div>
      <div className="checkboxDiv">
        {todoList.map(listData => {
          return (
            <Checkbox
              key={listData.id}
              {...listData}
              checkBool={listData.checked}
              removeList={removeList}
              checkToggle={checkToggle}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ToDoList
