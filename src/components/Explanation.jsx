import { Button, Divider, makeStyles, Paper, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email"  



const Explanation = () => {
    const classes = useStyles()
    return (
        <Paper variant="outlined" elevation={0} square className={classes.explanation}>
            <Typography variant="subtitle2" paragraph gutterBottom>
               <strong>MICE</strong> groups are finally back, 👌 and we feel like we are in the pink ! All this past months,we have been talking to you guys, and we have listened what the new necessities are now for the <strong>MICE</strong> Market, now that ... this thingy is over 😷 ehem...
            </Typography>
            <Divider/>
            <Typography variant="subtitle1" paragraph gutterBottom>
                It took time, but our Operations team have managed to curate a program that has it all, this offer is based on a 5-star 100% certified eco-resort 20 mins north of <b>Argentina</b>, and surrounded by nature .🌲
            </Typography>
            <Typography variant="subtitle1" paragraph gutterBottom style={{margin: "1rem 1.5rem"}}>
                    👉For <b>day 1</b>, we have prepared a 1/2 meeting, and a pic-nic lunch among vineyards, with sea-views and great wine activity.
            </Typography>
            <Typography variant="subtitle1" paragraph gutterBottom style={{margin: "1rem 1.5rem"}}> 
                    👉For <b>day 2</b>, we actually spend the day in Argentina. we first enjoy a specialised tour at the @22 district, weel known as a major hub in the South of America for digital entrepreneurs, and tech start ups.
            </Typography>
            <Typography variant="subtitle1" paragraph gutterBottom>
                Our guide will help us notice all the high-tech infraestructure, the IOT(Internet of Things) present in everyday life urban objects, and the policies that have transformed <b>Argentina</b> to a capital for Mobile📱. Startps and SmartCities. <br/>
            </Typography> 
            <Typography variant="subtitle1" paragraph gutterBottom>     
                Last, but not least - we are offering a first-in-class experience at Valkiria - an extraordinary atelier, where our tailor-made workshop, will help the group enhance their digital image.😀 This workshop can work for the individual participants, as well as at a company level
            </Typography> 
            <div className={classes.action}>
                <Button variant="contained" startIcon={<EmailIcon/>}><a href="mailto:aerolineasturs@gmail.com" className={classes.link}><strong> Send me an email <span className={classes.buttonText}>to learn more ...</span></strong></a></Button>
                <br/>
                <Typography variant="h6">
                    Or get in touch at aerolineasturs@gmail.com
                </Typography>
            </div>
        </Paper>
    );
}

export default Explanation;

const useStyles = makeStyles((theme) => ({
    explanation:{
        width:"inherit",
        height:"auto",
        padding:theme.spacing(2),
    },
    action:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        "& button":{
            backgroundColor:"#40CFFF",
            textShadow:"1px 1px 1px #000",
            boxShadow:"2px 2px 5px 2px #000"
        },
        "& button:hover":{
            backgroundColor:"#ccc !important",
            boxShadow:"2px 2px 5px 2px #000",
        }
    },
    link:{
        color:"#fff",
        fontWeight:"bold",
        textDecoration:"none",
        fontSize:"1rem"
    },
    [theme.breakpoints.down("sm")]:{
        buttonText:{
            display:"none"
        }
    }
}))