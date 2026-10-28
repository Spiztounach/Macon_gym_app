# Mâcon Gym Suivi — version corrigée

Cette version part du fichier le plus récent retrouvé (`index.html.txt`, 16 juin 2026) et conserve les fonctions métier existantes : fiches gymnastes, résultats, statistiques, mouvements, équipes, simulation Top 3, planification, sauvegarde locale, synchronisation Google Drive et exports PDF.

## Catégories des éléments techniques — version 1.28.0

- classement distinct des profils techniques : Entrées, Sauts, Tours, Bascules, Renversements, Élans et balancés, Appuis et placements, Acrobaties avant, Acrobaties arrière, Sorties et Autres ;
- classement des pivots et demi-pivots dans la catégorie Tours ;
- regroupement visuel par catégorie dans la palette et dans le gestionnaire de la bibliothèque ;
- catégorie modifiable pour chaque élément personnalisé, avec détection automatique depuis son nom ;
- conservation des agrès, valeurs, bonifications et profils techniques existants ;
- version PWA 1.28.0 et cache v45.

Validation : 130 éléments officiels catégorisés, catégories des pivots contrôlées, anciens éléments personnalisés compatibles, syntaxe et suites métier contrôlées.

## Catalogue FFGym Fédérale A 2026-2027 — version 1.27.0

- intégration des 130 éléments nommés avec Nicolas : 4 au saut, 31 aux barres, 51 à la poutre et 44 au sol ;
- pictogrammes officiels extraits et optimisés pour l’affichage hors connexion ;
- attribution d’un ou plusieurs des sept profils techniques à chaque élément ;
- valeurs de difficulté enregistrées par agrès, sans imposer une valeur unique aux éléments partagés ;
- sélecteur Tremplin / Trampo-tremp mémorisé et recalcul automatique des quatre notes de saut ;
- bonifications potentielles de barres limitées à une occurrence par famille (bascule, tour proche et élan) ;
- filtrage automatique de la palette selon l’agrès ouvert ;
- aperçu du pictogramme dans la composition et ajout des éléments au référentiel Progression ;
- saisie personnalisée d’une valeur et d’une bonification différentes pour chaque agrès ;
- version PWA 1.27.0 et cache v44.

Validation : 130 références uniques, 130 images présentes, sept profils couverts, variantes du saut, valeurs multi-agrès, bonifications sans doublon, fonctionnement hors connexion, syntaxe et suites métier contrôlés.

## Bibliothèque technique commune et profils simplifiés — version 1.26.0

- référentiel ramené à sept profils : Acrobatie avant, Acrobatie arrière, Force et gainage, Souplesse et amplitude, Posture et alignements, Contrôle moteur, Impulsion et explosivité ;
- regroupement automatique des anciens profils Équilibre, Coordination et Proprioception dans Contrôle moteur ;
- lorsqu’un ancien élément possède plusieurs évaluations regroupées, conservation de la valeur la plus prudente afin de ne pas masquer un point technique à corriger ;
- bibliothèque désormais commune aux onglets Mouvements et Progression : un élément personnalisé n’est saisi qu’une seule fois avec son code, son nom, son image ou dessin, ses agrès, ses profils, sa valeur et son bonus ;
- ajout depuis Progression redirigé vers ce même gestionnaire commun ;
- renommage, modification et suppression répercutés dans les deux onglets ;
- un même élément reste associable à plusieurs agrès, tandis que son statut et sa qualité demeurent propres à chaque gymnaste et à chaque agrès ;
- migration automatique des images déjà importées vers le référentiel partagé, sans duplication lors des ouvertures suivantes ;
- version PWA 1.26.0 et cache v43.

Validation : sept profils finaux, migration prudente, liaison Mouvements/Progression, multi-agrès, idempotence, synchronisation Google Drive, syntaxe et suites métier contrôlés.

## Sélecteur musical Google Drive officiel — version 1.25.2

- remplacement du faux raccourci vers le sélecteur Android par Google Picker intégré ;
- affichage des fichiers audio MP3, M4A, AAC, WAV et OGG du compte Google choisi ;
- autorisation supplémentaire demandée uniquement au premier appui sur le bouton musique Drive ;
- portée limitée `drive.file` : l'application n'accède qu'au fichier explicitement choisi ;
- téléchargement contrôlé à 80 Mo maximum puis copie dans le stockage local pour la lecture hors connexion ;
- session musicale temporaire mémorisée jusqu'à son expiration et renouvelée au prochain appui ;
- synchronisation des données toujours isolée dans `drive.appdata`, sans accès global au Drive ;
- effacement des jetons musicaux lors de la déconnexion Google ou de la réinitialisation de l'application.

Validation : sélection, autorisation, annulation, métadonnées, formats, taille maximale, téléchargement, stockage hors connexion, syntaxe et suites métier contrôlés.

## Filtres persistants et lecteur musical agrandi — version 1.25.1

- mémorisation locale des recherches, tris et filtres des listes de gymnastes ;
- mémorisation des filtres de microcycles, séances et graphiques semaine/mois, séances/heures ;
- restauration automatique des choix à la prochaine ouverture, avec protection contre les filtres devenus inexistants ;
- lecteur musical ouvrable dans une grande fenêtre utilisant toute la largeur de la tablette ;
- déplacement du lecteur existant sans interrompre ni recommencer la piste ;
- bouton dédié Google Drive utilisant le sélecteur de fichiers Android, sans nouvel accès global au contenu du Drive ;
- copie du fichier audio choisi dans le stockage local de la gymnaste pour conserver la lecture hors connexion.

Validation : persistance après redémarrage simulé, conservation des filtres dynamiques, import audio Drive, lecteur agrandi, syntaxe, intégrité PWA et 16 suites métier contrôlés.

## Séances analytiques et feuilles d’appel — version 1.25.0

