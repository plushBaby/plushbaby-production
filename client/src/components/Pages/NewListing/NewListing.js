import React, { useState} from 'react';
import { Container, Grow } from '@material-ui/core';

import Form from '../../Form/Form';

const NewListing = () => {

    const [currentId, setCurrentId] = useState(null);
    return (
        <Grow in>
            <section> 
                <Container>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </Container>
                
            </section>
        </Grow>
    );
};

export default NewListing;