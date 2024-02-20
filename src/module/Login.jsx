import React, {useEffect, useState} from 'react'
import '../css/List.css'
import Input from '../component/Input'
import Button from '../component/Button'
import ToDoList from './ToDoList'
import Clock from './Clock'
import Weather from './Weather'

function Login() {
  const checkUsername = localStorage.getItem('username')

  const [loginValue, setLoginValue] = useState(checkUsername)
  const [loginBool, setLoginBool] = useState(true)
  const [timeTitle, setTimeTitle] = useState('')

  const time = new Date().getHours()

  const onChangeLogin = event => {
    setLoginValue(event.target.value)
  }

  const handleLogin = e => {
    e.preventDefault()
    if (loginValue === '') {
      alert('이름을 입력해주세요.')
    } else {
      setLoginBool(false)
      localStorage.setItem('username', loginValue)
    }
  }

  const handleLogout = () => {
    setLoginBool(true)
    setLoginValue('')
    localStorage.removeItem('username')
  }

  useEffect(() => {
    if (checkUsername === null) {
      setLoginBool(true)
    } else {
      setLoginBool(false)
    }
  }, [checkUsername])

  useEffect(() => {
    if (6 <= time && time < 12) {
      setTimeTitle('Good Morning')
    } else if (12 <= time && time < 18) {
      setTimeTitle('Good Afternoon')
    } else if (18 <= time && time < 21) {
      setTimeTitle('Good Evening')
    } else if ((21 <= time && time <= 23) || (0 <= time && time < 6)) {
      setTimeTitle('Good Night')
    }
  }, [time])

  return (
    <div>
      <div className="loginWeatherDiv">
        <Weather />
      </div>
      {loginBool ? (
        <div>
          <div className="logoutClockDiv">
            <Clock />
          </div>
          <form className="logoutDiv" onSubmit={handleLogin}>
            <Input
              className={'loginInput'}
              type={'text'}
              value={loginValue}
              onChange={onChangeLogin}
              maxLength={15}
              placeholder={'What your name...?'}
            />
            <Button className={'loginButton'} name={'≪'} />
          </form>
        </div>
      ) : (
        <div className="loginDiv">
          <div className="loginClockDiv">
            <Clock />
          </div>
          <div className="loginNameDiv">
            <h1 className="loginName">{`${timeTitle}, ${loginValue}`}</h1>
            <Button className={'loginButton'} name={'≫'} onClick={handleLogout} />
          </div>
          <div>
            <ToDoList />
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
