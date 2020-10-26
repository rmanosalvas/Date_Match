import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [{"id":36, "title":"not me", "category":"Romantic", "location":"asdfdsaf", "body":"fdfdfdf", "interested":"", "createdAt":"2020-10-23 00:58:23", "updatedAt":"2020-10-23 00:58:23", "UserId":16},
{"id":46, "title":"Even more normal title length", "category":"Boredom", "location":"OMFG", "body":"Wow", "interested":"", "createdAt":"2020-10-25 01:39:04", "updatedAt":"2020-10-25 01:39:04", "UserId":20},
{"id":50, "title":"Netflix and ATM", "category":"Boredom", "location":"MY HOUSE", "body":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", "interested":"", "createdAt":"2020-10-25 06:03:14", "updatedAt":"2020-10-25 06:03:14", "UserId":20},
{"id":51, "title":"aijsbdfjsdbfaspdfijbb", "category":"Curiosity", "location":"lskjdfgljksfbglsbdflgbsdlfg", "body":"kLKSDJFBGSKDJFG;SJDF;GSDFGSDFG", "interested":"", "createdAt":"2020-10-25 21:08:19", "updatedAt":"2020-10-25 21:08:19", "UserId":20},
{"id":52, "title":"ComeGetYourBootyRubbed", "category":"Romantic", "location":"MyHouse", "body":"https://prod.liveshare.vsengsaas.visualstudio.com/join?2526FA932F37A8EF70A3253BF63E3546832F", "interested":"", "createdAt":"2020-10-26 01:20:08", "updatedAt":"2020-10-26 01:20:08", "UserId":20},
{"id":53, "title":"Long walks", "category":"PSA", "location":"at the mall", "body":"we walk to the mall together", "interested":"", "createdAt":"2020-10-26 01:35:37", "updatedAt":"2020-10-26 01:35:37", "UserId":16},
{"id":54, "title":"Jelly Fishing", "category":"Curiosity", "location":"Narraganset Ri", "body":"Bringnet....", "interested":"", "createdAt":"2020-10-26 04:29:25", "updatedAt":"2020-10-26 04:29:25", "UserId":20}];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" component="main">
        <Grid container spacing={2} alignItems="flex-start">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.id} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.location}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  
                  className={classes.cardHeader}
                /><DeleteForeverIcon/>
                
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography variant="h6" color="textSecondary">
                      {tier.body}
                    </Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained" color="primary">
                    See Poster
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}

      {/* End footer */}
    </React.Fragment>
  );
}