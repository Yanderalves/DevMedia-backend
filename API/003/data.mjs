let data = [
    "As mulheres ganham o direito ao voto nos EUA",
    "O partido comunista chinês é fundado",
    "O império britânico diminui",
    "Ocorreu o grande terremoto na região de Kanto, no Japão",
    "Joseph Stalin assume o lugar de Vladmir Lenin",
    "O estado americano processa John Thomas Scopes por ensinar evolucionismo em uma escola do Tennessee",
    "Os EUA iniciam o seu sistema de autoestradas numeradas",
    "Charles Lindbergh se torna a primeira pessoa a pilotar um avião sobre o oceano atlântico sem escalas",
    "Amelia Earhart se torna a primeira mulher a cruzar o atlântico pilotando um avião",
    "Ocorre a quebra da bolsa de valores de Nova York",
    "Ho Chi Minh funda o partido comunista do Vietnã",
    "A construção do Empire State Building é concluída",
    "Hitler renúncia a sua cidadania austríaca e se torna alemão",
    "Franklin D. Roosvelt é eleito presidente dos Estados Unidos",
    "Hitler se consolida no poder",
    "O presidente Franklin Roosvelt anuncia o New Deal, criando o primeiro sistema de seguro social para aposentados do país",
    "O corredor Afro-Americano Jesse Owens ganha 4 medalhas de ouro nas olimpíadas de Berlim durante o nazismo de Hitler",
    "Trabalhadores da General Motors protestam por 44 dias ocupando a fábrica da GM e conseguem uma aumento de 5% no pagamento",
    "O movimento anti-semita se inicia na Alemanha durante o Nazismo de Hitler",
    "Tem início a segunda guerra mundial",
    "O McDonalds é fundado",
    "Tropas japonesas atacam a base de Pearl Harbor",
    "Tropas americanas chegam a Irlanda do Norte para lutar na guerra da Europa",
    "O químico suíço Albert Hoffman descobre acidentalmente o LSD",
    "Ocorre a invasão da Normandia pelas forças aliadas para tirar as tropas nazistas da França",
    "A segunda guerra mundial termina com ataques atômicos a Hiroshima e Nagazaki, que causaram a rendição do Japão",
    "Tem início a geração Baby Boom, só em 1946 foram mais de 3.4 milhões de crianças nascidas só nos EUA",
    "A Índia consegue sua independência do império britânico, mas acaba divida e se torna duas nações, a Índia, para os Hindús e o Paquistão, para os muçulmanos",
    "Acontece o nascimento do estado de Israel",
    "É fundada a Organização do Tratado do Atlântico Norte, a OTAN, para combater a ameaça Soviética",
    "Tem início a Guerra das Coréias, quando a Coréia do Norte invade a Coréia do Sul, despertando a resposta imediata dos Estados Unidos. A guerra dura três anos",
    "Julius e Ethel Rosenberg são condenados a morte nos EUA por espionagem, após terem vazado informações sobre bombas atômicas para a União Soviética",
    "Os Estados Unidos detonam a primeira bomba de hidrogênio.",
    "Os cientistas James Watson e Francis Crick, da Universidade de Cambridge, são os primeiros a explicar o funcionamento do DNA na replicação dos genes e a sua transmissão para as futuras gerações.",
    "Linda Brown vence a disputa contra o conselho de educação e a suprema corte americana julga inconstitucional a segregação racial em escolas.",
    "Rosa Parks faz história ao se recursas a se levantar e dar lugar a um branco no ônibus. Sua prisão leva a um boicote a empresa e a ascenção do Pastor Martin Luther King Jr.",
    "Protestos na Hungria por democracia acaba na morte de milhares após invasão do Exercito Vermelho da Comunista União Soviética.",
    "O presidente Dwight Eisenhower ordena as tropas federais que proteja 9 alunos afro-americanos que começaram a estudar no colégio Little Rock para alunos brancos, essa foi a primeira ação do governo federal contra a segregação racial no país.",
    "Os Estados Unidos lançam seu primeiro satélite, o Explorer 1.",
    "Fidel Castro invade cuba e se consolida no poder, dando início a ditadura comunista.",
    "O restaurante Woolworth se recusa a atender 4 jovens afro-americanos, desencadeando uma enorme onda de protestos que durou 6 meses e resultou no fim da segregação nos restaurantes.",
    "Ocorre a construção do muro de Berlin",
    "A União Soviética testa misseis em Cuba, a 145km ao sul de Miami, dando início a resposta dos EUA sob o comando de John F Kennedy. A resposta de Kennedy faz a União Soviética remover os mísseis de Cuba.",
    "John F. Kennedy é assassinado.",
    "O presidente Lyndon Johnson dá inicio a sua 'Guerra à Pobreza', destacando a necessidade de reduzir a probreza, acabar acabar com a segregação racial e cuidar da saúde dos idosos do país. Lyndon Johnson criou ainda o ato dos direitos civis no mesmo ano.",
    "O assassinato de Jimmy Lee Jackson pelas tropas do Alabama desencadeia uma passeata em protesto. O evento ficou conhecido como Domingo Sangrento.",
    "Mao Zedong inicia o extermínio de seus rivais políticos. O líder comunista enviou diversos opositores para campos de reeducação e trabalho forçado, e assassinou diversos outros que se opuseram ao seu governo.",
    "Acontece a guerra dos seis dias. Síria, Jordânia, Iraque e Egito atacam Israel, a guerra termina em 6 dias, com um cessar fogo após Israel ocupar areas importantes dos 4 países.",
    "Martin Luther King é assassinado.",
    "Neil Armstrong, Buzz Aldrin e Michael Collins são as primeiras pessoas a pisarem na lua",
    "A guerra na ásia aumenta e desperta protestos anti-guerra nos Estados Unidos dado o involvimento do país no continente.",
    "New York Times publica documentos sobre o envolvimento do governo amerino na guerra do Vietnã",
    "O Presidente Anti-Comunista Richard Nixon faz sua primeira viagem oficial a China, com o objetivo de melhorar a relação entre os dois países.",
    "A suprema corte define que os estados podem impedir o aborto a partir do terceiro trimestre de gestação, exceto quando a gestação oferece risco a vida da mulher.",
    "O presidente Richard Nixon Renuncia durante o processo de impeachment causado pelo escandalo de Watergate.",
    "Dois anos depois as últimas tropas americanas deixarem o Vietnã, as tropas comunistas capturam Saigon.",
    "Dois jatos super-sônicos Concorde levantam voo simultaneamente. Um partindo de Londres para o Barein, e outro de Paris, para o Rio de Janeiro.",
    "Os primeiros computadores pessoais modernos começam a surgir.",
    "Mais de 900 pessoas morrem em um suicídio em massa promovido por um culto em Jonestown, promovido por Jim Jones.",
    "O Irã se torna uma república islâmica.", "Ronald Reagan é eleito presidente dos Estados Unidos.",
    "Surge a AIDS nos Estados Unidos.",
    "Governo Mexicano diz a reserva federal dos Estados Unidos que o país não consegue pagar o empréstimo de 80 bilhões de dólares.",
    "Acontece o nascimento da Internet.",
    "Desastre químico em Bophal, India, afeta mais de 600 mil pessoas, matando mais de 15 mil dessas.",
    "Ronald Reagan se encontra com o Secretário Geral da União Soviética, Mikhail Gorbachev.",
    "A nave Challenger explode 73 segundos após decolar do Cabo Canaveral, causando a morte de 7 astronautas.",
    "A bolsa Dow Jones tem uma queda de 508 pontos, uma situação pior que a da quebra de 1929.",
    "O Tenente Coronel Oliver North e o Vice Almirante John Pointdexter são indiciados por conspiração após venderem armas para o Irã a fim de facilitar a soltura de reféns americanos.", "Acontece a queda do muro de Berlin.",
    "Com o enfraquecimento da União Soviética e do comunismo, a Polônia dissolve o partido comunista e elege seu primeiro presidente, Lech Walesa.",
    "Os Estados Unidos vão para a guerra do oriente médio após Saddam Hussein invadir o Kuwait.",
    "A guerra fria entre Rússia e os EUA termina semanas após o fim da União Soviética.",
    "É criada a União Europeia.", "O site Amazon.com é lançado.",
    "Ataque terrorista acontece em Oklahoma com a explosão de um caminhão-bomba.",
    "A ovelha Dolly é clonada com sucesso.",
    "A IBM Deep Blue se tornou a primeira máquina a derrotar um campeão do Xadrez, derrotando Garry Kasparov duas vezes e empatando com ele três vezes em 6 partidas.",
    "É lançado o buscador Google.",
    "A OTAN inicia sua primeira campanha militar.",
    "A estação espacial internacional é inaugurada.",
    "As torres gêmeas do World Trade Center são derrubadas em um ataque terrorista",
    "George W. Bush cria o departamento de segurança nacional",
    "Os Estados Unidos iniciam os ataques ao Iraque",
    "O Facebook é fundado",
    "o Furacão Katrina destrói New Orleans",
    "Saddam Hussein é executado",
    "Apple anuncia seu primeiro smartphone, o iPhone",
    "O indicador Dow Jones despenca outra vez, dessa vez caindo 777 pontos",
    "Barack Obama é eleito presidente dos Estados Unidos e se torna o primeiro presidente afro-americano do país",
    "11 trabalhadores morrem e 17 ficam feridos em uma explosão na costa da Lousiana em uma exploração de óleo",
    "Bin Laden é assassinado",
    "Cientistas do CERN descobrem uma nova partícula através do colisor de hadrons que eles acreditam ser o Bóson de Higgs, a chamada 'Partícula de Deus'",
    "Edward Snowden expõe segredos de estado dos Estados Unidos e de governos europeus sobre espionagem de outros países",
    "O Presidente Russo Vladmir Putin orquestra anexar a Crimeia à Rússia, causando sanções dos líderes mundiais ao país",
    "A nave New Horizon se torna o primeiro objeto criado pela humanidade a passar por Plutão e observar o planeta de perto",
    "Donald Trump é eleito presidente dos Estados Unidos",
    "Em um espaço de 4 semanas, 3 furacões atingem os Estados Unidos, Harvey, Irma e Maria atingiram o Texas, Florida e o Caribe",
    "Queimadas destroem a Carolina do Norte",
    "Protestos ocorrem em Hong Kong contra tentativa da China de tirar a autonomia do país",
    "Tem início a pandemia de COVID-19"
]

export default data;