- Chaque séance accepte plusieurs agrès travaillés et plusieurs profils techniques issus du référentiel de progression.
- Deux graphiques comparent la charge par agrès et par profil, avec regroupement semaine/mois et mesure en séances/heures.
- La catégorie protégée « Feuille d’appel » réutilise les séances planifiées et les catégories de gymnastes.
- Les fiches personnelles affichent automatiquement les séances et heures de présence et d’absence, ainsi que le taux de présence.
- Les feuilles d’appel sont incluses dans les sauvegardes locales, JSON et Google Drive.

Validation : calculs semaine/mois, séances/heures, multi-agrès, multi-profils, présences/absences, sauvegardes Drive, intégrité des 415 fonctions antérieures et 15 suites métier contrôlés.

## Session Google mémorisée et cartes Séances — version 1.24.0

- conservation du jeton Google tant qu’il reste valide, y compris après fermeture et relance de la PWA ;
- mémorisation du choix de connexion après la première autorisation ;
- renouvellement préparé avant expiration et déclenché au prochain appui dans l’application, conformément à l’exigence Google d’un geste utilisateur pour le modèle OAuth côté navigateur ;
- retour au bouton « Connexion Google » uniquement si la session Google a expiré, si l’autorisation a été révoquée ou si le navigateur bloque le flux ;
- déconnexion explicite qui supprime le jeton, son expiration et la préférence de reconnexion ;
- quatrième onglet « Séances » dans Planification, en complément des Macrocycles, Mésocycles et Microcycles ;
- cartes de séance avec date, horaire, durée, type, statut, origine et notes ;
- filtres par microcycle et recherche textuelle ;
- ajout, modification, déplacement vers un autre microcycle et suppression depuis l’onglet Séances ;
- navigation complète Macrocycle → Mésocycle → Microcycle → Séance avec retour carte par carte ;
- une séance automatique modifiée devient une exception manuelle et n’est pas écrasée lors de la régénération annuelle ;
- personnalisation indépendante des couleurs de l’onglet Séances ;
- version PWA 1.24.0 et cache v39.

Validation : persistance et expiration OAuth, renouvellement au geste utilisateur, déconnexion, 114 séances initiales, ajout/déplacement/suppression, conservation après régénération, navigation sur quatre niveaux, syntaxe et suites métier contrôlés.

## Navigation Planification et version visible — version 1.23.0

- historique interne des cartes de planification : macrocycle, mésocycle puis microcycle ;
- le bouton de la page détaillée revient d’abord à la carte précédente, sans renvoyer directement au début de Planification ;
- le bouton Retour général utilise le même historique ;
- après la dernière carte, le retour ouvre normalement la page principale de Planification ;
- numéro de version affiché dans Réglages et alimenté automatiquement par la version du code ;
- version PWA 1.23.0 et cache v38.

Validation : navigation avant/arrière sur trois niveaux, retour final vers Planification, affichage dynamique de la version, syntaxe et suites métier contrôlés.

## Sauvegarde des couleurs de catégories — version 1.22.1

- correction de l’enregistrement des couleurs d’accent et de fond des catégories, notamment « Fédéral A » et « Fédéral B » ;
- suppression d’un effet de bord qui reconstruisait le thème pendant sa lecture et écrivait ensuite la couleur dans un ancien objet devenu inactif ;
- conservation vérifiée après sauvegarde locale, normalisation des données et redémarrage simulé ;
- synchronisation Google Drive et toutes les autres personnalisations inchangées ;
- version PWA 1.22.1 et cache v37.

Validation : reproduction du défaut Fédéral A, test de non-régression dédié, sauvegarde/rechargement du thème, syntaxe et suites métier contrôlés.

## Planification pleine page et personnalisation UI/UX — version 1.22.0

- bouton « Annuler » toujours disponible dans le formulaire d’ajout ou de modification d’un élément de progression ;
- titre et description de la page Planification entièrement modifiables ;
- ouverture d’un macrocycle, mésocycle ou microcycle dans une véritable page de détail, avec navigation Retour, au lieu d’une fenêtre superposée ;
- classification des mésocycles en cinq phases : Préparation physique (PP), Préparation physique spécifique (PPS), Préparation pré-compétition (PPC), Préparation compétition (PC) et Transition après compétition (TR) ;
- migration automatique des mésocycles existants vers la phase correspondante, sans perte de contenu ;
- choix de la phase lors de la création ou de la modification d’un mésocycle ;
- nouveau configurateur d’interface dans Réglages : police, fonds, textes, barre supérieure et couleurs des actions ;
- personnalisation indépendante des catégories, des pages principales et des onglets de chaque fiche ;
- contraste du texte des boutons recalculé automatiquement lorsque leur couleur change ;
- conservation des thèmes dans la sauvegarde locale, l’export JSON et la synchronisation Google Drive ;
- version PWA 1.22.0 et cache v36.

Validation : migration des planifications, cinq types de mésocycles, navigation pleine page, édition du titre et de la description, annulation d’un ajout Progression, thème global et thèmes par zone, synchronisation Drive, syntaxe et suites métier contrôlés.

## Programmation automatique, licence PDF et interface Progression — version 1.21.0

- configurateur annuel accessible depuis la carte « Programmation de départ » ;
- horaires hebdomadaires distincts hors vacances et pendant les vacances ;
- choix de la zone scolaire A, B ou C, avec zone A préselectionnée pour Mâcon / académie de Dijon ;
- calendrier officiel métropolitain 2026–2027 intégré, avec Toussaint, Noël, hiver, printemps, pont de l’Ascension et été ;
- exclusion facultative des jours fériés nationaux ;
- ajout de stages, compétitions et événements sur un jour ou une période, avec horaires et rattachement à un mésocycle ;
- ajout de périodes de fermeture personnalisées ;
- aperçu automatique du nombre de séances, des heures, des entraînements, stages et compétitions avant enregistrement ;
- régénération des microcycles et des séances automatiques sans supprimer les séances ajoutées manuellement ;
- conservation exacte du programme initial : 114 dates, 284,5 h, 104 entraînements, 8 jours de stage et 2 jours de compétition ;
- remplacement du numéro de licence écrit par un document PDF importable, ouvrable, téléchargeable, remplaçable et supprimable dans la fiche ;
- stockage séparé du PDF de licence pour ne pas saturer les données principales ;
- formulaire d’ajout du référentiel Progression replié : seul le bouton « Ajouter » reste visible tant qu’aucune édition n’est demandée ;
- version PWA 1.21.0 et cache v35.

