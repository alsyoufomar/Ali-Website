import React, { useState, useEffect } from 'react'
import { CircularProgress, Box, Fade, Typography } from '@mui/material'

export default function Loading() {
  const [showLoading, setShowLoading] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  const messages = [
    'Server is waking up, it should take only 15 seconds ...',
    'The server sleeps every 15 minutes ...',
    'Oops! It will take a bit longer ...',
    'Terribly sorry mate ...',
    'Oh god!',
    '-_-',
  ]

  useEffect(() => {
    const timers = []
    timers.push(
      setTimeout(() => {
        setShowLoading(true)
      }, 4000)
    )

    timers.push(setTimeout(() => cycleMessages(), 10000))

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
    // eslint-disable-next-line
  }, [])

  const cycleMessages = () => {
    setShowLoading(false)
    setTimeout(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
      setShowLoading(true)
      setTimeout(cycleMessages, 10000)
    }, 500)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#2d303b',
        p: 2,
      }}
    >
      <CircularProgress />
      <Fade key={messageIndex} in={showLoading} timeout={500}>
        <Typography variant="h6" sx={{ color: 'primary.main', pt: 2 }}>
          {messages[messageIndex]}
        </Typography>
      </Fade>
    </Box>
  )
}
