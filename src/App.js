import { Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useContext } from 'react'
import { StateContext } from './store/index'
import Home from './pages/home'
import Blog from './pages/blog'
import Post from './pages/post'
import About from './pages/about'
import Contact from './pages/contact'
import Unsubscribe from './pages/unsubscribe'

const stylingObj = {
  palette: {
    primary: {
      main: '#146B78',
      dark: '#031C21',
      light: '#E4EDEA',
    },
    secondary: {
      main: '#9AC9BC',
      light: 'rgba(140, 166, 158, 0.73)',
      dark: '#808080',
    },
    customColor: {
      main: '#ffffff',
      inputLabel: '#031C21',
      input: '#031C21',
      personalImgBg: '#031c21',
      bodyText: '#031C21',
      contactForm: '#DAE8E4',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      container: 1200,
      lg: 991,
      xl: 1920,
      customBreakpoint: 2000,
    },
  },

  typography: {
    fontFamily: 'lato',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900,

    h2: {
      fontSize: '3.125rem',
      fontFamily: 'poppins',
      fontWeight: 600,
      textTransform: 'capitalize',
    },
    h3: {
      fontSize: '2.5rem',
      fontFamily: 'poppins',
      fontWeight: 500,
      textTransform: 'capitalize',
    },

    h5: {
      lineHeight: '123%',
      fontSize: '1.3125rem',
      fontWeight: 600,
      textTransform: 'capitalize',
    },

    body2: {
      fontSize: '0.93rem',
      lineHeight: '148.5%',
    },

    subtitle1: {
      fontFamily: 'lato',
      fontSize: '1.3125rem',
      fontWeight: '500',
      lineHeight: '151%',
    },
    caption: {
      fontSize: '14px',
      color: 'grey',
    },
    button: {
      textTransform: 'none',
    },
  },
}

let theme = createTheme(stylingObj)

theme = createTheme(theme, {
  typography: {
    h2: {
      [theme.breakpoints.down('lg')]: {
        fontSize: '2.8rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },

    h3: {
      [theme.breakpoints.down('lg')]: {
        fontSize: '2.1rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.9rem',
      },
    },

    h5: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },

    subtitle2: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
      },
    },

    subtitle1: {
      [theme.breakpoints.down('lg')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '17px',
      },
    },
  },
})

let darkTheme = createTheme({
  ...theme,
  palette: {
    primary: {
      main: '#146B78',
      dark: '#9AC9BC',
      light: '#031C21',
    },
    secondary: {
      main: '#031C21',
      light: 'rgba(140, 166, 158, 0.73)',
      dark: 'rgba(140, 166, 158, 0.73)',
    },
    customColor: {
      main: 'rgba(25, 49, 53, 1)',
      inputLabel: 'rgba(140, 166, 158, 0.73)',
      input: 'grey',
      personalImgBg: 'rgba(25, 49, 53, 1)',
      bodyText: '#b6d7cd',
      contactForm: 'rgba(25, 49, 53, 1)',
    },
  },
})
function App() {
  const [state] = useContext(StateContext)

  return (
    <div className={state.isDark ? 'darkmode' : 'app'}>
      <ThemeProvider theme={state.isDark ? darkTheme : theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
