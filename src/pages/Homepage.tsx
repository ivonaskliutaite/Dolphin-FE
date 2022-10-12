import React from "react";
import {
    CardContainer,
    CardTitle,
    CardBody
} from  "../components/Card";
import {Button} from "../components/Button";

const Homepage = () => {
    return (
        <CardContainer>
            <CardTitle>
                <h3>Hello Delfi readers</h3>
            </CardTitle>
            <CardBody>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet animi aperiam
                    consectetur dolorem error et eum hic labore magni, necessitatibus nostrum officia perspiciatis quasi
                    reprehenderit sint soluta voluptatum?

            </CardBody>
            <Button onClick = { () => window.location.assign("http://www.delfi.lt") }>
                Parodyti daugiau....
            </Button>
        </CardContainer>
    )
};

export default Homepage;