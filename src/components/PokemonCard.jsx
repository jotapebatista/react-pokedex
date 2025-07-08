import {
	Card,
	CardContent,
	Typography,
	Box,
	Chip,
	LinearProgress,
	Grid,
	Avatar,
	Divider,
	Fade,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
	Favorite as HeartIcon,
	FlashOn as AttackIcon,
	Shield as DefenseIcon,
	Speed as SpeedIcon,
	Psychology as SpecialIcon,
} from "@mui/icons-material";

const PokemonCardContainer = styled(Card)(({ theme }) => ({
	background: "rgba(255, 255, 255, 0.95)",
	backdropFilter: "blur(10px)",
	borderRadius: 20,
	overflow: "visible",
	boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
	border: "1px solid rgba(255, 255, 255, 0.2)",
	width: "100%",
	maxWidth: "100%",
	boxSizing: "border-box",
	maxHeight: "80vh",
	[theme.breakpoints.down("md")]: {
		maxHeight: "75vh",
		borderRadius: 16,
	},
	[theme.breakpoints.down("sm")]: {
		maxHeight: "70vh",
		borderRadius: 12,
	},
	[theme.breakpoints.down("xs")]: {
		maxHeight: "65vh",
	},
}));

const PokemonImageContainer = styled(Box)(({ theme }) => ({
	position: "relative",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: theme.spacing(2),
	background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
	borderRadius: "20px 20px 0 0",
	borderBottom: "2px solid #e9ecef",
	width: "100%",
	[theme.breakpoints.down("md")]: {
		padding: theme.spacing(1.5),
		borderRadius: "16px 16px 0 0",
	},
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(1),
		borderRadius: "12px 12px 0 0",
	},
}));

const PokemonImage = styled("img")(({ theme }) => ({
	width: 160,
	height: 160,
	objectFit: "contain",
	filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))",
	animation: "float 3s ease-in-out infinite",
	"@keyframes float": {
		"0%, 100%": { transform: "translateY(0px)" },
		"50%": { transform: "translateY(-10px)" },
	},
	[theme.breakpoints.down("md")]: {
		width: 140,
		height: 140,
	},
	[theme.breakpoints.down("sm")]: {
		width: 120,
		height: 120,
	},
	[theme.breakpoints.down("xs")]: {
		width: 100,
		height: 100,
	},
}));

const PokemonNumber = styled(Typography)(({ theme }) => ({
	position: "absolute",
	top: theme.spacing(1),
	right: theme.spacing(1),
	background: "rgba(255, 107, 107, 0.9)",
	color: "#ffffff",
	padding: "3px 8px",
	borderRadius: 16,
	fontSize: "0.75rem",
	fontWeight: 600,
	boxShadow: "0 2px 8px rgba(255, 107, 107, 0.3)",
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.7rem",
		padding: "2px 6px",
	},
	[theme.breakpoints.down("xs")]: {
		fontSize: "0.65rem",
		padding: "2px 5px",
	},
}));

const PokemonName = styled(Typography)(({ theme }) => ({
	fontSize: "1.75rem",
	fontWeight: 700,
	textTransform: "capitalize",
	textAlign: "center",
	marginBottom: theme.spacing(1),
	background: "linear-gradient(135deg, #2c3e50, #34495e)",
	backgroundClip: "text",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.25rem",
	},
	[theme.breakpoints.down("xs")]: {
		fontSize: "1.125rem",
	},
}));

const TypeChip = styled(Chip)(({ theme }) => ({
	margin: theme.spacing(0.25),
	fontWeight: 600,
	fontSize: "0.75rem",
	textTransform: "uppercase",
	letterSpacing: "0.5px",
	boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.7rem",
		margin: theme.spacing(0.2),
	},
	[theme.breakpoints.down("xs")]: {
		fontSize: "0.65rem",
		margin: theme.spacing(0.15),
	},
}));

const StatContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: theme.spacing(0.5),
	marginBottom: theme.spacing(0.5),
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		gap: theme.spacing(0.25),
	},
}));

const StatLabel = styled(Typography)(({ theme }) => ({
	minWidth: 70,
	fontSize: "0.75rem",
	fontWeight: 600,
	color: theme.palette.text.secondary,
	[theme.breakpoints.down("sm")]: {
		minWidth: 60,
		fontSize: "0.7rem",
	},
	[theme.breakpoints.down("xs")]: {
		minWidth: 50,
		fontSize: "0.65rem",
	},
}));

const StatValue = styled(Typography)(({ theme }) => ({
	fontSize: "0.75rem",
	fontWeight: 700,
	color: theme.palette.text.primary,
	minWidth: 25,
	textAlign: "right",
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.7rem",
		minWidth: 20,
	},
	[theme.breakpoints.down("xs")]: {
		fontSize: "0.65rem",
		minWidth: 18,
	},
}));

