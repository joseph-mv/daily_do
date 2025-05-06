import React, { useEffect, useRef, useState } from 'react'
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa'

type Mode = 'work' | 'shortBreak' | 'longBreak'

const DURATIONS = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60
}

const PomodoroTimer: React.FC = () => {
  const [mode, setMode] = useState<Mode>('work')
  const [secondsLeft, setSecondsLeft] = useState(DURATIONS['work'])
  const [isRunning, setIsRunning] = useState(false)
  const [pomodoroCount, setPomodoroCount] = useState(0)
  const intervalRef = useRef< number | null>(null)

  // Request notification permission on first render
  useEffect(() => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission()
    }
  }, [])

  // Start / pause toggle
  const toggleTimer = () => {
    playSound()
    setIsRunning(prev => !prev)
  }

  // Reset current session
  const resetTimer = () => {
    clearInterval(intervalRef.current!)
    setIsRunning(false)
    setSecondsLeft(DURATIONS[mode])
  }

  // Format time as MM:SS
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
  }

  // Play end-of-session sound
  const playSound = () => {
    const audio = new Audio('/sounds/alarm.wav') // ensure this file exists in /public/sounds/
    audio.play().catch(err => {
      console.warn('Audio play failed:', err)
    })
  }

  // Show browser notification
  const showNotification = (title: string, body: string) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/favicon.ico' // customize if needed
      })
    }
  }

  // Transition between work / breaks
  const handleSessionEnd = () => {
    playSound()

    if (mode === 'work') {
      const newCount = pomodoroCount + 1
      setPomodoroCount(newCount)

      const isLong = newCount % 4 === 0
      const next = isLong ? 'longBreak' : 'shortBreak'

      showNotification(
        isLong ? 'Take a long break!' : 'Short break time!',
        isLong ? 'Great job! Enjoy a longer break.' : 'Rest for a few minutes.'
      )

      switchMode(next)
    } else {
      showNotification('Back to work!', 'Time to focus again.')
      switchMode('work')
    }
  }

  // Change timer mode and reset time
  const switchMode = (newMode: Mode) => {
    setMode(newMode)
    setSecondsLeft(DURATIONS[newMode])
    setIsRunning(false)
  }

  // Main timer effect
  useEffect(() => {
    if (!isRunning) return
  
    const endTime = Date.now() + secondsLeft * 1000
  
    intervalRef.current = setInterval(() => {
      const now = Date.now()
      const timeLeft = Math.max(0, Math.floor((endTime - now) / 1000))
  
      setSecondsLeft(timeLeft)
  
      if (timeLeft === 0) {
        clearInterval(intervalRef.current!)
        handleSessionEnd()
      }
    }, 1000)
  
    return () => clearInterval(intervalRef.current!)
  }, [isRunning])

  // useEffect(() => {
  //   // Try restoring state from localStorage
  //   const saved = localStorage.getItem('pomodoro_timer')
  
  //   if (saved) {
  //     const parsed = JSON.parse(saved)
  
  //     setMode(parsed.mode)
  //     setPomodoroCount(parsed.pomodoroCount || 0)
  //     setIsRunning(parsed.isRunning || false)
  
  //     // Calculate time left if endTime is valid
  //     if (parsed.endTime) {
  //       const timeLeft = Math.max(0, Math.floor((parsed.endTime - Date.now()) / 1000))
  //       setSecondsLeft(timeLeft)
  //     } else {
  //       setSecondsLeft(DURATIONS[parsed.mode] || DURATIONS['work'])
  //     }
  //   }
  // }, [])
  
  
  // useEffect(() => {
  //   localStorage.setItem('pomodoro_timer', JSON.stringify({
  //     mode,
  //     secondsLeft,
  //     isRunning,
  //     pomodoroCount
  //   }))
  // }, [mode, secondsLeft, isRunning, pomodoroCount])
  
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-8 text-center border">
      <h2 className="text-2xl font-bold mb-4 capitalize text-gray-800">
        {mode === 'work' ? 'Focus Time' : mode === 'shortBreak' ? 'Short Break' : 'Long Break'}
      </h2>

      <div className="text-5xl font-mono text-red-600 mb-6">{formatTime(secondsLeft)}</div>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={toggleTimer}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2"
        >
          {isRunning ? <FaPause /> : <FaPlay />}
          {isRunning ? 'Pause' : 'Start'}
        </button>

        <button
          onClick={resetTimer}
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-full flex items-center gap-2"
        >
          <FaRedo />
          Reset
        </button>
      </div>

      <div className="text-sm text-gray-500">
        Pomodoros Completed: <strong>{pomodoroCount}</strong>
      </div>
    </div>
  )
}

export default PomodoroTimer
