export type Accreditation = {
  name: string;
  type?: string;
  provider?: string;
  description: string;
  importance?: string;
  mission?: string[];
  principles?: string[];
  history?: string;
  benefits?: string[];
  company_statement: string;
  image?:string;
};

export type ISOStandard = {
  name: string;
  category: string;
  introduced?: number;
  description: string;
  benefits?: string[];
  purpose?: string[];
  image?:string;
};

export type AccreditationItem = {
  company: string;
  description: string;
  commitment: {
    summary: string;
    key_achievement: string;
  };
  accreditations: Accreditation[];
  iso_standards: ISOStandard[];
};

export type CardItem = {
  type: "accreditation" | "iso";
  data: Accreditation | ISOStandard;
};
