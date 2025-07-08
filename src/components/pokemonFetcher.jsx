import { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Alert,
  CircularProgress,
  InputAdornment,
  Fade,
  Container
} from '@mui/material';
import { Search as SearchIcon, CatchingPokemon as PokemonIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { fetchPokemon } from '../helpers/pokemon.js';
import PokemonCarousel from './PokemonCarousel';

const SearchContainer = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: 20,
  padding: theme.spacing(1.5, 2),
  marginBottom: theme.spacing(1),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 1.5),
    borderRadius: 16,
    marginBottom: theme.spacing(0.5),
  },
  [theme.breakpoints.down('xs')]: {
    padding: theme.spacing(0.5, 1),
    borderRadius: 12,
  },
}));

const SearchForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  alignItems: 'center',
  width: '100%',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  '& .MuiOutlinedInput-root': {
    borderRadius: 12,
    fontSize: '1.1rem',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      borderRadius: 8,
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: '1rem',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  padding: '8px 20px',
  fontSize: '0.95rem',
  fontWeight: 600,
  textTransform: 'none',
  background: 'linear-gradient(135deg, #ff6b6b 0%, #e55555 100%)',
  boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #e55555 0%, #d44444 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(255, 107, 107, 0.4)',
  },
  '&:disabled': {
    background: '#ccc',
    transform: 'none',
    boxShadow: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '6px 14px',
    fontSize: '0.9rem',
    borderRadius: 8,
  },
  [theme.breakpoints.down('xs')]: {
    padding: '5px 10px',
    fontSize: '0.85rem',
  },
}));

const WelcomeSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(1),
  width: '100%',
  maxWidth: '100%',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(0.5),
  },
}));

const CarouselSection = styled(Box)(({ theme }) => ({
  flex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 0,
  height: '100%',
}));

function PokemonFetcher() {
  const [pokemonName, setPokemonName] = useState('');
  const [currentPokemonId, setCurrentPokemonId] = useState(25); // Start with Pikachu
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!pokemonName.trim()) return;

    setLoading(true);
    setError('');

    try {
      const data = await fetchPokemon(pokemonName.toLowerCase().trim());
      if (data && data.id) {
        setCurrentPokemonId(data.id);
        setPokemonName('');
      } else {
        setError('Pokémon not found. Please check the name or number and try again.');
      }
    } catch (err) {
      setError('Failed to fetch Pokémon. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    setCurrentPokemonId(randomId);
    setPokemonName('');
    setError('');
  };

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        width: '100%', 
        maxWidth: '100%',
        px: { xs: 0.5, sm: 1, md: 2 },
        boxSizing: 'border-box',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <WelcomeSection>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            color: '#ffffff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            mb: 0.5,
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
          }}
        >
          Discover Pokémon
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 400,
            mb: 1,
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            px: { xs: 1, sm: 2 },
          }}
        >
          Search by name or number, then navigate with arrows
        </Typography>
      </WelcomeSection>

      <SearchContainer elevation={3}>
        <SearchForm onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            label="Pokémon Name or Number"
            variant="outlined"
            value={pokemonName}
            onChange={(event) => setPokemonName(event.target.value)}
            placeholder="e.g., Pikachu, Charizard, or 25"
            disabled={loading}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
            <SearchButton
              type="submit"
              variant="contained"
              disabled={loading || !pokemonName.trim()}
              startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <PokemonIcon />}
            >
              {loading ? 'Searching...' : 'Search'}
            </SearchButton>
            
            <SearchButton
              variant="outlined"
              onClick={handleRandomPokemon}
              disabled={loading}
              sx={{
                borderColor: '#4ecdc4',
                color: '#4ecdc4',
                '&:hover': {
                  borderColor: '#3db8b0',
                  backgroundColor: 'rgba(78, 205, 196, 0.1)',
                },
              }}
            >
              Random
            </SearchButton>
          </Box>
        </SearchForm>

        {error && (
          null
        )}
      </SearchContainer>

      <CarouselSection>
        <PokemonCarousel initialPokemonId={currentPokemonId} />
      </CarouselSection>
    </Container>
  );
}

export default PokemonFetcher;