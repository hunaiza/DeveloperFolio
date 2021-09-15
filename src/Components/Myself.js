import React from "react";
import "./../index.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: 'lightgray'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '150px'
  },
  MainGrid: {
    justifyContent: 'center',
    cursor: 'pointer',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 60,
  },
  Grid: {
    boxShadow: '10px 0px 10px gray',
  },
  heading: {
    marginLeft: 100
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <h1>MYSELF:</h1>
    <div className={classes.root}>
      <Grid container className={classes.MainGrid} spacing={3}>
        <Grid item className={classes.Grid} xs={9} lg={3} sm={6} md={3}>
          <Paper className={classes.paper}>About Me
            <br /><br /> Developer Of ReactJs <br /> Developer of JS < br /> Mern Developer
          </Paper>
        </Grid>
        <Grid item className={classes.Grid} xs={9} lg={3} sm={6} md={3}>
          <Paper className={classes.paper}>Qualification
            <br /><br />Graduation in Progress in BSCS < br /> Designing is my expertise
          </Paper>
        </Grid>
        <Grid item className={classes.Grid} xs={9} lg={3} sm={6} md={3}>
          <Paper className={classes.paper}>Contact Me
            <br /><br /> <i className="fas fa-mobile-alt" title="github repo" id="github"></i> <span>0331-8960644</span> <br />
            @ <span>huniisolanki10@gmail.com</span>
          </Paper>
        </Grid>
        <Grid item className={classes.Grid} xs={9} lg={3} sm={6} md={3}>
          <Paper className={classes.paper}>My Git Profile
            <br />
            <br />
            <a href="https://github.com/hunaiza" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue' }}>https://github.com/hunaiza</a>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

// const Contact = () => {
//   return (
//     <section className="contact-container" name="contact" id="contact">
//       <div className="profile-image"></div>
//       <h1 className="heading">Contact</h1>

//       <div className="cards-container">
//         {/* Card 1 - Email */}
//         <div className="cards">
//           <div className="contact-icons">
//             <i className="fas fa-envelope"></i>
//           </div>
//           <div className="contact-text">
//             <span>Email</span>
//           </div>
//           <div className="contact-links">
//             <span>qjunaid623@gmail.com</span>
//           </div>
//         </div>

//         {/* Card 2 - Social Media */}
//         <div className="cards">
//           <div className="contact-icons">
//             <i className="fas fa-globe"></i>
//           </div>
//           <div className="contact-text">
//             <span>Social Media</span>
//           </div>
//           <div className="contact-links">
//             {/* github */}
//             <a
//               rel="noopener noreferrer"
//               target="_blank"
//               href="https://github.com/developer-junaid/"
//             >
//               <i className="fab fa-github" title="github" id="github"></i>
//             </a>

//             {/* facebook */}
//             <a
//               rel="noopener noreferrer"
//               target="_blank"
//               href="https://www.facebook.com/profile.php?id=100041078220896"
//             >
//               <i className="fab fa-facebook" title="facebook" id="facebook"></i>
//             </a>

//             {/* linkedIn */}
//             <a
//               rel="noopener noreferrer"
//               target="_blank"
//               href="https://www.linkedin.com/in/developer-junaid/"
//             >
//               <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
//             </a>

//             {/* Twitter */}
//             <a
//               rel="noopener noreferrer"
//               target="_blank"
//               href="https://twitter.com/Junaid084869/"
//             >
//               <i className="fab fa-twitter" title="twitter" id="twitter"></i>
//             </a>

//             {/* Instagram */}
//             <a
//               rel="noopener noreferrer"
//               target="_blank"
//               href="https://www.instagram.com/developerjunaid/"
//             >
//               <i
//                 className="fab fa-instagram"
//                 title="instagram"
//                 id="instagram"
//               ></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
