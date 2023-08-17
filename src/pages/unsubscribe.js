import React, { useState } from 'react'
import { Box, Typography, Button, LinearProgress, Alert } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'

export default function Unsubscribe() {
  const host = process.env.REACT_APP_API_URL
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('An error occurred.')
  const [searchParams] = useSearchParams()
  const email = searchParams.get('email')
  async function handleClick() {
    setLoading(true)
    try {
      const res = await fetch(`${host}/api/unsubscribe/${email}`)
      const json = await res.json()

      if (!res.ok) {
        setErrorMessage(json.error.message)
        throw new Error(json.error.message)
      } else {
        setSuccess(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0faf7',
        p: 2,
      }}
    >
      <Helmet>
        <title>Unsubscribe</title>
      </Helmet>
      <Typography variant="h4" sx={{ color: '#808080', pb: 8 }}>
        Unsubscribe
      </Typography>
      <Typography color="#676a6c">
        Click on "Unsubscribe" to stop receiving emails from this sender on this
        email address:
      </Typography>
      <Typography sx={{ fontWeight: '700', mt: 2 }} color="#676a6c">
        {email}
      </Typography>
      <Box sx={{ position: 'relative' }}>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ px: 4, py: 1, mt: 3 }}
        >
          UNSUBSCRIBE
        </Button>
        {loading && (
          <Box sx={{ width: '100%', position: 'absolute', bottom: '0' }}>
            <LinearProgress />
          </Box>
        )}
        {success && (
          <Alert
            onClose={() => {
              setSuccess(false)
            }}
            variant="filled"
            sx={{
              position: 'absolute',
              top: '5rem',
              left: '-3.8rem',
              right: '-3.8rem',
            }}
            severity="success"
          >
            Successfully unsubscribed.
          </Alert>
        )}
        {error && (
          <Alert
            onClose={() => {
              setError(false)
            }}
            variant="filled"
            sx={{
              position: 'absolute',
              top: '5rem',
              left: '-3.8rem',
              right: '-3.8rem',
            }}
            severity="error"
          >
            {errorMessage}
          </Alert>
        )}
      </Box>
    </Box>
  )
}
