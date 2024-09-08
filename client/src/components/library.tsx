import MediaCard from './card';
import Grid from '@mui/material/Grid';

export default function Library(){
    return(
        <>
        <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
        <MediaCard />
        </Grid>
        <Grid item xs={6} md={4}>
        <MediaCard />
        </Grid>
        <Grid item xs={6} md={4}>
        <MediaCard />
        </Grid>
        </Grid>
        
        
        </>
    )
}