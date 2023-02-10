import { Container, makeStyles, Typography } from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite";
function StickyFotter() {
    const classes = useStyles()
    return (  
       <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body1">
                    Made with love by <a className={classes.ig} href="https://www.instagram.com/kevin_gonzaloxd/" target="_blank">kev1nG</a> 
                    <FavoriteIcon className={classes.love} style={{color:"red"}}/>
                </Typography>
            </Container>
       </footer> 
    );
}

export default StickyFotter;

const useStyles = makeStyles((theme) => ({
    footer: {
        height:"5vh",
        lineHeight:"5vh",
        textAlign:"center" 
    },
    ig:{
        color:"black",
        fontWeight:"bold",
        textDecoration:"none"
    }
}))