Validation : calendrier officiel par zone, génération et calcul des volumes, conservation des séances manuelles, migration de la planification, stockage PDF, suppression associée à la fiche, interface Progression, syntaxe et suites métier contrôlés.

## Planification GAF U13 — version 1.20.0

- nouvelle catégorie protégée « Planification » sur l’écran d’accueil ;
- trois onglets distincts : Macrocycle, Mésocycles et Microcycles ;
- modèle initial construit depuis la programmation GAF Fédérale A 10–13 ans 2026–2027 fournie ;
- un macrocycle saisonnier, les 14 mésocycles P01 à P14 et 46 microcycles hebdomadaires préchargés ;
- les 114 dates du calendrier sont enregistrées comme séances structurées et modifiables ;
- un appui sur un cycle ouvre une carte détaillée avec objectifs, dates, charge, statut, notes et volumes ;
- ajout, modification et suppression possibles à chacun des trois niveaux ;
- dans chaque microcycle : ajout, modification ou suppression des séances, dates, heures, types, statuts et notes ;
- recalcul automatique du nombre de dates et du volume horaire après chaque changement ;
- synthèse saisonnière initiale : 114 dates, 104 entraînements, 8 jours de stage, 2 jours de compétition et 284,5 h ;
- échéance initiale du 23 janvier 2027 : 55 dates et 145 h programmées avant la première compétition ;
- planification incluse dans l’export JSON et la synchronisation Google Drive sans modifier les fiches existantes ;
- version PWA 1.20.0 et cache v34.

Validation : hiérarchie macro/méso/micro, carte détaillée, édition des séances, calcul des durées, échéance, migration des anciennes sauvegardes, synchronisation Google Drive, syntaxe et suites métier contrôlés.

## Progression par agrès et tri des gymnastes — version 1.19.0

- suppression de l'agrès inexistant « Transversal » dans le référentiel et le formulaire ;
- migration sans perte des anciens éléments Transversal vers une rubrique temporaire « À classer » ;
- quatre onglets séparés dans Progression : Saut, Barres, Poutre et Sol, avec le nombre d'évaluations pour chaque agrès ;
- un élément associé à plusieurs agrès apparaît dans chacun de ses onglets avec son statut personnel propre ;
- ajout dans chaque catégorie Fédérale d'une recherche par nom ou prénom ;
- tris disponibles : nom, prénom, âge croissant, âge décroissant et catégorie d'âge ;
- filtre par catégorie sportive : moins de 7 ans, Poussine, Benjamine, Minime, Cadette, Junior, Senior ou âge non renseigné ;
- compteur indiquant le nombre de gymnastes affichées et bouton de réinitialisation des filtres ;
- version PWA 1.19.0 et cache v33.

Validation : migration Transversal, séparation des agrès, élément multi-agrès, recherche accentuée, tris alphabétiques, tris d'âge, filtres de catégorie, synchronisation Google Drive, syntaxe et suites métier contrôlés.

## Progression multi-agrès et quatre niveaux — version 1.18.0

- remplacement de l'ancienne échelle par quatre statuts explicites : Non réalisé, Étudié, En cours et Acquis ;
- définitions affichées directement dans l'onglet Progression pour harmoniser les évaluations ;
- un même élément peut désormais être associé à plusieurs agrès sans être créé plusieurs fois ;
- statut et qualité technique enregistrés séparément pour chaque couple élément/agrès et chaque gymnaste ;
- exemple pris en charge : une souplesse arrière peut être Acquise au Sol et Étudiée à la Poutre ;
- statistiques, listes détaillées, radar par agrès, PDF de progression et PDF général adaptés aux évaluations multi-agrès ;
- migration automatique des anciennes données : « Pas acquis » devient « Non réalisé », les autres validations et qualités sont conservées sur leur agrès ;
- échelle du radar par agrès : Non réalisé 0 %, Étudié 35 %, En cours 70 %, Acquis 100 % ;
- version PWA 1.18.0 et cache v32.

Validation : indépendance Sol/Poutre/Barres/Saut, ajout et retrait d'un agrès, conservation des anciennes données, radar, exports, synchronisation Google Drive, syntaxe et suites métier contrôlés.

## Aperçu visuel des compositions — version 1.17.1

- aperçu synchronisé ajouté sous la zone de composition des mouvements ;
- les images importées et les symboles dessinés apparaissent dans l'ordre réel de l'enchaînement ;
- les symboles intégrés restent visibles sous leur forme graphique ;
- le champ texte et ses codes internes sont conservés pour garantir la compatibilité des anciennes compositions et le calcul de la note de départ ;
- les textes libres et les codes inconnus restent visibles dans l'aperçu ;
- suppression complète du bloc « Images intégrées supprimées » et de sa commande de restauration ;
- les images intégrées supprimées restent définitivement masquées sans modifier les compositions déjà enregistrées ;
- version PWA 1.17.1 et cache v31.

Validation : ordre des symboles, affichage du dessin tactile, texte libre, code inconnu, état vide, calcul de la note de départ, persistance des suppressions, syntaxe et suites métier contrôlés.

## Qualité technique et dessin tactile — version 1.17.0

