import React from "react";
import { Grid, Card, Text, Button, Link } from "@nextui-org/react";
import { createTheme, NextUIProvider } from "@nextui-org/react"

import Barra from "../Barra/Barra";




function Contact ()  {

    const darkTheme = createTheme({
        type: 'dark'
    });


    const HandlerLinkedIn = () => {
        window.location="https://www.linkedin.com/in/adriana-g%C3%B3mez-39b623224/"
    };
    const HandlerGitHub = () => {
        window.location="https://github.com/AdriGomez95?tab=repositories"
    };
    const HandlerDev = () => {
        window.location="https://dev.to/adrigomez95"
    };




    return (
      <div>
        <Barra/>
        <br></br>
        <NextUIProvider theme={darkTheme}></NextUIProvider>



        <Grid.Container gap={4}>
            <Grid>
                <Card css={{ mw: "330px" }}>
                <Card.Header>
                    <Text b>Email</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Text>
                        If you want to contact me, you can send me an email
                    
                    <Link href="#" icon color="warning">
                        adriana.d@hotmail.com
                    </Link> 
                    </Text>
                </Card.Body>
                </Card>
            </Grid>





            <Grid >
                <Card css={{ mw: "330px" }}>
                <Card.Header>
                    <Text b>LinkedIn</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Text>
                        If you want to see my achievements and certificates, please check my LinkedIn profile.
                    </Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Button color="gradient" rounded bordered auto ghost onClick={HandlerLinkedIn}>
                        Check it
                    </Button>
            
                </Card.Footer>
                </Card>
            </Grid>





            <Grid>
                <Card css={{ mw: "330px" }}>
                <Card.Header>
                    <Text b>GitHub</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Text>
                        You can see some of my projects in my Github repository.
                    </Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Button size="sm" color="error" rounded bordered auto ghost onClick={HandlerGitHub}>
                        Check it
                    </Button>
                </Card.Footer>
                </Card>
            </Grid>





            <Grid sm={12} md={5}>
                <Card css={{ mw: "330px" }}>
                <Card.Header>
                    <Text b>Dev</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Text>
                        Also you can check my blog and some tutorials.
                    </Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Button size="sm" color="success" rounded bordered auto ghost onClick={HandlerDev}>
                        Check it
                    </Button>
                </Card.Footer>
                </Card>
            </Grid>











        </Grid.Container>


      </div>
    );
  };
  
  export default Contact;

  