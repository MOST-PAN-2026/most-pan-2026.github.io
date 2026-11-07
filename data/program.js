// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the website.
// After editing, bump the ?v= number for program.js in index.html.
//
//  - registrationUrl: paste the Google/Microsoft Form link here.
//  - Each day has a "schedule": a list of
//      { heading: "Session 1" }                         section heading
//      { time: "10:45–11:15", text: "...", kind: "break", icon: "coffee" }  non-talk slot
//                                         (icon: "coffee" or "lunch", optional)
//      { time, speaker, affiliation, photo, website, title, bio, abstract }  talk
//  - photo: put an image in /photos (e.g. photos/erjavec.jpg). If the file is
//    missing, the site shows the speaker's initials instead.
//  - website: speaker's homepage; photo and name link to it.
//  - bio: 2–4 sentences, shown under the speaker's name. Leave "" to hide.
//  - All times are Warsaw time.
// ---------------------------------------------------------------------------

window.SITE = {
  title: "MOST 2026",
  registrationUrl: "", // e.g. "https://forms.gle/XXXXXXXX"
  registrationDeadline: "", // e.g. "20 November 2026"
  onlineUrl: "http://zil.ipipan.waw.pl/seminarium-online",
  seminarUrl: "https://zil.ipipan.waw.pl/seminar",
  contactEmail: "", // e.g. "maciej.ogrodniczuk@ipipan.waw.pl"
};