- acquisition et qualité d'exécution désormais enregistrées séparément pour chaque gymnaste ;
- un élément peut rester acquis tout en portant une correction technique, par exemple un ATR tenu avec alignement à corriger ;
- appréciation indépendante pour chaque famille associée à l'élément : non évalué, à corriger, fragile, correct ou maîtrisé ;
- radar technique calculé uniquement à partir des qualités évaluées (25, 50, 75 ou 100 %) ;
- radar par agrès conservé sur les statuts d'acquisition (0, 50 ou 100 %) ;
- détails des qualités affichés dans le tableau, les statistiques, le PDF de progression et le PDF général ;
- éditeur tactile de symboles dans Mouvements, compatible doigt, stylet et souris ;
- crayon, gomme, couleur, épaisseur, annulation et effacement complet ;
- dessin enregistré comme les images importées, avec dossier, valeur du mouvement et bonus ;
- version PWA 1.17.0 et cache v30.

Validation : migration sans perte des anciennes progressions, indépendance statut/qualité, agrégation des deux radars, exports, dessin tactile, synchronisation Drive, syntaxe et suites métier contrôlés.

## Radars responsives et familles multiples — version 1.16.0

- sélection de plusieurs familles techniques pour un même élément grâce à des cases à cocher adaptées au tactile ;
- un élément contribue à chaque famille sélectionnée tout en conservant un seul statut personnel par gymnaste ;
- migration automatique de l'ancienne famille unique vers la nouvelle liste, sans perte de classification ni de validation ;
- affichage de toutes les familles sous forme de badges dans le tableau et les cartes mobiles ;
- familles multiples conservées dans les sauvegardes locales, les exports JSON et la synchronisation Google Drive ;
- conteneurs de radar fluides en portrait et en paysage, libellés répartis sur plusieurs lignes et redimensionnement automatique lors de la rotation ;
- affichage des familles multiples dans le PDF de progression et dans le PDF général de la gymnaste ;
- version PWA 1.16.0 et cache v29.

Validation : migration 1.15.0, familles multiples, calcul sur plusieurs axes, redimensionnement, export PDF, synchronisation Drive, syntaxe et suites métier contrôlés.

## Profils de progression par technique et par agrès — version 1.15.0

- chaque élément commun reçoit un agrès et une famille technique modifiables ;
- agrès disponibles : saut, barres, poutre, sol et transversal ;
- familles disponibles : acrobaties avant/arrière, souplesse, force-gainage, alignement-tenue, équilibre-proprioception, impulsion-détente et coordination-rythme ;
- ancien référentiel migré sans perte : les éléments existants restent présents et portent « À classer » jusqu'à leur modification ;
- radar principal calculé par famille technique et radar complémentaire calculé par agrès ;
- score de chaque axe égal à la moyenne des statuts classés : pas acquis = 0 %, en cours = 50 %, acquis = 100 % ;
- éléments non classés exclus uniquement du radar concerné et signalés clairement ;
- les deux radars et les colonnes Agrès/Famille sont intégrés au PDF de progression et au PDF général de la gymnaste ;
- version PWA 1.15.0 et cache v28.

Validation : migration des anciennes données, conservation des statuts personnels, classifications, agrégations des deux radars, exports PDF, syntaxe, synchronisation Drive et suites métier contrôlés.

## Progressions et radar dans les statistiques/PDF — version 1.14.0

- diagramme radar ajouté dans l'onglet Statistiques de chaque gymnaste ;
- une branche par élément avec l'échelle : pas acquis, en cours, acquis ;
- affichage limité aux 12 premiers éléments pour conserver la lisibilité, avec indication des éléments supplémentaires ;
- ajout du résumé, du radar et du tableau complet des progressions dans le PDF général de la gymnaste ;
- ajout du radar vectoriel dans le PDF individuel de progression ;
- tableau complet conservé dans les PDF même lorsque le radar est limité ;
- version PWA 1.14.0 et cache v27.

Validation : valeurs du radar, limite d'affichage, statuts personnels, intégration au PDF général, PDF de progression, syntaxe et suites métier contrôlés.

## Référentiel commun de progression — version 1.13.0

- une seule liste d'éléments commune à toutes les gymnastes ;
- états « Pas acquis », « En cours » et « Acquis » conservés séparément pour chaque gymnaste ;
- ajout, renommage, suppression et ordre des éléments répercutés automatiquement sur toutes les fiches ;
- statistiques et PDF toujours calculés à partir des états personnels de la gymnaste ouverte ;
- suppression de l'interface de copie devenue inutile ;
- migration automatique des anciens tableaux individuels vers le référentiel commun ;
- fusion des éléments portant le même nom sans perdre les statuts déjà saisis ;
- version PWA 1.13.0 et cache v26.

Validation : migration d'anciennes données, statuts isolés entre gymnastes, ajout commun, renommage commun, réordonnancement commun, suppression globale, statistiques, PDF, synchronisation Drive et suites métier contrôlés.

## Progression responsive, copie et réordonnancement — version 1.12.0

- tableau à quatre colonnes conservé sur tablette et ordinateur ;
- affichage en cartes compactes sur téléphone, sans défilement horizontal ;
- boutons tactiles pour modifier les trois états d'acquisition ;
- déplacement de chaque élément vers le haut ou le bas ;
- ordre personnalisé conservé dans la fiche, les sauvegardes, Google Drive et le PDF ;
- copie du tableau vers une autre gymnaste avec conservation des statuts et de l'ordre ;
- mode non destructif pour ajouter uniquement les éléments manquants ;
- mode de remplacement complet protégé par une confirmation ;
- version PWA 1.12.0 et cache v25.

Validation : responsive, réordonnancement, copie avec fusion, copie avec remplacement, données séparées par gymnaste, syntaxe et suites métier contrôlés.

## Détail des éléments dans les statistiques — version 1.11.1

- affichage dans l'onglet Statistiques des noms de tous les éléments suivis ;
- trois listes séparées : acquis / validés, en cours et pas acquis / non validés ;
- tri alphabétique des éléments dans chaque liste ;
- messages explicites lorsqu'une liste ne contient aucun élément ;
- mise à jour immédiate des listes après ajout, renommage, changement de statut ou suppression ;
- compteurs, taux d'acquisition, barre de répartition et export PDF de la version 1.11.0 conservés ;
- version PWA 1.11.1 et cache v24.

