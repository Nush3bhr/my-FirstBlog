import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "aquamarine",
  },
  main: {
    backgroundImage: `linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(0.5, 0.5, 0.5, 0.5)), url('https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393__340.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "5rem",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();

  const arrayMethods = () => {
    let x = ["Banana", "Orange", "Apple", "Mango"];
    let z = ["choc", "milk"];
    let m = ["choco", "milky"];
    console.log(x.concat(m, z));
    console.log(x.pop());
    console.log(x.join(" "));
    console.log(x.push("litchi"));
    let y = x.push("kiwi");
    console.log(y);
    console.log(x);
    console.log((x[0] = "grapes"));
  };
  const arraySortMethods = () => {
    let n = ["Banana", "Orange", "Apple", "Mango"];
    let z = ["122", "21", "131", "2"];
    let m = [122, 21, 131, 2, 2];
    const cars = [
      { type: "Volvo", year: 2016 },
      { type: "Saab", year: 2001 },
      { type: "BMW", year: 2010 },
    ];
    console.log(n.reverse());
    console.log(z.sort()); //alphabetically sorted
    console.log(
      m.sort(function (a, b) {
        return a - b;
      }) // numerically sorted
    );
    console.log(m[2]);
    console.log(
      cars.sort(function (a, b) {
        return a.year - b.year;
      })
    );
    console.log(
      cars.sort(function (a, b) {
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      })
    );
  };

  const arrayIterationMethods = () => {
    let num = [45, 4, 9, 16, 25];
    const cars = [
      { type: "Volvo", year: 2016 },
      { type: "Saab", year: 2001 },
      { type: "BMW", year: 2010 },
    ];
    num.forEach(function (val, index, ar) {
      console.log(val + " -----" + ar + " ----->>" + index);
    });
    const newAr = cars.map((val) => val.type); //not using return for function call
    console.log(newAr);
    const abc = cars.map((val) => {
      return val.type + "anush"; // using
    });
    console.log(abc);

    let cities = [
      { name: "Los Angeles", population: 3792621 },
      { name: "New York", population: 8175133 },
      { name: "Chicago", population: 2695598 },
      { name: "Houston", population: 2099451 },
      { name: "Philadelphia", population: 1526006 },
    ];
    let bigCities = cities.filter((city) => {
      return city.population > 3000000;
    });
    console.log(bigCities);

    let vals = [5, 4, 9, 2, 1];
    let big = vals.reduce((accumulator, value) => {
      return value > accumulator ? value : accumulator;
    });
    console.log(big);
    let divi = vals.reduce((a, v) => a / v);
    console.log(divi);

    const trees = [
      { name: "birch", count: 4 },
      { name: "maple", count: 5 },
      { name: "oak", count: 2 },
    ];

    const result = trees.find((val, index, ar) => {
      return val.name === "oak";
    });
    console.log(result);

    const evergreens = [
      { name: "cedar", count: 2 },
      { name: "fir", count: 6 },
      { name: "pine", count: 3 },
    ];

    const results = evergreens.find((tree, i) => {
      if (tree.count > 1 && i !== 1) return true;
    });
    console.log(results);
  };

  return (
    <div className="App">
      <AppBar
        className={classes.appBar}
        position="static"
        onClick={arrayMethods}
      >
        <Toolbar>
          <Typography variant="h5" color="secondary">
            FoodPLAZA
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.main}>
        <Box> Head Over MEALS</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Wake N Bite
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={arraySortMethods}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523__340.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    ITALIAN
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton>
                    <BookmarkBorderIcon />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={arrayIterationMethods}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://cdn.pixabay.com/photo/2020/12/23/21/15/canele-5856024__340.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    FRENCH
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://cdn.pixabay.com/photo/2014/04/05/11/27/buffet-315691__340.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    INDIAN
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://cdn.pixabay.com/photo/2015/04/06/16/21/korean-food-709606__340.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    CHINESE
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
