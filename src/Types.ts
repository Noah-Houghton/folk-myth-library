export type Book = {
  Title: string;
  Author: string[];
  Shelf: string;
  Publisher: string;
  Translator: string;
  Volume: number;
  Region: string;
  Type: string;
  Published: number;
  Copies: number;
  Tags: string[];
  Language: string;
  Editor: string[];
};

export type RawBookData = {
  Title: string;
  Author: string;
  Shelf: string;
  Publisher: string;
  Translator: string;
  Volume: string;
  Region: string;
  Type: string;
  Published: string;
  Copies: string;
  Tags: string;
  Language: string;
  Editor: string;
};

export type LibraryState = {
  loading: boolean;
  allBooks: Book[] | [];
};

export type TableData = {
  data: Book[];
  onClick: filterClickHandler;
  activeHeaderIndex: number;
  ascending: boolean;
  loading: boolean;
};

export type filterClickHandler = (key: keyof Book) => any;