Validation : répartition des noms dans les trois groupes, tri alphabétique, états vides, syntaxe, actions de l'interface et suites métier contrôlés.

## Progression individuelle — version 1.11.0

- nouvel onglet « Progression » dans chaque fiche gymnaste ;
- tableau à quatre colonnes : nom de l'élément, pas acquis, en cours et acquis ;
- ajout d'un élément avec le statut initial « Pas acquis » ;
- modification du nom et changement immédiat du statut grâce aux boutons radio ;
- suppression protégée par une confirmation ;
- un seul statut actif par élément ;
- refus des noms vides et des doublons dans la fiche d'une même gymnaste ;
- export PDF vectoriel individuel avec le même tableau à quatre colonnes, résumé chiffré et pagination ;
- ajout dans l'onglet Statistiques du total suivi, du taux d'acquisition, des trois compteurs et d'une barre de répartition ;
- conservation séparée des tableaux pour chaque gymnaste ;
- suppression automatique du tableau associé lorsqu'une fiche est supprimée ;
- synchronisation des progressions via les sauvegardes JSON et Google Drive ;
- version PWA 1.11.0 et cache v23.

Validation : ajout, renommage, changement des trois statuts, refus des doublons, suppression, isolation entre gymnastes, calcul des statistiques et normalisation des anciennes sauvegardes testés. Les suites métier et les scénarios de synchronisation existants restent exécutés.

## Gestion personnalisée des catégories — version 1.10.0

- bouton « Gérer » directement depuis l'écran des catégories ;
- création de nouvelles catégories avec un nom libre ;
- renommage des catégories existantes sans modifier leurs identifiants internes ni les fiches associées ;
- suppression d'une catégorie vide après confirmation ;
- lors de la suppression d'une catégorie utilisée, choix obligatoire d'une autre catégorie vers laquelle déplacer toutes les gymnastes ;
- impossibilité de supprimer la dernière catégorie de gymnastes ;
- bloc Compétition protégé contre le renommage et la suppression ;
- listes de sélection des fiches mises à jour automatiquement ;
- export PDF des statistiques disponible pour toutes les catégories créées, avec nom et nom de fichier dynamiques ;
- noms de catégories limités à 60 caractères et refus des doublons ;
- synchronisation des catégories personnalisées avec les autres données Google Drive ;
- version PWA 1.10.0 et cache v22.

Validation : création, renommage, refus des doublons, suppression vide, déplacement avant suppression et protection de la dernière catégorie testés. Les tests de synchronisation Drive et les suites métier existantes restent exécutés avec la nouvelle structure dynamique.

## Catégories d'âge des équipes — version 1.9.0

- choix obligatoire d'une tranche d'âge lors de la création ou de la modification d'une équipe ;
- tranches proposées : 7–9, 10–11, 10–13, 10–15, 10–17, 10 ans et plus, 12–13, 12–15, 12–17, 12 ans et plus, 14–15, 14–17, 14 ans et plus, 16–17, 16 ans et plus et 18 ans et plus ;
- option « Tranche personnalisée » avec âge minimum et âge maximum facultatif ;
- filtrage basé sur l'âge sportif de fin de saison déjà utilisé par les fiches, et non sur l'âge exact du jour ;
- affichage de l'âge sportif à côté de chaque gymnaste proposée ;
- exclusion automatique des gymnastes hors tranche ou sans date de naissance ;
- exclusion automatique de toute gymnaste déjà membre d'une autre équipe ;
- lors de la modification, les membres de l'équipe en cours restent disponibles, tandis que les membres des autres équipes restent exclus ;
- contrôle d'exclusivité répété à l'enregistrement pour éviter une double affectation ;
- tri alphabétique des gymnastes disponibles ;
- affichage de la catégorie sur chaque carte d'équipe ;
- équipes existantes conservées avec la mention « Non définie » jusqu'à leur prochaine modification ;
- synchronisation de la catégorie avec les autres données Google Drive ;
- version PWA 1.9.0 et cache v21.

Validation : filtres 10–11 et 10–13, âges sportifs 10 à 14 ans, modification d'une équipe, exclusion des membres d'une autre équipe et absence de date de naissance testés. Les 183 fonctions de la version 1.8.0 sont conservées et 10 fonctions sont ajoutées. Les 29 scénarios Drive et les neuf suites métier existantes réussissent. La syntaxe JavaScript/JSON, les identifiants HTML et les actions de l'interface sont valides.

## Valeurs des mouvements et note de départ — version 1.8.0

- champs « Valeur du mouvement » et « Bonus de bonification » pour chaque image importée ;
- valeurs également modifiables pour les pictogrammes intégrés d'origine ;
- acceptation des décimales avec virgule ou point, jusqu'à trois décimales ;
- affichage de la valeur et du bonus directement dans la palette ;
- calcul immédiat de la note de départ de l'enchaînement en cours ;
- détail séparé « valeur des mouvements + bonifications » ;
- recalcul lors de la saisie, de l'insertion d'un mouvement, du changement d'agrès ou d'une modification de valeur ;
- comptage de chaque occurrence lorsqu'un même mouvement apparaît plusieurs fois ;
- avertissement pour les mouvements sans valeur et les anciens codes qui ne sont plus reconnus ;
- reprise des images existantes sans valeur imposée et sans modification de leurs codes ou dossiers ;
- synchronisation des valeurs et bonus avec les autres données Google Drive ;
- version PWA 1.8.0 et cache v20.

La note de départ affichée est une valeur calculée : somme des valeurs de tous les mouvements reconnus dans le texte + somme de leurs bonus. Elle n'est pas enregistrée séparément et se recalcule toujours depuis l'enchaînement et la bibliothèque afin d'éviter les incohérences.