window.EVENTS = [
  {
    id: "day1",
    date: "2026-11-23",
    dateLabel: "Monday, 23 November 2026",
    title: "Persuasion in Parliament and Beyond",
    subtitle: "Computational Analysis of Political Discourse",
    schedule: [
      { heading: "Registration and welcome" },
      { time: "8:30–9:00", text: "Participant registration" },
      { time: "9:00–9:15", text: "Opening of the conference and welcome by the representatives of the Institute of Computer Science and the International Cooperation Department of the Polish Academy of Sciences" },
      { heading: "Session 1" },
      {
        time: "9:15–10:00",
        speaker: "Tomaž Erjavec",
        affiliation: "Jožef Stefan Institute",
        photo: "photos/erjavec.jpg",
        website: "https://nl.ijs.si/et/",
        title: "ParlaMint – Comparable and Interoperable Parliamentary Corpora",
        bio: "Tomaž Erjavec is a Scientific and Professional Counselor in the Department of Knowledge Technologies at the Jožef Stefan Institute in Ljubljana, and works part-time at the Fran Ramovš Institute of the Slovenian Language, ZRC SAZU. He works on language corpora, text encoding standards, digital humanities and language technologies for Slovene. He coordinates CLARIN.SI and received the 2021 Steven Krauwer Award for CLARIN Achievements, partly for his ParlaMint parliamentary corpora.",
        abstract: "The talk presents the ParlaMint corpora of parliamentary debates (https://www.clarin.eu/parlamint) of 29 European countries and autonomous regions, covering at least the period from 2015 to 2022, and containing over 1 billion words. The corpora are uniformly encoded, contain rich metadata about their 24 thousand speakers, and are linguistically annotated, as well as machine translated to English. We present the compilation of the corpora, including the encoding infrastructure, use of GitHub, the production of individual corpora, the common pipeline for producing their distribution, and use of CLARIN services for dissemination. We also present associated efforts, such corpora of additional countries, and the ParlaSpeech (https://clarinsi.github.io/parlaspeech/) corpora. Finally, the use of the corpora and further work are discussed.",
      },
      {
        time: "10:00–10:45",
        speaker: "Maciej Ogrodniczuk",
        affiliation: "Institute of Computer Science, Polish Academy of Sciences",
        photo: "photos/ogrodniczuk.jpg",
        website: "https://language.ipipan.waw.pl/faculty/maciej-ogrodniczuk",
        title: "Beyond the Polish Parliamentary Corpus",
        bio: "Maciej Ogrodniczuk is an Associate Professor and Head of the Department of Language Modelling at the Institute of Computer Science, Polish Academy of Sciences, in Warsaw. He received his PhD in linguistics in 2006. His research focuses on the semantic description of Polish, in particular automated analysis of reference relations and discourse. He leads his group's work in CLARIN-PL and the PressMint project on corpora of European historical newspapers.",
        abstract: "The Polish Parliamentary Corpus (https://clip.ipipan.waw.pl/PPC), which is also represented in ParlaMint, served as a model for a series of Polish corpora containing similar types of material, which are ideally suited to research into persuasion techniques. The presentation will introduce these datasets: the Round Table Corpus (https://clip.ipipan.waw.pl/PRTC), documenting the opposition’s negotiations with the communist authorities of the Polish People’s Republic in 1989, and the Polish Local Government Debates Corpus (https://zil.ipipan.waw.pl/LocalGovPL) – a collection of transcripts from the proceedings of provincial assemblies, city councils, county councils and local councils from 2018 to 2026.",
      },
      { time: "10:45–11:15", text: "Networking coffee break", kind: "break", icon: "coffee" },
      { heading: "Session 2" },
      {
        time: "11:15–12:00",
        speaker: "Jakub Piskorski",
        affiliation: "Joint Research Centre of the European Commission",
        photo: "photos/piskorski.jpg",
        website: "http://www.piskorski.waw.pl/",
        title: "Multilingual Corpora of Persuasion Techniques in News and Parliamentary Debates",
        bio: "Jakub Piskorski works on information extraction and media analysis, including disinformation and propaganda detection, persuasion techniques, framing and narrative extraction. He has worked at the Joint Research Centre of the European Commission in Ispra, Frontex and the German Research Center for Artificial Intelligence (DFKI), and is affiliated with the Institute of Computer Science, Polish Academy of Sciences. He co-organised SemEval 2025 Task 10 on narratives in online news.",
        abstract: "This talk provides an overview of recently developed multilingual corpora with text span-level annotation of persuasion techniques in online news, parliamentary debates, and other types of texts. The talk will elaborate on the corpora characteristics, taxonomies, creation process, and annotation complexity aspects. The talk will also reflect on the experience gained from shared tasks revolving around detection and classification of persuasion techniques which exploit these corpora, and covers state-of-the-art performance and cross-corpora comparison.",
      },
      {
        time: "12:00–12:45",
        speaker: "Arkadiusz Modzelewski",
        affiliation: "University of Padua / NASK",
        photo: "photos/modzelewski.jpg",
        website: "https://amodzelewski.com/",
        title: "Leveraging Persuasion and Intent for Analysis and Reasoning-based Detection of Disinformation with Large Language Models",
        bio: "Arkadiusz Modzelewski is a PhD candidate under a joint (cotutelle) agreement between the University of Padua and the Polish-Japanese Academy of Information Technology, and a Senior NLP Specialist at NASK National Research Institute in Warsaw. His research uses large language models to detect disinformation, manipulation and persuasion techniques in text. He co-organised the SlavicNLP 2025 shared task on persuasion techniques in parliamentary debates and social media.",
        abstract: "This talk introduces novel human-annotated disinformation datasets that enable the analysis of manipulation techniques and malicious intent in Polish and English. It presents reasoning approaches that explicitly incorporate persuasion and intent to improve LLM-based disinformation detection across domains, genres, and languages. Finally, it introduces a multilingual benchmark of human- and AI-generated persuasive content, showing that AI-generated persuasive text exhibits linguistic differences and poses new challenges for detection. Overall, the talk presents new datasets, reasoning frameworks, and empirical insights toward more transparent and generalizable disinformation detection in the era of generative AI.",
      },
      { time: "12:45–13:30", text: "Networking lunch in the conference area", kind: "break", icon: "lunch" },
      { heading: "Session 3" },
      {
        time: "13:30–14:15",
        speaker: "Philipp Mayr-Schlegel",
        affiliation: "GESIS – Leibniz Institute for the Social Sciences",
        photo: "photos/mayr-schlegel.jpg",
        website: "https://philippmayr.github.io/",
        title: "",
        bio: "Philipp Mayr-Schlegel is team leader for Information and Data Retrieval in the Knowledge Technologies for the Social Sciences department at GESIS – Leibniz Institute for the Social Sciences. He received his PhD from Humboldt University Berlin in 2009. His research covers interactive information retrieval, scholarly recommendation systems, bibliometric methods and digital libraries. He was General Chair of the European Conference on Information Retrieval (ECIR) in 2019.",
        abstract: "",
      },
      {
        time: "14:15–15:00",
        speaker: "Kamil Orzechowski",
        affiliation: "Warsaw University of Technology",
        photo: "photos/orzechowski.jpg",
        website: "https://www.fizyka.pw.edu.pl/Rekrutacja/Poznaj-absolwentow/Kamil-Orzechowski",
        title: "ParlSent-EU: Three Decades of Interpersonal Sentiment in European Parliamentary Debates Since the 1990s",
        bio: "Kamil P. Orzechowski is a researcher at the Faculty of Physics, Warsaw University of Technology, where he pursued doctoral research in the university's Doctoral School. His work develops collective artificial intelligence methods and applies them to the statistical physics of complex networks. He is first author of a 2025 Scientific Reports paper showing that machine learning ensembles, like human crowds, can under some conditions lose accuracy as they grow.",
        abstract: "Parliamentary corpora offer rich speech texts and speaker metadata but rarely capture interpersonal sentiment between legislators. Research on legislative relationships relies mainly on roll-call votes and co-sponsorship, reflecting behavioural alignment rather than expressed attitudes such as approval, criticism, or hostility. We introduce ParlSent-EU, a cross-national dataset of directed interpersonal sentiment relations from plenary speeches in the Polish Sejm, German Bundestag, and French Assemblée nationale, spanning over three decades from the 1990s. It was developed by Warsaw University of Technology (OMINO project) and GESIS – Leibniz Institute for the Social Sciences (POLLUX project). Each relation records a speaker, a targeted legislator, and the expressed sentiment (positive, neutral, or negative), with temporal, parliamentary, and demographic metadata, enabling the reconstruction of directed, signed, and temporal networks. Relations are identified by a pipeline combining lexical filtering, LLM-based sentiment extraction, and rule-based entity disambiguation, validated against manually annotated gold standards with performance metrics and inter-annotator agreement. ParlSent-EU enables comparative, longitudinal studies of elite affective polarization, cross-party hostility, intra-party cohesion, and gendered political communication in European parliamentary democracies.",
      },
      { time: "15:00–15:30", text: "Networking coffee break", kind: "break", icon: "coffee" },
      { heading: "Session 4" },
      {
        time: "15:30–16:15",
        speaker: "Tiziano Labruna",
        affiliation: "Fondazione Bruno Kessler",
        photo: "photos/labruna.jpg",
        website: "https://nlplab.fbk.eu/people/tiziano-labruna",
        title: "From Detecting Persuasion to Predicting Its Success: Persuasion Strategies as Predictive Signals",
        bio: "Tiziano Labruna is a researcher in the NLP research group at Fondazione Bruno Kessler (FBK). He holds degrees in Digital Humanities from the University of Pisa and did his doctoral work on data-driven conversational agents in a joint FBK and Free University of Bozen-Bolzano programme. At the University of Padua he has used large language models to study persuasion strategies, disinformation and gender stereotypes in text.",
        abstract: "Computational work on persuasion has largely focused on detecting rhetorical techniques in text. This talk would ask a complementary question: do those techniques tell us anything about whether an argument actually changes someone's mind? Multi-Strategy Persuasion Scoring (https://aclanthology.org/2026.findings-eacl.97/) is a zero-shot framework in which a large language model reasons about each of six persuasion strategies independently and produces a per-strategy score, which can then be aggregated directly or used as input to a lightweight classifier. The strategy has been tested across three datasets, proving that strategy-guided reasoning consistently outperforms both direct pairwise comparison and generic chain-of-thought baselines.",
      },
      {
        time: "16:15–17:00",
        speaker: "Giovanni Da San Martino",
        affiliation: "University of Padua",
        photo: "photos/da-san-martino.jpg",
        website: "https://www.math.unipd.it/~dasan/",
        title: "",
        bio: "Giovanni Da San Martino is an associate professor at the Department of Mathematics \"Tullio Levi-Civita\", University of Padua, and a member of its NLP group. His research spans natural language processing and machine learning, with a focus on the rhetorical devices that drive persuasion and manipulation, applied to disinformation and propaganda detection. He chaired the SemEval workshops in 2023 and 2024 and has organised several SemEval shared tasks.",
        abstract: "",
      },
    ],
  },
  {
    id: "day2",
    date: "2026-11-30",
    dateLabel: "Monday, 30 November 2026",
    title: "AI without Borders",
    subtitle: "",
    schedule: [
      { heading: "Registration and welcome" },
      { time: "8:30–9:00", text: "Participant registration" },
      { time: "9:00–9:15", text: "Opening of the conference and welcome by the representatives of the Institute of Computer Science and the International Cooperation Department of the Polish Academy of Sciences" },
      { heading: "Session 1" },
      {
        time: "9:15–10:00",
        speaker: "Agata Savary",
        affiliation: "Paris-Saclay University",
        photo: "photos/savary.jpg",
        website: "https://perso.lisn.upsaclay.fr/savary/",
        title: "Universalist modelling and processing of idiomaticity in the PARSEME and UniDive framework – recent developments and the state of Polish",
        bio: "Agata Savary is a professor of computer science at Paris-Saclay University and a researcher in the Semantics and Information Extraction (SEME) team of the LISN laboratory. Her research centres on multiword expressions, multilingual annotated corpora and linguistic diversity in natural language processing. She chaired the PARSEME COST action and now chairs the UniDive COST action. In 2009–2010 she was a visiting professor at IPI PAN, Polish Academy of Sciences.",
        abstract: "Multiword expressions (MWEs), like \"biały kruk\" (lit. a white crow, 'a rare person or thing') or \"krew kogoś zalewa\" (lit. blood floods someone, 'someone get furious'), \"być komuś na rękę\" (lit. to be on hand to someone, 'to be convenient'), or \"wchodzić w grę\" (lit. to enter the play, 'to come into play'), are combinations of words which exhibit idiosyncratic behavior on the lexical, morphological, syntactic, and semantic levels. Their most outstanding feature is their semantic non-compositionality, i.e. the fact that their meaning cannot be straightforwardly deduced from the meanings of their components.\n\nMWEs pose severe challenges in semantically-oriented NLP tasks. For instance paraphrasing sentences containing idioms is hindered by their lexical and morpho-syntactic inflexibility. Thus, when applying usual paraphrasing techniques to \"krew kogoś zalewa\", we often obtain incorrect paraphrases, in which the idiomatic meaning is lost, e.g. \"ktoś jest zalany krwią\" (someone is flooded with blood) or \"krew kogoś oblewa\" (lit. blood poured onto someone). One of the ways to tackle this challenge is to identify MWEs in running text and apply dedicated treatment to them.\n\nMWE identification has been the object of many efforts, and is one of the tasks where supervised encoder-based methods still outperform more recent generative LLMs. Paraphrasing of MWEs is an understudied task, especially in multilingual contexts. These two tasks have been the subject of longstanding effort within two European COST networks: PARSEME (2013–2017) (https://www.cost.eu/actions/IC1207/) and UniDive (2022–2026) (https://www.cost.eu/actions/CA21167/), which are notably the organizers of 5 multilingual evaluation campaigns on these topics. I will summarize major challenges and findings from these campaigns and highlight future work.",
      },
      {
        time: "10:00–10:45",
        speaker: "Marzena Karpińska",
        affiliation: "Simon Fraser University",
        photo: "photos/karpinska.jpg",
        website: "https://marzenakrp.github.io/",
        title: "Detecting AI generated content on surface- and idea-level",
        bio: "Marzena Karpińska is an assistant professor at Simon Fraser University in Vancouver, Canada. Her research covers the detection of AI-generated and AI-translated text, multilingual NLP, machine translation of creative texts, and long-form text processing. Before joining SFU in 2026, she was a senior researcher at Microsoft and a postdoctoral researcher at the University of Massachusetts Amherst. She holds a PhD from the University of Tokyo.",
        abstract: "Modern detectors identify only who wrote the words. However, AI-assisted writing is becoming more common. For instance, a user may use AI tools to polish their writing or produce the text from their supplied content. Hence, it is becoming important to detect who contributed the ideas not only the prose. In this talk, I will first discuss the specificities of AI writing at the prose and content levels. Then I will talk about training Idealens, an AI detector that works based on document content, rather than its prose.",
      },
      { time: "10:45–11:15", text: "Networking coffee break", kind: "break", icon: "coffee" },
      { heading: "Session 2" },
      {
        time: "11:15–12:00",
        speaker: "Jakub Szymanik",
        affiliation: "University of Trento",
        photo: "photos/szymanik.jpg",
        website: "https://jakubszymanik.com/",
        title: "Can Neural Network Models Learn Logic?",
        bio: "Jakub Szymanik is an associate professor in the Department of Psychology and Cognitive Science at the University of Trento, where he leads the Computation, Language, and Thought Lab. His lab studies how human and artificial minds represent meaning, learn concepts and reason about the world. He was previously an associate professor at the University of Amsterdam (2013–2022), and his research has been supported by an ERC Starting Grant.",
        abstract: "Large language models now produce chains of reasoning that look like proofs, but it remains unclear whether they have acquired the rules of inference or merely the patterns that usually accompany them. I will describe a line of joint work with Manuel Vargas Guzmán and Maciej Malicki that tries to make this question precise enough to answer. We use syllogistic logic — a small, fully controlled fragment of natural language — as a testbed, and ask models not whether a conclusion holds but which premises are needed to derive it. This lets us separate two things usually conflated under \"compositional generalization\": extending a learned pattern to longer chains of reasoning, and recovering the underlying rules from complex cases to apply them to simpler ones. Models turn out to be markedly better at the first than the second, and their success depends systematically on the shape of the inference rather than its difficulty. I will end with two more encouraging results — that training on examples of the task itself substantially helps smaller models, and that even imperfect neural reasoners make effective assistants to a symbolic prover — and with what all this suggests about what \"learning logic\" could mean for a system that learns from data.",
      },
      {
        time: "12:00–12:45",
        speaker: "Mateusz Lango",
        affiliation: "Charles University in Prague",
        photo: "photos/lango.jpg",
        website: "https://www.cs.put.poznan.pl/mlango/",
        title: "Faithful Explanations in the Age of Large Language Models",
        bio: "Mateusz Lango is a postdoctoral researcher at the Institute of Formal and Applied Linguistics, Faculty of Mathematics and Physics, Charles University in Prague, where he works on the ERC-funded Next-Generation Natural Language Generation (NG-NLG) project. His research interests include explainable AI and machine learning, accurate and controllable natural language generation, and explainable sentiment analysis. He received the Best Non-publicized Paper Award at EACL 2024.",
        abstract: "The fluency of modern large language models may lead to a perception that natural language generation is close to solved, yet a closer look reveals a recurring pattern of failure whenever a task requires exact, discrete fidelity to some underlying structure rather than fluent pattern completion. Reasoning that is straightforward in a single turn becomes surprisingly brittle across a dialogue; generation under explicit lexical or content constraints remains difficult to guarantee; and explanations produced by LLM-as-judge systems are frequently unfaithful to the actual decision process they claim to justify. I will argue that these three failures share a common shape: each is a case where an LLM must maintain or produce something exact and discrete, but is instead relying on an implicit, continuous representation not well suited to that job. This talk focuses on the third case - faithful explanation - and asks what happens when we make the intermediate representation explicit and symbolic, rather than leaving it to the model to reconstruct implicitly. I will present two lines of work built on this idea. The first constructs faithful explanations for image classifiers via a pipeline that separates the extraction of the (symbolic, verifiable) evidence behind a decision from its realization into fluent natural language, so that plausibility and faithfulness can be optimized somewhat independently. The second uses LLMs not to generate text directly, but to author interpretable, rule-based generation systems from scratch, producing data-to-text generators that are faithful and inspectable by construction rather than by post-hoc checking. Together, these case studies suggest a general recipe for faithful explanation: let neural models handle fluency and search, and let symbolic structure carry the guarantees.",
      },
      { time: "12:45–13:30", text: "Networking lunch in the conference area", kind: "break", icon: "lunch" },
      { heading: "Session 3" },
      {
        time: "13:30–14:15",
        speaker: "Adam Jatowt",
        affiliation: "University of Innsbruck",
        photo: "photos/jatowt.jpg",
        website: "https://ds-informatik.uibk.ac.at/doku.php?id=homepageadam",
        title: "Answering Questions and Temporal Reasoning in Large Language Models",
        bio: "Adam Jatowt is Professor of Computer Science and Head of the Data Science Group at the University of Innsbruck, where he is deputy head of the Digital Science Center. His research covers natural language processing, information retrieval and large language models, with a focus on temporal aspects of information. He spent 14 years at Kyoto University and received the Friedrich Wilhelm Bessel Research Award from the Humboldt Foundation.",
        abstract: "Time is central to how we understand the world. It shapes how we interpret events, construct narratives, and reason about change, causality, and evidence. In this talk, I will first examine how well large language models handle temporal information and temporal reasoning, an essential but still less explored dimension of language intelligence. I will then discuss recent advances in incorporating temporal awareness into language technologies, including time-aware representation learning, retrieval from evolving document collections, and the development of new resources for training and evaluation. I will also introduce temporal reasoning-oriented question answering and retrieval benchmarks that highlight the challenges of retrieving time-sensitive information, answering complex temporal questions, and reasoning over changing evidence. The talk will conclude with open challenges for building language technologies that can better understand, retrieve, and reason over information across time.",
      },
      {
        time: "14:15–15:00",
        speaker: "Michał Ptaszyński",
        affiliation: "Kitami Institute of Technology",
        photo: "photos/ptaszynski.jpg",
        website: "https://ptaszynski.github.io/",
        title: "In Search for Universal Language Similarity Metric with Application in Multilingual AI",
        bio: "Michał Ptaszyński is Professor at the Faculty of Engineering, Kitami Institute of Technology, Japan, where he has worked since 2012. He received his PhD in Information Science from Hokkaido University. His research covers affect and sentiment analysis, automatic cyberbullying detection, and language technology for low-resource languages such as Ainu. His projects include ML-Ask, an affect analysis tool for Japanese, and YACIS, a large corpus of Japanese blogs.",
        abstract: "How similar must two languages be for an AI model trained on one to work on the other, and can we know before training? Multilingual AI models are usually trained on a few high-resource languages and then applied to many others. This lecture presents qWALS, an open-source metric of structural distance between more than 2,600 languages, built on nearly 200 features from the World Atlas of Language Structures (WALS), including word order, morphology, phonology, negation and grammatical gender. Unlike vector-based measures, every qWALS feature can be inspected and re-weighted for a given task.\n\nI show that cross-lingual transfer works better the more similar the source and target languages are. Once the features relevant to a task are selected, qWALS predicts transfer performance in syntactic parsing almost perfectly (up to r = −0.99). For Polish, a model trained on other Slavic languages clearly outperforms one trained on English. To additionally validate qWALS, three professional linguists judged 769 language-pair similarity questions, and their answers agreed with qWALS at least as closely as with each other.\n\nFinally, I discuss what this means for multilingual models and LLMs, namely, choosing source languages for transfer, estimating performance before training, and deciding which languages to include in training data. This matters most for low-resource and endangered languages, where data is scarce and the choice of source language matters most.",
      },
      { time: "15:00–15:30", text: "Networking coffee break", kind: "break", icon: "coffee" },
      { heading: "Session 4" },
      {
        time: "15:30–16:15",
        speaker: "Agnieszka Faleńska",
        affiliation: "University of Stuttgart",
        photo: "photos/falenska.jpg",
        website: "https://www.ims.uni-stuttgart.de/institut/team/Falenska/",
        title: "AI Argues Differently: Distinctive Persuasive Patterns and Communicative Strategies of LLMs",
        bio: "Agnieszka Faleńska is a tenured lecturer (Akademische Rätin) at the Institute for Natural Language Processing, University of Stuttgart, where she leads the independent research group Diversity-Aware NLP Intelligent Systems (DANIS). Her group works to make NLP tools inclusive and fair for users who communicate in different ways. She co-leads APHIC, a project on authority presuppositions in human-AI communication, and completed her PhD at Stuttgart in 2020.",
        abstract: "Large language models are becoming remarkably good at producing language that sounds convincing, respectful, and socially appropriate. But does this mean they are becoming better communicators?\n\nIn this talk, I explore this question through a series of studies examining how language models differ from human writers, construct persuasive arguments, and adapt to their conversational partners. We will see that AI-generated language exhibits distinctive linguistic patterns, while often appearing more agreeable and persuasive than human writing. Beyond the quality of their arguments, models also reproduce subtle communicative strategies, such as expressing trust, acknowledging different perspectives, and establishing common ground. Yet the very linguistic choices that make communication seem natural and engaging can also carry unintended social meanings, signalling familiarity, hierarchy, or social expectations that may be inappropriate in a given context.\n\nTogether, these findings highlight a fundamental challenge for human–AI interaction: producing human-like language is not the same as navigating its social meaning. Understanding AI communication requires looking beyond fluency and correctness to the social functions of language and how people interpret them.",
      },
      {
        time: "16:15–17:00",
        speaker: "Karolina Stańczak",
        affiliation: "ETH Zurich",
        photo: "photos/stanczak.jpg",
        website: "https://karstanczak.github.io/",
        title: "Safety Vulnerabilities in Spoken Language Models and Web Agents",
        bio: "Karolina Stańczak is a Postdoctoral Fellow at the ETH AI Center, ETH Zurich. Her research focuses on AI safety, cultural alignment and the interpretability of large language models. She was previously a postdoctoral researcher at Mila and McGill University. She received her PhD from the University of Copenhagen, where her thesis on gender bias in language models won the Faculty of Science PhD Award.",
        abstract: "LLM-based AI systems are rapidly expanding beyond single-modality text generation. Spoken language models combine speech and text to enable natural voice-based interaction, while web agents now act autonomously on real websites, completing complex tasks on a user's behalf. Both introduce new attack opportunities that existing safety evaluations were not designed to capture. This presentation will explore these two topics. First, I will present JAMA (Joint Audio-text Multimodal Attack), which shows that jailbreaking spoken language models by perturbing a single modality is insufficient. Jointly optimizing adversarial perturbations across both text and audio increases jailbreak success by up to 20x over unimodal attacks, while a sequential approximation keeps this attack computationally efficient. Second, I will introduce SafeArena, the first benchmark designed to evaluate the deliberate misuse of web agents across categories such as misinformation, illegal activity, and cybercrime. Our Agent Risk Assessment framework reveals that leading agents, including GPT-4o and Claude-3.5 Sonnet, complete an alarming number of harmful tasks. I will conclude this talk by discussing why safety evaluation must keep pace with how LLM-based systems are deployed, accounting for both their expanding modalities and growing agentic capabilities.",
      },
    ],
  },
];
