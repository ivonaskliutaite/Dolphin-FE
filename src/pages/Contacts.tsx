import React, {useState} from 'react';
import styled from "styled-components";
import {
    CardContent,
    Typography,
    Grid,
    TextField,
    Button,
} from "@mui/material";

const CardStyled = styled.div`
  max-width: 550px;
  margin: 0 auto;
  padding: 40px;
`;

const Contacts = () => {
    const [formValues, setFormValues] = useState<{ msg: string }>({msg: ''});

    return (
        <div>
            <Typography gutterBottom variant="h3" align="center" padding="4vh" fontFamily='Raleway'>
                Parašykite mums:
            </Typography>
            <CardStyled>
                <CardContent>
                    <form>
                        <Grid container spacing={3}>
                            <Grid xs={12} sm={6} item>
                                <TextField error={formValues.msg.length === 0 ? true : false} label="Jūsų vardas:" placeholder="jūsų vardas..." variant="outlined"
                                           fullWidth
                                           required/>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Jūsų pavarde:" placeholder="jūsų pavarde..." variant="outlined"
                                           fullWidth/>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField error={formValues.msg.length === 0 ? true : false} type="email" label="Jūsų el. paštas:" placeholder="jūsų el. paštas..."
                                           variant="outlined" fullWidth
                                required/>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField error={formValues.msg.length === 0 ? true : false}
                                           label="Jūsų žinutė:" multiline rows={4}
                                           placeholder="pradėkite rašyti čia..."
                                           variant="outlined" fullWidth required value={formValues.msg}
                                           onChange={(e) => {
                                               setFormValues({
                                                   msg:e.target.value
                                               })
                                           }}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Išsiųsti</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </CardStyled>
        </div>
    )
};

export default Contacts;