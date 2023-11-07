export interface Person {
    "name": string;
    "height": string;
    "mass": string;
    "hair_color": string;
    "skin_color": string;
    "eye_color": string;
    "birth_year": string;
    "gender": string;
    "homeworld": string;
    "films": string;[],
    "species": string[];
    "vehicles": string[];
    "starships": string[];
    "created": Date;
    "edited": Date;
    "url": string;
}

export interface PeopleApi {
    count: number;
    next: string;
    previous: string;
    results: Person[];
}

export interface PlanetApi {
    "name": string;
    "rotation_period": string;
    "orbital_period": string;
    "diameter": string;
    "climate": string;
    "gravity": string;
    "terrain": string;
    "surface_water": string;
    "population": string;
    "residents": string[];
    "films": string[];
    "created": Date;
    "edited": Date;
    "url": string;
}

export interface SearchResult {
    count: number;
    next: string;
    previous: string;
    results: Person[];
}

export interface StarWarsFilm {
    count: number;
    next: null;
    previous: null;
    results: StarWarsFilmDetail[];
}

export interface StarWarsFilmDetail {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}


export interface StarWarsSpecies {
    count: number;
    next: string | null;
    previous: string | null;
    results: StarWarsSpeciesDetail[];
}

export interface StarWarsSpeciesDetail {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    people: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface PlanetList {
    count: number;
    next: string | null;
    previous: string | null;
    results: Planet[];
}