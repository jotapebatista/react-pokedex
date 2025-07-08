import { useState, useEffect } from 'react';
import { 
  Box, 
  IconButton, 
  Typography, 
  Fade,
  CircularProgress,
  Alert,
  Button
} from '@mui/material';
import { 
  ChevronLeft as LeftIcon, 
  ChevronRight as RightIcon 
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { fetchPokemon } from '../helpers/pokemon.js';
import PokemonCard from './PokemonCard';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const NavigationContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: theme.spacing(0, 2),
  pointerEvents: 'none',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 1),
  },
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  border: '2px solid rgba(255, 107, 107, 0.3)',
  color: '#ff6b6b',
  width: 56,
  height: 56,
  pointerEvents: 'auto',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.95)',
    transform: 'scale(1.1)',
    boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)',
  },
  '&:disabled': {
    background: 'rgba(200, 200, 200, 0.5)',
    color: '#999',
    transform: 'none',
    boxShadow: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    width: 48,
    height: 48,
  },
  [theme.breakpoints.down('xs')]: {
    width: 40,
    height: 40,
  },
}));

const PokemonInfo = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  padding: theme.spacing(1, 2),
  borderRadius: 20,
  border: '1px solid rgba(255, 107, 107, 0.2)',
  zIndex: 5,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.5, 1.5),
    top: theme.spacing(1),
  },
}));

const CardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    maxWidth: '500px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  height: '100%',
}));

const PlaceholderCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255,255,255,0.95)',
  borderRadius: 20,
  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
  border: '2px solid #ff6b6b',
  width: '100%',
  maxWidth: 400,
  minHeight: 320,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4, 2),
  gap: theme.spacing(2),
  animation: 'shake 0.4s',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 320,
    minHeight: 220,
    padding: theme.spacing(2, 1),
  },
  '@keyframes shake': {
    '0%': { transform: 'translateX(0)' },
    '20%': { transform: 'translateX(-8px)' },
    '40%': { transform: 'translateX(8px)' },
    '60%': { transform: 'translateX(-8px)' },
    '80%': { transform: 'translateX(8px)' },
    '100%': { transform: 'translateX(0)' },
  },
}));

function PokemonCarousel({ initialPokemonId = 25 }) {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentId, setCurrentId] = useState(initialPokemonId);
  const [animationDirection, setAnimationDirection] = useState('');
  const [previousId, setPreviousId] = useState(initialPokemonId);

  const loadPokemon = async (id) => {
    if (id < 1 || id > 898) return; // Pokemon API has 898 Pokemon
    
    setLoading(true);
    setError('');
    
    try {
      const data = await fetchPokemon(id);
      if (data) {
        setCurrentPokemon(data);
        setPreviousId(currentId);
        setCurrentId(id);
      } else {
        setError('Pokémon not found');
      }
    } catch (err) {
      setError('Failed to fetch Pokémon');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPokemon(initialPokemonId);
  }, [initialPokemonId]);

  const handlePrevious = () => {
    if (currentId > 1 && !loading) {
      setAnimationDirection('left');
      loadPokemon(currentId - 1);
    }
  };

  const handleNext = () => {
    if (currentId < 898 && !loading) {
      setAnimationDirection('right');
      loadPokemon(currentId + 1);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      handlePrevious();
    } else if (event.key === 'ArrowRight') {
      handleNext();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentId, loading]);

  return (
    <CarouselContainer>
      <PokemonInfo>
        <Typography 
          variant="body2" 
          sx={{ 
            fontWeight: 600,
            color: '#ff6b6b',
            fontSize: { xs: '0.8rem', sm: '0.875rem' },
          }}
        >
          #{currentId.toString().padStart(3, '0')} of 898
        </Typography>
      </PokemonInfo>

      <NavigationContainer>
        <NavButton
          onClick={handlePrevious}
          disabled={currentId <= 1 || loading}
          aria-label="Previous Pokemon"
        >
          <LeftIcon />
        </NavButton>
        
        <NavButton
          onClick={handleNext}
          disabled={currentId >= 898 || loading}
          aria-label="Next Pokemon"
        >
          <RightIcon />
        </NavButton>
      </NavigationContainer>

      <CardContainer>
        {loading ? (
          <LoadingContainer>
            <CircularProgress size={60} sx={{ color: '#ff6b6b' }} />
            <Typography variant="h6" color="white">
              Loading Pokemon...
            </Typography>
          </LoadingContainer>
        ) : error ? (
          <PlaceholderCard>
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: 64, color: '#ff6b6b' }} />
            <Typography variant="h6" sx={{ color: '#ff6b6b', fontWeight: 700, mb: 1 }}>
              {error.includes('not found') ? 'No Pokémon Found' : 'An Error Occurred'}
            </Typography>
            <Typography variant="body2" sx={{ color: '#7f8c8d', textAlign: 'center' }}>
              {error.includes('not found')
                ? 'Try searching for another name or number.'
                : 'Please try again or check your connection.'}
            </Typography>
            <Button
              variant="contained"
              color="error"
              startIcon={<ArrowBackIcon />}
              sx={{ mt: 2, fontWeight: 600, borderRadius: 8 }}
              onClick={() => loadPokemon(previousId)}
            >
              Back
            </Button>
          </PlaceholderCard>
        ) : currentPokemon ? (
          <Fade 
            in={true} 
            timeout={300}
            style={{
              animation: animationDirection === 'left' 
                ? 'slideLeft 0.3s ease-out' 
                : animationDirection === 'right' 
                ? 'slideRight 0.3s ease-out' 
                : 'none'
            }}
          >
            <Box sx={{ width: '100%' }}>
              <PokemonCard pokemon={currentPokemon} />
            </Box>
          </Fade>
        ) : null}
      </CardContainer>

      <Box sx={{ 
        position: 'absolute', 
        bottom: 16, 
        left: '50%', 
        transform: 'translateX(-50%)',
        display: { xs: 'none', sm: 'block' },
      }}>
       {/*  <Typography 
          variant="caption" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.1)',
            fontSize: '0.75rem',
          }}
        >
          Use arrow keys or click buttons to navigate
        </Typography> */}
      </Box>
    </CarouselContainer>
  );
}

export default PokemonCarousel; 