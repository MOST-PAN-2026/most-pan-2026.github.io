// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the website.
//
//  - registrationUrl: paste the Google/Microsoft Form link here.
//  - photo: put an image in /photos (e.g. photos/erjavec.jpg). If the file is
//    missing, the site shows the speaker's initials instead.
//  - website: speaker's homepage; photo and name link to it.
//  - bio: 2–4 sentences. Leave "" to hide the bio toggle.
//  - time: e.g. "10:15". Leave "" to show "Time TBA".
// ---------------------------------------------------------------------------

window.SITE = {
  title: "AI without Borders",
  subtitle: "Mini-conference of the NLP Seminar, Institute of Computer Science, Polish Academy of Sciences, supported by MOST PAN",
  registrationUrl: "", // e.g. "https://forms.gle/XXXXXXXX"
  registrationDeadline: "", // e.g. "20 November 2026"
  onlineUrl: "http://zil.ipipan.waw.pl/seminarium-online",
  seminarUrl: "https://zil.ipipan.waw.pl/seminar",
  youtubeUrl: "https://www.youtube.com/ipipan",
  contactEmail: "", // e.g. "seminar@ipipan.waw.pl"
  venue: "Online (MS Teams) — venue details TBA",
};

window.EVENTS = [
  {
    id: "borders",
    date: "2026-11-30",
    dateLabel: "Monday, 30 November 2026",
    title: "AI without Borders",
    subtitle: "",
    talks: [
      {
        time: "",
        speaker: "Agata Savary",
        affiliation: "Paris-Saclay University",
        photo: "photos/savary.jpg",
        website: "https://perso.lisn.upsaclay.fr/savary/",
        bio: "",
        title: "Universalist modelling and processing of idiomaticity in the PARSEME and UniDive framework – recent developments and the state of Polish",
        abstract: "Multiword expressions (MWEs), like \"biały kruk\" (lit. a white crow, 'a rare person or thing') or \"krew kogoś zalewa\" (lit. blood floods someone, 'someone get furious'), \"być komuś na rękę\" (lit. to be on hand to someone, 'to be convenient'), or \"wchodzić w grę\" (lit. to enter the play, 'to come into play'), are combinations of words which exhibit idiosyncratic behavior on the lexical, morphological, syntactic, and semantic levels. Their most outstanding feature is their semantic non-compositionality, i.e. the fact that their meaning cannot be straightforwardly deduced from the meanings of their components.\n\nMWEs pose severe challenges in semantically-oriented NLP tasks. For instance paraphrasing sentences containing idioms is hindered by their lexical and morpho-syntactic inflexibility. Thus, when applying usual paraphrasing techniques to \"krew kogoś zalewa\", we often obtain incorrect paraphrases, in which the idiomatic meaning is lost, e.g. \"ktoś jest zalany krwią\" (someone is flooded with blood) or \"krew kogoś oblewa\" (lit. blood poured onto someone). One of the ways to tackle this challenge is to identify MWEs in running text and apply dedicated treatment to them.\n\nMWE identification has been the object of many efforts, and is one of the tasks where supervised encoder-based methods still outperform more recent generative LLMs. Paraphrasing of MWEs is an understudied task, especially in multilingual contexts. These two tasks have been the subject of longstanding effort within two European COST networks: PARSEME (2013–2017) (https://www.cost.eu/actions/IC1207/) and UniDive (2022–2026) (https://www.cost.eu/actions/CA21167/), which are notably the organizers of 5 multilingual evaluation campaigns on these topics. I will summarize major challenges and findings from these campaigns and highlight future work.",
      },
      {
        time: "",
        speaker: "Marzena Karpińska",
        affiliation: "Simon Fraser University",
        photo: "photos/karpinska.jpg",
        website: "https://marzenakrp.github.io/",
        bio: "",
        title: "Detecting AI generated content on surface- and idea-level",
        abstract: "Modern detectors identify only who wrote the words. However, AI-assisted writing is becoming more common. For instance, a user may use AI tools to polish their writing or produce the text from their supplied content. Hence, it is becoming important to detect who contributed the ideas not only the prose. In this talk, I will first discuss the specificities of AI writing at the prose and content levels. Then I will talk about training Idealens, an AI detector that works based on document content, rather than its prose.",
      },
      {
        time: "",
        speaker: "Jakub Szymanik",
        affiliation: "University of Trento",
        photo: "photos/szymanik.jpg",
        website: "https://jakubszymanik.com/",
        bio: "",
        title: "Can Neural Network Models Learn Logic?",
        abstract: "Large language models now produce chains of reasoning that look like proofs, but it remains unclear whether they have acquired the rules of inference or merely the patterns that usually accompany them. I will describe a line of joint work with Manuel Vargas Guzmán and Maciej Malicki that tries to make this question precise enough to answer. We use syllogistic logic — a small, fully controlled fragment of natural language — as a testbed, and ask models not whether a conclusion holds but which premises are needed to derive it. This lets us separate two things usually conflated under \"compositional generalization\": extending a learned pattern to longer chains of reasoning, and recovering the underlying rules from complex cases to apply them to simpler ones. Models turn out to be markedly better at the first than the second, and their success depends systematically on the shape of the inference rather than its difficulty. I will end with two more encouraging results — that training on examples of the task itself substantially helps smaller models, and that even imperfect neural reasoners make effective assistants to a symbolic prover — and with what all this suggests about what \"learning logic\" could mean for a system that learns from data.",
      },
      {
        time: "",
        speaker: "Mateusz Lango",
        affiliation: "Charles University in Prague",
        photo: "photos/lango.jpg",
        website: "https://www.cs.put.poznan.pl/mlango/",
        bio: "",
        title: "Faithful Explanations in the Age of Large Language Models",
        abstract: "The fluency of modern large language models may lead to a perception that natural language generation is close to solved, yet a closer look reveals a recurring pattern of failure whenever a task requires exact, discrete fidelity to some underlying structure rather than fluent pattern completion. Reasoning that is straightforward in a single turn becomes surprisingly brittle across a dialogue; generation under explicit lexical or content constraints remains difficult to guarantee; and explanations produced by LLM-as-judge systems are frequently unfaithful to the actual decision process they claim to justify. I will argue that these three failures share a common shape: each is a case where an LLM must maintain or produce something exact and discrete, but is instead relying on an implicit, continuous representation not well suited to that job. This talk focuses on the third case - faithful explanation - and asks what happens when we make the intermediate representation explicit and symbolic, rather than leaving it to the model to reconstruct implicitly. I will present two lines of work built on this idea. The first constructs faithful explanations for image classifiers via a pipeline that separates the extraction of the (symbolic, verifiable) evidence behind a decision from its realization into fluent natural language, so that plausibility and faithfulness can be optimized somewhat independently. The second uses LLMs not to generate text directly, but to author interpretable, rule-based generation systems from scratch, producing data-to-text generators that are faithful and inspectable by construction rather than by post-hoc checking. Together, these case studies suggest a general recipe for faithful explanation: let neural models handle fluency and search, and let symbolic structure carry the guarantees.",
      },
      {
        time: "",
        speaker: "Adam Jatowt",
        affiliation: "University of Innsbruck",
        photo: "photos/jatowt.jpg",
        website: "https://ds-informatik.uibk.ac.at/doku.php?id=homepageadam",
        bio: "",
        title: "Towards Temporal Intelligence in Language Technologies: Modeling, Retrieval, and Reasoning",
        abstract: "Time is central to how we understand the world. It shapes how we interpret events, construct narratives, and reason about change, causality, and evidence. In this talk, I will first examine how well large language models handle temporal information and temporal reasoning, an essential but still less explored dimension of language intelligence. I will then discuss recent advances in incorporating temporal awareness into language technologies, including time-aware representation learning, retrieval from evolving document collections, and the development of new resources for training and evaluation. I will also introduce temporal reasoning-oriented question answering and retrieval benchmarks that highlight the challenges of retrieving time-sensitive information, answering complex temporal questions, and reasoning over changing evidence. The talk will conclude with open challenges for building language technologies that can better understand, retrieve, and reason over information across time.",
      },
      {
        time: "",
        speaker: "Michał Ptaszyński",
        affiliation: "Kitami Institute of Technology",
        photo: "photos/ptaszynski.jpg",
        website: "https://ptaszynski.github.io/",
        bio: "",
        title: "In Search for Universal Language Similarity Metric with Application in Multilingual AI",
        abstract: "How similar must two languages be for an AI model trained on one to work on the other, and can we know before training? Multilingual AI models are usually trained on a few high-resource languages and then applied to many others. This lecture presents qWALS, an open-source metric of structural distance between more than 2,600 languages, built on nearly 200 features from the World Atlas of Language Structures (WALS), including word order, morphology, phonology, negation and grammatical gender. Unlike vector-based measures, every qWALS feature can be inspected and re-weighted for a given task.\n\nI show that cross-lingual transfer works better the more similar the source and target languages are. Once the features relevant to a task are selected, qWALS predicts transfer performance in syntactic parsing almost perfectly (up to r = −0.99). For Polish, a model trained on other Slavic languages clearly outperforms one trained on English. To additionally validate qWALS, three professional linguists judged 769 language-pair similarity questions, and their answers agreed with qWALS at least as closely as with each other.\n\nFinally, I discuss what this means for multilingual models and LLMs, namely, choosing source languages for transfer, estimating performance before training, and deciding which languages to include in training data. This matters most for low-resource and endangered languages, where data is scarce and the choice of source language matters most.",
      },
      {
        time: "",
        speaker: "Agnieszka Faleńska",
        affiliation: "University of Stuttgart",
        photo: "photos/falenska.jpg",
        website: "https://www.ims.uni-stuttgart.de/institut/team/Falenska/",
        bio: "",
        title: "AI Argues Differently: Distinctive Persuasive Patterns and Communicative Strategies of LLMs",
        abstract: "Large language models are becoming remarkably good at producing language that sounds convincing, respectful, and socially appropriate. But does this mean they are becoming better communicators?\n\nIn this talk, I explore this question through a series of studies examining how language models differ from human writers, construct persuasive arguments, and adapt to their conversational partners. We will see that AI-generated language exhibits distinctive linguistic patterns, while often appearing more agreeable and persuasive than human writing. Beyond the quality of their arguments, models also reproduce subtle communicative strategies, such as expressing trust, acknowledging different perspectives, and establishing common ground. Yet the very linguistic choices that make communication seem natural and engaging can also carry unintended social meanings, signalling familiarity, hierarchy, or social expectations that may be inappropriate in a given context.\n\nTogether, these findings highlight a fundamental challenge for human–AI interaction: producing human-like language is not the same as navigating its social meaning. Understanding AI communication requires looking beyond fluency and correctness to the social functions of language and how people interpret them.",
      },
      {
        time: "",
        speaker: "Karolina Stańczak",
        affiliation: "ETH Zurich",
        photo: "photos/stanczak.jpg",
        website: "https://karstanczak.github.io/",
        bio: "",
        title: "Safety Vulnerabilities in Spoken Language Models and Web Agents",
        abstract: "LLM-based AI systems are rapidly expanding beyond single-modality text generation. Spoken language models combine speech and text to enable natural voice-based interaction, while web agents now act autonomously on real websites, completing complex tasks on a user's behalf. Both introduce new attack opportunities that existing safety evaluations were not designed to capture. This presentation will explore these two topics. First, I will present JAMA (Joint Audio-text Multimodal Attack), which shows that jailbreaking spoken language models by perturbing a single modality is insufficient. Jointly optimizing adversarial perturbations across both text and audio increases jailbreak success by up to 20x over unimodal attacks, while a sequential approximation keeps this attack computationally efficient. Second, I will introduce SafeArena, the first benchmark designed to evaluate the deliberate misuse of web agents across categories such as misinformation, illegal activity, and cybercrime. Our Agent Risk Assessment framework reveals that leading agents, including GPT-4o and Claude-3.5 Sonnet, complete an alarming number of harmful tasks. I will conclude this talk by discussing why safety evaluation must keep pace with how LLM-based systems are deployed, accounting for both their expanding modalities and growing agentic capabilities.",
      },
    ],
  },
];
