import React from 'react';
import {
    makeStyles,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Link
} from '@material-ui/core';



const TutorialItem = (props) => {
    const classes = useStyle();
    const tutorial = props.item;

    return (
        <Link
            className={classes.link}
            to={`/tutorial/${tutorial.id}`}>
            <Card
                key={tutorial.id}
                className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={tutorial.image} />
                <CardContent className={classes.content}>
                    <Typography variant="h5">
                        {tutorial.title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>

    )
}

const useStyle = makeStyles(theme => ({
    root: {
        maxWidth: 400,
        marginTop: 20
    },
    media: {
        height: 250
    }
}));

export default TutorialItem;
