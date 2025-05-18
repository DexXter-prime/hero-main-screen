export interface IImage {
    id: number;
    image: string;
}

export interface IBaseData {
    id: number;
    urlBase: string;
}

export interface IOption {
    value: string;
    label: string;
}

export interface IFilter {
    id: number;
    subtitle: string;
    defaultValue: IOption;
    options: IOption[];
}

export interface IFiltersFetch {
    filters: IFilter[];
}

export interface IHeroFetch {
    baseData: IBaseData;
    images: IImage[];
}