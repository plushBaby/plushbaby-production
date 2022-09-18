import React, { useState} from 'react';
import { Container, Grow } from '@material-ui/core';
import Form from '../../Form/Form';

const NewListing = () => {

    return (
        <Grow in>
            <section> 
                <Container>
                    <Form />
                </Container>
            </section>
        </Grow>
    );
};

export default NewListing;