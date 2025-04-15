// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    survey: {
      email: "¿Cuál es tu correo electrónico?",
      useCase: "¿Para qué usarás IA-N?",
      useCaseWork: "Para trabajo",
      useCasePersonal: "Para uso personal",
      useCaseOther: "Otro",
      comment: "¿Cómo te enteraste de IA-N?",
      commentPlaceholder: "Reddit, Twitter, GitHub, YouTube, etc. - ¡Déjanos saber cómo nos encontraste!",
      skip: "Saltar encuesta",
      thankYou: "¡Gracias por tus comentarios!",
      title: "Bienvenido a IA-N",
      description: "Ayúdanos a hacer IA-N para tus necesidades. Opcional.",
    },
    home: {
      title: "Bienvenido a",
      getStarted: "Comenzar",
    },
    llm: {
      title: "Preferencia de LLM",
      description: "IA-N puede trabajar con muchos proveedores de LLM. Este será el servicio que maneja el chat.",
    },
    userSetup: {
      title: "Configuración de usuario",
      description: "Configura tus ajustes de usuario.",
      howManyUsers: "¿Cuántos usuarios usarán esta instancia?",
      justMe: "Solo yo",
      myTeam: "Mi equipo",
      instancePassword: "Contraseña de la instancia",
      setPassword: "¿Te gustaría configurar una contraseña?",
      passwordReq: "Las contraseñas deben tener al menos 8 caracteres.",
      passwordWarn: "Es importante guardar esta contraseña porque no hay método de recuperación.",
      adminUsername: "Nombre de usuario de la cuenta de administrador",
      adminUsernameReq: "El nombre de usuario debe tener al menos 6 caracteres y solo contener letras minúsculas, números, guiones bajos y guiones sin espacios.",
      adminPassword: "Contraseña de la cuenta de administrador",
      adminPasswordReq: "Las contraseñas deben tener al menos 8 caracteres.",
      teamHint: "Por defecto, serás el único administrador. Una vez completada la configuración, podrás crear e invitar a otros a ser usuarios o administradores. No pierdas tu contraseña ya que solo los administradores pueden restablecer las contraseñas.",
    },
    data: {
      title: "Manejo de datos y privacidad",
      description: "Estamos comprometidos con la transparencia y el control cuando se trata de tus datos personales.",
      settingsHint: "Estos ajustes se pueden reconfigurar en cualquier momento en la configuración.",
    },
    workspace: {
      title: "Crea tu primer espacio de trabajo",
      description: "Crea tu primer espacio de trabajo y comienza con IA-N.",
    },
  },
  common: {
    "workspaces-name": "Nombre de espacios de trabajo",
    error: "error",
    success: "éxito",
    user: "Usuario",
    selection: "Selección de modelo",
    saving: "Guardando...",
    save: "Guardar cambios",
    previous: "Página anterior",
    next: "Página siguiente",
    optional: "Opcional",
    yes: "Sí",
    no: "No",
  },
  settings: {
    title: "Configuración de instancia",
    system: "Preferencias del sistema",
    invites: "Invitación",
    users: "Usuarios",
    workspaces: "Espacios de trabajo",
    "workspace-chats": "Chat del espacio de trabajo",
    customization: "Apariencia",
    "api-keys": "Claves API",
    llm: "Preferencia de LLM",
    transcription: "Modelo de transcripción",
    embedder: "Preferencias de incrustación",
    "text-splitting": "Divisor y fragmentación de texto",
    "voice-speech": "Voz y Habla",
    "vector-database": "Base de datos de vectores",
    embeds: "Widgets de chat incrustados",
    "embed-chats": "Historial de chats incrustados",
    security: "Seguridad",
    "event-logs": "Registros de eventos",
    privacy: "Privacidad y datos",
    "ai-providers": "Proveedores de IA",
    "agent-skills": "Habilidades del agente",
    admin: "Administrador",
    tools: "Herramientas",
    "experimental-features": "Funciones Experimentales",
    contact: "Contactar Soporte",
    "browser-extension": "Extensión del navegador",
    "system-prompt-variables": null,
  },
  login: {
    "multi-user": {
      welcome: "Bienvenido a",
      "placeholder-username": "Nombre de usuario",
      "placeholder-password": "Contraseña",
      login: "Iniciar sesión",
      validating: "Validando...",
      "forgot-pass": "Olvidé mi contraseña",
      reset: "Restablecer",
    },
    "sign-in": {
      start: "Iniciar sesión en tu",
      end: "cuenta.",
    },
    "password-reset": {
      title: "Restablecer la contraseña",
      description:
        "Proporcione la información necesaria a continuación para restablecer su contraseña.",
      "recovery-codes": "Códigos de recuperación",
      "recovery-code": "Código de recuperación {{index}}",
      "back-to-login": "Volver al inicio de sesión",
    },
  },
  welcomeMessage: {
    part1:
      "Bienvenido a IA-N, una herramienta de inteligencia artificial de código abierto creada por Mintplex Labs que convierte cualquier cosa en un chatbot entrenado con el que puedes consultar y conversar. IA-N es un software BYOK (bring-your-own-keys), por lo que no hay suscripciones, tarifas ni cargos por este software, salvo por los servicios que deseas utilizar.",
    part2:
      "IA-N es la forma más sencilla de integrar productos de inteligencia artificial potentes como OpenAi, GPT-4, LangChain, PineconeDB, ChromaDB y otros servicios en un paquete ordenado, sin complicaciones, para aumentar tu productividad en un 100x.",
    part3:
      "IA-N puede ejecutarse completamente en tu máquina local con poco impacto, ¡ni siquiera notarás que está ahí! No se necesita GPU. También está disponible la instalación en la nube y en instalaciones locales.\nEl ecosistema de herramientas de inteligencia artificial se vuelve más poderoso cada día. IA-N facilita su uso.",
    githubIssue: "Crear un problema en GitHub",
    user1: "¿Cómo empiezo?!",
    part4:
      'Es simple. Todas las colecciones se organizan en contenedores que llamamos "Workspaces". Los Workspaces son contenedores de archivos, documentos, imágenes, PDFs y otros archivos que se transformarán en algo que los LLM puedan entender y usar en una conversación.\n\nPuedes agregar y eliminar archivos en cualquier momento.',
    createWorkspace: "Crea tu primer workspace",
    user2:
      "¿Es esto como un Dropbox de IA o algo así? ¿Qué hay de chatear? ¿Es un chatbot, no?",
    part5:
      "IA-N es más que un Dropbox más inteligente.\n\nIA-N ofrece dos formas de interactuar con tus datos:\n\n<i>Consulta:</i> Tus chats devolverán datos o inferencias encontradas con los documentos en tu workspace al que tiene acceso. ¡Agregar más documentos al workspace lo hace más inteligente! \n\n<i>Conversacional:</i> Tus documentos y tu historial de chat en curso contribuyen al conocimiento del LLM al mismo tiempo. Ideal para agregar información en tiempo real basada en texto o correcciones y malentendidos que el LLM pueda tener.\n\n¡Puedes alternar entre ambos modos <i>en medio de una conversación!</i>",
    user3: "¡Vaya, esto suena increíble, déjame probarlo ya!",
    part6: "¡Diviértete!",
    starOnGitHub: "Estrella en GitHub",
    contact: "Contactar a Mintplex Labs",
  },
  "new-workspace": {
    title: "Nuevo Espacio de Trabajo",
    placeholder: "Mi Espacio de Trabajo",
  },
  "workspaces—settings": {
    general: "Configuración general",
    chat: "Configuración de chat",
    vector: "Base de datos de vectores",
    members: "Miembros",
    agent: "Configuración del agente",
  },
  general: {
    vector: {
      title: "Conteo de vectores",
      description: "Número total de vectores en tu base de datos de vectores.",
    },
    names: {
      description:
        "Esto solo cambiará el nombre de visualización de tu espacio de trabajo.",
    },
    message: {
      title: "Mensajes de chat sugeridos",
      description:
        "Personaliza los mensajes que se sugerirán a los usuarios de tu espacio de trabajo.",
      add: "Agregar nuevo mensaje",
      save: "Guardar mensajes",
      heading: "Explícame",
      body: "los beneficios de IA-N",
    },
    pfp: {
      title: "Imagen de perfil del asistente",
      description:
        "Personaliza la imagen de perfil del asistente para este espacio de trabajo.",
      image: "Imagen del espacio de trabajo",
      remove: "Eliminar imagen del espacio de trabajo",
    },
    delete: {
      title: "Eliminar Espacio de Trabajo",
      description:
        "Eliminar este espacio de trabajo y todos sus datos. Esto eliminará el espacio de trabajo para todos los usuarios.",
      delete: "Eliminar espacio de trabajo",
      deleting: "Eliminando espacio de trabajo...",
      "confirm-start": "Estás a punto de eliminar tu",
      "confirm-end":
        "espacio de trabajo. Esto eliminará todas las incrustaciones de vectores en tu base de datos de vectores.\n\nLos archivos de origen originales permanecerán intactos. Esta acción es irreversible.",
    },
  },
  chat: {
    llm: {
      title: "Proveedor LLM del espacio de trabajo",
      description:
        "El proveedor y modelo LLM específico que se utilizará para este espacio de trabajo. Por defecto, utiliza el proveedor y configuración del sistema LLM.",
      search: "Buscar todos los proveedores LLM",
    },
    model: {
      title: "Modelo de chat del espacio de trabajo",
      description:
        "El modelo de chat específico que se utilizará para este espacio de trabajo. Si está vacío, se utilizará la preferencia LLM del sistema.",
      wait: "-- esperando modelos --",
    },
    mode: {
      title: "Modo de chat",
      chat: {
        title: "Chat",
        "desc-start":
          "proporcionará respuestas con el conocimiento general del LLM",
        and: "y",
        "desc-end": "el contexto del documento que se encuentre.",
      },
      query: {
        title: "Consulta",
        "desc-start": "proporcionará respuestas",
        only: "solo",
        "desc-end": "si se encuentra el contexto del documento.",
      },
    },
    history: {
      title: "Historial de chat",
      "desc-start":
        "El número de chats anteriores que se incluirán en la memoria a corto plazo de la respuesta.",
      recommend: "Recomendar 20. ",
      "desc-end":
        "Cualquier cosa más de 45 probablemente conducirá a fallos continuos en el chat dependiendo del tamaño del mensaje.",
    },
    prompt: {
      title: "Prompt",
      description:
        "El prompt que se utilizará en este espacio de trabajo. Define el contexto y las instrucciones para que la IA genere una respuesta. Debes proporcionar un prompt cuidadosamente elaborado para que la IA pueda generar una respuesta relevante y precisa.",
    },
    refusal: {
      title: "Respuesta de rechazo en modo consulta",
      "desc-start": "Cuando esté en",
      query: "consulta",
      "desc-end":
        "modo, es posible que desees devolver una respuesta de rechazo personalizada cuando no se encuentre contexto.",
    },
    temperature: {
      title: "Temperatura de LLM",
      "desc-start":
        'Esta configuración controla cuán "creativas" serán las respuestas de tu LLM.',
      "desc-end":
        "Cuanto mayor sea el número, más creativas serán las respuestas. Para algunos modelos, esto puede llevar a respuestas incoherentes cuando se establece demasiado alto.",
      hint: "La mayoría de los LLM tienen varios rangos aceptables de valores válidos. Consulta a tu proveedor de LLM para obtener esa información.",
    },
  },
  "vector-workspace": {
    identifier: "Identificador de la base de datos de vectores",
    snippets: {
      title: "Máximo de fragmentos de contexto",
      description:
        "Esta configuración controla la cantidad máxima de fragmentos de contexto que se enviarán al LLM por chat o consulta.",
      recommend: "Recomendado: 4",
    },
    doc: {
      title: "Umbral de similitud de documentos",
      description:
        "La puntuación mínima de similitud requerida para que una fuente se considere relacionada con el chat. Cuanto mayor sea el número, más similar debe ser la fuente al chat.",
      zero: "Sin restricción",
      low: "Bajo (puntuación de similitud ≥ .25)",
      medium: "Medio (puntuación de similitud ≥ .50)",
      high: "Alto (puntuación de similitud ≥ .75)",
    },
    reset: {
      reset: "Restablecer la base de datos de vectores",
      resetting: "Borrando vectores...",
      confirm:
        "Estás a punto de restablecer la base de datos de vectores de este espacio de trabajo. Esto eliminará todas las incrustaciones de vectores actualmente incrustadas.\n\nLos archivos de origen originales permanecerán intactos. Esta acción es irreversible.",
      error:
        "¡No se pudo restablecer la base de datos de vectores del espacio de trabajo!",
      success:
        "¡La base de datos de vectores del espacio de trabajo fue restablecida!",
    },
  },
  agent: {
    "performance-warning":
      "El rendimiento de los LLM que no admiten explícitamente la llamada de herramientas depende en gran medida de las capacidades y la precisión del modelo. Algunas habilidades pueden estar limitadas o no funcionar.",
    provider: {
      title: "Proveedor de LLM del agente del espacio de trabajo",
      description:
        "El proveedor y modelo LLM específico que se utilizará para el agente @agent de este espacio de trabajo.",
    },
    mode: {
      chat: {
        title: "Modelo de chat del agente del espacio de trabajo",
        description:
          "El modelo de chat específico que se utilizará para el agente @agent de este espacio de trabajo.",
      },
      title: "Modelo del agente del espacio de trabajo",
      description:
        "El modelo LLM específico que se utilizará para el agente @agent de este espacio de trabajo.",
      wait: "-- esperando modelos --",
    },
    skill: {
      title: "Habilidades predeterminadas del agente",
      description:
        "Mejora las habilidades naturales del agente predeterminado con estas habilidades preconstruidas. Esta configuración se aplica a todos los espacios de trabajo.",
      rag: {
        title: "RAG y memoria a largo plazo",
        description:
          'Permitir que el agente aproveche tus documentos locales para responder a una consulta o pedirle al agente que "recuerde" piezas de contenido para la recuperación de memoria a largo plazo.',
      },
      view: {
        title: "Ver y resumir documentos",
        description:
          "Permitir que el agente enumere y resuma el contenido de los archivos del espacio de trabajo actualmente incrustados.",
      },
      scrape: {
        title: "Rastrear sitios web",
        description:
          "Permitir que el agente visite y rastree el contenido de sitios web.",
      },
      generate: {
        title: "Generar gráficos",
        description:
          "Habilitar al agente predeterminado para generar varios tipos de gráficos a partir de datos proporcionados o dados en el chat.",
      },
      save: {
        title: "Generar y guardar archivos en el navegador",
        description:
          "Habilitar al agente predeterminado para generar y escribir archivos que se guarden y puedan descargarse en tu navegador.",
      },
      web: {
        title: "Búsqueda en vivo en la web y navegación",
        "desc-start":
          "Permitir que tu agente busque en la web para responder tus preguntas conectándose a un proveedor de búsqueda en la web (SERP).",
        "desc-end":
          "La búsqueda en la web durante las sesiones del agente no funcionará hasta que esto esté configurado.",
      },
    },
  },
  recorded: {
    title: "Chats del espacio de trabajo",
    description:
      "Estos son todos los chats y mensajes grabados que han sido enviados por los usuarios ordenados por su fecha de creación.",
    export: "Exportar",
    table: {
      id: "Id",
      by: "Enviado por",
      workspace: "Espacio de trabajo",
      prompt: "Prompt",
      response: "Respuesta",
      at: "Enviado a",
    },
  },
  appearance: {
    title: "Apariencia",
    description: "Personaliza la configuración de apariencia de tu plataforma.",
    logo: {
      title: "Personalizar logotipo",
      description:
        "Sube tu logotipo personalizado para hacer que tu chatbot sea tuyo.",
      add: "Agregar un logotipo personalizado",
      recommended: "Tamaño recomendado: 800 x 200",
      remove: "Eliminar",
      replace: "Reemplazar",
    },
    message: {
      title: "Personalizar mensajes",
      description:
        "Personaliza los mensajes automáticos que se muestran a tus usuarios.",
      new: "Nuevo",
      system: "sistema",
      user: "usuario",
      message: "mensaje",
      assistant: "Asistente de chat IA-N",
      "double-click": "Haz doble clic para editar...",
      save: "Guardar mensajes",
    },
    icons: {
      title: "Iconos de pie de página personalizados",
      description:
        "Personaliza los iconos de pie de página que se muestran en la parte inferior de la barra lateral.",
      icon: "Icono",
      link: "Enlace",
    },
  },
  api: {
    title: "Claves API",
    description:
      "Las claves API permiten al titular acceder y gestionar programáticamente esta instancia de IA-N.",
    link: "Leer la documentación de la API",
    generate: "Generar nueva clave API",
    table: {
      key: "Clave API",
      by: "Creado por",
      created: "Creado",
    },
  },
  llm: {
    title: "Preferencia de LLM",
    description:
      "Estas son las credenciales y configuraciones para tu proveedor preferido de chat y incrustación de LLM. Es importante que estas claves estén actualizadas y correctas, de lo contrario IA-N no funcionará correctamente.",
    provider: "Proveedor de LLM",
  },
  transcription: {
    title: "Preferencia de modelo de transcripción",
    description:
      "Estas son las credenciales y configuraciones para tu proveedor preferido de modelo de transcripción. Es importante que estas claves estén actualizadas y correctas, de lo contrario los archivos multimedia y de audio no se transcribirán.",
    provider: "Proveedor de transcripción",
    "warn-start":
      "El uso del modelo local Whisper en máquinas con RAM o CPU limitadas puede bloquear IA-N al procesar archivos multimedia.",
    "warn-recommend":
      "Recomendamos al menos 2GB de RAM y subir archivos <10Mb.",
    "warn-end":
      "El modelo incorporado se descargará automáticamente en el primer uso.",
  },
  embedding: {
    title: "Preferencia de incrustación",
    "desc-start":
      "Cuando uses un LLM que no admita de forma nativa un motor de incrustación, es posible que necesites especificar credenciales adicionales para incrustar texto.\n\nLa incrustación es el proceso de convertir texto en vectores. Estas credenciales son necesarias para convertir tus archivos y prompts en un formato que IA-N pueda usar para procesar.",
    "desc-end":
      "La incrustación es el proceso de convertir texto en vectores. Estas credenciales son necesarias para convertir tus archivos y prompts en un formato que IA-N pueda usar para procesar.",
    provider: {
      title: "Proveedor de incrustación",
      description:
        "No se requiere configuración cuando se utiliza el motor de incrustación nativo de IA-N.",
    },
  },
  text: {
    title: "Preferencias de división y fragmentación de texto",
    "desc-start":
      "A veces, es posible que desees cambiar la forma predeterminada en que los nuevos documentos se dividen y fragmentan antes de ser insertados en tu base de datos de vectores.",
    "desc-end":
      "Solo debes modificar esta configuración si entiendes cómo funciona la división de texto y sus efectos secundarios.",
    "warn-start": "Los cambios aquí solo se aplicarán a",
    "warn-center": "documentos recién incrustados",
    "warn-end": ", no a los documentos existentes.",
    size: {
      title: "Tamaño del fragmento de texto",
      description:
        "Esta es la longitud máxima de caracteres que puede estar presente en un solo vector.",
      recommend: "La longitud máxima del modelo de incrustación es",
    },
    overlap: {
      title: "Superposición de fragmentos de texto",
      description:
        "Esta es la superposición máxima de caracteres que ocurre durante la fragmentación entre dos fragmentos de texto adyacentes.",
    },
  },
  vector: {
    title: "Base de datos de vectores",
    description:
      "Estas son las credenciales y configuraciones para cómo funcionará tu instancia de IA-N. Es importante que estas claves estén actualizadas y correctas.",
    provider: {
      title: "Proveedor de base de datos de vectores",
      description: "No se necesita configuración para LanceDB.",
    },
  },
  embeddable: {
    title: "Widgets de chat incrustables",
    description:
      "Los widgets de chat incrustables son interfaces de chat de cara al público que están vinculadas a un solo espacio de trabajo. Esto te permite crear espacios de trabajo que luego puedes publicar al mundo.",
    create: "Crear incrustación",
    table: {
      workspace: "Espacio de trabajo",
      chats: "Chats enviados",
      Active: "Dominios activos",
    },
  },
  "embed-chats": {
    title: "Incrustar chats",
    export: "Exportar",
    description:
      "Estos son todos los chats y mensajes grabados de cualquier incrustación que hayas publicado.",
    table: {
      embed: "Incrustar",
      sender: "Remitente",
      message: "Mensaje",
      response: "Respuesta",
      at: "Enviado a",
    },
  },
  multi: {
    title: "Modo multiusuario",
    description:
      "Configura tu instancia para admitir a tu equipo activando el modo multiusuario.",
    enable: {
      "is-enable": "El modo multiusuario está habilitado",
      enable: "Habilitar modo multiusuario",
      description:
        "Por defecto, serás el único administrador. Como administrador, necesitarás crear cuentas para todos los nuevos usuarios o administradores. No pierdas tu contraseña ya que solo un usuario administrador puede restablecer las contraseñas.",
      username: "Nombre de usuario de la cuenta de administrador",
      password: "Contraseña de la cuenta de administrador",
    },
    password: {
      title: "Protección con contraseña",
      description:
        "Protege tu instancia de IA-N con una contraseña. Si olvidas esta contraseña, no hay método de recuperación, así que asegúrate de guardar esta contraseña.",
    },
    instance: {
      title: "Proteger instancia con contraseña",
      description:
        "Por defecto, serás el único administrador. Como administrador, necesitarás crear cuentas para todos los nuevos usuarios o administradores. No pierdas tu contraseña ya que solo un usuario administrador puede restablecer las contraseñas.",
      password: "Contraseña de la instancia",
    },
  },
  event: {
    title: "Registros de eventos",
    description:
      "Ver todas las acciones y eventos que ocurren en esta instancia para monitoreo.",
    clear: "Borrar registros de eventos",
    table: {
      type: "Tipo de evento",
      user: "Usuario",
      occurred: "Ocurrido a",
    },
  },
  privacy: {
    title: "Privacidad y manejo de datos",
    description:
      "Esta es tu configuración para cómo los proveedores de terceros conectados y IA-N manejan tus datos.",
    llm: "Selección de LLM",
    embedding: "Preferencia de incrustación",
    vector: "Base de datos de vectores",
    anonymous: "Telemetría anónima habilitada",
  },
  connectors: {
    "search-placeholder": "Buscar conectores de datos",
    "no-connectors": "No se encontraron conectores de datos.",
    github: {
      name: "Repositorio GitHub",
      description: "Importa un repositorio completo de GitHub público o privado con un solo clic.",
      URL: "URL del repositorio GitHub",
      URL_explained: "URL del repositorio de GitHub que deseas recopilar.",
      token: "Token de acceso de GitHub",
      optional: "opcional",
      token_explained: "Token de acceso para evitar limitaciones de tasa.",
      token_explained_start: "Sin un ",
      token_explained_link1: "Token de acceso personal",
      token_explained_middle: ", la API de GitHub puede limitar el número de archivos que se pueden recopilar debido a las limitaciones de tasa. Puedes ",
      token_explained_link2: "crear un token de acceso temporal",
      token_explained_end: " para evitar este problema.",
      ignores: "Ignorar archivos",
      git_ignore: "Lista en formato .gitignore para ignorar archivos específicos durante la recopilación. Presiona enter después de cada entrada que quieras guardar.",
      task_explained: "Una vez completado, todos los archivos estarán disponibles para incrustar en espacios de trabajo en el selector de documentos.",
      branch: "Rama de la que deseas recopilar archivos.",
      branch_loading: "-- cargando ramas disponibles --",
      branch_explained: "Rama de la que deseas recopilar archivos.",
      token_information: "Sin completar el <b>Token de acceso de GitHub</b> este conector de datos solo podrá recopilar los archivos de <b>nivel superior</b> del repositorio debido a las limitaciones de tasa de la API pública de GitHub.",
      token_personal: "Obtén un token de acceso personal gratuito con una cuenta de GitHub aquí.",
    },
    gitlab: {
      name: "Repositorio GitLab",
      description: "Importa un repositorio completo de GitLab público o privado con un solo clic.",
      URL: "URL del repositorio GitLab",
      URL_explained: "URL del repositorio de GitLab que deseas recopilar.",
      token: "Token de acceso de GitLab",
      optional: "opcional",
      token_explained: "Token de acceso para evitar limitaciones de tasa.",
      token_description: "Selecciona entidades adicionales para obtener de la API de GitLab.",
      token_explained_start: "Sin un ",
      token_explained_link1: "Token de acceso personal",
      token_explained_middle: ", la API de GitLab puede limitar el número de archivos que se pueden recopilar debido a las limitaciones de tasa. Puedes ",
      token_explained_link2: "crear un token de acceso temporal",
      token_explained_end: " para evitar este problema.",
      fetch_issues: "Obtener problemas como documentos",
      ignores: "Ignorar archivos",
      git_ignore: "Lista en formato .gitignore para ignorar archivos específicos durante la recopilación. Presiona enter después de cada entrada que quieras guardar.",
      task_explained: "Una vez completado, todos los archivos estarán disponibles para incrustar en espacios de trabajo en el selector de documentos.",
      branch: "Rama de la que deseas recopilar archivos",
      branch_loading: "-- cargando ramas disponibles --",
      branch_explained: "Rama de la que deseas recopilar archivos.",
      token_information: "Sin completar el <b>Token de acceso de GitLab</b> este conector de datos solo podrá recopilar los archivos de <b>nivel superior</b> del repositorio debido a las limitaciones de tasa de la API pública de GitLab.",
      token_personal: "Obtén un token de acceso personal gratuito con una cuenta de GitLab aquí.",
    },
    youtube: {
      name: "Transcripción de YouTube",
      description: "Importa la transcripción de un video completo de YouTube desde un enlace.",
      URL: "URL del video de YouTube",
      URL_explained_start: "Ingresa la URL de cualquier video de YouTube para obtener su transcripción. El video debe tener ",
      URL_explained_link: "subtítulos",
      URL_explained_end: " disponibles.",
      task_explained: "Una vez completado, la transcripción estará disponible para incrustar en espacios de trabajo en el selector de documentos.",
      language: "Idioma de la transcripción",
      language_explained: "Selecciona el idioma de la transcripción que deseas recopilar.",
      loading_languages: "-- cargando idiomas disponibles --",
    },
    "website-depth": {
      name: "Rastreador de enlaces masivo",
      description: "Rastrea un sitio web y sus subenlaces hasta cierta profundidad.",
      URL: "URL del sitio web",
      URL_explained: "URL del sitio web que deseas rastrear.",
      depth: "Profundidad de rastreo",
      depth_explained: "Este es el número de enlaces secundarios que el trabajador debe seguir desde la URL de origen.",
      max_pages: "Páginas máximas",
      max_pages_explained: "Número máximo de enlaces a rastrear.",
      task_explained: "Una vez completado, todo el contenido rastreado estará disponible para incrustar en espacios de trabajo en el selector de documentos.",
    },
    confluence: {
      name: "Confluence",
      description: "Importa una página completa de Confluence con un solo clic.",
      deployment_type: "Tipo de implementación de Confluence",
      deployment_type_explained: "Determina si tu instancia de Confluence está alojada en la nube de Atlassian o es autohospedada.",
      base_url: "URL base de Confluence",
      base_url_explained: "Esta es la URL base de tu espacio de Confluence.",
      space_key: "Clave del espacio de Confluence",
      space_key_explained: "Esta es la clave del espacio de tu instancia de Confluence que se utilizará. Generalmente comienza con ~",
      username: "Nombre de usuario de Confluence",
      username_explained: "Tu nombre de usuario de Confluence",
      auth_type: "Tipo de autenticación de Confluence",
      auth_type_explained: "Selecciona el tipo de autenticación que deseas usar para acceder a tus páginas de Confluence.",
      auth_type_username: "Nombre de usuario y token de acceso",
      auth_type_personal: "Token de acceso personal",
      token: "Token de acceso de Confluence",
      token_explained_start: "Necesitas proporcionar un token de acceso para la autenticación. Puedes generar un token de acceso",
      token_explained_link: "aquí",
      token_desc: "Token de acceso para autenticación",
      pat_token: "Token de acceso personal de Confluence",
      pat_token_explained: "Tu token de acceso personal de Confluence.",
      task_explained: "Una vez completado, el contenido de la página estará disponible para incrustar en espacios de trabajo en el selector de documentos.",
    },
    manage: {
      documents: "Documentos",
      "data-connectors": "Conectores de datos",
      "desktop-only": "La edición de estos ajustes solo está disponible en un dispositivo de escritorio. Por favor, accede a esta página en tu escritorio para continuar.",
      dismiss: "Descartar",
      editing: "Editando",
    },
    directory: {
      "my-documents": "Mis documentos",
      "new-folder": "Nueva carpeta",
      "search-document": "Buscar documento",
      "no-documents": "Sin documentos",
      "move-workspace": "Mover al espacio de trabajo",
      name: "Nombre",
      "delete-confirmation": "¿Estás seguro de que deseas eliminar estos archivos y carpetas?\nEsto eliminará los archivos del sistema y los eliminará automáticamente de cualquier espacio de trabajo existente.\nEsta acción no es reversible.",
      "removing-message": "Eliminando {{count}} documentos y {{folderCount}} carpetas. Por favor espera.",
      "move-success": "Se movieron exitosamente {{count}} documentos.",
      date: "Fecha",
      type: "Tipo",
      no_docs: "Sin documentos",
      select_all: "Seleccionar todo",
      deselect_all: "Deseleccionar todo",
      remove_selected: "Eliminar seleccionados",
      costs: "*Costo único por incrustaciones",
      save_embed: "Guardar e incrustar",
    },
    upload: {
      "processor-offline": "Procesador de documentos no disponible",
      "processor-offline-desc": "No podemos subir tus archivos en este momento porque el procesador de documentos está fuera de línea. Por favor, inténtalo de nuevo más tarde.",
      "click-upload": "Haz clic para subir o arrastra y suelta",
      "file-types": "soporta archivos de texto, csv's, hojas de cálculo, archivos de audio y más!",
      "or-submit-link": "o envía un enlace",
      "placeholder-link": "https://ejemplo.com",
      fetching: "Obteniendo...",
      "fetch-website": "Obtener sitio web",
      "privacy-notice": "Estos archivos se subirán al procesador de documentos que se ejecuta en esta instancia de IA-N. Estos archivos no se envían ni se comparten con terceros.",
    },
    pinning: {
      what_pinning: "¿Qué es el anclaje de documentos?",
      pin_explained_block1: "Cuando <b>anclas</b> un documento en IA-N, inyectaremos todo el contenido del documento en tu ventana de prompt para que tu LLM lo comprenda completamente.",
      pin_explained_block2: "Esto funciona mejor con <b>modelos de contexto grande</b> o archivos pequeños que son críticos para su base de conocimiento.",
      pin_explained_block3: "Si no estás obteniendo las respuestas que deseas de IA-N por defecto, entonces el anclaje es una excelente manera de obtener respuestas de mayor calidad con un clic.",
      accept: "De acuerdo, entendido",
    },
    watching: {
      what_watching: "¿Qué hace ver un documento?",
      watch_explained_block1: "Cuando <b>ves</b> un documento en IA-N, <i>automáticamente</i> sincronizaremos el contenido de tu documento desde su fuente original a intervalos regulares. Esto actualizará automáticamente el contenido en cada espacio de trabajo donde se administre este archivo.",
      watch_explained_block2: "Esta función actualmente admite contenido basado en línea y no estará disponible para documentos cargados manualmente.",
      watch_explained_block3_start: "Puedes administrar qué documentos se están viendo desde la ",
      watch_explained_block3_link: "Administrador de archivos",
      watch_explained_block3_end: " vista de administrador.",
      accept: "De acuerdo, entendido",
    },
  },
  chat_window: {
    welcome: "Bienvenido a tu nuevo espacio de trabajo.",
    get_started: "Para comenzar, ya sea",
    get_started_default: "Para comenzar",
    upload: "sube un documento",
    or: "o",
    send_chat: "envía un chat.",
    send_message: "Enviar un mensaje",
    attach_file: "Adjuntar un archivo a este chat",
    slash: "Ver todos los comandos de barra disponibles para chatear.",
    agents: "Ver todos los agentes disponibles que puedes usar para chatear.",
    text_size: "Cambiar tamaño de texto.",
    microphone: "Habla tu prompt.",
    send: "Enviar mensaje de prompt al espacio de trabajo",
  },
  profile_settings: {
    edit_account: "Editar cuenta",
    profile_picture: "Foto de perfil",
    remove_profile_picture: "Eliminar foto de perfil",
    username: "Nombre de usuario",
    username_description: "El nombre de usuario debe contener solo letras minúsculas, números, guiones bajos y guiones sin espacios",
    new_password: "Nueva contraseña",
    passwort_description: "La contraseña debe tener al menos 8 caracteres",
    cancel: "Cancelar",
    update_account: "Actualizar cuenta",
    theme: "Preferencia de tema",
    language: "Idioma preferido",
  },
  user_dropdown_menu: {
    account: "Cuenta",
    support: "Soporte",
    logout: "Cerrar sesión",
  },
  checklist: {
    title: "¡Estás a punto de convertirte en un experto en IA-N!",
    gettingStarted: "Comenzando",
    tasksLeft: "tareas restantes",
    close: "Cerrar",
    steps: {
      createWorkspace: "Crear espacio de trabajo",
      sendChat: "Enviar chat",
      embedDocument: "Subir documento",
      setUpPrompt: "Configurar prompt del sistema",
      defineSlashCommands: "Definir comandos",
    },
  },
  quickLinks: {
    title: "Enlaces rápidos",
    sendChat: "Enviar chat",
    embedDocument: "Subir documento",
    createWorkspace: "Crear espacio de trabajo",
  },
};

export default TRANSLATIONS;
