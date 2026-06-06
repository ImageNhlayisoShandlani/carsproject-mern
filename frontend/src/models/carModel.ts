export interface Car{
    _id: string;
    make: string;
    model: string;
    year: number;
    horsepower: number;
    price_zar: number;
    kms: number;
    serviceHistory: Object,
    overallCondition: string,
    image: string,
}