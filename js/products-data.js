// Fonte única de dados do catálogo  usada por produtos.html e produto.html
window.CATALOG = {
  brands: {
  "poly": {
    "label": "HP Poly",
    "color": "#0066cc",
    "light": "#e8f4ff",
    "badgeclass": "",
    "logoclass": "poly-logo",
    "site": "https://www.hp.com/br-pt/poly.html"
  },
  "logitech": {
    "label": "Logitech",
    "color": "#006600",
    "light": "#e8ffe8",
    "badgeclass": "logitech-badge",
    "logoclass": "logitech-logo",
    "site": "https://www.logitech.com/pt-br/products/video-conferencing.html"
  },
  "jabra": {
    "label": "Jabra",
    "color": "#cc4400",
    "light": "#fff0e8",
    "badgeclass": "jabra-badge",
    "logoclass": "jabra-logo",
    "site": "https://www.jabra.com/pt-BR"
  },
  "yealink": {
    "label": "Yealink",
    "color": "#3333aa",
    "light": "#f0f0ff",
    "badgeclass": "yealink-badge",
    "logoclass": "yealink-logo",
    "site": "https://yealink.com.br/"
  }
},
  catLabels: {
  "video": "Videoconferência",
  "headsets": "Headsets",
  "telefonia": "Telefonia IP",
  "cameras": "Câmeras",
  "viva-voz": "Viva-voz"
},
  catOrder: ["video", "headsets", "telefonia", "cameras", "viva-voz"],
  segments: {
  "enterprise": {
    "label": "Enterprise",
    "tagline": "Salas de diretoria, auditórios e grandes operações",
    "desc": "Equipamentos de ponta para salas de diretoria, auditórios e grandes salas  máxima performance, presença e qualidade de imagem e áudio.",
    "usos": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ]
  },
  "business": {
    "label": "Business",
    "tagline": "Salas médias e escritórios corporativos",
    "desc": "O equilíbrio ideal entre performance e investimento, para salas de reunião de médio porte e o dia a dia do escritório corporativo.",
    "usos": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ]
  },
  "small-business": {
    "label": "Small Business",
    "tagline": "Huddle rooms e home office",
    "desc": "Soluções compactas e acessíveis para huddle rooms, pequenos escritórios e home office, sem abrir mão da qualidade profissional.",
    "usos": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ]
  }
},
  segmentOrder: ["enterprise", "business", "small-business"],
  tierLabels: {
  "mais-vendido": "Mais vendido",
  "topo-de-linha": "Topo de linha",
  "recomendado": "Recomendado",
  "custo-beneficio": "Custo-benefício"
},
  tierOrder: ["mais-vendido", "topo-de-linha", "recomendado", "custo-beneficio"],
  products: [
  {
    "id": "poly-studio-x72",
    "brand": "poly",
    "cat": "video",
    "name": "Poly Studio X72",
    "segment": "enterprise",
    "tier": "topo-de-linha",
    "desc": "Sistema de videoconferência de altíssima performance para auditórios e salas de diretoria, com dupla câmera 4K e inteligência artificial avançada.",
    "image": "images/produtos/poly-studio-x72.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "A dupla câmera trabalha em conjunto com algoritmos de IA para enquadrar automaticamente os participantes, acompanhar quem está falando e manter todos visíveis mesmo nas salas mais amplas."
  },
  {
    "id": "poly-studio-x52",
    "brand": "poly",
    "cat": "video",
    "name": "Poly Studio X52",
    "segment": "business",
    "tier": "topo-de-linha",
    "desc": "Barra de videoconferência all-in-one desenvolvida para salas de reunião de médio porte, com câmera dupla 4K e enquadramento automático por IA.",
    "image": "images/produtos/poly-studio-x52.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "A câmera dupla trabalha em conjunto com algoritmos de inteligência artificial para enquadrar automaticamente os participantes, acompanhar quem está falando e manter todos visíveis durante toda a reunião. O sistema de áudio Poly elimina ruídos e ecos, proporcionando comunicação clara mesmo em ambientes maiores."
  },
  {
    "id": "poly-studio-x32",
    "brand": "poly",
    "cat": "video",
    "name": "Poly Studio X32",
    "segment": "small-business",
    "tier": "recomendado",
    "desc": "Barra de vídeo compacta tudo-em-um, ideal para huddle rooms e salas pequenas que exigem qualidade profissional sem ocupar espaço.",
    "image": "images/produtos/poly-studio-x32.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Formato compacto que entrega a mesma qualidade de imagem e áudio da linha Studio, otimizado para ambientes menores."
  },
  {
    "id": "poly-studio-e70",
    "brand": "poly",
    "cat": "video",
    "name": "Poly Studio E70",
    "segment": "business",
    "tier": "recomendado",
    "desc": "Câmera inteligente com rastreamento de grupo e vozes, projetada para se integrar a soluções Poly Studio em salas de médio porte.",
    "image": "images/produtos/poly-studio-e70.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Detecta e enquadra automaticamente cada participante da sala, complementando sistemas Poly Studio com uma camada extra de inteligência visual."
  },
  {
    "id": "poly-studio-v52",
    "brand": "poly",
    "cat": "video",
    "name": "Poly Studio V52",
    "segment": "business",
    "tier": "custo-beneficio",
    "desc": "Barra de vídeo versátil para salas médias, com boa relação custo-benefício sem abrir mão dos recursos essenciais de IA.",
    "image": "images/produtos/poly-studio-v52.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Equilíbrio entre custo e recursos, trazendo enquadramento automático e áudio de qualidade Poly para orçamentos mais enxutos."
  },
  {
    "id": "poly-studio-v12",
    "brand": "poly",
    "cat": "video",
    "name": "Poly Studio V12",
    "segment": "small-business",
    "tier": "custo-beneficio",
    "desc": "Câmera USB para videoconferência em pequenos espaços, com ótimo custo-benefício para huddle rooms e salas compactas.",
    "image": "images/produtos/poly-studio-v12.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Solução enxuta para quem precisa equipar salas pequenas com qualidade profissional investindo menos."
  },
  {
    "id": "poly-voyager-focus-2",
    "brand": "poly",
    "cat": "headsets",
    "name": "Poly Voyager Focus 2",
    "segment": "enterprise",
    "tier": null,
    "desc": "Headset sem fio com cancelamento ativo de ruído para máxima concentração e clareza de áudio nas chamadas mais exigentes.",
    "image": "images/produtos/poly-voyager-focus-2.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "ANC de alta performance, ideal para executivos e ambientes corporativos abertos e barulhentos."
  },
  {
    "id": "poly-voyager-free-60plus",
    "brand": "poly",
    "cat": "headsets",
    "name": "Poly Voyager Free 60+",
    "segment": "business",
    "tier": null,
    "desc": "Fones intra-auriculares sem fio com estojo carregador inteligente, ideais para quem está sempre em movimento entre reuniões.",
    "image": "images/produtos/poly-voyager-free-60plus.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Design compacto com estojo touchscreen para gerenciar chamadas sem tirar o fone do ouvido."
  },
  {
    "id": "poly-voyager-4320-uc",
    "brand": "poly",
    "cat": "headsets",
    "name": "Poly Voyager 4320 UC",
    "segment": "business",
    "tier": null,
    "desc": "Headset Bluetooth profissional com base de carregamento, ideal para escritórios híbridos e mobilidade no dia a dia.",
    "image": "images/produtos/poly-voyager-4320-uc.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Base de carregamento inclusa para uso o dia inteiro sem se preocupar com bateria."
  },
  {
    "id": "poly-blackwire-8225",
    "brand": "poly",
    "cat": "headsets",
    "name": "Poly Blackwire 8225",
    "segment": "enterprise",
    "tier": null,
    "desc": "Headset com fio USB e ANC avançado, perfeito para ambientes ruidosos e operações críticas de contact center.",
    "image": "images/produtos/poly-blackwire-8225.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Conexão com fio para estabilidade total em operações de alto volume de chamadas."
  },
  {
    "id": "poly-blackwire-3325",
    "brand": "poly",
    "cat": "headsets",
    "name": "Poly Blackwire 3325",
    "segment": "small-business",
    "tier": null,
    "desc": "Headset com fio de entrada, simples e confiável, para uso diário em pequenos escritórios e home office.",
    "image": "images/produtos/poly-blackwire-3325.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Solução direta e econômica para quem precisa de um headset com fio confiável no dia a dia."
  },
  {
    "id": "logitech-rally-bar",
    "brand": "logitech",
    "cat": "video",
    "name": "Logitech Rally Bar",
    "segment": "enterprise",
    "tier": null,
    "desc": "Barra de videoconferência tudo-em-um com câmera AI, microfones beamforming e alto-falantes integrados para salas maiores.",
    "image": "images/produtos/logitech-rally-bar.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Câmera com IA e zoom óptico para acompanhar a dinâmica de salas grandes com naturalidade."
  },
  {
    "id": "logitech-rally-bar-mini",
    "brand": "logitech",
    "cat": "video",
    "name": "Logitech Rally Bar Mini",
    "segment": "business",
    "tier": null,
    "desc": "Versão compacta da Rally Bar para salas de médio porte, mantendo a qualidade de imagem e áudio premium da linha Rally.",
    "image": "images/produtos/logitech-rally-bar-mini.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Toda a qualidade Rally em um formato mais compacto, ideal para salas de reunião padrão."
  },
  {
    "id": "logitech-rally-plus",
    "brand": "logitech",
    "cat": "video",
    "name": "Logitech Rally Plus",
    "segment": "enterprise",
    "tier": null,
    "desc": "Kit premium de videoconferência com câmera PTZ de alta qualidade, viva-voz expansível e controle remoto dedicado.",
    "image": "images/produtos/logitech-rally-plus.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Sistema modular e expansível, projetado para as salas mais exigentes da empresa."
  },
  {
    "id": "logitech-meetup-2",
    "brand": "logitech",
    "cat": "video",
    "name": "Logitech MeetUp 2",
    "segment": "small-business",
    "tier": "mais-vendido",
    "desc": "Nova geração da câmera conferencebar compacta, com lente grande angular e IA aprimorada  a substituta natural da MeetUp original.",
    "image": "images/produtos/logitech-meetup-2.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Sucessora da MeetUp clássica, hoje a escolha mais popular da Logitech para huddle rooms e salas pequenas."
  },
  {
    "id": "logitech-roommate",
    "brand": "logitech",
    "cat": "video",
    "name": "Logitech RoomMate",
    "segment": "business",
    "tier": null,
    "desc": "Appliance de sala que transforma qualquer PC certificado em um sistema completo de videoconferência gerenciável remotamente.",
    "image": "images/produtos/logitech-roommate.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Simplifica a gestão de salas de médio porte, centralizando o controle de todos os dispositivos conectados."
  },
  {
    "id": "logitech-mx-brio-4k",
    "brand": "logitech",
    "cat": "cameras",
    "name": "Logitech MX Brio 4K",
    "segment": "enterprise",
    "tier": "mais-vendido",
    "desc": "Webcam 4K premium com HDR, reconhecimento facial e ajuste automático de luz  hoje a webcam mais vendida da Logitech.",
    "image": "images/produtos/logitech-mx-brio-4k.jpg",
    "highlights": [
      "Resolução de alta definição para imagem nítida",
      "Campo de visão amplo com ajuste automático de enquadramento",
      "Conexão USB plug-and-play, sem necessidade de drivers",
      "Correção automática de luz e balanço de branco",
      "Compatível com as principais plataformas de videochamada"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Sensor de alta definição",
      "Lente grande angular",
      "Foco e exposição automáticos",
      "Plug-and-play via USB",
      "Compatibilidade universal com softwares de videochamada"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Cisco Webex"
    ],
    "differentiator": "Sucessora da linha Brio clássica, entrega a mais alta qualidade de imagem para executivos e criadores de conteúdo."
  },
  {
    "id": "logitech-brio-505",
    "brand": "logitech",
    "cat": "cameras",
    "name": "Logitech Brio 505",
    "segment": "business",
    "tier": null,
    "desc": "Webcam Full HD com IA para enquadramento automático, ideal para o profissional híbrido que vive em videochamadas.",
    "image": "images/produtos/logitech-brio-505.jpg",
    "highlights": [
      "Resolução de alta definição para imagem nítida",
      "Campo de visão amplo com ajuste automático de enquadramento",
      "Conexão USB plug-and-play, sem necessidade de drivers",
      "Correção automática de luz e balanço de branco",
      "Compatível com as principais plataformas de videochamada"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Sensor de alta definição",
      "Lente grande angular",
      "Foco e exposição automáticos",
      "Plug-and-play via USB",
      "Compatibilidade universal com softwares de videochamada"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Cisco Webex"
    ],
    "differentiator": "Equilíbrio entre qualidade de imagem e praticidade para o dia a dia corporativo."
  },
  {
    "id": "logitech-brio-305",
    "brand": "logitech",
    "cat": "cameras",
    "name": "Logitech Brio 305",
    "segment": "small-business",
    "tier": null,
    "desc": "Webcam compacta e acessível, com boa qualidade de imagem para o essencial das videochamadas do dia a dia.",
    "image": "images/produtos/logitech-brio-305.jpg",
    "highlights": [
      "Resolução de alta definição para imagem nítida",
      "Campo de visão amplo com ajuste automático de enquadramento",
      "Conexão USB plug-and-play, sem necessidade de drivers",
      "Correção automática de luz e balanço de branco",
      "Compatível com as principais plataformas de videochamada"
    ],
    "idealFor": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ],
    "features": [
      "Sensor de alta definição",
      "Lente grande angular",
      "Foco e exposição automáticos",
      "Plug-and-play via USB",
      "Compatibilidade universal com softwares de videochamada"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Cisco Webex"
    ],
    "differentiator": "Opção de entrada para quem precisa equipar rapidamente um home office ou posto de trabalho."
  },
  {
    "id": "logitech-zone-wireless-2",
    "brand": "logitech",
    "cat": "headsets",
    "name": "Logitech Zone Wireless 2",
    "segment": "enterprise",
    "tier": "mais-vendido",
    "desc": "Headset sem fio premium com cancelamento de ruído híbrido, certificado para as principais plataformas de colaboração.",
    "image": "images/produtos/logitech-zone-wireless-2.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "O headset mais vendido da linha Zone, com cancelamento de ruído híbrido de última geração."
  },
  {
    "id": "logitech-zone-vibe-wireless",
    "brand": "logitech",
    "cat": "headsets",
    "name": "Logitech Zone Vibe Wireless",
    "segment": "business",
    "tier": null,
    "desc": "Headset sem fio leve e confortável, com boa autonomia de bateria para o uso corporativo do dia a dia.",
    "image": "images/produtos/logitech-zone-vibe-wireless.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Equilíbrio entre conforto, mobilidade e qualidade de áudio para o escritório híbrido."
  },
  {
    "id": "logitech-zone-wired",
    "brand": "logitech",
    "cat": "headsets",
    "name": "Logitech Zone Wired",
    "segment": "small-business",
    "tier": null,
    "desc": "Headset com fio simples e eficiente, ideal para quem busca qualidade Logitech com investimento reduzido.",
    "image": "images/produtos/logitech-zone-wired.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Opção econômica e estável para uso diário em pequenos escritórios."
  },
  {
    "id": "jabra-panacast-50",
    "brand": "jabra",
    "cat": "video",
    "name": "Jabra PanaCast 50",
    "segment": "enterprise",
    "tier": null,
    "desc": "Câmera panorâmica 180° com IA integrada para salas de reunião, com detecção automática de participantes.",
    "image": "images/produtos/jabra-panacast-50.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Visão panorâmica de 180° sem pontos cegos, ideal para salas grandes com muitos participantes."
  },
  {
    "id": "jabra-panacast-50-vbs",
    "brand": "jabra",
    "cat": "video",
    "name": "Jabra PanaCast 50 VBS",
    "segment": "business",
    "tier": null,
    "desc": "Sistema completo tudo-em-um que combina a câmera panorâmica PanaCast 50 com processamento de vídeo integrado.",
    "image": "images/produtos/jabra-panacast-50-vbs.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Solução completa pronta para usar, sem necessidade de PC dedicado na sala."
  },
  {
    "id": "jabra-panacast-20",
    "brand": "jabra",
    "cat": "video",
    "name": "Jabra PanaCast 20",
    "segment": "small-business",
    "tier": null,
    "desc": "Webcam 4K inteligente com enquadramento automático, perfeita para mesas individuais e salas pequenas.",
    "image": "images/produtos/jabra-panacast-20.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Enquadramento automático inteligente que segue o usuário, ideal para huddle rooms e home office."
  },
  {
    "id": "jabra-evolve2-85",
    "brand": "jabra",
    "cat": "headsets",
    "name": "Jabra Evolve2 85",
    "segment": "enterprise",
    "tier": null,
    "desc": "O headset mais avançado da linha Evolve2, com ANC inteligente por IA e design premium para o executivo exigente.",
    "image": "images/produtos/jabra-evolve2-85.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Cancelamento de ruído adaptativo por IA, o mais avançado da marca."
  },
  {
    "id": "jabra-evolve2-75",
    "brand": "jabra",
    "cat": "headsets",
    "name": "Jabra Evolve2 75",
    "segment": "business",
    "tier": null,
    "desc": "Headset sem fio versátil com excelente cancelamento de ruído, equilíbrio entre performance e investimento.",
    "image": "images/produtos/jabra-evolve2-75.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Ótimo custo-benefício dentro da linha Evolve2, sem abrir mão da qualidade Jabra."
  },
  {
    "id": "jabra-evolve2-65-flex",
    "brand": "jabra",
    "cat": "headsets",
    "name": "Jabra Evolve2 65 Flex",
    "segment": "business",
    "tier": "mais-vendido",
    "desc": "Versão Flex do Evolve2 65, com hastes flexíveis e ótima portabilidade  hoje um dos headsets mais vendidos da Jabra.",
    "image": "images/produtos/jabra-evolve2-65-flex.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Design flexível e dobrável, perfeito para quem viaja e transita entre escritório e home office."
  },
  {
    "id": "jabra-evolve2-55",
    "brand": "jabra",
    "cat": "headsets",
    "name": "Jabra Evolve2 55",
    "segment": "small-business",
    "tier": null,
    "desc": "Headset de entrada da linha Evolve2, com ótimo custo-benefício e cancelamento de ruído eficiente.",
    "image": "images/produtos/jabra-evolve2-55.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Melhor custo-benefício da linha, sem abrir mão da qualidade Jabra."
  },
  {
    "id": "jabra-engage-55",
    "brand": "jabra",
    "cat": "headsets",
    "name": "Jabra Engage 55",
    "segment": "enterprise",
    "tier": null,
    "desc": "Headset profissional voltado a contact centers de alto volume, com áudio de nível corporativo e alto alcance sem fio.",
    "image": "images/produtos/jabra-engage-55.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Desenvolvido especificamente para operações críticas de contact center com alto volume de chamadas."
  },
  {
    "id": "jabra-speak2-75",
    "brand": "jabra",
    "cat": "viva-voz",
    "name": "Jabra Speak2 75",
    "segment": "enterprise",
    "tier": "mais-vendido",
    "desc": "Speakerphone premium com cancelamento de ruído por IA  o viva-voz mais vendido da Jabra para salas híbridas.",
    "image": "images/produtos/jabra-speak2-75.jpg",
    "highlights": [
      "Microfones de 360° para captar vozes em toda a sala",
      "Cancelamento de ruído e eco por inteligência artificial",
      "Conectividade Bluetooth e USB para uso flexível",
      "Tela ou controles integrados para gestão da chamada",
      "Bateria de longa duração para uso portátil (quando aplicável)"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Microfones omnidirecionais",
      "Cancelamento de eco acústico",
      "Conectividade Bluetooth e USB-C",
      "Design portátil",
      "Controles físicos intuitivos",
      "Certificação para plataformas de UC"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Chamadas via Bluetooth e USB"
    ],
    "differentiator": "IA de cancelamento de ruído treinada especificamente para ambientes híbridos e salas de reunião exigentes."
  },
  {
    "id": "jabra-speak2-55",
    "brand": "jabra",
    "cat": "viva-voz",
    "name": "Jabra Speak2 55",
    "segment": "business",
    "tier": null,
    "desc": "Speakerphone versátil e portátil, com ótima captação de voz para salas de reunião de médio porte.",
    "image": "images/produtos/jabra-speak2-55.jpg",
    "highlights": [
      "Microfones de 360° para captar vozes em toda a sala",
      "Cancelamento de ruído e eco por inteligência artificial",
      "Conectividade Bluetooth e USB para uso flexível",
      "Tela ou controles integrados para gestão da chamada",
      "Bateria de longa duração para uso portátil (quando aplicável)"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Microfones omnidirecionais",
      "Cancelamento de eco acústico",
      "Conectividade Bluetooth e USB-C",
      "Design portátil",
      "Controles físicos intuitivos",
      "Certificação para plataformas de UC"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Chamadas via Bluetooth e USB"
    ],
    "differentiator": "Equilíbrio entre portabilidade e qualidade de áudio para o dia a dia corporativo."
  },
  {
    "id": "jabra-speak2-40",
    "brand": "jabra",
    "cat": "viva-voz",
    "name": "Jabra Speak2 40",
    "segment": "small-business",
    "tier": null,
    "desc": "Speakerphone compacto e acessível, ideal para pequenas salas e uso individual em home office.",
    "image": "images/produtos/jabra-speak2-40.jpg",
    "highlights": [
      "Microfones de 360° para captar vozes em toda a sala",
      "Cancelamento de ruído e eco por inteligência artificial",
      "Conectividade Bluetooth e USB para uso flexível",
      "Tela ou controles integrados para gestão da chamada",
      "Bateria de longa duração para uso portátil (quando aplicável)"
    ],
    "idealFor": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ],
    "features": [
      "Microfones omnidirecionais",
      "Cancelamento de eco acústico",
      "Conectividade Bluetooth e USB-C",
      "Design portátil",
      "Controles físicos intuitivos",
      "Certificação para plataformas de UC"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Chamadas via Bluetooth e USB"
    ],
    "differentiator": "Solução enxuta para equipar rapidamente pequenas salas e postos de trabalho remotos."
  },
  {
    "id": "yealink-meetingbar-a40",
    "brand": "yealink",
    "cat": "video",
    "name": "Yealink MeetingBar A40",
    "segment": "enterprise",
    "tier": "mais-vendido",
    "desc": "Sistema de videoconferência premium com câmera de alta resolução e áudio inteligente  o modelo mais vendido da linha MeetingBar.",
    "image": "images/produtos/yealink-meetingbar-a40.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Sistema completo de ponta para salas corporativas exigentes, com o melhor custo-benefício da categoria premium."
  },
  {
    "id": "yealink-meetingbar-a30",
    "brand": "yealink",
    "cat": "video",
    "name": "Yealink MeetingBar A30",
    "segment": "business",
    "tier": null,
    "desc": "Barra de videoconferência para salas médias, com câmera de qualidade e áudio inteligente integrado.",
    "image": "images/produtos/yealink-meetingbar-a30.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Kit robusto para salas de reunião corporativas do dia a dia, com excelente relação custo-benefício."
  },
  {
    "id": "yealink-meetingbar-a20",
    "brand": "yealink",
    "cat": "video",
    "name": "Yealink MeetingBar A20",
    "segment": "small-business",
    "tier": null,
    "desc": "Barra de vídeo compacta para huddle rooms e salas pequenas, com ótimo custo-benefício.",
    "image": "images/produtos/yealink-meetingbar-a20.jpg",
    "highlights": [
      "Câmera Ultra HD com correção automática de imagem",
      "Enquadramento automático por inteligência artificial",
      "Rastreamento do apresentador e dos participantes",
      "Microfones com redução inteligente de ruído",
      "Alto-falantes estéreo de alta potência",
      "Compatível com Microsoft Teams Rooms e Zoom Rooms",
      "Instalação simplificada, sem necessidade de PC dedicado"
    ],
    "idealFor": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ],
    "features": [
      "Resolução até 4K Ultra HD",
      "Campo de visão amplo",
      "Cancelamento inteligente de eco",
      "Compartilhamento de conteúdo sem fio",
      "Administração remota",
      "Atualizações automáticas de firmware"
    ],
    "compat": [
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "Google Meet",
      "Cisco Webex",
      "SIP/H.323 (quando aplicável)"
    ],
    "differentiator": "Solução enxuta e acessível para equipar salas pequenas com qualidade profissional."
  },
  {
    "id": "yealink-smartvision-60",
    "brand": "yealink",
    "cat": "cameras",
    "name": "Yealink SmartVision 60",
    "segment": "enterprise",
    "tier": null,
    "desc": "Câmera inteligente para salas grandes, com rastreamento automático de participantes e integração aos sistemas MeetingBar.",
    "image": "images/produtos/yealink-smartvision-60.jpg",
    "highlights": [
      "Resolução de alta definição para imagem nítida",
      "Campo de visão amplo com ajuste automático de enquadramento",
      "Conexão USB plug-and-play, sem necessidade de drivers",
      "Correção automática de luz e balanço de branco",
      "Compatível com as principais plataformas de videochamada"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Sensor de alta definição",
      "Lente grande angular",
      "Foco e exposição automáticos",
      "Plug-and-play via USB",
      "Compatibilidade universal com softwares de videochamada"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Cisco Webex"
    ],
    "differentiator": "Complementa sistemas de sala com uma camada extra de inteligência visual para ambientes maiores."
  },
  {
    "id": "yealink-mp58-teams",
    "brand": "yealink",
    "cat": "telefonia",
    "name": "Yealink MP58 Teams",
    "segment": "enterprise",
    "tier": null,
    "desc": "Telefone IP topo de linha certificado para Microsoft Teams, com tela touch em cores e design premium.",
    "image": "images/produtos/yealink-mp58-teams.jpg",
    "highlights": [
      "Áudio HD com tecnologia de voz nítida",
      "Suporte a múltiplas linhas SIP e integração com PBX/UCaaS",
      "Tela com interface intuitiva para navegação rápida",
      "Compatível com headsets com e sem fio",
      "Provisionamento remoto para gestão em escala",
      "Porta Gigabit para redes corporativas exigentes"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Tela colorida de alta resolução",
      "Suporte a múltiplas contas SIP",
      "Compatibilidade com Microsoft Teams ou Zoom Phone (modelos certificados)",
      "Áudio HD Voice",
      "Alimentação via PoE",
      "Gestão e provisionamento centralizado"
    ],
    "compat": [
      "Sistemas SIP/PBX",
      "Microsoft Teams (modelos certificados)",
      "Zoom Phone (modelos certificados)"
    ],
    "differentiator": "Certificação oficial Microsoft Teams com experiência de uso equivalente à de um smartphone corporativo."
  },
  {
    "id": "yealink-mp56-teams",
    "brand": "yealink",
    "cat": "telefonia",
    "name": "Yealink MP56 Teams",
    "segment": "business",
    "tier": null,
    "desc": "Telefone IP certificado para Microsoft Teams, com tela colorida e recursos completos para o dia a dia corporativo.",
    "image": "images/produtos/yealink-mp56-teams.jpg",
    "highlights": [
      "Áudio HD com tecnologia de voz nítida",
      "Suporte a múltiplas linhas SIP e integração com PBX/UCaaS",
      "Tela com interface intuitiva para navegação rápida",
      "Compatível com headsets com e sem fio",
      "Provisionamento remoto para gestão em escala",
      "Porta Gigabit para redes corporativas exigentes"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Tela colorida de alta resolução",
      "Suporte a múltiplas contas SIP",
      "Compatibilidade com Microsoft Teams ou Zoom Phone (modelos certificados)",
      "Áudio HD Voice",
      "Alimentação via PoE",
      "Gestão e provisionamento centralizado"
    ],
    "compat": [
      "Sistemas SIP/PBX",
      "Microsoft Teams (modelos certificados)",
      "Zoom Phone (modelos certificados)"
    ],
    "differentiator": "Boa relação custo-benefício dentro da linha certificada para Microsoft Teams."
  },
  {
    "id": "yealink-sipt54w",
    "brand": "yealink",
    "cat": "telefonia",
    "name": "Yealink SIP-T54W",
    "segment": "business",
    "tier": null,
    "desc": "Telefone IP executivo com tela colorida, suporte a múltiplas linhas e compatibilidade com PBX e UCaaS.",
    "image": "images/produtos/yealink-sipt54w.jpg",
    "highlights": [
      "Áudio HD com tecnologia de voz nítida",
      "Suporte a múltiplas linhas SIP e integração com PBX/UCaaS",
      "Tela com interface intuitiva para navegação rápida",
      "Compatível com headsets com e sem fio",
      "Provisionamento remoto para gestão em escala",
      "Porta Gigabit para redes corporativas exigentes"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Tela colorida de alta resolução",
      "Suporte a múltiplas contas SIP",
      "Compatibilidade com Microsoft Teams ou Zoom Phone (modelos certificados)",
      "Áudio HD Voice",
      "Alimentação via PoE",
      "Gestão e provisionamento centralizado"
    ],
    "compat": [
      "Sistemas SIP/PBX",
      "Microsoft Teams (modelos certificados)",
      "Zoom Phone (modelos certificados)"
    ],
    "differentiator": "Perfil executivo com suporte robusto a múltiplas linhas para uso corporativo intenso."
  },
  {
    "id": "yealink-sipt46u",
    "brand": "yealink",
    "cat": "telefonia",
    "name": "Yealink SIP-T46U",
    "segment": "small-business",
    "tier": null,
    "desc": "Telefone IP Gigabit com tela HD colorida, indicado para uso administrativo de bom volume de chamadas.",
    "image": "images/produtos/yealink-sipt46u.jpg",
    "highlights": [
      "Áudio HD com tecnologia de voz nítida",
      "Suporte a múltiplas linhas SIP e integração com PBX/UCaaS",
      "Tela com interface intuitiva para navegação rápida",
      "Compatível com headsets com e sem fio",
      "Provisionamento remoto para gestão em escala",
      "Porta Gigabit para redes corporativas exigentes"
    ],
    "idealFor": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ],
    "features": [
      "Tela colorida de alta resolução",
      "Suporte a múltiplas contas SIP",
      "Compatibilidade com Microsoft Teams ou Zoom Phone (modelos certificados)",
      "Áudio HD Voice",
      "Alimentação via PoE",
      "Gestão e provisionamento centralizado"
    ],
    "compat": [
      "Sistemas SIP/PBX",
      "Microsoft Teams (modelos certificados)",
      "Zoom Phone (modelos certificados)"
    ],
    "differentiator": "Porta Gigabit nativa com ótimo custo-benefício para redes corporativas menores."
  },
  {
    "id": "yealink-bh76-plus",
    "brand": "yealink",
    "cat": "headsets",
    "name": "Yealink BH76 Plus",
    "segment": "enterprise",
    "tier": null,
    "desc": "Headset sem fio premium com cancelamento de ruído avançado e estojo de carregamento, para o executivo em trânsito.",
    "image": "images/produtos/yealink-bh76-plus.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Salas de diretoria",
      "Auditórios",
      "Grandes salas de reunião",
      "Operações corporativas de alto volume"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Topo de linha da Yealink em headsets, com qualidade de áudio e autonomia para o dia inteiro."
  },
  {
    "id": "yealink-bh70",
    "brand": "yealink",
    "cat": "headsets",
    "name": "Yealink BH70",
    "segment": "business",
    "tier": null,
    "desc": "Headset Bluetooth versátil com bom cancelamento de ruído, indicado para profissionais híbridos.",
    "image": "images/produtos/yealink-bh70.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Salas de reunião de médio porte",
      "Escritórios corporativos",
      "Equipes híbridas",
      "Departamentos e áreas de projeto"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Equilíbrio entre mobilidade e qualidade de áudio para o uso corporativo do dia a dia."
  },
  {
    "id": "yealink-uh38",
    "brand": "yealink",
    "cat": "headsets",
    "name": "Yealink UH38",
    "segment": "small-business",
    "tier": null,
    "desc": "Headset com fio de ótimo custo-benefício, indicado para uso diário em call centers e escritórios administrativos.",
    "image": "images/produtos/yealink-uh38.jpg",
    "highlights": [
      "Microfone com cancelamento de ruído para chamadas mais claras",
      "Conforto para uso prolongado com almofadas ajustáveis",
      "Controles integrados para atender, encerrar e ajustar volume",
      "Certificado para as principais plataformas de UC",
      "Conectividade estável via Bluetooth, USB ou DECT",
      "Bateria de longa duração (modelos sem fio)"
    ],
    "idealFor": [
      "Huddle rooms",
      "Home office",
      "Pequenos escritórios",
      "Salas de reunião compactas"
    ],
    "features": [
      "Cancelamento ativo ou passivo de ruído",
      "Microfone com boom ajustável ou embutido",
      "Indicador de chamada ativa (busylight)",
      "Compatibilidade multiplataforma",
      "Gestão remota via software do fabricante",
      "Design ergonômico para uso o dia inteiro"
    ],
    "compat": [
      "Microsoft Teams",
      "Zoom",
      "Google Meet",
      "Softphones em geral (via Bluetooth/USB)"
    ],
    "differentiator": "Excelente custo-benefício para uso administrativo diário em grande escala."
  }
]
};
