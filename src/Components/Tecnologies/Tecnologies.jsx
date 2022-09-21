import { Grid, Card, Text, Progress, Row } from "@nextui-org/react";

import Barra from "../Barra/Barra";

import csharp from './images/csharp.png'
import cpp from './images/cpp.png'
import java from './images/java.png'
import python from './images/python.png'
import mysql from './images/mysql.png'
import oracle from './images/oracle.png'
import postgre from './images/postgre.png'
import reac from './images/reac.png'
import nod from './images/nod.png'
import gns from './images/gns.png'
import postman from './images/postman.jpg'



function AboutMe ()  {
    const list = [
        {
          title: "C++",
          img: cpp,
        },
        {
          title: "Java",
          img: java,
        },
        {
          title: "C#",
          img: csharp,
        },
        {
          title: "Python",
          img: python,
        },
        {
          title: "MySQL",
          img: mysql,
        },
        {
          title: "Oracle",
          img: oracle,
        },
        {
          title: "PostgreSQL",
          img: postgre,
        },
        {
          title: "React",
          img: reac,
        },
        {
          title: "Node JS",
          img: nod,
        },
        {
          title: "GNS3",
          img: gns,
        },
        {
          title: "Postman",
          img: postman,
        },
      ];





    return (
      <div>
        <Barra/>
        <br></br>

        





        <br></br><br></br><br></br><br></br>
        <Text h1  size={40} >Tools and tecnologies </Text>
        <Text h3 css={{ textGradient: "45deg, $pink600 -20%, $blue600 100%", }}> that i use for make my work</Text>
        <br></br><br></br><br></br><br></br>


        <Progress
          indeterminated
          value={50}
          color="gradient"
          status="gradient"
        />
        <br></br><br></br><br></br><br></br>
        

        <Grid.Container gap={2} justify="flex-start">
            {list.map((item, index) => (
                <Grid xs={6} sm={3} key={index}>
                    <Card isPressable>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={item.img}
                                objectFit="contain"
                                width="30%"
                                height={140}
                                alt={item.title}
                            />
                        </Card.Body>
                        <Card.Footer css={{ justifyItems: "flex-start" }}>
                            <Row wrap="wrap" justify="space-between" align="center">
                                <Text b>{item.title}</Text>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>
            ))}
        </Grid.Container>
      </div>
    );
  };
  
  export default AboutMe;

  