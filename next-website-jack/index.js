function Navbar() {
	const classes = useStyles();
  
	return (
	  <AppBar position="static">
		<Toolbar>
		  <Typography variant="h4" className={classes.logo}>
			Navbar
		  </Typography>
			<div className={classes.navlinks}>
			  <Link to="/" className={classes.link}>
				Home
			  </Link>
			  <Link to="/about" className={classes.link}>
				About
			  </Link>
			  <Link to="/contact" className={classes.link}>
				Contact
			  </Link>
			  <Link to="/faq" className={classes.link}>
				FAQ
			  </Link>
			</div>
		</Toolbar>
	  </AppBar>
	);
  }
  export default Navbar;
  