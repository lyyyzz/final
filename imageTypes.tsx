export interface Image {
    id: string;
    urls: {
      small: string;
      full: string;
    };
    alt_description: string;
  }
  
  export interface FetchImagesResponse {
    results: Image[];
  }
