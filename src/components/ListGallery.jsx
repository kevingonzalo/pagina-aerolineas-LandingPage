import { Grid, makeStyles } from "@material-ui/core"
import GalleryComponent from "./GalleryComponent";
import ListComponent from "./ListComponent";

export const ListGallery = () => {
    const classes = useStyles();
  return (
    <div className={classes.gridRoot}>
       <Grid container spacing={3} >
            <Grid item xs={12} md={6}>
                <ListComponent/>
            </Grid>
            <Grid item xs={12} md={6}>
                <GalleryComponent/>
            </Grid>
       </Grid>
    </div>
  )
}


const useStyles = makeStyles((theme)=>{
  
})