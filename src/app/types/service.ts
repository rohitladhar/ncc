export interface ServiceData {
  id: number;
  name: string;
  title?: string;
  [key: string]: any;
}

export interface DataJson {
  ServicesData?: ServiceData[];
}

export interface ServiceProps {
  data?: ServiceData;
}
export type CleaningIcon = {
  id: number;
  icon: string;
};

export type ServiceCard = {
  src: string;
  title: string;
  href:string
};

export type FetchDataType = {
  cleaningIcons: CleaningIcon[];
  serviceCards: ServiceCard[];
};