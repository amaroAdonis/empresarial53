export interface Tenant {
    roomNumber:number,
    name:string,
    cpfCnpj:number,
    inicioContrato: string,
    fimContrato: string,
    valorContrato:number,
    expireDay:number,
    email:string,
    telefone:number,
    whatsapp:number
    numeroContrato:string
}

export interface Repair {
    orderNum:number,
    numeroSala:number,
    nomeServico:string,
    dataServico:string,
    valor:number

}

export interface Payment {
    orderNum:number,
    numeroSala:number,
    diaPagamento:number,
    valor:number,
    observacao:string,
    formaPagamento:string

}