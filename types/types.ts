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
    /*
     * Набор фильтров и их опции
     */
    filters: IFilter[];
}

export interface IHeroFetch {
    /*
     * Основные данные для главного экрана - основное изображение и ID для фото
     */
    baseData: IBaseData;
    /*
     * Набор картинок, которые будут анимироваться
     */
    images: IImage[];
}