import { Alert, Grid, LinearProgress } from "@mui/material"
import CarCard from "../components/CarCard"
import { useEffect, useState } from "react"
import type { Car } from "../models/carModel";

const Home = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const getCars = () => {

        setLoading(true)
        fetch(`${apiUrl}/cars`).then((data) =>
            data.json()
        ).then((cars) => {
            setCars(cars);
            setLoading(false);
            setError(false);
            console.log(cars)
        }).catch(error => {

            setLoading(false);
            setError(true);
            console.log(error)
        });
    };

    useEffect(() => {
        getCars();
    }, [])

    if (loading) {
        return <LinearProgress aria-label="Loading...." color="secondary" />
    }

    if (error) {
        return <Alert severity="error">Error loading cars</Alert>
    }

    return (
        <>
            <div style={{padding: 24}}> <h3>View All Cars:</h3></div>
            {cars.length > 0 ? (
                <Grid container spacing={3} style={{ padding: 24 }}>

                    {cars.map((car: Car) => (<Grid key={car._id} size={{ xs: 12, md: 6, lg: 3 }} >
                        <CarCard  _id={car._id} make={car.make} model={car.model} year={car.year} horsepower={car.horsepower} price_zar={car.price_zar} kms={car.kms} serviceHistory={car.serviceHistory} overallCondition={car.overallCondition} image={car.image} />
                    </Grid>))}
                </Grid>
            ) : (
                <p>No cars loaded</p>
            )}

        </>
    )
}


export default Home