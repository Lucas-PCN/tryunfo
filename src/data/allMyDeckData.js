/* eslint-disable max-lines */
const normal = 'carta normal';
const rare = 'carta rara';
const veryRare = 'carta muito rara';

const myDeckCards = [
  {
    name: 'Ariana Grande',
    description:
      // eslint-disable-next-line max-len
      'Cantora norte-americana multi-talentosa. Em oito anos de carreira solo, ela venceu dois Grammy Awards em um total de doze indicações.',
    attr1: '87',
    attr2: '89',
    attr3: '5',
    url: 'https://www.revistalofficiel.com.br/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F46743%2F1619386711-1567626591164748-ariana-grande-forever-21.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=1080&q=75',
    rare: veryRare,
    trunfo: false,
  },
  {
    name: 'Rihanna',
    description:
      // eslint-disable-next-line max-len
      'Robyn Rihanna Fenty já comercializou diversas obras musicais em todo o mundo, se tornando um dos dez artistas musicais mais vendidos de todos os tempos.',
    attr1: '84',
    attr2: '95',
    attr3: '8',
    url: 'https://aloalobahia.com/images/p/rihanna_alo_alo_bahia.jpg',
    rare: veryRare,
    trunfo: true,
  },
  {
    name: 'Lady Gaga',
    description:
      // eslint-disable-next-line max-len
      'Gaga é reconhecida pelas suas contribuições extravagantes, diferentes e exageradas à indústria musical através de sua moda, aparições públicas, atuações e vídeos musicais.',
    attr1: '88',
    attr2: '86',
    attr3: '2',
    url: 'https://br.paipee.com/wp-content/uploads/2022/03/lady-gaga-lan-san-dien-anh-trong-bo-phim-hanh-dong-moi-lady.jpg',
    rare,
    trunfo: false,
  },
  {
    name: 'Beyoncé',
    description:
      // eslint-disable-next-line max-len
      'Beyoncé, é uma cantora, compositora, atriz, modelo, dançarina, empresária, produtora, diretora e roteirista norte-americana.',
    attr1: '92',
    attr2: '89',
    attr3: '1',
    url: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/002/365/original/Beyonce.jpg?1599179877',
    rare: veryRare,
    trunfo: false,
  },
  {
    name: 'Taylor Swift',
    description:
      // eslint-disable-next-line max-len
      'Cantora estadunidense, suas composições, muitas vezes inspirada pelas suas experiências pessoais, tem recebido ampla cobertura mediática e elogios críticos.',
    attr1: '84',
    attr2: '90',
    attr3: '5',
    url: 'https://i0.wp.com/www.knowledgeisle.com/wp-content/uploads/2021/04/Soon-Youll-Get-Better-Song-by-Taylor-Swift.jpg?fit=900%2C900&ssl=1',
    rare,
    trunfo: false,
  },
  {
    name: 'Katy Perry',
    description:
      // eslint-disable-next-line max-len
      'Autora dos sucessos I Kissed A Girl e Hot N Cold. Por ter uma criação religiosa, Katy polemizou ao aparecer nas paradas dizendo que beijou uma mulher.',
    attr1: '71',
    attr2: '90',
    attr3: '6',
    url: 'https://yt3.ggpht.com/8s2hH6UfSKbED2-UUVgCALU5BXXxvnk2ueNzBaCU-exfeoC9X1OZzDa6uqzI4cOA3ZDqyXjIsg=s900-c-k-c0x00ffffff-no-rj',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Shakira',
    description:
      // eslint-disable-next-line max-len
      'Shakira já ganhou uma estrela na Calçada da Fama de Hollywood e vendeu mais de 80 milhões de discos e singles em todo o mundo.',
    attr1: '82',
    attr2: '87',
    attr3: '6',
    url: 'https://amazonas.news/wp-content/uploads/2021/04/Shakira-900x900.jpg',
    rare,
    trunfo: false,
  },
  {
    name: 'Adele',
    description:
      // eslint-disable-next-line max-len
      'Cantora e compositora britânica, é uma das artistas recordistas de vendas no mundo, com mais de 120 milhões de discos vendidos.',
    attr1: '90',
    attr2: '90',
    attr3: '3',
    url: 'http://orpheumnola.com/wp-content/uploads/2016/02/hero__adele-900x900.jpg',
    rare: veryRare,
    trunfo: false,
  },
  {
    name: 'Karol G',
    description:
      // eslint-disable-next-line max-len
      'Cantora e compositora colombiana. Ela é predominantemente descrita como uma artista de reggaeton e trap latino.',
    attr1: '79',
    attr2: '80',
    attr3: '3',
    url: 'https://lastfm.freetls.fastly.net/i/u/ar0/3e04cdf1d4143e1d123763997eef9dcc',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Sia',
    description:
      // eslint-disable-next-line max-len
      'Por trás das perucas enormes, a cantora e compositora Sia preservou sua cara dos holofotes. Esconder o rosto não a impediu de se tornar um dos maiores nomes da música pop.',
    attr1: '89',
    attr2: '88',
    attr3: '5',
    url: 'https://yt3.ggpht.com/ytc/AKedOLS6MIcaj3YlV83atvCc4ENjTBO3-bbwtA0GfTUn=s900-c-k-c0x00ffffff-no-rj',
    rare: veryRare,
    trunfo: false,
  },
  {
    name: 'Selena Gomez',
    description:
      // eslint-disable-next-line max-len
      'Na sua carreira musical a solo, Selena lançou Stars Dance (2013). Depois lança os aclamados, Revival (2015) e Rare (2020). Em 2021, Selena lança o ep "Revelacion" totalmente em espanhol.',
    attr1: '80',
    attr2: '84',
    attr3: '2',
    url: 'https://64.media.tumblr.com/129655b0ac226e288fca3a47e801fd46/1b0ef23433264baf-80/s1280x1920/6d5700705c902ca808f2744ca3986edf4a9cd407.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Jennifer Lopez',
    description:
      // eslint-disable-next-line max-len
      'Jennifer Lynn Lopez, também conhecida como J.Lo, é uma cantora, compositora, produtora musical, dançarina, atriz, estilista, produtora de televisão, coreógrafa e empresária norte-americana, de origem porto-riquenha.',
    attr1: '84',
    attr2: '87',
    attr3: '1',
    url: 'http://cdn1.valemaisms.com.br//uploads/rails_admin_content_builder/content_builder_image/image/3794/center_jennifer-lopez.jpg',
    rare,
    trunfo: false,
  },
  {
    name: 'Dua Lipa',
    description:
      // eslint-disable-next-line max-len
      'Dua Lipa é uma cantora, compositora e modelo britânica, de origem albanesa. Nascida e criada em Londres, Dua é evidenciada ao mundo em 2017 com o seu sucesso "New Rules".',
    attr1: '90',
    attr2: '89',
    attr3: '1',
    url: 'https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=Yjgyusd44HralBdr0UljR5sRU4l72syUMGMGQymoqKFrG7fVe4L4A3J/TGAoaJstxHZ3Daj6M77v6WcM1wMfiyRF0DE52q6V0vsigQu+6atGWhg=',
    rare: veryRare,
    trunfo: false,
  },
  {
    name: 'Miley Cyrus',
    description:
      // eslint-disable-next-line max-len
      'Miley Ray Cyrus é uma cantora, compositora e atriz norte-americana. Tornou-se mundialmente popular por interpretar Miley Stewart/Hannah Montana na famosa série do Disney Channel Hannah Montana.',
    attr1: '90',
    attr2: '87',
    attr3: '1',
    url: 'https://yt3.ggpht.com/ytc/AAUvwngG0ZjpyFQCXQxr71AvNLFTRRYstE2k61d5GzKj6A=s900-c-k-c0x00ffffff-no-rj',
    rare,
    trunfo: false,
  },
  {
    name: 'Billie Eilish',
    description:
      // eslint-disable-next-line max-len
      'Billie foi indicada para seis Grammy Awards, incluindo Gravação do Ano, Álbum do Ano, Canção do Ano e Melhor Revelação. Ela é a artista mais jovem a ter sido indicada nas principais categorias do Grammy Awards.',
    attr1: '80',
    attr2: '82',
    attr3: '2',
    url: 'https://boomerangmusic.com.br/wp-content/uploads/2021/07/mini-billie-eilish-happier-than-ever-1.jpeg',
    rare,
    trunfo: false,
  },
  {
    name: 'Becky G',
    description:
      // eslint-disable-next-line max-len
      'Rebbeca Marie Gomez, mais conhecida como Becky G, é uma cantora, compositora e atriz norte americana de origem mexicana, que ganhou reconhecimento pela primeira vez em 2011',
    attr1: '79',
    attr2: '80',
    attr3: '2',
    url: 'https://i.pinimg.com/originals/9f/95/ae/9f95ae152209e551f5bb1d1a1e69599a.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Nicki Minaj',
    description:
      // eslint-disable-next-line max-len
      'Onika Tanya Maraj-Petty (Saint James, 8 de dezembro de 1982), conhecida por seu nome artístico Nicki Minaj, é uma rapper, cantora, compositora, modelo e atriz trinidiana radicada nos Estados Unidos.',
    attr1: '82',
    attr2: '94',
    attr3: '7',
    url: 'https://filmdaily.co/wp-content/uploads/2021/01/nicki-01.jpg',
    rare: veryRare,
    trunfo: false,
  },
  {
    name: 'Meghan Trainor',
    description:
      // eslint-disable-next-line max-len
      'Ela alcançou a fama com o single "All About That Bass", o qual chegou ao topo de cinquenta e oito países e se tornou um dos mais vendidos de todos os tempos, tendo inclusive chegado ao número um da Billboard Hot 100 e ficado lá por 8 semanas.',
    attr1: '80',
    attr2: '74',
    attr3: '1',
    url: 'https://yt3.ggpht.com/ytc/AAUvwnh-tLAfYRqETE_rqvzZr86U5rm814MY1De25RTh9w=s900-c-k-c0x00ffffff-no-rj',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Britney Spears',
    description:
      // eslint-disable-next-line max-len
      ' Seu primeiro e segundo álbuns de estúdio, ...Baby One More Time (1999) e Oops!... I Did It Again (2000), tornaram-se sucessos internacionais, com o primeiro tornando-se o álbum mais vendido por uma artista solo adolescente.',
    attr1: '69',
    attr2: '82',
    attr3: '0',
    url: 'https://bordalo.observador.pt/v2/rs:fill:900/c:900:900:nowe:141:0/q:86/plain/https://s3.observador.pt/wp-content/uploads/2021/01/17163731/britney-6.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Anitta',
    description:
      // eslint-disable-next-line max-len
      'Larissa de Macedo Machado (Rio de Janeiro, 30 de março de 1993), mais conhecida pelo seu nome artístico Anitta, é uma cantora, compositora, atriz, dançarina, empresária e apresentadora brasileira.',
    attr1: '87',
    attr2: '81',
    attr3: '0',
    url: 'https://denisecursino.com/wp-content/uploads/2021/04/Anitta-HOPE-Fashion-Week-Creditos-Joao-Arraes.jpg',
    rare,
    trunfo: false,
  },
  {
    name: 'P!nk',
    description:
      // eslint-disable-next-line max-len
      'Alecia Beth Moore Hart, conhecida profissionalmente como Pink (estilizado como P!nk), é uma cantora, e compositora estadunidense, vencedora de três Grammys.',
    attr1: '90',
    attr2: '81',
    attr3: '1',
    url: 'https://artfiles.alphacoders.com/926/thumb-1920-92621.jpg',
    rare,
    trunfo: false,
  },
  {
    name: 'Cardi B',
    description:
      // eslint-disable-next-line max-len
      'Belcalis Marlenis Almánzar (Nova Iorque, 11 de outubro de 1992), conhecida profissionalmente como Cardi B, é uma rapper, compositora, atriz e personalidade de televisão americana.',
    attr1: '83',
    attr2: '91',
    attr3: '4',
    url: 'https://cdn.wallpapersafari.com/13/76/TcoEgj.jpg',
    rare: veryRare,
    trunfo: false,
  },
  {
    name: 'Demi Lovato',
    description:
      // eslint-disable-next-line max-len
      'Lovato já teve quatro singles no top 10 da Billboard Hot 100, "This Is Me", "Skyscraper", "Heart Attack" e "Sorry Not Sorry", e mais quatro entre as 20 mais tocadas.',
    attr1: '83',
    attr2: '84',
    attr3: '1',
    url: 'https://i0.wp.com/pipocamoderna.com.br/wp-content/uploads/2018/08/demi-lovato.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Ellie Goulding',
    description:
      // eslint-disable-next-line max-len
      'Elena Jane "Ellie" Goulding (Hereford, 30 de dezembro de 1986) é uma cantora pop, vocalista multi-instrumentista e produtora musical britânica.',
    attr1: '84',
    attr2: '71',
    attr3: '2',
    url: 'http://dailytrojan.com/wp-content/uploads/2012/10/Ellie-2_web.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Mariah Carey',
    description:
      // eslint-disable-next-line max-len
      'Mariah Carey é uma cantora, compositora, produtora musical e atriz americana. Reconhecida por seu alcance vocal de cinco oitavas, estilo de canto melismático e uso exclusivo do registro de apito',
    attr1: '91',
    attr2: '90',
    attr3: '0',
    url: 'https://diariodegoias.com.br/wp-content/uploads/2021/12/maraiah_carey_youtube.jpg',
    rare,
    trunfo: false,
  },
  {
    name: 'Avril Lavigne',
    description:
      // eslint-disable-next-line max-len
      'Avril Ramona Lavigne (Belleville, 27 de setembro de 1984) é uma cantora e compositora franco-canadense, frequentemente referida por críticos e publicações musicais como a "Rainha do Pop-Punk".',
    attr1: '80',
    attr2: '80',
    attr3: '0',
    url: 'https://i1.wp.com/justnje.com/wp-content/uploads/2019/06/Avril-Lavigne-copy.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Camila Cabello',
    description:
      // eslint-disable-next-line max-len
      'Karla Camila Cabello Estrabao (Cojímar, 3 de março de 1997) é uma cantora e compositora cubana. Ela ganhou destaque como integrante do grupo feminino Fifth Harmony, formado no reality show The X Factor em 2012',
    attr1: '79',
    attr2: '89',
    attr3: '3',
    url: 'https://static1.purebreak.com.br/articles/0/63/82/0/@/251245-camica-cabello-coloca-havana-em-7-na-diapo-2.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Lana Del Rey',
    description:
      // eslint-disable-next-line max-len
      'Elizabeth Woolridge Grant (Nova Iorque, 21 de junho de 1985), mais conhecida como Lana Del Rey, é uma cantora, compositora e poetisa norte-americana.',
    attr1: '80',
    attr2: '78',
    attr3: '0',
    url: 'https://i.pinimg.com/originals/9a/8f/c9/9a8fc9a69a5d41cc2674ca0c061566a2.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Madonna',
    description:
      // eslint-disable-next-line max-len
      'Madonna é uma cantora, compositora, produtora musical, dançarina e empresária americana. Ela é considerada uma das figuras de maior impacto na cultura popular e tem sido muitas vezes referida como a "Rainha do Pop".',
    attr1: '70',
    attr2: '86',
    attr3: '0',
    url: 'https://siterg.uol.com.br/wp-content/uploads/2020/05/1000-1000-madonna-instagram.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Whitney Houston',
    description:
      // eslint-disable-next-line max-len
      'Ela é considerada pela crítica musical como a melhor cantora de todos os tempos. Seus poderosos vocais, que alcançavam extensões muito altas, principalmente nos melismas e vibratos.',
    attr1: '92',
    attr2: '92',
    attr3: '1',
    url: 'https://i.pinimg.com/originals/9a/15/5b/9a155b61f53e2490b63321fec8103bc2.png',
    rare: veryRare,
    trunfo: false,
  },
  {
    name: 'Doja Cat',
    description:
      // eslint-disable-next-line max-len
      'Amala Ratna Zandile Dlamini (Los Angeles, 21 de outubro de 1995), conhecida profissionalmente como Doja Cat, é uma rapper, cantora e compositora norte-americana.',
    attr1: '84',
    attr2: '81',
    attr3: '0',
    url: 'https://pbs.twimg.com/media/FOsdhH0XMAIazsY.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Rosalia',
    description:
      // eslint-disable-next-line max-len
      'Rosalía Vila Tobella (Sant Esteve Sesrovires, 25 de setembro de 1992), conhecida mononimamente como Rosalía, é uma cantora, compositora e produtora musical espanhola.',
    attr1: '82',
    attr2: '81',
    attr3: '1',
    url: 'https://i0.wp.com/musicmattersmedia.com/wp-content/uploads/2020/06/Rosalia.jpg?fit=1000%2C1000&ssl=1',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Christina Aguilera',
    description:
      // eslint-disable-next-line max-len
      'Christina María Aguilera é uma cantora, compositora e atriz americana. Conhecida por sua extensão vocal de quatro oitavas e habilidade de sustentar notas altas, ela é referida como a "Voz da Geração"',
    attr1: '90',
    attr2: '82',
    attr3: '0',
    url: 'https://christinaaguilera.com.br/cabr/wp-content/uploads/2018/06/Liberation_Album-19.jpg',
    rare,
    trunfo: false,
  },
  {
    name: 'Alicia Keys',
    description:
      // eslint-disable-next-line max-len
      'Seu álbum de estreia, Songs in A Minor, foi um sucesso comercial, vendendo mais de doze milhões de cópias em todo o mundo. Ela se tornou a nova artista e artista de R&B mais bem sucedida de 2001.',
    attr1: '89',
    attr2: '80',
    attr3: '0',
    url: 'http://paulogermano.com/wp-content/uploads/2017/03/photo.jpg.png',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Carly Rae Jepsen',
    description:
      // eslint-disable-next-line max-len
      'Carly Rae Jepsen é uma cantora e compositora canadense. A faixa "Call Me Maybe" foi selecionada como seu primeiro single, que chegou ao topo de listas de dezoito países.',
    attr1: '79',
    attr2: '75',
    attr3: '1',
    url: 'https://images.fanart.tv/fanart/jepsen-carly-rae-524d223c29956.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Ke$ha',
    description:
      // eslint-disable-next-line max-len
      'Kesha Rose Sebert, conhecida simplesmente como Kesha é uma cantora e compositora estadunidense. Sua descoberta veio no início de 2009 depois de ter sua voz na canção "Right Round", do rapper Flo Rida.',
    attr1: '72',
    attr2: '73',
    attr3: '1',
    url: 'https://media.pitchfork.com/photos/5e3cb7a4a42e4e000882e2bf/1:1/w_1000,h_1000,c_limit/Kesha-GettyImages-1049137758.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Willow Smith',
    description:
      // eslint-disable-next-line max-len
      'Willow Camille Reign Smith é uma cantora e atriz estadunidense, filha dos atores Will Smith e Jada Pinkett Smith e irmã de Jaden Smith e Trey Smith. ',
    attr1: '90',
    attr2: '78',
    attr3: '0',
    url: 'https://images.fanart.tv/fanart/smith-willow-6108fa077cedc.jpg',
    rare: normal,
    trunfo: false,
  },
  {
    name: 'Jessie J',
    description:
      // eslint-disable-next-line max-len
      'Jessica Ellen Cornish, artisticamente conhecida como Jessie J, (Essex, 27 de março de 1988) é uma cantora e compositora britânica.',
    attr1: '93',
    attr2: '87',
    attr3: '1',
    url: 'https://yt3.ggpht.com/v4zxgUgZ8gCvTdjrV8QzosiVAMKajgRn6QeLy-kjQr_VZk_umuX_OaFiHCO-1ow4sfWCNxiB=s900-c-k-c0x00ffffff-no-rj',
    rare,
    trunfo: false,
  },
];

export default myDeckCards;