Validation : calcul avec mouvements répétés, bonus, décimales, valeurs manquantes et codes inconnus testé ; enregistrement et restauration après erreur testés ; 173 fonctions de la version 1.7.0 conservées. Les 29 scénarios Drive et les huit suites métier existantes réussissent. La syntaxe JavaScript/JSON, les identifiants HTML et les actions de l'interface sont valides.

## Dossiers d'images de mouvements — version 1.7.0

- création de dossiers depuis Fiche gymnaste → Mouvements → Gérer / Ajouter ;
- création de sous-dossiers dans le dossier actuellement ouvert, sans limite métier imposée à la profondeur ;
- noms de 1 à 60 caractères, avec refus des doublons au même emplacement ;
- navigation par fil d'Ariane dans le gestionnaire et directement dans la palette de mouvements ;
- classement d'une nouvelle image au moment de l'import ;
- déplacement d'une image existante vers n'importe quel dossier ou vers « Non classées » ;
- renommage des dossiers et suppression des dossiers vides ;
- suppression protégée lorsqu'un dossier contient encore une image ou un sous-dossier ;
- reprise automatique des anciennes images dans « Non classées », sans migration destructive ;
- synchronisation de l'arborescence avec les autres données JSON via Google Drive ;
- aucune modification des codes déjà placés dans les enchaînements lors d'un classement, déplacement ou renommage de dossier ;
- fenêtre de gestion élargie sur tablette ; version PWA 1.7.0 et cache v19.

Validation : création, sous-dossier, navigation, renommage, déplacement, protection et suppression testés ; restauration après erreur de sauvegarde testée ; métadonnées orphelines ou cycliques récupérées dans la racine ; 156 fonctions de la version 1.6.3 conservées et 17 fonctions ajoutées. Les 29 scénarios Drive et les sept suites métier existantes réussissent. La syntaxe JavaScript/JSON, les identifiants HTML et les actions de l'interface sont valides. Le navigateur de contrôle distant ne peut pas ouvrir le serveur local du projet et le navigateur Playwright local n'est pas installé : le rendu réel reste à confirmer sur l'appareil après déploiement.

## Rotation et plein écran — version 1.6.3

Le bouton de la version 1.6.2 appelait directement `screen.orientation.lock('any')`. Un refus peut venir de l'absence de prise en charge de l'API ou de l'exigence de plein écran par le navigateur ; le message précédent ne distinguait pas ces situations.

- nouveau bouton Réglages → Affichage portrait / paysage → Paysage — plein écran ;
- demande de plein écran déclenchée uniquement par le clic utilisateur, puis demande d'orientation paysage ;
- commande Quitter le plein écran disponible dans la barre supérieure ; sortie native du navigateur également conservée ;
- retour à la rotation automatique et déverrouillage lors de la sortie du mode paysage en plein écran ;
- retour à l'affichage précédent tenté si le plein écran a été ouvert mais que la rotation est refusée ;
- messages distincts pour l'absence d'API, le refus du plein écran et le refus de la rotation, avec le nom de l'erreur ;
- demandes de rotation sérialisées pour éviter qu'un second clic annule la première ;
- aucun rechargement, changement des données, ni plein écran automatique au lancement ;
- manifeste toujours libre (`orientation: any`), version 1.6.3 et cache v18.

Si la tablette refuse encore la commande, activer la rotation automatique dans les réglages système et tourner la tablette. Pour diagnostiquer un blocage persistant, relever le modèle de tablette, le navigateur utilisé pour installer/ouvrir l'application, le mode d'ouverture (icône installée ou onglet) et le nouveau message exact. Aucun code ne peut garantir cette API sur un navigateur qui ne la propose pas.

Validation : syntaxe JavaScript/JSON et gestionnaires HTML contrôlés ; 152 fonctions précédentes conservées ; 29 scénarios Drive et sept suites métier existantes passent. Pas de navigateur de test local disponible ni d'accès à la tablette réelle : ces contrôles ne prouvent pas que la rotation plein écran soit compatible avec son appareil.

Références : https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock et https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen

## Portrait / paysage — version 1.6.2

- suppression du verrouillage portrait : le manifeste déclare désormais `orientation: any` ;
- mise en page paysage élargie jusqu'à 1200 px, tout en conservant le format portrait ;
- davantage de fiches gymnastes par ligne, saisie des quatre agrès en deux colonnes et informations personnelles réparties sur deux colonnes ;
- tableaux de compétition utilisant la largeur du contenu, avec défilement horizontal conservé sur les petits écrans ;
- équipes et ordres de passage affichés sur deux colonnes à partir de 900 px en paysage ;
- fenêtres de fiche, d'équipe et d'images adaptées aux faibles hauteurs, avec contenu défilant et boutons accessibles ;
- nouveau bloc Réglages → Affichage portrait / paysage → Activer la rotation ;
- demande de rotation libre au lancement via l'API d'orientation lorsqu'elle est disponible ; aucun passage forcé en plein écran ;
- aucun rechargement ou remplacement des champs lors d'une rotation : données, saisie en cours, onglet et lecture audio restent gérés comme avant ;
- version 1.6.2 / cache v17 ; synchronisation Drive de la version 1.6.1 et 151 fonctions précédentes conservées.

Utilisation : publier les nouveaux fichiers sur le même hébergement, ouvrir l'application avec Internet, activer la rotation automatique de la tablette puis la tourner. Le bouton des réglages peut réessayer l'autorisation de rotation si une ancienne installation reste en portrait. Le contrôle logiciel dépend du navigateur ; si le navigateur le refuse, l'application affiche les consignes de rotation système. Une mise à jour du manifeste de l'application déjà installée peut être prise en compte avec un délai propre au navigateur : fermer et rouvrir l'application après sa mise à jour.

