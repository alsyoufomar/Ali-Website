import React from 'react'
import { Paper, Typography, Box, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.svg'
import cella from '../../assets/cella.svg'
import { useContext } from 'react'
import { StateContext } from '../../store/index'

export default function LatestResearch({ data }) {
  const [state] = useContext(StateContext)
  return (
    <div className="latest-research">
      <Container disableGutters maxWidth="container">
        <Typography
          sx={{
            color: 'primary.dark',
            mb: '22px',
            mt: '0',
            textAlign: 'center',
          }}
          variant="h3"
          component="h2"
        >
          {data.research_title}
        </Typography>
        <Typography
          sx={{
            maxWidth: '690px',
            mx: 'auto',
            mb: { xs: '10px', sm: '30px', md: '60px' },
            textAlign: 'center',
          }}
          variant="subtitle1"
          color="secondary.dark"
          component="h3"
        >
          {data.research_subtitle}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 3,
            position: 'relative',
            flexWrap: 'wrap',
            zIndex: '10',
          }}
        >
          {data.blogs.data.map((card) => (
            <Paper
              sx={{
                p: '0',
                width: { xs: 1, md: '31%' },
                maxWidth: '450px',
                mx: 'auto',
                flex: '1 1 20rem',
                mt: '3rem',
                backgroundColor: 'customColor.main',
              }}
              key={card.id}
              elevation={state.isDark ? 0 : 8}
            >
              <Box
                sx={{
                  m: 2.5,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '89%',
                  flexGrow: '1',
                }}
              >
                <Box>
                  <img
                    src={card.attributes.main_image.data.attributes.url}
                    alt="thumbnail"
                    className="research-card-image"
                    height="199px"
                    width="100%"
                    title="blog cover image"
                    loading="lazy"
                  />
                  <Typography
                    sx={{ marginTop: '1rem', color: 'primary.dark' }}
                    align="center"
                    variant="h5"
                    component="h4"
                  >
                    {card.attributes.headline}
                  </Typography>
                  <Typography
                    sx={{ my: '0.5rem' }}
                    color="secondary.dark"
                    align="center"
                    variant="body2"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {card.attributes.post_summary}
                  </Typography>
                </Box>
                <Link
                  to={`/blog/${card.id}`}
                  className="link"
                  style={{
                    display: 'block',
                    marginTop: '1rem',
                    textDecoration: 'none',
                    color: '#146B78',
                    fontWeight: '600',
                  }}
                >
                  Read More{' '}
                  <img
                    className="icon"
                    title="arrow icon"
                    loading="lazy"
                    height="auto"
                    width="auto"
                    src={arrow}
                    alt="arrow"
                  />
                </Link>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
      <Box
        component="img"
        sx={{
          height: { xs: '15rem', sm: '20rem', md: '25rem', lg: '30rem' },
          width: 'auto',
          position: 'absolute',
          bottom: '-1rem',
          left: '-5rem',
        }}
        title="cell a background"
        loading="eager"
        alt="cell a"
        src={cella}
      />
    </div>
  )
}
