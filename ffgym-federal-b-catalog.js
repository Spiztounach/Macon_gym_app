/* Extension du catalogue officiel pour le programme Fédéral B BFC 2026-2027.
 * Les éléments communs réutilisent les identifiants Fédéral A afin de préserver
 * les progressions existantes. Les éléments propres au B utilisent FB-*.
 */
(function buildFfgymProgramCatalog(global) {
  const federalA = Array.isArray(global.FFGYM_FEDERAL_A_CATALOG)
    ? global.FFGYM_FEDERAL_A_CATALOG
    : [];
  const clone = value => JSON.parse(JSON.stringify(value));
  const sharedCodes = new Set([
    'SAU-01', 'SAU-03',
    'BAR-01', 'BAR-02', 'BAR-03', 'BAR-08', 'BAR-09', 'BAR-10', 'BAR-11', 'BAR-12',
    'BAR-14', 'BAR-15', 'BAR-17', 'BAR-18', 'BAR-20', 'BAR-21', 'BAR-23', 'BAR-25',
    'BAR-26', 'BAR-27', 'BAR-29', 'BAR-31',
    'POU-01', 'POU-02', 'POU-04', 'POU-05', 'POU-06', 'POU-10', 'POU-11', 'POU-12',
    'POU-14', 'POU-15', 'POU-16', 'POU-17', 'POU-18', 'POU-19', 'POU-20', 'POU-21',
    'POU-25', 'POU-26', 'POU-28', 'POU-30', 'POU-31', 'POU-32', 'POU-34', 'POU-37',
    'POU-41', 'POU-42', 'POU-47', 'POU-50',
    'SOL-01', 'SOL-02', 'SOL-03', 'SOL-05', 'SOL-06', 'SOL-07', 'SOL-08', 'SOL-09',
    'SOL-10', 'SOL-12', 'SOL-14', 'SOL-15', 'SOL-17', 'SOL-18', 'SOL-20', 'SOL-21',
    'SOL-22', 'SOL-27', 'SOL-29', 'SOL-30', 'SOL-32', 'SOL-33', 'SOL-34', 'SOL-36',
    'SOL-37', 'SOL-39', 'SOL-40', 'SOL-43', 'SOL-44'
  ]);
  const federalBValueOverrides = {
    'SAU-01': 5,
    'SAU-03': 7,
    'BAR-14': 0.4,
    'BAR-15': 0.6,
    'POU-25': 0.4,
    'POU-26': 0.6,
    'POU-28': 0.4,
    'POU-34': 0.4
  };
  const federalBBonusCodes = new Set([
    'BAR-03', 'BAR-27', 'POU-19', 'POU-21', 'POU-37', 'SOL-22', 'SOL-40'
  ]);

  function buildFederalBScoring(item) {
    const apparatus = Array.isArray(item.apparatuses) && item.apparatuses[0]
      ? item.apparatuses[0]
      : '';
    const source = clone(item.scoringByApparatus && item.scoringByApparatus[apparatus] || {});
    const code = String(item.catalogId || item.abrev || '');
    const value = Object.hasOwn(federalBValueOverrides, code)
      ? federalBValueOverrides[code]
      : source.movementValue;
    const record = {
      ...source,
      movementValue: value,
      bonusValue: federalBBonusCodes.has(code) ? 0.5 : 0
    };
    delete record.bonusRule;
    if (apparatus === 'saut') record.variants = {trampo_tremp: value};
    if (federalBBonusCodes.has(code)) record.bonusRule = 'federal_b_bonus_max_one';
    return apparatus ? {[apparatus]: record} : {};
  }

  function extra(code, nom, apparatus, category, families, description, movementValue = 0.2) {
    const scoring = {
      [apparatus]: {
        movementValue,
        bonusValue: 0,
        ...(apparatus === 'saut' ? {variants: {trampo_tremp: movementValue}} : {})
      }
    };
    return {
      catalogId: code,
      abrev: code,
      nom,
      description,
      img: `./assets/ffgym-federal-b/${code}.png`,
      brochureImg: `./assets/ffgym-federal-b-brochure/${code}.png`,
      apparatuses: [apparatus],
      category,
      families,
      programs: ['federal_b'],
      scoringByApparatus: clone(scoring),
      scoringByProgram: {federal_b: clone(scoring)},
      source: 'FFGym Fédéral B BFC 2026-2027'
    };
  }

  const federalBExtras = [
    extra('FB-SAU-01', 'Renversement avant arrivée dos sur bloc', 'saut', 'jumps',
      ['acro_forward', 'alignment', 'motor_control', 'power'],
      'Renversement avant avec arrivée dos sur un bloc à hauteur de table.', 6),

    extra('FB-BAR-01', 'Oscillation une jambe avec crochet', 'barres', 'kips',
      ['strength_core', 'flexibility', 'alignment', 'motor_control'],
      'Oscillation une jambe avec crochet, en entrée ou dans le mouvement.'),
    extra('FB-BAR-02', 'Équerre maintenue 2 secondes', 'barres', 'supports',
      ['strength_core', 'flexibility', 'alignment'],
      'Équerre maintenue deux secondes à l’horizontale.'),
    extra('FB-BAR-03', 'Descente contrôlée à la suspension', 'barres', 'exits',
      ['strength_core', 'alignment', 'motor_control'],
      'De l’appui BI ou BS, rotation avant et descente contrôlée jusqu’à la suspension.'),
    extra('FB-BAR-04', 'Renversement jambes fléchies à la barre', 'barres', 'reversals',
      ['strength_core', 'flexibility', 'motor_control'],
      'De la suspension, renversement arrière jambes fléchies, pointes à la barre et retour à la suspension.'),
    extra('FB-BAR-05', 'Tour d’appui arrière groupé', 'barres', 'turns',
      ['strength_core', 'alignment', 'motor_control'],
      'Tour d’appui arrière jambes groupées.'),
    extra('FB-BAR-06', 'Prise d’élan sous l’horizontale', 'barres', 'swings',
      ['strength_core', 'alignment', 'motor_control'],
      'Prise d’élan sous l’horizontale, jambes tendues et serrées, également autorisée en sortie.'),
    extra('FB-BAR-07', 'Tour en suspension avec changements de prises', 'barres', 'turns',
      ['strength_core', 'motor_control'],
      'De la suspension, demi-tour ou tour avec un nombre libre de changements de prises.'),
    extra('FB-BAR-08', 'Passage de jambe à l’appui cavalier', 'barres', 'supports',
      ['flexibility', 'alignment', 'motor_control'],
      'De l’appui, passage d’une jambe sur le côté pour arriver à l’appui cavalier.'),
    extra('FB-BAR-09', 'Sortie par lâcher de barre', 'barres', 'exits',
      ['strength_core', 'alignment', 'motor_control'],
      'De la suspension BI ou BS, lâcher la barre et réception à la station droite.'),

    extra('FB-POU-01', 'Entrée accroupie par impulsion une jambe', 'poutre', 'entries',
      ['alignment', 'motor_control', 'power'],
      'Entrée sur le côté, impulsion une jambe et arrivée accroupie un pied après l’autre, avec ou sans appui des mains.'),
    extra('FB-POU-02', 'Relevé sur demi-pointe au retiré', 'poutre', 'turns',
      ['strength_core', 'alignment', 'motor_control'],
      'Relevé sur demi-pointe au retiré maintenu deux secondes.'),
    extra('FB-POU-03', 'Planche ou arabesque maintenue 2 secondes', 'poutre', 'supports',
      ['strength_core', 'flexibility', 'alignment', 'motor_control'],
      'Planche ou arabesque maintenue deux secondes, jambe libre à l’oblique basse minimum.'),
    extra('FB-POU-04', 'Fente et placement renversé avant', 'poutre', 'acro_forward',
      ['acro_forward', 'alignment', 'motor_control'],
      'Fente avant, renversement avant jusqu’à la pose des mains, jambe arrière au moins à l’horizontale.'),
    extra('FB-POU-05', 'Placement du dos', 'poutre', 'acro_forward',
      ['acro_forward', 'strength_core', 'alignment', 'motor_control'],
      'Départ accroupi, placement du dos sous toutes ses formes.'),
    extra('FB-POU-06', 'Chandelle groupée ou carpée', 'poutre', 'acro_backward',
      ['acro_backward', 'strength_core', 'alignment', 'motor_control'],
      'Chandelle corps groupé ou carpé, départ et retour libres, maintenue deux secondes.'),
    extra('FB-POU-07', 'Sortie saut vertical', 'poutre', 'exits',
      ['alignment', 'motor_control', 'power'],
      'Sortie par saut vertical en bout de poutre.'),

    extra('FB-SOL-01', 'Pas chassés droite-gauche', 'sol', 'jumps',
      ['motor_control', 'power'],
      'Pas chassés droite-gauche ou inversement.'),
    extra('FB-SOL-02', 'Assemblé', 'sol', 'jumps',
      ['alignment', 'motor_control', 'power'],
      'Assemblé.'),
    extra('FB-SOL-03', 'Cabriole', 'sol', 'jumps',
      ['flexibility', 'alignment', 'motor_control', 'power'],
      'Cabriole avec réception jambe libre maintenue deux secondes à l’oblique basse minimum.'),
    extra('FB-SOL-04', 'Battements droite-gauche', 'sol', 'turns',
      ['flexibility', 'alignment', 'motor_control'],
      'Battements droite-gauche ou inversement à l’oblique avant basse minimum.'),
    extra('FB-SOL-05', 'Détourné', 'sol', 'turns',
      ['alignment', 'motor_control'],
      'Détourné.'),
    extra('FB-SOL-06', 'Placement du dos', 'sol', 'acro_forward',
      ['acro_forward', 'strength_core', 'alignment', 'motor_control'],
      'Placement du dos sous toutes ses formes.'),
    extra('FB-SOL-07', 'Roulade avant', 'sol', 'acro_forward',
      ['acro_forward', 'alignment', 'motor_control'],
      'Roulade avant sous toutes ses formes et retour libre à l’appui pédestre.'),
    extra('FB-SOL-08', 'ATR passagé roulé ou non', 'sol', 'acro_forward',
      ['acro_forward', 'strength_core', 'alignment', 'motor_control'],
      'ATR passagé, roulé ou non.'),
    extra('FB-SOL-09', 'Pont maintenu 2 secondes', 'sol', 'acro_backward',
      ['acro_backward', 'strength_core', 'flexibility', 'alignment'],
      'Pont maintenu deux secondes.'),
    extra('FB-SOL-10', 'Chandelle maintenue 2 secondes', 'sol', 'acro_backward',
      ['acro_backward', 'strength_core', 'alignment', 'motor_control'],
      'Chandelle sous toutes ses formes, maintenue deux secondes, départ et retour libres.')
  ];

  const unified = federalA.map(item => {
    const code = String(item.catalogId || item.abrev || '');
    const aScoring = clone(item.scoringByApparatus || {});
    const common = sharedCodes.has(code);
    return {
      ...clone(item),
      programs: common ? ['federal_a', 'federal_b'] : ['federal_a'],
      scoringByProgram: {
        federal_a: aScoring,
        ...(common ? {federal_b: buildFederalBScoring(item)} : {})
      },
      source: common
        ? 'FFGym Fédéral A et Fédéral B BFC 2026-2027'
        : item.source
    };
  });
  const sharedB = unified.filter(item => item.programs.includes('federal_b'));
  global.FFGYM_FEDERAL_B_EXTRA_CATALOG = federalBExtras;
  global.FFGYM_FEDERAL_B_CATALOG = [...sharedB, ...federalBExtras];
  global.FFGYM_PROGRAM_CATALOG = [...unified, ...federalBExtras];
})(globalThis);
