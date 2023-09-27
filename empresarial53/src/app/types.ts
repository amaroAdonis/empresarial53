export interface Tenant {
    numeroSala:number,
    nome:string,
    cpfCnpj:number,
    inicioContrato: string,
    fimContrato: string,
    valorContrato:number,
    diaVencimento:number,
    atividade:string,
    email:string,
    telefone:string,
    whatsapp:string
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