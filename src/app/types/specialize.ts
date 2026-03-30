export type SpecializeType = {
  imgSrc: string
  title: string
  desc: string
}

export type FormDataType = {
  name: string;
  address: string;
  email: string;
  phone: string;
  comments: string;
};

export type ErrorsType = FormDataType;

export type TouchedType = {
  [K in keyof FormDataType]: boolean;
};