import React from 'react'
import styled from 'styled-components'
import emailjs from "emailjs-com";
import {Button, Card, CardContent, TextField, Grid} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Contact = () => {
    const classes = useStyles();

    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_smy2rco",
          "template_a1eeuzy",
          e.target,
          "user_TLnBH5cOaGYpcsnrzdqQ1"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        e.target.reset();
    }

    
    return (
    //   <Wrapper id="contact">
        // <h1>Contact me</h1>
        <Card>
          <CardContent>
            <form className="contact-form" onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="name"
                    placeholder="name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    required
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Email"
                    placeholder="Email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    required
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                  rows={4}
                    label="message"
                    placeholder="Message"
                    name="message"
                    variant="outlined"
                    multiline
                    fullWidth
                    required
                  ></TextField>
                </Grid>
                <Button
                type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={
                    <Icon>
                      <SendIcon />
                    </Icon>
                  }
                >
                  Send
                </Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
    //   </Wrapper>
    );
}

export default Contact

export const Wrapper = styled.div`
border: 3px solid white;
height: 20em;
width: 16em;
`