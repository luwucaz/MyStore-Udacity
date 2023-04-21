export interface ProductItem{
    id: number,
    name: string,
    price: number,
    url: string,
    description: string
}

export interface ProductItemWithAmount{
    id: number,
    name: string,
    price: number,
    url: string,
    description: string,
    amount: number
}