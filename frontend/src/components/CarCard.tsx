import { DriveEta, Money, Speed, ThumbDown, ThumbsUpDown, ThumbUp } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Car } from "../models/carModel";

export default function CarCard(car: Car) {
    //let condition: any = "Poor";
    return (
        <>
            <Card variant="outlined" style={{boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: 8}}>
                <CardMedia
                    image={car.image}
                    sx={{ height: 250 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                        <DriveEta color="secondary"/> <i>{car.make} - {car.model}</i>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <Money color="secondary"/> R{Intl.NumberFormat('en-ZA').format(car.price_zar)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <Speed color="secondary"/> {Intl.NumberFormat('en-ZA').format(car.kms)}KM
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {car.overallCondition === "Good" ? <ThumbUp color="secondary"  /> : car.overallCondition === "Fair" ? <ThumbsUpDown color="secondary"/> : <ThumbDown color="secondary"/>} Condition - {car.overallCondition}
                    </Typography>
                </CardContent>
                <CardActions style={{backgroundColor: '#f59e0b'}}>
                    <Button size="small">Share</Button>
                    <Button size="small">More...</Button>
                </CardActions>
            </Card>
        </>
    )
}