const StatProgress = styled(LinearProgress)(({ theme }) => ({
	flex: 1,
	height: 6,
	borderRadius: 3,
	backgroundColor: "#e9ecef",
	"& .MuiLinearProgress-bar": {
		borderRadius: 3,
	},
	[theme.breakpoints.down("sm")]: {
		height: 5,
	},
	[theme.breakpoints.down("xs")]: {
		height: 4,
	},
}));

const InfoGrid = styled(Grid)(({ theme }) => ({
	marginTop: theme.spacing(1.5),
	width: "100%",
}));

const InfoItem = styled(Box)(({ theme }) => ({
	textAlign: "center",
	padding: theme.spacing(0.75),
	background: "rgba(78, 205, 196, 0.1)",
	borderRadius: 8,
	border: "1px solid rgba(78, 205, 196, 0.2)",
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(0.5),
		borderRadius: 6,
	},
	[theme.breakpoints.down("xs")]: {
		padding: theme.spacing(0.4),
		borderRadius: 4,
	},
}));

function PokemonCard({ pokemon }) {
	const getStatColor = (statName) => {
		const colors = {
			hp: "#ff6b6b",
			attack: "#ff8e8e",
			defense: "#4ecdc4",
			"special-attack": "#ffe66d",
			"special-defense": "#a8e6cf",
			speed: "#ffb3ba",
		};
		return colors[statName] || "#667eea";
	};

	const getStatIcon = (statName) => {
		const icons = {
			hp: <HeartIcon fontSize="small" />,
			attack: <AttackIcon fontSize="small" />,
			defense: <DefenseIcon fontSize="small" />,
			"special-attack": <SpecialIcon fontSize="small" />,
			"special-defense": <DefenseIcon fontSize="small" />,
			speed: <SpeedIcon fontSize="small" />,
		};
		return icons[statName] || null;
	};

	const formatStatName = (name) => {
		return name.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());
	};

	return (
		<Fade in={true} timeout={800}>
			<PokemonCardContainer>
				<PokemonImageContainer>
					<PokemonNumber variant="body2">
						#{pokemon.id.toString().padStart(3, "0")}
					</PokemonNumber>
					<PokemonImage
						src={
							pokemon.sprites.other["official-artwork"]
								.front_default || pokemon.sprites.front_default
						}
						alt={pokemon.name}
						onError={(e) => {
							e.target.src = pokemon.sprites.front_default;
						}}
					/>
				</PokemonImageContainer>

				<CardContent 
					sx={{ 
						p: { xs: 1, sm: 1.5, md: 2 },
						width: "100%",
						boxSizing: "border-box",
					}}
				>
					<PokemonName variant="h3" gutterBottom>
						{pokemon.name}
					</PokemonName>

					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							flexWrap: "wrap",
							mb: 2,
							gap: { xs: 0.25, sm: 0.5 },
						}}
					>
						{pokemon.types.map((type, index) => (
							<TypeChip
								key={index}
								label={type.type.name}
								className={`pokemon-type ${type.type.name}`}
								size="small"
							/>
						))}
					</Box>

					<Divider sx={{ my: 1.5 }} />

					<InfoGrid container spacing={1}>
						<Grid item xs={6}>
							<InfoItem>
								<Typography
									variant="caption"
									color="text.secondary"
									sx={{ fontSize: { xs: "0.65rem", sm: "0.7rem" } }}
								>
									Height
								</Typography>
								<Typography 
									variant="body2" 
									fontWeight={600}
									sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
								>
									{(pokemon.height / 10).toFixed(1)} m
								</Typography>
							</InfoItem>
						</Grid>
						<Grid item xs={6}>
							<InfoItem>
								<Typography
									variant="caption"
									color="text.secondary"
									sx={{ fontSize: { xs: "0.65rem", sm: "0.7rem" } }}
								>
									Weight
								</Typography>
								<Typography 
									variant="body2" 
									fontWeight={600}
									sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
								>
									{(pokemon.weight / 10).toFixed(1)} kg
								</Typography>
							</InfoItem>
						</Grid>
					</InfoGrid>

					<Typography
						variant="h6"
						sx={{ 
							mt: 2, 
							mb: 1, 
							fontWeight: 600,
							fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
						}}
					>
						Base Stats
					</Typography>

					{pokemon.stats.map((stat, index) => (
						<StatContainer key={index}>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 0.25,
									minWidth: { xs: 70, sm: 80, md: 100 },
								}}
							>
								{getStatIcon(stat.stat.name)}
								<StatLabel>
									{formatStatName(stat.stat.name)}
								</StatLabel>
							</Box>
							<StatValue>{stat.base_stat}</StatValue>
							<StatProgress
								variant="determinate"
								value={(stat.base_stat / 255) * 100}
								sx={{
									"& .MuiLinearProgress-bar": {
										backgroundColor: getStatColor(
											stat.stat.name
										),
									},
								}}
							/>
						</StatContainer>
					))}
				</CardContent>
			</PokemonCardContainer>
		</Fade>
	);
}

export default PokemonCard;
