import {Column,Entity,Index,JoinColumn,ManyToOne,OneToMany} from "typeorm";


@Index("Cód prod",["cDProd",],{  })
@Index("Cód produto",["cDProd",],{ unique:true })
@Index("Codigo_grupo",["cDigoGrupo",],{  })
@Index("CProduto",["cDigoGrupo","cDigoFabricante",],{  })
@Index("Fabricante",["cDigoFabricante",],{  })
@Index("Familia",["codigoFamLia",],{  })
@Index("Forn_produto",["codigoDoFornecedor",],{  })
@Index("N_modelo",["nModelo",],{  })
@Index("Nome do produto",["nomeProduto",],{  })
@Index("Principio_ativo",["principioAtivo",],{  })
@Index("Referencia",["referencia",],{  })
@Entity("Produtos" ,{schema:"dbo" } )

export  class Produtos {

@Column("varchar",{ name:"Nome produto",length:255 })
nomeProduto:string

@Column("varchar",{ name:"Principio_ativo",length:255 })
principioAtivo:string;

@Column("varchar",{ name:"Codigo família",length:6 })
codigoFamLia:string;

@Column("varchar",{ name:"Código grupo",length:3 })
cDigoGrupo:string;

@Column("varchar",{ name:"Código fabricante",length:6 })
cDigoFabricante:string;

@Column("varchar",{ name:"N_marca",length:50 })
nMarca:string;

@Column("varchar",{ name:"Codigo_do_fornecedor",length:6 })
codigoDoFornecedor:string;

@Column("varchar",{ primary:true,name:"Cód prod",length:7 })
cDProd:string;

@Column("varchar",{ name:"Unidade compra",length:6 })
unidadeCompra:string;

@Column("varchar",{ name:"Unidade venda",length:6 })
unidadeVenda:string;

@Column("varchar",{ name:"Referencia",length:20 })
referencia:string;

@Column("decimal",{ name:"Preço compra",precision:16,scale:6 })
preOCompra:number;

@Column("decimal",{ name:"P_frete",precision:12,scale:4 })
pFrete:number;

@Column("decimal",{ name:"Preço custo",precision:16,scale:6 })
preOCusto:number;

@Column("decimal",{ name:"P_IPI",precision:7,scale:4 })
pIpi:number;

@Column("decimal",{ name:"P_Credito de ICMS",precision:5,scale:2 })
pCreditoDeIcms:number;

@Column("decimal",{ name:"P_Debito de ICMS",precision:5,scale:2 })
pDebitoDeIcms:number;

@Column("decimal",{ name:"P_Outros Impostos",precision:5,scale:2 })
pOutrosImpostos:number;

@Column("decimal",{ name:"P_comissão",precision:5,scale:2 })
pComissO:number;

@Column("decimal",{ name:"P_Despesas Operacional",precision:5,scale:2 })
pDespesasOperacional:number;

@Column("decimal",{ name:"P_Agregado",precision:6,scale:2 })
pAgregado:number;

@Column("decimal",{ name:"Margem",precision:9,scale:4 })
margem:number;

@Column("decimal",{ name:"Preço venda",precision:16,scale:6 })
preOVenda:number;

@Column("decimal",{ name:"Est_minimo",precision:10,scale:3 })
estMinimo:number;

@Column("decimal",{ name:"Est_maximo",precision:10,scale:3 })
estMaximo:number;

@Column("decimal",{ name:"Estoque geral",precision:16,scale:5 })
estoqueGeral:number;

@Column("decimal",{ name:"Pr_custo_ant",precision:16,scale:6 })
prCustoAnt:number;

@Column("decimal",{ name:"Pr_venda_ant",precision:16,scale:6 })
prVendaAnt:number;

@Column("decimal",{ name:"Conversao",precision:8,scale:3 })
conversao:number;

@Column("text",{ name:"Obs" })
obs:string;

@Column("varchar",{ name:"Codigo_barras",length:20 })
codigoBarras:string;

@Column("bit",{ name:"Controlado" })
controlado:boolean;

@Column("bit",{ name:"Antimicrobiano" })
antimicrobiano:boolean;

@Column("varchar",{ name:"Lista_controle",length:5 })
listaControle:string;

@Column("bit",{ name:"Tabelado" })
tabelado:boolean;

@Column("varchar",{ name:"MED_ABC",length:9 })
medAbc:string;

@Column("decimal",{ name:"Preco_ABCFARMA",precision:11,scale:4 })
precoAbcfarma:number;

@Column("bit",{ name:"Venda_proibida" })
vendaProibida:boolean;

@Column("bit",{ name:"Nao_vendavel" })
naoVendavel:boolean;

@Column("bit",{ name:"Inativo" })
inativo:boolean;

@Column("datetime",{ name:"Data_inclusao",nullable:true })
dataInclusao:Date | null;

@Column("datetime",{ name:"Hora_inclusao",nullable:true })
horaInclusao:Date | null;

@Column("varchar",{ name:"Usuario_inclusao",length:25 })
usuarioInclusao:string;

@Column("datetime",{ name:"Data_alteracao",nullable:true })
dataAlteracao:Date | null;

@Column("datetime",{ name:"Hora_alteracao",nullable:true })
horaAlteracao:Date | null;

@Column("varchar",{ name:"Usuario_alteracao",length:25 })
usuarioAlteracao:string;

@Column("varchar",{ name:"cod_barra",length:13 })
codBarra:string;

@Column("decimal",{ name:"peso",precision:13,scale:3 })
peso:number;

@Column("decimal",{ name:"Desconto",precision:8,scale:4 })
desconto:number;

@Column("varchar",{ name:"prod_localiza",length:50 })
prodLocaliza:string;

@Column("bit",{ name:"eVacina" })
eVacina:boolean;

@Column("bit",{ name:"eKit" })
eKit:boolean;

@Column("decimal",{ name:"comissaovista",precision:5,scale:2 })
comissaovista:number;

@Column("decimal",{ name:"Comissaoprazo",precision:5,scale:2 })
comissaoprazo:number;

@Column("decimal",{ name:"custo",precision:10,scale:6 })
custo:number;

@Column("varchar",{ name:"codsub",length:3 })
codsub:string;

@Column("decimal",{ name:"descatacado",precision:8,scale:4 })
descatacado:number;

@Column("decimal",{ name:"precoatacado",precision:11,scale:4 })
precoatacado:number;

@Column("decimal",{ name:"MED_FRA1",precision:15,scale:2 })
medFra1:number;

@Column("decimal",{ name:"embalagem",precision:10,scale:3 })
embalagem:number;

@Column("smallint",{ name:"UN_ABC" })
unAbc:number;

@Column("bit",{ name:"servico" })
servico:boolean;

@Column("decimal",{ name:"Perc_st_agregado",precision:6,scale:2 })
percStAgregado:number;

@Column("decimal",{ name:"Preço_distribuidora",precision:16,scale:6 })
preODistribuidora:number;

@Column("bit",{ name:"Exige_tecnico" })
exigeTecnico:boolean;

@Column("int",{ name:"Cod_similar" })
codSimilar:number;

@Column("varchar",{ name:"Descricao_complementar",length:100 })
descricaoComplementar:string;

@Column("varchar",{ name:"N_modelo",length:50 })
nModelo:string;

@Column("varchar",{ name:"Codigo ncm",length:10 })
codigoNcm:string;

@Column("varchar",{ name:"modBC",length:31 })
modBc:string;

@Column("varchar",{ name:"modBCST",length:37 })
modBcst:string;

@Column("decimal",{ name:"Perc_margem_VL_Adic_ICMSST",precision:6,scale:2 })
percMargemVlAdicIcmsst:number;

@Column("decimal",{ name:"Estoque_matriz",precision:13,scale:3 })
estoqueMatriz:number;

@Column("varchar",{ name:"Tipo_item",length:2 })
tipoItem:string;

@Column("bit",{ name:"Venda_direta" })
vendaDireta:boolean;

@Column("decimal",{ name:"Estoque deposito",precision:13,scale:3 })
estoqueDeposito:number;

@Column("bit",{ name:"sem_desconto_na_venda" })
semDescontoNaVenda:boolean;

@Column("varchar",{ name:"Outras_informacoes",length:255 })
outrasInformacoes:string;

@Column("decimal",{ name:"Estoque_a_retirar",precision:13,scale:3 })
estoqueARetirar:number;

@Column("smallint",{ name:"dias_garantia" })
diasGarantia:number;

@Column("bit",{ name:"da_balanca" })
daBalanca:boolean;

@Column("varchar",{ name:"cod_departamento_balanca",length:2 })
codDepartamentoBalanca:string;

@Column("varchar",{ name:"cod_balanca_tecla",length:6 })
codBalancaTecla:string;

@Column("smallint",{ name:"dias_validade" })
diasValidade:number;

@Column("varchar",{ name:"RegistroMS",length:17 })
registroMs:string;

@Column("bit",{ name:"nao_controla_estoque" })
naoControlaEstoque:boolean;

@Column("bit",{ name:"e_agrotoxico" })
eAgrotoxico:boolean;

@Column("int",{ name:"codigo_agrotoxico" })
codigoAgrotoxico:number;

@Column("datetime",{ name:"termino_promocao",nullable:true })
terminoPromocao:Date | null;

@Column("bit",{ name:"aceita_lote_negativo" })
aceitaLoteNegativo:boolean;

@Column("bit",{ name:"exige_cnpj_cpf" })
exigeCnpjCpf:boolean;

@Column("bit",{ name:"Tem_Formula" })
temFormula:boolean;

@Column("bigint",{ name:"Qt_Por_formula" })
qtPorFormula:string;

@Column("bit",{ name:"Usa_localizacao_padrao" })
usaLocalizacaoPadrao:boolean;

@Column("decimal",{ name:"Estoque_pendente",precision:13,scale:3 })
estoquePendente:number;

@Column("datetime",{ name:"Ultima_alteracao_preco",nullable:true })
ultimaAlteracaoPreco:Date | null;

@Column("datetime",{ name:"Hora_ultima_alteracao_preco",nullable:true })
horaUltimaAlteracaoPreco:Date | null;

@Column("varchar",{ name:"Destino_estoque",length:8 })
destinoEstoque:string;

@Column("varchar",{ name:"Cod_tributo",length:3 })
codTributo:string;

@Column("decimal",{ name:"Preco_pauta",precision:16,scale:6 })
precoPauta:number;

@Column("decimal",{ name:"Max_desconto",precision:5,scale:2 })
maxDesconto:number;

@Column("decimal",{ name:"Preco_promocao",precision:16,scale:6 })
precoPromocao:number;

@Column("decimal",{ name:"Estoque_entregar",precision:13,scale:3 })
estoqueEntregar:number;

@Column("bit",{ name:"Transformacao_automatica" })
transformacaoAutomatica:boolean;

@Column("bit",{ name:"eVermifugo" })
eVermifugo:boolean;

@Column("decimal",{ name:"Diferencial_aliquota",precision:5,scale:2 })
diferencialAliquota:number;

@Column("bit",{ name:"Transformacao_semiautomatica" })
transformacaoSemiautomatica:boolean;

@Column("decimal",{ name:"Quantidade_atacado",precision:15,scale:3 })
quantidadeAtacado:number;

@Column("bit",{ name:"Embalagem_fechada" })
embalagemFechada:boolean;

@Column("varchar",{ name:"Cod_genero",length:2 })
codGenero:string;

@Column("varchar",{ name:"Cod_ex_ipi",length:3 })
codExIpi:string;

@Column("varchar",{ name:"Cod_lst",length:5 })
codLst:string;

@Column("varchar",{ name:"UnidMedidaMedicamento",length:7 })
unidMedidaMedicamento:string;

@Column("varchar",{ name:"NumDBC",length:6 })
numDbc:string;

@Column("varchar",{ name:"Codanp",length:9 })
codanp:string;

@Column("bit",{ name:"Patrimonio" })
patrimonio:boolean;

@Column("decimal",{ name:"Qtd_reserva",precision:16,scale:4 })
qtdReserva:number;

@Column("varchar",{ name:"Cod_Empresa_Origem",length:2 })
codEmpresaOrigem:string;

@Column("bit",{ name:"Forca_promocao" })
forcaPromocao:boolean;

@Column("varchar",{ name:"Num_fci",length:36 })
numFci:string;

@Column("decimal",{ name:"Preco_lista",precision:16,scale:2 })
precoLista:number;

@Column("bit",{ name:"Venda_so_cod_barra" })
vendaSoCodBarra:boolean;

@Column("varchar",{ name:"NFe_TipoProduto",length:11 })
nFeTipoProduto:string;

@Column("varchar",{ name:"Contexto_padrao",length:16 })
contextoPadrao:string;

@Column("varchar",{ name:"Cest",length:9 })
cest:string;

@Column("bit",{ name:"Desconto_isencao" })
descontoIsencao:boolean;

@Column("decimal",{ name:"Icms_estadual",precision:6,scale:2 })
icmsEstadual:number;

@Column("datetime",{ name:"Validade",nullable:true })
validade:Date | null;

@Column("bit",{ name:"Preco_variavel" })
precoVariavel:boolean;

@Column("decimal",{ name:"Perc_glp",precision:6,scale:2 })
percGlp:number;

@Column("decimal",{ name:"Perc_gnn",precision:6,scale:2 })
percGnn:number;

@Column("decimal",{ name:"Perc_gni",precision:6,scale:2 })
percGni:number;

@Column("decimal",{ name:"Valor_partida",precision:13,scale:2 })
valorPartida:number;

@Column("varchar",{ name:"Motivo_isencao_registroms",length:255 })
motivoIsencaoRegistroms:string;

@Column("varchar",{ name:"Cod_enq_ipi",length:3 })
codEnqIpi:string;

@Column("bigint",{ name:"Qt_termino_promocao" })
qtTerminoPromocao:string;

@Column("varchar",{ name:"Codigo_cnae",length:7 })
codigoCnae:string;

@Column("timestamp",{ name:"quick~rs",nullable:true })
quickRs:Date | null;
}