import React, { useState } from 'react'
import { Typography, TextField, Box } from '@mui/material'
import { Container, Button, Alert, LinearProgress } from '@mui/material'
import { useContext } from 'react'
import { StateContext } from '../../store/index'

export default function SubscribeCTA({ data }) {
  const host = process.env.REACT_APP_API_URL
  const [state] = useContext(StateContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState(
    'An error occurred. Please try again.'
  )
  const [email, setEmail] = useState('')
  const [fieldsError, setFieldsError] = useState({ email: false })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFieldsError({ email: !email })
    if (email) {
      setLoading(true)
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { email } }),
      }
      try {
        const res = await fetch(`${host}/api/subscribers`, options)
        const json = await res.json()

        console.log('res: ', res)
        console.log('json: ', json)

        if (!res.ok) {
          if (json.error.message === 'Email already subscribed.') {
            setErrorMessage('Email already subscribed.')
          } else if (json.error.message === 'Invalid email provided.') {
            setErrorMessage('Invalid email provided.')
          } else {
            setErrorMessage('Server error.')
          }
          throw new Error(json.error.message)
        } else {
          setSuccess(true)
        }
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
        setEmail('')
      }
    }
  }
  return (
    <div className="subscribe-cta">
      <Container disableGutters maxWidth="container">
        <Typography
          sx={{
            color: 'primary.dark',
            marginBottom: '22px',
            marginTop: '0',
            textAlign: 'center',
          }}
          variant="h3"
          component="h2"
        >
          {data.home_cta_title}
        </Typography>
        <Typography
          sx={{
            maxWidth: '690px',
            mx: 'auto',
            mb: { xs: '40px', sm: '50px', md: '60px' },
            marginBottom: '93px',
            textAlign: 'center',
          }}
          variant="subtitle1"
          color="secondary.dark"
          component="h3"
        >
          {data.home_cta_subtitle}
        </Typography>
        <Box align="center">
          <form
            onSubmit={handleSubmit}
            className="cta-form"
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              maxWidth: '31.5rem',
            }}
            noValidate
            autoComplete="no"
          >
            <TextField
              required={true}
              size="normal"
              variant="standard"
              label="Email"
              error={fieldsError.email}
              helperText={fieldsError.email ? 'Email is required' : ''}
              autoComplete="off"
              sx={{
                width: { xs: '100%', sm: '20rem' },
                '& .MuiInput-underline:before': {
                  borderBottom: state.isDark
                    ? '2px solid rgba(140, 166, 158, 0.73)'
                    : '',
                },
              }}
              InputLabelProps={{
                sx: {
                  color: 'customColor.inputLabel',
                },
              }}
              inputProps={{
                maxLength: 50,
                sx: {
                  color: 'customColor.input',
                  paddingBottom: '0.5rem',
                },
              }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Button
              sx={{
                ml: { xs: '0', sm: '1rem' },
                mt: { xs: '1rem', sm: '0' },
                width: { xs: '100%', sm: 'auto' },
                px: '2.7rem',
                py: '0.6rem',
                fontSize: '1.125rem',
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: '#146b7880',
                },
              }}
              disableElevation
              type="submit"
              variant="contained"
            >
              Subscribe
            </Button>

            {loading && (
              <Box
                sx={{ width: '99.5%', position: 'absolute', bottom: '-0.1rem' }}
              >
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
                  bottom: '-4rem',
                  left: '0',
                }}
                severity="success"
              >
                Thanks for subscribing
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
                  bottom: '-4rem',
                  left: '0',
                }}
                severity="error"
              >
                {errorMessage}
              </Alert>
            )}
          </form>
        </Box>
      </Container>
    </div>
  )
}
