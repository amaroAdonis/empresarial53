export interface Tenant {
    numeroSala:number,
    nome:string,
    cpfCnpj:string,
    inicioContrato: string,
    fimContrato: string,
    valorContrato:number,
    diaVencimento:number,
    atividade:string,
    email:string,
    telefone:string,
    whatsapp:string
    numeroContrato:string,
    active:boolean
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

export interface User {
    username: string,
    email: string,
    orderNum:number
}