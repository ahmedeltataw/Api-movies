export interface LinkType {
    title?: string;
    href: string;
    target?: string;
    
    id?: string;
    aria?: string;
    icon?: {
      names?: string ;
      side: "left" | "right";
    };
    text: string;
    Img?:{
      alt: string,
      side: "left" | "right",
    },
    ImageSrc?: string | any,
}

export interface CardType{
  title:string,
  original_title:string,
  original_name:string,
  name:string,
  poster_path:string,
  release_date:string,
  first_air_date:string,
  id:string,
  media_type:string,
  vote_average:number,
  profile_path:string,
  known_for_department:string,
}

export interface spanType {
  name:string;
}