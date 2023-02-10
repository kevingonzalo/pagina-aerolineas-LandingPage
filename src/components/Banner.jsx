import { makeStyles, Paper, Typography } from "@material-ui/core";
import bannerPhoto from "../img/banner.JPEG";
import logo from "../img/logo.png";
import StarsIcon from "@material-ui/icons/Stars"

function Banner() {
    const classes = useStyles()
    return ( 
        <Paper variant={"outlined"} square elevation={0} className={classes.Banner}>
            <div className={classes.titleContainer}>
                <Typography variant="h4" className={classes.title}>
                    Reset your Events in <span style={{color:"#40CFFF"}}>ARG</span>
                </Typography>
                <img src={logo} alt="logo" className={classes.logo}/>
            </div>
            <div className={classes.subTitleContainer}>
                <Typography className={classes.subTitle} variant="h6">
                    Organize your meeting in a...
                    <br/>
                    100% certified eco-resort 
                    <StarsIcon className={classes.icon} fontSize="small"/>
                    best-in-class-speed-connection
                    <StarsIcon className={classes.icon} fontSize="small"/>
                    surrounded by nature 
                    <StarsIcon className={classes.icon} fontSize="small"/>
                    20-mins from Argentina
                </Typography>
            </div>
        </Paper>
     );
}

export default Banner;

const useStyles = makeStyles((theme) => ({
    Banner: {
       width: "inherit",
       height: "55vh",
       backgroundImage:`url(${bannerPhoto})`,
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
       backgroundPosition:"center center",
       color:"#fff",
       fontWeight:"bold",
       position:"relative",
    },
    titleContainer: {
        background:"#000",
        opacity: 0.8,
        width:"100%",
        height:"9vh",
        position:"absolute",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        top: 0,
        left:0,
        right:0,
    },
    logo: {
        width:"10rem",
        height:"auto",
        padding:theme.spacing(1),
    },
    title:{
        padding:theme.spacing(2)
    },
    subTitleContainer:{
        position:"absolute",
        bottom: 0,
        left:0,
        right:0,
        background:"#000",
        opacity:0.9
    },
    subTitle:{
        color:"#40CFFF",
        fontWeight:"bold",
        padding: theme.spacing(3),
        height:"auto",
        textAlign:"center"
    },
    icon:{
        color:"#fff",
        verticalAlign:"middle",
        margin: theme.spacing(0,1)
    },
    [theme.breakpoints.down("sm")]:{
        title:{
            fontSize:"1.5rem",
        },
        logo:{
            width:"10rem"
        },
        subTitle:{
            fontSize:"1rem"
        }
    },
    [theme.breakpoints.down("xs")]:{
        title:{
            fontSize:"1rem",
        },
        subTitle:{
            display:"none",
        },
        logo:{
            width:"8rem"
        }
    }
}))