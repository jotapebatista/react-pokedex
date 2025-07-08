import { AppBar, Toolbar, Typography, Box, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
	background: "linear-gradient(135deg, #ff6b6b 0%, #e55555 100%)",
	boxShadow: "0 4px 20px rgba(255, 107, 107, 0.3)",
	borderBottom: "3px solid #ffe66d",
	position: "relative",
	zIndex: 2,
	width: "100%",
	maxWidth: "100vw",
	overflowX: "hidden",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: theme.spacing(2),
	cursor: "pointer",
	transition: "transform 0.3s ease",
	"&:hover": {
		transform: "scale(1.05)",
	},
	[theme.breakpoints.down("sm")]: {
		gap: theme.spacing(1),
	},
	[theme.breakpoints.down("xs")]: {
		gap: theme.spacing(0.5),
	},
}));

const PokemonTitle = styled(Typography)(({ theme }) => ({
	fontFamily: '"Pokemon Solid", cursive',
	fontSize: "2rem",
	fontWeight: 700,
	color: "#ffffff",
	textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
	letterSpacing: "2px",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.75rem",
		letterSpacing: "1px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem",
		letterSpacing: "1px",
	},
	[theme.breakpoints.down("xs")]: {
		fontSize: "1.25rem",
		letterSpacing: "0.5px",
	},
}));

const Header = () => {
	return (
		<StyledAppBar position="static">
			<Toolbar 
				sx={{ 
					justifyContent: "space-between", 
					py: { xs: 0.5, sm: 1 },
					px: { xs: 1, sm: 2 },
					minHeight: { xs: "56px", sm: "64px" },
					width: "100%",
					maxWidth: "100%",
					boxSizing: "border-box",
				}}
			>
				<LogoContainer>
					<CatchingPokemonIcon
						sx={{
							fontSize: { xs: "2rem", sm: "2.25rem", md: "2.5rem" },
							color: "#ffe66d",
							animation: "pulse 2s infinite",
							"@keyframes pulse": {
								"0%, 100%": { transform: "scale(1)" },
								"50%": { transform: "scale(1.1)" },
							},
						}}
					/>
					<Box sx={{ minWidth: 0, flex: 1 }}>
						<PokemonTitle variant="h1">PokéDex</PokemonTitle>
						<Typography
							variant="caption"
							sx={{
								color: "#ffe66d",
								fontWeight: 500,
								letterSpacing: "1px",
								fontSize: { xs: "0.7rem", sm: "0.75rem" },
								display: { xs: "none", sm: "block" },
							}}
						>
							Discover & Explore Pokémon
						</Typography>
					</Box>
				</LogoContainer>

				<Box sx={{ display: "flex", gap: 1, alignItems: "center", flexShrink: 0 }}>
					<Chip
						label="v2.0"
						size="small"
						sx={{
							background: "rgba(255, 255, 255, 0.2)",
							color: "#ffffff",
							fontWeight: 600,
							border: "1px solid rgba(255, 255, 255, 0.3)",
							fontSize: { xs: "0.7rem", sm: "0.75rem" },
							height: { xs: "20px", sm: "24px" },
						}}
					/>
				</Box>
			</Toolbar>
		</StyledAppBar>
	);
};

export default Header;
