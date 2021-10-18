export enum Roles {
    ADMIN='admin',
    DEALER='dealer'
}

export enum Currencies {
    GEL="₾ Gel",
    USD="$ Usd",
    EUR="€ Eur"
}

export type CurentyType = 'USD' | 'EUR' | 'LARI'

export enum Languages {
    ENG="Eng",
    GE="Geo"
}

export const MOBILE_SCREEN_SIZE = 510
export const TABLET_SCREEN_SIZE = 768

export const HEADER_HEIGHT =[
    '50px', // < 480px sm mobile
    '60px', // < 768px md miniTablet
    '70px', // < 992px lg bigTablt
    null,   // < 1280px xl laptop
    '80px', // < 1536px 2xl HFD
  ]