export const CARS = {
  cars: [
    {
      make: "Toyota",
      model: "GR86",
      type: "Coupe",
      year: 2024,
      horsepower: 234,
      price_zar: 649900,
      kms: 5200,
      makeBadge: "Sport",
      serviceHistory: [
        { date: "2024-02-10", description: "Pre-delivery inspection", serviceCenter: "Toyota Service", cost_zar: 0, odometer_kms: 50 },
        { date: "2024-05-12", description: "Oil change & filter", serviceCenter: "Quick Lube", cost_zar: 1299, odometer_kms: 4500 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=800",
    },
    {
      make: "BMW",
      model: "M3 Competition",
      type: "Sedan",
      year: 2024,
      horsepower: 510,
      price_zar: 2149900,
      kms: 960,
      makeBadge: "Limited Edition",
      serviceHistory: [
        { date: "2024-03-01", description: "Delivery inspection", serviceCenter: "BMW Dealer", cost_zar: 0, odometer_kms: 12 },
        { date: "2024-06-01", description: "Brake bedding & inspection", serviceCenter: "Performance Garage", cost_zar: 3400, odometer_kms: 800 }
      ],
      overallCondition: "Good",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
    },
    {
      make: "Ford",
      model: "Mustang GT",
      type: "Coupe",
      year: 2024,
      horsepower: 450,
      price_zar: 1099900,
      kms: 14200,
      makeBadge: "Popular",
      serviceHistory: [
        { date: "2024-04-20", description: "First service - oil & inspect", serviceCenter: "Ford Service", cost_zar: 1599, odometer_kms: 10000 },
        { date: "2025-01-10", description: "Tyre replacement", serviceCenter: "TyrePlus", cost_zar: 4800, odometer_kms: 14000 }
      ],
      overallCondition: "Fair",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",
    },
    {
      make: "Volkswagen",
      model: "Golf GTI",
      type: "Hatchback",
      year: 2024,
      horsepower: 245,
      price_zar: 699900,
      kms: 7600,
      makeBadge: "Hot Hatch",
      serviceHistory: [
        { date: "2024-06-05", description: "Oil change", serviceCenter: "VW Service", cost_zar: 1199, odometer_kms: 5000 },
        { date: "2025-02-14", description: "Clutch inspection", serviceCenter: "AutoTech", cost_zar: 2200, odometer_kms: 7400 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800",
    },
    {
      make: "Porsche",
      model: "911 Carrera",
      type: "Coupe",
      year: 2024,
      horsepower: 385,
      price_zar: 2899000,
      kms: 2300,
      makeBadge: "Luxury",
      serviceHistory: [
        { date: "2024-01-15", description: "PDI & software update", serviceCenter: "Porsche Center", cost_zar: 0, odometer_kms: 20 },
        { date: "2024-09-01", description: "Detail & inspection", serviceCenter: "Concours Detail", cost_zar: 3500, odometer_kms: 2200 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    },
    {
      make: "Mercedes-Benz",
      model: "C63 AMG",
      type: "Sedan",
      year: 2023,
      horsepower: 671,
      price_zar: 2499900,
      kms: 18800,
      makeBadge: "Performance",
      serviceHistory: [
        { date: "2023-11-10", description: "Major service - belts & fluids", serviceCenter: "Mercedes Dealer", cost_zar: 8200, odometer_kms: 15000 },
        { date: "2024-08-22", description: "Suspension check", serviceCenter: "HighTorque", cost_zar: 2100, odometer_kms: 18600 }
      ],
      overallCondition: "Fair",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
    },
    {
      make: "Audi",
      model: "RS3",
      type: "Sedan",
      year: 2024,
      horsepower: 400,
      price_zar: 1349900,
      kms: 4200,
      makeBadge: "Sport",
      serviceHistory: [
        { date: "2024-03-30", description: "Oil & brake fluid", serviceCenter: "Audi Service", cost_zar: 1499, odometer_kms: 3000 },
        { date: "2024-11-02", description: "Tyre rotation", serviceCenter: "WheelWorks", cost_zar: 600, odometer_kms: 4100 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
    },
    {
      make: "Toyota",
      model: "Land Cruiser 300",
      type: "SUV",
      year: 2024,
      horsepower: 309,
      price_zar: 2199900,
      kms: 8100,
      makeBadge: "Off-Road",
      serviceHistory: [
        { date: "2024-04-02", description: "Underbody inspection", serviceCenter: "4x4 Garage", cost_zar: 900, odometer_kms: 7000 },
        { date: "2024-10-10", description: "Oil & filter", serviceCenter: "Toyota Service", cost_zar: 1299, odometer_kms: 8000 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800",
    },
    {
      make: "Honda",
      model: "Civic Type R",
      type: "Hatchback",
      year: 2024,
      horsepower: 315,
      price_zar: 899900,
      kms: 6200,
      makeBadge: "Hot Hatch",
      serviceHistory: [
        { date: "2024-05-18", description: "Oil change & inspection", serviceCenter: "Honda Service", cost_zar: 1299, odometer_kms: 4000 },
        { date: "2024-12-01", description: "Performance check", serviceCenter: "TrackTune", cost_zar: 2600, odometer_kms: 6000 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800",
    },
    {
      make: "Lamborghini",
      model: "Huracán EVO",
      type: "Supercar",
      year: 2023,
      horsepower: 610,
      price_zar: 8499000,
      kms: 3200,
      makeBadge: "Exotic",
      serviceHistory: [
        { date: "2023-12-05", description: "Annual inspection", serviceCenter: "Lambo Specialist", cost_zar: 0, odometer_kms: 100 },
        { date: "2024-07-20", description: "Fluid service & detail", serviceCenter: "Elite Autos", cost_zar: 12000, odometer_kms: 3100 }
      ],
      overallCondition: "Good",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800",
    },
    {
      make: "Ford",
      model: "Ranger Raptor",
      type: "Bakkie",
      year: 2024,
      horsepower: 288,
      price_zar: 949900,
      kms: 15400,
      makeBadge: "Off-Road",
      serviceHistory: [
        { date: "2024-02-28", description: "Service - filters & oil", serviceCenter: "Raptor Garage", cost_zar: 1899, odometer_kms: 9000 },
        { date: "2025-03-10", description: "4x4 system check", serviceCenter: "4x4 Garage", cost_zar: 2100, odometer_kms: 15000 }
      ],
      overallCondition: "Fair",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800",
    },
    {
      make: "Tesla",
      model: "Model 3 Performance",
      type: "Sedan",
      year: 2024,
      horsepower: 455,
      price_zar: 1299900,
      kms: 4200,
      makeBadge: "Electric",
      serviceHistory: [
        { date: "2024-03-10", description: "Battery health check", serviceCenter: "Tesla Service", cost_zar: 0, odometer_kms: 2000 },
        { date: "2024-10-01", description: "Software & alignment", serviceCenter: "Tesla Service", cost_zar: 0, odometer_kms: 4100 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800",
    },
    {
      make: "Jeep",
      model: "Wrangler Rubicon",
      type: "SUV",
      year: 2024,
      horsepower: 285,
      price_zar: 1149900,
      kms: 10200,
      makeBadge: "Off-Road",
      serviceHistory: [
        { date: "2024-06-12", description: "4x4 service & inspection", serviceCenter: "Trail Service", cost_zar: 1700, odometer_kms: 9000 },
        { date: "2025-01-09", description: "Accessory fitment", serviceCenter: "Jeep Outfitters", cost_zar: 3200, odometer_kms: 10000 }
      ],
      overallCondition: "Fair",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800",
    },
    {
      make: "Nissan",
      model: "GT-R Nismo",
      type: "Coupe",
      year: 2023,
      horsepower: 600,
      price_zar: 4999000,
      kms: 7200,
      makeBadge: "Performance",
      serviceHistory: [
        { date: "2024-01-20", description: "Engine check & tune", serviceCenter: "Nismo Specialist", cost_zar: 7800, odometer_kms: 6000 },
        { date: "2024-11-11", description: "Detailing", serviceCenter: "Auto Detail", cost_zar: 2200, odometer_kms: 7100 }
      ],
      overallCondition: "Good",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800",
    },
    {
      make: "Mazda",
      model: "MX-5 RF",
      type: "Convertible",
      year: 2024,
      horsepower: 184,
      price_zar: 649900,
      kms: 3800,
      makeBadge: "Fun",
      serviceHistory: [
        { date: "2024-05-01", description: "Soft-top inspection", serviceCenter: "Mazda Service", cost_zar: 800, odometer_kms: 2000 },
        { date: "2024-09-15", description: "Oil & tyre check", serviceCenter: "RoadCare", cost_zar: 999, odometer_kms: 3700 }
      ],
      overallCondition: "Good",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
    },
    {
      make: "Range Rover",
      model: "Sport SVR",
      type: "SUV",
      year: 2024,
      horsepower: 575,
      price_zar: 3999000,
      kms: 5400,
      makeBadge: "Luxury",
      serviceHistory: [
        { date: "2024-02-18", description: "PDI & software check", serviceCenter: "Land Rover Dealer", cost_zar: 0, odometer_kms: 30 },
        { date: "2024-10-20", description: "Air suspension service", serviceCenter: "Luxury Auto", cost_zar: 9200, odometer_kms: 5200 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
    },
    {
      make: "Chevrolet",
      model: "Corvette Z06",
      type: "Supercar",
      year: 2024,
      horsepower: 670,
      price_zar: 3499000,
      kms: 2900,
      makeBadge: "Exotic",
      serviceHistory: [
        { date: "2024-03-05", description: "Delivery check", serviceCenter: "Chev Dealer", cost_zar: 0, odometer_kms: 10 },
        { date: "2024-09-30", description: "Performance tune", serviceCenter: "TrackWorks", cost_zar: 6200, odometer_kms: 2800 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1604749085723-fb3adadf51f7?w=800",
    },
    {
      make: "Subaru",
      model: "WRX STI",
      type: "Sedan",
      year: 2023,
      horsepower: 310,
      price_zar: 799900,
      kms: 26800,
      makeBadge: "Rally",
      serviceHistory: [
        { date: "2023-10-10", description: "Major service", serviceCenter: "Subaru Service", cost_zar: 4200, odometer_kms: 20000 },
        { date: "2024-08-22", description: "Turbo service", serviceCenter: "Performance Garage", cost_zar: 5300, odometer_kms: 26500 }
      ],
      overallCondition: "Fair",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    },
    {
      make: "Kia",
      model: "EV6 GT",
      type: "Crossover",
      year: 2024,
      horsepower: 577,
      price_zar: 1199900,
      kms: 3100,
      makeBadge: "Electric",
      serviceHistory: [
        { date: "2024-04-01", description: "Battery & software check", serviceCenter: "Kia Service", cost_zar: 0, odometer_kms: 1200 },
        { date: "2024-11-30", description: "Tyre & alignment", serviceCenter: "WheelWorks", cost_zar: 1400, odometer_kms: 3000 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800",
    },
    {
      make: "Ferrari",
      model: "Roma",
      type: "Grand Tourer",
      year: 2024,
      horsepower: 620,
      price_zar: 7999000,
      kms: 2100,
      makeBadge: "Exotic",
      serviceHistory: [
        { date: "2024-02-01", description: "PDI & software", serviceCenter: "Ferrari Dealer", cost_zar: 0, odometer_kms: 5 },
        { date: "2024-08-20", description: "Detail & minor service", serviceCenter: "Elite Autos", cost_zar: 9800, odometer_kms: 2000 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800",
    },
    {
      make: "Toyota",
      model: "GR Yaris",
      type: "Hatchback",
      year: 2024,
      horsepower: 261,
      price_zar: 649900,
      kms: 4700,
      makeBadge: "Sport",
      serviceHistory: [
        { date: "2024-05-03", description: "Oil change", serviceCenter: "Toyota Service", cost_zar: 1199, odometer_kms: 3000 },
        { date: "2024-12-10", description: "Engine check", serviceCenter: "AutoCare", cost_zar: 1800, odometer_kms: 4600 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=800",
    },
    {
      make: "Aston Martin",
      model: "Vantage",
      type: "Coupe",
      year: 2024,
      horsepower: 503,
      price_zar: 4299000,
      kms: 1500,
      makeBadge: "Luxury",
      serviceHistory: [
        { date: "2024-01-10", description: "PDI & valet", serviceCenter: "Aston Dealer", cost_zar: 0, odometer_kms: 5 },
        { date: "2024-07-11", description: "Minor service", serviceCenter: "Prestige Autos", cost_zar: 6200, odometer_kms: 1400 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800",
    },
    {
      make: "Hyundai",
      model: "Ioniq 5 N",
      type: "Crossover",
      year: 2024,
      horsepower: 641,
      price_zar: 1399900,
      kms: 2600,
      makeBadge: "Electric",
      serviceHistory: [
        { date: "2024-03-22", description: "Battery & software check", serviceCenter: "Hyundai Service", cost_zar: 0, odometer_kms: 1000 },
        { date: "2024-09-05", description: "Tyre replacement", serviceCenter: "TyrePlus", cost_zar: 5600, odometer_kms: 2500 }
      ],
      overallCondition: "Good",
      image:
        "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800",
    },
    {
      make: "BMW",
      model: "X5 M Competition",
      type: "SUV",
      year: 2024,
      horsepower: 617,
      price_zar: 2999900,
      kms: 5100,
      makeBadge: "Performance",
      serviceHistory: [
        { date: "2024-02-02", description: "PDI & minor checks", serviceCenter: "BMW Dealer", cost_zar: 0, odometer_kms: 20 },
        { date: "2024-08-18", description: "Brake service", serviceCenter: "BrakeWorks", cost_zar: 3100, odometer_kms: 5000 }
      ],
      overallCondition: "Good",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
    },
    {
      make: "Volkswagen",
      model: "Amarok V6",
      type: "Bakkie",
      year: 2024,
      horsepower: 250,
      price_zar: 749900,
      kms: 11800,
      makeBadge: "Workhorse",
      serviceHistory: [
        { date: "2024-04-10", description: "Fleet service", serviceCenter: "VW Fleet", cost_zar: 1499, odometer_kms: 8000 },
        { date: "2025-01-05", description: "Suspension check", serviceCenter: "TruckCare", cost_zar: 2200, odometer_kms: 11500 }
      ],
      overallCondition: "Fair",
      image:
        "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800",
    },
  ],
};

export const CAR_Type = (type) => {
  return CARS.cars.filter((car) => car.type.toLowerCase() === type.toLowerCase());
};

export const CAR_Make = (make) => {
  return CARS.cars.filter((car) => car.make.toLowerCase() === make.toLowerCase());
}