Validation : syntaxe JavaScript/JSON, unicité des identifiants HTML, gestionnaires d'actions et identité PWA contrôlés ; 29 scénarios Drive et sept suites métier existantes réussis. Pas de navigateur local disponible pour une vérification visuelle, ni de test physique de rotation sur la tablette de l'utilisateur. Les contrôles automatisés ne valident donc pas le comportement du capteur ou le support de l'API par son navigateur.

Références : https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/orientation et https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock

## Correction de synchronisation — version 1.6.1

La version 1.6.0 utilisait `spaces: 'appData'` au lieu de `appDataFolder` dans la recherche Google Drive. La connexion OAuth pouvait réussir, puis la recherche échouer sans information visible. Référence officielle : https://developers.google.com/workspace/drive/api/reference/rest/v3/files/list

- recherche limitée à `gym_cloud_data_v3.json` dans `appDataFolder`, avec pagination ;
- aucune suppression automatique des fichiers doublons ;
- récupération des données sur un nouvel appareil avant tout envoi ; aucune création de sauvegarde vide ;
- priorité aux sauvegardes contenant des données si un ancien doublon est vide ;
- validation du JSON avant de modifier les données de l'appareil ;
- envois et téléchargements sérialisés : une saisie pendant un envoi reste enregistrée localement et repart ensuite ;
- empreinte SHA-256 de la dernière synchronisation pour distinguer changements locaux et distants après fermeture ;
- choix explicite en cas de divergence, avec copie locale avant chargement ou copie Drive avant remplacement manuel ;
- copie locale précédente exportable depuis Réglages ; le fichier exporté peut être réimporté avec l'import JSON existant ;
- fichiers de sécurité Drive nommés `gym_cloud_backup_v3_<date>.json`, conservés dans l'espace privé de l'application (invisible dans l'interface Drive, pas de gestionnaire de restauration de ces copies dans cette version) ;
- choix des anciens doublons mémorisé tant que leur contenu ne change pas ;
- nouveau bouton « Synchroniser maintenant » et statut indiquant explicitement réussite, absence de sauvegarde ou erreur ;
- token encore valide réutilisé ; accès expiré signalé avec reconnexion par le bouton, sans popup automatique ;
- relecture au retour au premier plan et au retour d'Internet uniquement hors fiche en édition, compétition et fenêtre modale ;
- exclusion de Drive/OAuth et des requêtes authentifiées du cache PWA ; conservation du cache des CDN statiques utiles aux PDF et graphiques ;
- statut de saisie compétition précisant que l'enregistrement est local ;
- version PWA 1.6.1 et cache v16 ; identité de l'application, client OAuth, clés historiques des données et fichier Drive conservés.

### Mise en service sur les deux appareils

1. Sur l'appareil qui contient les fiches, faire une sauvegarde via Réglages → Sauvegarde locale → Exporter.
2. Remplacer les fichiers sur le même hébergement GitHub Pages avec ce paquet ; ne pas désinstaller les applications.
3. Ouvrir d'abord l'application sur l'appareil qui contient les données, puis Réglages → Connexion Google → Synchroniser maintenant. Attendre « Synchronisé — N gymnaste(s) » avec le nombre attendu.
4. Ouvrir la tablette, choisir le même compte Google, puis synchroniser. Les données doivent se charger.
5. Si deux versions sont proposées, vérifier leur date et le nombre de fiches avant de choisir. Ne pas effacer les fiches de l'appareil source.

Si aucun appareil n'a jamais réussi à sauvegarder sur Drive, Google ne peut pas restituer les données locales à lui seul : l'étape 3 est indispensable. L'export JSON de l'appareil source peut aussi être importé directement sur la tablette. Les musiques restent dans IndexedDB sur chaque appareil, comme avant.

### Validation et limites

- 29 scénarios de synchronisation exécutés avec une API Google simulée : tablette vierge, première sauvegarde, pagination, erreurs 400/401/403/500, réseau indisponible, données invalides, doublons, conflits, copie de secours, saisies pendant lecture/envoi, reprise hors ligne, session OAuth et règles de cache.
- Exécution reproductible : `node tests/drive_sync_test.cjs` (Node.js avec Web Crypto, sans compte Google).
- Sept suites métier existantes réussies : âges, anniversaires, images, musique, matchs/PDF, statistiques/PDF et saisie compétition.
- 135 fonctions précédentes conservées ; syntaxe JavaScript/JSON et actions HTML contrôlées.
- Pas de test connecté au compte Google réel, ni sur la tablette de l'utilisateur ; navigateur de test absent dans cet environnement. Les exports PDF ont leurs tests de logique existants, sans nouveau contrôle visuel puisque leur mise en page n'a pas changé.
- Il ne s'agit pas d'un éditeur collaboratif : la relecture avant envoi détecte les conflits observables, mais ne constitue pas un verrou atomique entre deux appareils écrivant exactement simultanément. Éviter la saisie simultanée sur deux appareils, et conserver les exports JSON de sécurité.

## Corrections appliquées

- suppression de la déclaration en double du manifeste ;
- chargement Google API/Identity rendu déterministe pour éviter la course au démarrage ;
- protections si Google API, Google Identity ou Chart.js sont indisponibles ;
- restauration du pictogramme de logo par défaut ;
- protection contre un JSON de couleurs locales corrompu ;
- formatage PDF compatible avec d’anciennes notes enregistrées comme chaînes ;
- réinitialisation limitée aux clés de Mâcon Gym Suivi au lieu d’effacer tout le `localStorage` du domaine ;
- service worker mis à jour : activation immédiate, nettoyage des anciens caches et navigation en priorité réseau ;
- ajout des quatre icônes PWA réellement déclarées par le manifeste ;
- ajout de la couleur de thème du navigateur.

## Nouveau système de match

- comparaison de toutes les gymnastes de l'équipe sur Saut, Barres, Poutre et Sol ;
- utilisation de la meilleure note finale enregistrée par gymnaste et par agrès ;
- classement général par total des quatre agrès ;
- repérage visuel des trois meilleures notes de chaque agrès ;
- conservation du calcul Top 3 équipe pour chaque agrès ;
- ordre de passage indépendant pour chaque agrès, enregistré dans l'équipe ;
- proposition automatique « notes croissantes, meilleure gymnaste en dernière » ;
- modification manuelle des passages avec les flèches haut/bas ;
- export compétition recréé en tableau PDF vectoriel afin d'éviter le blocage lié à la capture HTML haute résolution.
- export d'une feuille de match vierge sur une seule page A4 paysage : une ligne par gymnaste et quatre blocs en colonnes (Saut, Barres, Poutre, Sol), chacun avec l'ordre de passage enregistré et les champs « D », « fautes » et « finale » laissés vides.

## Saisie des notes en compétition

- nouvel onglet « Saisie compétition » conservant le système de match existant ;
- création et reprise de plusieurs compétitions avec nom, date et équipe ;
- saisie rapide par agrès, dans l'ordre de passage déjà préparé pour l'équipe ;
- champs « note de départ » et « fautes », avec calcul automatique de la note finale ;
- classement individuel provisoire recalculé immédiatement, avec détail des quatre agrès et nombre d'agrès saisis ;
- total des trois meilleures notes par agrès et total d'équipe affichés en direct ;
- enregistrement automatique sur l'appareil et synchronisation Google Drive temporisée pour éviter un blocage pendant la frappe ;
- ajout automatique des résultats à l'historique et aux statistiques de chaque gymnaste ;
- suppression cohérente des saisies lorsqu'une compétition, une équipe ou une gymnaste est supprimée.

## Mise à jour automatique

- contrôle de version au lancement, au retour au premier plan et toutes les quinze minutes ;
- téléchargement du nouveau service worker en arrière-plan ;
- rechargement automatique de l'application dès qu'une nouvelle version est disponible ;
- conservation de l'identité PWA et des données déjà enregistrées sur le téléphone.

## Catégories d'âge

- calcul de l'âge sportif selon l'année de fin de saison, sans dépendre du jour d'anniversaire ;
- bascule automatique vers la nouvelle saison chaque 1er août ;
- catégories complètes : Poussine 7-9 ans, Benjamine 10-11 ans, Minime 12-13 ans, Cadette 14-15 ans, Junior 16-17 ans et Senior 18 ans et plus ;
- dates absentes ou incohérentes signalées sans modifier les fiches enregistrées.

## Notifications d'anniversaire

- activation ou désactivation depuis les réglages de l'application ;
- demande d'autorisation déclenchée uniquement par le bouton utilisateur ;
- vérification au lancement, au retour au premier plan et toutes les heures lorsque l'application reste ouverte ;
- contrôle périodique en arrière-plan sur les navigateurs compatibles ;
- notification regroupée lorsqu'il y a plusieurs anniversaires le même jour et protection contre les doublons ;
- ouverture de Mâcon Gym Suivi lorsque la notification est touchée.

## Gestion des images des mouvements

- affichage et suppression des pictogrammes déjà intégrés dans le code, avec mémorisation du choix lors des mises à jour ;
- restauration possible d'un pictogramme intégré supprimé par erreur ;
- affichage de toutes les images personnalisées dans un gestionnaire unique accessible depuis l'onglet Mouvements ;
- ajout et enregistrement d'une nouvelle image avec aperçu avant sauvegarde ;
- modification du nom, du code et remplacement facultatif de l'image ;
- mise à jour automatique des codes déjà insérés lorsque l'abréviation est modifiée ;
- suppression avec confirmation, sans effacer le texte des enchaînements existants ;
- compression des nouvelles images et restauration de l'état précédent si le stockage est insuffisant.

## Musique des gymnastes

- ajout, remplacement, lecture et suppression d'une musique depuis la fiche personnelle ;
- lecteur audio natif compatible téléphone et ordinateur ;
- stockage séparé des données principales pour éviter de saturer la sauvegarde JSON et le `localStorage` ;
- lecture hors connexion sur l'appareil où la musique a été enregistrée ;
- suppression automatique de la musique locale lors de la suppression de la gymnaste ;
- limite de sécurité fixée à 80 Mo par fichier audio.

## Export PDF des statistiques par catégorie

- bouton d'export directement dans les listes Fédéral A et Fédéral B ;
- export vectoriel en A4 paysage pour éviter les blocages liés à la capture d'écran ;
- graphique horizontal comparant, pour chaque gymnaste, les moyennes réelles des scores finaux au Saut, Barres, Poutre et Sol ;
- échelle du graphique calculée automatiquement à partir des moyennes présentes, sans plafond fixe à 20 ;
- graphique réparti automatiquement sur plusieurs pages lorsque la catégorie est nombreuse ;
- tri alphabétique par nom puis prénom dans l'application, le graphique et le tableau PDF ;
- toutes les gymnastes de la catégorie regroupées dans un même PDF ;
- nombre d'évaluations, moyenne et meilleure note au Saut, Barres, Poutre et Sol ;
- moyenne globale et évolution entre la première et la dernière évaluation ;
- ligne de synthèse avec les moyennes et meilleures performances de la catégorie ;
- pagination automatique pour les catégories comportant de nombreuses gymnastes.

## Vérifications effectuées

- syntaxe JavaScript de `index.html` ;
- syntaxe JavaScript de `service-worker.js` ;
- validité JSON de `manifest.json` ;
- validité JSON de `version.json` ;
- unicité des identifiants HTML ;
- correspondance entre les gestionnaires HTML et les fonctions JavaScript ;
- présence de toutes les ressources PWA déclarées ;
- comparaison avec le paquet PWA antérieur pour éviter la suppression de fonctions importantes.

## Déploiement

Décompresser le contenu à la racine du dépôt GitHub Pages `Macon_gym_app`, puis remplacer les anciens fichiers. Le chemin du manifeste (`/Macon_gym_app/`) est volontairement conservé.
