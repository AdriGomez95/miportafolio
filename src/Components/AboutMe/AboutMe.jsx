import { Grid, Card, Text } from "@nextui-org/react";

import Barra from "../Barra/Barra";


 /*
 import { createTheme, NextUIProvider } from "@nextui-org/react"
 
    const darkTheme = createTheme({
        type: 'dark'
    });

<NextUIProvider theme={darkTheme}></NextUIProvider>
   
    */



function AboutMe ()  {




    return (
      <div>
        <Barra/>
        <br></br>



        <Text h1 size={60} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%", }} weight="bold">
            I will tell you
        </Text>
        <Text h1 size={60} css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%", }} weight="bold">
            About
        </Text>
        <Text h1 size={60} css={{ textGradient: "45deg, $yellow600 -20%, $red600 100%", }} weight="bold">
            My self
        </Text>



        <Grid.Container gap={3} justify="center">
            <Grid >
                <Card css={{ mw: "330px" }}>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Text  weight="semibold">
                        My name is Adriana Gómez.
                        <br></br>
                        I’m a productive person who appreciate teamwork and independent work too. 
                    </Text>
                </Card.Body>
                <Card.Divider />
                </Card>
            </Grid>
            <Grid >
                <Card css={{ mw: "400px"}}>
                <Card.Divider />
                <Card.Body css={{ py: "$15" }}>
                    <Text weight="semibold" >
                        I like to be with the community, but i also like to remain by myself at certain times. 
                        <br></br>
                        I always try to strive in what i do, compliancing my jobs on time and learning new things in the process.  
                    </Text>
                </Card.Body>
                <Card.Divider />
                </Card>
            </Grid>
            <Grid>
                <Card css={{ mw: "330px" }}>
                <Card.Divider />
                <Card.Body css={{ py: "$13" }}>
                    <Text  weight="semibold">
                        I believe we must be the best version of ourselves everywhere, so that we can reap good fruits of that same effort.
                    </Text>
                </Card.Body>
                <Card.Divider />
                </Card>
            </Grid>
        </Grid.Container>
        <br></br><br></br><br></br><br></br>
        



      </div>
    );
  };
  
  export default AboutMe;

  