// The single source for the 2027 Data and Engineering Delivery Plan. Every page reads this file and
// nothing else: initiatives carry their own tier, area, risk, build window, approval and leads; the
// schedule, the weekly updates and the team updates carry their own history. Edit here, not in the
// pages — the Data view renders this object so it can be read and copied whole.
//
// Initiative keys stay EP-nn (Jira and the weekly reports write them that way) and render as IN-nn.
window.QS_PLAN = {
  "meta": {
    "title": "2027 Data and Engineering Delivery Plan",
    "months": [
      "Sep 26",
      "Oct 26",
      "Nov 26",
      "Dec 26",
      "Jan 27",
      "Feb 27",
      "Mar 27",
      "Apr 27",
      "May 27",
      "Jun 27",
      "Jul 27",
      "Aug 27",
      "Sep 27",
      "Oct 27",
      "Nov 27",
      "Dec 27"
    ],
    "firstMonth": "Sep 2026",
    "podWeekGbp": 5000,
    "weeksPerMonth": 4,
    "note": "Initiatives read as IN-nn on screen; every key here stays EP-nn, the form Jira and the weekly reports use.",
    "effortWeekGbp": {
      "small": 1000,
      "medium": 2000,
      "large": 5000
    }
  },
  "portfolios": [
    {
      "key": "Cyber & Infra",
      "label": "Cyber & Infra",
      "color": "var(--qs-lilac)"
    },
    {
      "key": "Data",
      "label": "Data",
      "color": "var(--qs-mint)"
    },
    {
      "key": "Core",
      "label": "Core",
      "color": "var(--qs-amber)"
    },
    {
      "key": "Sector Intelligence",
      "label": "Sector Intelligence",
      "color": "var(--qs-yellow)"
    },
    {
      "key": "D&E",
      "label": "D&E",
      "color": "var(--qs-orange)"
    },
    {
      "key": "University Services",
      "label": "University Services",
      "color": "var(--qs-lightblue)"
    }
  ],
  "lanes": [
    {
      "key": "CI",
      "label": "Cyber & Infra",
      "group": "Cyber & Infra"
    },
    {
      "key": "DATA",
      "label": "Data",
      "group": "Data"
    },
    {
      "key": "QSP",
      "label": "Core",
      "group": "Core"
    },
    {
      "key": "SI",
      "label": "Sector Intelligence",
      "group": "Sector Intelligence"
    },
    {
      "key": "DE",
      "label": "D&E",
      "group": "D&E"
    },
    {
      "key": "US",
      "label": "University Services",
      "group": "University Services"
    }
  ],
  "stages": [
    "Scoping",
    "Prototype",
    "Building",
    "Release planning",
    "Released"
  ],
  "owners": {
    "CL": {
      "name": "Charlie Liu",
      "bg": "var(--qs-lilac)",
      "fg": "var(--qs-ink)"
    },
    "SH": {
      "name": "Simon Hall",
      "bg": "var(--qs-750)",
      "fg": "#fff"
    },
    "NJ": {
      "name": "Nicolas Jourdain",
      "bg": "var(--qs-mint)",
      "fg": "var(--qs-ink)"
    },
    "SP": {
      "name": "Simon Pennington",
      "bg": "var(--qs-pink)",
      "fg": "var(--qs-ink)"
    },
    "GL": {
      "name": "Gwyneth Lovelace-T…",
      "bg": "var(--qs-blue)",
      "fg": "#fff"
    }
  },
  "teams": [
    {
      "id": "syd1",
      "name": "SYD1",
      "short": "SYD1",
      "portfolio": "Core"
    },
    {
      "id": "cerebrum",
      "name": "Cerebrum",
      "short": "CBRM",
      "portfolio": "Core"
    },
    {
      "id": "cyber",
      "name": "Cyber",
      "short": "Cyber",
      "portfolio": "Cyber & Infra"
    },
    {
      "id": "ciso",
      "name": "Security (CISO)",
      "short": "CISO",
      "portfolio": "Cyber & Infra"
    },
    {
      "id": "blr2",
      "name": "BLR2",
      "short": "BLR2",
      "portfolio": "Sector Intelligence"
    },
    {
      "id": "blr1",
      "name": "BLR1",
      "short": "BLR1",
      "portfolio": "Sector Intelligence"
    },
    {
      "id": "ecu1",
      "name": "ECU1",
      "short": "ECU1",
      "portfolio": "Sector Intelligence"
    },
    {
      "id": "ecu2",
      "name": "ECU2",
      "short": "ECU2",
      "portfolio": "Sector Intelligence"
    },
    {
      "id": "movein",
      "name": "MoveIN",
      "short": "MoveIN",
      "portfolio": "Sector Intelligence"
    },
    {
      "id": "events",
      "name": "Events and Drupal",
      "short": "E&D",
      "portfolio": "D&E"
    },
    {
      "id": "moveon",
      "name": "MoveON",
      "short": "MoveON",
      "portfolio": "Sector Intelligence"
    },
    {
      "id": "qsapply",
      "name": "QS Apply",
      "short": "QSA",
      "portfolio": "D&E"
    },
    {
      "id": "ubsdev",
      "name": "UBS Development",
      "short": "UBS Dev",
      "portfolio": "University Services"
    },
    {
      "id": "cx",
      "name": "CX Systems",
      "short": "CX",
      "portfolio": "University Services"
    },
    {
      "id": "data",
      "name": "Data Team",
      "short": "Data",
      "portfolio": "Data"
    },
    {
      "id": "b2b",
      "name": "B2B HubSpot",
      "short": "B2B HS",
      "portfolio": "D&E"
    },
    {
      "id": "hubspot",
      "name": "UBS HubSpot Systems",
      "short": "HubSpot",
      "portfolio": "University Services"
    },
    {
      "id": "mimo",
      "name": "MIMO",
      "short": "MIMO",
      "portfolio": "Sector Intelligence"
    },
    {
      "id": "de-infra",
      "name": "D&E infrastructure",
      "short": "D&E Infra",
      "portfolio": "D&E"
    },
    {
      "id": "ubs",
      "name": "UBS infrastructure",
      "short": "UBS Infra",
      "portfolio": "University Services"
    },
    {
      "id": "unassigned",
      "name": "Unassigned",
      "short": "Unassigned"
    },
    {
      "id": "infra-all",
      "name": "Infrastructure (earlier reports)",
      "short": "Infra",
      "portfolio": "Cyber & Infra"
    }
  ],
  "teamColumns": [
    {
      "id": "qas",
      "name": "QAS",
      "teams": [
        "syd1",
        "cerebrum"
      ]
    },
    {
      "id": "infra",
      "name": "Infra",
      "teams": [
        "de-infra",
        "mimo",
        "ubs",
        "infra-all"
      ]
    },
    {
      "id": "cyber",
      "name": "Cyber",
      "teams": [
        "cyber",
        "ciso"
      ]
    },
    {
      "id": "pods",
      "name": "Pods",
      "teams": [
        "blr1",
        "blr2",
        "ecu1",
        "ecu2",
        "movein",
        "moveon"
      ]
    },
    {
      "id": "deops",
      "name": "D&E Ops",
      "teams": [
        "events"
      ]
    },
    {
      "id": "ubsops",
      "name": "UBS Ops",
      "teams": [
        "ubsdev",
        "cx",
        "qsapply"
      ]
    },
    {
      "id": "b2bhubspot",
      "name": "B2B HubSpot",
      "teams": [
        "b2b",
        "hubspot"
      ]
    },
    {
      "id": "data",
      "name": "Data",
      "teams": [
        "data"
      ]
    },
    {
      "id": "unassigned",
      "name": "Unassigned",
      "teams": [
        "unassigned"
      ]
    }
  ],
  "products": [
    {
      "key": "MyQS",
      "group": "Core",
      "owner": "Charlie Liu",
      "stack": "QAS",
      "buildWindow": [
        1,
        3
      ],
      "readiness": {
        "data": 3,
        "design": 4,
        "engineering": 3
      },
      "stage": "Building",
      "review": "2 Oct",
      "reviewNote": "ELT",
      "leads": {
        "engineering": "Mohan Balaji",
        "data": "Andrea Scheuringer"
      },
      "description": "The single application shell QS staff and clients log into. Everything in the portfolio surfaces through it.",
      "risk": {
        "level": 3,
        "note": "Design system lands after the engine, so early screens carry rework."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Core application shell for the whole QS portfolio."
        },
        {
          "head": "Risk",
          "body": "Design system lands after engine, so early screens carry rework."
        },
        {
          "head": "Next",
          "body": "Ph2 scope lock with Charlie before the October ELT."
        }
      ]
    },
    {
      "key": "CX",
      "group": "Core",
      "owner": "Charlie Liu",
      "stack": "QAS",
      "buildWindow": [
        1,
        4
      ],
      "readiness": {
        "data": 3,
        "design": 3,
        "engineering": 2
      },
      "stage": "Prototype",
      "review": "9 Oct",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Sivagurunathan Nalini",
        "data": "Andrea Scheuringer"
      },
      "description": "Client-facing experience and admin tooling layered over MyQS. Covers account setup, entitlements and support views.",
      "risk": {
        "level": 3,
        "note": "CX Admin 2 has no named owner in the source board."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Admin and client experience layer over MyQS."
        },
        {
          "head": "Risk",
          "body": "CX Admin 2 still unowned in the source board."
        },
        {
          "head": "Next",
          "body": "Prototype walkthrough, then merge into MyQS Ph2."
        }
      ]
    },
    {
      "key": "Pulse (inc Cyber)",
      "group": "Core",
      "owner": "Ashok Arunakiri",
      "stack": "QAS",
      "buildWindow": [
        2,
        5
      ],
      "readiness": {
        "data": 2,
        "design": 2,
        "engineering": 2
      },
      "stage": "Prototype",
      "review": "16 Oct",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Ashok Arunakiri",
        "data": "TBC"
      },
      "description": "Platform health, monitoring and the cyber hardening programme. Gives one view of uptime and risk across QS systems.",
      "risk": {
        "level": 4,
        "note": "Depends on the Head of Infra hire that is not yet made."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Platform telemetry plus the cyber hardening programme."
        },
        {
          "head": "Risk",
          "body": "Depends on the Head of Infra hire."
        },
        {
          "head": "Next",
          "body": "Scope the monitoring baseline across MI, MO and Hub."
        }
      ]
    },
    {
      "key": "Cerebrum",
      "group": "Core",
      "owner": "Charlie Liu",
      "stack": "QAS",
      "buildWindow": [
        1,
        5
      ],
      "readiness": {
        "data": 3,
        "design": 2,
        "engineering": 3
      },
      "stage": "Building",
      "review": "2 Oct",
      "reviewNote": "ELT",
      "leads": {
        "engineering": "Mohan Balaji",
        "data": "Andrea Scheuringer"
      },
      "description": "The governed data layer behind every product, holding the QS ontology and the Super Graph. Apps read from it rather than from source systems.",
      "risk": {
        "level": 4,
        "note": "Every product depends on it. Ontology and governance must hold before apps build."
      },
      "notes": [
        {
          "head": "Position",
          "body": "The data layer every product reads from."
        },
        {
          "head": "Risk",
          "body": "Ontology and governance split has to hold before apps build."
        },
        {
          "head": "Next",
          "body": "Super Graph and access control sign-off."
        }
      ]
    },
    {
      "key": "AI Help",
      "group": "Core",
      "owner": "Charlie Liu",
      "stack": "QAS",
      "buildWindow": [
        3,
        6
      ],
      "readiness": {
        "data": 1,
        "design": 2,
        "engineering": 1
      },
      "stage": "Scoping",
      "review": "6 Nov",
      "reviewNote": "Review",
      "leads": {
        "engineering": "TBC",
        "data": "Andrea Scheuringer"
      },
      "description": "Assistive layer that answers questions over QS data inside MyQS. Depends entirely on Cerebrum being stable.",
      "risk": {
        "level": 2,
        "note": "Nothing reaches production until Cerebrum is stable."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Assistive layer over MyQS and the rankings data."
        },
        {
          "head": "Risk",
          "body": "Nothing in production until Cerebrum is stable."
        },
        {
          "head": "Next",
          "body": "Discovery only this half."
        }
      ]
    },
    {
      "key": "WUR",
      "group": "Sector Intelligence",
      "owner": "Simon Hall",
      "stack": "Legacy",
      "buildWindow": [
        2,
        5
      ],
      "readiness": {
        "data": 4,
        "design": 2,
        "engineering": 2
      },
      "stage": "Prototype",
      "review": "9 Oct",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Sivagurunathan Nalini",
        "data": "Ming Xu"
      },
      "description": "The World University Rankings, QS’ flagship ranking and the highest-profile data product. Feeds Top Universities and the commercial portfolio.",
      "risk": {
        "level": 3,
        "note": "Still on the legacy stack with Drupal dependencies."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Flagship ranking, highest data maturity."
        },
        {
          "head": "Risk",
          "body": "Still on the legacy stack with Drupal dependencies."
        },
        {
          "head": "Next",
          "body": "Replatform sequencing for Q3 27."
        }
      ]
    },
    {
      "key": "RR",
      "group": "Sector Intelligence",
      "owner": "Simon Hall",
      "stack": "Legacy",
      "buildWindow": [
        3,
        6
      ],
      "readiness": {
        "data": 3,
        "design": 2,
        "engineering": 1
      },
      "stage": "Scoping",
      "review": "23 Oct",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Sivagurunathan Nalini",
        "data": "Ming Xu"
      },
      "description": "Regional rankings across Asia, Latin America, Europe and the Arab region. Shares the rankings pipeline with WUR.",
      "risk": {
        "level": 4,
        "note": "Rankings knowledge sits with one contractor. Single point of failure."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Regional rankings family."
        },
        {
          "head": "Risk",
          "body": "Shares Umar’s rankings knowledge, single point of failure."
        },
        {
          "head": "Next",
          "body": "Discovery with SI before the replatform wave."
        }
      ]
    },
    {
      "key": "SR",
      "group": "Sector Intelligence",
      "owner": "Simon Hall",
      "stack": "Legacy",
      "buildWindow": [
        3,
        6
      ],
      "readiness": {
        "data": 3,
        "design": 1,
        "engineering": 1
      },
      "stage": "Scoping",
      "review": "23 Oct",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Sivagurunathan Nalini",
        "data": "Ming Xu"
      },
      "description": "Rankings by subject and broad faculty area. The widest rankings dataset by row count.",
      "risk": {
        "level": 3,
        "note": "Weakest design system readiness in the rankings set."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Subject rankings."
        },
        {
          "head": "Risk",
          "body": "Design system readiness is the weakest of the SI set."
        },
        {
          "head": "Next",
          "body": "Fold into the common rankings template."
        }
      ]
    },
    {
      "key": "AR",
      "group": "Sector Intelligence",
      "owner": "Simon Hall",
      "stack": "Legacy",
      "buildWindow": [
        4,
        7
      ],
      "readiness": {
        "data": 2,
        "design": 1,
        "engineering": 1
      },
      "stage": "Scoping",
      "review": "6 Nov",
      "reviewNote": "Review",
      "leads": {
        "engineering": "TBC",
        "data": "Ming Xu"
      },
      "description": "Asia-specific ranking with its own indicator set and submission cycle.",
      "risk": {
        "level": 2,
        "note": "Late start, dependent on the WUR replatform result."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Asia rankings."
        },
        {
          "head": "Risk",
          "body": "Late discovery start, dependent on WUR patterns."
        },
        {
          "head": "Next",
          "body": "Await the WUR replatform result."
        }
      ]
    },
    {
      "key": "ER",
      "group": "Sector Intelligence",
      "owner": "Simon Hall",
      "stack": "Legacy",
      "buildWindow": [
        4,
        7
      ],
      "readiness": {
        "data": 2,
        "design": 1,
        "engineering": 1
      },
      "stage": "Scoping",
      "review": "6 Nov",
      "reviewNote": "Review",
      "leads": {
        "engineering": "TBC",
        "data": "Ming Xu"
      },
      "description": "Europe-specific ranking built on the shared rankings template.",
      "risk": {
        "level": 2,
        "note": "Same template dependency as AR."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Europe rankings."
        },
        {
          "head": "Risk",
          "body": "Same template dependency as AR."
        },
        {
          "head": "Next",
          "body": "Await the WUR replatform result."
        }
      ]
    },
    {
      "key": "SI",
      "group": "Sector Intelligence",
      "owner": "Charlie Liu",
      "stack": "QAS",
      "buildWindow": [
        1,
        4
      ],
      "readiness": {
        "data": 3,
        "design": 3,
        "engineering": 2
      },
      "stage": "Prototype",
      "review": "2 Oct",
      "reviewNote": "ELT",
      "leads": {
        "engineering": "Mohan Balaji",
        "data": "Caitlin Brennan"
      },
      "description": "Sector intelligence products sold to institutions, including partner discovery and alumni insights. First set of rankings-adjacent products on the QAS stack.",
      "risk": {
        "level": 3,
        "note": "Analytics epics are prototype stage with no owner named."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Sector intelligence products on the QAS stack."
        },
        {
          "head": "Risk",
          "body": "Analytics epics are prototype-stage with no owner named."
        },
        {
          "head": "Next",
          "body": "Partner discovery and alumni insights to build."
        }
      ]
    },
    {
      "key": "Stars",
      "group": "Sector Intelligence",
      "owner": "Simon Hall",
      "stack": "QAS",
      "buildWindow": [
        1,
        3
      ],
      "readiness": {
        "data": 4,
        "design": 3,
        "engineering": 3
      },
      "stage": "Building",
      "review": "2 Oct",
      "reviewNote": "ELT",
      "leads": {
        "engineering": "Mohan Balaji",
        "data": "Caitlin Brennan"
      },
      "description": "The QS Stars audit and rating product. Furthest advanced of the commercial applications.",
      "risk": {
        "level": 2,
        "note": "Commercial model work sits in D&E rather than with the app team."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Furthest advanced of the commercial products."
        },
        {
          "head": "Risk",
          "body": "Commercial model work sits in D&E, not with the app team."
        },
        {
          "head": "Next",
          "body": "Beta exit in BLR1."
        }
      ]
    },
    {
      "key": "CN (1M)",
      "group": "Sector Intelligence",
      "owner": "Simon Hall",
      "stack": "QAS",
      "buildWindow": [
        1,
        4
      ],
      "readiness": {
        "data": 3,
        "design": 3,
        "engineering": 3
      },
      "stage": "Building",
      "review": "9 Oct",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Sivagurunathan Nalini",
        "data": "Caitlin Brennan"
      },
      "description": "Career navigation delivered through 1 Mentor as the master white label. Serves QS, universities and corporates from one system.",
      "risk": {
        "level": 3,
        "note": "Multilingual build running alongside the IBM rollout."
      },
      "notes": [
        {
          "head": "Position",
          "body": "1 Mentor as the career navigation white label."
        },
        {
          "head": "Risk",
          "body": "Multilingual build running alongside the IBM rollout."
        },
        {
          "head": "Next",
          "body": "Master white label pattern confirmation."
        }
      ]
    },
    {
      "key": "MI",
      "group": "Sector Intelligence",
      "owner": "Ashok Arunakiri",
      "stack": "Legacy",
      "buildWindow": [
        5,
        8
      ],
      "readiness": {
        "data": 2,
        "design": 1,
        "engineering": 2
      },
      "stage": "Scoping",
      "review": "20 Nov",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Rajashekar Reddy",
        "data": "TBC"
      },
      "description": "MoveIN infrastructure and the tooling that sits on it. Legacy estate carried by a small infra group.",
      "risk": {
        "level": 4,
        "note": "Legacy estate carried by a small infra group."
      },
      "notes": [
        {
          "head": "Position",
          "body": "MoveIN infrastructure and tooling."
        },
        {
          "head": "Risk",
          "body": "Legacy, carried by a small infra group."
        },
        {
          "head": "Next",
          "body": "Remediation plan under Infra MIMO."
        }
      ]
    },
    {
      "key": "MO",
      "group": "Sector Intelligence",
      "owner": "Ashok Arunakiri",
      "stack": "Legacy",
      "buildWindow": [
        5,
        8
      ],
      "readiness": {
        "data": 2,
        "design": 1,
        "engineering": 2
      },
      "stage": "Scoping",
      "review": "20 Nov",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Harish M R",
        "data": "TBC"
      },
      "description": "MoveON infrastructure, still hosting several production systems. Being compressed as workloads shift.",
      "risk": {
        "level": 4,
        "note": "Hardware dependency held by a single contractor."
      },
      "notes": [
        {
          "head": "Position",
          "body": "MoveON infrastructure and tooling."
        },
        {
          "head": "Risk",
          "body": "Hardware dependency held by a single contractor."
        },
        {
          "head": "Next",
          "body": "Compression plan with Ashok."
        }
      ]
    },
    {
      "key": "Rank Ad",
      "group": "Sector Intelligence",
      "owner": "Simon Hall",
      "stack": "Legacy",
      "buildWindow": [
        4,
        6
      ],
      "readiness": {
        "data": 2,
        "design": 2,
        "engineering": 1
      },
      "stage": "Scoping",
      "review": "30 Oct",
      "reviewNote": "Review",
      "leads": {
        "engineering": "TBC",
        "data": "Ming Xu"
      },
      "description": "Advertising and placement products sold against rankings traffic. Commercial model under review.",
      "risk": {
        "level": 3,
        "note": "Lowest engineering readiness in the portfolio. Retire or replatform undecided."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Advertising against rankings placement."
        },
        {
          "head": "Risk",
          "body": "Lowest engineering readiness in the set."
        },
        {
          "head": "Next",
          "body": "Decide retire or replatform."
        }
      ]
    },
    {
      "key": "Data Collection",
      "group": "Core",
      "owner": "Charlie Liu",
      "stack": "QAS",
      "buildWindow": [
        1,
        5
      ],
      "readiness": {
        "data": 3,
        "design": 2,
        "engineering": 2
      },
      "stage": "Prototype",
      "review": "9 Oct",
      "reviewNote": "ELT",
      "leads": {
        "engineering": "Mohan Balaji",
        "data": "Ming Xu"
      },
      "description": "Codex, the single intake system for rankings and evaluation submissions. Replaces the spreadsheet and form-based collection.",
      "risk": {
        "level": 3,
        "note": "Two source epics still in scoping with no owner."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Codex, covering rankings and evaluation intake."
        },
        {
          "head": "Risk",
          "body": "Two source epics still in scoping with no owner."
        },
        {
          "head": "Next",
          "body": "Unify the rankings and evaluation flows."
        }
      ]
    },
    {
      "key": "CM",
      "group": "D&E",
      "owner": "Rijesh Puthiya",
      "stack": "QAS",
      "buildWindow": [
        1,
        3
      ],
      "readiness": {
        "data": 3,
        "design": 3,
        "engineering": 3
      },
      "stage": "Building",
      "review": "2 Oct",
      "reviewNote": "ELT",
      "leads": {
        "engineering": "Rijesh Puthiya",
        "data": "Caitlin Brennan"
      },
      "description": "Career Match, the first QAS-native consumer product. Matches students to courses and careers from the skills wizard.",
      "risk": {
        "level": 4,
        "note": "Members DB, auth and SSO all run through one person."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Career Match, the first QAS-native consumer product."
        },
        {
          "head": "Risk",
          "body": "Rijesh holds members DB, auth and SSO alone."
        },
        {
          "head": "Next",
          "body": "Phase 2 build in the QAS pods."
        }
      ]
    },
    {
      "key": "TUO",
      "group": "D&E",
      "owner": "Rijesh Puthiya",
      "stack": "Legacy",
      "buildWindow": [
        2,
        4
      ],
      "readiness": {
        "data": 3,
        "design": 2,
        "engineering": 2
      },
      "stage": "Prototype",
      "review": "16 Oct",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Mohan Balaji",
        "data": "TBC"
      },
      "description": "Top Universities as it runs today on Drupal. Keeps the traffic and revenue running while the replacement is built.",
      "risk": {
        "level": 3,
        "note": "The Drupal 11 upgrade is absorbing team capacity."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Top Universities as it runs today."
        },
        {
          "head": "Risk",
          "body": "Drupal 11 upgrade is absorbing team capacity."
        },
        {
          "head": "Next",
          "body": "Performance and upgrade work only."
        }
      ]
    },
    {
      "key": "TUN",
      "group": "D&E",
      "owner": "Rijesh Puthiya",
      "stack": "QAS",
      "buildWindow": [
        2,
        6
      ],
      "readiness": {
        "data": 2,
        "design": 3,
        "engineering": 2
      },
      "stage": "Prototype",
      "review": "16 Oct",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Sivagurunathan Nalini",
        "data": "Caitlin Brennan"
      },
      "description": "The new Top Universities template that replaces members DB, authentication and events bookings. Becomes the pattern for the B2C estate.",
      "risk": {
        "level": 4,
        "note": "Roughly six months before anything reaches production."
      },
      "notes": [
        {
          "head": "Position",
          "body": "The new TU template, replacing members DB and events."
        },
        {
          "head": "Risk",
          "body": "Six months before anything reaches production."
        },
        {
          "head": "Next",
          "body": "Build in parallel with lights-on delivery."
        }
      ]
    },
    {
      "key": "Events / Outreach",
      "group": "D&E",
      "owner": "Vikram Bhatakande",
      "stack": "Legacy",
      "buildWindow": [
        3,
        7
      ],
      "readiness": {
        "data": 2,
        "design": 1,
        "engineering": 2
      },
      "stage": "Scoping",
      "review": "30 Oct",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Vishnu Vadakkumpattu",
        "data": "TBC"
      },
      "description": "Event bookings, outreach sites and the members database. Consolidating into the TU New template.",
      "risk": {
        "level": 3,
        "note": "Thin backlog and work called off on QS Gen and PSS."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Events, outreach and the members database."
        },
        {
          "head": "Risk",
          "body": "Thin backlog, work called off on QS Gen and PSS."
        },
        {
          "head": "Next",
          "body": "Fold into the TU New template."
        }
      ]
    },
    {
      "key": "USP",
      "group": "University Services",
      "owner": "Simon Pennington",
      "stack": "QAS",
      "buildWindow": [
        2,
        5
      ],
      "readiness": {
        "data": 2,
        "design": 2,
        "engineering": 2
      },
      "stage": "Prototype",
      "review": "16 Oct",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Mahesh Kumar",
        "data": "Mohd Azhar"
      },
      "description": "Aurora-based portal for university services clients. Covers student documents, scoring and counsellor feedback.",
      "risk": {
        "level": 3,
        "note": "Ownership model still to be confirmed."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Aurora-based portal for university services."
        },
        {
          "head": "Risk",
          "body": "Ownership model still to be confirmed."
        },
        {
          "head": "Next",
          "body": "Implementation release planning."
        }
      ]
    },
    {
      "key": "USA",
      "group": "University Services",
      "owner": "Simon Pennington",
      "stack": "Legacy",
      "buildWindow": [
        3,
        7
      ],
      "readiness": {
        "data": 2,
        "design": 1,
        "engineering": 1
      },
      "stage": "Scoping",
      "review": "30 Oct",
      "reviewNote": "Review",
      "leads": {
        "engineering": "Mahesh Kumar",
        "data": "Mohd Azhar"
      },
      "description": "The admin and reporting side of university services. Includes data integrity and the client data API.",
      "risk": {
        "level": 2,
        "note": "Data integrity and the client API are both mid-build."
      },
      "notes": [
        {
          "head": "Position",
          "body": "Admin and reporting side of university services."
        },
        {
          "head": "Risk",
          "body": "Data integrity and client API both mid-build."
        },
        {
          "head": "Next",
          "body": "Scope the reporting layer."
        }
      ]
    }
  ],
  "initiatives": [
    {
      "ids": [
        "EP-72"
      ],
      "name": "Codex (Data Collection System)",
      "lane": "QSP",
      "stage": 0,
      "owner": null,
      "products": [
        "Data Collection"
      ],
      "tier": 1,
      "area": {
        "letter": "P",
        "context": "rankings and evaluation intake"
      },
      "risk": {
        "level": 2,
        "note": "Collection intake still being unified."
      },
      "buildWindow": [
        4,
        9
      ],
      "approved": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "David Paterson",
        "engineering": "Simon Hall"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-21"
      ],
      "name": "QAS Data Collection – Rankings",
      "lane": "QSP",
      "stage": 0,
      "owner": null,
      "products": [
        "Data Collection"
      ],
      "tier": 2,
      "area": {
        "letter": "P",
        "context": "rankings submissions"
      },
      "buildWindow": [
        1,
        6
      ],
      "leads": {
        "product": "Leigh Kamolins",
        "data": "David Paterson",
        "engineering": "Simon Hall"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-28"
      ],
      "name": "QAS Data Collection – Evaluation",
      "lane": "QSP",
      "stage": 0,
      "owner": null,
      "products": [
        "Data Collection"
      ],
      "tier": 3,
      "area": {
        "letter": "P",
        "context": "evaluation submissions"
      },
      "leads": {
        "product": "Leigh Kamolins",
        "data": "David Paterson",
        "engineering": "Simon Hall"
      },
      "buildWindow": [
        10,
        12
      ],
      "effort": "medium"
    },
    {
      "ids": [
        "EP-91"
      ],
      "name": "Data Collection Manager",
      "lane": "QSP",
      "stage": 1,
      "owner": null,
      "products": [
        "Data Collection"
      ],
      "tier": 2,
      "area": {
        "letter": "P",
        "context": "collection operations"
      },
      "buildWindow": [
        4,
        9
      ],
      "leads": {
        "product": "Patrick Brothers",
        "data": "Ming Xu",
        "engineering": "Mohan Balaji"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-77"
      ],
      "name": "MyQS Core - Ph2",
      "lane": "QSP",
      "stage": 0,
      "owner": null,
      "products": [
        "MyQS"
      ],
      "tier": 2,
      "area": {
        "letter": "Q",
        "context": "client platform shell"
      },
      "leads": {
        "product": "Patrick Brothers",
        "data": "Charlie Liu",
        "engineering": "Charlie Liu"
      },
      "buildWindow": [
        7,
        9
      ],
      "effort": "medium"
    },
    {
      "ids": [
        "EP-78"
      ],
      "name": "MyQS Infra",
      "lane": "CI",
      "stage": 0,
      "owner": null,
      "products": [
        "MyQS"
      ],
      "tier": 2,
      "area": {
        "letter": "Q",
        "context": "platform hosting"
      },
      "risk": {
        "level": 2,
        "note": "QAS team work, not yet planned in detail."
      },
      "approved": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "Charlie Liu",
        "engineering": "Charlie Liu"
      },
      "effort": "small",
      "buildWindow": [
        1,
        6
      ]
    },
    {
      "ids": [
        "EP-79"
      ],
      "name": "QS Infra Transition",
      "lane": "CI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "estate transition"
      },
      "risk": {
        "level": 2,
        "note": "Multiple accounts to untangle; not scheduled."
      },
      "approved": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": "Jess"
      },
      "buildWindow": [
        4,
        6
      ],
      "effort": "medium"
    },
    {
      "ids": [
        "EP-84"
      ],
      "name": "MIMO Infra Remediation",
      "lane": "CI",
      "stage": 0,
      "owner": null,
      "products": [
        "MI",
        "MO"
      ],
      "tier": 2,
      "area": {
        "letter": "P",
        "context": "MoveIN and MoveON hosting"
      },
      "risk": {
        "level": 4,
        "note": "Not discussed with anyone yet."
      },
      "buildWindow": [
        1,
        15
      ],
      "approved": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": "Ashok"
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-80"
      ],
      "name": "Strengthen Cyber Security",
      "lane": "CI",
      "stage": 2,
      "owner": null,
      "products": [
        "Pulse (inc Cyber)"
      ],
      "tier": 1,
      "area": {
        "letter": "Q",
        "context": "estate-wide security posture"
      },
      "risk": {
        "level": 4,
        "note": "Broad effort with no agreed scope yet."
      },
      "buildWindow": [
        0,
        9
      ],
      "approved": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": ""
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-90"
      ],
      "name": "QAS Prowler - 365 AI Pen Testing",
      "lane": "CI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "estate-wide penetration testing"
      },
      "risk": {
        "level": 2,
        "note": "Still in ideation."
      },
      "buildWindow": [
        1,
        6
      ],
      "approved": true,
      "description": "Creation of a daily penetration test of all QAS assets and attack surfaces. Logs into Outline, AI diff.",
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": ""
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-86"
      ],
      "name": "Rankings Admin",
      "lane": "QSP",
      "stage": 0,
      "owner": "CL",
      "products": [],
      "tier": 2,
      "area": {
        "letter": "P",
        "context": "rankings administration"
      },
      "buildWindow": [
        7,
        9
      ],
      "leads": {
        "product": "Leigh Kamolins",
        "data": "David Paterson",
        "engineering": "Charlie Liu"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-87"
      ],
      "name": "MyQS CX - Ph 2",
      "lane": "QSP",
      "stage": 1,
      "owner": null,
      "products": [
        "CX"
      ],
      "tier": 1,
      "area": {
        "letter": "Q",
        "context": "client accounts and servicing"
      },
      "buildWindow": [
        4,
        6
      ],
      "leads": {
        "product": "Liron",
        "data": "Charlie Liu",
        "engineering": "Charlie Liu"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-76"
      ],
      "name": "MyQS Engine",
      "lane": "QSP",
      "stage": 2,
      "owner": null,
      "products": [
        "MyQS"
      ],
      "tier": 1,
      "area": {
        "letter": "Q",
        "context": "platform engine"
      },
      "risk": {
        "level": 1,
        "note": "SYD1 work, on track."
      },
      "buildWindow": [
        1,
        6
      ],
      "approved": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": "Charlie Liu"
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-60"
      ],
      "name": "MyQS MCP",
      "lane": "QSP",
      "stage": 2,
      "owner": "CL",
      "products": [
        "MyQS"
      ],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "AI access to QS data"
      },
      "buildWindow": [
        [
          3,
          4
        ],
        [
          6,
          7
        ],
        [
          9,
          10
        ]
      ],
      "leads": {
        "product": "Patrick Brothers",
        "data": "Charlie Liu",
        "engineering": "Charlie Liu"
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-26"
      ],
      "name": "MyQS Design System",
      "lane": "QSP",
      "stage": 2,
      "owner": "CL",
      "products": [
        "MyQS"
      ],
      "tier": 2,
      "area": {
        "letter": "Q",
        "context": "shared design system"
      },
      "risk": {
        "level": 1,
        "note": "Long-running but on track."
      },
      "buildWindow": [
        0,
        9
      ],
      "approved": true,
      "heavyMaintenance": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "Charlie Liu",
        "engineering": "Charlie Liu"
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-95"
      ],
      "name": "MyQS Staging",
      "lane": "QSP",
      "stage": 2,
      "owner": "CL",
      "products": [
        "MyQS"
      ],
      "tier": 1,
      "area": {
        "letter": "Q",
        "context": "release path to production"
      },
      "risk": {
        "level": 1,
        "note": "Almost finished."
      },
      "buildWindow": [
        13,
        14
      ],
      "approved": true,
      "description": "Staging estate and the release path onto production: shared release checks across the front ends, production feature switches and a written release and rollback procedure.",
      "leads": {
        "product": "Patrick Brothers",
        "data": "Andrea Scheuringer",
        "engineering": "Mohan Balaji"
      },
      "effort": "small"
    },
    {
      "ids": [],
      "name": "MyQS B2C",
      "lane": "QSP",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 1,
      "area": {
        "letter": "R",
        "context": "student-facing MyQS"
      },
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": "Charlie Liu"
      },
      "effort": "medium",
      "buildWindow": [
        3,
        6
      ]
    },
    {
      "ids": [
        "EP-32"
      ],
      "name": "MyQS Cerebrum",
      "lane": "QSP",
      "stage": 1,
      "owner": "NJ",
      "products": [
        "Cerebrum"
      ],
      "tier": 1,
      "area": {
        "letter": "Q",
        "context": "governed data layer and ontology"
      },
      "buildWindow": [
        [
          3,
          4
        ],
        [
          6,
          7
        ],
        [
          9,
          10
        ]
      ],
      "approved": true,
      "heavyMaintenance": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "Charlie Liu",
        "engineering": "Charlie Liu"
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-43"
      ],
      "name": "QAS Auth",
      "lane": "QSP",
      "stage": 4,
      "owner": "CL",
      "products": [],
      "tier": 1,
      "area": {
        "letter": "Q",
        "context": "platform sign-in"
      },
      "approved": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": "Charlie Liu"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-20"
      ],
      "name": "HIQ – QAS Auth Migration",
      "lane": "QSP",
      "stage": 4,
      "owner": "CL",
      "products": [],
      "tier": 1,
      "area": {
        "letter": "Q",
        "context": "HolonIQ migration onto the QS platform"
      },
      "approved": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": "Charlie Liu"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-18"
      ],
      "name": "Rankings Template",
      "lane": "SI",
      "stage": 0,
      "owner": "CL",
      "products": [],
      "tier": 1,
      "area": {
        "letter": "P",
        "context": "rankings template, the enabler"
      },
      "risk": {
        "level": 1,
        "note": "The enabler for the ranking products."
      },
      "buildWindow": [
        1,
        2
      ],
      "approved": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "Charlie Liu",
        "engineering": "Charlie Liu"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-14"
      ],
      "name": "QAS LMI Curriculum",
      "lane": "DATA",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "S",
        "context": "labour market curriculum"
      },
      "buildWindow": [
        7,
        9
      ],
      "leads": {
        "product": "Martí Serrano",
        "data": "Diego",
        "engineering": "Charlie Liu"
      },
      "effort": "large"
    },
    {
      "ids": [
        "EP-15"
      ],
      "name": "QAS Flows/ISS",
      "lane": "DATA",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "global student flows"
      },
      "buildWindow": [
        7,
        9
      ],
      "leads": {
        "product": "Susie Knight",
        "data": "David Paterson",
        "engineering": "Simon Hall"
      },
      "effort": "large"
    },
    {
      "ids": [
        "EP-50"
      ],
      "name": "QAS Sustainability",
      "lane": "SI",
      "stage": 1,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "P",
        "context": "sustainability ranking"
      },
      "risk": {
        "level": 2,
        "note": "Predicated on the Rankings Template landing."
      },
      "buildWindow": [
        10,
        12
      ],
      "approved": true,
      "leads": {
        "product": "Michael Morgan",
        "data": "David Paterson",
        "engineering": "Simon Hall"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-55"
      ],
      "name": "QAS Reputation",
      "lane": "SI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "P",
        "context": "reputation surveys"
      },
      "leads": {
        "product": "Michael Morgan",
        "data": "David Paterson",
        "engineering": "Simon Hall"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-51"
      ],
      "name": "QAS Regional Rankings",
      "lane": "SI",
      "stage": 1,
      "owner": null,
      "products": [
        "RR"
      ],
      "tier": 3,
      "area": {
        "letter": "P",
        "context": "regional rankings"
      },
      "risk": {
        "level": 2,
        "note": "Predicated on the Rankings Template landing."
      },
      "buildWindow": [
        4,
        6
      ],
      "approved": true,
      "leads": {
        "product": "Michael Morgan",
        "data": "David Paterson",
        "engineering": "Simon Hall"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-92"
      ],
      "name": "QAS Subject Rankings",
      "lane": "SI",
      "stage": 1,
      "owner": null,
      "products": [
        "SR"
      ],
      "tier": 3,
      "area": {
        "letter": "P",
        "context": "subject rankings"
      },
      "risk": {
        "level": 2,
        "note": "Predicated on the Rankings Template landing."
      },
      "buildWindow": [
        4,
        6
      ],
      "approved": true,
      "leads": {
        "product": "Michael Morgan",
        "data": "Ming Xu",
        "engineering": "Sivagurunathan Nalini"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-93"
      ],
      "name": "QAS WUR",
      "lane": "SI",
      "stage": 1,
      "owner": null,
      "products": [
        "WUR"
      ],
      "tier": 3,
      "area": {
        "letter": "P",
        "context": "world university rankings"
      },
      "risk": {
        "level": 2,
        "note": "Predicated on the Rankings Template landing."
      },
      "buildWindow": [
        4,
        6
      ],
      "approved": true,
      "leads": {
        "product": "Michael Morgan",
        "data": "Ming Xu",
        "engineering": "Sivagurunathan Nalini"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-52"
      ],
      "name": "QAS Business Schools",
      "lane": "SI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "P",
        "context": "business school rankings"
      },
      "buildWindow": [
        10,
        12
      ],
      "leads": {
        "product": "Michael Morgan",
        "data": "David Paterson",
        "engineering": "Simon Hall"
      },
      "effort": "large"
    },
    {
      "ids": [
        "EP-36"
      ],
      "name": "QAS AI Evaluation",
      "lane": "SI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "I",
        "context": "AI evaluation"
      },
      "leads": {
        "product": "Leigh Kamolins",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-41"
      ],
      "name": "QS One",
      "lane": "SI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "single QS intelligence view"
      },
      "leads": {
        "product": "Monica Hornumg Cawtan",
        "data": "",
        "engineering": "Simon Hall"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-73"
      ],
      "name": "IST Data Validation",
      "lane": "SI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "P",
        "context": "rankings data validation"
      },
      "buildWindow": [
        7,
        9
      ],
      "leads": {
        "product": "Leigh Kamolins",
        "data": "",
        "engineering": "Simon Hall"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-16"
      ],
      "name": "Partnerships New",
      "lane": "SI",
      "stage": 0,
      "owner": "SH",
      "products": [
        "SI"
      ],
      "tier": 3,
      "area": {
        "letter": "R",
        "context": "partner discovery"
      },
      "buildWindow": [
        10,
        15
      ],
      "leads": {
        "product": "Ian Lynes",
        "data": "David Paterson",
        "engineering": "Simon Hall"
      },
      "effort": "large"
    },
    {
      "ids": [
        "EP-94"
      ],
      "name": "Partner Discovery - Phase 1",
      "lane": "SI",
      "stage": 1,
      "owner": null,
      "products": [
        "SI"
      ],
      "tier": 1,
      "area": {
        "letter": "R",
        "context": "partner discovery"
      },
      "risk": {
        "level": 2,
        "note": "Dev complete, waiting on sign-off."
      },
      "buildWindow": [
        0,
        1
      ],
      "approved": true,
      "leads": {
        "product": "Ian Lynes",
        "data": "Caitlin Brennan",
        "engineering": "Mohan Balaji"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-25"
      ],
      "name": "QAS Alumni Insights",
      "lane": "SI",
      "stage": 1,
      "owner": "SH",
      "products": [
        "SI"
      ],
      "tier": 2,
      "area": {
        "letter": "S",
        "context": "alumni outcomes"
      },
      "risk": {
        "level": 2,
        "note": "Needs a handover from Charlie to Bangalore."
      },
      "approved": true,
      "leads": {
        "product": "Martí Serrano",
        "data": "Charlie Liu",
        "engineering": "Charlie Liu"
      },
      "effort": "medium",
      "buildWindow": [
        1,
        4
      ]
    },
    {
      "ids": [
        "EP-61"
      ],
      "name": "Analytics: Downloads for …",
      "lane": "SI",
      "stage": 2,
      "owner": null,
      "products": [
        "SI"
      ],
      "tier": 2,
      "area": {
        "letter": "Q",
        "context": "product analytics"
      },
      "risk": {
        "level": 2,
        "note": "In flight to the end of December."
      },
      "buildWindow": [
        1,
        3
      ],
      "approved": true,
      "leads": {
        "product": "Michael Morgan",
        "data": "Caitlin Brennan",
        "engineering": "Mohan Balaji"
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-63"
      ],
      "name": "Analytics: User Tracking …",
      "lane": "SI",
      "stage": 4,
      "owner": null,
      "products": [
        "SI"
      ],
      "tier": 2,
      "area": {
        "letter": "Q",
        "context": "product analytics"
      },
      "approved": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "Caitlin Brennan",
        "engineering": "Mohan Balaji"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-46"
      ],
      "name": "QAS Stars",
      "lane": "SI",
      "stage": 3,
      "owner": "SH",
      "products": [
        "Stars"
      ],
      "tier": 1,
      "area": {
        "letter": "P",
        "context": "Stars ratings"
      },
      "risk": {
        "level": 1,
        "note": "Shipping by the end of October."
      },
      "buildWindow": [
        1,
        1
      ],
      "approved": true,
      "leads": {
        "product": "Leigh Kamolins",
        "data": "",
        "engineering": "Simon Hall"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-19"
      ],
      "name": "1 Mentor IBM",
      "lane": "SI",
      "stage": 2,
      "owner": "SH",
      "products": [
        "CN (1M)"
      ],
      "tier": 2,
      "area": {
        "letter": "S",
        "context": "1 Mentor with IBM"
      },
      "risk": {
        "level": 2,
        "note": "Contractual piece done; scope still to settle."
      },
      "buildWindow": [
        [
          0,
          1
        ],
        [
          4,
          6
        ]
      ],
      "approved": true,
      "leads": {
        "product": "Martí Serrano",
        "data": "",
        "engineering": "Simon Hall"
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-34"
      ],
      "name": "1 Mentor Multilingual",
      "lane": "SI",
      "stage": 2,
      "owner": "SH",
      "products": [
        "CN (1M)"
      ],
      "tier": 3,
      "area": {
        "letter": "S",
        "context": "1 Mentor multilingual"
      },
      "buildWindow": [
        7,
        9
      ],
      "leads": {
        "product": "Martí Serrano",
        "data": "",
        "engineering": "Simon Hall"
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-31"
      ],
      "name": "QAS Auth – MyQS 1.0",
      "lane": "QSP",
      "stage": 4,
      "owner": "SH",
      "products": [],
      "tier": 1,
      "area": {
        "letter": "Q",
        "context": "platform sign-in"
      },
      "approved": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": "Charlie Liu"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-33"
      ],
      "name": "QAS Factfiles",
      "lane": "SI",
      "stage": 4,
      "owner": "SH",
      "products": [],
      "tier": 1,
      "area": {
        "letter": "P",
        "context": "institution factfiles"
      },
      "approved": true,
      "leads": {
        "product": "Leigh Kamolins",
        "data": "",
        "engineering": "Simon Hall"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-38"
      ],
      "name": "QAS MyQS Legacy",
      "lane": "SI",
      "stage": 4,
      "owner": "SH",
      "products": [
        "MyQS"
      ],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "legacy platform"
      },
      "approved": true,
      "leads": {
        "product": "Patrick Brothers",
        "data": "Andrea Scheuringer",
        "engineering": "Mohan Balaji"
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Student Insights",
      "lane": "SI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "S",
        "context": "student insight"
      },
      "buildWindow": [
        4,
        6
      ],
      "effort": "small",
      "leads": {
        "product": "TBC",
        "data": "",
        "engineering": ""
      }
    },
    {
      "ids": [],
      "name": "Outreach Review",
      "lane": "DE",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "R",
        "context": "events outreach"
      },
      "leads": {
        "product": "Natalie",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-64"
      ],
      "name": "Events Journey Redesign",
      "lane": "DE",
      "stage": 0,
      "owner": null,
      "products": [
        "Events / Outreach"
      ],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "recruitment events"
      },
      "leads": {
        "product": "Natalie",
        "data": "TBC",
        "engineering": "Vishnu Vadakkumpattu"
      },
      "effort": "small",
      "buildWindow": [
        1,
        9
      ]
    },
    {
      "ids": [
        "EP-65"
      ],
      "name": "University Profiles Comm…",
      "lane": "DE",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "university profiles"
      },
      "leads": {
        "product": "Natalie",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-66"
      ],
      "name": "QS Stars Commercial Model",
      "lane": "DE",
      "stage": 0,
      "owner": null,
      "products": [
        "Stars"
      ],
      "tier": 2,
      "area": {
        "letter": "P",
        "context": "Stars commercial model"
      },
      "buildWindow": null,
      "leads": {
        "product": "Natalie",
        "data": "Caitlin Brennan",
        "engineering": "Mohan Balaji"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-67"
      ],
      "name": "Applicant Journey Optimisation",
      "lane": "DE",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "applicant journey"
      },
      "risk": {
        "level": 2,
        "note": "Runs to the end of March."
      },
      "buildWindow": [
        1,
        3
      ],
      "approved": true,
      "leads": {
        "product": "Natalie",
        "data": "",
        "engineering": ""
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-68"
      ],
      "name": "TU.com Student Voice",
      "lane": "DE",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "student voice"
      },
      "leads": {
        "product": "Natalie",
        "data": "",
        "engineering": ""
      },
      "effort": "small",
      "buildWindow": [
        1,
        6
      ]
    },
    {
      "ids": [
        "EP-69"
      ],
      "name": "Programmatic SEO & AI P…",
      "lane": "DE",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "candidate acquisition"
      },
      "risk": {
        "level": 2,
        "note": "Runs to the end of March."
      },
      "buildWindow": [
        1,
        6
      ],
      "approved": true,
      "leads": {
        "product": "Natalie",
        "data": "",
        "engineering": ""
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-59"
      ],
      "name": "TU.com Cookie Compliance",
      "lane": "DE",
      "stage": 1,
      "owner": null,
      "products": [
        "TUO"
      ],
      "tier": 1,
      "area": {
        "letter": "R",
        "context": "TopUniversities compliance"
      },
      "risk": {
        "level": 2,
        "note": "Should be finishable now; running to the end of November."
      },
      "buildWindow": [
        1,
        3
      ],
      "approved": true,
      "leads": {
        "product": "Natalie",
        "data": "TBC",
        "engineering": "Mohan Balaji"
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-27"
      ],
      "name": "Appian to Hubspot Migration",
      "lane": "DE",
      "stage": 1,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "Q",
        "context": "company-wide CRM migration"
      },
      "risk": {
        "level": 2,
        "note": "Runs to the end of June."
      },
      "buildWindow": [
        1,
        9
      ],
      "approved": true,
      "leads": {
        "product": "Natalie",
        "data": "",
        "engineering": "Simon Pennington"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-70"
      ],
      "name": "TU Experiment",
      "lane": "DE",
      "stage": 1,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "TopUniversities experiments"
      },
      "leads": {
        "product": "Natalie",
        "data": "",
        "engineering": ""
      },
      "effort": "small",
      "buildWindow": [
        4,
        6
      ]
    },
    {
      "ids": [
        "EP-71"
      ],
      "name": "Career Navigation Engine",
      "lane": "DE",
      "stage": 1,
      "owner": null,
      "products": [
        "CM"
      ],
      "tier": 2,
      "area": {
        "letter": "S",
        "context": "career matching"
      },
      "buildWindow": [
        4,
        9
      ],
      "leads": {
        "product": "Natalie",
        "data": "Caitlin Brennan",
        "engineering": "Rijesh Puthiya"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-85"
      ],
      "name": "TU Performance & Upgrade",
      "lane": "DE",
      "stage": 4,
      "owner": null,
      "products": [
        "TUO"
      ],
      "tier": 1,
      "area": {
        "letter": "R",
        "context": "TopUniversities platform"
      },
      "risk": {
        "level": 1,
        "note": "Collapsing to the Drupal upgrade, out at the end of October."
      },
      "buildWindow": [
        1,
        1
      ],
      "approved": true,
      "leads": {
        "product": "Natalie",
        "data": "TBC",
        "engineering": "Mohan Balaji"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-7"
      ],
      "name": "TU – Career Match Microsite",
      "lane": "DE",
      "stage": 4,
      "owner": "SH",
      "products": [
        "CM"
      ],
      "tier": 1,
      "area": {
        "letter": "S",
        "context": "career matching"
      },
      "buildWindow": [
        0,
        1
      ],
      "approved": true,
      "leads": {
        "product": "Natalie",
        "data": "Caitlin Brennan",
        "engineering": "Rijesh Puthiya"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-53"
      ],
      "name": "Aurora – Counsellor Feedback",
      "lane": "US",
      "stage": 0,
      "owner": null,
      "products": [
        "USP"
      ],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "counsellor feedback"
      },
      "leads": {
        "product": "Selma",
        "data": "Mohd Azhar",
        "engineering": "Mahesh Kumar"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-8"
      ],
      "name": "Aurora – Document Credibility",
      "lane": "US",
      "stage": 0,
      "owner": null,
      "products": [
        "USP"
      ],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "application documents"
      },
      "leads": {
        "product": "Selma",
        "data": "Mohd Azhar",
        "engineering": "Mahesh Kumar"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-48"
      ],
      "name": "Aurora – Student Sentiment Insights",
      "lane": "US",
      "stage": 1,
      "owner": null,
      "products": [
        "USP"
      ],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "student sentiment"
      },
      "leads": {
        "product": "Selma",
        "data": "Mohd Azhar",
        "engineering": "Mahesh Kumar"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-40"
      ],
      "name": "QAS Uni Svcs Reporting App",
      "lane": "US",
      "stage": 1,
      "owner": null,
      "products": [
        "USA"
      ],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "client reporting"
      },
      "buildWindow": [
        2,
        3
      ],
      "leads": {
        "product": "Selma",
        "data": "Mohd Azhar",
        "engineering": "Mahesh Kumar"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-9"
      ],
      "name": "Uni Services – Productivity Dashboards",
      "lane": "US",
      "stage": 1,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "client productivity reporting"
      },
      "leads": {
        "product": "Selma",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-54"
      ],
      "name": "Appian to Hubspot Migration",
      "lane": "US",
      "stage": 1,
      "owner": null,
      "products": [],
      "tier": 1,
      "area": {
        "letter": "Q",
        "context": "company-wide CRM migration"
      },
      "risk": {
        "level": 2,
        "note": "Long migration running alongside the D&E one."
      },
      "buildWindow": [
        0,
        6
      ],
      "approved": true,
      "leads": {
        "product": "James Healy",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-88"
      ],
      "name": "Decommission Informatica",
      "lane": "US",
      "stage": 2,
      "owner": "GL",
      "products": [],
      "tier": 1,
      "area": {
        "letter": "R",
        "context": "recruitment data integrations"
      },
      "buildWindow": [
        1,
        6
      ],
      "leads": {
        "product": "Gwyneth Lovelace-T…",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-47"
      ],
      "name": "Aurora – WeChat",
      "lane": "US",
      "stage": 1,
      "owner": "SP",
      "products": [
        "USP"
      ],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "WeChat channel"
      },
      "buildWindow": null,
      "leads": {
        "product": "Selma",
        "data": "Mohd Azhar",
        "engineering": "Mahesh Kumar"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-82"
      ],
      "name": "Aurora Data Integrity",
      "lane": "US",
      "stage": 2,
      "owner": null,
      "products": [
        "USA"
      ],
      "tier": 1,
      "area": {
        "letter": "R",
        "context": "client data quality"
      },
      "buildWindow": [
        0,
        3
      ],
      "leads": {
        "product": "David Paterson",
        "data": "Mohd Azhar",
        "engineering": "Mahesh Kumar"
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-81"
      ],
      "name": "Aurora – Client Data API",
      "lane": "US",
      "stage": 2,
      "owner": null,
      "products": [
        "USA"
      ],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "client data API"
      },
      "leads": {
        "product": "Selma",
        "data": "Mohd Azhar",
        "engineering": "Mahesh Kumar"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-56"
      ],
      "name": "Aurora – Student Scoring Model",
      "lane": "US",
      "stage": 2,
      "owner": "SP",
      "products": [
        "USP"
      ],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "student scoring"
      },
      "risk": {
        "level": 1,
        "note": "On track."
      },
      "buildWindow": [
        0,
        2
      ],
      "approved": true,
      "leads": {
        "product": "Selma",
        "data": "Mohd Azhar",
        "engineering": "Mahesh Kumar"
      },
      "effort": "small"
    },
    {
      "ids": [
        "EP-30"
      ],
      "name": "Aurora Implementation",
      "lane": "US",
      "stage": 3,
      "owner": "SP",
      "products": [
        "USP"
      ],
      "tier": 1,
      "area": {
        "letter": "R",
        "context": "client portal rollout"
      },
      "risk": {
        "level": 1,
        "note": "On track."
      },
      "buildWindow": [
        0,
        3
      ],
      "approved": true,
      "leads": {
        "product": "Selma",
        "data": "Mohd Azhar",
        "engineering": "Mahesh Kumar"
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-96"
      ],
      "name": "Rebuild Enquiry APIs",
      "lane": "US",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "enquiry APIs"
      },
      "description": "Rebuild of the enquiry APIs. AWS costs are still being paid on the service they replace.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-97"
      ],
      "name": "Flat File Uploads",
      "lane": "US",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "university data uploads"
      },
      "description": "Transfer and data uploads from universities into the system.",
      "leads": {
        "product": "Selma",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [
        "EP-49"
      ],
      "name": "Uni Svcs – Operational Tickets",
      "lane": "US",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "university services operations"
      },
      "effort": "medium",
      "leads": {
        "product": "Selma",
        "data": "",
        "engineering": ""
      }
    },
    {
      "ids": [
        "EP-89"
      ],
      "name": "MoveIN Smart Match / AI Email",
      "lane": "SI",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "enquiry matching and AI email"
      },
      "leads": {
        "product": "TBC",
        "data": "",
        "engineering": "Mahesh Hegde"
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "QSA HubSpot",
      "lane": "DE",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 1,
      "area": {
        "letter": "R",
        "context": "QS Apply on HubSpot"
      },
      "leads": {
        "product": "Natalie",
        "data": "",
        "engineering": "Simon Pennington"
      },
      "effort": "medium",
      "buildWindow": [
        1,
        6
      ]
    },
    {
      "ids": [],
      "name": "Counsellor / Agent Portal HubSpot Pages",
      "lane": "DE",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "R",
        "context": "counsellor and agent portal"
      },
      "leads": {
        "product": "Natalie",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "My Leads and Campaigns",
      "lane": "DE",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "client leads and campaigns"
      },
      "leads": {
        "product": "Natalie",
        "data": "",
        "engineering": ""
      },
      "effort": "medium",
      "buildWindow": [
        4,
        9
      ]
    },
    {
      "ids": [],
      "name": "UpGuard upgrade procurement",
      "lane": "CI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "estate-wide security posture"
      },
      "risk": {
        "level": 4,
        "note": "Procurement with no owner in the conversation."
      },
      "buildWindow": [
        1,
        3
      ],
      "approved": true,
      "description": "Procurement of the UpGuard upgrade continued with only incremental updates, and there is budget for the purchase that may be reallocated if delays extend.",
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Wiz acquisition",
      "lane": "CI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "cloud security posture"
      },
      "risk": {
        "level": 2,
        "note": "Procurement, not a delivery item."
      },
      "buildWindow": [
        1,
        3
      ],
      "approved": true,
      "description": "Procurement activity for acquiring Wiz continued alongside UpGuard as a key enabler for QS's cloud security capability.",
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Drata GRC platform evaluation",
      "lane": "CI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "governance, risk and compliance"
      },
      "risk": {
        "level": 2,
        "note": "Evaluating a purchase QS may not want."
      },
      "buildWindow": [
        1,
        3
      ],
      "approved": true,
      "description": "Discussions regarding Drata were delayed due to stakeholder availability constraints, but the project remains active and will resume once key participants are available.",
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Box security posture review",
      "lane": "CI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "content security posture"
      },
      "risk": {
        "level": 1,
        "note": "Compliance software review."
      },
      "buildWindow": [
        1,
        3
      ],
      "approved": true,
      "description": "Additional discovery sessions were held with the Marketing and Creative teams to understand business processes, content-sharing requirements and the impact of potential security changes, with recommendations to be refined for the CISO.",
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": ""
      },
      "effort": "small"
    },
    {
      "ids": [],
      "name": "External security posture remediation",
      "lane": "CI",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "external security rating"
      },
      "buildWindow": [
        4,
        9
      ],
      "description": "Work with multiple teams on externally visible security issues and vulnerabilities contributed to QS regaining its A-tier rating with external cybersecurity risk-scoring providers.",
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Trust Centre publication (MoveON HECVAT)",
      "lane": "CI",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "client security assurance"
      },
      "buildWindow": [
        4,
        6
      ],
      "description": "Outstanding items in the MoveON HECVAT questionnaire continued to be reviewed and documented as part of preparing to publish the Trust Centre internally.",
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Secure Linux-managed workstation model",
      "lane": "CI",
      "stage": 4,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "endpoint security"
      },
      "buildWindow": [
        1,
        3
      ],
      "approved": true,
      "description": "Rebuilding Rowan's laptop with Ubuntu 26 LTS, Secure Boot, TPM-backed encryption and Entra ID authentication (AuthD + MS Broker) proved a secure Linux-managed workstation model that may be valuable for Corporate IT, and the approach will be documented and shared.",
      "leads": {
        "product": "Patrick Brothers",
        "data": "",
        "engineering": ""
      },
      "effort": "small"
    },
    {
      "ids": [],
      "name": "Cerebrum core platform",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 1,
      "area": {
        "letter": "Q",
        "context": "governed data layer and ontology"
      },
      "buildWindow": [
        1,
        6
      ],
      "approved": true,
      "description": "Institution identity now read from platform registry; false merge-reviews cut from 2,037 to 633 genuine cases + 51 contradictions. Rankings producer reached first bundle. Blocker: Genuine review queues need steward decisions; supersession can be read but not yet recorded.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Taxonomies, Student Flows & Employability",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "S",
        "context": "subject and job taxonomies"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Programme-to-subject mapper deployed to AWS Lambda/Bedrock; Job Posting ingestion moved into active work. Blocker: Subject-level national mappings need explicit crosswalks into the QS taxonomy.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "OnePerson & Student Data Transformation",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "student and person data"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "QS Apply and Appian added as sources; People Data Labs scoping under way; linked to Cerebrum direction. Blocker: PDL field/version choice and Appian–QS Apply–HubSpot overlap still unresolved.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Data Platform Governance & Migration",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "Q",
        "context": "data platform governance"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Most Data Science repos moved GitLab→GitHub; Prefect IaC documentation and replica ENROL stack under way. Blocker: Several dbt projects still rely on personal credentials in CI pending service-account access.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "ENROL & Unified Modelling",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "enrolment propensity"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "First model sign-off reporting workflow delivered; course-of-interest models next. Blocker: Jiun left this week after handover — reduced continuity on modelling; UBS data quality remains a dependency.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Aurora / Synergy2 / UBS Data Quality",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "client data quality"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Synergy2 TEST environment live for BI; Deferred/Declined journeys backfilled; comms-direction fixes shipped. Blocker: Persistent UBS defects (course-of-interest, engagements, dates); root cause vs. repair still unclear.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Data-Led Engagement Pilot (University of London)",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "campaign experiment"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Campaign build complete; Stirling lined up as the next campaign. Blocker: reduced delivery cover during the week — 5 Oct launch likely slips a few days.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Client Reporting Portal (Power BI)",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "client reporting"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Greenlight session booked 7 Oct ahead of 16 Oct access target; Sean Coffey's MVP review positive. Blocker: Client user list from AM/CD still outstanding — needed for IT whitelisting and RLS encoding.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Reconciliation Process (interim)",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "client data reconciliation"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "VW_RECON_RESULT built in Synergy2; Griffith interim list due 7 Oct. Blocker: Huble has stepped back (contract ends 14 Oct) after QS declined 12 extra hours — no vendor fallback; recon scrutiny tied to the GBP 2m budget gap.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Data Loading Efficiencies & Automation",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "client data loading"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Contact Matching v2 running across all clients; historical source-tag migration nearly complete. Blocker: KCL transformation workflow missed its 30 Sep go-live and still depends on Simon — no revised date committed.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Tableau Offboarding & Fabric Transition",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "Q",
        "context": "BI tooling"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Non-renewal notice issued 28 Sep; scoping sent to Consulting/Insights/infra (responses due 16 Oct). Blocker: Consulting's early ask (~50 licences + Server) exceeds the desktop-only notice scope — needs a decision.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "MyQS 2.0 Client Application",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "next client platform"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Stirling prototype expected mid-Nov–early Dec. Blocker: Full build/launch now estimated ~Q2 2027 (pending prototype review).",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "CE Digital Transformation & PBI Migration",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "client engagement reporting"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Supporting lead-scoring model and B2B/B2C funnel work with Natalie's team. Blocker: Remaining Tableau→Power BI migration tied to the 22 Jan 2027 deadline.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Wider QS Intelligence (Project Compass)",
      "lane": "DATA",
      "stage": 0,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "Q",
        "context": "intelligence across every area of QS"
      },
      "buildWindow": [
        1,
        4
      ],
      "description": "Groundwork complete (ISS, Rankings, GSF walkthroughs); concept previewed to the business. Blocker: Paused for capacity (client access, end of cycle, HubSpot); no restart date yet.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Support Salary Data",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "S",
        "context": "salary data"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Passed PDL's refreshed inferred salary field (with min/max ranges) to LMI; reviewed current LMI wage data against job titles. Blocker: Next steps for the project are pending direction.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Rankings Modelling — Alumni Impact & Career Alignment",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "P",
        "context": "rankings indicators"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Restructured to Sam's new spec; subject standardisation, seniority and skill-complexity modelling complete; full indicator modelling begins next sprint. Blocker: Still confirming the primary data source for each Alumni Impact list.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Snowflake Migration (Employability)",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 1,
      "area": {
        "letter": "S",
        "context": "employability data platform"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Raw/processed GCP pipeline finalised for profile datasets; same approach being extended to job postings. Blocker: No material blocker this week.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Subject Taxonomy & Standardization",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 1,
      "area": {
        "letter": "S",
        "context": "subject taxonomy"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "v2.1 shared for sign-off; Studyportals and UBS mappings finalised and sent for review; service moving into GitHub. Blocker: v3 still needs to close parent-child mapping gaps.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Job Title Taxonomy",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "S",
        "context": "job title taxonomy"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "QSIDs now in hand for the migration. Blocker: Migration delayed until the current mining run concludes — no revised date yet.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Alumni Platform",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 1,
      "area": {
        "letter": "S",
        "context": "alumni outcomes"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Migrated Snowflake profile datasets handed to Charlie; analytics being restructured to serve consulting and platform needs. Blocker: Awaiting clarity on whether infrastructure/datasets are managed in-house.",
      "leads": {
        "product": "Martí Serrano",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Subjects Model & IPF Seed",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "global student flows"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Major milestone: university-by-subject data collected for 26 countries (2.5m students), matched to 2,200 of 3,789 QS-ranked universities. Blocker: Relies on Diego's programme mapper; South Asia/India coverage under 20% will lean on modelling, not real data.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "ORB Core Model, Data Releases & QA",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "R",
        "context": "global student flows"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "New gap-filling methods tested; test run complete with revised global totals; India 2023–24 updated, Eurostat/Europe update started; tier 1 QA checks defined. Blocker: A bug reducing 2024 country totals for several European countries needs fixing; India 2025 remains an estimate pending official data.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "RAG News Signal Pipeline",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "I",
        "context": "market signals"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Country-sources pipeline rebuilt to match the international design; 21 country-level news sources now parsed alongside GDELT. Blocker: Source quality/licensing and noise from low-quality stories still need clear signal-acceptance rules.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "AI Automation & Augmentation Framework",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "S",
        "context": "AI exposure of occupations"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "Layer 1 baseline scores complete; Layer 2 v1 implemented but found six structural problems in testing; v2 occupation-specific redesign planned. Blocker: v2 needs real AI-usage data to calibrate adjustments and test against independent adoption evidence.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Growth Rate Modelling (4 forecasting projects)",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 3,
      "area": {
        "letter": "S",
        "context": "labour market forecasting"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "24 country workbooks rebuilt on the new CAGR methodology (review under way); ECA/SSA regional bounds built and being tested. Blocker: CAGR validation checks and penetration scoring are still early-stage, with several cross-project dependencies.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    },
    {
      "ids": [],
      "name": "Wages Estimation",
      "lane": "DATA",
      "stage": 2,
      "owner": null,
      "products": [],
      "tier": 2,
      "area": {
        "letter": "S",
        "context": "wage estimates"
      },
      "buildWindow": [
        1,
        6
      ],
      "description": "2025 median wage estimates complete for 22 of 24 countries; occupational tag rebuild under way. Blocker: US 2025 revalidation awaiting latest BLS data; Canada and Spain estimates still in progress.",
      "leads": {
        "product": "David Paterson",
        "data": "",
        "engineering": ""
      },
      "effort": "medium"
    }
  ],
  "schedule": {
    "rows": [
      [
        "AI Automation & Augmentation Framework",
        1,
        "data"
      ],
      [
        "AI Automation & Augmentation Framework",
        2,
        "data"
      ],
      [
        "AI Automation & Augmentation Framework",
        3,
        "data"
      ],
      [
        "AI Automation & Augmentation Framework",
        4,
        "data"
      ],
      [
        "AI Automation & Augmentation Framework",
        5,
        "data"
      ],
      [
        "AI Automation & Augmentation Framework",
        6,
        "data"
      ],
      [
        "Alumni Platform",
        1,
        "data"
      ],
      [
        "Alumni Platform",
        2,
        "data"
      ],
      [
        "Alumni Platform",
        3,
        "data"
      ],
      [
        "Alumni Platform",
        4,
        "data"
      ],
      [
        "Alumni Platform",
        5,
        "data"
      ],
      [
        "Alumni Platform",
        6,
        "data"
      ],
      [
        "Aurora / Synergy2 / UBS Data Quality",
        1,
        "data"
      ],
      [
        "Aurora / Synergy2 / UBS Data Quality",
        2,
        "data"
      ],
      [
        "Aurora / Synergy2 / UBS Data Quality",
        3,
        "data"
      ],
      [
        "Aurora / Synergy2 / UBS Data Quality",
        4,
        "data"
      ],
      [
        "Aurora / Synergy2 / UBS Data Quality",
        5,
        "data"
      ],
      [
        "Aurora / Synergy2 / UBS Data Quality",
        6,
        "data"
      ],
      [
        "Box security posture review",
        1,
        "cyber"
      ],
      [
        "Box security posture review",
        2,
        "cyber"
      ],
      [
        "Box security posture review",
        3,
        "cyber"
      ],
      [
        "CE Digital Transformation & PBI Migration",
        1,
        "data"
      ],
      [
        "CE Digital Transformation & PBI Migration",
        2,
        "data"
      ],
      [
        "CE Digital Transformation & PBI Migration",
        3,
        "data"
      ],
      [
        "CE Digital Transformation & PBI Migration",
        4,
        "data"
      ],
      [
        "CE Digital Transformation & PBI Migration",
        5,
        "data"
      ],
      [
        "CE Digital Transformation & PBI Migration",
        6,
        "data"
      ],
      [
        "Cerebrum core platform",
        1,
        "data"
      ],
      [
        "Cerebrum core platform",
        2,
        "data"
      ],
      [
        "Cerebrum core platform",
        3,
        "data"
      ],
      [
        "Cerebrum core platform",
        4,
        "data"
      ],
      [
        "Cerebrum core platform",
        5,
        "data"
      ],
      [
        "Cerebrum core platform",
        6,
        "data"
      ],
      [
        "Client Reporting Portal (Power BI)",
        1,
        "data"
      ],
      [
        "Client Reporting Portal (Power BI)",
        2,
        "data"
      ],
      [
        "Client Reporting Portal (Power BI)",
        3,
        "data"
      ],
      [
        "Client Reporting Portal (Power BI)",
        4,
        "data"
      ],
      [
        "Client Reporting Portal (Power BI)",
        5,
        "data"
      ],
      [
        "Client Reporting Portal (Power BI)",
        6,
        "data"
      ],
      [
        "Data Loading Efficiencies & Automation",
        1,
        "data"
      ],
      [
        "Data Loading Efficiencies & Automation",
        2,
        "data"
      ],
      [
        "Data Loading Efficiencies & Automation",
        3,
        "data"
      ],
      [
        "Data Loading Efficiencies & Automation",
        4,
        "data"
      ],
      [
        "Data Loading Efficiencies & Automation",
        5,
        "data"
      ],
      [
        "Data Loading Efficiencies & Automation",
        6,
        "data"
      ],
      [
        "Data Platform Governance & Migration",
        1,
        "data"
      ],
      [
        "Data Platform Governance & Migration",
        2,
        "data"
      ],
      [
        "Data Platform Governance & Migration",
        3,
        "data"
      ],
      [
        "Data Platform Governance & Migration",
        4,
        "data"
      ],
      [
        "Data Platform Governance & Migration",
        5,
        "data"
      ],
      [
        "Data Platform Governance & Migration",
        6,
        "data"
      ],
      [
        "Data-Led Engagement Pilot (University of London)",
        1,
        "data"
      ],
      [
        "Data-Led Engagement Pilot (University of London)",
        2,
        "data"
      ],
      [
        "Data-Led Engagement Pilot (University of London)",
        3,
        "data"
      ],
      [
        "Data-Led Engagement Pilot (University of London)",
        4,
        "data"
      ],
      [
        "Data-Led Engagement Pilot (University of London)",
        5,
        "data"
      ],
      [
        "Data-Led Engagement Pilot (University of London)",
        6,
        "data"
      ],
      [
        "Drata GRC platform evaluation",
        1,
        "cyber"
      ],
      [
        "Drata GRC platform evaluation",
        2,
        "cyber"
      ],
      [
        "Drata GRC platform evaluation",
        3,
        "cyber"
      ],
      [
        "ENROL & Unified Modelling",
        1,
        "data"
      ],
      [
        "ENROL & Unified Modelling",
        2,
        "data"
      ],
      [
        "ENROL & Unified Modelling",
        3,
        "data"
      ],
      [
        "ENROL & Unified Modelling",
        4,
        "data"
      ],
      [
        "ENROL & Unified Modelling",
        5,
        "data"
      ],
      [
        "ENROL & Unified Modelling",
        6,
        "data"
      ],
      [
        "EP-14",
        7,
        "blr2"
      ],
      [
        "EP-14",
        8,
        "blr2"
      ],
      [
        "EP-14",
        9,
        "blr2"
      ],
      [
        "EP-15",
        7,
        "blr2"
      ],
      [
        "EP-15",
        8,
        "blr2"
      ],
      [
        "EP-15",
        9,
        "blr2"
      ],
      [
        "EP-16",
        10,
        "blr1"
      ],
      [
        "EP-16",
        11,
        "blr1"
      ],
      [
        "EP-16",
        12,
        "blr1"
      ],
      [
        "EP-16",
        13,
        "blr1"
      ],
      [
        "EP-16",
        14,
        "blr1"
      ],
      [
        "EP-16",
        15,
        "blr1"
      ],
      [
        "EP-18",
        1,
        "syd1"
      ],
      [
        "EP-18",
        2,
        "syd1"
      ],
      [
        "EP-19",
        0,
        "ecu1"
      ],
      [
        "EP-19",
        1,
        "ecu1"
      ],
      [
        "EP-19",
        4,
        "ecu1"
      ],
      [
        "EP-19",
        5,
        "ecu1"
      ],
      [
        "EP-19",
        6,
        "ecu1"
      ],
      [
        "EP-20",
        0,
        "syd1"
      ],
      [
        "EP-21",
        1,
        "blr2"
      ],
      [
        "EP-21",
        2,
        "blr2"
      ],
      [
        "EP-21",
        3,
        "blr2"
      ],
      [
        "EP-21",
        4,
        "blr2"
      ],
      [
        "EP-21",
        5,
        "blr2"
      ],
      [
        "EP-21",
        6,
        "blr2"
      ],
      [
        "EP-25",
        1,
        "blr2"
      ],
      [
        "EP-25",
        2,
        "blr2"
      ],
      [
        "EP-25",
        3,
        "blr2"
      ],
      [
        "EP-25",
        4,
        "blr2"
      ],
      [
        "EP-26",
        0,
        "syd1"
      ],
      [
        "EP-26",
        1,
        "syd1"
      ],
      [
        "EP-26",
        2,
        "syd1"
      ],
      [
        "EP-26",
        3,
        "syd1"
      ],
      [
        "EP-26",
        4,
        "syd1"
      ],
      [
        "EP-26",
        5,
        "syd1"
      ],
      [
        "EP-26",
        6,
        "syd1"
      ],
      [
        "EP-26",
        7,
        "syd1"
      ],
      [
        "EP-26",
        8,
        "syd1"
      ],
      [
        "EP-26",
        9,
        "syd1"
      ],
      [
        "EP-27",
        1,
        "events"
      ],
      [
        "EP-27",
        2,
        "events"
      ],
      [
        "EP-27",
        3,
        "events"
      ],
      [
        "EP-27",
        4,
        "events"
      ],
      [
        "EP-27",
        5,
        "events"
      ],
      [
        "EP-27",
        6,
        "events"
      ],
      [
        "EP-27",
        7,
        "events"
      ],
      [
        "EP-27",
        8,
        "events"
      ],
      [
        "EP-27",
        9,
        "events"
      ],
      [
        "EP-28",
        10,
        "blr2"
      ],
      [
        "EP-28",
        11,
        "blr2"
      ],
      [
        "EP-28",
        12,
        "blr2"
      ],
      [
        "EP-30",
        0,
        "ubsdev"
      ],
      [
        "EP-30",
        1,
        "ubsdev"
      ],
      [
        "EP-30",
        2,
        "ubsdev"
      ],
      [
        "EP-30",
        3,
        "ubsdev"
      ],
      [
        "EP-32",
        3,
        "cerebrum"
      ],
      [
        "EP-32",
        4,
        "cerebrum"
      ],
      [
        "EP-32",
        6,
        "cerebrum"
      ],
      [
        "EP-32",
        7,
        "cerebrum"
      ],
      [
        "EP-32",
        9,
        "cerebrum"
      ],
      [
        "EP-32",
        10,
        "cerebrum"
      ],
      [
        "EP-34",
        7,
        "ecu1"
      ],
      [
        "EP-34",
        8,
        "ecu1"
      ],
      [
        "EP-34",
        9,
        "ecu1"
      ],
      [
        "EP-40",
        2,
        "ubsdev"
      ],
      [
        "EP-40",
        3,
        "ubsdev"
      ],
      [
        "EP-43",
        0,
        "syd1"
      ],
      [
        "EP-46",
        1,
        "blr2"
      ],
      [
        "EP-48",
        2,
        "ubsdev"
      ],
      [
        "EP-48",
        3,
        "ubsdev"
      ],
      [
        "EP-48",
        4,
        "ubsdev"
      ],
      [
        "EP-48",
        5,
        "ubsdev"
      ],
      [
        "EP-50",
        10,
        "blr2"
      ],
      [
        "EP-50",
        11,
        "blr2"
      ],
      [
        "EP-50",
        12,
        "blr2"
      ],
      [
        "EP-51",
        4,
        "blr2"
      ],
      [
        "EP-51",
        5,
        "blr2"
      ],
      [
        "EP-51",
        6,
        "blr2"
      ],
      [
        "EP-52",
        10,
        "blr2"
      ],
      [
        "EP-52",
        11,
        "blr2"
      ],
      [
        "EP-52",
        12,
        "blr2"
      ],
      [
        "EP-53",
        2,
        "ubsdev"
      ],
      [
        "EP-53",
        3,
        "ubsdev"
      ],
      [
        "EP-53",
        4,
        "ubsdev"
      ],
      [
        "EP-53",
        5,
        "ubsdev"
      ],
      [
        "EP-54",
        0,
        "ubsdev"
      ],
      [
        "EP-54",
        1,
        "ubsdev"
      ],
      [
        "EP-54",
        2,
        "ubsdev"
      ],
      [
        "EP-54",
        3,
        "ubsdev"
      ],
      [
        "EP-54",
        4,
        "ubsdev"
      ],
      [
        "EP-54",
        5,
        "ubsdev"
      ],
      [
        "EP-54",
        6,
        "ubsdev"
      ],
      [
        "EP-56",
        0,
        "ubsdev"
      ],
      [
        "EP-56",
        1,
        "ubsdev"
      ],
      [
        "EP-56",
        2,
        "ubsdev"
      ],
      [
        "EP-59",
        1,
        "events"
      ],
      [
        "EP-59",
        2,
        "events"
      ],
      [
        "EP-59",
        3,
        "events"
      ],
      [
        "EP-60",
        3,
        "syd1"
      ],
      [
        "EP-60",
        4,
        "syd1"
      ],
      [
        "EP-60",
        6,
        "syd1"
      ],
      [
        "EP-60",
        7,
        "syd1"
      ],
      [
        "EP-60",
        9,
        "syd1"
      ],
      [
        "EP-60",
        10,
        "syd1"
      ],
      [
        "EP-61",
        1,
        "blr2"
      ],
      [
        "EP-61",
        2,
        "blr2"
      ],
      [
        "EP-61",
        3,
        "blr2"
      ],
      [
        "EP-64",
        1,
        "events"
      ],
      [
        "EP-64",
        2,
        "events"
      ],
      [
        "EP-64",
        3,
        "events"
      ],
      [
        "EP-64",
        4,
        "events"
      ],
      [
        "EP-64",
        5,
        "events"
      ],
      [
        "EP-64",
        6,
        "events"
      ],
      [
        "EP-64",
        7,
        "events"
      ],
      [
        "EP-64",
        8,
        "events"
      ],
      [
        "EP-64",
        9,
        "events"
      ],
      [
        "EP-67",
        1,
        "events"
      ],
      [
        "EP-67",
        2,
        "events"
      ],
      [
        "EP-67",
        3,
        "events"
      ],
      [
        "EP-68",
        1,
        "events"
      ],
      [
        "EP-68",
        2,
        "events"
      ],
      [
        "EP-68",
        3,
        "events"
      ],
      [
        "EP-68",
        4,
        "events"
      ],
      [
        "EP-68",
        5,
        "events"
      ],
      [
        "EP-68",
        6,
        "events"
      ],
      [
        "EP-69",
        1,
        "events"
      ],
      [
        "EP-69",
        2,
        "events"
      ],
      [
        "EP-69",
        3,
        "events"
      ],
      [
        "EP-69",
        4,
        "events"
      ],
      [
        "EP-69",
        5,
        "events"
      ],
      [
        "EP-69",
        6,
        "events"
      ],
      [
        "EP-7",
        0,
        "ecu2"
      ],
      [
        "EP-7",
        1,
        "ecu2"
      ],
      [
        "EP-70",
        4,
        "events"
      ],
      [
        "EP-70",
        5,
        "events"
      ],
      [
        "EP-70",
        6,
        "events"
      ],
      [
        "EP-71",
        4,
        "events"
      ],
      [
        "EP-71",
        5,
        "events"
      ],
      [
        "EP-71",
        6,
        "events"
      ],
      [
        "EP-71",
        7,
        "events"
      ],
      [
        "EP-71",
        8,
        "events"
      ],
      [
        "EP-71",
        9,
        "events"
      ],
      [
        "EP-72",
        4,
        "syd1"
      ],
      [
        "EP-72",
        5,
        "syd1"
      ],
      [
        "EP-72",
        6,
        "syd1"
      ],
      [
        "EP-72",
        7,
        "syd1"
      ],
      [
        "EP-72",
        8,
        "syd1"
      ],
      [
        "EP-72",
        9,
        "syd1"
      ],
      [
        "EP-73",
        7,
        "blr2"
      ],
      [
        "EP-73",
        8,
        "blr2"
      ],
      [
        "EP-73",
        9,
        "blr2"
      ],
      [
        "EP-76",
        1,
        "syd1"
      ],
      [
        "EP-76",
        2,
        "syd1"
      ],
      [
        "EP-76",
        3,
        "syd1"
      ],
      [
        "EP-76",
        4,
        "syd1"
      ],
      [
        "EP-76",
        5,
        "syd1"
      ],
      [
        "EP-76",
        6,
        "syd1"
      ],
      [
        "EP-77",
        7,
        "syd1"
      ],
      [
        "EP-77",
        8,
        "syd1"
      ],
      [
        "EP-77",
        9,
        "syd1"
      ],
      [
        "EP-78",
        1,
        "syd1"
      ],
      [
        "EP-78",
        2,
        "syd1"
      ],
      [
        "EP-78",
        3,
        "syd1"
      ],
      [
        "EP-78",
        4,
        "syd1"
      ],
      [
        "EP-78",
        5,
        "syd1"
      ],
      [
        "EP-78",
        6,
        "syd1"
      ],
      [
        "EP-79",
        4,
        "de-infra"
      ],
      [
        "EP-79",
        5,
        "de-infra"
      ],
      [
        "EP-79",
        6,
        "de-infra"
      ],
      [
        "EP-8",
        2,
        "ubsdev"
      ],
      [
        "EP-8",
        3,
        "ubsdev"
      ],
      [
        "EP-8",
        4,
        "ubsdev"
      ],
      [
        "EP-8",
        5,
        "ubsdev"
      ],
      [
        "EP-80",
        0,
        "cyber"
      ],
      [
        "EP-80",
        1,
        "cyber"
      ],
      [
        "EP-80",
        2,
        "cyber"
      ],
      [
        "EP-80",
        3,
        "cyber"
      ],
      [
        "EP-80",
        4,
        "cyber"
      ],
      [
        "EP-80",
        5,
        "cyber"
      ],
      [
        "EP-80",
        6,
        "cyber"
      ],
      [
        "EP-80",
        7,
        "cyber"
      ],
      [
        "EP-80",
        8,
        "cyber"
      ],
      [
        "EP-80",
        9,
        "cyber"
      ],
      [
        "EP-81",
        3,
        "ubsdev"
      ],
      [
        "EP-81",
        4,
        "ubsdev"
      ],
      [
        "EP-81",
        5,
        "ubsdev"
      ],
      [
        "EP-81",
        6,
        "ubsdev"
      ],
      [
        "EP-81",
        7,
        "ubsdev"
      ],
      [
        "EP-82",
        0,
        "ubsdev"
      ],
      [
        "EP-82",
        1,
        "ubsdev"
      ],
      [
        "EP-82",
        2,
        "ubsdev"
      ],
      [
        "EP-82",
        3,
        "ubsdev"
      ],
      [
        "EP-84",
        1,
        "de-infra"
      ],
      [
        "EP-84",
        2,
        "de-infra"
      ],
      [
        "EP-84",
        3,
        "de-infra"
      ],
      [
        "EP-84",
        4,
        "de-infra"
      ],
      [
        "EP-84",
        5,
        "de-infra"
      ],
      [
        "EP-84",
        6,
        "de-infra"
      ],
      [
        "EP-84",
        7,
        "de-infra"
      ],
      [
        "EP-84",
        8,
        "de-infra"
      ],
      [
        "EP-84",
        9,
        "de-infra"
      ],
      [
        "EP-84",
        10,
        "de-infra"
      ],
      [
        "EP-84",
        11,
        "de-infra"
      ],
      [
        "EP-84",
        12,
        "de-infra"
      ],
      [
        "EP-84",
        13,
        "de-infra"
      ],
      [
        "EP-84",
        14,
        "de-infra"
      ],
      [
        "EP-84",
        15,
        "de-infra"
      ],
      [
        "EP-85",
        1,
        "events"
      ],
      [
        "EP-86",
        7,
        "de-infra"
      ],
      [
        "EP-86",
        8,
        "de-infra"
      ],
      [
        "EP-86",
        9,
        "de-infra"
      ],
      [
        "EP-87",
        4,
        "syd1"
      ],
      [
        "EP-87",
        5,
        "syd1"
      ],
      [
        "EP-87",
        6,
        "syd1"
      ],
      [
        "EP-88",
        1,
        "ubsdev"
      ],
      [
        "EP-88",
        2,
        "ubsdev"
      ],
      [
        "EP-88",
        3,
        "ubsdev"
      ],
      [
        "EP-88",
        4,
        "ubsdev"
      ],
      [
        "EP-88",
        5,
        "ubsdev"
      ],
      [
        "EP-88",
        6,
        "ubsdev"
      ],
      [
        "EP-90",
        1,
        "syd1"
      ],
      [
        "EP-90",
        2,
        "syd1"
      ],
      [
        "EP-90",
        3,
        "syd1"
      ],
      [
        "EP-90",
        4,
        "syd1"
      ],
      [
        "EP-90",
        5,
        "syd1"
      ],
      [
        "EP-90",
        6,
        "syd1"
      ],
      [
        "EP-91",
        4,
        "syd1"
      ],
      [
        "EP-91",
        5,
        "syd1"
      ],
      [
        "EP-91",
        6,
        "syd1"
      ],
      [
        "EP-91",
        7,
        "syd1"
      ],
      [
        "EP-91",
        8,
        "syd1"
      ],
      [
        "EP-91",
        9,
        "syd1"
      ],
      [
        "EP-92",
        4,
        "blr2"
      ],
      [
        "EP-92",
        5,
        "blr2"
      ],
      [
        "EP-92",
        6,
        "blr2"
      ],
      [
        "EP-93",
        4,
        "blr2"
      ],
      [
        "EP-93",
        5,
        "blr2"
      ],
      [
        "EP-93",
        6,
        "blr2"
      ],
      [
        "EP-94",
        0,
        "blr2"
      ],
      [
        "EP-94",
        1,
        "blr2"
      ],
      [
        "EP-95",
        13,
        "syd1"
      ],
      [
        "EP-95",
        14,
        "syd1"
      ],
      [
        "External security posture remediation",
        4,
        "cyber"
      ],
      [
        "External security posture remediation",
        5,
        "cyber"
      ],
      [
        "External security posture remediation",
        6,
        "cyber"
      ],
      [
        "External security posture remediation",
        7,
        "cyber"
      ],
      [
        "External security posture remediation",
        8,
        "cyber"
      ],
      [
        "External security posture remediation",
        9,
        "cyber"
      ],
      [
        "Growth Rate Modelling (4 forecasting projects)",
        1,
        "data"
      ],
      [
        "Growth Rate Modelling (4 forecasting projects)",
        2,
        "data"
      ],
      [
        "Growth Rate Modelling (4 forecasting projects)",
        3,
        "data"
      ],
      [
        "Growth Rate Modelling (4 forecasting projects)",
        4,
        "data"
      ],
      [
        "Growth Rate Modelling (4 forecasting projects)",
        5,
        "data"
      ],
      [
        "Growth Rate Modelling (4 forecasting projects)",
        6,
        "data"
      ],
      [
        "Job Title Taxonomy",
        1,
        "data"
      ],
      [
        "Job Title Taxonomy",
        2,
        "data"
      ],
      [
        "Job Title Taxonomy",
        3,
        "data"
      ],
      [
        "Job Title Taxonomy",
        4,
        "data"
      ],
      [
        "Job Title Taxonomy",
        5,
        "data"
      ],
      [
        "Job Title Taxonomy",
        6,
        "data"
      ],
      [
        "My Leads and Campaigns",
        4,
        "events"
      ],
      [
        "My Leads and Campaigns",
        5,
        "events"
      ],
      [
        "My Leads and Campaigns",
        6,
        "events"
      ],
      [
        "My Leads and Campaigns",
        7,
        "events"
      ],
      [
        "My Leads and Campaigns",
        8,
        "events"
      ],
      [
        "My Leads and Campaigns",
        9,
        "events"
      ],
      [
        "MyQS 2.0 Client Application",
        1,
        "data"
      ],
      [
        "MyQS 2.0 Client Application",
        2,
        "data"
      ],
      [
        "MyQS 2.0 Client Application",
        3,
        "data"
      ],
      [
        "MyQS 2.0 Client Application",
        4,
        "data"
      ],
      [
        "MyQS 2.0 Client Application",
        5,
        "data"
      ],
      [
        "MyQS 2.0 Client Application",
        6,
        "data"
      ],
      [
        "MyQS B2C",
        3,
        "syd1"
      ],
      [
        "MyQS B2C",
        4,
        "syd1"
      ],
      [
        "MyQS B2C",
        5,
        "syd1"
      ],
      [
        "MyQS B2C",
        6,
        "syd1"
      ],
      [
        "ORB Core Model, Data Releases & QA",
        1,
        "data"
      ],
      [
        "ORB Core Model, Data Releases & QA",
        2,
        "data"
      ],
      [
        "ORB Core Model, Data Releases & QA",
        3,
        "data"
      ],
      [
        "ORB Core Model, Data Releases & QA",
        4,
        "data"
      ],
      [
        "ORB Core Model, Data Releases & QA",
        5,
        "data"
      ],
      [
        "ORB Core Model, Data Releases & QA",
        6,
        "data"
      ],
      [
        "OnePerson & Student Data Transformation",
        1,
        "data"
      ],
      [
        "OnePerson & Student Data Transformation",
        2,
        "data"
      ],
      [
        "OnePerson & Student Data Transformation",
        3,
        "data"
      ],
      [
        "OnePerson & Student Data Transformation",
        4,
        "data"
      ],
      [
        "OnePerson & Student Data Transformation",
        5,
        "data"
      ],
      [
        "OnePerson & Student Data Transformation",
        6,
        "data"
      ],
      [
        "QSA HubSpot",
        1,
        "events"
      ],
      [
        "QSA HubSpot",
        2,
        "events"
      ],
      [
        "QSA HubSpot",
        3,
        "events"
      ],
      [
        "QSA HubSpot",
        4,
        "events"
      ],
      [
        "QSA HubSpot",
        5,
        "events"
      ],
      [
        "QSA HubSpot",
        6,
        "events"
      ],
      [
        "RAG News Signal Pipeline",
        1,
        "data"
      ],
      [
        "RAG News Signal Pipeline",
        2,
        "data"
      ],
      [
        "RAG News Signal Pipeline",
        3,
        "data"
      ],
      [
        "RAG News Signal Pipeline",
        4,
        "data"
      ],
      [
        "RAG News Signal Pipeline",
        5,
        "data"
      ],
      [
        "RAG News Signal Pipeline",
        6,
        "data"
      ],
      [
        "Rankings Modelling — Alumni Impact & Career Alignment",
        1,
        "data"
      ],
      [
        "Rankings Modelling — Alumni Impact & Career Alignment",
        2,
        "data"
      ],
      [
        "Rankings Modelling — Alumni Impact & Career Alignment",
        3,
        "data"
      ],
      [
        "Rankings Modelling — Alumni Impact & Career Alignment",
        4,
        "data"
      ],
      [
        "Rankings Modelling — Alumni Impact & Career Alignment",
        5,
        "data"
      ],
      [
        "Rankings Modelling — Alumni Impact & Career Alignment",
        6,
        "data"
      ],
      [
        "Reconciliation Process (interim)",
        1,
        "data"
      ],
      [
        "Reconciliation Process (interim)",
        2,
        "data"
      ],
      [
        "Reconciliation Process (interim)",
        3,
        "data"
      ],
      [
        "Reconciliation Process (interim)",
        4,
        "data"
      ],
      [
        "Reconciliation Process (interim)",
        5,
        "data"
      ],
      [
        "Reconciliation Process (interim)",
        6,
        "data"
      ],
      [
        "Secure Linux-managed workstation model",
        1,
        "cyber"
      ],
      [
        "Secure Linux-managed workstation model",
        2,
        "cyber"
      ],
      [
        "Secure Linux-managed workstation model",
        3,
        "cyber"
      ],
      [
        "Snowflake Migration (Employability)",
        1,
        "data"
      ],
      [
        "Snowflake Migration (Employability)",
        2,
        "data"
      ],
      [
        "Snowflake Migration (Employability)",
        3,
        "data"
      ],
      [
        "Snowflake Migration (Employability)",
        4,
        "data"
      ],
      [
        "Snowflake Migration (Employability)",
        5,
        "data"
      ],
      [
        "Snowflake Migration (Employability)",
        6,
        "data"
      ],
      [
        "Student Insights",
        4,
        "blr2"
      ],
      [
        "Student Insights",
        5,
        "blr2"
      ],
      [
        "Student Insights",
        6,
        "blr2"
      ],
      [
        "Subject Taxonomy & Standardization",
        1,
        "data"
      ],
      [
        "Subject Taxonomy & Standardization",
        2,
        "data"
      ],
      [
        "Subject Taxonomy & Standardization",
        3,
        "data"
      ],
      [
        "Subject Taxonomy & Standardization",
        4,
        "data"
      ],
      [
        "Subject Taxonomy & Standardization",
        5,
        "data"
      ],
      [
        "Subject Taxonomy & Standardization",
        6,
        "data"
      ],
      [
        "Subjects Model & IPF Seed",
        1,
        "data"
      ],
      [
        "Subjects Model & IPF Seed",
        2,
        "data"
      ],
      [
        "Subjects Model & IPF Seed",
        3,
        "data"
      ],
      [
        "Subjects Model & IPF Seed",
        4,
        "data"
      ],
      [
        "Subjects Model & IPF Seed",
        5,
        "data"
      ],
      [
        "Subjects Model & IPF Seed",
        6,
        "data"
      ],
      [
        "Support Salary Data",
        1,
        "data"
      ],
      [
        "Support Salary Data",
        2,
        "data"
      ],
      [
        "Support Salary Data",
        3,
        "data"
      ],
      [
        "Support Salary Data",
        4,
        "data"
      ],
      [
        "Support Salary Data",
        5,
        "data"
      ],
      [
        "Support Salary Data",
        6,
        "data"
      ],
      [
        "Tableau Offboarding & Fabric Transition",
        1,
        "data"
      ],
      [
        "Tableau Offboarding & Fabric Transition",
        2,
        "data"
      ],
      [
        "Tableau Offboarding & Fabric Transition",
        3,
        "data"
      ],
      [
        "Tableau Offboarding & Fabric Transition",
        4,
        "data"
      ],
      [
        "Tableau Offboarding & Fabric Transition",
        5,
        "data"
      ],
      [
        "Tableau Offboarding & Fabric Transition",
        6,
        "data"
      ],
      [
        "Taxonomies, Student Flows & Employability",
        1,
        "data"
      ],
      [
        "Taxonomies, Student Flows & Employability",
        2,
        "data"
      ],
      [
        "Taxonomies, Student Flows & Employability",
        3,
        "data"
      ],
      [
        "Taxonomies, Student Flows & Employability",
        4,
        "data"
      ],
      [
        "Taxonomies, Student Flows & Employability",
        5,
        "data"
      ],
      [
        "Taxonomies, Student Flows & Employability",
        6,
        "data"
      ],
      [
        "Trust Centre publication (MoveON HECVAT)",
        4,
        "cyber"
      ],
      [
        "Trust Centre publication (MoveON HECVAT)",
        5,
        "cyber"
      ],
      [
        "Trust Centre publication (MoveON HECVAT)",
        6,
        "cyber"
      ],
      [
        "UpGuard upgrade procurement",
        1,
        "cyber"
      ],
      [
        "UpGuard upgrade procurement",
        2,
        "cyber"
      ],
      [
        "UpGuard upgrade procurement",
        3,
        "cyber"
      ],
      [
        "Wages Estimation",
        1,
        "data"
      ],
      [
        "Wages Estimation",
        2,
        "data"
      ],
      [
        "Wages Estimation",
        3,
        "data"
      ],
      [
        "Wages Estimation",
        4,
        "data"
      ],
      [
        "Wages Estimation",
        5,
        "data"
      ],
      [
        "Wages Estimation",
        6,
        "data"
      ],
      [
        "Wider QS Intelligence (Project Compass)",
        1,
        "data"
      ],
      [
        "Wider QS Intelligence (Project Compass)",
        2,
        "data"
      ],
      [
        "Wider QS Intelligence (Project Compass)",
        3,
        "data"
      ],
      [
        "Wider QS Intelligence (Project Compass)",
        4,
        "data"
      ],
      [
        "Wiz acquisition",
        1,
        "cyber"
      ],
      [
        "Wiz acquisition",
        2,
        "cyber"
      ],
      [
        "Wiz acquisition",
        3,
        "cyber"
      ]
    ],
    "unscheduled": [
      [
        "EP-66",
        "events"
      ],
      [
        "EP-47",
        "ubsdev"
      ],
      [
        "EP-79",
        "mimo"
      ],
      [
        "EP-55",
        "blr2"
      ],
      [
        "EP-36",
        "blr2"
      ],
      [
        "EP-65",
        "events"
      ],
      [
        "EP-68",
        "events"
      ],
      [
        "EP-70",
        "events"
      ],
      [
        "EP-9",
        "syd1"
      ]
    ],
    "released": [
      [
        "EP-63",
        "blr2"
      ],
      [
        "EP-31",
        "blr2"
      ],
      [
        "EP-33",
        "de-infra"
      ],
      [
        "EP-38",
        "blr2"
      ]
    ]
  },
  "updates": {
    "weeks": [
      {
        "week": 42,
        "dates": "12–16 October 2026",
        "report": "QS Week 42 Tech Report",
        "mapping": "labelled"
      },
      {
        "week": 41,
        "dates": "5–9 October 2026",
        "report": "QS Week 41 Tech Report",
        "mapping": "labelled"
      },
      {
        "week": 40,
        "dates": "28 September – 2 October 2026",
        "report": "QS Week 40 Tech Report and the Data Team Week 40 Update",
        "mapping": "labelled"
      },
      {
        "week": 38,
        "dates": "14–19 September 2026",
        "report": "QS Week 38 Tech Report",
        "mapping": "labelled"
      },
      {
        "week": 37,
        "dates": "7–12 September 2026",
        "report": "QS Week 37 Tech Report",
        "mapping": "labelled"
      },
      {
        "week": 36,
        "dates": "31 August – 5 September 2026",
        "report": "QS Week 36 Tech Report",
        "mapping": "labelled"
      },
      {
        "week": 35,
        "dates": "24–30 August 2026",
        "report": "QS Week 35 Tech Report",
        "mapping": "labelled"
      },
      {
        "week": 34,
        "dates": "17–22 August 2026",
        "report": "QS Week 34 Tech Report",
        "mapping": "inferred"
      },
      {
        "week": 33,
        "dates": "10–15 August 2026",
        "report": "QS Week 33 Tech Report",
        "mapping": "inferred"
      }
    ],
    "reviews": [
      {
        "epics": [
          "EP-54",
          "EP-27"
        ],
        "text": "Discovery meetings have run with all the teams — four or five over recent weeks — and the report is being built from them. The D&E card is part of the same project.",
        "owner": "Claire and Sreeram",
        "timing": "Appian decommissioned around February–March 2027, roughly six months; the Appian contract runs out in August"
      },
      {
        "epics": [
          "EP-81"
        ],
        "text": "With the reporting teams, who are building against it, and a lot of fixes are going in to get the data right. Client work is expected around the middle of next month.",
        "owner": "Matteo and Jose",
        "timing": ""
      },
      {
        "epics": [
          "EP-53"
        ],
        "text": "Still to be scoped. It will sit with the new product manager.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-8"
        ],
        "text": "In the same bucket as Counsellor Feedback: still to be scoped.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-56"
        ],
        "text": "Parts are already working and in testing, with machine-learning scores coming back into a couple of portals. Running an A/B test between HubSpot’s built-in model and the existing models to see which is more accurate, so we know whether we can simply rely on HubSpot.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-48"
        ],
        "text": "Still partly scoping, running on a few portals. The blocker is AI credits: HubSpot has agreed a large discount but has to build it into their product, and confirmed this week that it is technically possible.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-47"
        ],
        "text": "Not being worked on at the moment. We are working with Sinorbis and will probably continue to.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-82"
        ],
        "text": "Ongoing and going well. A batch of fixes landed this week and workflows are now running across all portals for communications.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-30"
        ],
        "text": "About one to two months from being business as usual — everything is roughly where it should be, so it is a question of what we want to do next.",
        "owner": "",
        "timing": "Business as usual from January 2027"
      },
      {
        "epics": [
          "EP-40"
        ],
        "text": "In scoping with the new product manager.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-9"
        ],
        "text": "Covered only briefly in the review. Jira now has it as Done.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-49"
        ],
        "text": "Confusion over whether this is already done: everything goes through Jira, but not this Jira. The underlying problem may be that agents use different ticketing systems rather than QS teams. To be picked up separately with Simon.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-67"
        ],
        "text": "Natalie’s work to change the front end. Ongoing.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-71"
        ],
        "text": "On pause until there is time with Natalie.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-64"
        ],
        "text": "Sebastian is redesigning how Canvas flows, the landing pages and the rest. Small changes are going in now, but the bigger plan is unlikely before Christmas: the events season is in full flow and changes are difficult once a season has started.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-69"
        ],
        "text": "Treated as normal ongoing SEO work.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-66"
        ],
        "text": "Understood to be about getting Stars institutions to advertise on Top Universities.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-7"
        ],
        "text": "Released.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-70"
        ],
        "text": "Unclear what this covers; needs a conversation with Natalie.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-85"
        ],
        "text": "Nearly done. Most of it is complete and tested, so it is now a question of the best time to release.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-59"
        ],
        "text": "Being worked through with Amrit.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-68"
        ],
        "text": "About capturing students’ backgrounds and what they have done, rather than personas.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-65"
        ],
        "text": "Commercial work: how we make money from university profiles. Ongoing.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-19"
        ],
        "text": "Live with IBM. A second phase may follow: it was described as optional, but the client wants it and may go elsewhere without it. To be clarified this week, alongside a wider conversation about merging 1 Mentor 2.0 and Career Match.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-34"
        ],
        "text": "Ongoing, with a check-in due with Jonah.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-61"
        ],
        "text": "Really a bug story that Andrew is working on, rather than an initiative; it probably should not be an epic.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-62"
        ],
        "text": "Same as the downloads item — a bug story rather than an initiative. On hold, since the rankings rebuild on QAS is already well progressed.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-63"
        ],
        "text": "Two things in one: QAS Pulse plus Microsoft Clarity, which is already in QAS. Clarity does not suit a highly dynamic application — it takes a single screenshot of a page and assumes everyone saw the same layout, so clicks in the same place can mean completely different things. Closed rather than carried forward.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-73"
        ],
        "text": "A placeholder for the new application IST will use to validate data. It is not the data collection application.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-36"
        ],
        "text": "A roadmap placeholder at this stage.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-25"
        ],
        "text": "Not started, but everything needed is in place and a first cut is expected before the weekend. The idea is that Charlie builds the baseline and Simon’s teams complete it.",
        "owner": "Charlie Liu, then Simon Hall’s teams",
        "timing": "Four to six weeks"
      },
      {
        "epics": [
          "EP-43"
        ],
        "text": "Released. Still outstanding: bringing in a UK-based Auth0 expert for a setup check. A company has been recommended, and it may be combined with an AWS Well-Architected review.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-52"
        ],
        "text": "Product do not know what they want here yet.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-33"
        ],
        "text": "The instinct is to make Factfiles a fully QAS-native application, but the product strategy may not follow — the premium and paid versions are being combined into one. Leave it as it is until product decide; the move could be done quickly if needed.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-15"
        ],
        "text": "Feedback was shared after reviewing Susie’s video, with comments from Jessica, Matteo and Nunzio. Expected to come back in around 12 weeks.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-14"
        ],
        "text": "A placeholder; work may not have started yet.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-38"
        ],
        "text": "Everything else that was in the old MyQS. Internal only, not the public side.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-16"
        ],
        "text": "Being mopped up. The main outstanding ask is a stats screen; anything that belongs in the CX app, such as licence seat counts, will not be rebuilt here. The team is being cut off after the current sprint, with one more sprint only if something is genuinely needed — and the product team warned rather than left to slip work in.",
        "owner": "",
        "timing": "Current sprint ends Wednesday"
      },
      {
        "epics": [
          "EP-18"
        ],
        "text": "Available for Luke to look at, and not very different from HolonIQ today. It has no database of its own: data comes from Sriram’s pipeline into the data layer. If rankings preview is retired, this becomes both the preview and the rankings app.",
        "owner": "Charlie Liu now, then Ecuador to finish with Simon Hall connected to product",
        "timing": "Two to four more weeks with Charlie before handover"
      },
      {
        "epics": [
          "EP-51"
        ],
        "text": "A placeholder for the regional version of the rankings template; equivalents should exist for world and subject rankings.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-55"
        ],
        "text": "Not started. Waiting to see how product respond to the approach of building a working starting point and letting them rearrange charts on screens.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-46"
        ],
        "text": "Anish is implementing Lorenzo’s designs — about a week to skin it, with a feedback pass after the first version, where some pieces will be missing.",
        "owner": "",
        "timing": "About a week to skin"
      },
      {
        "epics": [
          "EP-50"
        ],
        "text": "A more complex version of the rankings app. The strong preference is one common spine that gets modified, rather than five genuinely different applications.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-41"
        ],
        "text": "Monica is looking for someone to build QS One, but needs a product manager, a scope, a business case and a prototype first. Note that QS One already exists in QAS as a permissioning product: being QS One is what grants embargo access.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-72",
          "EP-21",
          "EP-28"
        ],
        "text": "Codex is the data collection system, named by David Patterson. It presents information for users to verify or correct, and is non-mutating — every update is a new entry, so there is full history — with dynamic forms rendered from metadata. Codex itself is the API: storage, retrieval and validation rules, with several front ends on top (institutions, IST validation, data extraction, and potentially AI evaluation, Stars and rankings). It is deliberately generalised so it can collect almost anything. A rough front end and an HTML explainer already exist and have been shared with David Patterson.",
        "owner": "",
        "timing": "Live in Q1 for people to try, fixed in Q2, live in Q3, collecting in Q4, for the collection cycle starting September next year"
      },
      {
        "epics": [
          "EP-87"
        ],
        "text": "Also covers the former CX Admin 2 card, now merged into this one: understanding what customers are doing, who they are and how efficiently they work.",
        "owner": "Jess, Andrea and Leron",
        "timing": ""
      },
      {
        "epics": [
          "EP-84"
        ],
        "text": "Shorthand for isolating that infrastructure so it cannot affect anything else — and ideally not itself either.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-32"
        ],
        "text": "The Cerebrum application and its interaction with skills and AI. A lower priority for the group at the moment.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-77"
        ],
        "text": "Today MyQS is a fairly plain front end. The business is starting to see it as the portal and hub — the prime real estate people land on — and it should be treated that way. Students coming into the environment will need a completely different experience. A question was raised about whether data-layer versioning work belongs here; the supergraph already supports versioning.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-26"
        ],
        "text": "Good momentum. The intention is to take UI people out of the organisation chart and consolidate into Lorenzo, then hire a replacement early next year, with Lorenzo staying about half of next year for overlap. A monthly process with Allison and Bob is planned so brand can feed back without slowing the building-block approach.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-76",
          "EP-78",
          "EP-79"
        ],
        "text": "An infrastructure strategy meeting has been held; the outcome needs distilling into actual tickets. QS Infra Transition is a more formal look at our infrastructure and may be the same thing as MyQS Infra.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-60"
        ],
        "text": "A lower priority. There is both excitement and real nervousness about opening QS data to AI. The main concern is not the upside but exposure — a loose end in authentication or security — so external testers should attack it, ideally as continuous penetration testing rather than a scheduled exercise.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-86"
        ],
        "text": "To come back to, especially versioning rather than just embargo. Embargo dates could live as a table in Cerebrum that every app reads to know when to show data. The open question is whether version control is global or per app: per app lets each one move when it is ready, global keeps everything consistent.",
        "owner": "",
        "timing": ""
      },
      {
        "epics": [
          "EP-20",
          "EP-31"
        ],
        "text": "Released.",
        "owner": "",
        "timing": ""
      }
    ],
    "entries": [
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-80"
        ],
        "phase": "Building",
        "text": "Cyber: Advanced Publisher internal security assessment completed; MoveIN and 1Mentor internal assessments initiated; MoveIN external penetration test concluded with remediation items; 1Mentor penetration test report under review."
      },
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-84"
        ],
        "phase": "Building",
        "text": "Infrastructure: MoveON recovery readiness ahead of the DR exercise; MoveIN BCP exercise completed; replacement Telemaxx MySQL server provisioned; Docker-based JasperReports builds; MoveIN Demo Elasticsearch upgrade."
      },
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-26"
        ],
        "phase": "Building",
        "text": "SYD1: design releases through the reviewed path, three shipped; Rankings Template loading states, entitlement masking and logic fixes."
      },
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-32"
        ],
        "phase": "Building",
        "text": "SYD1: new entity store in production. Data Team: programme mapper completed; data explorer; ranking ingestion; Snowflake and DBT ingestion including Global Student Flows."
      },
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-87"
        ],
        "phase": "Building",
        "text": "SYD1: sign-in switches, Ranking Master account type and access-event search in production; failed user creation reported to the admin and platform team."
      },
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-14"
        ],
        "phase": "Scoping",
        "text": "Data Team (LMI): AI Exposure Framework Layer 1 and 2 pilot; regional guardrails with 2025 employment estimates for 150 countries; OPAL automation; India data sourcing; ILO-based regional scalar bounds validated across 83 countries."
      },
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-15"
        ],
        "phase": "Scoping",
        "text": "Data Team (GSF): Prism second-layer error down about 10% with leakage and year-mixing removed; universities model production forecasts reproduced and retrain checked; government university data for 40 countries; Orb Malaysia and regional rulebook reworks."
      },
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-89"
        ],
        "phase": "Building",
        "text": "MoveIN: AI beta labels, email template walkthrough, email branding controls and latest brand settings in AI emails."
      },
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-85"
        ],
        "phase": "Building",
        "text": "Digital and Events: Drupal 11 tested; the 19 October release ran into an issue and is rescheduled to 21 October."
      },
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-27"
        ],
        "phase": "Prototype",
        "text": "QS Apply: workshop findings consolidated into a master document; technical assessment of migration solutions."
      },
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-54"
        ],
        "phase": "Building",
        "text": "UBS Development: enquiry-form replacements (Keele, RCA, Griffith International, ACU) and ESI replacement (Stirling). QS Apply: migration discovery and technical assessment. Infrastructure: extraction scripts for the HubSpot migration."
      },
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-82"
        ],
        "phase": "Building",
        "text": "Data Team (BI): HubSpot data quality status-history corrections and COI fixes; Synergy2 pipeline flow restored and web-form classification agreed."
      },
      {
        "week": 42,
        "kind": "summary",
        "epics": [
          "EP-88"
        ],
        "phase": "Building",
        "text": "UBS Development: S3 flat file (Griffith International, Edith Cowan University, Brighton), Keystone (RCA signed off, Edith Cowan University in development); LSBU on hold."
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "SYD1",
        "title": "QAS Data Layer",
        "status": "On track",
        "text": "The new entity store is in production: the cutover was rehearsed, checked for parity against staging, and recorded as the runbook for the next one.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-26"
        ],
        "team": "SYD1",
        "title": "Design System",
        "status": "On track",
        "text": "Design releases now go out through the same reviewed path as every other product — three shipped this week; the product is named MyQS consistently everywhere; app cards read correctly to screen readers; the onboarding journey is now measured as product analytics.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-26"
        ],
        "team": "SYD1",
        "title": "Rankings Template",
        "status": "On track",
        "text": "Rankings draw their own loading states, ranks are masked where the account is not entitled, pages make fewer reads, and six logic errors were fixed in a readability pass.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-87"
        ],
        "team": "SYD1",
        "title": "CX",
        "status": "On track",
        "text": "Switches at sign-in, the Ranking Master account type and search of access events by who did them are now in production; when a new user cannot be created, the admin sees the reason and the platform team is told.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "AI Beta labels",
        "status": "",
        "text": "AI features now carry “Beta” labels, setting clearer expectations and reducing support questions.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "Email template walkthrough",
        "status": "",
        "text": "First-time users get a guided tour, helping them adopt the tool faster and produce on-brand emails.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "Email branding controls",
        "status": "",
        "text": "Users can adjust colours, spacing and image cropping themselves, so branding matches faster without technical help.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "Latest brand settings in AI emails",
        "status": "",
        "text": "AI emails now use each client's current logo, images and colours, removing manual rework.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events",
        "title": "Drupal 11",
        "status": "Behind",
        "text": "All tested and ready to go live this Monday. Update 19 October: the release ran into an issue and has been rescheduled to Wednesday 21 October.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-27",
          "EP-54"
        ],
        "team": "QS Apply (Appian)",
        "title": "Consolidation of Workshop Documentation",
        "status": "",
        "text": "Consolidated the documents and findings from stakeholder workshops into a single master document to provide a unified reference for the migration initiative.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-27",
          "EP-54"
        ],
        "team": "QS Apply (Appian)",
        "title": "Technical Solution Assessment",
        "status": "",
        "text": "Met with the Technology team to analyse potential migration solutions, discuss technical considerations, and evaluate the approach for migrating the existing Appian functionality.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "UBS Development",
        "title": "Enquiry form (API) replacements",
        "status": "On track",
        "text": "",
        "bullets": [
          "Keele and RCA have completed testing and are now working on changes for auto ticket creation and the new tag contact association.",
          "Griffith International and ACU have completed changes for auto ticket creation and the new tag contact association, and are now testing the new changes for error notification."
        ]
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "UBS Development",
        "title": "ESI (API) replacements",
        "status": "On track",
        "text": "Stirling development has completed changes for auto ticket creation and the new tag contact association, and is now testing the new changes for error notification.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development",
        "title": "Informatica replacement (S3 Flat File)",
        "status": "On track",
        "text": "",
        "bullets": [
          "Griffith International's replacement is awaiting deployment, pending the API replacement.",
          "Edith Cowan University's replacement has been developed and is waiting for an update from the Client Delivery Manager.",
          "Brighton's replacement has completed development and is now being tested for contact matching and the new tag contact association."
        ]
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development",
        "title": "Informatica replacement (Keystone)",
        "status": "On track",
        "text": "",
        "bullets": [
          "RCA has been signed off. Deployment is pending completion of the API replacement.",
          "The Edith Cowan University BRD has been finalised, and development is underway based on it."
        ]
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development",
        "title": "Informatica replacement (York Integration)",
        "status": "On track",
        "text": "No updates this week for York.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Data & Analytics",
        "title": "Cerebrum",
        "status": "On track",
        "text": "The programme mapper was completed. The domain-oriented data explorer progressed with live taxonomy, geography, institution and rankings data, making Cerebrum content easier to discover and explore. Ranking ingestion was advanced so missing releases can be created without duplicating existing releases. Data Core also moved towards Snowflake- and database-backed ingestion through DBT, and a database access route was established for Global Student Flows. The hackathon produced an initial institution-domain prototype.",
        "bullets": [
          "Risks or dependencies: Courses/programmes review work remains dependent on access to the authoritative review data. The future end-to-end process from ranking production through release into Cerebrum also requires clarification.",
          "Dependencies outside the immediate team: Nicolas Jourdain for database and mapping information and ranking-job validation; wider ranking stakeholders for agreement on the future Cerebrum release process.",
          "Next steps: Resolve access to the courses/programmes review data; validate creation of a missing ranking release; continue Snowflake/DBT ingestion, including Global Student Flows; and define ownership and process for future ranking releases into Cerebrum."
        ]
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-15"
        ],
        "team": "Global Student Flows (GSF)",
        "title": "Prism (subjects model)",
        "status": "On track",
        "text": "About 10% lower error in the second layer: the country-level international student numbers by source country and subject layer now captures how an origin's subject preferences differ by destination, with a separate adjustment for each origin–destination pair. Regional data was leaking into the second layer and inflating its measured accuracy; it has been removed, so results reflect real performance. Each country pair now takes all its subject shares from a single year. This round of improvements also removed repeated steps, which cut one of the steps from about 15 minutes to seconds.",
        "bullets": [
          "Next steps: Rerun Prism with the new government university data and measure the change in outputs."
        ]
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-15"
        ],
        "team": "Global Student Flows (GSF)",
        "title": "Universities model",
        "status": "On track",
        "text": "Rerunning the full pipeline (evaluation, forecasts, university disaggregation) with the production model reproduced the database forecasts exactly; a full refresh takes about 30 minutes, mostly in university disaggregation. The team retrained the model with no change to data or code; the retrained model was saved separately and production was not overwritten. Compared with the database: global total 2027 moved from 9.21M to 9.25M students (at most ±0.4%); large destinations such as the USA in 2027 moved +2.6%; small, data-sparse destinations such as Comoros moved +129%. The team also collected university-level data from government sources for 40 countries, giving an independent source to check QS headcount data against.",
        "bullets": [
          "Risks and dependencies: Small-destination volatility — retrained outputs for data-sparse destinations can shift sharply, so they need a check before any upload.",
          "Next steps: Compare the government data with the QS headcount data. Add the new dataset to the universities model, then rerun the universities and subjects models to measure the change in outputs and decide which source to use in the model finally."
        ]
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-15"
        ],
        "team": "Global Student Flows (GSF)",
        "title": "Orb core model",
        "status": "On track",
        "text": "Malaysia forecasts are being corrected: 2025 year-on-year growth from Kazakhstan, Myanmar, Uzbekistan, Turkmenistan, Kyrgyzstan and Sudan looked anomalous, and the team is reworking Malaysia's historics and forecasts and using application data to confirm which increases are real. The regional rulebook is being made to take effect: the previous implementation did not meaningfully move outputs toward the rulebook's regional shares, so unlocked totals have more room to adjust and can follow those shares.",
        "bullets": [
          "Next steps: Complete the Malaysia rework, using application data to confirm or correct the 2025 increases. Complete the rulebook rework and check that outputs move toward the regional shares."
        ]
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-14"
        ],
        "team": "Labour Market Intelligence (LMI)",
        "title": "AI Framework",
        "status": "In progress",
        "text": "Did a pilot implementation for a few occupations and countries for the Layer 1 and the Layer 2 country localisation methodology for the QS AI Exposure Framework.",
        "bullets": [
          "Plan for next week: Refine the Layer 2 and finalise the indicator list for the Layer 2. Also work on visualising the results to further validate the results."
        ]
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-14"
        ],
        "team": "Labour Market Intelligence (LMI)",
        "title": "Regional Guardrails Buildup",
        "status": "In progress",
        "text": "Evaluated forecasting methods for regional employment guardrails, selecting carry-forward after back testing five alternatives. Tested historical data recency, added reliability flags, and preserved observed 2025 occupation data. Generated 2025 employment estimates for all 150 countries.",
        "bullets": [
          "Plan for next week: Investigate the remaining missing combinations and validate occupation-level employment totals against country-level employment totals."
        ]
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-14"
        ],
        "team": "Labour Market Intelligence (LMI)",
        "title": "OPAL Model Improvements",
        "status": "In progress",
        "text": "Plan for next week: Implementing an automated process of updating countries with deep-dive country outputs.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-14"
        ],
        "team": "Labour Market Intelligence (LMI)",
        "title": "Country Mapping & Research",
        "status": "In progress",
        "text": "Working on India LMI Data — Data Sourcing, Crosswalks.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-14"
        ],
        "team": "Labour Market Intelligence (LMI)",
        "title": "Forecasting",
        "status": "In progress",
        "text": "Regional sectoral scalar bounds (ILO-based).",
        "bullets": [
          "Sub-Saharan Africa: Finished SSA's calibration and end-to-end testing on the Nigeria country file.",
          "LATAM and Caribbean: Finished the raw data checks, build and region-specific calibration, and tested on the Brazil, Colombia, and Mexico country files.",
          "Full validation across all three regions: Ran a systematic check of the bounds on every country in the ECA, SSA, and LATAM pools (83 countries). None breached the +15%/−9% occupation-level ceiling."
        ]
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-82"
        ],
        "team": "Business Intelligence (BI)",
        "title": "HubSpot Data Quality",
        "status": "At risk",
        "text": "Status-history correction work remains incomplete and requires validation across the remaining student stages. Missing intake and faculty issues on COIs were being addressed; missing COI loads and date-entered inquiry cases remain under review. Web forms will be classified as communications in the Contact Source or Tag History structure. Initial web-form migration will prioritise Stirling, Griffith International and King's, followed by QA before wider rollout.",
        "bullets": [
          "Watch: Client-facing trend reporting remains exposed until the remaining history corrections and migration QA are complete."
        ]
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-82"
        ],
        "team": "Business Intelligence (BI)",
        "title": "Synergy2 Optimisation",
        "status": "On track",
        "text": "Synergy2 pipeline flow was restored after the 12 October issue. Web forms will be classified as Communications with a Webform category and submission date. Historical and newly created web forms will be migrated into the agreed structure, beginning with priority portals. Calls and emails remain activity-based; inbound WhatsApp, live chat, WeChat and similar channels will generally use tickets. The earliest contact source remains primary, with first inbound communication as a fallback when no source exists.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "MoveON – Advanced Publisher security assessment",
        "status": "Done",
        "text": "Completed the internal security assessment for MoveON – Advanced Publisher and shared the final report with relevant stakeholders.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "MoveIN and 1Mentor internal security assessments",
        "status": "In progress",
        "text": "Initiated internal security assessments for MoveIN and 1Mentor. Kick-off meetings are being arranged to formally commence the assessment activities.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "MoveIN external penetration test",
        "status": "Done",
        "text": "External penetration testing has concluded, the final report has been distributed, and Jira remediation items have been created to drive identified findings through to resolution.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "1Mentor external penetration test",
        "status": "In progress",
        "text": "Received the web application penetration testing report and commenced Cybersecurity review of the findings.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO (MoveON and MoveIN)",
        "title": "MoveON recovery automation",
        "status": "",
        "text": "Improved provisioning and restoration automation during recovery preparation, including EFS configuration, server hardening, database-backup fixes and rsync restoration. Resolved login issues and identified further deployment inconsistencies.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO (MoveON and MoveIN)",
        "title": "JasperReports builds",
        "status": "",
        "text": "Standardised Docker-based JasperReports builds, validated report rendering and documented release retention and rollback procedures.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO (MoveON and MoveIN)",
        "title": "Telemaxx MySQL replacement",
        "status": "",
        "text": "Provisioned the replacement Telemaxx MySQL server as part of the EOL migration initiative.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO (MoveON and MoveIN)",
        "title": "MoveIN BCP exercise",
        "status": "",
        "text": "Completed the BCP exercise; recovery documentation is being finalised.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO (MoveON and MoveIN)",
        "title": "MoveIN Demo Elasticsearch upgrade",
        "status": "",
        "text": "Upgraded Demo Elasticsearch from 7.13 to 7.17.2 alongside the underlying OS, and created an Ansible playbook for repeatable installation and recreation.",
        "bullets": []
      },
      {
        "week": 42,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "UBS",
        "title": "UAT FSx and HubSpot extraction",
        "status": "",
        "text": "Progressed UAT FSx configuration and updated extraction scripts for the HubSpot migration.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-80"
        ],
        "phase": "Prototype",
        "text": "Cyber: Box posture review, GRC platform selection, third-party risk management, endpoint vulnerability reduction. SYD1: tamper-evident admin action record and compliance feed."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-84"
        ],
        "phase": "Scoping",
        "text": "Infrastructure: MoveON MySQL 8.4 cluster and Telemaxx migrations, Redis/Memcached containerisation, SSL automation; MoveIN Elasticsearch test environment and client SSO."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-26"
        ],
        "phase": "Building",
        "text": "SYD1: instant account switching, Ranking Master accounts labelled Primary, rankings board insights in production, two design releases."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-87"
        ],
        "phase": "Building",
        "text": "SYD1: CX bulk user import in production, HolonIQ export activity in the access feed, embargo-dates page live behind its switch."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-95"
        ],
        "phase": "Building",
        "text": "SYD1: single reviewed release pipeline for every front end; six production apps moved to code-managed; first release flags live in production."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-18"
        ],
        "phase": "Prototype",
        "text": "SYD1: data graph can rank entities other than institutions; safer table-scoped data moves between environments."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-93"
        ],
        "phase": "Prototype",
        "text": "SYD1: HolonIQ hardened and monitored; WUR Highlights shows nomination sources."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-19"
        ],
        "phase": "Building",
        "text": "ECU1/ECU2: release 74.27.7 (IBM login page text and legal disclaimer); job title recommendation fix with QA."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-25"
        ],
        "phase": "Building",
        "text": "SYD1: pre-computed aggregates in the governed serving layer; first staging-to-production promotion."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-46"
        ],
        "phase": "Building",
        "text": "BLR2: MyQS Stars shows the latest audit by subscription date; AI Insights panel hidden while being finalised."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-89"
        ],
        "phase": "Building",
        "text": "MoveIN: AI brand detection and template tools, email brand compliance, AI usage reporting, feature prompts, guided contact matching."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-94"
        ],
        "phase": "Building",
        "text": "BLR2: video tutorials, more accurate profile analytics, unified interest dashboard, contributor permissions, Plan & Usage refresh; QA in progress."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-27"
        ],
        "phase": "Building",
        "text": "QS Apply: Appian migration documentation review and consolidation."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-85"
        ],
        "phase": "Building",
        "text": "Digital and Events: TU performance changes awaiting release; Drupal 11.4.8 in testing. Infrastructure: PHP 8.4 and Drupal 11.4.8 across TU and TM non-production."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-54"
        ],
        "phase": "Building",
        "text": "UBS Development: enquiry-form and ESI replacements (Keele, RCA, Griffith, ACU, Stirling). QS Apply: migration documentation."
      },
      {
        "week": 40,
        "kind": "summary",
        "epics": [
          "EP-88"
        ],
        "phase": "Building",
        "text": "UBS Development: Informatica replacements via S3 flat file (Griffith, ECU, Brighton, Stirling), Keystone (RCA, ECU) and York."
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-95"
        ],
        "team": "SYD1",
        "title": "Release flags",
        "status": "On track",
        "text": "Features can be switched on or off for staff and customers without a new release; every switch is audited, a revert was rehearsed in staging before the first production change, and the first two switches are live in production.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-95"
        ],
        "team": "SYD1",
        "title": "Release pipeline",
        "status": "On track",
        "text": "Every QS front end ships from one reviewed pipeline: builds are identical wherever they run, each release records exactly what was tested, old tabs refresh themselves, and six production apps moved from hand-managed to code-managed with a written release and rollback procedure.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-26"
        ],
        "team": "SYD1",
        "title": "Design System and MyQS",
        "status": "On track",
        "text": "Switching accounts in any QS app is now instant and shows which products each account opens; Ranking Master accounts are labelled Primary; after accepting an invitation the new account appears at once and administration menus follow the shell’s access rules; rankings board insights and the template’s overview readings reached production; two design releases rolled out to every app.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-25"
        ],
        "team": "SYD1",
        "title": "Alumni Insight",
        "status": "On track",
        "text": "Answers every question from pre-computed aggregates instead of crunching in the browser, and its data sits in the governed serving layer alongside rankings; the first staging-to-production promotion went through.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-18"
        ],
        "team": "SYD1",
        "title": "QS Supergraph and Data Layer",
        "status": "On track",
        "text": "Rankings in the data graph can now rank entities other than institutions, and moving data between environments is safer: table-scoped, locked against concurrent writers, and rehearsed on a clone before production.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-93"
        ],
        "team": "SYD1",
        "title": "HolonIQ / HolonOS",
        "status": "On track",
        "text": "HolonIQ on the QS estate is hardened and monitored — secure-by-default connections, alarms on every environment, slow queries capped in production; WUR Highlights shows where academic and employer nominations come from; HolonIQ exports now appear in QS’s compliance feed; the legacy regional export is kept off production.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-87"
        ],
        "team": "SYD1",
        "title": "CX",
        "status": "On track",
        "text": "CX admins can bulk-import users in production, see HolonIQ export activity in the access feed, and the embargo-dates page is live behind its switch.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "SYD1",
        "title": "Compliance and Pulse",
        "status": "On track",
        "text": "QS now keeps one tamper-evident record of every administrative action across its cloud estate, and feature-switch changes and HolonIQ exports flow into the compliance feed.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-94"
        ],
        "team": "BLR2",
        "title": "Partner Discovery",
        "status": "On track",
        "text": "Added a Video Tutorials library inside Partner Discovery so institutions can learn how to use the module without leaving the page. Made profile analytics meaningfully more accurate: visits from an institution’s own staff no longer inflate the numbers, visits to shared public profile pages are now counted, shared links are clearly labelled as shared visits with the sender’s search details stripped out, and each visit source has a clearer explanation on the dashboard. Simplified the analytics dashboard by removing low-use tiles and ranked lists. Added expired partnerships to the partnership map and activity view so institutions can see their full partnership history. Consolidated interest management into a single activity dashboard so users have one place to track incoming and outgoing interest, with previously shared links continuing to work. Gave contributors the same ability as administrators to view and filter across all institution opportunities, while keeping unpublished opportunity details hidden until they go live. Refreshed the Plan & Usage overview with clearer labels, published-opportunity counts, and visual cues for features that are not available on the current plan. Improved the reliability of opportunity links so they open correctly regardless of institution or opportunity name. QA closed out testing of Profile Analytics and Video Tutorials and is now deep into testing of the broader Partner Discovery improvements (contributor permissions, filters, visibility, UI and navigation, image and placeholder handling, portfolio visibility, view-count logic, admin-only analytics, and Plan & Usage).",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-46"
        ],
        "team": "BLR2",
        "title": "MyQS",
        "status": "On track",
        "text": "Fixed data correctness across MyQS Stars so every institution now sees the most recent audit, including the right indicator-level data based on their subscription history — closing a gap where some renewed or re-audited institutions were still being shown older audit data. Hid the in-progress AI Insights panel in the Stars Category Deep Dive so users only see finished, reviewed content while that feature is being finalised. Shipped the first slice of the regional ranking dashboards work: the Ranking Performance Summary now orders tied ranks consistently (best score first), presents a cleaner and more intuitive “institutions surpassed” percentage, and shows the correct totals, student, academic and faculty figures for the 2027 Arab region.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-19"
        ],
        "team": "ECU1 and ECU2",
        "title": "",
        "status": "",
        "text": "Bug: getJobTitleRecommendationByMajorIds without limited occupations (IBM).",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "AI Brand and Template Tools",
        "status": "",
        "text": "new AI capabilities automatically detect an institution’s brand style from its website and speed up email campaign creation, helping teams produce on-brand communications with less manual work.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "Email Quality and Brand Compliance",
        "status": "",
        "text": "outgoing emails now maintain consistent, professional branding automatically, reducing manual formatting corrections.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "AI Usage Visibility",
        "status": "",
        "text": "administrators can now see clear, easy-to-read reports of AI usage, supporting better oversight and planning.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "Feature Awareness",
        "status": "",
        "text": "new in-app prompts introduce first-time users to the AI email tools, encouraging adoption.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "Guided Contact Matching",
        "status": "",
        "text": "a new step-by-step walkthrough helps users complete automated contact matching more easily, which should reduce support requests.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events",
        "title": "TU Performance investigation",
        "status": "Ready for release",
        "text": "Last batch of changes is waiting release.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events",
        "title": "Drupal 11",
        "status": "On track",
        "text": "A decision has been made to upgrade to a higher version, so instead of 11.3.16 the plan is now to upgrade to Drupal 11.4.8. All non-prod environments have been upgraded and testing is under way.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-54",
          "EP-27"
        ],
        "team": "QS Apply (Appian)",
        "title": "Migration documentation",
        "status": "In progress",
        "text": "The team continues to review and consolidate the migration documentation, based on the findings and information gathered during the discovery phase.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "UBS Development",
        "title": "Enquiry form (API) replacements",
        "status": "On track",
        "text": "Replacements for Keele and RCA are ready for testing. Griffith and ACU are undergoing changes for auto ticket creation.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "UBS Development",
        "title": "ESI (API) replacements",
        "status": "On track",
        "text": "Stirling development work is still under way, as the data mapping discussion is ongoing with CDM.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development",
        "title": "Informatica replacement (S3 flat file)",
        "status": "On track",
        "text": "",
        "bullets": [
          "Griffith’s replacement is awaiting deployment, pending the API replacement.",
          "ECU’s replacement has been developed and is undergoing testing by CDM.",
          "Brighton’s replacement has been developed and is awaiting testing.",
          "Stirling development work is still under way, in parallel with the ESI work, as the data mapping discussion is ongoing with CDM."
        ]
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development",
        "title": "Informatica replacement (Keystone)",
        "status": "On track",
        "text": "RCA and ECU have been fixed in the sandbox environment following testing and are now ready for validation.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development",
        "title": "Informatica replacement (York Integration)",
        "status": "On track",
        "text": "Continued working on the Informatica York Integration to pull data from Dynamics after adding the deposit status column.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "Box security posture review",
        "status": "",
        "text": "Completed a further round of Box stakeholder discovery sessions. Initial findings have identified additional business stakeholders and use cases requiring consultation before recommendations can be finalised. The programme is also managing its first business challenge arising from previously implemented changes, highlighting the sensitivity and complexity of reducing risk in a heavily embedded platform.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "GRC platform procurement",
        "status": "",
        "text": "Concluded the Drata proof of value and requested commercial pricing aligned to the agreed scope. Commercial proposals have also been received from Hyperproof, allowing the GRC platform assessment to progress into commercial and vendor comparison activities.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "Third-Party Risk Management programme",
        "status": "",
        "text": "Procurement engaged the preferred vendor, UpGuard, to progress Third-Party Risk Management capabilities. This initiative remains a key enabler for establishing a more mature vendor onboarding and risk assessment process before the end of the year.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "Endpoint vulnerability reduction programme",
        "status": "",
        "text": "Continued working with Corporate IT to reduce vulnerabilities across the QS endpoint fleet using CrowdStrike. Open vulnerabilities have been reduced from approximately 500,000 to 200,000, representing significant progress in reducing organisational risk exposure.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO",
        "title": "",
        "status": "",
        "text": "Migrated Advanced Publisher staging from standalone MySQL to the new cluster and addressed the AWS NFS bottleneck.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO",
        "title": "",
        "status": "",
        "text": "Migrated 30 Telemaxx instances to MySQL 8.4.7; remaining migrations are planned over the weekend with scheduled downtime.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO",
        "title": "",
        "status": "",
        "text": "Completed Redis/Memcached container migration in France and Telemaxx, including application integration and monitoring. Deployed containerised SMTP across Demo, AWS London, AWS Lite and AWS Canada.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO",
        "title": "",
        "status": "",
        "text": "Successfully tested and enabled scheduled SSL renewal in staging. Merged reusable provisioning prerequisites and implemented locally tested certificate bootstrap for replacement servers.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO",
        "title": "",
        "status": "",
        "text": "Completed France onsite/offsite backup snapshot synchronisation, expanded Cloudflare protection and increased memory on affected web servers following out-of-memory incidents.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO",
        "title": "",
        "status": "",
        "text": "Prepared the Demo Elasticsearch cluster with upgraded OS and Elasticsearch versions for validation.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO",
        "title": "",
        "status": "",
        "text": "Completed SSO configuration for a new client, enabling authentication through its organisation.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Cerebrum core platform"
        ],
        "team": "Data Team",
        "title": "Cerebrum core platform",
        "status": "ON TRACK",
        "text": "Institution identity now read from platform registry; false merge-reviews cut from 2,037 to 633 genuine cases + 51 contradictions. Rankings producer reached first bundle. Blocker: Genuine review queues need steward decisions; supersession can be read but not yet recorded.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Taxonomies, Student Flows & Employability"
        ],
        "team": "Data Team",
        "title": "Taxonomies, Student Flows & Employability",
        "status": "ON TRACK",
        "text": "Programme-to-subject mapper deployed to AWS Lambda/Bedrock; Job Posting ingestion moved into active work. Blocker: Subject-level national mappings need explicit crosswalks into the QS taxonomy.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "OnePerson & Student Data Transformation"
        ],
        "team": "Data Team",
        "title": "OnePerson & Student Data Transformation",
        "status": "ON TRACK",
        "text": "QS Apply and Appian added as sources; People Data Labs scoping under way; linked to Cerebrum direction. Blocker: PDL field/version choice and Appian–QS Apply–HubSpot overlap still unresolved.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Data Platform Governance & Migration"
        ],
        "team": "Data Team",
        "title": "Data Platform Governance & Migration",
        "status": "ON TRACK",
        "text": "Most Data Science repos moved GitLab→GitHub; Prefect IaC documentation and replica ENROL stack under way. Blocker: Several dbt projects still rely on personal credentials in CI pending service-account access.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "ENROL & Unified Modelling"
        ],
        "team": "Data Team",
        "title": "ENROL & Unified Modelling",
        "status": "ON TRACK",
        "text": "First model sign-off reporting workflow delivered; course-of-interest models next. Blocker: Jiun left this week after handover — reduced continuity on modelling; UBS data quality remains a dependency.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Aurora / Synergy2 / UBS Data Quality"
        ],
        "team": "Data Team",
        "title": "Aurora / Synergy2 / UBS Data Quality",
        "status": "AT RISK",
        "text": "Synergy2 TEST environment live for BI; Deferred/Declined journeys backfilled; comms-direction fixes shipped. Blocker: Persistent UBS defects (course-of-interest, engagements, dates); root cause vs. repair still unclear.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Data-Led Engagement Pilot (University of London)"
        ],
        "team": "Data Team",
        "title": "Data-Led Engagement Pilot (University of London)",
        "status": "AT RISK",
        "text": "Campaign build complete; Stirling lined up as the next campaign. Blocker: reduced delivery cover during the week — 5 Oct launch likely slips a few days.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Client Reporting Portal (Power BI)"
        ],
        "team": "Data Team",
        "title": "Client Reporting Portal (Power BI)",
        "status": "ON TRACK",
        "text": "Greenlight session booked 7 Oct ahead of 16 Oct access target; Sean Coffey's MVP review positive. Blocker: Client user list from AM/CD still outstanding — needed for IT whitelisting and RLS encoding.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Reconciliation Process (interim)"
        ],
        "team": "Data Team",
        "title": "Reconciliation Process (interim)",
        "status": "AT RISK",
        "text": "VW_RECON_RESULT built in Synergy2; Griffith interim list due 7 Oct. Blocker: Huble has stepped back (contract ends 14 Oct) after QS declined 12 extra hours — no vendor fallback; recon scrutiny tied to the GBP 2m budget gap.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Data Loading Efficiencies & Automation"
        ],
        "team": "Data Team",
        "title": "Data Loading Efficiencies & Automation",
        "status": "OFF TRACK",
        "text": "Contact Matching v2 running across all clients; historical source-tag migration nearly complete. Blocker: KCL transformation workflow missed its 30 Sep go-live and still depends on Simon — no revised date committed.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Tableau Offboarding & Fabric Transition"
        ],
        "team": "Data Team",
        "title": "Tableau Offboarding & Fabric Transition",
        "status": "ON TRACK",
        "text": "Non-renewal notice issued 28 Sep; scoping sent to Consulting/Insights/infra (responses due 16 Oct). Blocker: Consulting's early ask (~50 licences + Server) exceeds the desktop-only notice scope — needs a decision.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "MyQS 2.0 Client Application"
        ],
        "team": "Data Team",
        "title": "MyQS 2.0 Client Application",
        "status": "ON TRACK",
        "text": "Stirling prototype expected mid-Nov–early Dec. Blocker: Full build/launch now estimated ~Q2 2027 (pending prototype review).",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "CE Digital Transformation & PBI Migration"
        ],
        "team": "Data Team",
        "title": "CE Digital Transformation & PBI Migration",
        "status": "ON TRACK",
        "text": "Supporting lead-scoring model and B2B/B2C funnel work with Natalie's team. Blocker: Remaining Tableau→Power BI migration tied to the 22 Jan 2027 deadline.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Wider QS Intelligence (Project Compass)"
        ],
        "team": "Data Team",
        "title": "Wider QS Intelligence (Project Compass)",
        "status": "ON HOLD",
        "text": "Groundwork complete (ISS, Rankings, GSF walkthroughs); concept previewed to the business. Blocker: Paused for capacity (client access, end of cycle, HubSpot); no restart date yet.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Support Salary Data"
        ],
        "team": "Data Team",
        "title": "Support Salary Data",
        "status": "AT RISK",
        "text": "Passed PDL's refreshed inferred salary field (with min/max ranges) to LMI; reviewed current LMI wage data against job titles. Blocker: Next steps for the project are pending direction.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Rankings Modelling — Alumni Impact & Career Alignment"
        ],
        "team": "Data Team",
        "title": "Rankings Modelling — Alumni Impact & Career Alignment",
        "status": "ON TRACK",
        "text": "Restructured to Sam's new spec; subject standardisation, seniority and skill-complexity modelling complete; full indicator modelling begins next sprint. Blocker: Still confirming the primary data source for each Alumni Impact list.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Snowflake Migration (Employability)"
        ],
        "team": "Data Team",
        "title": "Snowflake Migration (Employability)",
        "status": "ON TRACK",
        "text": "Raw/processed GCP pipeline finalised for profile datasets; same approach being extended to job postings.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Subject Taxonomy & Standardization"
        ],
        "team": "Data Team",
        "title": "Subject Taxonomy & Standardization",
        "status": "ON TRACK",
        "text": "v2.1 shared for sign-off; Studyportals and UBS mappings finalised and sent for review; service moving into GitHub. Blocker: v3 still needs to close parent-child mapping gaps.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Job Title Taxonomy"
        ],
        "team": "Data Team",
        "title": "Job Title Taxonomy",
        "status": "AT RISK",
        "text": "QSIDs now in hand for the migration. Blocker: Migration delayed until the current mining run concludes — no revised date yet.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Alumni Platform"
        ],
        "team": "Data Team",
        "title": "Alumni Platform",
        "status": "ON TRACK",
        "text": "Migrated Snowflake profile datasets handed to Charlie; analytics being restructured to serve consulting and platform needs. Blocker: Awaiting clarity on whether infrastructure/datasets are managed in-house.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Subjects Model & IPF Seed"
        ],
        "team": "Data Team",
        "title": "Subjects Model & IPF Seed",
        "status": "ON TRACK",
        "text": "Major milestone: university-by-subject data collected for 26 countries (2.5m students), matched to 2,200 of 3,789 QS-ranked universities. Blocker: Relies on Diego's programme mapper; South Asia/India coverage under 20% will lean on modelling, not real data.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "ORB Core Model, Data Releases & QA"
        ],
        "team": "Data Team",
        "title": "ORB Core Model, Data Releases & QA",
        "status": "ON TRACK",
        "text": "New gap-filling methods tested; test run complete with revised global totals; India 2023–24 updated, Eurostat/Europe update started; tier 1 QA checks defined. Blocker: A bug reducing 2024 country totals for several European countries needs fixing; India 2025 remains an estimate pending official data.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "RAG News Signal Pipeline"
        ],
        "team": "Data Team",
        "title": "RAG News Signal Pipeline",
        "status": "ON TRACK",
        "text": "Country-sources pipeline rebuilt to match the international design; 21 country-level news sources now parsed alongside GDELT. Blocker: Source quality/licensing and noise from low-quality stories still need clear signal-acceptance rules.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "AI Automation & Augmentation Framework"
        ],
        "team": "Data Team",
        "title": "AI Automation & Augmentation Framework",
        "status": "ON TRACK",
        "text": "Layer 1 baseline scores complete; Layer 2 v1 implemented but found six structural problems in testing; v2 occupation-specific redesign planned. Blocker: v2 needs real AI-usage data to calibrate adjustments and test against independent adoption evidence.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Growth Rate Modelling (4 forecasting projects)"
        ],
        "team": "Data Team",
        "title": "Growth Rate Modelling (4 forecasting projects)",
        "status": "ON TRACK",
        "text": "24 country workbooks rebuilt on the new CAGR methodology (review under way); ECA/SSA regional bounds built and being tested. Blocker: CAGR validation checks and penetration scoring are still early-stage, with several cross-project dependencies.",
        "bullets": []
      },
      {
        "week": 40,
        "kind": "item",
        "epics": [
          "Wages Estimation"
        ],
        "team": "Data Team",
        "title": "Wages Estimation",
        "status": "ON TRACK",
        "text": "2025 median wage estimates complete for 22 of 24 countries; occupational tag rebuild under way. Blocker: US 2025 revalidation awaiting latest BLS data; Canada and Spain estimates still in progress.",
        "bullets": []
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "UpGuard upgrade procurement"
        ],
        "team": "Cyber",
        "title": "UpGuard upgrade procurement",
        "status": "Moving slowly",
        "text": "Procurement of the UpGuard upgrade continued with only incremental updates, and there is budget for the purchase that may be reallocated if delays extend."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Wiz acquisition"
        ],
        "team": "Cyber",
        "title": "Wiz acquisition",
        "status": "Moving slowly",
        "text": "Procurement activity for acquiring Wiz continued alongside UpGuard as a key enabler for QS’s cloud security capability."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Drata GRC platform evaluation"
        ],
        "team": "Cyber",
        "title": "Drata GRC platform evaluation",
        "status": "Delayed",
        "text": "Discussions regarding Drata were delayed due to stakeholder availability constraints, but the project remains active and will resume once key participants are available."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Box security posture review"
        ],
        "team": "Cyber",
        "title": "Box security posture review",
        "status": "Discovery continuing",
        "text": "Additional discovery sessions were held with the Marketing and Creative teams to understand business processes, content-sharing requirements and the impact of potential security changes, with recommendations to be refined for the CISO."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "External security posture remediation"
        ],
        "team": "Cyber",
        "title": "External security posture remediation",
        "status": "A-tier regained",
        "text": "Work with multiple teams on externally visible security issues and vulnerabilities contributed to QS regaining its A-tier rating with external cybersecurity risk-scoring providers."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Trust Centre publication (MoveON HECVAT)"
        ],
        "team": "Cyber",
        "title": "Trust Centre publication (MoveON HECVAT)",
        "status": "In preparation",
        "text": "Outstanding items in the MoveON HECVAT questionnaire continued to be reviewed and documented as part of preparing to publish the Trust Centre internally."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Secure Linux-managed workstation model"
        ],
        "team": "Cyber",
        "title": "Secure Linux-managed workstation model",
        "status": "Proved; to be documented",
        "text": "Rebuilding Rowan’s laptop with Ubuntu 26 LTS, Secure Boot, TPM-backed encryption and Entra ID authentication (AuthD + MS Broker) proved a secure Linux-managed workstation model that may be valuable for Corporate IT, and the approach will be documented and shared."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-80"
        ],
        "phase": "Building",
        "text": "Cyber: UpGuard and Wiz procurement, Drata evaluation, Box posture review, external posture remediation (A-tier regained), MoveON HECVAT for the Trust Centre."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-84"
        ],
        "phase": "Building",
        "text": "Infrastructure: MoveON and MoveIN DR environments ahead of the BCP/DR exercises; Telemaxx MySQL 8.4 cluster migration; Jasper container in staging; container image retention."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-26"
        ],
        "phase": "Building",
        "text": "SYD1: Rankings Template new design live; rankings board loading states, paging and sorting; resizable heatmap columns."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-32"
        ],
        "phase": "Building",
        "text": "SYD1: institution registry in the QS Supergraph on staging and production. Data Team: Courses live; Awards, Skills, Student Flows and Alumni released as governed datasets; Rankings flowing by region; OnePerson roadmap completed."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-87"
        ],
        "phase": "Building",
        "text": "SYD1: access-event search by actor, Ranking Master in the account type picker, switches read at sign-in."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-95"
        ],
        "phase": "Building",
        "text": "SYD1: first two production release flags live; shared release checks across all front ends; release and rollback procedure written down."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-18"
        ],
        "phase": "Building",
        "text": "SYD1: rankings carry a category that drives visibility; zero-downtime data publishing."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-25"
        ],
        "phase": "Building",
        "text": "SYD1: Alumni Insight institution ids aligned with the registry."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-89"
        ],
        "phase": "Building",
        "text": "MoveIN: AI Usage Dashboard; AI beta labels, template walkthrough, branding controls and latest brand settings through UAT."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-15"
        ],
        "phase": "Scoping",
        "text": "Data Team (GSF): Prism subjects model rebuilt; ORB ratio gap-filling, revised global totals, Baltic forecasts and Tier 4 QA checks."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-14"
        ],
        "phase": "Scoping",
        "text": "Data Team (LMI): AI Exposure Framework Layer 2 localisation; penetration-scoring indicators finalised; country clustering narrowed to 60 indicators; regional guardrails and country mapping."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-94"
        ],
        "phase": "Release Planning",
        "text": "BLR2: one opportunity visibility rule across roles, consistent ownership filters, single interest view; QA completed."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-27"
        ],
        "phase": "Prototype",
        "text": "QS Apply: current-state Appian process flow diagrams and consolidated pain points."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-85"
        ],
        "phase": "Building",
        "text": "Digital and Events: TU homepage performance and Drupal clean-up released; Drupal 11 production upgrade postponed. Infrastructure: PHP 8.4 and Drupal 11.4.8 in TU and TM prelive."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-54"
        ],
        "phase": "Building",
        "text": "UBS Development: enquiry-form replacements (Keele, RCA, Griffith International, ACU) and ESI replacement (Stirling). QS Apply: migration discovery documentation."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-82"
        ],
        "phase": "Building",
        "text": "Data Team: 313,000 unparseable intake rows identified across six institutions; audit rules extended; Synergy2 fixes and journey history released."
      },
      {
        "week": 41,
        "kind": "summary",
        "epics": [
          "EP-88"
        ],
        "phase": "Building",
        "text": "UBS Development: S3 flat file (Griffith International, Edith Cowan University, Brighton), Keystone (RCA signed off, Edith Cowan University) and York integration."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "SYD1",
        "title": "QS Supergraph",
        "status": "On track",
        "text": "The institution registry is now part of the QS data graph on both staging and production, so every app can ask one place for institutions, rankings and reputation together; the embargo list is readable by QS administrators only."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-18",
          "EP-25"
        ],
        "team": "SYD1",
        "title": "QAS Data Layer",
        "status": "On track",
        "text": "Publishing new data to production now interrupts users for seconds rather than ten minutes; rankings carry a category that drives who may see them; Alumni Insight’s institution ids are aligned with the registry; the old loading path is retired so there is one way in."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-95"
        ],
        "team": "SYD1",
        "title": "Release flags",
        "status": "On track",
        "text": "The first two production switches are live (CX embargo dates and bulk import), a revert was rehearsed in staging first, and CX now learns its switches at sign-in so a flip needs no release."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-95"
        ],
        "team": "SYD1",
        "title": "Release pipeline",
        "status": "On track",
        "text": "Every QS front end now runs the same release checks and records each production release; every connection to QS services requires modern encryption; the production release and rollback procedure is written down."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-26"
        ],
        "team": "SYD1",
        "title": "Design System and Rankings Template",
        "status": "On track",
        "text": "The Rankings Template’s new design is live — focus view, highlights overview, index by indicator, indicator view and the institution panel; the rankings board shows loading states card by card and its tables page and sort from source; the heatmap’s columns can be resized; MyQS opens on the account band in production."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-87"
        ],
        "team": "SYD1",
        "title": "CX",
        "status": "On track",
        "text": "CX admins can search access events by who did them, choose Ranking Master in the account type picker (locked where it cannot be set), and the app reads its feature switches at sign-in."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-94"
        ],
        "team": "BLR2",
        "title": "Partner Discovery",
        "status": "On track",
        "text": "Unified opportunity visibility across roles: all users including admins see every published opportunity at their institution, while drafts/unpublished stay visible only to creators or linked users. “Mine”, “Linked” and “All” ownership filters now apply consistently across roles. Added “all” toggle on institution profile for contributors. Consolidated incoming/outgoing interest views into a single section. Refined plan usage view and institution banner. Tidied up navigation so menu items appear for the right users."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-94"
        ],
        "team": "BLR2",
        "title": "QA",
        "status": "On track",
        "text": "Completed Partner Discovery improvements testing (contributor permissions, filters, opportunity visibility, UI/navigation, image/placeholder handling, portfolio visibility, view-count logic, admin-only analytics, Plan & Usage), MyQS regression testing, and Live sanity testing."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "AI Usage Dashboard",
        "status": "",
        "text": "dashboard delivered, showing per-client usage, result quality and cost in $/£, with export for client and executive reporting."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "AI Beta Labels",
        "status": "On track",
        "text": "“Beta” labels on the AI features set clearer expectations and should reduce support questions."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "AI Email Template Walkthrough",
        "status": "On track",
        "text": "a guided walkthrough for first-time users should speed adoption and on-brand results."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "Email Branding Controls",
        "status": "On track",
        "text": "users can adjust email colours, spacing and image cropping themselves, so branding matches faster without technical help."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "title": "Latest Brand Settings in AI Emails",
        "status": "On track",
        "text": "AI emails now pick up each client’s latest logo, images and brand colours, removing manual rework."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events",
        "title": "Drupal clean-up",
        "status": "Released",
        "text": ""
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events",
        "title": "TU Homepage Performance",
        "status": "Released",
        "text": ""
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events",
        "title": "Drupal 11",
        "status": "Postponed",
        "text": "A decision has been made to postpone the upgrade; there were minor UI issues that were reported and needed fixing. When the team reached the cut-off date, it felt this would be risky."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-27",
          "EP-54"
        ],
        "team": "QS Apply (Appian)",
        "title": "Current-State Process Mapping",
        "status": "",
        "text": "created flow diagrams to document the existing Appian processes and functionality, supporting the migration analysis."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-27",
          "EP-54"
        ],
        "team": "QS Apply (Appian)",
        "title": "Pain Point Consolidation",
        "status": "",
        "text": "consolidated the pain points captured during stakeholder workshops into a single document to facilitate review, prioritisation, and future-state planning."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "UBS Development",
        "title": "Enquiry form (API) replacements",
        "status": "On track",
        "text": "",
        "bullets": [
          "Identified and fixed the error when promoting Contact Matching from production to sandbox.",
          "Keele and RCA have completed testing and are undergoing changes based on QA.",
          "Griffith International and ACU have completed changes for auto ticket creation and the new tag contact structure. They are now undergoing changes for data reference error notification."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "UBS Development",
        "title": "ESI (API) replacements",
        "status": "On track",
        "text": "Stirling development work has been completed and tested. It is now undergoing changes for auto ticket creation and the new tag contact structure."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development",
        "title": "Informatica replacement (S3 Flat File)",
        "status": "On track",
        "text": "",
        "bullets": [
          "Griffith International’s replacement is awaiting deployment, pending the API replacement.",
          "Edith Cowan University’s (ECU) replacement has been developed and is waiting for an update from the Client Delivery Manager (CDM).",
          "Brighton’s replacement has completed testing and is undergoing changes based on QA feedback."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development",
        "title": "Informatica replacement (Keystone)",
        "status": "On track",
        "text": "",
        "bullets": [
          "RCA has been signed off. Deployment is pending completion of the API replacement.",
          "ECU has been fixed in the sandbox environment following testing and is waiting for an update from the CDM."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development",
        "title": "Informatica replacement (York Integration)",
        "status": "On track",
        "text": "Continued working on the Informatica York Integration to pull data from Dynamics, following new data mappings agreed in discussion with Mohit and Sean."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Data & Analytics",
        "title": "Cerebrum",
        "status": "On track",
        "text": "",
        "bullets": [
          "Progress: Courses shipped, completing delivery from the original four producers. Programmes, courses, intakes and fees are now published, with multilingual text preservation, duplicate programme handling, stable matching and human review for genuinely ambiguous records. Programme-to-subject mappings were published with taxonomy identifiers and version information. Awards, Skills, Student Flows and Alumni were released as governed datasets, while Rankings delivery progressed region by region. Institution records were enriched and more than twenty years of historical measurements were restored. A single internal showcase now presents the connected data in a form the wider business can inspect.",
          "Risks or dependencies: The clearest platform gap is that rows omitted from a later release cannot yet be retired. Course publishing has also generated genuine stewardship queues, particularly for collapsed or ambiguous programmes. Business consumption is not yet fully settled, and large, sequenced releases remain constrained by platform pickup cadence.",
          "Dependencies outside the team: Platform and MyQS teams; data stewards; taxonomy and Rankings owners; product teams that will consume the released data.",
          "Next steps: Work the programme review queues; agree and implement a row-retirement approach; finish moving remaining identity management to the registry; deepen the awards and qualification model; and turn showcase feedback into prioritised business-facing improvements."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-82"
        ],
        "team": "Data & Analytics",
        "title": "Aurora, Synergy2 and UBS data quality",
        "status": "At risk",
        "text": "",
        "bullets": [
          "Progress: The team identified 313,000 COI rows across six institutions whose intake text cannot currently be parsed to dates. Audit rules were extended for cleaned-up records, portal-property inconsistencies and potential test contacts. Marketing email events, deferred and Student Declined journey history, and further Synergy2 fixes were released. The cross-functional task-force model is reported to be improving coordination.",
          "Risks or dependencies: University of London enrolments are arriving without sufficient course or intake information, and related source defects are already affecting downstream modelling. The wider process remains dependent on upstream workflow correction rather than downstream repair alone.",
          "Dependencies outside the team: University Services product and workflow owners; HubSpot and portal owners; BI; account-management stakeholders; teams responsible for the affected intake and status workflows.",
          "Next steps: Resolve intake parsing for the six affected institutions; progress University of London course/intake remediation; complete the deal-stage and status-history cleanup; and continue expanding preventative audit coverage."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "ENROL & Unified Modelling"
        ],
        "team": "Data & Analytics",
        "title": "ENROL and propensity modelling",
        "status": "On track",
        "text": "",
        "bullets": [
          "Progress: The course-of-interest modelling framework was merged into the main ENROL codebase, trained against production data and deployed across active clients. This establishes the technical route for course-level modelling despite the underlying source-data constraints.",
          "Risks or dependencies: University of London reconciliation is producing records without adequate course and intake information, making London outputs unreliable. London inference has therefore been disabled, and there is concern that similar defects may affect other clients at smaller scale.",
          "Dependencies outside the team: UBS source-data and reconciliation processes; HubSpot workflow owners; client and account teams responsible for correcting missing course and intake information.",
          "Next steps: Resolve source defects before re-enabling London, assess whether the same issue affects other clients, and complete the ENROL roadmap through year-end."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Data-Led Engagement Pilot (University of London)"
        ],
        "team": "Data & Analytics",
        "title": "Data-led Engagements",
        "status": "On track",
        "text": "",
        "bullets": [
          "Progress: The University of London pilot was reframed to avoid unreliable model-based prioritisation. The replacement experiment will compare morning and afternoon calling using the LLB offer cohort. The campaign segment has been prepared, and Data Science will create two randomised groups for execution.",
          "Risks or dependencies: The experiment still depends on consistent operational execution and reliable capture of call outcomes and transcript-derived measures. The revised design tests treatment effectiveness rather than model uplift.",
          "Dependencies outside the team: University Services campaign owners; HubSpot administrators; calling operations; BI and reporting teams.",
          "Next steps: Create the randomised groups; configure the HubSpot segments; confirm the measurement fields and evaluation approach; and complete campaign setup."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Data Platform Governance & Migration"
        ],
        "team": "Data & Analytics",
        "title": "Rankings and DataOps",
        "status": "On track",
        "text": "",
        "bullets": [
          "Progress: Sustainability fact files are being prepared with supporting PR analysis. The Asian Rankings fact file was distributed and follow-up queries are being handled, while Europe and Subject Rankings analysis continues. Graduate employment-rate modelling is progressing. Regional and Sustainability datasets were refreshed for HolonIQ/MyQS QA. OMBA and EMBA dbt migrations are complete, work has moved to Best Student Cities, and a Country Fact Files prototype is in development.",
          "Risks or dependencies: Alumni Impact analysis is proving difficult and may need to be reduced for the first iteration. Some Employability and Skills metrics may require further review and potentially a change in scope or timing.",
          "Dependencies outside the team: IST; Frameworks; PR and Communications; Product; Employability and Skills stakeholders; MyQS/HolonIQ frontend owners.",
          "Next steps: Continue Europe and Subject analysis; refine graduate employment-rate modelling; settle the first-iteration Alumni Impact scope; progress Best Student Cities migration; and prepare the Country Fact Files prototype for the Asian Rankings release in early November."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Data & Analytics",
        "title": "OnePerson and student data transformation",
        "status": "On track",
        "text": "",
        "bullets": [
          "Progress: The first roadmap was completed, covering matched identities, persistent OnePerson IDs, publication through Cerebrum, a unified student record and ultimately a unified student journey.",
          "Risks or dependencies: The next challenge is sequencing the roadmap against source-system readiness, identity governance and the wider Cerebrum consumption model.",
          "Dependencies outside the team: Cerebrum platform and registry teams; source-system owners; University Services and other future consumers of unified student data.",
          "Next steps: Turn the roadmap into sequenced delivery, define near-term milestones, and align publication and identity decisions with the Cerebrum roadmap."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Rankings Modelling — Alumni Impact & Career Alignment"
        ],
        "team": "Employability & Skills",
        "title": "Rankings Modelling – Alumni Impact",
        "status": "On track",
        "text": "",
        "bullets": [
          "Progress: Finalised restructuring/sourcing of all lists under Sam’s new spec. Reviewed every list for whether it can be sourced from the profile dataset. Began exploration of economic knowledge and technology impact indicators this sprint.",
          "Next steps: Continue exploring economic knowledge and technology impact indicators."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Rankings Modelling — Alumni Impact & Career Alignment"
        ],
        "team": "Employability & Skills",
        "title": "Rankings Modelling – Career Alignment + Graduate Employment Rate",
        "status": "On track",
        "text": "",
        "bullets": [
          "Progress: Finalised subject standardisation across the profile dataset, unlocking career alignment, employment alignment, degree-to-occupation rate, and subject-occupation relationships. Advanced highly-skilled employment rate modelling.",
          "Risks / dependencies: Direction for how the highly-skilled employment rate metric will move forward is pending an upcoming meeting.",
          "Next steps: Align on the highly-skilled employment rate approach in the upcoming meeting."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Snowflake Migration (Employability)"
        ],
        "team": "Employability & Skills",
        "title": "Snowflake Migration",
        "status": "Done",
        "text": "",
        "bullets": [
          "Progress: Finalised migration of profile data into Snowflake. Finalised migration of job posting data into Snowflake.",
          "Next steps: Support downstream placement of job posting data in Cerebrum."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Subject Taxonomy & Standardization"
        ],
        "team": "Employability & Skills",
        "title": "Subject Taxonomy",
        "status": "On track",
        "text": "",
        "bullets": [
          "Progress: No new updates this period. Version 2.1 remains under review.",
          "Next steps: Begin work on version 3 once the v2.1 review concludes."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Job Title Taxonomy"
        ],
        "team": "Employability & Skills",
        "title": "Job Title Taxonomy",
        "status": "On track",
        "text": "",
        "bullets": [
          "Progress: Decided to retain the existing product occupation IDs rather than adopt new QSIDs directly; will instead map these IDs to QSIDs for Cerebrum. Current mining run is about a week from completion.",
          "Next steps: Resume the job title layer migration once the mining run concludes."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-25"
        ],
        "team": "Employability & Skills",
        "title": "Alumni Platform",
        "status": "On track",
        "text": "",
        "bullets": [
          "Progress: No major updates this period.",
          "Risks / dependencies: Still awaiting clarity on whether infrastructure or datasets will need to be managed from the team’s side.",
          "Next steps: Finish restructuring the alumni analytics projects."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "Subject Taxonomy & Standardization"
        ],
        "team": "Employability & Skills",
        "title": "Subject Standardisation",
        "status": "Done",
        "text": "",
        "bullets": [
          "Progress: Studyportals and UBS mappings fully delivered. Completed the first version of standardisation for the profile dataset."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-15"
        ],
        "team": "Global Student Flows (GSF)",
        "title": "Prism (Subjects model)",
        "status": "On track",
        "text": "",
        "bullets": [
          "This week: Subject titles crosswalked to QS taxonomy; model architecture rebuilt; IPF rebalancing analysis complete; StudyPortals fees data collected (~200k programmes). Country-level accuracy (TVD) improved from 17.5 to around 6–7 once the layers were rebuilt with the new data, a ~60% improvement; changing the IPF seed as well moved university-level TVD from 27.3 to 10.0 for universities with data, at the cost of a worse estimate for universities without observed data.",
          "Next: Redo Layer 1 at the 13-subject level; collect per-university international student data from government sources; test IPF improvements with these inputs."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-15"
        ],
        "team": "Global Student Flows (GSF)",
        "title": "ORB core model",
        "status": "On track",
        "text": "",
        "bullets": [
          "This week: Gap-filling revised to the ratio method; global totals revised (2025 global total = 7.67M).",
          "Next: Start process for moving base year to 2026."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-15"
        ],
        "team": "Global Student Flows (GSF)",
        "title": "ORB data releases",
        "status": "On track",
        "text": "",
        "bullets": [
          "This week: New forecasts for Lithuania, Latvia and Estonia.",
          "Next: Update data and forecasts for Bulgaria, Ireland (released this week)."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-15"
        ],
        "team": "Global Student Flows (GSF)",
        "title": "ORB QA checks",
        "status": "On track",
        "text": "",
        "bullets": [
          "This week: Tier 4 checks built: zero-value audit, YoY growth outlier scan and spike-and-revert detection.",
          "Next: Test Tier 4 checks; build the Tier 2 (coherence) and Tier 3 (inputs vs outputs) checks."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-14"
        ],
        "team": "Labour Market Intelligence (LMI)",
        "title": "AI Framework",
        "status": "In progress",
        "text": "",
        "bullets": [
          "This week: Refined the Layer 2 country localisation methodology for the QS AI Exposure Framework, including the indicator lists and pillars to better capture country readiness, occupational deployment dependencies, and country–occupation interactions.",
          "Next week: Consolidate the methodology and red hat it thoroughly. Also continue validating how country and occupation factors interact to produce more realistic country-level occupation scores."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-14"
        ],
        "team": "Labour Market Intelligence (LMI)",
        "title": "Penetration Scoring",
        "status": "In progress",
        "text": "",
        "bullets": [
          "This week: Finalised the indicator lists across all 15 penetration buckets and drafted imputation methods for selected buckets. Completed Gibrat’s Law testing across population, employment, and occupation levels, which showed no evidence of systematic size-related bias in assigned CAGRs. Also prepared the methodology for testing population-based denominator adjustments and selecting suitable scale corrections.",
          "Next week: QA the finalised indicator lists, complete the remaining imputation methods, and run the remaining indicators through the scale-adjustment pipeline. Also finalise the denominator and adjustment method for each bucket."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-14"
        ],
        "team": "Labour Market Intelligence (LMI)",
        "title": "Country Clustering",
        "status": "In progress",
        "text": "",
        "bullets": [
          "This week: Reworked the methodology to derive clustering dimensions from the data using factor analysis, parallel analysis, and bootstrap stability checks. Split indicators into labour market and context pools and added seven ILO indicators to fill gaps in the labour market pool. Narrowed the indicator list from 157 to 60 across 12 proposed dimensions, compiled sources, and organised the central data repository.",
          "Next week: Finalise country coverage for the selected indicators, assess their skewness and scale, determine the required transformations, and identify structural indicators to QA the clustering outputs."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-14"
        ],
        "team": "Labour Market Intelligence (LMI)",
        "title": "Regional Guardrails and Zero-Employment Occupations",
        "status": "In progress",
        "text": "",
        "bullets": [
          "This week: Updated regional guardrails using aggregates from deep-dive countries.",
          "Next week: Set up a recurring sprint to identify important country–occupation cases where employment is either zero or particularly high. Add country-level guardrails for these cases to prevent regional averages from producing unrealistic outputs for individual countries."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-14"
        ],
        "team": "Labour Market Intelligence (LMI)",
        "title": "OPAL Model Improvements",
        "status": "In progress",
        "text": "",
        "bullets": [
          "Next week: Brainstorm ways to automate and improve country outputs as deep-dive guardrails are added, reducing manual work and keeping outputs consistent."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-14"
        ],
        "team": "Labour Market Intelligence (LMI)",
        "title": "Guardrails team",
        "status": "In progress",
        "text": "",
        "bullets": [
          "Crosswalks and Taxonomies: finalised the October 2026 handover documents (Output Validation Methodology, Crosswalk Methodology, Crosswalks and Taxonomies & Deep dives), consolidating country crosswalks, taxonomies, and source information with additional validation rules.",
          "ISCO: completed the ISCO crosswalk review and updated the methodology document.",
          "Country Mapping and Research: completed Saudi Arabia employment output validation across industries and occupations, updating occupation and subsector figures wherever necessary. Reviewed East Asia model outputs, progressed Netherlands, Nigeria, India and Ireland’s occupation mapping at the three-digit level, advanced the India crosswalk, and initiated UAE research and mapping.",
          "Regional Guardrails: developed the Regional Guardrails Helper to support ongoing updates through periodic sprints. As an initial step, updated the Nuclear and Astronaut tabs with outbound research and employment figures."
        ]
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "Strategic security platform procurement",
        "status": "",
        "text": "Procurement continued progressing both the UpGuard upgrade and Wiz acquisition activities. These investments remain key enablers for maturing QS’s third-party risk management and cloud security capabilities. It is dragging on a bit here with only incremental updates; Rowan has requested that Senthil push this along."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "GRC platform evaluation",
        "status": "",
        "text": "Discussions regarding Drata were delayed due to stakeholder availability constraints. The project remains active and will resume once key participants are available."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "Box security posture review",
        "status": "",
        "text": "Conducted additional discovery sessions with Marketing and Creative teams to better understand business processes, content-sharing requirements, and the impact of potential security changes. These discussions continue to strengthen understanding of operational dependencies and implementation constraints."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "Security posture improvement",
        "status": "",
        "text": "Worked with multiple teams to address externally visible security issues and vulnerabilities. These remediation efforts contributed to QS regaining its A-tier rating with external cybersecurity risk-scoring providers, reversing the decline experienced in recent weeks and providing a stronger assurance narrative for customers and partners."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "title": "Trust Centre preparation",
        "status": "",
        "text": "Continued reviewing and documenting outstanding items within the MoveON HECVAT questionnaire as part of preparations to publish the Trust Centre internally and strengthen transparency around security and compliance controls."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO (MoveON and MoveIN)",
        "title": "",
        "status": "",
        "text": "Progressed DR environment recreation through Terraform and reusable Ansible automation for infrastructure, databases and application services. Initial testing identified improvements ahead of the scheduled exercise."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO (MoveON and MoveIN)",
        "title": "",
        "status": "",
        "text": "Completed the Telemaxx MySQL cluster migration, including additional-node provisioning and storage configuration."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO (MoveON and MoveIN)",
        "title": "",
        "status": "",
        "text": "Deployed the Jasper container in staging, enabled monitoring and automatic restart, and stopped the legacy VM. Wider integration and application validation continue."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO (MoveON and MoveIN)",
        "title": "",
        "status": "",
        "text": "Reviewed credential protection and retention of approved container images to support consistent deployment and recovery."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO (MoveON and MoveIN)",
        "title": "",
        "status": "",
        "text": "Recreated recovery infrastructure and prepared scripts for infrastructure provisioning, database restoration and uploaded-file synchronisation."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "MIMO (MoveON and MoveIN)",
        "title": "",
        "status": "",
        "text": "Progressed recovery-workflow testing and automated Jenkins worker provisioning ahead of Monday’s BCP/DR exercise."
      },
      {
        "week": 41,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "D&E",
        "title": "",
        "status": "",
        "text": "Completed TU/TM prelive upgrades, validated the custom tracing module and finished dev6aws containerisation."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-43"
        ],
        "phase": "Done",
        "text": "SYD1: prod asset origin moved to eu-west-2; implicit grant dropped; MFA enrolment and passkey management; protected account provisioning."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-26"
        ],
        "phase": "Building",
        "text": "SYD1: 2.1.39 through 2.1.46; StructureToolbar, RankBoard, rankings board page; launcher tile for Rankings Template alpha."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-87"
        ],
        "phase": "Building",
        "text": "SYD1: CX territory, sales manager and CSM filters; account and product filters on product access. MyQS MFA enrolment, passkey removal. Cerebrum shell drawer."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-77"
        ],
        "phase": "Scoping",
        "text": "SYD1: QS Supergraph staging as first delivery branch; eu-west-1 estate; Stars migration stage; rr registration; us-east-1 target retired."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-18"
        ],
        "phase": "Prototype",
        "text": "SYD1: Rankings Template (rr) alpha registered with launcher tile; RR front end rebuilt on qas-design board views; hosted in production."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-46"
        ],
        "phase": "Building",
        "text": "SYD1: Stars served as a Federation 2 subgraph with product guard; Snowflake sync Lambda; deployed to staging."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-32"
        ],
        "phase": "Building",
        "text": "Cerebrum: QS Identity Ledger live in Aurora with Snowflake replica, sync job, ingest gate and UI panel. Registry API per-version enums, REFERENCE edges, natural-key canonicalisation."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-80"
        ],
        "phase": "Prototype",
        "text": "Cyber: Drata PoV concluded; CSPM and TPRM procurement; Box discovery; D&E compliance assessment; CrowdStrike AI security workshop; MoveOn pen testing; UpGuard rating +5."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-16"
        ],
        "phase": "Prototype",
        "text": "BLR2: Platform Stats dashboard; Profile Analytics with trend charts and audience profiling. BLR1: QPD filtering delivered, in stakeholder validation."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-19"
        ],
        "phase": "Building",
        "text": "ECU1/ECU2: IBM went live; release 74.18.4 certified and deployed."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-89"
        ],
        "phase": "Building",
        "text": "MoveIN: Lumina upgraded to latest version; Instance Leaderboard; expanded AI agent capabilities; Instant Brand Profile Extraction; AI Resource Transparency."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-85"
        ],
        "phase": "Building",
        "text": "D&E: Angular 14→21 shipped with no downtime; TU performance items continuing."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-54"
        ],
        "phase": "Prototype",
        "text": "QS Apply: discovery workshops continuing. UBS Dev: four client replacements ready for testing."
      },
      {
        "week": 38,
        "kind": "summary",
        "epics": [
          "EP-88"
        ],
        "phase": "Building",
        "text": "UBS Dev: Stirling and ECU development continuing; Griffith QA under way; Brighton awaiting testing; decision not to renew communicated to procurement."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-46"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Stars",
        "status": "On track",
        "text": "Served as a Federation 2 subgraph with the product guard, the Snowflake sync pipeline shipped as a Lambda image, both Stars roles granted on every table with the per-estate data bring-up documented, and the federation notified when main moves; the front end queries the federated router, points its onboarding pickers at the app’s own graph, and is hosted in production."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-18"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Rankings Template (rr) alpha",
        "status": "On track",
        "text": "Registered as the rr alpha app with a launcher tile and allowed on the staging and prod MyQS clients; Caitlin rebuilt the RR front end around the template on qas-design board views, shipping StructureToolbar, RankBoard and the rankings board page from the package; hosted in production."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-77"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Supergraph",
        "status": "On track",
        "text": "Staging made the first delivery branch with promotion to production by pull request, the eu-west-1 estate added to the delivery stack, a MigrateDatabase stage for Stars, rr registered, the account CX identifiers re-exposed on staging, and the us-east-1 target retired. The Recruitment Admin subgraph now notifies the federation as a GitHub App with organisation-level credentials, and committed its leaderboard score migration."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Auth",
        "status": "On track",
        "text": "The prod asset origin moved to eu-west-2 with the ACUL bundles rebuilt and re-pinned, the implicit grant dropped from both staging clients, rr allowed on both tenants, MyQS1 staging callbacks pinned to wildcards, and a protected account’s own admin able to provision any product inside it."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-87"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "CX, MyQS & Cerebrum FEs",
        "status": "On track",
        "text": "CX gained territory, sales manager and CSM filters plus account and product filters on product access; MyQS asks Auth0 to enrol an authenticator rather than verify one, keeps enrolment reachable when the popup is blocked, shows a truthful MFA row, and lets a user remove a passkey; Cerebrum opens the QS Agent in the shell drawer. All on qas-design 2.1.46."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-26"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Design System (qas-design)",
        "status": "On track",
        "text": "2.1.39 through 2.1.46: StructureToolbar, RankBoard and the rankings board page shipped from the package, apps able to feed the analytics reports and rank board with their own rows, and the Rankings Template alpha tile in the launcher."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum · Nicolas Jourdain",
        "title": "QS Identity Ledger, end to end",
        "status": "Shipped",
        "text": "Aurora is the ledger of record (resolve-or-issue, source systems, key store), Snowflake holds the replica, a 10-minute sync job keeps it current, entity ingest is gated on it, and the entity page shows bound references with retract/retire. Spans the API, dbt, Dagster, CBR-Infra and the FE."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum · Nicolas Jourdain",
        "title": "Ledger hardening after go-live",
        "status": "Shipped",
        "text": "502s on keys/retract fixed, DERIVED ids no longer registered, sync scripts run from outside the VPC, mint ceiling raised to 1,000."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum · Nicolas Jourdain",
        "title": "Natural keys",
        "status": "Shipped",
        "text": "Derive the same qs_id however the producer spells them — text and numeric components canonicalised in both the API and dbt stage 5, plus intra-submission FK resolution in stage 8 and a batch key-attach route (up to 1,000 bindings)."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum · Nicolas Jourdain",
        "title": "ENUM values scoped per schema version",
        "status": "Shipped",
        "text": "The shared catalogue default is unfrozen; DDL applied to prod, API and FE read the new table."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum · Nicolas Jourdain",
        "title": "REFERENCE edges are API-managed",
        "status": "Shipped",
        "text": "Create/read/update/delete on a draft via the integration surface; hand-written SQL is no longer the pattern."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum · Nicolas Jourdain",
        "title": "Source-system registration unblocked",
        "status": "Shipped",
        "text": "Unknown entity type is a 400 not a 502, the near-duplicate guard stopped rejecting hub2/iso_3166_3, and new registrations auto-approve for now."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum · Nicolas Jourdain",
        "title": "Dataset snapshots",
        "status": "Shipped",
        "text": "Build from a released dataset schema — new read route, Dagster snapshot builder, FE dataset pages aligned to the concept."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR2 · Simon Hall",
        "title": "Partner Discovery",
        "status": "On track",
        "text": "Delivered Profile Analytics with preset and custom date ranges, totals and trend charts, comparison against the preceding period, visitor-source and search-criteria breakdowns, and anonymised audience profiling (type, size, research volume, focus); performance figures restricted to the institution’s own admins and QS internal reviewers. Delivered internal Platform Stats dashboard covering adoption, network overview, opportunity engagement, interest activity and time-to-value, with full data export for offline reporting. Tightened admin recognition via central product access so admin-only areas (e.g. My Partnerships) surface correctly without portal-level role setup. Restructured the workspace menu so My Opportunities and My Partnerships appear as clear sub-items. Corrected per-institution user metrics so counts reflect actual registered users. Simplified the published/unpublished opportunity filter and made it easier to clear. Clarified confirmation messaging when partnerships are added. Standardised default institution logo and banner imagery. Cleaned an obsolete admin-email placeholder from notification emails. Resolved sidebar navigation conflicts for a smoother experience."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR2 · Simon Hall",
        "title": "QA",
        "status": "On track",
        "text": "Completed QPD improvements testing (status filtering, save/redirect behaviour, map visibility, UI updates, British English localisation for types and subtypes). Verified TU/TM institution inclusion/exclusion across all applicable pages. Started Profile Analytics testing covering access permissions, date range filters, profile visits, search appearances, comparison indicators, trend charts, visitor sources and search filter analytics."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR1 · Simon Hall",
        "title": "MyQS Partnership Discovery (QPD)",
        "status": "On track",
        "text": "Completed implementation of the application-level filtering solution required to curate institution records from the existing Snowflake data source. Delivered the technical implementation required to support institution eligibility and discovery requirements within Partnership Discovery. Progressed the initiative into stakeholder validation, with production deployment dependent upon confirmation of the final institution dataset and business approval."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-19"
        ],
        "team": "ECU1 and ECU2 · Jonnathan Pena and Paula Jiminez",
        "title": "IBM go-live",
        "status": "Shipped",
        "text": "1 Mentor is now live with IBM. The Product team confirmed they were impressed with the platform."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN · Mahesh",
        "title": "AI Template Builder and Communications",
        "status": "On track",
        "text": "Instant Brand Profile Extraction accelerates new client onboarding by automatically detecting brand typography, buttons and site languages directly from an institution’s URL. Campaign creation sped up with one-click template duplication, smart prompt suggestions and real-time size validation to prevent email clipping. Automated Design Polish ensures professional, brand-compliant emails by managing header/footer logo dimensions and image alignment without custom code. Human-readable AI token usage metrics (e.g. 175.4K / 2B) help administrators monitor consumption. In-app announcements introduce the AI email generator to first-time users."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN · Mahesh",
        "title": "Smart Matching and User Onboarding",
        "status": "On track",
        "text": "Interactive onboarding walkthrough accelerates customer time-to-value with a guided, step-by-step tour of automated contact matching. Operational review refinements streamline daily workflows with clearer run-status tracking and bulk matching actions."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN · Mahesh",
        "title": "MoveIN Console Instance Leaderboard",
        "status": "On track",
        "text": "Enables teams to compare client institutions at a glance, identify top and bottom performers and support earlier account intervention."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events · Catarina Cunha",
        "title": "Drupal clean-up",
        "status": "On track",
        "text": "What has been done is released, but we continued with this task by resolving errors and deletion of modules, since we have capacity."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "Digital and Events · Catarina Cunha",
        "title": "CMT module conversion from React to Drupal",
        "status": "Ready for release",
        "text": "This has been tested, is waiting for release."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events · Catarina Cunha",
        "title": "TU performance investigation",
        "status": "Shipped",
        "text": "Some implementations done have been released, and we will continue with new tickets this sprint."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events · Catarina Cunha",
        "title": "Angular upgrade (14 to 21)",
        "status": "Shipped",
        "text": "Angular upgrade done, from version 14 to 21, no issues reported and no downtime."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "QS Apply · Sreeram Sreekumar",
        "title": "Appian migration discovery",
        "status": "On track",
        "text": "The discovery phase is now under way, with stakeholder workshops in progress to understand the current-state processes, system usage, pain points and opportunities for improvement across the Applicant and Application Journey and Admissions processes."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "UBS Development · Mohd Azhar Mohd Razman",
        "title": "Enquiry form (API) replacements",
        "status": "On track",
        "text": "Replacements for ACU, ECU, Keele and RCA are ready for testing. Griffith has undergone QA, with some fixes required following the initial review."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development · Mohd Azhar Mohd Razman",
        "title": "Informatica replacement (S3 flat file)",
        "status": "On track",
        "text": "Griffith’s replacement is awaiting deployment, pending the API replacement. Brighton’s replacement has been developed and is awaiting testing. Stirling and ECU development work is under way."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development · Mohd Azhar Mohd Razman",
        "title": "Informatica replacement (Keystone)",
        "status": "On track",
        "text": "Two of three replacements (RCA and ECU) have been built in the test environment and are now ready for testing. Initial round of testing concluded for RCA with a few small fixes needed."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "Drata GRC proof of value concluded",
        "status": "Done",
        "text": "Completed the evaluation of Drata and assessed the platform as suitable for QS. The solution demonstrated strong capability across continuous compliance monitoring, policy management, risk management and ISO governance requirements. The Compliance team has requested an extension to undertake further evaluation before a final recommendation is made."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "CSPM and Third-Party Risk Management procurement",
        "status": "On track",
        "text": "Met with Procurement to review proposed Cybersecurity Posture Management (CSPM) and Third-Party Risk Management (TPRM) solutions. Provided additional context on business justifications, procurement requirements and vendor quotations."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "Box security posture review",
        "status": "On track",
        "text": "Continued business discovery sessions with stakeholders to better understand current Box usage patterns, with particular focus on public sharing controls and data exposure risks. Findings are being consolidated into a recommendation package for the CISO."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "D&E vulnerability and patch management compliance assessment",
        "status": "Done",
        "text": "Completed a security compliance review of vulnerability and patch management practices within D&E environments. While initiatives are under way to improve maturity, including the planned acquisition of Automox, the environment is currently assessed as non-compliant against QS security requirements and policy. Findings and recommendations have been formally provided to the CISO for action."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "Freshservice helpdesk proof of value",
        "status": "Done",
        "text": "Concluded cybersecurity participation in the Freshservice evaluation process. Security observations and recommendations have been prepared and will be presented to Corporate IT to support their decision-making process."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "CrowdStrike AI Security evaluation",
        "status": "On track",
        "text": "Participated in a half-day CrowdStrike AI Security workshop and hands-on lab, bringing newly acquired knowledge directly into the ongoing CrowdStrike Guardian (AIDR) PoV. Applied learnt techniques to investigate AI policy violations within the pilot group and gained greater visibility into organisational AI usage and governance opportunities. Initial findings indicate strong potential value for QS."
      },
      {
        "week": 38,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "MoveOn security assessment activities",
        "status": "On track",
        "text": "External penetration testing and internal security assessment activities for the MoveOn environment continued to gain momentum, with stakeholder engagement and review activities increasing as assessment work progresses."
      },
      {
        "week": 38,
        "kind": "risk",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "text": "Box platform constraints. Discovery sessions continue to reinforce that Box configurations and business processes are highly interconnected. This may significantly limit the security controls that can be introduced without broader operational impacts."
      },
      {
        "week": 38,
        "kind": "risk",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "text": "D&E compliance gap. The D&E environment remains non-compliant with vulnerability and patch management standards. While remediation activities are under way, oversight and prioritisation will be required to address identified gaps."
      },
      {
        "week": 38,
        "kind": "risk",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN",
        "text": "Penetration test reports under evaluation; any findings requiring remediation could create additional work. OpenAI Assistants API deprecation: an alternative has been identified."
      },
      {
        "week": 38,
        "kind": "risk",
        "epics": [
          "EP-54"
        ],
        "team": "UBS Development",
        "text": "Contact Matching unavailable in Sandbox: issues promoting data from production to sandbox due to missing data objects. Tag data ingestion: need to agree how tag data should be ingested so it loads correctly into Contact Source, and replicate it in Sandbox for QA."
      },
      {
        "week": 38,
        "kind": "risk",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development",
        "text": "Informatica will not be renewed. Procurement has been notified of the decision not to renew. LSBU is paused: its S3 flat-file replacement is on hold pending tender outcome."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-43"
        ],
        "phase": "Done",
        "text": "SYD1: passkey sign-in rolled out to production."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-77"
        ],
        "phase": "Scoping",
        "text": "SYD1: Recruitment subgraph federated into the QS Supergraph in eu-west-2; Pulse production ingest API fronted with pulse.api.qs.com."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-26"
        ],
        "phase": "Building",
        "text": "SYD1: Design System 2.1.35 through 2.1.39; AiChatBubble, header AI-assistant opt-in, product role revoke."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-87"
        ],
        "phase": "Prototype",
        "text": "SYD1: CX FE (bulk add, QS IST tightened, CX product admin management, product_standard read-only); MyQS FE (subscription listing, No access revoke, access editor catalogue)."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-60"
        ],
        "phase": "Building",
        "text": "SYD1: QS Agent opens from the header into a shell drawer; AiChatBubble published from the design-system root."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-9"
        ],
        "phase": "Build Ready",
        "text": "SYD1: QS Recruitment Admin hardened for production, federated as a subgraph, Aircall sync as a scheduled Lambda, University Services dashboard served from graph.qs.com."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-20"
        ],
        "phase": "Done",
        "text": "SYD1: ranking and reputation report header scroll fix promoted to qas-prod; import cycle breaks and Legacy Export added."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-80"
        ],
        "phase": "Build Ready",
        "text": "Cyber: Drata GRC PoV, vendor risk management procurement, cybersecurity posture management procurement, CrowdStrike AI security PoV, IT helpdesk evaluation, Box security posture review."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-46"
        ],
        "phase": "Building",
        "text": "BLR2: Stars ported to standalone QAS-native stack with GraphQL backend and Snowflake sync; multi-institution switcher; Portal guidance refinements."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-16"
        ],
        "phase": "Build Ready",
        "text": "BLR2: email template management; withdrawn-interest handling; filter improvements. BLR1: QPD institution eligibility and filtering."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-19"
        ],
        "phase": "In Progress",
        "text": "ECU1: IBM platform certification for client demo; twelve items corrected and deployed to production."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-89"
        ],
        "phase": "To Do",
        "text": "MoveIN: Smart Match Assistant scan history and review workflows; AI Email Template Builder consistency and editing improvements."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-7"
        ],
        "phase": "Done",
        "text": "ECU2: server-side bot/scraper block; CSP validation; analytics accuracy fixes. D&E: CMT module conversion from React to Drupal."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-85"
        ],
        "phase": "In Progress",
        "text": "D&E: new server testing completed, release planned 17 September; TU performance investigation concluded; Drupal clean-up in validation."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-54"
        ],
        "phase": "Build Ready",
        "text": "QS Apply: discovery workshops under way. UBS Development: enquiry API replacement commenced; ACU ready for testing, Keele and RCA under way."
      },
      {
        "week": 37,
        "kind": "summary",
        "epics": [
          "EP-88"
        ],
        "phase": "To Do",
        "text": "UBS Development: S3 flat-file replacements for Griffith, Brighton and Stirling; Keystone replacements for RCA and ECU."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-9"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Recruitment Admin",
        "status": "On track",
        "text": "Hardened for production and exposed as a federation subgraph, added to the eu-west-2 estate with its own database and RDS Proxy reachable through the SSM bastion, the Aircall sync running as a scheduled Lambda with a batched backfill ingest, and the University Services dashboard served from graph.qs.com."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-60"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Agent in the shell",
        "status": "On track",
        "text": "Apps can now opt in to the header’s AI assistant, and the QS Agent opens from the button into a shell drawer rather than a floating bubble. Caitlin published AiChatBubble from the design-system root, controllable by its host; Cerebrum adopted the drawer on 2.1.39 and dropped its two workarounds."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-87"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Product access and admin roles",
        "status": "On track",
        "text": "The CX product admin can manage across the app, scoped to the current account, with product_standard strictly read-only; No access is offered as a revoke in the product role field; QS IST members are tightened to bulk add only, with the CX product grant able to override the carve-out; and Ming tiered QS-admin access by product_role in the Auth API."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Auth",
        "status": "On track",
        "text": "“Continue with a passkey” is offered on every post-identifier sign-in screen, rolled out to production."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-77"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Pulse",
        "status": "On track",
        "text": "The production ingest API is being fronted with pulse.api.qs.com."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-26"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Design System (qas-design)",
        "status": "On track",
        "text": "2.1.35 through 2.1.39: AiChatBubble and the header AI-assistant opt-in, revoking a product by answering No access on its role menu with the default seat reported back, and a concealed fixed panel kept hidden through its flyout animation."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-77"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Supergraph",
        "status": "On track",
        "text": "The Recruitment subgraph federated in the eu-west-2 estate from a snapshot of QAS-RecruitmentAdmin-GQL; federation delivery and schema release scoped to each estate’s own subgraphs; Router readiness derived from the composed supergraph; and the migrate job entering the Recruitment app from CODEBUILD_SRC_DIR."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-87"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "CX FE",
        "status": "On track",
        "text": "Five releases: bulk add opened to its own grant end to end, QS IST tightened, the CX product admin managing everywhere and then scoped to the current account, product_standard read-only, and the Products badge counting active subscriptions only."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-87"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "MyQS FE",
        "status": "On track",
        "text": "Products listed by the account’s subscriptions rather than products it has members on, each described by its current subscription, No access as a revoke in the access dialogue, and the access editor’s catalogue widened to the grants it replaces."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-20"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "HolonIQ / HolonOS",
        "status": "On track",
        "text": "Ranking and reputation report headers stick again while scrolling, promoted to qas-prod; two import cycles that crashed lazy routes were broken up, and Legacy Export was added to the Regional Rankings download menu; the hiq_internal sequence grant is recorded as applied on prod."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "GRC platform evaluation (Drata)",
        "status": "On track",
        "text": "Continued the proof of value, with a focus on policy management capabilities and assessing how the platform can improve governance, compliance and audit readiness across the organisation. HyperProof evaluation to follow."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "Vendor risk management platform procurement",
        "status": "On track",
        "text": "Worked with Procurement and key stakeholders to progress acquisition discussions for a vendor risk management solution to strengthen third-party risk oversight and support supplier due diligence processes."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "Cybersecurity posture management platform procurement",
        "status": "On track",
        "text": "Advanced procurement and requirements discussions for a platform to improve visibility of organisational security posture and support ongoing risk reduction initiatives."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "AI security proof of value",
        "status": "On track",
        "text": "Commenced a joint evaluation with Corporate IT of CrowdStrike’s AI security capabilities to assess opportunities for securing emerging AI usage and strengthening governance around AI-enabled technologies."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "IT helpdesk platform evaluation",
        "status": "On track",
        "text": "Participated in an organisational proof of value for future IT helpdesk capabilities, providing security input and ensuring alignment with operational and governance requirements."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber · Rowan Chapman",
        "title": "Box security posture review",
        "status": "On track",
        "text": "Conducted the first Box use-case discovery sessions focused on reducing reliance on public shared links and identifying opportunities to strengthen information protection controls while maintaining business operations."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-46"
        ],
        "team": "BLR2 · Simon Hall",
        "title": "MyQS Stars (QAS-native rebuild)",
        "status": "On track",
        "text": "Ported the full Stars institution view (overview summary, category deep-dive, methodology) into the new standalone QAS front end and GraphQL backend. Migrated the Asset Library into the new stack with new schema and queries. Stood up the Stars GraphQL service (schema, data model, queries). Established data sync from Snowflake to keep the standalone service current. Added a multi-institution switcher for users managing multiple institutions. Refined star rating and score-range presentation in the existing Portal ahead of the port."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-46"
        ],
        "team": "BLR2 · Simon Hall",
        "title": "Stars (Portal)",
        "status": "On track",
        "text": "Refined on-screen guidance in the category deep-dive area so users understand they can select a category and expand each indicator to review threshold, scores and how the result was achieved."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR2 · Simon Hall",
        "title": "Partner Discovery",
        "status": "On track",
        "text": "Delivered email templates management area for outreach. Added next/previous navigation on the opportunity detail page with position indicator. Added running total of applied filters on the apply action. Corrected per-section filter counts. Fixed QS Stars filtering so selecting a star category alone returns all rated institutions. Clarified collaboration readiness filter wording. Completed withdrawn-interest handling (IPS-2349): conversations tied to withdrawn interests are cleanly retired for both parties, with plain-language explanations for why replies are not possible, frozen conversation history and cleaned-up unread indicators."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR2 · Simon Hall",
        "title": "QA",
        "status": "On track",
        "text": "Completed Message Centre testing, institution and partnership directory filter testing, QPD improvements testing (navigation, visibility settings, email templates, role-based restrictions, UI messages), MyQS regression testing and live sanity testing."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR1 · Simon Hall",
        "title": "MyQS Partnership Discovery (QPD)",
        "status": "On track",
        "text": "Defined institution eligibility criteria based on Top Universities and TopMBA listings. Established the application-level filtering approach required to curate institution records using the existing Snowflake data source. Progressed the design and implementation approach for maintaining consistent institution data across QPD and wider QS platforms."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-19"
        ],
        "team": "ECU1 · Jonnathan Pena",
        "title": "IBM demo certification",
        "status": "Shipped",
        "text": "Completed and deployed to production, with certification for IBM as of 10 September: Career Goals Explore bug with occupation match and skill set; Wizard Step 2 goal recommendations not shown; Ikigai recommending occupations not included in the IBM catalogue; Career Goals Explore by Field bug with skill sets and match; Learning Paths Create My Path labels; Recommendations with no occupations recommended by skill set; landing page updated to Career Goals; Career Goals Explore 1M suggestions not shown; Explore by Career Field filter; LP My Paths two empty states; Wizard Step 1 institution limit; and Activate LP in Career Goals My Objectives."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2 · Paula Jiminez",
        "title": "Site security hardening",
        "status": "Shipped",
        "text": "Shipped a server-side block that stops bots and scrapers from pulling quiz data directly, closing the gap the advisory-only rules (robots.txt, headers) could not close alone. Also passed Google’s standard CSP security check and fixed a false positive blocking a legitimate embedded form. Automated tests now verify protections stay in place going forward. QA-verified."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2 · Paula Jiminez",
        "title": "Search and AI crawl policy",
        "status": "Shipped",
        "text": "Signed off by the Tech Lead this week; design finalised."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2 · Paula Jiminez",
        "title": "Career Match analytics",
        "status": "Shipped",
        "text": "Fixed data-accuracy issues found in Product Owner review: option labels now show the actual text students saw (not internal codes), a stale-data leak on the homepage was fixed and a duplicate tracking event was eliminated. QA-verified across multiple test runs."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN · Mahesh",
        "title": "Smart Match Assistant",
        "status": "On track",
        "text": "Teams can review AI matching activity more clearly through scan history, improved confirmation and rejection guidance and run-level performance visibility."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-89"
        ],
        "team": "MoveIN · Mahesh",
        "title": "AI Email Template Builder",
        "status": "On track",
        "text": "Generated emails are more consistent across Outlook and Gmail; iterative editing, prompt history, spam checks and automated brand placement reduce manual effort."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events · Catarina Cunha",
        "title": "Drupal clean-up",
        "status": "On track",
        "text": "In validation for release next week."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "Digital and Events · Catarina Cunha",
        "title": "CMT module conversion from React to Drupal",
        "status": "On track",
        "text": "Waiting testing. UI changes reported during the testing phase are required."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events · Catarina Cunha",
        "title": "TU performance investigation",
        "status": "Done",
        "text": "The investigation has been completed and based on it new tickets will be added to implement."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events · Catarina Cunha",
        "title": "New servers",
        "status": "On track",
        "text": "Last testing phase has been completed. Planned release for next week."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "QS Apply · Sreeram Sreekumar",
        "title": "Appian migration discovery",
        "status": "On track",
        "text": "The discovery phase is now under way, with stakeholder workshops initiated to understand the current-state processes, system usage, pain points and opportunities for improvement across Lead Management and Admissions."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "UBS Development · Mohd Azhar Mohd Razman",
        "title": "Enquiry form (API) replacements",
        "status": "On track",
        "text": "Replacement for the first of ten clients (ACU) is ready for testing. Work has also commenced on replacements for two other clients (Keele and RCA)."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development · Mohd Azhar Mohd Razman",
        "title": "Informatica replacement (S3 flat file)",
        "status": "On track",
        "text": "Griffith’s replacement is awaiting deployment, pending API replacement. Brighton replacement has been developed and is awaiting testing. Stirling development work is under way. LSBU replacement work is paused, pending tender outcome."
      },
      {
        "week": 37,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development · Mohd Azhar Mohd Razman",
        "title": "Informatica replacement (Keystone)",
        "status": "On track",
        "text": "Two of three replacements (RCA and ECU) have been built in the test environment and are now ready for testing. Initial round of testing has concluded for RCA with a few small fixes needed."
      },
      {
        "week": 37,
        "kind": "risk",
        "epics": [
          "EP-16"
        ],
        "team": "BLR2",
        "text": "QPD back-office is inaccessible on live. Decision needed on where this will live."
      },
      {
        "week": 37,
        "kind": "risk",
        "epics": [
          "EP-46"
        ],
        "team": "BLR2",
        "text": "QAS Stars data copy. Decision needed on how data copy will be handled on the new QAS Stars stack."
      },
      {
        "week": 37,
        "kind": "risk",
        "epics": [
          "EP-80"
        ],
        "team": "Cyber",
        "text": "Box configurations are highly interconnected and usage appears deeply embedded across business processes. Desired security improvements, particularly around public sharing controls, may be constrained by existing processes and require larger organisational change."
      },
      {
        "week": 37,
        "kind": "risk",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "text": "Microsite moving to urgent-only mode. Starting next week, the Microsite pod addresses only urgent and priority items; no further general feature work is queued."
      },
      {
        "week": 37,
        "kind": "risk",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events",
        "text": "Angular upgrade: new servers testing continues. Drupal upgrade: waiting for the new environment setup for the last round of testing."
      },
      {
        "week": 37,
        "kind": "risk",
        "epics": [
          "EP-54"
        ],
        "team": "UBS Development",
        "text": "HubSpot Contact Matching unavailable in test. Full integration testing cannot proceed until Contact Matching is available in the test environment."
      },
      {
        "week": 37,
        "kind": "risk",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development",
        "text": "Informatica contract ends 22 December 2026. Full decommissioning depends on finalising the York replacement, in discussion with Microsoft directly; Procurement has been advised in case the contract needs to extend. LSBU is paused pending tender outcome."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-43"
        ],
        "phase": "Released",
        "text": "SYD1: audit and compliance surface; seat and subscription data; MyQS FE; QS Supergraph (post-launch hardening of the released estate)."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-20"
        ],
        "phase": "Released",
        "text": "SYD1: HolonIQ / HolonOS role and curation moves, promoted to production."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-26"
        ],
        "phase": "Building",
        "text": "SYD1: Design System 2.1.27 to 2.1.35."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-87"
        ],
        "phase": "Prototype",
        "text": "SYD1: CX FE (filterable users tab, scheduled product terms, resizable tables)."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-80"
        ],
        "phase": "Prototype",
        "text": "Security: penetration testing across MoveON, MoveIN and 1 Mentor; BCP/DR programme. Infrastructure: pen-test execution and the D&E asset inventory."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-84"
        ],
        "phase": "Scoping",
        "text": "Infrastructure: the MoveON and MoveIN migration and upgrade programme (Ubuntu, MySQL 8.4.7, Advanced Publisher, containerisation)."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-31"
        ],
        "phase": "Released",
        "text": "BLR2: MyQS login security hardening, dependency patching and fixes."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-46"
        ],
        "phase": "Building",
        "text": "BLR2: Stars navigation restructure, summary redesign and PP Telegraf typography."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-16"
        ],
        "phase": "Prototype",
        "text": "BLR2: Message Centre delivered end to end; QA testing. BLR1: QPD enhancements into QA."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-19"
        ],
        "phase": "Building",
        "text": "ECU1: release 74.7.3 IBM white-label items (platform toggle, favicon text)."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-7"
        ],
        "phase": "Released",
        "text": "ECU2: security headers, crawler and bot access policy, step-level analytics, stabilisation and accessibility."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-85"
        ],
        "phase": "Building",
        "text": "Events and Drupal: new servers in testing (Angular path); TU performance investigation starting. Infrastructure: TU/TM autoscaling base template."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-54"
        ],
        "phase": "Prototype",
        "text": "QS Apply: discovery started, workshops scheduled. UBS Development: Appian team transition to HubSpot and the enquiry API integration."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-82"
        ],
        "phase": "Building",
        "text": "Infrastructure (UBS): HubSpot and CRM data-refresh activities and RECON loading across APAC and EMEA."
      },
      {
        "week": 36,
        "kind": "summary",
        "epics": [
          "EP-30"
        ],
        "phase": "Release planning",
        "text": "CX Systems: Utah University WhatsApp onboarding and workflow."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Audit and compliance surface",
        "status": "On track",
        "text": "The audit views gained a date scope, the auth and access feeds were unbound from each other, and page views are date-filtered and aggregated by app. Behind them, the Pulse event graph is now gated on the CX product entitlement and compliance_log reads are scoped by row-level security, both promoted to eu-west-2. The Auth API’s own internal CRUD rows stay out of the auth view."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-20"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "HolonIQ / HolonOS",
        "status": "On track",
        "text": "Curation and admin editing moved off the Auth0 Admin role onto the Curate account feature, customer-admin features gated on the QAS CXACCESS product admin role, CX admins resolving as hiq_admin in the Postgres role, and LegacyPulse mounted, each promoted from qas-staging to qas-prod."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Seat and subscription data",
        "status": "On track",
        "text": "The Seat/Peer quantity backfill closed: 734 quantities applied and confirmed on both sides (SEAT 383, PEER 351), with seat_count derived from SEAT line quantity under an owner ruling, shadow and native subscription rows unified in the account_view merge, and the ZXH0 seat-quantity conflict resolved by shelving migration 011. RLS audit tooling and the delta2 migrations landed alongside it."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-26"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Design System (qas-design)",
        "status": "On track",
        "text": "2.1.27 through 2.1.35: the Calendar component exported from the package root, the block cards unified into one Card with a variant each, resizable self-sizing columns, the released roleOptions contract held to privileged-first lists with a last-entry fallback, and the launcher registry brought in line: Factfiles renamed, QS Analytics kept on the holoniq app id, and QS Recruitment Admin added as an alpha."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-87"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "CX FE",
        "status": "On track",
        "text": "The detail users tab filterable by role, status and product access, with its count labelled matched rather than total; products not yet started tagged Scheduled instead of Expired, with licence figures sourced from their scheduled terms; and resizable self-sizing columns swept across every table, including the embargo list and user-detail cards. 17 merged PRs."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "MyQS FE",
        "status": "On track",
        "text": "‘Scheduled’ now drawn wherever a subscription’s status appears, with tests pinning how a subscription’s window is read and how the scheduled state travels through the catalogue and the grant path; the compliance log’s columns typed as TableView types them; and resizable columns adopted."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Supergraph",
        "status": "On track",
        "text": "The Pulse event graph gated on the CX product entitlement and compliance_log given row-level security, both promoted to eu-west-2; QS Recruitment Admin registered as an alpha app, with its registry migration corrected off the product.created_by foreign key; and contract artefacts synced to production release 622558fd."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Security · Senthil Kumar",
        "title": "Penetration testing",
        "status": "",
        "text": "Progressed penetration testing activities for MoveON, MoveIN and 1 Mentor, with an enhanced focus on access control and API security testing."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Security · Senthil Kumar",
        "title": "BCP/DR programme",
        "status": "",
        "text": "Continued driving the BCP/DR programme across key QS products, including recovery planning, BIA workshops and resilience-testing preparation."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-80"
        ],
        "team": "Infrastructure · Ashok",
        "title": "Penetration-test execution and asset inventory",
        "status": "",
        "text": "Executed penetration-testing activities by running the commands provided by the external penetration-testing team and supplying the resulting outputs, and provided the complete D&E AWS asset inventory to support security PoC activities."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "Infrastructure · Ashok",
        "title": "MoveON",
        "status": "",
        "text": "",
        "bullets": [
          "Completed migration of the AWS Canada PlatformPHP servers to Ubuntu 24.04.",
          "Configured XCP-ng RAID disk and local storage monitoring using Zabbix LLD and Trapper across the Telemaxx XCP-ng servers.",
          "Completed configuration and preparation of the PlatformPHP and AdvPub Webmaster servers in OVH France and Telemaxx for upcoming migrations.",
          "Configured the MoveOnHub Live migration from Ubuntu 18.04 to Ubuntu 24.04, including PHP upgrades.",
          "Completed approximately 50 per cent of the France MySQL 8.4.7 migration programme and resolved migration-related application performance issues.",
          "Completed the Advanced Publisher France migration to a new web server and MySQL platform, including hotfix deployment and backup validation.",
          "Applied planned security patching across the AWS Canada MoveON environments through Uyuni patch management.",
          "Upgraded the PMM monitoring servers in France and Telemaxx, including security and lifecycle improvements.",
          "Completed the Redis and Memcached migration to containers in the London environment and enabled Zabbix monitoring for the new services.",
          "Strengthened Advanced Publisher security by blocking unwanted wp-json API endpoint requests through Cloudflare.",
          "Progressed Jenkins hotfix automation by integrating regression testing and defining an approach for automated and on-demand execution."
        ]
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-84"
        ],
        "team": "Infrastructure · Ashok",
        "title": "MoveIN",
        "status": "",
        "text": "",
        "bullets": [
          "Developed an Ansible playbook and AWS CDK automation template covering Elasticsearch, Kibana and OS upgrades.",
          "Continued the Shibboleth SSO implementation for the remaining City University environments.",
          "Upgraded and prepared the Outreach pre-production environment."
        ]
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Infrastructure · Ashok",
        "title": "TU/TM autoscaling",
        "status": "",
        "text": "Updated the TU/TM autoscaling base template and deployment automation configuration."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-82"
        ],
        "team": "Infrastructure · Ashok",
        "title": "HubSpot and CRM data refresh",
        "status": "",
        "text": "Progressed HubSpot and CRM data-refresh activities across the APAC and EMEA regions, including data exports, scheduling, data sharing and RECON loading."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-31"
        ],
        "team": "BLR2 · Simon Hall",
        "title": "MyQS",
        "status": "On track",
        "text": "Hardened the NextAuth OAuth flow with explicit cookie configurations for state, pkceCodeVerifier and nonce (HttpOnly, SameSite=lax, 15-minute TTL, __Secure- prefix on HTTPS); useSecureCookies now derives from the NEXTAUTH_URL protocol; and stale-cookie cleanup fixed in the Auth0 sign-in route. Corrected inaccurate Latin America regional stats in the Rankings overview, restricted the Data Synchronisation area to super-admin users, fixed a login issue where a user’s linked institution could be incorrectly reset, fixed the institution selector dropdown filtering in Stars, and updated platform dependencies to patch vulnerabilities."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-46"
        ],
        "team": "BLR2 · Simon Hall",
        "title": "Stars",
        "status": "On track",
        "text": "Restructured the Stars navigation menu with clearer icons and reorganised sub-sections (Overall Summary, Methodology, Category Deep Dive); redesigned the ratings summary and category deep-dive for clearer presentation; migrated app-wide typography to PP Telegraf across dashboards, popups, exports and navigation; and fixed post-rollout regressions (multiselect, tooltip import)."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR2 · Simon Hall",
        "title": "Partner Discovery",
        "status": "On track",
        "text": "Delivered the full Message Centre: a conversation inbox, threaded chat view, composer, floating launcher and a dockable window accessible from anywhere in the module; edit and delete with undo; real-time new-message alerts and unread indicators surfaced on the activity dashboard; and downloadable conversation transcripts. Introduced a new directory filter panel with active filter chips and a rank-range selector, improved the add-partnership review-and-save flow and the manage-partnerships editing experience, and made notifications more actionable with direct links."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR2 · Simon Hall",
        "title": "QA",
        "status": "On track",
        "text": "Testing Message Centre functionality: unread counts, search, filters, conversation states, incoming notifications, and the edit and delete flows."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR1 · Simon Hall",
        "title": "QPD enhancements",
        "status": "On track",
        "text": "Finished development of platform improvements across opportunity management, notifications, messaging, filtering, navigation, visibility settings and overall user experience, with testing now under way in QA."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-19"
        ],
        "team": "ECU1 · Jonnathan Pena",
        "title": "IBM white-label",
        "status": "Shipped",
        "text": "Delivered the general platform toggle and favicon text customisability for IBM, in release 74.7.3."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2 · Paula Jiminez",
        "title": "Site security headers",
        "status": "Shipped",
        "text": "Rolled out core protective headers across the site and completed an audit defining the content security approach, reducing exposure to clickjacking and script injection."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2 · Paula Jiminez",
        "title": "Crawler and bot access policy",
        "status": "On track",
        "text": "Finished the design spike defining what search engines and AI crawlers should and should not be able to access as part of the Career Match rollout."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2 · Paula Jiminez",
        "title": "Career Match analytics",
        "status": "Shipped",
        "text": "Added step-level tracking to the Career Match journey, showing exactly where students drop off rather than just whether they started or completed the journey."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2 · Paula Jiminez",
        "title": "Site stabilisation",
        "status": "Shipped",
        "text": "Continued consolidating duplicated content into single sources of truth, reducing the risk of pages going out of sync."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2 · Paula Jiminez",
        "title": "Accessibility",
        "status": "Shipped",
        "text": "Completed follow-up contrast and code-quality fixes from the earlier accessibility review."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events · Catarina Cunha",
        "title": "New servers",
        "status": "On track",
        "text": "The testing phase is ongoing."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "QS Apply · Sreeram Sreekumar",
        "title": "Appian migration discovery",
        "status": "On track",
        "text": "The discovery phase has started, with stakeholder workshops scheduled for next week."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-54"
        ],
        "team": "UBS Development · Mohd Azhar Mohd Razman",
        "title": "HubSpot transition",
        "status": "On track",
        "text": "The Appian development team has been briefed on the HubSpot development and API migration work; sandbox access has been granted, with Clare updating Jira so tickets can be assigned; each developer will be assigned an institution sandbox portal to begin development; and a list of training videos has been provided."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development · Mohd Azhar Mohd Razman",
        "title": "Informatica replacement",
        "status": "On track",
        "text": "S3 flat-file replacement: development complete for Griffith in sandbox, ready for deployment. Keystone integration replacement: development complete for RCA and ECU in sandbox, ready for QA."
      },
      {
        "week": 36,
        "kind": "item",
        "epics": [
          "EP-30"
        ],
        "team": "CX Systems · Fahad Door",
        "title": "WhatsApp",
        "status": "",
        "text": "Onboarded Utah University and established its workflow; coordinated with Niswey and Rez on the consent workflow; completed the WhatsApp and Meta account documentation; and following up with Niswey on the payment method for WhatsApp accounts."
      },
      {
        "week": 36,
        "kind": "risk",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "text": "Content Security Policy still to land. The stricter part of the security hardening work, including the CSP, is still in progress and needs to land before the site can be considered fully hardened. No blockers at the moment."
      },
      {
        "week": 36,
        "kind": "risk",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events",
        "text": "Angular upgrade: testing on the new servers continues. Drupal upgrade: fixing issues arising from the code merging."
      },
      {
        "week": 36,
        "kind": "risk",
        "epics": [
          "EP-84"
        ],
        "team": "Infrastructure",
        "text": "MoveON: the France MySQL migration remains in progress; the Redis/Memcached containerisation rollout needs continued validation; the Advanced Publisher file-access restrictions need testing before production. MoveIN: the RabbitMQ production OS upgrade awaits development approval, and Elasticsearch upgrade validation awaits the testing team."
      },
      {
        "week": 36,
        "kind": "risk",
        "epics": [
          "EP-54"
        ],
        "team": "UBS Development",
        "text": "Portal access rights. Some team members are still missing the correct portal access rights; flagged to Gwyneth."
      },
      {
        "week": 36,
        "kind": "risk",
        "epics": [
          "EP-88"
        ],
        "team": "UBS Development",
        "text": "Informatica contract ends 22 December 2026, with no plan to extend. The S3 flat-file and Keystone work is on track, but the York MS Dynamics replacement is not confident by year-end; a temporary flat-file import is agreed as the fallback."
      },
      {
        "week": 35,
        "kind": "summary",
        "epics": [
          "EP-43"
        ],
        "phase": "Released",
        "text": "SYD1: MyQS production cutover; audit and compliance surface; QS Auth; product access and role vocabulary; identity data load; QS Supergraph; MyQS FE; CX FE. D&E infrastructure: my.qs.com DNS and deployment support."
      },
      {
        "week": 35,
        "kind": "summary",
        "epics": [
          "EP-20"
        ],
        "phase": "Released",
        "text": "SYD1: HolonIQ migration (my.holoniq.com to holoniq.qs.com)."
      },
      {
        "week": 35,
        "kind": "summary",
        "epics": [
          "EP-60"
        ],
        "phase": "Building",
        "text": "SYD1: QS Agent and MCP (Claude Opus 5, warm-up, production skills registry)."
      },
      {
        "week": 35,
        "kind": "summary",
        "epics": [
          "EP-32"
        ],
        "phase": "Building",
        "text": "SYD1: Cerebrum FE."
      },
      {
        "week": 35,
        "kind": "summary",
        "epics": [
          "EP-26"
        ],
        "phase": "Building",
        "text": "SYD1: Design System 2.1.0 to 2.1.25."
      },
      {
        "week": 35,
        "kind": "summary",
        "epics": [
          "EP-31"
        ],
        "phase": "Released",
        "text": "BLR2: MyQS (new auth with subdomains to live); QA (MyQS regression testing)."
      },
      {
        "week": 35,
        "kind": "summary",
        "epics": [
          "EP-46"
        ],
        "phase": "Building",
        "text": "BLR2: Stars. D&E infrastructure: stars.qs.com hosting."
      },
      {
        "week": 35,
        "kind": "summary",
        "epics": [
          "EP-16"
        ],
        "phase": "Prototype",
        "text": "BLR2: Partner Discovery; QA (Chat Composer and Export testing, QPD estimations). BLR1: QPD enhancements. D&E infrastructure: partnerdiscovery.qs.com hosting."
      },
      {
        "week": 35,
        "kind": "summary",
        "epics": [
          "EP-33"
        ],
        "phase": "Released",
        "text": "D&E infrastructure: rankings-preview.qs.com hosting (Factfiles, renamed Rankings Preview)."
      },
      {
        "week": 35,
        "kind": "summary",
        "epics": [
          "EP-19"
        ],
        "phase": "Building",
        "text": "ECU1: IBM instance adjustments; next release with the IBM-requested changes."
      },
      {
        "week": 35,
        "kind": "summary",
        "epics": [
          "EP-7"
        ],
        "phase": "Released",
        "text": "ECU2: career recommendation accuracy; Career Match analytics; TopUniversities integration; site stabilisation; content and style fixes. Events and Drupal: Career Matcher post-release changes."
      },
      {
        "week": 35,
        "kind": "summary",
        "epics": [
          "EP-30"
        ],
        "phase": "Release planning",
        "text": "CX Systems: Sunway University onboarding (Aircall, Sakari and HubSpot)."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-43"
        ],
        "signal": "Released",
        "text": "Single sign-in for all future QS platforms, delivered on the end-of-August target; migrating users reset their password and re-establish MFA."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-20"
        ],
        "signal": "Released",
        "text": "All HolonIQ logins moved onto QAS Auth alongside the main release."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-26"
        ],
        "signal": "Accelerating",
        "text": "Phase One closes in August for the Brand review and publishes at a stable URL; Phase Two (September–November) delivers the application building blocks."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-60",
          "EP-32"
        ],
        "signal": "Experimental",
        "text": "QAS data exposed to AI agents, and the Cerebrum data asset brought into QAS, under the permissioning model. Experimental through 2026, subject to appetite for an MCP and to Cerebrum covering more data assets."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-30"
        ],
        "signal": "Closing out",
        "text": "All campuses launched; issues, gaps and technical debt accumulated through the rollout still to close out."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-56"
        ],
        "signal": "Active",
        "text": "Lead scoring through HubSpot’s built-in model (Simon Pennington); data science also exploring the student model."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-47",
          "EP-54"
        ],
        "signal": "In scoping",
        "text": "WeChat plugged into Aurora and the HubSpot instances (Simon Pennington); the Appian move scoped by James Healy with Claire."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-53",
          "EP-48",
          "EP-40"
        ],
        "signal": "Data dependency",
        "text": "Call-transcript insight depends on call-data extraction led by Adam; the partner reporting app depends on University Services data reaching Cerebrum."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-8",
          "EP-9"
        ],
        "signal": "Hypothesis stage",
        "text": "One Jira ticketing system across regions; document credibility scoring off the shelf; Power BI over HubSpot data rather than a QAS app."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-7",
          "EP-71"
        ],
        "signal": "Released; Phase 2 in prototype",
        "text": "The first epic of the TU career application has shipped; Phase 2 is being scoped in Tech Week Three."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-27"
        ],
        "signal": "Scoping the move",
        "text": "The candidate engagement and digital events side of the Appian to HubSpot move; James Healy leads the scoping."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-64",
          "EP-59",
          "EP-65",
          "EP-66",
          "EP-67",
          "EP-68",
          "EP-69",
          "EP-70"
        ],
        "signal": "Early stage",
        "text": "Newly added D&E items: Events Journey Redesign, TU.com Cookie Compliance, University Profiles and QS Stars Commercial Models, Applicant Journey Optimisation, TU.com Student Voice and Programmatic SEO & AEO (scoping), plus TU Experiment (prototype). Status commentary to follow."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-46"
        ],
        "signal": "In build",
        "text": "Largely built and being refined; launch expected early September."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-16"
        ],
        "signal": "Back to Build Ready",
        "text": "Latest enhancements pass Build Ready again; the next release makes it a full QAS application (permissioning and authentication) before any customer release."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-18"
        ],
        "signal": "Back in scoping",
        "text": "First standalone QAS version of HolonIQ rankings, WUR first; through Build Ready and wired into QAS before launch. Likely to displace the Factfiles rankings preview."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-25"
        ],
        "signal": "Build Ready soon",
        "text": "More prototype work before the next Build Ready milestone, expected within weeks."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-19",
          "EP-34"
        ],
        "signal": "Committed",
        "text": "1 Mentor enhanced to the functionality sold in the signed IBM contract; multilingual support for Central Asian customers."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-31",
          "EP-33",
          "EP-38"
        ],
        "signal": "Released",
        "text": "MyQS 1.0 on QAS Auth; Factfiles migrated with its release issues resolved; dormant MyQS 1.0 technology kept available for reference."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-52"
        ],
        "signal": "Priority",
        "text": "Identified as an important priority at the last Tech Week."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-21"
        ],
        "signal": "Needs prototype work",
        "text": "Significant work to reach a clear prototype; a priority to work through with Lee."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-28",
          "EP-36"
        ],
        "signal": "Open question",
        "text": "Remove the MIMO dependency for Stars and evaluation data collection, probably with an off-the-shelf solution; AI evaluation likely shares the technology."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-41"
        ],
        "signal": "Partially scoped",
        "text": "QAS permissions will track QS One membership for embargoed rankings access; what QS One is and is not still needs scoping."
      },
      {
        "week": 35,
        "kind": "hypothesis",
        "epics": [
          "EP-14",
          "EP-15",
          "EP-50",
          "EP-55",
          "EP-51",
          "EP-61",
          "EP-63"
        ],
        "signal": "Early stage",
        "text": "Very early scoping; the HolonIQ-to-QAS moves follow one pattern. The analytics items were added since the August review; commentary to follow."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "MyQS production cutover",
        "status": "On track",
        "text": "MyQS now serves from my.qs.com. The Auth0 tenants were cut over with a my2.qs.com transition window kept open, the design system followed, production invitation URLs were repointed, and the MyQS1 partner-discovery origin was synced from live prod."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-20"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "HolonIQ migration",
        "status": "On track",
        "text": "my.holoniq.com is now holoniq.qs.com. On the front end the launcher resolves the MyQS subdomain from an allowlisted key, qas-design was adopted up to 2.1.19, QS Pulse activity tracking was mounted behind PULSE_INGEST_URL, and each change was promoted from holoniq-qas to qas-prod. On the back end, org-link resolution was reworked over qs_core_id, ranking_item_id and hrit_id; the renamed QAS membership role vocabulary and the ranking_master account type are accepted in the consumer derivation; native and derived subscription rows are merged in account_view; and the DMS QAS sync was retired. 18 merged PRs and 39 commits across three HolonOS repositories."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Audit and compliance surface",
        "status": "On track",
        "text": "Four log views on /audit-and-logs (auth audit, app and service access, page views and account operations), backed by attribution carried the whole way through: Auth-API records endpoint and token-derived origin into compliance_log, Pulse derives the application from the Auth0 redirect target, the supergraph exposes it on both compliance nodes, and CX names applications from the registry. Views page server-side, and the Auth API’s own internal CRUD rows are kept out of the auth view."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Auth",
        "status": "On track",
        "text": "Passkey logins exempted from MFA and MFA_SKIP_FOR_PASSKEY declared so imports stop wiping it; MFA waived for silent-auth continuations of proved sessions; MFA promoted to Always on prod; ACUL bundles rebuilt and re-pinned across both tenants; and a full email-copy refresh from Ming: a welcome overhaul, a branded MFA code template and a linked Support Team in place of support@qs.com."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Product access and role vocabulary",
        "status": "On track",
        "text": "The membership role vocabulary renamed from admin/pro to account_*/product_*, applied to both clusters on 25 August and rolled out in phases: the federation made admin checks vocabulary-agnostic first, the API and front ends accepted both vocabularies through the transition, then the aliases were retired. Ming added the full-replace update-user-products and QS-admin bulk grant endpoints, and per-product role editing landed in both CX and MyQS."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Identity data load",
        "status": "On track",
        "text": "The identity reload from the Mapping Master CSVs was applied to eu-west-2 on 26 August, followed by the MyQS pre-approved users set and the 28 August wave cut, with the account subscriptions data import completed as part of the same load. Pre-go-live outbox events were backfilled for the auth_user rows and the org link, and a local Postgres rehearsal database now rebuilds from schema.sql."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-60"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Agent and MCP",
        "status": "On track",
        "text": "Claude Opus 5 is now the agent’s main model; thinking and tool progress stream before the first answer token; an authenticated warm-up ping builds and parks the whole session so the first real message is fast; production skills are served from an eu-west-1 registry; and the Cerebrum registry tool runs in production behind a product gate."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Supergraph",
        "status": "On track",
        "text": "Origin, endpoint, token and redirect-target attribution exposed on both compliance event nodes and promoted to eu-west-2; the page-view path promoted to a first-class product-lane Pulse field; lastActionAt computed columns added across auth_user, account and account_user; the retired userAccountProductAccess block removed; and reviewed contract artefacts synced to four production releases."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-26"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Design System (qas-design)",
        "status": "On track",
        "text": "2.1.0 through 2.1.25: resizable and reorderable table columns, per-product role granting from the table, a Tile component, the PageMoved screen, LegacyPulse, and a reworked launcher catalogue: Factfiles renamed to Rankings Preview and moved to its own subdomain, QS Stars promoted to a product app, and Stars and Partner Discovery badged alpha."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "MyQS FE",
        "status": "On track",
        "text": "The account administration release: people, products, compliance, security and profile surfaces; the rankings calendar read from the rankings-admin API; cookie purpose toggles applied immediately; and unmatched paths sent to the estate’s moved-page screen. Ming hardened invitations so mail scanners cannot auto-accept and the token survives the completion leg."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "CX FE",
        "status": "On track",
        "text": "The four audit views with server-side paging; a Security column showing the factors each person has enrolled, with its own server-side filter; bulk user adding; per-product role editing on the account users table; a category filter on products; and Last Active read from the auth database’s lastActionAt rather than Pulse. 51 merged PRs, the busiest repo of the week."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Cerebrum FE",
        "status": "On track",
        "text": "Activity now reported to Pulse through the shell tracker, the agent session warmed before the user’s first message, and qas-design taken to 2.1.19 with its estate defaults and theme plugin adopted."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-33",
          "EP-46",
          "EP-16",
          "EP-86"
        ],
        "team": "Infrastructure · D&E",
        "title": "qs.com app hosting",
        "status": "",
        "text": "Completed deployment and hosting setup for the rankings-admin, rankings-preview, stars and partnerdiscovery platforms using Docker, Nginx and AWS ALB."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "Infrastructure · D&E",
        "title": "my.qs.com DNS",
        "status": "",
        "text": "Supported my.qs.com DNS updates and deployment activities."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-31"
        ],
        "team": "BLR2",
        "title": "MyQS",
        "status": "On track",
        "text": "Shipped the new auth with subdomains to live. Added role-based access control for Rankings Admin via CX roles; fixed the institution switcher for Rankings and Stars; resolved an infinite redirect loop for users with no CX accounts and added expired CX session handling; built the Rankings Calendar API endpoint; replaced the access-restricted screen with a redirect to the request-demo page; and integrated the Legacy Pulse component for Stars users."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-46"
        ],
        "team": "BLR2",
        "title": "Stars",
        "status": "On track",
        "text": "Renamed ‘Overall Summary’ to ‘Summary’ across the header and sidebar, and applied visual polish to the summary cards and modal (typography, icon alignment and spacing)."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR2",
        "title": "Partner Discovery",
        "status": "On track",
        "text": "Reworked incoming-interest read state to sync across the dashboard, lists and notifications in one action; tightened access control on interest read actions; added a verified badge on staff and faculty profiles; and refreshed the Smart Match promo panel. Now adding region-based directory filtering, previous/next navigation on profile and detail pages, and a ‘Hidden’ partnership visibility option."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-31",
          "EP-16"
        ],
        "team": "BLR2",
        "title": "QA",
        "status": "On track",
        "text": "Completed Chat Composer and Export testing, MyQS regression testing and QPD ticket estimations. Waiting for Products access to begin sanity testing."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR1",
        "title": "QPD enhancements",
        "status": "On track",
        "text": "Started work on multiple platform improvements spanning opportunity management, notifications, messaging workflows, filtering, navigation, visibility settings and user experience enhancements."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-19"
        ],
        "team": "ECU1",
        "title": "IBM instance",
        "status": "On track",
        "text": "Worked on several adjustments requested for the IBM instance."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Career recommendation accuracy",
        "status": "Shipped",
        "text": "Fixed a bug sending students to unrelated subject results, and capped and prioritised matches so the strongest ones surface first."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Career Match analytics",
        "status": "Shipped",
        "text": "Fully instrumented the Career Match journey in Mixpanel, giving pathway-level funnel visibility for the first time."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "TopUniversities integration",
        "status": "Shipped",
        "text": "Career Match results now link directly to the matching subject page on topuniversities.com instead of a generic link."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Site stabilisation",
        "status": "Shipped",
        "text": "Removed unused code and consolidated duplicated styling logic to keep the codebase easy to maintain."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Content and style fixes",
        "status": "Shipped",
        "text": "Minor content correction and header spacing polish."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "Digital and Events",
        "title": "Career Matcher",
        "status": "On track",
        "text": "Changes requested after the main release are ready and in the testing phase."
      },
      {
        "week": 35,
        "kind": "item",
        "epics": [
          "EP-30"
        ],
        "team": "CX Systems",
        "title": "Sunway University",
        "status": "",
        "text": "Onboarding onto Sakari and integration with the HubSpot portal; flow testing and amendments; voicemail set up."
      },
      {
        "week": 35,
        "kind": "risk",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1",
        "text": "User load needs QA and sign-off. The identity load is applied with minor loose ends still to close; it needs a QA pass and formal sign-off before it can be called done."
      },
      {
        "week": 35,
        "kind": "risk",
        "epics": [
          "EP-16"
        ],
        "team": "BLR2",
        "text": "QPD admin module. Currently inaccessible owing to the deprecated Back Office. A decision is needed on where this will live now."
      },
      {
        "week": 35,
        "kind": "risk",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "text": "Exploratory phase. The team is working through what the microsite needs next; this week that surfaced crawler and bot protection as a new priority."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-20"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "HolonIQ to QAS migration",
        "status": "Delivered late",
        "text": "Production cutover done, later than planned. Shared-client origins and the M2M audience move landed in the Auth0 tenant, and HolonIQ claims are stamped on access tokens. On the data side, entitlement_outbox joined the production DMS selection rules with an append-only posture enforced against default ACLs; account and account_organization_authority were added as the sixth and seventh outbox entities; and the entitlement forwarder went live against the HolonIQ production bus, enriching org-link events with the legacy core id through an S3 crosswalk."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Auth",
        "status": "On track",
        "text": "ACUL production cutover: an email-first, passkey-first login and signup with consent collected once at the OTP step, replacing the three-policy line with QS General Terms and a marketing opt-in that persists to user_preference. passkey_enrolled now syncs from Auth0 log events and the post-login hook, user-facing Auth0 links are minted on the tenant custom domain, and hook auth became pipeline-owned so the drift warning could be retired."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Account invitations and user lifecycle",
        "status": "On track",
        "text": "Invited users are now created eagerly with a pending membership and carry an invited status end to end: the People table shows the lifecycle plus who invited whom and when; CX badges invited users in amber and uses the MyQS invitation flow; a dedicated resend endpoint backs the re-invite button; brand-new invitees are handed to hosted signup before acceptance; and an already signed-in invitee is no longer re-prompted."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Compliance and Pulse audit",
        "status": "On track",
        "text": "The eu-west-2 production assembly shipped (Snowflake-only and SQS-buffered), with per-environment CORS admitting the qs.com estate and a production audience and claim namespace. Event routing was corrected, and CX moved both its analytics and audit consumers onto the supergraph, retiring the REST client. Last week’s compliance_log outage risk is closed."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Supergraph",
        "status": "On track",
        "text": "CX cross-account read paths opened behind the CX product entitlement, with the customer-facing account attributes exposed deliberately and the commercial ones omitted from schema generation; distinct-actor counts on the cross-account compliance page; the Pulse product and debug lanes served from dedup views; contract artefacts synced to two production releases; and us-east-1 delivered from dev while eu-west-2 stays on main."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-26"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Design System (qas-design)",
        "status": "On track",
        "text": "A shared three-step profile form exported on a ./profile-form subpath and raised from QSThemeProvider; the www.qs.com cookie consent adopted instead of re-asking in each app; a pre-paint theme plugin shipped from ./vite; and portal-first login, so satellites bounce to MyQS rather than self-hosting interactive login. The week closed on 2.1.0: a shell-wide toast provider from Caitlin, and the auth profile republished as a state every consumer must handle. 2.0.14 to 2.1.0."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "MyQS FE",
        "status": "On track",
        "text": "Real QS conference and rankings calendars on the home dashboard, a full product catalogue page, My Profile and cookie settings; the app’s own onboarding gate dropped in favour of the shell’s. Onboarding is live, closing last week’s behind item. Promoted to production on 22 August on qas-design 2.1.0, with every save, cancel and failure now reported through the shared toast."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "CX FE",
        "status": "On track",
        "text": "KPI cards and stat rows rebuilt on measured counts rather than placeholders; audit search exportable as CSV with pagination and debounce fixes; products moved from cards to a searchable table; account profile fields and a home active-users chart; and page feedback now raised through the shell toast provider. Released on qas-design 2.1.0."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "MyQS rename and analytics subdomain",
        "status": "On track",
        "text": "The promotion hop now targets my2.qs.com, the prod SPA identity is aligned to the rename, VITE_APP_MYQS_KEY is exported from the qas/auth0 secret across MyQS, CX and Cerebrum, and the Webflow login page’s MyQS links now point at my2.qs.com. The database-side analytics subdomain rename is staged behind a two-stage cutover timeline and the front-end change is deliberately held."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-60"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Platform and infra",
        "status": "On track",
        "text": "MCP brought up on the eu-west-2 production estate with estate-aware runtimes and a product-entitlement access model; QAS-Infra now accepts environment=production and routes prod branches through cfg.is_production; and CloudFormation no longer manages the data-gql Snowflake secret value."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Cerebrum FE",
        "status": "On track",
        "text": "Estate config gated at build and boot with cross-estate defaults removed; the supergraph URL sourced from the qas/auth0 secret; the obsolete CerebrumAccessGuard retired now that product entitlement governs access; and ContentLayout, TableView and ListWidget adopted across the app."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum",
        "title": "Data pipeline (dbt and Dagster)",
        "status": "",
        "text": "Entity ingestion is live end to end. A submitted data package is now validated through ten stages and committed to the core store, with every change versioned and attributed. This was the week’s main body of work."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum",
        "title": "Front end and Registry API",
        "status": "",
        "text": "Entity search and version history. Staff can search records by QS ID, see an entity’s current state and step through its history with a property-level diff of what changed at each version. Live and verified end to end."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum",
        "title": "Data store (Snowflake)",
        "status": "",
        "text": "Every change is traceable. The history model treats the original data load as a real commit rather than a special case, so ‘this value has always been here’ is now an auditable answer instead of a gap."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum",
        "title": "Data pipeline (dbt)",
        "status": "",
        "text": "Validation records rather than blocks where it should. Records that predate a schema change, or reference something since withdrawn, are flagged and still accepted, so one schema edit cannot halt ingestion across the whole estate."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum",
        "title": "Infrastructure (AWS)",
        "status": "",
        "text": "Moved to London (eu-west-2), alongside QS ID issuing and the registry’s production deployment target."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum",
        "title": "Fixes",
        "status": "",
        "text": "",
        "bullets": [
          "Data store: a data-integrity bug in the merge, caught before it mattered. The commit procedure looked transactional but was not; found, fixed and verified against real data.",
          "Registry API: a deployment ceiling removed. The service was 1.5 KB below a hard AWS limit; restructured to leave permanent headroom.",
          "Data pipeline: a validation stage that was passing falsely because one check read an empty table."
        ]
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR2",
        "title": "Partner Discovery",
        "status": "On track",
        "text": "Launched in-app messaging with chat threads, attachments, transcript export and role-based access controls. QA validation of the role-based modules is complete; chat composer and export testing is in progress."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-86",
          "EP-46",
          "EP-31"
        ],
        "team": "BLR2",
        "title": "MyQS",
        "status": "On track",
        "text": "Launched Rankings Admin in Back Office, completed the QS Stars visual refresh and shipped auth session synchronisation fixes."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR1",
        "title": "MyQS QPD",
        "status": "On track",
        "text": "Completed role-based feature segregation for the QPD Dashboard; the solution is in business validation and approaching production deployment."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-19"
        ],
        "team": "ECU1",
        "title": "IBM integration",
        "status": "On track",
        "text": "SSO for IBM has been completed and the IBM white-label configuration has been set up. These IBM-requested changes will be deployed to production."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Candidate journey analytics (Mixpanel and HubSpot)",
        "status": "Shipped",
        "text": "The team can now see how candidates move through Career Match and where they drop off."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Site protection and quality gate",
        "status": "Shipped",
        "text": "The main site can no longer be updated without passing full automated checks first, reducing the risk of bugs reaching production."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Form accessibility improvements",
        "status": "Shipped",
        "text": "Reduced friction and confusion in form fields for candidates who need extra help."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Mobile experience polish for Career Match results",
        "status": "Shipped",
        "text": "Completed."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Parity fixes against the TopUniversities site",
        "status": "On track",
        "text": "Header, footer and link parity fixes are in progress."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "Digital and Events",
        "title": "Career Matcher",
        "status": "Shipped",
        "text": "Released and working as requested."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events",
        "title": "Angular upgrade",
        "status": "On hold",
        "text": "All issues fixed, but the release is on hold until the new servers are set up and tested."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-82"
        ],
        "team": "UBS HubSpot Systems",
        "title": "Data updates for missing COI objects",
        "status": "Ongoing",
        "text": "The process has started to update all missing COI objects across all portals."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-82"
        ],
        "team": "UBS HubSpot Systems",
        "title": "V2 contact matching workflow",
        "status": "Done",
        "text": "Added to all portals."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-82"
        ],
        "team": "UBS HubSpot Systems",
        "title": "Griffith email and data",
        "status": "Done",
        "text": "Fixed the missing-email issues and updated missing COI objects so that nurture flows could be turned on."
      },
      {
        "week": 34,
        "kind": "item",
        "epics": [
          "EP-30"
        ],
        "team": "CX Systems",
        "title": "Sunway University",
        "status": "",
        "text": "Initiated procurement of a Malaysian (MY) number; set up Aircall–HubSpot Help Desk pipelines; and initiated onboarding of the WhatsApp integration for the landline number."
      },
      {
        "week": 34,
        "kind": "risk",
        "epics": [
          "EP-20"
        ],
        "team": "SYD1",
        "text": "HolonIQ needs connecting to QAS Pulse. Now that HolonIQ is in production, its events still need to reach the Pulse pipeline."
      },
      {
        "week": 34,
        "kind": "risk",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1",
        "text": "Marketing consent is not yet piped through to HubSpot. The opt-in is captured at signup and persisted to user_preference, but nothing forwards it to HubSpot yet."
      },
      {
        "week": 34,
        "kind": "risk",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum",
        "text": "A concurrency safeguard is switched off until someone sets it: the protection against two simultaneous submissions colliding on one record lives in a deployment setting, not in code. Decision: who sets it, and whether before or after the first real backfill. A history-backfill fix is still open, and entity type definitions are behind schedule."
      },
      {
        "week": 34,
        "kind": "risk",
        "epics": [
          "EP-16"
        ],
        "team": "BLR2",
        "text": "Partner Discovery admin module. It lives in the Back Office, which has moved to legacy, and is still required for some QPD features. Decision needed: migrate it into the Partner Discovery app or create a standalone app. Decision owner to be determined."
      },
      {
        "week": 34,
        "kind": "risk",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events",
        "text": "Angular upgrade. The decision has been made to wait for the new servers to be set up before releasing this new version."
      },
      {
        "week": 34,
        "kind": "risk",
        "epics": [
          "EP-30"
        ],
        "team": "CX Systems",
        "text": "Sunway WhatsApp onboarding. The current number is a landline rather than a mobile number, and Aircall and Twilio do not currently offer Malaysian mobile numbers."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Auth",
        "status": "On track",
        "text": "Production Auth0 estate live on eu-west-2: auth.api.qs.com routes verified, SES sending from no-reply@my.qs.com, WebAuthn passkey and security-key factors enabled, and MFA enforcement moved to the QAS MFA Policy action. Auth-API now accepts QS platform-audience tokens and makes the current_account_id claim namespace deployment-configurable."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "QS Supergraph",
        "status": "On track",
        "text": "Federation delivery stack parameterised over regions, with an eu-west-2 production target and per-region schema-release credential secrets; RFC 9068 client-credentials tokens accepted at the schema-release guard; qs.com origins allowed at the router; and the qas_application catalogue added and exposed in the auth subgraph, superseding product.subdomain."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-26"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Design System (qas-design)",
        "status": "On track",
        "text": "2.0 landed, dropping Tailwind and Flowbite, then 2.0.2 to 2.0.14 shipped across the week: a configurable app-launcher base domain, a LegacyAppLauncher subpath entry, Auth0 audience and auth-API base URL made configurable, and atomic release pushes. With Caitlin: dropdown redesign, new table cell types, responsive grid and profile data, and the app visibility model. Adopted by MyQS, CX, RR, CBR and MyQS 1.0 Legacy."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "MyQS FE",
        "status": "Behind",
        "text": "Passkey enrolment and restructured sign-in methods with live method statuses; a real compliance audit page behind admin route guards; home dashboard; and standardised account pages. With Caitlin: home dashboard cards, personal information fields and the global profile-completion onboarding flow. Behind: the user onboarding flow is merged to main but not ready to go live, so the surface cannot be released as planned."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "CX FE",
        "status": "On track",
        "text": "Account details, contacts and subscription management released to main; user management filtering, invitation resend and typed tables; admin gating; UTC subscription dates and currency preserved on edit; and the Amplify environment hardened to source everything from qas/auth0 and fail fast."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Compliance and Pulse audit",
        "status": "Behind",
        "text": "Pulse split into purpose lanes with a dedicated compliance audit path: stable event_id derivation, batch deduplication, dead letters filed once per acknowledged batch, and alarms on the event_id metrics. Auth-API records old/new diffs and product attribution for server-side mutations. Behind: the compliance_log omit still opens a front-end outage window that has to be sequenced before tracking can be called done."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "Account invitations and primary contacts",
        "status": "On track",
        "text": "Deferred invitation provisioning across Auth-API, the federation schema and MyQS; account primary contacts with authorisation; and authenticated JWTs without a current account now allowed."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-20"
        ],
        "team": "SYD1 · Charlie Liu",
        "title": "HolonIQ to QAS migration",
        "status": "Behind",
        "text": "Migration work is complete in dev. Behind: the production deployment is still outstanding."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-32"
        ],
        "team": "Cerebrum",
        "title": "QS identifiers",
        "status": "",
        "text": "Implemented the new QS_ID format QS_{ENTITY_TYPE}_{NANOID}{CHECK}, using Crockford Base32 with an appended check character for validation. Added an API endpoint for issuing QS_IDs, backed by a persistent ledger that guarantees each QS_ID is issued only once, and ENUM validation during data ingestion."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-31"
        ],
        "team": "BLR2",
        "title": "MyQS Auth migration",
        "status": "On track",
        "text": "Removed legacy ROLE references across the codebase to follow CX roles; integrated the QAS app launcher, replacing the custom implementation; and updated the header and sidebar UI to match the CX design."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-46"
        ],
        "team": "BLR2",
        "title": "Stars",
        "status": "On track",
        "text": "Shipped all P1/P2 text changes (IPS-2317, IPS-2332), the route rename (stars-new to stars), an accordion responsiveness fix and brand colour updates. The Stars dashboard is now production-ready."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR2",
        "title": "Partner Discovery",
        "status": "On track",
        "text": "Opportunity Management filters and status dots (IPS-2324) moved to QA. The docked chat UI (IPS-2350) has been built, targeting QA next week. Data modelling and APIs for messaging (IPS-2347) are in progress, with the polling approach confirmed."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-16"
        ],
        "team": "BLR1",
        "title": "MyQS QPD",
        "status": "On track",
        "text": "Planning to take on QPD tickets to support team capacity and help balance workload across the team."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Career recommendation accuracy",
        "status": "Shipped",
        "text": "Significantly expanded the data behind Career Matcher, enabling more precise matches across a broader range of careers."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Site navigation and footer",
        "status": "Shipped",
        "text": "Fixed navigation and footer issues affecting overall site usability."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Accessibility compliance",
        "status": "Shipped",
        "text": "Completed accessibility improvements and added automated checks to help prevent future regressions."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Site speed",
        "status": "On track",
        "text": "Restructured page loading to improve performance, especially on the first visit."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Hosting and deployment upgrade",
        "status": "Behind",
        "text": "Upgrading the tools used to build and deploy the site. Stability issues were encountered that required several same-day emergency fixes to keep deployments working."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "title": "Homepage and lead capture content",
        "status": "Shipped",
        "text": "Completed a batch of homepage and lead capture form content and layout updates."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-7"
        ],
        "team": "Digital and Events",
        "title": "Career Matcher",
        "status": "On track",
        "text": "Backend work completed, including last sprint’s requirement changes. Frontend work is ongoing as expected."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events",
        "title": "Angular upgrade",
        "status": "On track",
        "text": "In the testing stage of the upgrade, with bug fixing of issues reported."
      },
      {
        "week": 33,
        "kind": "item",
        "epics": [
          "EP-82"
        ],
        "team": "University Services · Simon Pennington",
        "title": "V2 contact matching",
        "status": "On track",
        "text": "V2 fixes the issues inherent in the contact matching created by Huble. Throughput speed is massively enhanced and duplication issues are removed. This will now be rolled out to all portals."
      },
      {
        "week": 33,
        "kind": "risk",
        "epics": [
          "EP-43"
        ],
        "team": "SYD1",
        "text": "User onboarding is not ready: the global profile-completion flow is not live. The compliance_log omit opens a front-end outage window that must be sequenced around the CX and MyQS releases."
      },
      {
        "week": 33,
        "kind": "risk",
        "epics": [
          "EP-20"
        ],
        "team": "SYD1",
        "text": "HolonIQ to QAS migration. Finished in dev but not deployed to production."
      },
      {
        "week": 33,
        "kind": "risk",
        "epics": [
          "EP-46"
        ],
        "team": "BLR2",
        "text": "Stars blocker: some category tabs (Online Learning, Subject Ranking and others) show as ‘Not validated’ in Snowflake and are filtered out; the data team must confirm before QA sign-off. Decision needed on the still-public stars-legacy route: removal, redirect or a feature flag."
      },
      {
        "week": 33,
        "kind": "risk",
        "epics": [
          "EP-19"
        ],
        "team": "ECU1",
        "text": "IBM SSO integration. The SSO integration and how to avoid duplicate Learner accounts remain unclear; a task is evaluating alternatives, which could even lead to development by IBM."
      },
      {
        "week": 33,
        "kind": "risk",
        "epics": [
          "EP-7"
        ],
        "team": "ECU2",
        "text": "Limited new feature work. The microsite is essentially feature complete; the team is waiting for the next priority, such as Alumni Insights, or new requirements from Product."
      },
      {
        "week": 33,
        "kind": "risk",
        "epics": [
          "EP-85"
        ],
        "team": "Digital and Events",
        "text": "Angular upgrade. A substantial change that needs a lot of testing, with the events season approaching; it should ideally be released before the season starts."
      },
      {
        "week": 33,
        "kind": "risk",
        "epics": [
          "EP-82"
        ],
        "team": "University Services",
        "text": "Missing data from migration files. The BI team missed contacts and Course of Interest (COI) objects in their alpha and delta extracts; work is under way to find what is missing and update all portals."
      }
    ]
  },
  "teamUpdates": {
    "weeks": [
      {
        "week": 42,
        "dates": "12–16 October 2026",
        "report": "QS Week 42 Tech Report"
      },
      {
        "week": 41,
        "dates": "5–9 October 2026",
        "report": "QS Week 41 Tech Report"
      },
      {
        "week": 40,
        "dates": "28 September – 2 October 2026",
        "report": "QS Week 40 Tech Report and the Data Team Week 40 Update"
      },
      {
        "week": 38,
        "dates": "14–19 September 2026",
        "report": "QS Week 38 Tech Report"
      },
      {
        "week": 37,
        "dates": "7–12 September 2026",
        "report": "QS Week 37 Tech Report"
      },
      {
        "week": 36,
        "dates": "31 August – 5 September 2026",
        "report": "QS Week 36 Tech Report"
      },
      {
        "week": 35,
        "dates": "24–30 August 2026",
        "report": "QS Week 35 Tech Report"
      },
      {
        "week": 34,
        "dates": "17–22 August 2026",
        "report": "QS Week 34 Tech Report"
      },
      {
        "week": 33,
        "dates": "10–15 August 2026",
        "report": "QS Week 33 Tech Report"
      }
    ],
    "sections": [
      {
        "week": 42,
        "team": "syd1",
        "heading": "SYD1 · Charlie Liu",
        "highlights": "The new entity store is in production. QS's rankings, reputation and institution data now come from the rebuilt data layer in production, after a cutover that was rehearsed on a copy, checked for parity against staging before and after, and written down as the runbook for the next one. It is the foundation under everything that reads QS data — the data graph, the Rankings Template, Alumni Insight, HolonIQ — and it changed under them without their noticing.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "QAS Data Layer",
            "label": "EP-32 · MyQS Cerebrum",
            "status": "On track",
            "text": "The new entity store is in production: the cutover was rehearsed, checked for parity against staging, and recorded as the runbook for the next one.",
            "bullets": []
          },
          {
            "title": "Data & Engineering Portfolio",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "A new app for QS staff is live as a staging alpha: every engineering team, its people and its work in one place, reached from the app launcher like any other product.",
            "bullets": []
          },
          {
            "title": "Design System",
            "label": "EP-26 · MyQS Design System",
            "status": "On track",
            "text": "Design releases now go out through the same reviewed path as every other product — three shipped this week; the product is named MyQS consistently everywhere; app cards read correctly to screen readers; the onboarding journey is now measured as product analytics.",
            "bullets": []
          },
          {
            "title": "Rankings Template",
            "label": "EP-26 · MyQS Design System",
            "status": "On track",
            "text": "Rankings draw their own loading states, ranks are masked where the account is not entitled, pages make fewer reads, and six logic errors were fixed in a readability pass.",
            "bullets": []
          },
          {
            "title": "CX",
            "label": "EP-87 · MyQS CX – Ph 2",
            "status": "On track",
            "text": "Switches at sign-in, the Ranking Master account type and search of access events by who did them are now in production; when a new user cannot be created, the admin sees the reason and the platform team is told.",
            "bullets": []
          },
          {
            "title": "HolonIQ / HolonOS",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Nomination-country figures now read only the overall subject-area slice, so the WUR Highlights cards show the right numbers.",
            "bullets": []
          },
          {
            "title": "QS Nerv prototype",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Draws the QS Graph as an explorable map in the browser and answers questions as a cited briefing, every figure traced to its source, with a landing page and phone layouts.",
            "bullets": []
          },
          {
            "title": "QAS Console prototype",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "An operations console in three views: a release ladder that walks each feature from staging to pilot to public with a way back at every rung; an executive board showing what is on staging, what shipped and how long features take to reach production; and a client-health view that groups incidents, drafts the client reply and proposes the fix — all on invented data for now.",
            "bullets": []
          }
        ],
        "risks": [
          "None reported."
        ],
        "nextWeek": [
          "QAS Console moves from prototype to build: the implementation plan is set, and a team of specialist agents — code reviewer, product feature analyst, on-call hotfix and DevOps engineer, QA and more — is trialled on real work.",
          "Every QS app picks up the design system's new page layout, and MyQS opens on its new home page."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "blr2",
        "heading": "BLR2 · Simon Hall",
        "highlights": "The team took part in a 3-day QS hackathon, getting hands-on with the QAS stack and exploring how AI can accelerate its workflows — a valuable investment in upskilling ahead of the Stars migration.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "QAS stack practice",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Developers built demo apps on the QAS stack to build familiarity, including a demo data submission app and a demo rankings app.",
            "bullets": []
          }
        ],
        "risks": [
          "No major risks or blockers."
        ],
        "nextWeek": [
          "Begin porting Stars to the QAS design component blocks.",
          "Start work on the export-to-PDF/PNG feature for the Stars dashboard."
        ],
        "notes": [
          "A lighter delivery week as the team focused on upskilling during the hackathon."
        ]
      },
      {
        "week": 42,
        "team": "blr1",
        "heading": "BLR1 · Simon Hall",
        "highlights": "Started discovery and proof-of-concept work for HUB2 Scheduled Publishing for Institution Profiles, exploring solutions to enable off-peak publishing of institution updates. This is important to QS because it has the potential to reduce publishing load during peak usage periods, improve platform stability, and provide a more controlled and scalable publishing experience for internal users.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "HUB2 Investigations",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Completed investigation activities, with findings.",
            "bullets": []
          },
          {
            "title": "HUB2 Programme Audit",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Completed audit review and validation of programme update history to support investigation outcomes.",
            "bullets": []
          },
          {
            "title": "QAS Learning Initiative",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Continued development of the rankings demo application, strengthening understanding of QAS architecture, rankings data flow, and application lifecycle.",
            "bullets": []
          },
          {
            "title": "HUB2 Scheduled Publishing POC",
            "label": "Non-roadmap",
            "status": "In progress",
            "text": "Started discovery and proof-of-concept work for scheduled institution profile publishing, evaluating user experience, scheduling architecture, publishing workflows, and operational considerations to support off-peak publishing.",
            "bullets": []
          }
        ],
        "risks": [
          "No major blockers or decisions required this week.",
          "Progress remains on track across current sprint commitments."
        ],
        "nextWeek": [
          "Continue development of the QAS rankings demo application and expand functionality.",
          "Progress the HUB2 Scheduled Publishing POC by evaluating scheduling approaches, technical design options, and publishing workflow requirements."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": [
          "ecu1",
          "ecu2"
        ],
        "heading": "ECU1 and ECU2 · Jonnathan Peña and Paula Jimenez",
        "highlights": "This week, most of the teams' effort was focused on the hackathon. In parallel, they also completed the Seneca (PLAR) deployment deliverable committed for 15 October.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Demos from each participant in the hackathon.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "[BUG] University of Toronto | Learner | Career Goal percentage does not refresh after Skill update.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Dependency Injection — Student Type.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "[BUG] Filters are not displayed in Skills — Learner Mobile B2C.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "[BUG] An access-scope issue on a learner endpoint could return records beyond the user's own institution. Found by the QA team during regression testing and fixed in production.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Implement Atomic Design for AtomSlider, AtomSwitch, and AtomRating — pilot-dashboards.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Learning Paths — Nothing is displayed in Suggestions or Related Paths [Compensar Propulsor].",
            "bullets": []
          }
        ],
        "risks": [
          "No risks or decisions are currently pending."
        ],
        "nextWeek": [
          "Regression QA across the full environment in order to release the deployment that was previously paused (as discussed in the chat from last week's delivery).",
          "Start a new sprint with CS-planned tasks as technical debt: Sonar to GitHub; load testing; LTI simulation with Canva."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "movein",
        "heading": "MoveIN · Mahesh Hegde",
        "highlights": "MoveIN now offers a smoother user experience with easier AI email creation, simpler branding options, improved navigation, and quicker document access. The monthly AI allowance for live clients has increased from 100K to 500K tokens, supporting greater use of AI features. The team also strengthened platform reliability through successful business continuity testing and a demo environment Elasticsearch upgrade, while developers enhanced their skills through the three-day QS hackathon.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "AI Beta labels",
            "label": "EP-89 · MoveIN",
            "status": "",
            "text": "AI features now carry “Beta” labels, setting clearer expectations and reducing support questions.",
            "bullets": []
          },
          {
            "title": "Email template walkthrough",
            "label": "EP-89 · MoveIN",
            "status": "",
            "text": "First-time users get a guided tour, helping them adopt the tool faster and produce on-brand emails.",
            "bullets": []
          },
          {
            "title": "Email branding controls",
            "label": "EP-89 · MoveIN",
            "status": "",
            "text": "Users can adjust colours, spacing and image cropping themselves, so branding matches faster without technical help.",
            "bullets": []
          },
          {
            "title": "Latest brand settings in AI emails",
            "label": "EP-89 · MoveIN",
            "status": "",
            "text": "AI emails now use each client's current logo, images and colours, removing manual rework.",
            "bullets": []
          },
          {
            "title": "Higher AI allowance",
            "label": "Non-roadmap",
            "status": "",
            "text": "Live MoveIN clients' monthly AI allowance rises from 100K to 500K tokens, so teams can use the AI email builder and Smart Match assistant all month without hitting the limit.",
            "bullets": []
          },
          {
            "title": "SharePoint merged documents",
            "label": "Non-roadmap",
            "status": "",
            "text": "Merged documents now open immediately, saving staff a refresh step.",
            "bullets": []
          },
          {
            "title": "Single-portal navigation",
            "label": "Non-roadmap",
            "status": "",
            "text": "Clients with one portal now get the same full navigation as multi-portal clients.",
            "bullets": []
          },
          {
            "title": "Import “Program” field",
            "label": "Non-roadmap",
            "status": "",
            "text": "Admins can again set a fixed Program value during data imports, avoiding manual corrections for Import config in form setup.",
            "bullets": []
          },
          {
            "title": "Business continuity test",
            "label": "Non-roadmap",
            "status": "",
            "text": "A test run confirmed services can be recovered if disruption occurs.",
            "bullets": []
          },
          {
            "title": "Driving Innovation",
            "label": "Non-roadmap",
            "status": "",
            "text": "The team took part in the three-day QS hackathon, sharing ideas, experimenting with new approaches, and building skills through collaborative innovation.",
            "bullets": []
          },
          {
            "title": "Elasticsearch Version Upgrade on Demo",
            "label": "Non-roadmap",
            "status": "",
            "text": "Upgraded the Elasticsearch version in the demo environment to improve platform readiness and keep the technology stack up to date.",
            "bullets": []
          }
        ],
        "risks": [
          "None reported."
        ],
        "nextWeek": [
          "Email protection: Failed emails will be monitored every 3 hours instead of daily, with automatic pausing and blocking of invalid contacts to protect QS's sending reputation.",
          "Email template builder polish: Template lists become easier to read, and QA-reported issues (duplicate saves, footer alignment, brand colours) are fixed for more reliable emails.",
          "Smart Match quality: Automated testing catches problems earlier and keeps the new assistant stable.",
          "Saved searches restored: Users can reuse their saved filters again without rebuilding them.",
          "Apostrophe fixes: Text displays correctly in English, French, German, Spanish and Italian.",
          "Screen layout fixes: Around 16 display problems on common laptop screens are fixed, so the product looks cleaner and is easier to use."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "moveon",
        "heading": "MoveON · Advanced Publisher team",
        "highlights": "The Advanced Publisher-side security work on the Advanced Publisher–MoveON integration is finished. API credentials now travel more securely, and every call is logged with a traceable request ID. This matters to QS because it closes data-exposure gaps and meets QS's security-review commitments.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Advanced Publisher–MoveON API security",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Development is finished and code review and QA are in progress.",
            "bullets": []
          },
          {
            "title": "Publisher performance for two clients",
            "label": "Non-roadmap",
            "status": "Behind",
            "text": "Pages take about 62–66s to load on Live, compared with about 4–9s on staging with the same data. That points to the Live environment, but the root cause isn't confirmed yet.",
            "bullets": []
          }
        ],
        "risks": [
          "The security changes are being tested end to end and QA is in progress. Decisions: none needed right now.",
          "Top risk to escalate: publisher performance. Both clients have chased, and one says it's very urgent. Both have agreed to let QS use their real data for the investigation. Mitigation: addition of custom logs to trace the issue, as the Infra team confirmed that there are no slow query logs."
        ],
        "nextWeek": [
          "Advanced Publisher–MoveON security work moves to production.",
          "Root cause and a fix plan for publisher performance."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "moveon",
        "heading": "MoveON · Seat Creation team",
        "highlights": "The manual seat assignment for automatically created seats is currently in development.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Advanced seat assignment (MVP)",
            "label": "Non-roadmap",
            "status": "In progress",
            "text": "Development in progress.",
            "bullets": []
          },
          {
            "title": "API security hardening",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "In QA and planned to be deployed next week.",
            "bullets": []
          },
          {
            "title": "Cloudflare false-positive fix",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Development is done and QA is in progress.",
            "bullets": []
          }
        ],
        "risks": [
          "Decisions: none needed right now."
        ],
        "nextWeek": [
          "Development finishes on the seat assignment."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "moveon",
        "heading": "MoveON · Nominations team",
        "highlights": "The feature that creates Person and Stay records in bulk from Learning Agreements is finished and in code review. This week the developer confirmed it runs on background queues, so bulk creation won't affect performance. That was the main open question on it. For QS, this removes a lot of manual data entry for mobility staff and keeps records consistent.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "The developer worked on code review improvements of last week's work.",
            "bullets": []
          }
        ],
        "risks": [
          "Blockers: none. Decisions: none needed right now. Top risk to escalate: none."
        ],
        "nextWeek": [
          "QA testing in progress for last week's dev-completed tasks."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "moveon",
        "heading": "MoveON · Workflow team",
        "highlights": "All development for deleting workflow tasks is finished and has passed code review. That covers deleting Manual and MoveON tasks, showing a “task not available” message where a deleted task used to appear, and notifying users when a workflow is deleted. All of it is now ready for QA. For QS, this gives admins full control over cleaning up their workflows without breaking the views their users see.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Workflow validations for bulk configurator and usability enhancements on Configurator",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Development in progress for the above functionalities.",
            "bullets": []
          }
        ],
        "risks": [
          "Blockers: none. Decisions: none needed right now."
        ],
        "nextWeek": [
          "Bugs related to Advanced Filters are prioritised by the Product team to look into, as clients have prioritised them."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "moveon",
        "heading": "MoveON · Tech updates (Live stability)",
        "highlights": "The enhancements for PHP 8.5 testing have completed QA and will be merged into production environments gradually during November. For QS, this keeps core features working for all clients with proper security upgrades and support.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Fixes for errors on PHP 8.5 upgrades",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "The fixes were merged into the main branches this week, QA passed again, and they're now ready for integration testing.",
            "bullets": []
          }
        ],
        "risks": [
          "Blockers: none this week. Decision needed: none. Top risk: none."
        ],
        "nextWeek": [
          "Database-merge work continues."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "events",
        "heading": "Digital and Events · Catarina Cunha",
        "highlights": "International Trade (ITR) and Arab rankings have been released and all are working as expected.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Drupal 11",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "Behind",
            "text": "All tested and ready to go live this Monday. Update 19 October: the release ran into an issue and has been rescheduled to Wednesday 21 October.",
            "bullets": []
          },
          {
            "title": "Finance page",
            "label": "Non-roadmap",
            "status": "Behind",
            "text": "BE work is blocked due to a change in business requirements. FE is starting as planned for the sections where no changes are expected.",
            "bullets": []
          },
          {
            "title": "Emails redesign",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Testing is being finalised for release on Monday.",
            "bullets": []
          },
          {
            "title": "Marcomms Dashboard",
            "label": "Non-roadmap",
            "status": "In progress",
            "text": "Event-specific pages are under development.",
            "bullets": []
          },
          {
            "title": "Client App",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Improvements and fixes reported are done; this is currently in testing.",
            "bullets": []
          }
        ],
        "risks": [
          "Drupal sprint release. Because of the new rankings release this week and the hackathon, it was decided to postpone this to 19 October."
        ],
        "nextWeek": [
          "Drupal 11: release will happen this Monday, 19 October.",
          "Client App: new release will go to business validation.",
          "Redesign of QSA page: this work will start this new sprint."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "qsapply",
        "heading": "QS Apply (Appian) · Sreeram Sreekumar",
        "highlights": "The team continues to address Appian production support issues while progressing with the Appian Migration initiative. This week's focus included resolving applicant and application count discrepancies, consolidating discovery documentation, and initiating technical discussions to assess the migration solution.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Applicant and Application Count Discrepancy",
            "label": "Non-roadmap",
            "status": "",
            "text": "Investigated discrepancies in applicant and application counts caused by an error in PAM/SAM assignment.",
            "bullets": []
          },
          {
            "title": "PAM/SAM Reassignment",
            "label": "Non-roadmap",
            "status": "",
            "text": "Performed a manual database update to correct the reassigned PAM and SAM details and address the assignment issue.",
            "bullets": []
          },
          {
            "title": "Consolidation of Workshop Documentation",
            "label": "EP-27 · Appian to HubSpot (D&E); EP-54 · Appian to HubSpot (US)",
            "status": "",
            "text": "Consolidated the documents and findings from stakeholder workshops into a single master document to provide a unified reference for the migration initiative.",
            "bullets": []
          },
          {
            "title": "Technical Solution Assessment",
            "label": "EP-27 · Appian to HubSpot (D&E); EP-54 · Appian to HubSpot (US)",
            "status": "",
            "text": "Met with the Technology team to analyse potential migration solutions, discuss technical considerations, and evaluate the approach for migrating the existing Appian functionality.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Continue technical discussions with the Technology team and work towards finalising the migration solution.",
          "Progress the implementation of Multi-Factor Authentication (MFA) in Appian.",
          "Complete the deployment of all pending production support tickets, subject to testing and release readiness."
        ],
        "notes": [
          "Printed under two group headings: Appian production support, and Appian migration – discovery and technical analysis."
        ]
      },
      {
        "week": 42,
        "team": "ubsdev",
        "heading": "UBS Development · Mohd Azhar Mohd Razman",
        "highlights": "The Appian dev team has continued work on developing integration replacements for enquiry forms within HubSpot. Once the replacements are complete, this will allow QS to decommission its legacy APIs, reduce AWS spend, and take a step closer to decommissioning the legacy CRMs.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Enquiry form (API) replacements",
            "label": "EP-54 · Appian to HubSpot Migration (US)",
            "status": "On track",
            "text": "",
            "bullets": [
              "Keele and RCA have completed testing and are now working on changes for auto ticket creation and the new tag contact association.",
              "Griffith International and ACU have completed changes for auto ticket creation and the new tag contact association, and are now testing the new changes for error notification."
            ]
          },
          {
            "title": "ESI (API) replacements",
            "label": "EP-54 · Appian to HubSpot Migration (US)",
            "status": "On track",
            "text": "Stirling development has completed changes for auto ticket creation and the new tag contact association, and is now testing the new changes for error notification.",
            "bullets": []
          },
          {
            "title": "Informatica replacement (S3 Flat File)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "",
            "bullets": [
              "Griffith International's replacement is awaiting deployment, pending the API replacement.",
              "Edith Cowan University's replacement has been developed and is waiting for an update from the Client Delivery Manager.",
              "Brighton's replacement has completed development and is now being tested for contact matching and the new tag contact association."
            ]
          },
          {
            "title": "Informatica replacement (Keystone)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "",
            "bullets": [
              "RCA has been signed off. Deployment is pending completion of the API replacement.",
              "The Edith Cowan University BRD has been finalised, and development is underway based on it."
            ]
          },
          {
            "title": "Informatica replacement (York Integration)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "No updates this week for York.",
            "bullets": []
          },
          {
            "title": "Appian support",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Investigated an issue where PAM and SAM were automatically assigned to all external counsellors rather than a single agency. The issue was caused by an incorrect query for the counsellors and agents that were migrated. No further errors have occurred since the incident, and all counsellors have been updated with the correct PAM and SAM.",
            "bullets": []
          }
        ],
        "risks": [
          "One institution's test environment (UoL) is missing required licensing to proceed with development. Simon Pennington is arranging access.",
          "Clare is awaiting the Data Model from Daniel before development on the HubSpot x HubSpot integration can begin for UTS College.",
          "Badrul to finalise Agent Tag mappings for Brighton.",
          "Badrul, Rez and Clare to review Data Model change requests (UTM and Student Type) and advise on how this data should be captured in HubSpot for Stirling.",
          "Badrul to add Level of Study to RCA in Prod and Sandbox.",
          "Vincent to discuss Holding Import Property mappings to ensure subsequent workflows work as expected, in particular Contact Matching and Course of Interest.",
          "Informatica (S3 Flat File) replacement: LSBU development is on hold while the team awaits the tender outcome."
        ],
        "nextWeek": [
          "Complete the auto ticket creation, tag contact association changes and error notification testing for all institutions, so deployment to production can proceed for the Enquiry and ESI replacements.",
          "Perform the necessary development on the workflows based on discussions on Contact Matching and Course of Interest changes.",
          "Continue Edith Cowan University development for the Keystone replacement, and continue testing and validation of the Informatica replacement for Brighton."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "cx",
        "heading": "CX Systems · Fahad Noor",
        "highlights": "Progressed China SIP testing and coordinated with Aircall Engineering and Ciptex to investigate China and India calling issues. Advanced UK number porting and tested US numbers migrated from Twilio to Aircall. Implemented IVR changes for KCL and Sunway, progressed Macquarie University's SMS setup, and worked on WhatsApp missed-call automation. Continued coordination with Niswey and QS Events on WhatsApp integration, communicated plans for Twilio Flex decommissioning, and attended a Twilio workshop on multilingual voice bot configuration. Also met with Benita Ho to review ongoing activities, priorities, and future enhancements.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "China SIP",
            "label": "Non-roadmap",
            "status": "",
            "text": "Conducted SIP testing and investigated calling issues.",
            "bullets": []
          },
          {
            "title": "Aircall",
            "label": "Non-roadmap",
            "status": "",
            "text": "Coordinated with the Engineering team on reported bugs and the India calling issue.",
            "bullets": []
          },
          {
            "title": "Student Success",
            "label": "Non-roadmap",
            "status": "",
            "text": "Communicated SIP implementation updates and the India calling outage to Student Success managers.",
            "bullets": []
          },
          {
            "title": "Macquarie University",
            "label": "Non-roadmap",
            "status": "",
            "text": "Progressed the SMS setup.",
            "bullets": []
          },
          {
            "title": "QS Events",
            "label": "Non-roadmap",
            "status": "",
            "text": "Coordinated with Niswey and QS Events on the WhatsApp setup.",
            "bullets": []
          },
          {
            "title": "KCL",
            "label": "Non-roadmap",
            "status": "",
            "text": "Implemented IVR changes and investigated call-routing behaviour.",
            "bullets": []
          },
          {
            "title": "Sunway",
            "label": "Non-roadmap",
            "status": "",
            "text": "Updated the IVR configuration.",
            "bullets": []
          },
          {
            "title": "UK Number Porting",
            "label": "Non-roadmap",
            "status": "",
            "text": "Progressed the porting of UK numbers to Aircall.",
            "bullets": []
          },
          {
            "title": "US Number Porting",
            "label": "Non-roadmap",
            "status": "",
            "text": "Unmasked and tested US numbers ported from Twilio to Aircall.",
            "bullets": []
          },
          {
            "title": "WhatsApp Automation",
            "label": "Non-roadmap",
            "status": "",
            "text": "Worked on automating WhatsApp replies for missed calls.",
            "bullets": []
          },
          {
            "title": "Niswey Vira",
            "label": "Non-roadmap",
            "status": "",
            "text": "Coordinated user access.",
            "bullets": []
          },
          {
            "title": "Ciptex",
            "label": "Non-roadmap",
            "status": "",
            "text": "Attended a meeting to discuss China and India SIP implementation.",
            "bullets": []
          },
          {
            "title": "Twilio Flex",
            "label": "Non-roadmap",
            "status": "",
            "text": "Communicated plans for the decommissioning of Twilio Flex.",
            "bullets": []
          },
          {
            "title": "Twilio Workshop",
            "label": "Non-roadmap",
            "status": "",
            "text": "Attended a workshop on configuring multilingual voice bots.",
            "bullets": []
          },
          {
            "title": "Planning & Priorities",
            "label": "Non-roadmap",
            "status": "",
            "text": "Met with Benita Ho to review ongoing activities, current priorities, and future enhancements.",
            "bullets": []
          }
        ],
        "risks": [
          "QS Events Niswey Vira. Awaiting finalisation of the Niswey Vira subscription agreement between QS and Niswey."
        ],
        "nextWeek": [
          "Sakari: continue Sender ID testing.",
          "China SIP: continue SIP testing and coordinate with Aircall Engineering on outstanding fixes.",
          "Meta: follow up with Meta Support regarding the UTS College WhatsApp number issue.",
          "QS Events: continue coordinating with Niswey on the WhatsApp setup and onboarding.",
          "Vira Automation: integrate the missed-call callback automation with the chatbot.",
          "China & India SIP: integrate China and India numbers with their respective clients, subject to Aircall completing the rollout.",
          "Sunway Chatbot: begin chatbot setup once higher-priority tasks are completed.",
          "Utah WhatsApp: proceed with WhatsApp onboarding."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "data",
        "heading": "Data & Analytics · David Pattison",
        "highlights": "Cerebrum is on track, with tangible progress across programme mapping, data exploration, ranking ingestion and the move towards database- and Snowflake-backed ingestion. The principal outstanding issue is access to the authoritative courses review data.",
        "highlightBullets": [
          "Rankings delivery was strong: International Trade and Arab Rankings were published; Sustainability was successfully re-issued after a bug was identified; Europe and Subject Rankings continued to progress.",
          "ENROL remains on track. A unified UBS model was coded and the London campaign was reported on track for launch with Student Success.",
          "Data Acquisition & Quality continued to improve delivery, including Alumni Impact collection, workflow and data-quality fixes, and completion of HESA 2024/25 ingestion."
        ],
        "delivery": [
          {
            "title": "Cerebrum",
            "label": "EP-32 · MyQS Cerebrum",
            "status": "On track",
            "text": "The programme mapper was completed. The domain-oriented data explorer progressed with live taxonomy, geography, institution and rankings data, making Cerebrum content easier to discover and explore. Ranking ingestion was advanced so missing releases can be created without duplicating existing releases. Data Core also moved towards Snowflake- and database-backed ingestion through DBT, and a database access route was established for Global Student Flows. The hackathon produced an initial institution-domain prototype.",
            "bullets": [
              "Risks or dependencies: Courses/programmes review work remains dependent on access to the authoritative review data. The future end-to-end process from ranking production through release into Cerebrum also requires clarification.",
              "Dependencies outside the immediate team: Nicolas Jourdain for database and mapping information and ranking-job validation; wider ranking stakeholders for agreement on the future Cerebrum release process.",
              "Next steps: Resolve access to the courses/programmes review data; validate creation of a missing ranking release; continue Snowflake/DBT ingestion, including Global Student Flows; and define ownership and process for future ranking releases into Cerebrum."
            ]
          },
          {
            "title": "Rankings & Data Operations",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "International Trade results were published with no issues reported. The second Arab Rankings fact file and results were published with no major issues. Sustainability Rankings were re-issued after a bug was identified, and the fact files are ready for distribution. Europe Rankings analysis and data work continued. Subject Rankings produced a first draft, continued movement to live subject mappings, and created a new navigation report ahead of sign-off. Employability/Skills strengthened the graduate employment rate component and produced a first draft. Country Fact Files reached approximately 80% completion, and the GME-based product prototype continued with historical data tables nearly ready.",
            "bullets": [
              "Risks or dependencies: Employability/Skills institution mappings require further work and a larger sample to reduce future variability, increasing workload. Europe Rankings also depends on requested Scopus IDs and an updated mapping for a Spanish institution.",
              "Dependencies outside the immediate team: PR colleagues for Country Fact Files; technical and product teams for the GME/HolonIQ prototype; mapping and Scopus inputs for Europe Rankings.",
              "Next steps: Distribute Sustainability fact files; continue Europe analysis and Subject Rankings validation; progress institution mappings and Employability/Skills analysis; and complete QA of historical GME data for the product prototype."
            ]
          },
          {
            "title": "ENROL & Data Science",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "A unified UBS model was coded, with evaluation planned while Cerebrum progresses. Architecture work continued towards configurable shared-client models and client-level evaluation. The London campaign was reported on track to start with Student Success, and infrastructure work was underway to prevent the propensities table growing by several million rows each day.",
            "bullets": [
              "Risks or dependencies: The approach for recording model selection at inference time remains unresolved as the unified-model architecture develops.",
              "Dependencies outside the immediate team: Student Success for campaign delivery and evaluation; downstream platform decisions where unified-model inference records are stored.",
              "Next steps: Continue unified-model evaluation and architecture development; resolve inference-time model assignment and recording; and continue campaign evaluation following the London launch."
            ]
          },
          {
            "title": "Data Acquisition & Quality / Alumni Impact",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Alumni Impact Cultural Impact collection increased from six to eleven lists per week while the team adapted to a new taxonomy. The new workflow pipeline was improved through staging-ID fixes, HUB2 institution mapping, corrections to Core IDs and locations, and other data-quality changes. Enhancements to the KnownBy enrichment scraper were reviewed. HESA 2024/25 ingestion was signed off, and table lists were supplied for the ALUMNI_IMPACT, DISCOVERUNI and SUSTAINABILITY Snowflake migration.",
            "bullets": [
              "Risks or dependencies: The workflow currently relies on HUB2 institution mapping and intends to move to Cerebrum Institutions once that source is ready to consume.",
              "Dependencies outside the immediate team: Cerebrum Institutions availability and the Snowflake migration process.",
              "Next steps: Continue increasing Alumni Impact collection throughput; progress the new workflow and enrichment approach; and adopt Cerebrum Institutions mapping when available."
            ]
          }
        ],
        "risks": [],
        "nextWeek": [],
        "notes": [
          "The Employability & Skills update had not been received at the time of preparation.",
          "Cross-project themes: Cerebrum is becoming a shared upstream data dependency, particularly for institution mapping and future Data Science exploration. Ranking delivery remains healthy, with several publications completed while Europe and Subject Rankings continue through analysis and validation. Access and operationalisation, rather than underlying Cerebrum development, are the main issues to resolve. Immediate priorities are access to courses/programmes review data and definition of the future ranking-release workflow."
        ]
      },
      {
        "week": 42,
        "team": "data",
        "heading": "Global Student Flows (GSF) · Anshari Perera · week ended 16 October 2026",
        "highlights": "",
        "highlightBullets": [
          "More accurate subject forecasts: Prism's second layer (country-level international student numbers by source country and subject) error is down about 10%, and its accuracy is now measured without data leakage.",
          "More reliable outputs: a bug that mixed years within a country pair is fixed, and reruns are faster.",
          "Production forecasts verified: the universities pipeline reproduces the database forecasts exactly, and a full retrain moves global totals by at most ±0.4%.",
          "Stronger university data: government data for 40 countries now gives an independent check on QS headcount data.",
          "Better-grounded Orb forecasts: anomalous 2025 growth in Malaysia is being corrected, and the regional rulebook is being reworked so it actually shapes outputs."
        ],
        "delivery": [
          {
            "title": "Prism (subjects model)",
            "label": "EP-15 · QAS Flows/ISS",
            "status": "On track",
            "text": "About 10% lower error in the second layer: the country-level international student numbers by source country and subject layer now captures how an origin's subject preferences differ by destination, with a separate adjustment for each origin–destination pair. Regional data was leaking into the second layer and inflating its measured accuracy; it has been removed, so results reflect real performance. Each country pair now takes all its subject shares from a single year. This round of improvements also removed repeated steps, which cut one of the steps from about 15 minutes to seconds.",
            "bullets": [
              "Next steps: Rerun Prism with the new government university data and measure the change in outputs."
            ]
          },
          {
            "title": "Universities model",
            "label": "EP-15 · QAS Flows/ISS",
            "status": "On track",
            "text": "Rerunning the full pipeline (evaluation, forecasts, university disaggregation) with the production model reproduced the database forecasts exactly; a full refresh takes about 30 minutes, mostly in university disaggregation. The team retrained the model with no change to data or code; the retrained model was saved separately and production was not overwritten. Compared with the database: global total 2027 moved from 9.21M to 9.25M students (at most ±0.4%); large destinations such as the USA in 2027 moved +2.6%; small, data-sparse destinations such as Comoros moved +129%. The team also collected university-level data from government sources for 40 countries, giving an independent source to check QS headcount data against.",
            "bullets": [
              "Risks and dependencies: Small-destination volatility — retrained outputs for data-sparse destinations can shift sharply, so they need a check before any upload.",
              "Next steps: Compare the government data with the QS headcount data. Add the new dataset to the universities model, then rerun the universities and subjects models to measure the change in outputs and decide which source to use in the model finally."
            ]
          },
          {
            "title": "Orb core model",
            "label": "EP-15 · QAS Flows/ISS",
            "status": "On track",
            "text": "Malaysia forecasts are being corrected: 2025 year-on-year growth from Kazakhstan, Myanmar, Uzbekistan, Turkmenistan, Kyrgyzstan and Sudan looked anomalous, and the team is reworking Malaysia's historics and forecasts and using application data to confirm which increases are real. The regional rulebook is being made to take effect: the previous implementation did not meaningfully move outputs toward the rulebook's regional shares, so unlocked totals have more room to adjust and can follow those shares.",
            "bullets": [
              "Next steps: Complete the Malaysia rework, using application data to confirm or correct the 2025 increases. Complete the rulebook rework and check that outputs move toward the regional shares."
            ]
          }
        ],
        "risks": [],
        "nextWeek": [],
        "notes": []
      },
      {
        "week": 42,
        "team": "data",
        "heading": "Labour Market Intelligence (LMI) · Kavisha Hapuarachchi · 18 October 2026",
        "highlights": "This week's primary focus was on updating Bledi Taska on the workings of LMI and starting to synthesise and consolidate the assets, workstreams, projects etc.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "AI Framework",
            "label": "EP-14 · QAS LMI Curriculum",
            "status": "In progress",
            "text": "Did a pilot implementation for a few occupations and countries for the Layer 1 and the Layer 2 country localisation methodology for the QS AI Exposure Framework.",
            "bullets": [
              "Plan for next week: Refine the Layer 2 and finalise the indicator list for the Layer 2. Also work on visualising the results to further validate the results."
            ]
          },
          {
            "title": "Regional Guardrails Buildup",
            "label": "EP-14 · QAS LMI Curriculum",
            "status": "In progress",
            "text": "Evaluated forecasting methods for regional employment guardrails, selecting carry-forward after back testing five alternatives. Tested historical data recency, added reliability flags, and preserved observed 2025 occupation data. Generated 2025 employment estimates for all 150 countries.",
            "bullets": [
              "Plan for next week: Investigate the remaining missing combinations and validate occupation-level employment totals against country-level employment totals."
            ]
          },
          {
            "title": "OPAL Model Improvements",
            "label": "EP-14 · QAS LMI Curriculum",
            "status": "In progress",
            "text": "Plan for next week: Implementing an automated process of updating countries with deep-dive country outputs.",
            "bullets": []
          },
          {
            "title": "Country Mapping & Research",
            "label": "EP-14 · QAS LMI Curriculum",
            "status": "In progress",
            "text": "Working on India LMI Data — Data Sourcing, Crosswalks.",
            "bullets": []
          },
          {
            "title": "Forecasting",
            "label": "EP-14 · QAS LMI Curriculum",
            "status": "In progress",
            "text": "Regional sectoral scalar bounds (ILO-based).",
            "bullets": [
              "Sub-Saharan Africa: Finished SSA's calibration and end-to-end testing on the Nigeria country file.",
              "LATAM and Caribbean: Finished the raw data checks, build and region-specific calibration, and tested on the Brazil, Colombia, and Mexico country files.",
              "Full validation across all three regions: Ran a systematic check of the bounds on every country in the ECA, SSA, and LATAM pools (83 countries). None breached the +15%/−9% occupation-level ceiling."
            ]
          }
        ],
        "risks": [],
        "nextWeek": [],
        "notes": []
      },
      {
        "week": 42,
        "team": "data",
        "heading": "Business Intelligence (BI) · Jose Sosa",
        "highlights": "8 of 16 initiatives are on track, 5 are at risk, 1 is off track and 2 are on hold. The Power BI client portal remains on track. Reporting is ready, with launch dependent on IT whitelisting and security-group creation. Week 41 delivered 63 loads and 13,760 records, with 100% QA across completed loads. The 186 failures were CRM reconciliation records already duplicated in HubSpot. Risk increased across Tableau offboarding, Candidate Engagement migration and team capacity, where 2027 resourcing is still being planned.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "University Services Client Reporting Portal (Power BI)",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "The 15 October go/no-go confirmed that the final MVP reports, agreed filters, design changes and consolidated engagement view were ready. The eight-client pilot cohort and client user base were confirmed for Griffith International, ACU, Stirling, Keele, Durham, RCA, Birmingham and Exeter. Power BI role testing progressed, but the Microsoft security groups had not yet been created at the session. Lucy is liaising with IT on whitelisting and security-group creation, the remaining dependencies before external access can go live. Region and sub-region standards still require a decision, but this is not considered a launch blocker.",
            "bullets": [
              "Watch: Launch depends on IT completing whitelisting and security-group creation, followed by final access validation."
            ]
          },
          {
            "title": "Reconciliation Process (Interim Solution)",
            "label": "Non-roadmap",
            "status": "At risk",
            "text": "Dynamic reconciliation classification is operational in the updated data model. Testing continues across country, course level, course name, chargeable communications and any required questioning criterion. The APAC census-date rule remains unconfirmed, including whether the proxy should be 30 or 45 days after intake. The counting basis remains unresolved because the current contact-level logic may conflict with intake-level expectations. The final destination for classifications and exclusion outputs is still unknown.",
            "bullets": [
              "Watch: The process remains at risk until census rules, intake attribution and the durable output structure are agreed."
            ]
          },
          {
            "title": "Data Loading Efficiencies and Automation",
            "label": "Non-roadmap",
            "status": "Off track",
            "text": "KCL transformation remains off track, with mapping and workflow gaps preventing a stable automated process. The KCL review identified an unmapped student status and incomplete status details following the operational handover. Shreya proposed a mapping-driven Python process to standardise incoming client columns as an initial automation phase that can reduce manual work at the pre-processing stage.",
            "bullets": [
              "Watch: There is no committed end-to-end automation date, and incomplete KCL mappings continue to create reporting risk."
            ]
          },
          {
            "title": "HubSpot Data Quality",
            "label": "EP-82 · Aurora Data Integrity",
            "status": "At risk",
            "text": "Status-history correction work remains incomplete and requires validation across the remaining student stages. Missing intake and faculty issues on COIs were being addressed; missing COI loads and date-entered inquiry cases remain under review. Web forms will be classified as communications in the Contact Source or Tag History structure. Initial web-form migration will prioritise Stirling, Griffith International and King's, followed by QA before wider rollout.",
            "bullets": [
              "Watch: Client-facing trend reporting remains exposed until the remaining history corrections and migration QA are complete."
            ]
          },
          {
            "title": "Internal Reporting Suite and Feedback Forum Roadmap",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "The 13 October feedback forum reviewed the redesigned inquiry and offer reports, including new filters and field explanations. The redesigned internal reports are live; documentation and data definitions are the next supporting deliverables. Year-to-date calculation logic and the enquiry channel breakdown remain open follow-ups. Engagement reporting now combines broadcast and one-to-one activity with weekly and monthly aggregation. Web-form reporting moved forward through the agreed communication-tag model and migration plan.",
            "bullets": []
          },
          {
            "title": "Data Acquisition QA and Load Reporting",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Week 41 processed 63 loads covering 13,760 records. 186 records failed, a 1.35% failure rate; all were CRM reconciliation records with contacts already duplicated in HubSpot. A 100% QA pass rate was achieved across all completed loads. Average receipt-to-load time was 1.83 days for made-offer lists, 1.11 days for enquiry lists and 0 days for combined lists. RCA supplied a manual extract without made-offer statuses. Newcastle and Nottingham supplied no recent data; KCL was last received on 6 October. Client handover completed last week; processing has started for the new owners, with positive initial outcomes and no issues reported.",
            "bullets": []
          },
          {
            "title": "MyQS 2.0 Client Application (Future State)",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "No material change this week. The MyQS team retains the Power BI reports, sample extracts and usage context for the Stirling-focused prototype. The prototype remains estimated for mid-November to early December, with full build and launch around Q2 2027. The Power BI client portal remains the interim reporting route.",
            "bullets": []
          },
          {
            "title": "Synergy2 Optimisation",
            "label": "EP-82 · Aurora Data Integrity",
            "status": "On track",
            "text": "Synergy2 pipeline flow was restored after the 12 October issue. Web forms will be classified as Communications with a Webform category and submission date. Historical and newly created web forms will be migrated into the agreed structure, beginning with priority portals. Calls and emails remain activity-based; inbound WhatsApp, live chat, WeChat and similar channels will generally use tickets. The earliest contact source remains primary, with first inbound communication as a fallback when no source exists.",
            "bullets": []
          },
          {
            "title": "Team, Resourcing and Capability",
            "label": "Non-roadmap",
            "status": "On hold",
            "text": "Work continued on the BI operating model for 2027. The proposed structure consolidates analyst roles into a senior position and would retain central prioritisation while giving analysts designated client portfolios. Resourcing and capacity planning remain under review.",
            "bullets": [
              "Watch: Capacity planning and transition arrangements are still to be confirmed."
            ]
          },
          {
            "title": "Tableau Offboarding and Fabric Transition",
            "label": "Non-roadmap",
            "status": "At risk",
            "text": "A Tableau server upgrade was validated and a server switch was planned for 19 October. The 16 October deadline passed without a consolidated decision on licences, server needs and the remaining internal estate. Consulting and research-client needs remain broader than the desktop-only direction previously signalled. Jose needs to compile the known and unknown requirements and align directly with Ashok, Martin and Pratik. Candidate Engagement and other Tableau dependencies must be included in the consolidated migration view.",
            "bullets": [
              "Watch: Without an agreed estate and migration plan, the 22 January 2027 contract end remains exposed."
            ]
          },
          {
            "title": "Quality Assurance Team Planning (Future State)",
            "label": "Non-roadmap",
            "status": "At risk",
            "text": "The future-state pack covers purpose, operating model, indicative roles, competency framework and governance steps. Current-state evidence is in progress; operating-model agreement, capacity assessment, role evaluation and legal review remain open. The proposed assessment process uses a skills matrix and evidence-based scoring after the structure and roles are agreed. Jose will meet Lucy this week to review the model in full and align on direction.",
            "bullets": [
              "Watch: Role design and assessment depend on agreeing the operating model and capacity assumptions with Client Delivery."
            ]
          },
          {
            "title": "CE Digital Transformation and Power BI Migration",
            "label": "Non-roadmap",
            "status": "At risk",
            "text": "The initiative is now at risk pending confirmation of ownership for the remaining migration work. Visibility is limited over which Candidate Engagement Tableau reports have moved to Power BI and which dependencies remain. The 13 October programme pack does not establish that the reporting migration is fully complete or de-risked. Events reporting remains materially dependent on Tableau and requires a clear inventory, owner and migration position. A documented handover and report-by-report migration check are required before the end of the year.",
            "bullets": [
              "Watch: Continuity depends on the Candidate Engagement and Events estate being migrated or formally handed over."
            ]
          },
          {
            "title": "Wider QS Intelligence (Project Compass)",
            "label": "Non-roadmap",
            "status": "On hold",
            "text": "No material change this week. The project remains paused while capacity is directed to client access, end-of-cycle analysis and data corrections. Groundwork and source-owner walkthroughs remain complete, but there is still no restart date.",
            "bullets": [
              "Watch: The project will continue to drift unless a restart point is agreed after the current delivery peak."
            ]
          },
          {
            "title": "End of Cycle Analytics",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Aiman remains the point of contact for KCL-specific requirements, including end-of-cycle analytics and quarterly reporting. Birmingham analysis was already underway using the KCL approach; no new completed milestone was confirmed this week. Inbound and outbound engagement corrections continue to affect confidence in engagement analysis. The designated-client model would preserve central prioritisation so client requirements can become shared roadmap items.",
            "bullets": [
              "Watch: Reliable outcome analysis still depends on reconciliation logic and stable engagement data."
            ]
          },
          {
            "title": "BI Operating Model, Governance and Ways of Working",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "The new team-managed BI Jira board was received on 13 October, with an initial configuration of work types and request fields. The current BI board remains the operational route until the team completes a walkthrough and agrees ticket migration, external submission and deprecation arrangements. A wider team session is required before the new board is adopted for day-to-day work. A Jira task was created on 16 October to establish a BI GitHub repository for tracking .pbip changes, including onboarding the BI team to the revised development and version-control approach.",
            "bullets": [
              "Watch: Adoption should remain controlled until the old and new Jira routes, external request intake and ticket migration are clearly resolved."
            ]
          },
          {
            "title": "Advisor Productivity Reporting",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "The advisor productivity report uses engagement-level ownership across calls, emails, live chats and SMS. Approximately 500,000 engagements currently have an identifiable owner or user who logged the activity. Engagements without an identifiable person will not support advisor attribution, and some live-chat activity is associated with the HubSpot chatbot account. The report will be published to a separate Student Success audience for the relevant team leads. No row-level security is planned at this stage, and the report will enter beta for feedback before wider use.",
            "bullets": [
              "Watch: Interpretation depends on engagement ownership being populated consistently; unattributed activity will remain outside advisor-level reporting."
            ]
          }
        ],
        "risks": [],
        "nextWeek": [],
        "notes": []
      },
      {
        "week": 42,
        "team": "cyber",
        "heading": "Cyber · Rowan Chapman",
        "highlights": "CyberCon 2026 Melbourne: attended CyberCon over three days, gaining exposure to emerging thinking, practices and technologies across cybersecurity, privacy, incident response and resilience. Rowan will consolidate the most relevant takeaways into a short report to share with interested colleagues, focusing on learnings that could practically benefit QS.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "AI data security events",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Triaged two data security events detected through CrowdStrike involving PII being uploaded to generative AI services. The affected users were engaged as part of the response, with the events providing further practical insight into how AI-related data risks are emerging within QS.",
            "bullets": []
          },
          {
            "title": "Cyber Awareness Month (CAM26)",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Published Cyber Awareness Month content to Inside QS/SharePoint, providing employees with practical cybersecurity awareness information and supporting October's wider awareness activities.",
            "bullets": []
          },
          {
            "title": "MoveON – Advanced Publisher security assessment",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "Done",
            "text": "Completed the internal security assessment for MoveON – Advanced Publisher and shared the final report with relevant stakeholders.",
            "bullets": []
          },
          {
            "title": "MoveIN and 1Mentor internal security assessments",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "In progress",
            "text": "Initiated internal security assessments for MoveIN and 1Mentor. Kick-off meetings are being arranged to formally commence the assessment activities.",
            "bullets": []
          },
          {
            "title": "MoveIN external penetration test",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "Done",
            "text": "External penetration testing has concluded, the final report has been distributed, and Jira remediation items have been created to drive identified findings through to resolution.",
            "bullets": []
          },
          {
            "title": "1Mentor external penetration test",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "In progress",
            "text": "Received the web application penetration testing report and commenced Cybersecurity review of the findings.",
            "bullets": []
          }
        ],
        "risks": [
          "AI-related data handling. The two data security events this week highlight the continuing risk of sensitive and personal data being uploaded to generative AI services. These events reinforce the need for a combination of technical controls, visibility and employee awareness as AI adoption grows."
        ],
        "nextWeek": [
          "Consolidate CyberCon 2026 takeaways into a short internal report, focusing on practical opportunities and lessons relevant to QS.",
          "Hold kick-off meetings for the MoveIN and 1Mentor internal security assessments.",
          "Complete review of the 1Mentor web application penetration testing report and progress identified findings with stakeholders.",
          "Check in on the various procurement processes, as they have gone a little quiet."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "mimo",
        "heading": "MIMO (MoveON and MoveIN) · Ashok Arunakiri",
        "highlights": "Progressed MoveON recovery readiness through infrastructure recreation, application testing and restoration-automation improvements ahead of next week's DR exercise. Completed the MoveIN BCP exercise, recreating the QA infrastructure and deploying application code in AWS London.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "MoveON recovery automation",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Improved provisioning and restoration automation during recovery preparation, including EFS configuration, server hardening, database-backup fixes and rsync restoration. Resolved login issues and identified further deployment inconsistencies.",
            "bullets": []
          },
          {
            "title": "JasperReports builds",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Standardised Docker-based JasperReports builds, validated report rendering and documented release retention and rollback procedures.",
            "bullets": []
          },
          {
            "title": "DS Server 5.0.1",
            "label": "Non-roadmap",
            "status": "",
            "text": "Deployed DS Server 5.0.1 in Docker in AWS Canada and prepared the equivalent configuration for France.",
            "bullets": []
          },
          {
            "title": "Telemaxx MySQL replacement",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Provisioned the replacement Telemaxx MySQL server as part of the EOL migration initiative.",
            "bullets": []
          },
          {
            "title": "SSL auto-renewal",
            "label": "Non-roadmap",
            "status": "",
            "text": "Extended SSL auto-renewal automation to France, with offline verification and rollback tests passing.",
            "bullets": []
          },
          {
            "title": "Database compliance outputs",
            "label": "Non-roadmap",
            "status": "",
            "text": "Supplied database compliance-command outputs to the external penetration-testing team across MongoDB and MySQL RDS environments.",
            "bullets": []
          },
          {
            "title": "Uptime reporting and support",
            "label": "Non-roadmap",
            "status": "",
            "text": "Completed September uptime reporting and France Demo inventory and backup work. Supported Advanced Publisher troubleshooting, client SSO fixes and development-requested data-copy and anonymisation activities.",
            "bullets": []
          },
          {
            "title": "MoveIN BCP exercise",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Completed the BCP exercise; recovery documentation is being finalised.",
            "bullets": []
          },
          {
            "title": "MoveIN Demo Elasticsearch upgrade",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Upgraded Demo Elasticsearch from 7.13 to 7.17.2 alongside the underlying OS, and created an Ansible playbook for repeatable installation and recreation.",
            "bullets": []
          },
          {
            "title": "MoveIN SSO and Cloudflare",
            "label": "Non-roadmap",
            "status": "",
            "text": "Configured SSO for a new client and resolved the Cloudflare consent-page issue affecting users in China.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Complete a final recovery dry run on Monday, finalise the documentation and conduct the actual DR exercise later in the week.",
          "Address remaining application configuration and deployment inconsistencies identified during recovery testing.",
          "Progress staging and Telemaxx MySQL migrations, the Telemaxx PlatformPHP1 root-volume migration and validated retirement of old staging resources.",
          "Integrate Docker-based JasperReports deployment automation into live environments.",
          "Complete live validation and activate France SSL auto-renewal scheduling.",
          "Continue Ubuntu and component upgrades, configuration backups, remaining inventory and backup activities, and Ansible modularisation.",
          "Improve SigNoz observability, including service mapping and Nginx-to-backend request tracing.",
          "Follow up on external security-assessment findings, Advanced Publisher issues, data-copy requests and outstanding SSO changes.",
          "Finalise MoveIN BCP recovery documentation."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "de-infra",
        "heading": "D&E · Ashok Arunakiri",
        "highlights": "Switched HUB1 back to the upgraded OS and container environment after resolving the configuration issues that caused the previous week's rollback. Completed an AI-assisted Kubernetes proof of concept for TM Dev on Amazon EKS, adapting existing Ansible-based deployment automation.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "HUB1 switch-back",
            "label": "Non-roadmap",
            "status": "",
            "text": "Corrected the HUB1 deployment configuration behind MongoDB connection failures and completed the switch back to the upgraded OS and container environment.",
            "bullets": []
          },
          {
            "title": "GitHub Actions preparation",
            "label": "Non-roadmap",
            "status": "",
            "text": "Progressed GitHub Actions-based deployment preparation for HUB1.",
            "bullets": []
          },
          {
            "title": "Tableau server",
            "label": "Non-roadmap",
            "status": "",
            "text": "Prepared the replacement Tableau server, backups and required drivers. Coordinated validation by the teams using Tableau and received their confirmation.",
            "bullets": []
          },
          {
            "title": "Solr server reboot RCA",
            "label": "Non-roadmap",
            "status": "",
            "text": "Completed the production Solr server reboot RCA and documented corrective and preventive actions.",
            "bullets": []
          },
          {
            "title": "Rovo–Microsoft Teams authorisation",
            "label": "Non-roadmap",
            "status": "",
            "text": "Worked with CORP-IT on Rovo–Microsoft Teams authorisation. The authorisation prompt is resolved, but automatic transcript retrieval remains unavailable.",
            "bullets": []
          }
        ],
        "risks": [
          "D&E: Live TU and TM PHP and Drupal upgrades remain on hold pending developer confirmation and approval."
        ],
        "nextWeek": [
          "Complete the Tableau server switchover early next week.",
          "Prepare the non-production HUB1 environment for MongoDB upgrade testing and continue GitHub Actions-based deployment preparation.",
          "Review AI-generated Alibaba Cloud recommendations for EIP bandwidth usage and billing, and assess applicable changes.",
          "Track reboot-RCA preventive actions and continue Rovo follow-up with CORP-IT and Atlassian.",
          "Continue containerd and Kubernetes networking upskilling."
        ],
        "notes": []
      },
      {
        "week": 42,
        "team": "ubs",
        "heading": "UBS · Ashok Arunakiri",
        "highlights": "",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "User offboarding and domain configuration",
            "label": "Non-roadmap",
            "status": "",
            "text": "Completed user offboarding, mailbox safe-sender updates and new-domain configuration.",
            "bullets": []
          },
          {
            "title": "UAT FSx and HubSpot extraction",
            "label": "EP-54 · Appian to HubSpot (US)",
            "status": "",
            "text": "Progressed UAT FSx configuration and updated extraction scripts for the HubSpot migration.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Review AWS costs, progress data exports and test production database recovery."
        ],
        "notes": []
      },
      {
        "week": 40,
        "team": "syd1",
        "heading": "SYD1 · Charlie Liu",
        "highlights": "Every QS front end now ships from one reviewed pipeline. A build is identical wherever it is run, each release records exactly what was tested before it went out, and an open tab quietly refreshes itself when a newer version is live. Six production apps that were still managed by hand moved under the same control this week, with a written release and rollback procedure, and the data graph, the sign-in service and HolonIQ all reached production through the same reviewed step. That is the foundation the rest of the week stands on: the first feature switches went live in production with a rehearsed revert behind them, and Alumni Insight made its first promotion to production.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Release flags",
            "label": "EP-95 · MYQS Staging",
            "status": "On track",
            "text": "Features can be switched on or off for staff and customers without a new release; every switch is audited, a revert was rehearsed in staging before the first production change, and the first two switches are live in production.",
            "bullets": []
          },
          {
            "title": "Release pipeline",
            "label": "EP-95 · MYQS Staging",
            "status": "On track",
            "text": "Every QS front end ships from one reviewed pipeline: builds are identical wherever they run, each release records exactly what was tested, old tabs refresh themselves, and six production apps moved from hand-managed to code-managed with a written release and rollback procedure.",
            "bullets": []
          },
          {
            "title": "Design System and MyQS",
            "label": "EP-26 · MyQS Design System",
            "status": "On track",
            "text": "Switching accounts in any QS app is now instant and shows which products each account opens; Ranking Master accounts are labelled Primary; after accepting an invitation the new account appears at once and administration menus follow the shell’s access rules; rankings board insights and the template’s overview readings reached production; two design releases rolled out to every app.",
            "bullets": []
          },
          {
            "title": "Alumni Insight",
            "label": "EP-25 · QAS Alumni Insights",
            "status": "On track",
            "text": "Answers every question from pre-computed aggregates instead of crunching in the browser, and its data sits in the governed serving layer alongside rankings; the first staging-to-production promotion went through.",
            "bullets": []
          },
          {
            "title": "QS Supergraph and Data Layer",
            "label": "EP-18 · QAS Rankings App",
            "status": "On track",
            "text": "Rankings in the data graph can now rank entities other than institutions, and moving data between environments is safer: table-scoped, locked against concurrent writers, and rehearsed on a clone before production.",
            "bullets": []
          },
          {
            "title": "HolonIQ / HolonOS",
            "label": "EP-93 · QAS WUR",
            "status": "On track",
            "text": "HolonIQ on the QS estate is hardened and monitored — secure-by-default connections, alarms on every environment, slow queries capped in production; WUR Highlights shows where academic and employer nominations come from; HolonIQ exports now appear in QS’s compliance feed; the legacy regional export is kept off production.",
            "bullets": []
          },
          {
            "title": "CX",
            "label": "EP-87 · MyQS CX – Ph 2",
            "status": "On track",
            "text": "CX admins can bulk-import users in production, see HolonIQ export activity in the access feed, and the embargo-dates page is live behind its switch.",
            "bullets": []
          },
          {
            "title": "QS Auth",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Staging sign-in is limited to QS staff addresses, and apps learn which products an account holds the moment it signs in.",
            "bullets": []
          },
          {
            "title": "Compliance and Pulse",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "On track",
            "text": "QS now keeps one tamper-evident record of every administrative action across its cloud estate, and feature-switch changes and HolonIQ exports flow into the compliance feed.",
            "bullets": []
          }
        ],
        "risks": [
          "None raised."
        ],
        "nextWeek": [
          "The Rankings Template’s new design (focus, overview, index by indicator, indicator view and institution panel) ships.",
          "Feature switches move to the next stage: CX reads its switches from the sign-in response, and the release-pipeline checks reach the remaining apps.",
          "Ranking Master accounts can be chosen in CX’s account type picker, and MyQS opens on the account band.",
          "The data graph’s branch model is settled: one trunk, with production as a release pointer."
        ],
        "notes": [
          "The printed heading carries its own reporting period: “SYD1 · Charlie Liu · 26 September – 3 October 2026”, a week offset from the report’s 28 September – 2 October 2026."
        ]
      },
      {
        "week": 40,
        "team": "cerebrum",
        "heading": "Cerebrum · Nicolas Jourdain",
        "highlights": "No update was received this week.",
        "highlightBullets": [],
        "delivery": [],
        "risks": [],
        "nextWeek": [],
        "notes": [
          "The section prints only the line “No update was received this week.” under the heading; it has no HIGHLIGHTS / DELIVERY / RISKS / NEXT WEEK blocks. The line is recorded as highlights."
        ]
      },
      {
        "week": 40,
        "team": "blr2",
        "heading": "BLR2 · Simon Hall",
        "highlights": "Delivered a strong round of trust-and-clarity improvements across both initiatives this week — Partner Discovery now has in-product Video Tutorials and a single, unified interest activity view, and MyQS Stars institutions will now see the latest dataset based on subscription date.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Partner Discovery",
            "label": "EP-94 · Partner Discovery – Phase 1",
            "status": "On track",
            "text": "Added a Video Tutorials library inside Partner Discovery so institutions can learn how to use the module without leaving the page. Made profile analytics meaningfully more accurate: visits from an institution’s own staff no longer inflate the numbers, visits to shared public profile pages are now counted, shared links are clearly labelled as shared visits with the sender’s search details stripped out, and each visit source has a clearer explanation on the dashboard. Simplified the analytics dashboard by removing low-use tiles and ranked lists. Added expired partnerships to the partnership map and activity view so institutions can see their full partnership history. Consolidated interest management into a single activity dashboard so users have one place to track incoming and outgoing interest, with previously shared links continuing to work. Gave contributors the same ability as administrators to view and filter across all institution opportunities, while keeping unpublished opportunity details hidden until they go live. Refreshed the Plan & Usage overview with clearer labels, published-opportunity counts, and visual cues for features that are not available on the current plan. Improved the reliability of opportunity links so they open correctly regardless of institution or opportunity name. QA closed out testing of Profile Analytics and Video Tutorials and is now deep into testing of the broader Partner Discovery improvements (contributor permissions, filters, visibility, UI and navigation, image and placeholder handling, portfolio visibility, view-count logic, admin-only analytics, and Plan & Usage).",
            "bullets": []
          },
          {
            "title": "MyQS",
            "label": "EP-46 · QAS Stars; Non-roadmap",
            "status": "On track",
            "text": "Fixed data correctness across MyQS Stars so every institution now sees the most recent audit, including the right indicator-level data based on their subscription history — closing a gap where some renewed or re-audited institutions were still being shown older audit data. Hid the in-progress AI Insights panel in the Stars Category Deep Dive so users only see finished, reviewed content while that feature is being finalised. Shipped the first slice of the regional ranking dashboards work: the Ranking Performance Summary now orders tied ranks consistently (best score first), presents a cleaner and more intuitive “institutions surpassed” percentage, and shows the correct totals, student, academic and faculty figures for the 2027 Arab region.",
            "bullets": []
          }
        ],
        "risks": [
          "No blockers, outstanding decisions, or major risks flagged this week."
        ],
        "nextWeek": [
          "Partner Discovery: finish the current QPD validation pass, close any defects raised during QA, and keep sharpening the Partner Discovery experience based on feedback.",
          "MyQS: expand the team’s focus on QAS stack with Stars as a learning point — continue the design and data work already in flight.",
          "QA: complete validation of the ongoing QPD ticket, retest reported issues, run MyQS regression testing, and perform live-deployment sanity testing."
        ],
        "notes": [
          "The MyQS item carries two printed labels side by side (“EP-46 · QAS Stars” and “Non-roadmap”); both are kept in one label string joined by “; ”."
        ]
      },
      {
        "week": 40,
        "team": "blr1",
        "heading": "BLR1 · Simon Hall",
        "highlights": "Completed development of the bulk ROR data update, with safeguards for missing Core IDs and conflicting ROR records, plus exception logs for manual review. This improves institution data accuracy for existing profile information.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "HUB2",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "All newly added sprint work is development complete and currently with QA before deployment:",
            "bullets": [
              "Added a rich-text scholarship description field to support profile-specific content.",
              "Extended the existing API to provide scholarship content to Drupal for display on TU and TM.",
              "Generated a report of published TU and TM institutions to support the reconciliation of missing or unpublished profiles.",
              "Completed the bulk ROR data update with validation, conflict handling, and exception reporting.",
              "Fixed the Cloudflare URL-validation issue that was preventing a profile from being saved."
            ]
          },
          {
            "title": "QPD / MyQS",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Completed the development-side institution reconciliation and provided a report identifying missing records and gaps between HUB2 and QPD.",
            "bullets": []
          },
          {
            "title": "Accord",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Generated the Accord leads report covering 1 January 2024 to date, with PII removed and replaced by indicators showing whether each data field is present or missing.",
            "bullets": []
          },
          {
            "title": "HUB1",
            "label": "Non-roadmap",
            "status": "Hold",
            "text": "No active work was assigned during this sprint.",
            "bullets": []
          }
        ],
        "risks": [
          "No major risks, blockers, or decisions requiring escalation this week."
        ],
        "nextWeek": [
          "Complete QA validation and deploy the approved changes."
        ],
        "notes": []
      },
      {
        "week": 40,
        "team": [
          "ecu1",
          "ecu2"
        ],
        "heading": "ECU1 and ECU2 · Jonnathan Pena and Paula Jiminez",
        "highlights": "Release 74.27.7 was deployed to production. It includes:",
        "highlightBullets": [
          "IBM login page text changes.",
          "New legal disclaimer on the IBM login page.",
          "Autonomous default provider resolution in the backend.",
          "Optimisation of OccupationExplorerMultiple.",
          "Fixes for findings from “Scan for Vulnerabilities in Artifact Registry”."
        ],
        "delivery": [
          {
            "title": "",
            "label": "EP-19 · 1 Mentor IBM",
            "status": "",
            "text": "Bug: getJobTitleRecommendationByMajorIds without limited occupations (IBM).",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "The “View More” button in the mobile skill modal was not working.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "PLAR tasks: configurable login page text and contact info; add experience source tag; hide skill suggestions and set resume upload as the default empty state; configurable confirmation page; route to confirmation page after the wizard and end the journey.",
            "bullets": []
          }
        ],
        "risks": [
          "No risks or decisions required at the moment. The new sprint starts this Wednesday. ECU1 and ECU2 are currently fully focused on 1 Mentor, so if either team is considered for another project, advance notice would help the teams assess the impact on their deliverables."
        ],
        "nextWeek": [
          "Complete and certify all PLAR tasks so they can be released next week, as committed to the client for 15 October."
        ],
        "notes": [
          "The five HIGHLIGHTS bullets each carry a printed label, which highlightBullets has no field for: the first four are labelled “EP-19 · 1 Mentor IBM” and the fifth “Non-roadmap”.",
          "DELIVERY is introduced by the printed line “The following items were also worked on and handed over to QA for certification:” and is a bullet list with no item names, so each delivery item has an empty title and no status chip."
        ]
      },
      {
        "week": 40,
        "team": "movein",
        "heading": "MoveIN · Mahesh",
        "highlights": "New AI-powered tools now let teams build on-brand email campaigns automatically, while Smart Match Assistant and data-entry improvements speed up onboarding and reduce manual effort across the platform.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "AI Brand and Template Tools",
            "label": "EP-89 · MoveIN Smart Match / AI Email",
            "status": "",
            "text": "new AI capabilities automatically detect an institution’s brand style from its website and speed up email campaign creation, helping teams produce on-brand communications with less manual work.",
            "bullets": []
          },
          {
            "title": "Email Quality and Brand Compliance",
            "label": "EP-89 · MoveIN Smart Match / AI Email",
            "status": "",
            "text": "outgoing emails now maintain consistent, professional branding automatically, reducing manual formatting corrections.",
            "bullets": []
          },
          {
            "title": "AI Usage Visibility",
            "label": "EP-89 · MoveIN Smart Match / AI Email",
            "status": "",
            "text": "administrators can now see clear, easy-to-read reports of AI usage, supporting better oversight and planning.",
            "bullets": []
          },
          {
            "title": "Feature Awareness",
            "label": "EP-89 · MoveIN Smart Match / AI Email",
            "status": "",
            "text": "new in-app prompts introduce first-time users to the AI email tools, encouraging adoption.",
            "bullets": []
          },
          {
            "title": "Guided Contact Matching",
            "label": "EP-89 · MoveIN Smart Match / AI Email",
            "status": "",
            "text": "a new step-by-step walkthrough helps users complete automated contact matching more easily, which should reduce support requests.",
            "bullets": []
          },
          {
            "title": "Faster Record Reconciliation",
            "label": "Non-roadmap",
            "status": "",
            "text": "improved tracking and bulk actions let teams review and reconcile university records more quickly.",
            "bullets": []
          },
          {
            "title": "Simplified Data Imports",
            "label": "Non-roadmap",
            "status": "",
            "text": "a clearer import process reduces errors when teams upload new contact data.",
            "bullets": []
          },
          {
            "title": "Easier Bulk Updates",
            "label": "Non-roadmap",
            "status": "",
            "text": "marketing and admissions teams can now update contact records in bulk using just an email address, cutting manual data entry.",
            "bullets": []
          },
          {
            "title": "Expanded Chinese Language Support",
            "label": "Non-roadmap",
            "status": "",
            "text": "the platform now supports Chinese across more areas, improving accessibility for users in that region.",
            "bullets": []
          },
          {
            "title": "Interface Polish",
            "label": "Non-roadmap",
            "status": "",
            "text": "minor display and formatting issues were fixed, improving overall consistency of the user experience.",
            "bullets": []
          }
        ],
        "risks": [
          "Infrastructure upgrade demo timing. Timing for an infrastructure version upgrade demo has not been finalised and depends on upcoming quality-assurance feedback."
        ],
        "nextWeek": [
          "Smart Match Assistant – Sticky Navigation and Bulk Action Header: review teams will work through large queues of match suggestions faster and with fewer mistakes once scrolling friction is removed.",
          "Beta Indicators for Emerging AI Capabilities: clear “Beta” labelling on new AI features will set user expectations and encourage feedback.",
          "AI Email Template Builder – First-Time User Guidance and Onboarding: new users will receive guided onboarding for the AI email tools, speeding adoption and reducing support needs.",
          "AI Email Templates – Dynamic Brand Styling and Image Persistence: institutional branding (logos, colours) will reliably persist across email edits, protecting brand consistency.",
          "SharePoint Integration – Instant Access to Merged Evidence Documents: staff will see newly merged applicant documents instantly, removing a manual step that slows document review.",
          "Portal Navigation Consistency for Single-Portal Instances: navigation will be restored to a consistent experience for institutions using a single portal.",
          "Data Import Configurator – Programme Field Assignment Fix: a fix will restore administrators’ ability to set fixed academic programmes during data imports, preventing miscategorised student records."
        ],
        "notes": [
          "DELIVERY is printed as “Name — prose” bullets with the label at the end of each bullet and no status chips; the name is recorded as title and the prose as text, so text begins lower-case as printed."
        ]
      },
      {
        "week": 40,
        "team": "events",
        "heading": "Digital and Events · Catarina Cunha",
        "highlights": "South America Rankings were released on 1 October.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Drupal clean-up",
            "label": "Non-roadmap",
            "status": "Ready for release",
            "text": "Last batch of changes is waiting release.",
            "bullets": []
          },
          {
            "title": "Convert CMT module from React to Drupal",
            "label": "Non-roadmap",
            "status": "Ready for release",
            "text": "Waiting release.",
            "bullets": []
          },
          {
            "title": "TU Performance investigation",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "Ready for release",
            "text": "Last batch of changes is waiting release.",
            "bullets": []
          },
          {
            "title": "Agenda builder",
            "label": "Non-roadmap",
            "status": "Hold",
            "text": "This is still waiting business validation.",
            "bullets": []
          },
          {
            "title": "Drupal 11",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "On track",
            "text": "A decision has been made to upgrade to a higher version, so instead of 11.3.16 the plan is now to upgrade to Drupal 11.4.8. All non-prod environments have been upgraded and testing is under way.",
            "bullets": []
          }
        ],
        "risks": [
          "Drupal sprint release. It was agreed with product that this would be delayed, since Drupal needs to be upgraded first. Early next week the team will decide whether all conditions are in place to do the upgrade, depending on testing and on when the sprint code can be released.",
          "Redesign of QSA page. Waiting for clear requirements and form changes."
        ],
        "nextWeek": [
          "Finance page: this work will start, since final designs have been approved.",
          "Emails redesign: this work will start, since final designs have been approved.",
          "ITR and Arab Rankings: release happening on 14 October, so testing and preparation are set to start next week.",
          "Outreach Marcomms Dashboard: this is the last area that needs migration from v2 to v3, and the work is set to start next week."
        ],
        "notes": [
          "This chapter has no boxed sub-heading, only the chapter title and the byline “Catarina Cunha (Events and Drupal) · week of 28 September – 2 October 2026”, and its headings are printed in title case (Highlights / Delivery / Risks and decisions needed / Next week)."
        ]
      },
      {
        "week": 40,
        "team": "qsapply",
        "heading": "QS Apply (Appian) · Sreeram Sreekumar",
        "highlights": "The team continues to focus on Appian production support and enhancements, while progressing with Appian Migration documentation and review activities.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Multi-Factor Authentication (MFA)",
            "label": "Non-roadmap",
            "status": "",
            "text": "implemented MFA functionality in the TEST environment in preparation for the mandatory MFA rollout in Production by 1 December 2026.",
            "bullets": []
          },
          {
            "title": "Referral Partner Visibility",
            "label": "Non-roadmap",
            "status": "",
            "text": "added Referral Partner names to the Agent Partner dropdown in the Applicant Dashboard to improve partner identification and selection.",
            "bullets": []
          },
          {
            "title": "Referral Partner Username Update",
            "label": "Non-roadmap",
            "status": "",
            "text": "investigated and resolved an error encountered while updating the username for a referral partner.",
            "bullets": []
          },
          {
            "title": "Migration documentation",
            "label": "EP-54 · Appian to Hubspot (US); EP-27 · Appian to Hubspot (D&E)",
            "status": "In progress",
            "text": "The team continues to review and consolidate the migration documentation, based on the findings and information gathered during the discovery phase.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Continue with the review and consolidation of migration documentation.",
          "Begin preparing user flows to support the migration analysis and documentation.",
          "Continue MFA testing in the TEST environment.",
          "Prepare and share the MFA implementation reference document with relevant users to support the upcoming Production rollout."
        ],
        "notes": [
          "Delivery is printed under two headings rather than one DELIVERY heading: “APPIAN PRODUCTION SUPPORT” (the first three items, printed as “Name: prose” bullets with no status chips) and “APPIAN MIGRATION” (the Migration documentation item). No RISKS AND DECISIONS NEEDED block is printed."
        ]
      },
      {
        "week": 40,
        "team": "ubsdev",
        "heading": "UBS Development · Mohd Azhar Mohd Razman",
        "highlights": "The Appian dev team has commenced work on developing integration replacements for enquiry forms within HubSpot. Once the replacements are complete, this will allow QS to decommission its legacy APIs, reduce AWS spend and take a step closer to decommissioning legacy CRMs.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Enquiry form (API) replacements",
            "label": "EP-54 · Appian to Hubspot Migration (US)",
            "status": "On track",
            "text": "Replacements for Keele and RCA are ready for testing. Griffith and ACU are undergoing changes for auto ticket creation.",
            "bullets": []
          },
          {
            "title": "ESI (API) replacements",
            "label": "EP-54 · Appian to Hubspot Migration (US)",
            "status": "On track",
            "text": "Stirling development work is still under way, as the data mapping discussion is ongoing with CDM.",
            "bullets": []
          },
          {
            "title": "Informatica replacement (S3 flat file)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "",
            "bullets": [
              "Griffith’s replacement is awaiting deployment, pending the API replacement.",
              "ECU’s replacement has been developed and is undergoing testing by CDM.",
              "Brighton’s replacement has been developed and is awaiting testing.",
              "Stirling development work is still under way, in parallel with the ESI work, as the data mapping discussion is ongoing with CDM."
            ]
          },
          {
            "title": "Informatica replacement (Keystone)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "RCA and ECU have been fixed in the sandbox environment following testing and are now ready for validation.",
            "bullets": []
          },
          {
            "title": "Informatica replacement (York Integration)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "Continued working on the Informatica York Integration to pull data from Dynamics after adding the deposit status column.",
            "bullets": []
          },
          {
            "title": "AI Chatbot functionality in HubSpot",
            "label": "Initiative not identified",
            "status": "In progress",
            "text": "Performed a test run for chatbot test automation.",
            "bullets": []
          }
        ],
        "risks": [
          "Contact Matching in Sandbox. Still not able to fully test Contact Matching in Sandbox due to issues promoting data from production to sandbox, caused by missing data objects. Testing will proceed in Sandbox without Contact Matching.",
          "UoL licensing. One institution’s test environment (UoL) is missing required licensing to proceed with development. Simon is arranging access.",
          "HubSpot x HubSpot data model. Clare is awaiting the Data Model from Daniel before development on the HubSpot x HubSpot integration can begin.",
          "LSBU on hold. Informatica (S3 flat file) replacement: LSBU development is on hold while the team awaits the tender outcome.",
          "Stirling mappings. Stirling Enquiry and ESI replacement: discussion ongoing with CDM regarding tag data mappings and additional fields for UTM.",
          "Contact Tags. Discussion still ongoing to replace Applicant Tags with a new Tag and Contact association."
        ],
        "nextWeek": [
          "Complete development and start testing for ticket creation for Griffith and ACU, so deployment to production can proceed for the Enquiry and ESI replacements.",
          "Complete testing for the Enquiry API replacement for Keele and RCA.",
          "Continue development of the Enquiry and ESI replacement for Stirling, following discussion with CDM.",
          "Continue testing and validation of the Informatica replacement for Brighton, Stirling, and ECU.",
          "Continue testing the MFA feature in the Appian TEST environment before deploying the changes to production."
        ],
        "notes": []
      },
      {
        "week": 40,
        "team": "cx",
        "heading": "CX Systems · Fahad Door",
        "highlights": "Progressed QS Events SMS and Sakari activities through demo, training and workflow troubleshooting, while resolving HubSpot helpdesk connection issues and supporting Stirling and Lincoln with call logs and IVR changes. Continued Aircall operations through user onboarding, investigation of the double-window calling bug, outage communication and re-initiation of Twilio number porting. Also followed up on SIP implementation and started initial work on Sakari and Vira callback automations.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "QS Events",
            "label": "Non-roadmap",
            "status": "",
            "text": "conducted the SMS Sakari demo and training.",
            "bullets": []
          },
          {
            "title": "QS Events",
            "label": "Non-roadmap",
            "status": "",
            "text": "troubleshot the SMS workflow and reported the Helpdesk authentication issue to Sakari.",
            "bullets": []
          },
          {
            "title": "HubSpot",
            "label": "Non-roadmap",
            "status": "",
            "text": "troubleshot the Helpdesk connection issue in the B2C HubSpot portal.",
            "bullets": []
          },
          {
            "title": "Stirling",
            "label": "Non-roadmap",
            "status": "",
            "text": "extracted and provided the requested call logs from Twilio.",
            "bullets": []
          },
          {
            "title": "Lincoln",
            "label": "Non-roadmap",
            "status": "",
            "text": "implemented IVR changes.",
            "bullets": []
          },
          {
            "title": "Aircall",
            "label": "Non-roadmap",
            "status": "",
            "text": "communicated the double-window calling bug to Aircall and provided supporting evidence.",
            "bullets": []
          },
          {
            "title": "Aircall",
            "label": "Non-roadmap",
            "status": "",
            "text": "reviewed the outage and broadcast the relevant information to the team.",
            "bullets": []
          },
          {
            "title": "Aircall",
            "label": "Non-roadmap",
            "status": "",
            "text": "onboarded new users.",
            "bullets": []
          },
          {
            "title": "Number porting",
            "label": "Non-roadmap",
            "status": "",
            "text": "re-initiated the process of porting Twilio numbers to Aircall.",
            "bullets": []
          },
          {
            "title": "SIP",
            "label": "Non-roadmap",
            "status": "",
            "text": "followed up on SIP implementation.",
            "bullets": []
          },
          {
            "title": "Callbacks",
            "label": "Non-roadmap",
            "status": "",
            "text": "started initial work on Sakari and Vira automations for callbacks.",
            "bullets": []
          }
        ],
        "risks": [
          "Sunway AI Chatbot. Work is delayed because the required data source has not yet been provided."
        ],
        "nextWeek": [
          "Sunway: implement IVR changes.",
          "Callbacks: continue work on Sakari and Vira automations.",
          "SIP: follow up on SIP implementation.",
          "Aircall: continue onboarding new users.",
          "Sunway AI Chatbot: start development once the required data source is provided by Student Success.",
          "Sender ID Registration: follow up on the registration process."
        ],
        "notes": [
          "The NEXT WEEK bullet “Sunway AI Chatbot: start development once the required data source is provided by Student Success.” carries the printed label “Initiative not identified”, which nextWeek has no field for."
        ]
      },
      {
        "week": 40,
        "team": "cyber",
        "heading": "Cyber · Rowan Chapman",
        "highlights": "The CrowdStrike AI Security proof of value continues to demonstrate strong potential for QS. Through investigation of AI usage, the team has already identified and implemented improvements to address emerging AI-related risks, highlighting the value of the module.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Box security posture review",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "",
            "text": "Completed a further round of Box stakeholder discovery sessions. Initial findings have identified additional business stakeholders and use cases requiring consultation before recommendations can be finalised. The programme is also managing its first business challenge arising from previously implemented changes, highlighting the sensitivity and complexity of reducing risk in a heavily embedded platform.",
            "bullets": []
          },
          {
            "title": "GRC platform procurement",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "",
            "text": "Concluded the Drata proof of value and requested commercial pricing aligned to the agreed scope. Commercial proposals have also been received from Hyperproof, allowing the GRC platform assessment to progress into commercial and vendor comparison activities.",
            "bullets": []
          },
          {
            "title": "Third-Party Risk Management programme",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "",
            "text": "Procurement engaged the preferred vendor, UpGuard, to progress Third-Party Risk Management capabilities. This initiative remains a key enabler for establishing a more mature vendor onboarding and risk assessment process before the end of the year.",
            "bullets": []
          },
          {
            "title": "Cyber Awareness Month preparations",
            "label": "Non-roadmap",
            "status": "",
            "text": "Commenced development of cybersecurity awareness content for publication through Inside QS in support of Cyber Awareness Month activities during October.",
            "bullets": []
          },
          {
            "title": "Identity security incidents",
            "label": "Non-roadmap",
            "status": "",
            "text": "Multiple identity-related security incidents were investigated during the last two weeks. Impacted users were notified and appropriate response activities undertaken in accordance with established security processes.",
            "bullets": []
          },
          {
            "title": "Budget and strategy planning",
            "label": "Non-roadmap",
            "status": "",
            "text": "Facilitated a budget planning and strategy workshop with the wider Data Security & Compliance team to support prioritisation, investment planning and alignment of future security initiatives.",
            "bullets": []
          },
          {
            "title": "Endpoint vulnerability reduction programme",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "",
            "text": "Continued working with Corporate IT to reduce vulnerabilities across the QS endpoint fleet using CrowdStrike. Open vulnerabilities have been reduced from approximately 500,000 to 200,000, representing significant progress in reducing organisational risk exposure.",
            "bullets": []
          },
          {
            "title": "CyberCon 2026 registration",
            "label": "Non-roadmap",
            "status": "",
            "text": "Registered for CyberCon Melbourne (14–16 October) to support ongoing professional development, industry engagement, vendor evaluation and awareness of emerging cybersecurity and privacy trends.",
            "bullets": []
          }
        ],
        "risks": [
          "Box platform constraints and stakeholder impacts. Discovery activities continue to show that Box is… well… an issue and there is resistance to change beginning to emerge. Additional stakeholder engagement is required before recommendations can be finalised.",
          "External security rating decline. The introduction of multiple public-facing staging and test assets running end-of-life software, combined with issues associated with future17.org, has negatively impacted QS’s external security rating. As a result, QS has moved from an A-tier to a B-tier organisation within external cybersecurity risk rating platforms. Remediation and improved governance and change management regarding public-facing assets will be required to reverse this trend."
        ],
        "nextWeek": [
          "Review commercial proposals received for Drata and Hyperproof and progress the GRC platform selection process.",
          "Continue engagement with Procurement and UpGuard to advance Third-Party Risk Management procurement activities.",
          "Conduct further Box stakeholder discovery sessions and continue development of recommendations for the CISO.",
          "Publish and promote Cyber Awareness Month content through Inside QS and related internal communication channels.",
          "Continue vulnerability reduction activities with Corporate IT and identify opportunities to restore QS’s external security rating."
        ],
        "notes": [
          "This chapter has no boxed sub-heading, only the chapter title and the byline “Rowan Chapman · Network Security Manager · week of 28 September – 2 October 2026”; its headings are printed in title case and its delivery items carry labels but no status chips."
        ]
      },
      {
        "week": 40,
        "team": "mimo",
        "heading": "MIMO · MoveON and MoveIN",
        "highlights": "",
        "highlightBullets": [
          "MoveON: modernised Advanced Publisher staging with a new MySQL 8.4 Percona cluster and completed Redis/Memcached containerisation in France and Telemaxx, improving scalability and infrastructure efficiency.",
          "MoveIN: prepared an upgraded Elasticsearch testing environment and completed SSO integration for a new client."
        ],
        "delivery": [
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Migrated Advanced Publisher staging from standalone MySQL to the new cluster and addressed the AWS NFS bottleneck.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Migrated 30 Telemaxx instances to MySQL 8.4.7; remaining migrations are planned over the weekend with scheduled downtime.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Completed Redis/Memcached container migration in France and Telemaxx, including application integration and monitoring. Deployed containerised SMTP across Demo, AWS London, AWS Lite and AWS Canada.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Successfully tested and enabled scheduled SSL renewal in staging. Merged reusable provisioning prerequisites and implemented locally tested certificate bootstrap for replacement servers.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Completed France onsite/offsite backup snapshot synchronisation, expanded Cloudflare protection and increased memory on affected web servers following out-of-memory incidents.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Prepared the Demo Elasticsearch cluster with upgraded OS and Elasticsearch versions for validation.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Completed SSO configuration for a new client, enabling authentication through its organisation.",
            "bullets": []
          }
        ],
        "risks": [
          "Service availability. Recurring France service disruption and Telemaxx Advanced Publisher timeouts remain service-availability risks; corrective work and monitoring continue.",
          "Repository credentials. Repository credential cleanup remains outstanding, leaving a security risk until remediation is completed."
        ],
        "nextWeek": [
          "Complete remaining Telemaxx MySQL migrations and progress PlatformPHP1 migration.",
          "Continue infrastructure automation, replacement-server SSL validation, configuration backups and documentation.",
          "Improve service mapping and request tracing, including staging SigNoz validation.",
          "Continue MoveIN Elasticsearch testing and prepare business-continuity test scripts."
        ],
        "notes": [
          "DELIVERY is printed under two sub-group headings, “MoveON” (the first five items) and “MoveIN” (the last two), as unnamed bullets with the label at the end and no status chips, so each item has an empty title."
        ]
      },
      {
        "week": 40,
        "team": "de-infra",
        "heading": "D&E · Ashok",
        "highlights": "",
        "highlightBullets": [
          "Completed HUB1 production OS upgrades and switchover of both production servers.",
          "Completed PHP 8.4 and Drupal 11.4.8 upgrades across all TU and TM non-production environments."
        ],
        "delivery": [
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Completed HUB1 production server switchover and temporarily stopped two unused development/staging servers to reduce unnecessary resource consumption.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Progressed HUB1 repository migration from Beanstalk to GitHub and tested GitHub Actions deployment pipelines in development.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Advanced DMARC analysis and enforcement preparation, including correcting MoveON Germany’s email-domain authentication and supporting DNS records.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Restored GenAI bot functionality through a temporary API-key rollback while investigating Enterprise migration and runner issues and replicating the workflow in the team’s account.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Resolved HUB2 client-tracking URL upload issues through a targeted Cloudflare WAF exception while retaining existing protection.",
            "bullets": []
          }
        ],
        "risks": [
          "GenAI workaround. GenAI functionality currently relies on a temporary workaround; the permanent Enterprise configuration remains unresolved."
        ],
        "nextWeek": [
          "Complete the analytics-l Tableau server switchover.",
          "Continue HUB1 deployment automation and complete the remaining MySQL/Redis components for TopMBA containerisation.",
          "Progress DMARC analysis and validation before establishing enforcement timing.",
          "Continue GenAI stabilisation and configure Automox following deployment approval."
        ],
        "notes": [
          "The second HIGHLIGHTS bullet carries the printed label “EP-85 · TU Performance & Upgrade”, which highlightBullets has no field for; the first bullet carries no label."
        ]
      },
      {
        "week": 40,
        "team": "ubs",
        "heading": "UBS · Ashok",
        "highlights": "Delivered client data-access changes and progressed database recovery testing and Snowflake integration.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Provisioned S3 access for four clients and resolved an S3 access issue.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Configured Snowflake accounts, roles, grants and keys, and established GCP storage integration.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Conducted EMEA CRMS Oracle database recovery testing and disabled an EMEA client in Synergy.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Investigate HubSpot data issues.",
          "Perform EMEA production MSSQL recovery testing.",
          "Review AWS costs."
        ],
        "notes": [
          "No RISKS AND DECISIONS NEEDED block is printed for this section."
        ]
      },
      {
        "week": 40,
        "team": "data",
        "heading": "Data & Analytics · Cerebrum",
        "highlights": "Cerebrum reached its most significant structural milestone to date: institution identity now reads from the platform registry rather than local bookkeeping. False merge-review cases fell from 2,037 to 633 genuine cases, unblocking Rankings as the first major consumer of corrected identifiers. Capacity and continuity are the clearest near-term concern in D&A/BI, with reduced delivery cover across the team in the same week. Taxonomy mapping is running in parallel across three teams this week — Cerebrum, GSF's subjects model and Employability's Subject Taxonomy/Standardization work are all independently mapping national or local classifications onto the QS subject structure, with no shared crosswalk yet. Upstream data quality and unclear business ownership remain a recurring constraint across ENROL, Aurora/UBS, OnePerson, the engagement pilot and HubSpot.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Cerebrum core platform",
            "label": "",
            "status": "ON TRACK",
            "text": "Institution identity now read from platform registry; false merge-reviews cut from 2,037 to 633 genuine cases + 51 contradictions. Rankings producer reached first bundle. Blocker: Genuine review queues need steward decisions; supersession can be read but not yet recorded.",
            "bullets": []
          },
          {
            "title": "Taxonomies, Student Flows & Employability",
            "label": "",
            "status": "ON TRACK",
            "text": "Programme-to-subject mapper deployed to AWS Lambda/Bedrock; Job Posting ingestion moved into active work. Blocker: Subject-level national mappings need explicit crosswalks into the QS taxonomy.",
            "bullets": []
          },
          {
            "title": "OnePerson & Student Data Transformation",
            "label": "",
            "status": "ON TRACK",
            "text": "QS Apply and Appian added as sources; People Data Labs scoping under way; linked to Cerebrum direction. Blocker: PDL field/version choice and Appian–QS Apply–HubSpot overlap still unresolved.",
            "bullets": []
          },
          {
            "title": "Data Platform Governance & Migration",
            "label": "",
            "status": "ON TRACK",
            "text": "Most Data Science repos moved GitLab→GitHub; Prefect IaC documentation and replica ENROL stack under way. Blocker: Several dbt projects still rely on personal credentials in CI pending service-account access.",
            "bullets": []
          },
          {
            "title": "ENROL & Unified Modelling",
            "label": "",
            "status": "ON TRACK",
            "text": "First model sign-off reporting workflow delivered; course-of-interest models next. Blocker: Jiun left this week after handover — reduced continuity on modelling; UBS data quality remains a dependency.",
            "bullets": []
          },
          {
            "title": "Aurora / Synergy2 / UBS Data Quality",
            "label": "",
            "status": "AT RISK",
            "text": "Synergy2 TEST environment live for BI; Deferred/Declined journeys backfilled; comms-direction fixes shipped. Blocker: Persistent UBS defects (course-of-interest, engagements, dates); root cause vs. repair still unclear.",
            "bullets": []
          },
          {
            "title": "Data-Led Engagement Pilot (University of London)",
            "label": "",
            "status": "AT RISK",
            "text": "Campaign build complete; Stirling lined up as the next campaign. Blocker: reduced delivery cover during the week — 5 Oct launch likely slips a few days.",
            "bullets": []
          }
        ],
        "risks": [
          "Aurora / Synergy2 / UBS Data Quality (D&A) — AT RISK: a cross-functional task force is now in place, but persistent UBS defects across course-of-interest records, engagements and dates remain — the priority is finding where bad data originates, not just repairing history.",
          "Data-Led Engagement Pilot, University of London (D&A) — AT RISK: the 5 Oct launch is likely to slip a few days on reduced delivery cover; Stirling is next once readiness is restored.",
          "Capacity and continuity are the clearest near-term concern in D&A/BI, with reduced delivery cover across the team in the same week.",
          "A handful of external dependencies are now pacing several workstreams at once: KCL transformation and HubSpot fixes, Support Salary Data direction, and the programme mapper feeding the GSF subjects model and Cerebrum/Employability taxonomy work."
        ],
        "nextWeek": [
          "Confirm the revised University of London campaign launch date once Ryan is back. (Owner: Ryan / University Services)",
          "Confirm final ownership of Jiun's unified-model handover outputs and experiments. (Owner: D&A Modelling team)",
          "Course-of-interest models next (ENROL & Unified Modelling).",
          "Stirling lined up as the next campaign."
        ],
        "notes": [
          "Taxonomy alignment is converging across three teams independently: Cerebrum, GSF's subjects model and Employability's Subject Taxonomy/Standardization work are all mapping national and local classifications onto the QS subject structure this week — a natural point to compare notes."
        ]
      },
      {
        "week": 40,
        "team": "data",
        "heading": "Business Intelligence",
        "highlights": "BI's two biggest delivery risks: reconciliation (the external partner engagement has ended; BI's interim process is on track to become the de facto official one) and data loading (the KCL transformation workflow missed its 30 Sep go-live and still depends on an outstanding external input, with no revised date). Capacity and continuity are this week's clearest cross-cutting risk: reduced delivery cover has pushed out the University of London campaign launch, and BI resourcing decisions remain open. Several BI decisions are converging on mid-to-late October: the portal greenlight (7 Oct), Griffith recon list (7 Oct), HubSpot duplicate-course cleanup (~7 Oct) and Tableau licensing responses (16 Oct).",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Client Reporting Portal (Power BI)",
            "label": "",
            "status": "ON TRACK",
            "text": "Greenlight session booked 7 Oct ahead of 16 Oct access target; Sean Coffey's MVP review positive. Blocker: Client user list from AM/CD still outstanding — needed for IT whitelisting and RLS encoding.",
            "bullets": []
          },
          {
            "title": "Reconciliation Process (interim)",
            "label": "",
            "status": "AT RISK",
            "text": "VW_RECON_RESULT built in Synergy2; Griffith interim list due 7 Oct. Blocker: Huble has stepped back (contract ends 14 Oct) after QS declined 12 extra hours — no vendor fallback; recon scrutiny tied to the GBP 2m budget gap.",
            "bullets": []
          },
          {
            "title": "Data Loading Efficiencies & Automation",
            "label": "",
            "status": "OFF TRACK",
            "text": "Contact Matching v2 running across all clients; historical source-tag migration nearly complete. Blocker: KCL transformation workflow missed its 30 Sep go-live and still depends on Simon — no revised date committed.",
            "bullets": []
          },
          {
            "title": "HubSpot Data Quality, Reruns & Backfilling",
            "label": "",
            "status": "AT RISK",
            "text": "57 audit tickets now triaged by business impact under an interim decision group. Blocker: No dedicated data model owner yet; workflows can still fail silently.",
            "bullets": []
          },
          {
            "title": "Tableau Offboarding & Fabric Transition",
            "label": "",
            "status": "ON TRACK",
            "text": "Non-renewal notice issued 28 Sep; scoping sent to Consulting/Insights/infra (responses due 16 Oct). Blocker: Consulting's early ask (~50 licences + Server) exceeds the desktop-only notice scope — needs a decision.",
            "bullets": []
          },
          {
            "title": "Data Acquisition QA & Load Reporting",
            "label": "",
            "status": "ON TRACK",
            "text": "Week 39: 89 loads, 31,844 records, 0 failures, 100% QA pass rate; Macquarie load pulled forward to 1 Oct. Blocker: RCA and KCL data still delayed; Royal College of Art has sent no data since 17 Aug.",
            "bullets": []
          },
          {
            "title": "Other reporting & enablement (stable)",
            "label": "",
            "status": "ON TRACK",
            "text": "No material change or new blockers this week.",
            "bullets": [
              "Internal Reporting Suite: new YoY/MoM pages live; departmental sessions starting.",
              "BI Operating Model & Taxonomy: data dictionary and AI prompt being finalised.",
              "Training: mid-Oct Power BI training being scheduled by Sharon.",
              "Synergy2 Foundations: staging DB agreed in principle as a production gate."
            ]
          },
          {
            "title": "MyQS 2.0 Client Application",
            "label": "",
            "status": "ON TRACK",
            "text": "Stirling prototype expected mid-Nov–early Dec. Blocker: Full build/launch now estimated ~Q2 2027 (pending prototype review).",
            "bullets": []
          },
          {
            "title": "CE Digital Transformation & PBI Migration",
            "label": "",
            "status": "ON TRACK",
            "text": "Supporting lead-scoring model and B2B/B2C funnel work with Natalie's team. Blocker: Remaining Tableau→Power BI migration tied to the 22 Jan 2027 deadline.",
            "bullets": []
          },
          {
            "title": "Wider QS Intelligence (Project Compass)",
            "label": "",
            "status": "ON HOLD",
            "text": "Groundwork complete (ISS, Rankings, GSF walkthroughs); concept previewed to the business. Blocker: Paused for capacity (client access, end of cycle, HubSpot); no restart date yet.",
            "bullets": []
          },
          {
            "title": "Quality Assurance Team Planning (future state)",
            "label": "",
            "status": "ON TRACK",
            "text": "Future QA tiering and the operating approach are agreed; sequencing set. Blocker: contract end dates in March 2027 are the natural decision point.",
            "bullets": []
          },
          {
            "title": "Team, Resourcing & Capability",
            "label": "",
            "status": "ON HOLD",
            "text": "Revised BI Analyst JD drafted (shifts toward data products, AI tooling, governance). Blocker: Budget vs. benchmark gap for the KL-based role remains unresolved.",
            "bullets": []
          },
          {
            "title": "Commissions Service-Level Reporting (QSA)",
            "label": "",
            "status": "ON TRACK",
            "text": "v1 dashboard in active use; now a standing monthly AQF forum item; access being extended. No material change this week.",
            "bullets": []
          },
          {
            "title": "End of Cycle Analytics",
            "label": "",
            "status": "ON TRACK",
            "text": "KCL end-of-intake analysis complete; Birmingham underway; transcript-based reasons analysis piloted. Blocker: Engagement data quality still affects what AMs present to clients.",
            "bullets": []
          }
        ],
        "risks": [
          "Reconciliation Process (BI) — AT RISK: Huble has exited (contract ends 14 Oct) with nothing usable delivered; BI's own interim build is now the likely permanent process, and — given the GBP 2m gap to budget — its coverage and exclusions will be closely scrutinised.",
          "Data Loading Efficiencies & Automation (BI) — OFF TRACK: the KCL transformation workflow missed its 30 Sep go-live and still depends on Simon with no revised date; RCA remains the only client live on the new workflow.",
          "HubSpot Data Quality (BI) — AT RISK: 57 audit tickets are triaged by an interim decision group until a dedicated data model owner starts; workflows can still fail silently in the meantime."
        ],
        "nextWeek": [
          "Greenlight session booked 7 Oct ahead of 16 Oct access target.",
          "Griffith interim list due 7 Oct.",
          "Decide Consulting's Tableau requirement (~50 licences + Server) against the desktop-only non-renewal scope before the Salesforce call. (Owner: Matteo / Pratik)",
          "Confirm the start date for the dedicated HubSpot data model owner. (Owner: Jose / David)",
          "Tableau scoping responses due 16 Oct.",
          "Mid-Oct Power BI training being scheduled by Sharon."
        ],
        "notes": [
          "Data Ops and Data Acquisition had no direct weekly reports this week (Martin and Felicia both off) — this update relies on corroborating project evidence only. (Owner: Martin / Felicia on return)",
          "Several BI decisions are converging on mid-to-late October: the portal greenlight (7 Oct), Griffith recon list (7 Oct), HubSpot duplicate-course cleanup (~7 Oct) and Tableau licensing responses (16 Oct)."
        ]
      },
      {
        "week": 40,
        "team": "data",
        "heading": "Employability & Skills",
        "highlights": "Employability & Skills: Subject Taxonomy v2.1 went for sign-off and the final mining run of the year starts 5 Oct, but Support Salary Data (awaiting Bledi's direction) and the Job Title Taxonomy migration (gated by the mining run) are both at risk. Note on scope: the Employability & Skills brief is the latest available but is dated a week earlier (week ending 25 Sep) than the other four reporting lines. Taxonomy mapping is running in parallel across three teams this week — Cerebrum, GSF's subjects model and Employability's Subject Taxonomy/Standardization work are all independently mapping national or local classifications onto the QS subject structure, with no shared crosswalk yet.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Support Salary Data",
            "label": "",
            "status": "AT RISK",
            "text": "Passed PDL's refreshed inferred salary field (with min/max ranges) to LMI; reviewed current LMI wage data against job titles. Blocker: Next steps for the project are pending direction.",
            "bullets": []
          },
          {
            "title": "Rankings Modelling — Alumni Impact & Career Alignment",
            "label": "",
            "status": "ON TRACK",
            "text": "Restructured to Sam's new spec; subject standardisation, seniority and skill-complexity modelling complete; full indicator modelling begins next sprint. Blocker: Still confirming the primary data source for each Alumni Impact list.",
            "bullets": []
          },
          {
            "title": "Snowflake Migration (Employability)",
            "label": "",
            "status": "ON TRACK",
            "text": "Raw/processed GCP pipeline finalised for profile datasets; same approach being extended to job postings. No material blocker this week.",
            "bullets": []
          },
          {
            "title": "Subject Taxonomy & Standardization",
            "label": "",
            "status": "ON TRACK",
            "text": "v2.1 shared for sign-off; Studyportals and UBS mappings finalised and sent for review; service moving into GitHub. Blocker: v3 still needs to close parent-child mapping gaps.",
            "bullets": []
          },
          {
            "title": "Job Title Taxonomy",
            "label": "",
            "status": "AT RISK",
            "text": "QSIDs now in hand for the migration. Blocker: Migration delayed until the current mining run concludes — no revised date yet.",
            "bullets": []
          },
          {
            "title": "Alumni Platform",
            "label": "",
            "status": "ON TRACK",
            "text": "Migrated Snowflake profile datasets handed to Charlie; analytics being restructured to serve consulting and platform needs. Blocker: Awaiting clarity on whether infrastructure/datasets are managed in-house.",
            "bullets": []
          },
          {
            "title": "Mining Run",
            "label": "",
            "status": "ON TRACK",
            "text": "Final mining run of the year begins 5 Oct, introducing agent-based feedback loops alongside the usual occupation-level run. Blocker: Job-title layer output on hold pending the Job Title Taxonomy migration.",
            "bullets": []
          },
          {
            "title": "1Mentor / Consulting / Mining Process Improvements",
            "label": "",
            "status": "CONTINUOUS WORK",
            "text": "Cyber Essentials review and IBM requirements for 1Mentor; Bath alumni matching; new LLM-based skill-extraction reference under build. No material blocker this week.",
            "bullets": []
          }
        ],
        "risks": [
          "Support Salary Data (Employability) — AT RISK: PDL's refreshed inferred salary field has been passed to LMI, but how the project evolves next is waiting on direction from Bledi.",
          "Job Title Taxonomy (Employability) — AT RISK: QSIDs are in hand, but migration to the new job title layer can't start until the current mining run concludes — no date yet."
        ],
        "nextWeek": [
          "Align with Bledi on next steps and direction for Support Salary Data. (Owner: Bledi / Employability team)",
          "Confirm the Job Title Taxonomy migration start date once the current mining run concludes. (Owner: Employability team)",
          "Final mining run of the year begins 5 Oct, introducing agent-based feedback loops alongside the usual occupation-level run.",
          "Full indicator modelling begins next sprint (Rankings Modelling — Alumni Impact & Career Alignment)."
        ],
        "notes": [
          "Section heading as printed: \"F. EMPLOYABILITY & SKILLS (week ending 25 September 2026)\" — a week earlier than the other four reporting lines.",
          "Taxonomy alignment is converging across three teams independently: Cerebrum, GSF's subjects model and Employability's Subject Taxonomy/Standardization work are all mapping national and local classifications onto the QS subject structure this week — a natural point to compare notes."
        ]
      },
      {
        "week": 40,
        "team": "data",
        "heading": "Global Student Flows",
        "highlights": "Global Student Flows passed a major milestone: university-by-subject data now covers 26 countries (2.5m students), matched to 2,200 QS-ranked universities; gap-filling methods, India/Europe data updates and a 21-source news pipeline all progressed in parallel. Taxonomy mapping is running in parallel across three teams this week — Cerebrum, GSF's subjects model and Employability's Subject Taxonomy/Standardization work are all independently mapping national or local classifications onto the QS subject structure, with no shared crosswalk yet. Both GSF and LMI are entering heavier validation phases at the same time — GSF's IPF/QA tiers and LMI's CAGR validation checks — which may be worth comparing notes on for shared QA approaches.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Subjects Model & IPF Seed",
            "label": "",
            "status": "ON TRACK",
            "text": "Major milestone: university-by-subject data collected for 26 countries (2.5m students), matched to 2,200 of 3,789 QS-ranked universities. Blocker: Relies on Diego's programme mapper; South Asia/India coverage under 20% will lean on modelling, not real data.",
            "bullets": []
          },
          {
            "title": "ORB Core Model, Data Releases & QA",
            "label": "",
            "status": "ON TRACK",
            "text": "New gap-filling methods tested; test run complete with revised global totals; India 2023–24 updated, Eurostat/Europe update started; tier 1 QA checks defined. Blocker: A bug reducing 2024 country totals for several European countries needs fixing; India 2025 remains an estimate pending official data.",
            "bullets": []
          },
          {
            "title": "RAG News Signal Pipeline",
            "label": "",
            "status": "ON TRACK",
            "text": "Country-sources pipeline rebuilt to match the international design; 21 country-level news sources now parsed alongside GDELT. Blocker: Source quality/licensing and noise from low-quality stories still need clear signal-acceptance rules.",
            "bullets": []
          }
        ],
        "risks": [
          "Relies on Diego's programme mapper; South Asia/India coverage under 20% will lean on modelling, not real data.",
          "A bug reducing 2024 country totals for several European countries needs fixing; India 2025 remains an estimate pending official data.",
          "Source quality/licensing and noise from low-quality stories still need clear signal-acceptance rules.",
          "A handful of external dependencies are now pacing several workstreams at once: KCL transformation and HubSpot fixes, Support Salary Data direction, and the programme mapper feeding the GSF subjects model and Cerebrum/Employability taxonomy work."
        ],
        "nextWeek": [
          "Eurostat/Europe update started — continuing alongside the India 2023–24 update.",
          "Both GSF and LMI are entering heavier validation phases at the same time — GSF's IPF/QA tiers and LMI's CAGR validation checks — which may be worth comparing notes on for shared QA approaches."
        ],
        "notes": [
          "Taxonomy alignment is converging across three teams independently: Cerebrum, GSF's subjects model and Employability's Subject Taxonomy/Standardization work are all mapping national and local classifications onto the QS subject structure this week — a natural point to compare notes."
        ]
      },
      {
        "week": 40,
        "team": "data",
        "heading": "LMI",
        "highlights": "LMI: the AI automation/augmentation framework's baseline scoring is complete, the new CAGR forecasting methodology has been rolled out across 24 country workbooks for review, and 2025 wage estimates are live for 22 of 24 countries. Both GSF and LMI are entering heavier validation phases at the same time — GSF's IPF/QA tiers and LMI's CAGR validation checks — which may be worth comparing notes on for shared QA approaches.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "AI Automation & Augmentation Framework",
            "label": "",
            "status": "ON TRACK",
            "text": "Layer 1 baseline scores complete; Layer 2 v1 implemented but found six structural problems in testing; v2 occupation-specific redesign planned. Blocker: v2 needs real AI-usage data to calibrate adjustments and test against independent adoption evidence.",
            "bullets": []
          },
          {
            "title": "Growth Rate Modelling (4 forecasting projects)",
            "label": "",
            "status": "ON TRACK",
            "text": "24 country workbooks rebuilt on the new CAGR methodology (review under way); ECA/SSA regional bounds built and being tested. Blocker: CAGR validation checks and penetration scoring are still early-stage, with several cross-project dependencies.",
            "bullets": []
          },
          {
            "title": "Wages Estimation",
            "label": "",
            "status": "ON TRACK",
            "text": "2025 median wage estimates complete for 22 of 24 countries; occupational tag rebuild under way. Blocker: US 2025 revalidation awaiting latest BLS data; Canada and Spain estimates still in progress.",
            "bullets": []
          }
        ],
        "risks": [
          "v2 needs real AI-usage data to calibrate adjustments and test against independent adoption evidence.",
          "CAGR validation checks and penetration scoring are still early-stage, with several cross-project dependencies.",
          "US 2025 revalidation awaiting latest BLS data; Canada and Spain estimates still in progress."
        ],
        "nextWeek": [
          "v2 occupation-specific redesign planned (AI Automation & Augmentation Framework).",
          "24 country workbooks rebuilt on the new CAGR methodology — review under way.",
          "Occupational tag rebuild under way (Wages Estimation).",
          "Both GSF and LMI are entering heavier validation phases at the same time — GSF's IPF/QA tiers and LMI's CAGR validation checks — which may be worth comparing notes on for shared QA approaches."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "syd1",
        "heading": "SYD1 · Charlie Liu",
        "highlights": "QS Supergraph welcomes its newest member: the institution registry. Cerebrum institutions — geography, subjects and occupations — now answer inside the data graph on both staging and production. With permission gates, every QS app can ask one place for institutions, rankings and reputation together instead of stitching three sources, and the registry team’s own changes flow through the same reviewed path as the pod’s. Around it, the week added zero-downtime data releases, the Rankings Template’s new design, and switches that take effect at sign-in.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "QS Supergraph",
            "label": "EP-32 · MyQS Cerebrum",
            "status": "On track",
            "text": "The institution registry is now part of the QS data graph on both staging and production, so every app can ask one place for institutions, rankings and reputation together; the embargo list is readable by QS administrators only.",
            "bullets": []
          },
          {
            "title": "QAS Data Layer",
            "label": "EP-18 · QAS Rankings App; EP-25 · QAS Alumni Insights",
            "status": "On track",
            "text": "Publishing new data to production now interrupts users for seconds rather than ten minutes; rankings carry a category that drives who may see them; Alumni Insight’s institution ids are aligned with the registry; the old loading path is retired so there is one way in.",
            "bullets": []
          },
          {
            "title": "Release flags",
            "label": "EP-95 · MYQS Staging",
            "status": "On track",
            "text": "The first two production switches are live (CX embargo dates and bulk import), a revert was rehearsed in staging first, and CX now learns its switches at sign-in so a flip needs no release.",
            "bullets": []
          },
          {
            "title": "Release pipeline",
            "label": "EP-95 · MYQS Staging",
            "status": "On track",
            "text": "Every QS front end now runs the same release checks and records each production release; every connection to QS services requires modern encryption; the production release and rollback procedure is written down.",
            "bullets": []
          },
          {
            "title": "Design System and Rankings Template",
            "label": "EP-26 · MyQS Design System",
            "status": "On track",
            "text": "The Rankings Template’s new design is live — focus view, highlights overview, index by indicator, indicator view and the institution panel; the rankings board shows loading states card by card and its tables page and sort from source; the heatmap’s columns can be resized; MyQS opens on the account band in production.",
            "bullets": []
          },
          {
            "title": "HolonIQ / HolonOS",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Customer accounts see Regions benchmark columns in production; slow queries are capped in production; the statistics service no longer crashes on empty metric lists and recovers from cache errors.",
            "bullets": []
          },
          {
            "title": "CX",
            "label": "EP-87 · MyQS CX – Ph 2",
            "status": "On track",
            "text": "CX admins can search access events by who did them, choose Ranking Master in the account type picker (locked where it cannot be set), and the app reads its feature switches at sign-in.",
            "bullets": []
          },
          {
            "title": "QS Auth",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Staging sign-up is open again, but only to people already invited to an account — the blanket staff-email rule is withdrawn.",
            "bullets": []
          }
        ],
        "risks": [
          "None reported."
        ],
        "nextWeek": [
          "The Rankings Template gains its loading states, masked ranks and fewer reads.",
          "The Regions benchmark data record reaches HolonIQ production, and Alumni Insight’s re-keyed rows are recorded for staging."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "blr2",
        "heading": "BLR2 · Simon Hall",
        "highlights": "Partner Discovery: opportunity visibility now follows one consistent access rule across all roles, giving contributors appropriate visibility while keeping unpublished content protected.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "MyQS / Rankings",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Fixed an issue where an indicator with no available score was incorrectly highlighted as an institution’s “best indicator”; only genuinely ranked/scored indicators now surface. Applied the same correction across both the Rankings overview and the Partner Discovery partner-ranking view. Updated Asia region ranking insight figures (recorded citations, nominations, and related metrics) to reflect correct values.",
            "bullets": []
          },
          {
            "title": "Partner Discovery",
            "label": "EP-94 · Partner Discovery – Phase 1",
            "status": "On track",
            "text": "Unified opportunity visibility across roles: all users including admins see every published opportunity at their institution, while drafts/unpublished stay visible only to creators or linked users. “Mine”, “Linked” and “All” ownership filters now apply consistently across roles. Added “all” toggle on institution profile for contributors. Consolidated incoming/outgoing interest views into a single section. Refined plan usage view and institution banner. Tidied up navigation so menu items appear for the right users.",
            "bullets": []
          },
          {
            "title": "QA",
            "label": "EP-94 · Partner Discovery – Phase 1",
            "status": "On track",
            "text": "Completed Partner Discovery improvements testing (contributor permissions, filters, opportunity visibility, UI/navigation, image/placeholder handling, portfolio visibility, view-count logic, admin-only analytics, Plan & Usage), MyQS regression testing, and Live sanity testing.",
            "bullets": []
          }
        ],
        "risks": [
          "No major risks or blockers."
        ],
        "nextWeek": [
          "Partner Discovery: team ramping up on the QAS stack.",
          "QA: begin testing newly assigned MyQS Stars stories once development is complete, execute test cases, and retest resolved defects."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "blr1",
        "heading": "BLR1 · Simon Hall",
        "highlights": "Initiated work on the new sprint’s key HUB2 investigations and QAS learning objectives, establishing a clear understanding of the issues, dependencies, and technical approach required for delivery. This helps ensure timely resolution of support requests while building deeper capability within the QAS platform.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "HUB2 Investigations",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Initiated analysis of ongoing data and audit-related investigations, reviewing historical records, profile data, and available system information to establish scope and identify potential resolution paths.",
            "bullets": []
          },
          {
            "title": "HUB2 Programme Audit",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Began review of programme update activity and audit requirements to validate available change history and support investigation findings.",
            "bullets": []
          },
          {
            "title": "QAS Learning Initiative",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Started building a demo rankings application within the QAS shell to develop end-to-end understanding of the platform, data flow, and application architecture.",
            "bullets": []
          }
        ],
        "risks": [
          "No major blockers or decisions required this week.",
          "Limited historical records. Limited availability of historical change logs or legacy records may constrain the depth of analysis for ongoing investigations."
        ],
        "nextWeek": [
          "Continue and progress HUB2 investigations, documenting findings and recommended next steps.",
          "Continue development of the QAS rankings demo application to strengthen understanding of the QAS stack and rankings data flow."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": [
          "ecu1",
          "ecu2"
        ],
        "heading": "ECU1 and ECU2 · Jonnathan Peña and Paula Jimenez",
        "highlights": "Last week, most of the team’s efforts were focused on PLAR in order to meet the delivery commitment for 15 October.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Mixpanel event tracking",
            "label": "Non-roadmap",
            "status": "",
            "text": "",
            "bullets": []
          },
          {
            "title": "Bug fixes",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "",
            "bullets": [
              "The “all” selector dropdown not working correctly.",
              "Advisors being unable to filter learners by institution.",
              "The View More button for courses not showing new suggestions.",
              "Job Posting Recommendations missing an empty state.",
              "Non-custom error messages for academic programs.",
              "Broken links in corporate emails."
            ]
          },
          {
            "title": "PLAR deliverables completed",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "",
            "bullets": [
              "Configurable login page text and contact info.",
              "Add experience source tag.",
              "Hide skill suggestions; set resume upload as the default empty state.",
              "Update experience type list.",
              "Update Salesforce API integration.",
              "Add optional experience description field.",
              "Route to confirmation page after the wizard; end journey.",
              "Configurable confirmation page.",
              "Hide career goal selection step.",
              "Configurable faculty filter.",
              "Automatic career goal assignment."
            ]
          }
        ],
        "risks": [
          "Hackathon timing managed. Last week, the hackathon was considered a risk due to the tight timeline. However, the team was able to manage it successfully thanks to the implementation of AI-driven methodologies, which helped complete all PLAR tasks intended for production."
        ],
        "nextWeek": [
          "Go live with PLAR — the only remaining step is to certify the environment today and proceed with the release on the evening of 14 October, as usual.",
          "Focus on the hackathon during the designated days."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "movein",
        "heading": "MoveIN · Mahesh Hegde",
        "highlights": "Support and Product teams can now compare all client institutions’ AI usage at a glance and spot top and bottom performers early, so they can support accounts proactively and drive broader adoption.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Business Continuity Mock Drill",
            "label": "Non-roadmap",
            "status": "",
            "text": "business continuity test run and mock drill completed, confirming QS can recover services if disruption occurs.",
            "bullets": []
          },
          {
            "title": "Automated BCP Deployment",
            "label": "Non-roadmap",
            "status": "",
            "text": "automated deployment prepared for business continuity, so services can be deployed quickly if ever needed.",
            "bullets": []
          },
          {
            "title": "AI Usage Dashboard",
            "label": "EP-89 · MoveIN Smart Match / AI Email",
            "status": "",
            "text": "dashboard delivered, showing per-client usage, result quality and cost in $/£, with export for client and executive reporting.",
            "bullets": []
          },
          {
            "title": "AI Beta Labels",
            "label": "EP-89 · MoveIN Smart Match / AI Email",
            "status": "On track",
            "text": "“Beta” labels on the AI features set clearer expectations and should reduce support questions.",
            "bullets": []
          },
          {
            "title": "AI Email Template Walkthrough",
            "label": "EP-89 · MoveIN Smart Match / AI Email",
            "status": "On track",
            "text": "a guided walkthrough for first-time users should speed adoption and on-brand results.",
            "bullets": []
          },
          {
            "title": "Email Branding Controls",
            "label": "EP-89 · MoveIN Smart Match / AI Email",
            "status": "On track",
            "text": "users can adjust email colours, spacing and image cropping themselves, so branding matches faster without technical help.",
            "bullets": []
          },
          {
            "title": "Latest Brand Settings in AI Emails",
            "label": "EP-89 · MoveIN Smart Match / AI Email",
            "status": "On track",
            "text": "AI emails now pick up each client’s latest logo, images and brand colours, removing manual rework.",
            "bullets": []
          },
          {
            "title": "SharePoint Merged Documents",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "merged documents open immediately in SharePoint, saving staff a refresh step.",
            "bullets": []
          },
          {
            "title": "Single-Portal Navigation",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "clients with a single portal now get the same full navigation as multi-portal clients.",
            "bullets": []
          },
          {
            "title": "Import Program Field",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "admins can again set a fixed “Program” value in data imports, avoiding manual corrections.",
            "bullets": []
          },
          {
            "title": "Higher AI Allowance",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "monthly AI allowance for live clients rises from 100K to 500K tokens, so teams can keep using the AI features through the month without hitting the limit.",
            "bullets": []
          }
        ],
        "risks": [
          "None reported."
        ],
        "nextWeek": [
          "Smart Match Assistant action improvements.",
          "Full end-to-end business continuity run on Monday to confirm recovery readiness.",
          "Elasticsearch version upgrade on demo.",
          "Release 1.52.1 planned.",
          "Saved Searches improvements."
        ],
        "notes": [
          "The last eight delivery items (AI Beta Labels through Higher AI Allowance) were printed under a shared group heading, “UAT COMPLETED · DEPLOYMENT PLANNED NEXT WEEK — ON TRACK”."
        ]
      },
      {
        "week": 41,
        "team": "moveon",
        "heading": "MoveON · Advanced Publisher team",
        "highlights": "The Advanced Publisher-side security work on the Advanced Publisher–MoveON integration is finished. API credentials now travel more securely, and every call is logged with a traceable request ID. This matters to QS because it closes data-exposure gaps and meets QS’s security-review commitments.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Advanced Publisher–MoveON API security",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Development is finished and in code review, then it goes to QA with MoveON.",
            "bullets": []
          },
          {
            "title": "Publisher performance for two clients",
            "label": "Non-roadmap",
            "status": "Behind",
            "text": "Pages take about 62–66s to load on Live, compared with about 4–9s on staging with the same data. That points to the Live environment, but the root cause isn’t confirmed yet.",
            "bullets": []
          },
          {
            "title": "Reporting charts improvements",
            "label": "Non-roadmap",
            "status": "In analysis",
            "text": "Started. It’s in analysis.",
            "bullets": []
          },
          {
            "title": "Multi-server database setup",
            "label": "Non-roadmap",
            "status": "In analysis",
            "text": "In analysis. It depends on infrastructure work.",
            "bullets": []
          }
        ],
        "risks": [
          "End-to-end testing dependency. The security changes can’t be tested end to end until the MoveON-side changes are done.",
          "Top risk to escalate: publisher performance. Both clients have chased, and one says it’s very urgent. Both have agreed to let QS use their real data for the investigation. Mitigation: addition of custom logs to trace the issue, as the Infra team confirmed that there are no slow query logs.",
          "Decisions: none needed right now."
        ],
        "nextWeek": [
          "Advanced Publisher–MoveON security work moves to QA.",
          "Root cause and a fix plan for publisher performance.",
          "Reporting charts fix moves into development."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "moveon",
        "heading": "MoveON · Seat Creation team",
        "highlights": "The MoveON-side API security change is ready for QA. Sensitive data now travels securely and credentials are no longer written to logs. This matters to QS because it closes a data-exposure gap and meets QS’s security-review commitments.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Advanced seat assignment (MVP)",
            "label": "Non-roadmap",
            "status": "In progress",
            "text": "It was added partway through the sprint. One part is in development and the other is still in analysis, and no code has been committed yet.",
            "bullets": []
          },
          {
            "title": "API security hardening",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Development and code review are done, and it’s waiting for QA to start.",
            "bullets": []
          },
          {
            "title": "Cloudflare false-positive fix",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Development is done and it’s waiting for code review.",
            "bullets": []
          }
        ],
        "risks": [
          "Decisions: none needed right now."
        ],
        "nextWeek": [
          "The API security change goes into QA.",
          "The Cloudflare fix completes code review.",
          "Development finishes on the first part of seat assignment, and the second part starts."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "moveon",
        "heading": "MoveON · Nominations team",
        "highlights": "The feature that creates Person and Stay records in bulk from Learning Agreements is finished and in code review. This week the developer confirmed it runs on background queues, so bulk creation won’t affect performance. That was the main open question on it. For QS, this removes a lot of manual data entry for mobility staff and keeps records consistent.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Bulk creation of Person and Stay records from Learning Agreements",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Development is finished. This week’s code improvements came out of review, and it goes to QA once review passes.",
            "bullets": []
          },
          {
            "title": "Fixes to Learning Agreements and Nominations",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Development finished this week, including the rules for editing or deleting a linked online user. It’s now in code review.",
            "bullets": []
          },
          {
            "title": "Disabling EWP APIs for one client",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "This was delivered in an earlier week.",
            "bullets": []
          }
        ],
        "risks": [
          "Blockers: both open items are waiting on code review before QA can start.",
          "Top risk to escalate: both items carry over past the sprint end because code review and QA are the bottleneck. Mitigation: make code review a priority this week and book QA time now. The Engineering lead and QA lead should arrange this.",
          "Decisions: none needed right now."
        ],
        "nextWeek": [
          "Both items finish code review and move into QA.",
          "QA testing starts on both items."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "moveon",
        "heading": "MoveON · Workflow team",
        "highlights": "All development for deleting workflow tasks is finished and has passed code review. That covers deleting Manual and MoveON tasks, showing a “task not available” message where a deleted task used to appear, and notifying users when a workflow is deleted. All of it is now ready for QA. For QS, this gives admins full control over cleaning up their workflows without breaking the views their users see.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Workflow task deletion and notifications",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "All 5 items are dev complete and reviewed. QA has started picking them up.",
            "bullets": []
          },
          {
            "title": "Advanced Filter fix for agreements (bug on Live)",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "It passed QA on two builds, including a follow-up fix for special-character handling, and is ready for integration testing.",
            "bullets": []
          },
          {
            "title": "Advanced Filter “invert condition” option",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Changes from code review are done, and it’s ready for QA.",
            "bullets": []
          },
          {
            "title": "Deleting the first field in repeatable task fields",
            "label": "Non-roadmap",
            "status": "Ahead",
            "text": "It was picked up, built and finished this week, and is now in code review for the next release.",
            "bullets": []
          }
        ],
        "risks": [
          "Blockers: none. Translations for new on-screen messages are still waiting on the Product owner.",
          "Decisions: none needed right now."
        ],
        "nextWeek": [
          "QA on the workflow deletion and notification features.",
          "The Advanced Filter fix goes through integration testing and ships in the 4.2.002 hotfix.",
          "The repeatable-field item finishes code review and moves to QA."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "moveon",
        "heading": "MoveON · Tech updates (Live stability)",
        "highlights": "The Live errors that came up after the MySQL 8.4 upgrade are fixed and passed QA retest on the latest build. These were the Merge Duplicate Persons failure and activity imports failing when a subject is too long. For QS, this keeps core data-management features working for all clients after the database upgrade.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Fixes for errors after the MySQL 8.4 upgrade",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "The fixes were merged into the main branches this week, QA passed again, and they’re now ready for integration testing.",
            "bullets": []
          },
          {
            "title": "Document generation blocked for one Canadian client",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "The cause was a file-permission problem from the recent infrastructure storage migration, not the code. It’s fixed and release-ready.",
            "bullets": []
          }
        ],
        "risks": [
          "Blockers: none this week.",
          "Decision needed: log file clean-up owner. Infrastructure has asked Development to clean up log files that the application writes directly into the codebase, because those files have no log rotation. No owner has been agreed yet. The Engineering lead needs to assign one.",
          "Top risk: scope added after QA. Work on the database merge was added to the Live-fixes item this week (2 → 8 story points), after it had already passed QA. Mitigation: confirm whether that extra work needs its own QA pass before integration testing. The Product owner and QA lead should agree this."
        ],
        "nextWeek": [
          "Live-error fixes go through integration testing and towards release.",
          "The document-generation fix ships with the next release (4.2.003).",
          "Database-merge work continues."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "moveon",
        "heading": "MoveON · MLB (Live bugs) team",
        "highlights": "A high-priority bug that stopped users editing stay start and end dates is fixed. It passed QA on two builds, including bulk changes, and is ready for release. For QS, this unblocks a core mobility workflow that clients escalated.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Hotfix 4.2.002",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "All merge conflicts in the hotfix branches are resolved, and the build is ready for integration testing.",
            "bullets": []
          },
          {
            "title": "Stay dates can’t be edited",
            "label": "Non-roadmap",
            "status": "Ready for release",
            "text": "Done. It’s ready for release.",
            "bullets": []
          },
          {
            "title": "External institution showing incorrectly in grids",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "The fix is merged, passed QA twice and is ready for integration testing.",
            "bullets": []
          },
          {
            "title": "Duplicate stays in grids and exports",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Development is done. This week the fix added a database safeguard so duplicates can’t be created again, plus a cleanup script for existing duplicates.",
            "bullets": []
          },
          {
            "title": "Relations missing in forms",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "The fix for how relations are linked to institutions was improved, a safety rollback was added, and it’s now in code review.",
            "bullets": []
          },
          {
            "title": "Portal consent message and URL not showing",
            "label": "Non-roadmap",
            "status": "Awaiting QA",
            "text": "Waiting for QA.",
            "bullets": []
          }
        ],
        "risks": [
          "Blockers: none this week. Repeated merge conflicts slowed the hotfix build but are now resolved.",
          "Decision needed: duplicate-cleanup sign-off. Who approves running the duplicate-cleanup script on affected client instances, and when. It deletes data on Live, so a Product owner/Support sign-off is needed before the next release.",
          "Top risk: data cleanup on Live. Running the duplicate-stays script deletes records in client databases. Mitigation: do a dry run first on each affected instance, review the report, then run it in execute mode. The script backs up deleted rows. Support should confirm client consent, and DevOps should run it."
        ],
        "nextWeek": [],
        "notes": []
      },
      {
        "week": 41,
        "team": "events",
        "heading": "Digital and Events · Catarina Cunha",
        "highlights": "The Agenda builder management system in Outreach has been released. Operations can now use the system to calculate available slots for clients, invite them directly and manage available agenda slots using Outreach, replacing the Excel sheet they currently use.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Drupal clean-up",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "Released",
            "text": "This has been released.",
            "bullets": []
          },
          {
            "title": "Convert CMT module from React to Drupal",
            "label": "Non-roadmap",
            "status": "Released",
            "text": "This has been released.",
            "bullets": []
          },
          {
            "title": "TU Homepage Performance",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "Released",
            "text": "This has been released.",
            "bullets": []
          },
          {
            "title": "Agenda builder",
            "label": "Non-roadmap",
            "status": "Released",
            "text": "This has been released.",
            "bullets": []
          },
          {
            "title": "Drupal 11",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "Postponed",
            "text": "A decision has been made to postpone the upgrade; there were minor UI issues that were reported and needed fixing. When the team reached the cut-off date, it felt this would be risky.",
            "bullets": []
          },
          {
            "title": "Finance page",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Backend work is underway as planned.",
            "bullets": []
          },
          {
            "title": "Emails redesign",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Tickets in sprint are progressing as planned.",
            "bullets": []
          },
          {
            "title": "Marcomms Dashboard",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "The main dashboard is completed; other sections will be picked up in the upcoming sprint.",
            "bullets": []
          }
        ],
        "risks": [
          "Drupal sprint release. Because of the new rankings release in the upcoming week and the hackathon, it was decided to postpone this to 19 October.",
          "Redesign of QS Apply page. Waiting for clear requirements and form changes — still pending."
        ],
        "nextWeek": [
          "Finance page: frontend work will start in the upcoming sprint.",
          "ITR and Arab Rankings: release happening on 14 October."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "qsapply",
        "heading": "QS Apply (Appian) · Sreeram Sreekumar",
        "highlights": "The team continues to focus on Appian production support and issue resolution, while progressing with the Appian Migration documentation and current-state process analysis.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Deactivated EM/PAM Visibility",
            "label": "Non-roadmap",
            "status": "",
            "text": "updated the Application and Applicant Dashboards to display deactivated EM/PAM users. The changes have been deployed to the TEST environment.",
            "bullets": []
          },
          {
            "title": "Applicant Created Date Filter",
            "label": "Non-roadmap",
            "status": "",
            "text": "fixed the Applicant Created Date filter issue. The fix has been deployed to the TEST environment.",
            "bullets": []
          },
          {
            "title": "HubSpot API Failure",
            "label": "Non-roadmap",
            "status": "",
            "text": "investigated an API failure caused by an invalid HubSpot Agent ID.",
            "bullets": []
          },
          {
            "title": "Current-State Process Mapping",
            "label": "EP-27 · Appian to HubSpot (D&E); EP-54 · Appian to HubSpot (US)",
            "status": "",
            "text": "created flow diagrams to document the existing Appian processes and functionality, supporting the migration analysis.",
            "bullets": []
          },
          {
            "title": "Pain Point Consolidation",
            "label": "EP-27 · Appian to HubSpot (D&E); EP-54 · Appian to HubSpot (US)",
            "status": "",
            "text": "consolidated the pain points captured during stakeholder workshops into a single document to facilitate review, prioritisation, and future-state planning.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Review and refine the current-state process flow diagrams and migration documentation.",
          "Continue consolidating and validating the findings from the discovery workshops.",
          "Coordinate and schedule technical discussions to assess the existing system functionality, technical dependencies, and migration considerations.",
          "Testing and deployment of the production support items to Live."
        ],
        "notes": [
          "Delivery was printed under two headings rather than one DELIVERY heading: “APPIAN SUPPORT” (first three items) and “APPIAN MIGRATION – DISCOVERY” (last two items)."
        ]
      },
      {
        "week": 41,
        "team": "ubsdev",
        "heading": "UBS Development · Mohd Azhar Mohd Razman",
        "highlights": "The Appian dev team has commenced work on developing integration replacements for enquiry forms within HubSpot. Once the replacements are complete, this will allow QS to decommission its legacy APIs, reduce AWS spend, and take a step closer to decommissioning the legacy CRMs.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Enquiry form (API) replacements",
            "label": "EP-54 · Appian to HubSpot (US)",
            "status": "On track",
            "text": "",
            "bullets": [
              "Identified and fixed the error when promoting Contact Matching from production to sandbox.",
              "Keele and RCA have completed testing and are undergoing changes based on QA.",
              "Griffith International and ACU have completed changes for auto ticket creation and the new tag contact structure. They are now undergoing changes for data reference error notification."
            ]
          },
          {
            "title": "ESI (API) replacements",
            "label": "EP-54 · Appian to HubSpot (US)",
            "status": "On track",
            "text": "Stirling development work has been completed and tested. It is now undergoing changes for auto ticket creation and the new tag contact structure.",
            "bullets": []
          },
          {
            "title": "Informatica replacement (S3 Flat File)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "",
            "bullets": [
              "Griffith International’s replacement is awaiting deployment, pending the API replacement.",
              "Edith Cowan University’s (ECU) replacement has been developed and is waiting for an update from the Client Delivery Manager (CDM).",
              "Brighton’s replacement has completed testing and is undergoing changes based on QA feedback."
            ]
          },
          {
            "title": "Informatica replacement (Keystone)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "",
            "bullets": [
              "RCA has been signed off. Deployment is pending completion of the API replacement.",
              "ECU has been fixed in the sandbox environment following testing and is waiting for an update from the CDM."
            ]
          },
          {
            "title": "Informatica replacement (York Integration)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "Continued working on the Informatica York Integration to pull data from Dynamics, following new data mappings agreed in discussion with Mohit and Sean.",
            "bullets": []
          }
        ],
        "risks": [
          "UoL licensing. One institution’s test environment (UoL) is missing required licensing to proceed with development. Simon Pennington is arranging access.",
          "HubSpot x HubSpot data model. Clare is awaiting the Data Model from Daniel before development on the HubSpot x HubSpot integration can begin.",
          "LSBU on hold. Informatica (S3 Flat File) replacement: LSBU development is on hold while awaiting the tender outcome.",
          "Stirling UTM fields. Stirling S3 Replacement development work is blocked pending a decision on the UTM fields."
        ],
        "nextWeek": [
          "Complete development and start testing for Contact Matching, Tag Contact association and auto ticket creation for all institutions, so deployment to production can proceed for the Enquiry and ESI replacements.",
          "Continue development of the Enquiry and ESI replacement for Stirling, following discussion regarding UTM fields.",
          "Continue testing and validation of the Informatica replacement for Brighton and ECU."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "cx",
        "heading": "CX Systems · Fahad Noor",
        "highlights": "Progressed number porting from Twilio to Aircall across the UK, US, AU and NZ, while continuing SIP testing and follow-ups on China and India routes. Resolved the QS Events Sakari Helpdesk authentication issue and WhatsApp template issue, onboarded new Aircall users, and coordinated with Niswey on workflow and subscription challenges. Continued working on Sakari and Vira callback automations, liaised with Meta Support regarding the Australian WhatsApp onboarding issue, and coordinated with managers on China IVRs and chatbot handovers.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Number porting",
            "label": "Non-roadmap",
            "status": "",
            "text": "progressed porting of UK, US, AU and NZ numbers from Twilio to Aircall.",
            "bullets": []
          },
          {
            "title": "Sakari",
            "label": "Non-roadmap",
            "status": "",
            "text": "followed up on outstanding issues and requirements.",
            "bullets": []
          },
          {
            "title": "Niswey",
            "label": "Non-roadmap",
            "status": "",
            "text": "discussed the call-based workflow issue and QS Events subscription.",
            "bullets": []
          },
          {
            "title": "WhatsApp",
            "label": "Non-roadmap",
            "status": "",
            "text": "fixed the WhatsApp template issue.",
            "bullets": []
          },
          {
            "title": "Meta",
            "label": "Non-roadmap",
            "status": "",
            "text": "liaised with Meta Support regarding the Australian number issue for WhatsApp onboarding.",
            "bullets": []
          },
          {
            "title": "China IVRs",
            "label": "Non-roadmap",
            "status": "",
            "text": "coordinated with managers on China IVR requirements.",
            "bullets": []
          },
          {
            "title": "SIP",
            "label": "Non-roadmap",
            "status": "",
            "text": "set up a test number and conducted SIP tests, with further follow-ups on China and India SIP implementation.",
            "bullets": []
          },
          {
            "title": "QS Events",
            "label": "Non-roadmap",
            "status": "",
            "text": "resolved the Sakari Helpdesk authentication issue.",
            "bullets": []
          },
          {
            "title": "Aircall",
            "label": "Non-roadmap",
            "status": "",
            "text": "onboarded new users.",
            "bullets": []
          },
          {
            "title": "Callbacks",
            "label": "Non-roadmap",
            "status": "",
            "text": "continued working on Sakari and Vira automations for callbacks.",
            "bullets": []
          },
          {
            "title": "Chatbots",
            "label": "Non-roadmap",
            "status": "",
            "text": "completed chatbot handovers.",
            "bullets": []
          }
        ],
        "risks": [
          "AI Chatbots. Implementation is delayed, impacting progress on planned chatbot activities."
        ],
        "nextWeek": [
          "Meeting: call with Benita.",
          "Niswey: continue addressing the call-based workflow issue and QS Events subscription.",
          "Sakari: follow up on outstanding issues and requirements.",
          "Reporting: attend a call with Niswey to discuss reporting.",
          "Meta: continue liaising with Meta Support on the Australian number issue for WhatsApp onboarding.",
          "China IVRs: continue discussions with managers on China IVR requirements.",
          "SIP: continue SIP testing and follow-ups."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "data",
        "heading": "Data & Analytics · reporting period 3–9 October 2026",
        "highlights": "Delivery momentum is positive and Cerebrum has moved decisively from platform construction into broad data delivery and business demonstration. The main portfolio risk remains upstream quality and ownership in University Services, with adoption and consumption now becoming the next strategic test for Cerebrum.",
        "highlightBullets": [
          "Cerebrum had a major delivery week: Courses went live, four new governed datasets were released, Rankings results began flowing region by region, and twenty years of institution measurements were restored for trend analysis.",
          "The platform is now visible to non-technical stakeholders through an internal showcase, shifting the immediate challenge from proving that connected data can be built to validating it with the business and defining dependable consumption routes.",
          "Aurora and UBS data quality remain the principal operational risk. Unparseable intake records and University of London course/intake defects are directly affecting ENROL reliability and have required London inference to be disabled.",
          "Data-led Engagements remains viable through a revised University of London pilot. The first experiment will compare morning and afternoon calling rather than depend on unreliable model-based prioritisation.",
          "Rankings and DataOps delivery remains broadly healthy. The main emerging concern is Alumni Impact, where the first iteration may require reduced scope or revised timing.",
          "Employability & Skills: the Snowflake migration of profile and job posting data, the first version of profile-dataset subject standardisation, and the Skill Enhancement Project are complete.",
          "Global Student Flows: Prism (the subjects model) was rebuilt this week using the new university-by-subject data, and accuracy improved sharply against the previous version. On ORB the gap-filling method was switched to ratios, new forecasts were released for Lithuania, Latvia and Estonia, and the Tier 4 QA checks were built."
        ],
        "delivery": [
          {
            "title": "Cerebrum",
            "label": "EP-32 · MyQS Cerebrum",
            "status": "On track",
            "text": "D&A Platform team",
            "bullets": [
              "Progress: Courses shipped, completing delivery from the original four producers. Programmes, courses, intakes and fees are now published, with multilingual text preservation, duplicate programme handling, stable matching and human review for genuinely ambiguous records. Programme-to-subject mappings were published with taxonomy identifiers and version information. Awards, Skills, Student Flows and Alumni were released as governed datasets, while Rankings delivery progressed region by region. Institution records were enriched and more than twenty years of historical measurements were restored. A single internal showcase now presents the connected data in a form the wider business can inspect.",
              "Risks or dependencies: The clearest platform gap is that rows omitted from a later release cannot yet be retired. Course publishing has also generated genuine stewardship queues, particularly for collapsed or ambiguous programmes. Business consumption is not yet fully settled, and large, sequenced releases remain constrained by platform pickup cadence.",
              "Dependencies outside the team: Platform and MyQS teams; data stewards; taxonomy and Rankings owners; product teams that will consume the released data.",
              "Next steps: Work the programme review queues; agree and implement a row-retirement approach; finish moving remaining identity management to the registry; deepen the awards and qualification model; and turn showcase feedback into prioritised business-facing improvements."
            ]
          },
          {
            "title": "Aurora, Synergy2 and UBS data quality",
            "label": "EP-82 · Aurora Data Integrity",
            "status": "At risk",
            "text": "D&A team",
            "bullets": [
              "Progress: The team identified 313,000 COI rows across six institutions whose intake text cannot currently be parsed to dates. Audit rules were extended for cleaned-up records, portal-property inconsistencies and potential test contacts. Marketing email events, deferred and Student Declined journey history, and further Synergy2 fixes were released. The cross-functional task-force model is reported to be improving coordination.",
              "Risks or dependencies: University of London enrolments are arriving without sufficient course or intake information, and related source defects are already affecting downstream modelling. The wider process remains dependent on upstream workflow correction rather than downstream repair alone.",
              "Dependencies outside the team: University Services product and workflow owners; HubSpot and portal owners; BI; account-management stakeholders; teams responsible for the affected intake and status workflows.",
              "Next steps: Resolve intake parsing for the six affected institutions; progress University of London course/intake remediation; complete the deal-stage and status-history cleanup; and continue expanding preventative audit coverage."
            ]
          },
          {
            "title": "ENROL and propensity modelling",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "D&A Modelling team",
            "bullets": [
              "Progress: The course-of-interest modelling framework was merged into the main ENROL codebase, trained against production data and deployed across active clients. This establishes the technical route for course-level modelling despite the underlying source-data constraints.",
              "Risks or dependencies: University of London reconciliation is producing records without adequate course and intake information, making London outputs unreliable. London inference has therefore been disabled, and there is concern that similar defects may affect other clients at smaller scale.",
              "Dependencies outside the team: UBS source-data and reconciliation processes; HubSpot workflow owners; client and account teams responsible for correcting missing course and intake information.",
              "Next steps: Resolve source defects before re-enabling London, assess whether the same issue affects other clients, and complete the ENROL roadmap through year-end."
            ]
          },
          {
            "title": "Data-led Engagements",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "D&A team",
            "bullets": [
              "Progress: The University of London pilot was reframed to avoid unreliable model-based prioritisation. The replacement experiment will compare morning and afternoon calling using the LLB offer cohort. The campaign segment has been prepared, and Data Science will create two randomised groups for execution.",
              "Risks or dependencies: The experiment still depends on consistent operational execution and reliable capture of call outcomes and transcript-derived measures. The revised design tests treatment effectiveness rather than model uplift.",
              "Dependencies outside the team: University Services campaign owners; HubSpot administrators; calling operations; BI and reporting teams.",
              "Next steps: Create the randomised groups; configure the HubSpot segments; confirm the measurement fields and evaluation approach; and complete campaign setup."
            ]
          },
          {
            "title": "Rankings and DataOps",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "D&A Rankings and DataOps",
            "bullets": [
              "Progress: Sustainability fact files are being prepared with supporting PR analysis. The Asian Rankings fact file was distributed and follow-up queries are being handled, while Europe and Subject Rankings analysis continues. Graduate employment-rate modelling is progressing. Regional and Sustainability datasets were refreshed for HolonIQ/MyQS QA. OMBA and EMBA dbt migrations are complete, work has moved to Best Student Cities, and a Country Fact Files prototype is in development.",
              "Risks or dependencies: Alumni Impact analysis is proving difficult and may need to be reduced for the first iteration. Some Employability and Skills metrics may require further review and potentially a change in scope or timing.",
              "Dependencies outside the team: IST; Frameworks; PR and Communications; Product; Employability and Skills stakeholders; MyQS/HolonIQ frontend owners.",
              "Next steps: Continue Europe and Subject analysis; refine graduate employment-rate modelling; settle the first-iteration Alumni Impact scope; progress Best Student Cities migration; and prepare the Country Fact Files prototype for the Asian Rankings release in early November."
            ]
          },
          {
            "title": "OnePerson and student data transformation",
            "label": "EP-32 · MyQS Cerebrum",
            "status": "On track",
            "text": "D&A team",
            "bullets": [
              "Progress: The first roadmap was completed, covering matched identities, persistent OnePerson IDs, publication through Cerebrum, a unified student record and ultimately a unified student journey.",
              "Risks or dependencies: The next challenge is sequencing the roadmap against source-system readiness, identity governance and the wider Cerebrum consumption model.",
              "Dependencies outside the team: Cerebrum platform and registry teams; source-system owners; University Services and other future consumers of unified student data.",
              "Next steps: Turn the roadmap into sequenced delivery, define near-term milestones, and align publication and identity decisions with the Cerebrum roadmap."
            ]
          }
        ],
        "risks": [
          "Confirm the remediation owner and expected route for the University of London course and intake defect before London inference is reconsidered.",
          "Confirm the scope decision for the first Alumni Impact iteration if the current analytical approach cannot be delivered reliably."
        ],
        "nextWeek": [],
        "notes": [
          "The BI update had not been received at the time of preparation.",
          "Data quality is increasingly the limiting factor rather than pipeline capability. Cerebrum review queues and ENROL source-data defects both show that automation is exposing upstream ambiguity rather than hiding it.",
          "Cerebrum is becoming shared infrastructure rather than a standalone programme. Rankings, OnePerson, student flows, taxonomies and business-facing applications are now converging on the same governed data foundation.",
          "Business consumption is the next major Cerebrum challenge. The data is increasingly present and demonstrable, but durable egress, versioned release access and product adoption still need to be converted into an operating model.",
          "Scope discipline remains important. The revised University of London experiment and the likely reduction of Alumni Impact demonstrate appropriate adaptation where data or analytical readiness is not yet sufficient."
        ]
      },
      {
        "week": 41,
        "team": "data",
        "heading": "Employability & Skills · Diego Robles Guerrero · October 2026",
        "highlights": "",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Rankings Modelling – Alumni Impact",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Employability & Skills",
            "bullets": [
              "Progress: Finalised restructuring/sourcing of all lists under Sam’s new spec. Reviewed every list for whether it can be sourced from the profile dataset. Began exploration of economic knowledge and technology impact indicators this sprint.",
              "Next steps: Continue exploring economic knowledge and technology impact indicators."
            ]
          },
          {
            "title": "Rankings Modelling – Career Alignment + Graduate Employment Rate",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Employability & Skills",
            "bullets": [
              "Progress: Finalised subject standardisation across the profile dataset, unlocking career alignment, employment alignment, degree-to-occupation rate, and subject-occupation relationships. Advanced highly-skilled employment rate modelling.",
              "Risks / dependencies: Direction for how the highly-skilled employment rate metric will move forward is pending an upcoming meeting.",
              "Next steps: Align on the highly-skilled employment rate approach in the upcoming meeting."
            ]
          },
          {
            "title": "Snowflake Migration",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Employability & Skills",
            "bullets": [
              "Progress: Finalised migration of profile data into Snowflake. Finalised migration of job posting data into Snowflake.",
              "Next steps: Support downstream placement of job posting data in Cerebrum."
            ]
          },
          {
            "title": "Subject Taxonomy",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Employability & Skills",
            "bullets": [
              "Progress: No new updates this period. Version 2.1 remains under review.",
              "Next steps: Begin work on version 3 once the v2.1 review concludes."
            ]
          },
          {
            "title": "Job Title Taxonomy",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Employability & Skills",
            "bullets": [
              "Progress: Decided to retain the existing product occupation IDs rather than adopt new QSIDs directly; will instead map these IDs to QSIDs for Cerebrum. Current mining run is about a week from completion.",
              "Next steps: Resume the job title layer migration once the mining run concludes."
            ]
          },
          {
            "title": "Alumni Platform",
            "label": "EP-25 · QAS Alumni Insights",
            "status": "On track",
            "text": "Employability & Skills",
            "bullets": [
              "Progress: No major updates this period.",
              "Risks / dependencies: Still awaiting clarity on whether infrastructure or datasets will need to be managed from the team’s side.",
              "Next steps: Finish restructuring the alumni analytics projects."
            ]
          },
          {
            "title": "Subject Standardisation",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Employability & Skills",
            "bullets": [
              "Progress: Studyportals and UBS mappings fully delivered. Completed the first version of standardisation for the profile dataset."
            ]
          },
          {
            "title": "Mining Run",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Employability & Skills",
            "bullets": [
              "Progress: Skill extraction complete. Job titles standardised. Finalising feedback loops and reporting.",
              "Next steps: Complete feedback-loop and reporting work to close out this mining run."
            ]
          },
          {
            "title": "Skill Extraction Upgrade",
            "label": "Non-roadmap",
            "status": "Continuous",
            "text": "Employability & Skills",
            "bullets": [
              "Progress: Implementing a new skill-extraction method, as suggested by Dan, to improve extraction from job postings and modernise the current, ageing extraction engine. No new updates this period."
            ]
          },
          {
            "title": "Skill Enhancement Project",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Employability & Skills",
            "bullets": [
              "Progress: Finalised all LLM-extracted skill sets and newly identified skills from this project."
            ]
          },
          {
            "title": "Exploration of Additional Data Fields",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Employability & Skills",
            "bullets": [
              "Progress: Finalised review of certifications as a candidate data field.",
              "Next steps: Begin exploration of AI tags this sprint; job descriptions, skills, seniority and salary remain under consideration."
            ]
          }
        ],
        "risks": [],
        "nextWeek": [],
        "notes": []
      },
      {
        "week": 41,
        "team": "data",
        "heading": "Global Student Flows (GSF) · week ended 9 October 2026",
        "highlights": "",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Prism (Subjects model)",
            "label": "EP-15 · QAS Flows/ISS",
            "status": "On track",
            "text": "GSF team",
            "bullets": [
              "This week: Subject titles crosswalked to QS taxonomy; model architecture rebuilt; IPF rebalancing analysis complete; StudyPortals fees data collected (~200k programmes). Country-level accuracy (TVD) improved from 17.5 to around 6–7 once the layers were rebuilt with the new data, a ~60% improvement; changing the IPF seed as well moved university-level TVD from 27.3 to 10.0 for universities with data, at the cost of a worse estimate for universities without observed data.",
              "Next: Redo Layer 1 at the 13-subject level; collect per-university international student data from government sources; test IPF improvements with these inputs."
            ]
          },
          {
            "title": "ORB core model",
            "label": "EP-15 · QAS Flows/ISS",
            "status": "On track",
            "text": "GSF team",
            "bullets": [
              "This week: Gap-filling revised to the ratio method; global totals revised (2025 global total = 7.67M).",
              "Next: Start process for moving base year to 2026."
            ]
          },
          {
            "title": "ORB data releases",
            "label": "EP-15 · QAS Flows/ISS",
            "status": "On track",
            "text": "GSF team",
            "bullets": [
              "This week: New forecasts for Lithuania, Latvia and Estonia.",
              "Next: Update data and forecasts for Bulgaria, Ireland (released this week)."
            ]
          },
          {
            "title": "ORB QA checks",
            "label": "EP-15 · QAS Flows/ISS",
            "status": "On track",
            "text": "GSF team",
            "bullets": [
              "This week: Tier 4 checks built: zero-value audit, YoY growth outlier scan and spike-and-revert detection.",
              "Next: Test Tier 4 checks; build the Tier 2 (coherence) and Tier 3 (inputs vs outputs) checks."
            ]
          }
        ],
        "risks": [],
        "nextWeek": [],
        "notes": []
      },
      {
        "week": 41,
        "team": "data",
        "heading": "Labour Market Intelligence (LMI) · Kavisha Hapuarachchi · 12 October 2026",
        "highlights": "Overall status: key validation and documentation tasks have been completed, while country mapping, data validation, and employment split allocation continue across active projects.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "AI Framework",
            "label": "EP-14 · QAS LMI Curriculum",
            "status": "In progress",
            "text": "LMI team",
            "bullets": [
              "This week: Refined the Layer 2 country localisation methodology for the QS AI Exposure Framework, including the indicator lists and pillars to better capture country readiness, occupational deployment dependencies, and country–occupation interactions.",
              "Next week: Consolidate the methodology and red hat it thoroughly. Also continue validating how country and occupation factors interact to produce more realistic country-level occupation scores."
            ]
          },
          {
            "title": "Penetration Scoring",
            "label": "EP-14 · QAS LMI Curriculum",
            "status": "In progress",
            "text": "LMI team",
            "bullets": [
              "This week: Finalised the indicator lists across all 15 penetration buckets and drafted imputation methods for selected buckets. Completed Gibrat’s Law testing across population, employment, and occupation levels, which showed no evidence of systematic size-related bias in assigned CAGRs. Also prepared the methodology for testing population-based denominator adjustments and selecting suitable scale corrections.",
              "Next week: QA the finalised indicator lists, complete the remaining imputation methods, and run the remaining indicators through the scale-adjustment pipeline. Also finalise the denominator and adjustment method for each bucket."
            ]
          },
          {
            "title": "Country Clustering",
            "label": "EP-14 · QAS LMI Curriculum",
            "status": "In progress",
            "text": "LMI team",
            "bullets": [
              "This week: Reworked the methodology to derive clustering dimensions from the data using factor analysis, parallel analysis, and bootstrap stability checks. Split indicators into labour market and context pools and added seven ILO indicators to fill gaps in the labour market pool. Narrowed the indicator list from 157 to 60 across 12 proposed dimensions, compiled sources, and organised the central data repository.",
              "Next week: Finalise country coverage for the selected indicators, assess their skewness and scale, determine the required transformations, and identify structural indicators to QA the clustering outputs."
            ]
          },
          {
            "title": "Regional Guardrails and Zero-Employment Occupations",
            "label": "EP-14 · QAS LMI Curriculum",
            "status": "In progress",
            "text": "LMI team",
            "bullets": [
              "This week: Updated regional guardrails using aggregates from deep-dive countries.",
              "Next week: Set up a recurring sprint to identify important country–occupation cases where employment is either zero or particularly high. Add country-level guardrails for these cases to prevent regional averages from producing unrealistic outputs for individual countries."
            ]
          },
          {
            "title": "OPAL Model Improvements",
            "label": "EP-14 · QAS LMI Curriculum",
            "status": "In progress",
            "text": "LMI team",
            "bullets": [
              "Next week: Brainstorm ways to automate and improve country outputs as deep-dive guardrails are added, reducing manual work and keeping outputs consistent."
            ]
          },
          {
            "title": "Guardrails team",
            "label": "EP-14 · QAS LMI Curriculum",
            "status": "In progress",
            "text": "",
            "bullets": [
              "Crosswalks and Taxonomies: finalised the October 2026 handover documents (Output Validation Methodology, Crosswalk Methodology, Crosswalks and Taxonomies & Deep dives), consolidating country crosswalks, taxonomies, and source information with additional validation rules.",
              "ISCO: completed the ISCO crosswalk review and updated the methodology document.",
              "Country Mapping and Research: completed Saudi Arabia employment output validation across industries and occupations, updating occupation and subsector figures wherever necessary. Reviewed East Asia model outputs, progressed Netherlands, Nigeria, India and Ireland’s occupation mapping at the three-digit level, advanced the India crosswalk, and initiated UAE research and mapping.",
              "Regional Guardrails: developed the Regional Guardrails Helper to support ongoing updates through periodic sprints. As an initial step, updated the Nuclear and Astronaut tabs with outbound research and employment figures."
            ]
          }
        ],
        "risks": [],
        "nextWeek": [
          "Ongoing work, challenges and next week’s priorities: Country mapping: progress mapping, validation, and employment split allocation for Nigeria, Netherlands, India, France, and Ireland. Prioritisation: prioritising countries based on urgency, project requirements, and resource availability will be key as the team approaches year-end."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "cyber",
        "heading": "Cyber · Rowan Chapman",
        "highlights": "After deciding the laptop was approaching “heritage asset” status, Rowan rebuilt it with Ubuntu 26 LTS, successfully enabling Secure Boot, TPM-backed encryption and Entra ID authentication (using AuthD + MS Broker). Beyond giving Rowan a much faster daily driver, the exercise proved a secure Linux-managed workstation model that may be valuable for Corporate IT. Rowan will be documenting the approach and sharing the findings with the team.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Strategic security platform procurement",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "",
            "text": "Procurement continued progressing both the UpGuard upgrade and Wiz acquisition activities. These investments remain key enablers for maturing QS’s third-party risk management and cloud security capabilities. It is dragging on a bit here with only incremental updates; Rowan has requested that Senthil push this along.",
            "bullets": []
          },
          {
            "title": "GRC platform evaluation",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "",
            "text": "Discussions regarding Drata were delayed due to stakeholder availability constraints. The project remains active and will resume once key participants are available.",
            "bullets": []
          },
          {
            "title": "Box security posture review",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "",
            "text": "Conducted additional discovery sessions with Marketing and Creative teams to better understand business processes, content-sharing requirements, and the impact of potential security changes. These discussions continue to strengthen understanding of operational dependencies and implementation constraints.",
            "bullets": []
          },
          {
            "title": "Security posture improvement",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "",
            "text": "Worked with multiple teams to address externally visible security issues and vulnerabilities. These remediation efforts contributed to QS regaining its A-tier rating with external cybersecurity risk-scoring providers, reversing the decline experienced in recent weeks and providing a stronger assurance narrative for customers and partners.",
            "bullets": []
          },
          {
            "title": "CyberCon 2026 preparation",
            "label": "Non-roadmap",
            "status": "",
            "text": "Finalised attendance planning for CyberCon Melbourne, including building a targeted conference agenda and scheduling networking discussions with industry contacts and security vendors to maximise time at the event.",
            "bullets": []
          },
          {
            "title": "Cyber Awareness content creation",
            "label": "Non-roadmap",
            "status": "",
            "text": "Developed content for publication on the Inside QS and SharePoint platforms to support Cyber Awareness Month activities and promote stronger security awareness across the business.",
            "bullets": []
          },
          {
            "title": "Trust Centre preparation",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "",
            "text": "Continued reviewing and documenting outstanding items within the MoveON HECVAT questionnaire as part of preparations to publish the Trust Centre internally and strengthen transparency around security and compliance controls.",
            "bullets": []
          }
        ],
        "risks": [
          "UpGuard procurement timeline risk. There is budget for this purchase and extended delays may see QS miss the opportunity to capitalise before the budget is reallocated."
        ],
        "nextWeek": [
          "Continue supporting Procurement with UpGuard and Wiz procurement activities and vendor engagement.",
          "Re-engage Drata stakeholders and progress commercial and evaluation discussions.",
          "Conduct further Box discovery sessions and continue refining recommendations for the CISO.",
          "Publish Cyber Awareness Month content through Inside QS and related communication channels.",
          "Finalise outstanding MoveON HECVAT actions and progress internal Trust Centre publication activities.",
          "Attend CyberCon Melbourne and engage with industry peers, vendors and privacy/security practitioners to identify opportunities that could benefit QS."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "mimo",
        "heading": "MIMO (MoveON and MoveIN) · Ashok Arunakiri",
        "highlights": "",
        "highlightBullets": [
          "Business continuity: advanced recovery infrastructure and automation for the ISO BCP/DR exercises: MoveIN on Monday 12 October, and MoveON on Friday 16 October.",
          "MoveON modernisation: migrated the Telemaxx MySQL cluster to MySQL 8.4 and deployed Jasper 8.2.0 as a container in staging, progressing infrastructure standardisation."
        ],
        "delivery": [
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Progressed DR environment recreation through Terraform and reusable Ansible automation for infrastructure, databases and application services. Initial testing identified improvements ahead of the scheduled exercise.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Completed the Telemaxx MySQL cluster migration, including additional-node provisioning and storage configuration.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Deployed the Jasper container in staging, enabled monitoring and automatic restart, and stopped the legacy VM. Wider integration and application validation continue.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Completed REST API and Advanced Publisher SSL renewals across all live environments and improved automated deployment prerequisites.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Executed database compliance-check commands and prepared outputs for the external penetration-testing team. Assessment findings and remediation will be handled separately.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Reviewed credential protection and retention of approved container images to support consistent deployment and recovery.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Recreated recovery infrastructure and prepared scripts for infrastructure provisioning, database restoration and uploaded-file synchronisation.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "Progressed recovery-workflow testing and automated Jenkins worker provisioning ahead of Monday’s BCP/DR exercise.",
            "bullets": []
          }
        ],
        "risks": [
          "MySQL 8.4 issues. MySQL 8.4-related issues in France and Telemaxx, including issues observed following hotfixes, remain under investigation. Telemaxx queue failures also present a service-stability risk.",
          "Repository credential clean-up. Repository credential clean-up remains outstanding, with sensitive material still requiring removal from repository history."
        ],
        "nextWeek": [
          "Execute the MoveIN BCP/DR exercise on Monday and MoveON BCP/DR exercise on Friday, including data restoration and application validation.",
          "Resolve MySQL 8.4-related issues and queue failures; progress the remaining Telemaxx standalone MySQL upgrade.",
          "Continue ADFS/Platform Router containerisation, Jasper validation and database compliance-evidence follow-up."
        ],
        "notes": [
          "Delivery was printed in two groups: “DELIVERY — MOVEON” (the first six items) and “DELIVERY — MOVEIN” (the last two items). The items are printed as unnamed bullets, so no item titles are recorded."
        ]
      },
      {
        "week": 41,
        "team": "de-infra",
        "heading": "D&E · Ashok Arunakiri",
        "highlights": "",
        "highlightBullets": [
          "Completed PHP 8.4 and Drupal 11.4.8 upgrades across TU and TM prelive environments, alongside end-to-end containerisation of the dev6aws environment.",
          "Completed the new Tableau server setup, including a version upgrade, configuration migration, account-recovery testing and Zero Trust access for authorised users."
        ],
        "delivery": [
          {
            "title": "",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "",
            "text": "Completed TU/TM prelive upgrades, validated the custom tracing module and finished dev6aws containerisation.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Completed Tableau platform preparation and reviewed licence usage and renewal requirements.",
            "bullets": []
          },
          {
            "title": "HUB1",
            "label": "Non-roadmap",
            "status": "",
            "text": "rolled back last week’s production OS upgrade to the previous servers after issues emerged. Investigation is ongoing before reattempting the upgrade.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Reviewed September AWS costs, removed obsolete stopped VMs and analysed Cloudflare bot traffic to inform security tuning.",
            "bullets": []
          },
          {
            "title": "Rovo–Microsoft Teams integration",
            "label": "Non-roadmap",
            "status": "",
            "text": "validated Jira issue creation and commenting using supplied transcript content. Automatic transcript retrieval remains unresolved and has been escalated to CORP-IT.",
            "bullets": []
          }
        ],
        "risks": [
          "HUB1 on legacy servers. HUB1 is back on legacy Ubuntu 18 production servers following the rollback. The underlying issue must be resolved before the upgraded servers can return to service."
        ],
        "nextWeek": [
          "Prioritise HUB1 root-cause investigation and plan the OS-upgrade reattempt following validation.",
          "Progress the HUB1 development MongoDB upgrade, deployment automation and DMARC analysis ahead of enforcement changes.",
          "Follow up with CORP-IT and retest automatic Rovo transcript retrieval."
        ],
        "notes": []
      },
      {
        "week": 41,
        "team": "ubs",
        "heading": "UBS · Ashok Arunakiri",
        "highlights": "Progressed infrastructure cost optimisation through FSx downsizing in development and UAT, alongside preparation for Dialogflow decommissioning.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Progressed FSx capacity reductions and Dialogflow backups ahead of retirement.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Provisioned S3 user access and created a new Snowflake database for the Data Science team.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "Purchased a new domain for Digital Outreach.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Complete FSx configuration in the UAT application.",
          "Complete Dialogflow backups and decommissioning."
        ],
        "notes": []
      },
      {
        "week": 38,
        "team": "syd1",
        "heading": "SYD1 · Charlie Liu",
        "highlights": "A second estate stood up in a week. Staging now runs on eu-west-1 end to end — the Auth API, Pulse with its full Snowflake path, the federation, the Auth DB with its tunnel and bootstrap, the prototypes under prototype.staging.qs.com and Stars — with staging made the first delivery branch and promotion to production by pull request. Every front end develops locally on local.qs.com against it. Behind it, us-east-1 was retired: both environments, the frozen Stars GraphQL service, the federation and dev-estate targets, and the platform audience. 152 pull requests across twenty repositories.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Staging estate (eu-west-1)",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "The Auth API, Pulse, the federation, the Auth DB (tunnel, bootstrap, environment map, first CX admin seeded, the two protected accounts and the product catalogue mirrored from production), the prototypes and Stars all deployed to eu-west-1; four platform ingress hosts published from the staging zone; staging MyQS and MyQS1 clients with prototype and local-dev origins; the MFA Always outage on staging recorded and re-armed after SES production access.",
            "bullets": []
          },
          {
            "title": "us-east-1 retirement",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "The prod and dev environments retired, the frozen Stars GraphQL service and the federation target retired, the dev-estate targets dropped from the Auth API and Pulse, and the platform audience removed from the JWT authoriser.",
            "bullets": []
          },
          {
            "title": "QS Stars",
            "label": "EP-46 · QAS Stars",
            "status": "On track",
            "text": "Served as a Federation 2 subgraph with the product guard, the Snowflake sync pipeline shipped as a Lambda image, both Stars roles granted on every table with the per-estate data bring-up documented, and the federation notified when main moves; the front end queries the federated router, points its onboarding pickers at the app’s own graph, and is hosted in production.",
            "bullets": []
          },
          {
            "title": "Rankings Template (rr) alpha · with Caitlin Jiang",
            "label": "EP-18 · QAS Rankings App",
            "status": "On track",
            "text": "Registered as the rr alpha app with a launcher tile and allowed on the staging and prod MyQS clients; Caitlin rebuilt the RR front end around the template on qas-design board views, shipping StructureToolbar, RankBoard and the rankings board page from the package; hosted in production.",
            "bullets": []
          },
          {
            "title": "local.qs.com developer setup",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "RR, Stars, MyQS, CX, Cerebrum, Factfile and the design system all develop locally on local.qs.com against staging; the staging router accepts the local origin and the staging MyQS client allows the local ports.",
            "bullets": []
          },
          {
            "title": "Prototype hosting on staging",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "QAS-Prototype lost its hosting when the us-east-1 dev estate was demolished; it is re-homed under prototype.staging.qs.com on the staging tenant, with every prototype/<name> branch getting its own single-label host that the MyQS client’s Auth0 wildcard accepts. Amplify’s automatic subdomains did not fire, so the thirteen current branch hosts are declared explicitly, and adding a prototype is three steps: push the branch, list it, deploy. Prototypes build against the staging tenant.",
            "bullets": []
          },
          {
            "title": "QS Supergraph",
            "label": "EP-77 · MyQS Core – Ph2",
            "status": "On track",
            "text": "Staging made the first delivery branch with promotion to production by pull request, the eu-west-1 estate added to the delivery stack, a MigrateDatabase stage for Stars, rr registered, the account CX identifiers re-exposed on staging, and the us-east-1 target retired. The Recruitment Admin subgraph now notifies the federation as a GitHub App with organisation-level credentials, and committed its leaderboard score migration.",
            "bullets": []
          },
          {
            "title": "QS Auth",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "The prod asset origin moved to eu-west-2 with the ACUL bundles rebuilt and re-pinned, the implicit grant dropped from both staging clients, rr allowed on both tenants, MyQS1 staging callbacks pinned to wildcards, and a protected account’s own admin able to provision any product inside it.",
            "bullets": []
          },
          {
            "title": "Entitlement outbox to HolonIQ staging",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "The outbox streamed from the staging Auth DB, the DMS staging config pointed at eu-west-1 and forwarding to HolonIQ staging, the staging outbox replayed for the HolonIQ staging consumer, and a qas-events staging instance in HolonOS-BE parameterised to run beside production.",
            "bullets": []
          },
          {
            "title": "HolonIQ / HolonOS · with Ming Shi",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Membership roles leased and account columns made CX-authoritative on linked accounts, and the reconcile sweep made to finish, all promoted to qas-prod.",
            "bullets": []
          },
          {
            "title": "CX, MyQS & Cerebrum FEs · with Caitlin Jiang and Ming Shi",
            "label": "EP-87 · MyQS CX – Ph 2",
            "status": "On track",
            "text": "CX gained territory, sales manager and CSM filters plus account and product filters on product access; MyQS asks Auth0 to enrol an authenticator rather than verify one, keeps enrolment reachable when the popup is blocked, shows a truthful MFA row, and lets a user remove a passkey; Cerebrum opens the QS Agent in the shell drawer. All on qas-design 2.1.46.",
            "bullets": []
          },
          {
            "title": "Design System (qas-design) · with Lorenzo and Caitlin Jiang",
            "label": "EP-26 · MyQS Design System",
            "status": "On track",
            "text": "2.1.39 through 2.1.46: StructureToolbar, RankBoard and the rankings board page shipped from the package, apps able to feed the analytics reports and rank board with their own rows, and the Rankings Template alpha tile in the launcher.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "QAS-Alumni alpha promotion from prototype.",
          "Rankings Template work continues."
        ],
        "notes": []
      },
      {
        "week": 38,
        "team": "cerebrum",
        "heading": "Cerebrum · Nicolas Jourdain · week of 7–13 September 2026",
        "highlights": "Week dedicated almost entirely to the QS Identity Ledger: it went from design to live in Aurora with a Snowflake replica, a sync job, an ingest gate and a UI panel, across five repos. Around it, the registry API grew the rest of the schema lifecycle (per-version enum values, REFERENCE edges, natural-key canonicalisation, batch key attach).",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "QS Identity Ledger, end to end",
            "label": "EP-32 · MyQS Cerebrum",
            "status": "Shipped",
            "text": "Aurora is the ledger of record (resolve-or-issue, source systems, key store), Snowflake holds the replica, a 10-minute sync job keeps it current, entity ingest is gated on it, and the entity page shows bound references with retract/retire. Spans the API, dbt, Dagster, CBR-Infra and the FE.",
            "bullets": []
          },
          {
            "title": "Ledger hardening after go-live",
            "label": "EP-32 · MyQS Cerebrum",
            "status": "Shipped",
            "text": "502s on keys/retract fixed, DERIVED ids no longer registered, sync scripts run from outside the VPC, mint ceiling raised to 1,000.",
            "bullets": []
          },
          {
            "title": "Natural keys",
            "label": "EP-32 · MyQS Cerebrum",
            "status": "Shipped",
            "text": "Derive the same qs_id however the producer spells them — text and numeric components canonicalised in both the API and dbt stage 5, plus intra-submission FK resolution in stage 8 and a batch key-attach route (up to 1,000 bindings).",
            "bullets": []
          },
          {
            "title": "ENUM values scoped per schema version",
            "label": "EP-32 · MyQS Cerebrum",
            "status": "Shipped",
            "text": "The shared catalogue default is unfrozen; DDL applied to prod, API and FE read the new table.",
            "bullets": []
          },
          {
            "title": "REFERENCE edges are API-managed",
            "label": "EP-32 · MyQS Cerebrum",
            "status": "Shipped",
            "text": "Create/read/update/delete on a draft via the integration surface; hand-written SQL is no longer the pattern.",
            "bullets": []
          },
          {
            "title": "Source-system registration unblocked",
            "label": "EP-32 · MyQS Cerebrum",
            "status": "Shipped",
            "text": "Unknown entity type is a 400 not a 502, the near-duplicate guard stopped rejecting hub2/iso_3166_3, and new registrations auto-approve for now.",
            "bullets": []
          },
          {
            "title": "Dataset snapshots",
            "label": "EP-32 · MyQS Cerebrum",
            "status": "Shipped",
            "text": "Build from a released dataset schema — new read route, Dagster snapshot builder, FE dataset pages aligned to the concept.",
            "bullets": []
          },
          {
            "title": "Entity-types UI tidy and Amplify build fix",
            "label": "Non-roadmap",
            "status": "Shipped",
            "text": "QS ID method and schema version columns, Active Schema section dropped, lockfile restored so npm 10 builds again.",
            "bullets": []
          },
          {
            "title": "Handover alignment and qs_mapping retirement",
            "label": "Non-roadmap",
            "status": "In flight",
            "text": "Two CBR-Infra SQL changes waiting on the manual apply; the qs_mapping drop is dry-run clean but not applied.",
            "bullets": []
          },
          {
            "title": "Rankings asset lands in the pipeline",
            "label": "Non-roadmap",
            "status": "",
            "text": "crystalng-qs: rankings asset and job in Dagster, four dbt changes including Dagster Pipes.",
            "bullets": []
          },
          {
            "title": "Dagster stack opened to sister teams",
            "label": "Non-roadmap",
            "status": "",
            "text": "dynamic code-location management, 1mentor onboarded, an AWS access-policies stack, and concurrency/conflict groups for sensor jobs.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [],
        "notes": [
          "Everyone else — 14 changes merged across 4 repos"
        ]
      },
      {
        "week": 38,
        "team": "blr2",
        "heading": "BLR2 · Simon Hall",
        "highlights": "Partner Discovery: shipped an internal Platform Stats dashboard giving QS admins a single view of adoption, network overview, opportunity engagement, interest activity and time-to-value, with full data export.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Partner Discovery",
            "label": "EP-16 · QAS Partner Discovery",
            "status": "On track",
            "text": "Delivered Profile Analytics with preset and custom date ranges, totals and trend charts, comparison against the preceding period, visitor-source and search-criteria breakdowns, and anonymised audience profiling (type, size, research volume, focus); performance figures restricted to the institution’s own admins and QS internal reviewers. Delivered internal Platform Stats dashboard covering adoption, network overview, opportunity engagement, interest activity and time-to-value, with full data export for offline reporting. Tightened admin recognition via central product access so admin-only areas (e.g. My Partnerships) surface correctly without portal-level role setup. Restructured the workspace menu so My Opportunities and My Partnerships appear as clear sub-items. Corrected per-institution user metrics so counts reflect actual registered users. Simplified the published/unpublished opportunity filter and made it easier to clear. Clarified confirmation messaging when partnerships are added. Standardised default institution logo and banner imagery. Cleaned an obsolete admin-email placeholder from notification emails. Resolved sidebar navigation conflicts for a smoother experience.",
            "bullets": []
          },
          {
            "title": "MyQS Rankings",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Extended embargo access controls so internal QS users and factfiles admins see embargoed assets ahead of publication, with a 2-day early-access window automatically applied for QS One subscribers. Fixed a broken link in the Rankings action plans area.",
            "bullets": []
          },
          {
            "title": "CSM Knowledge Base (HubSpot)",
            "label": "Non-roadmap",
            "status": "In progress",
            "text": "Kicked off the HubSpot CSM project — explored Design Manager and module structure, added custom CSS for buttons and cards, and completed initial UI styling and refinements.",
            "bullets": []
          },
          {
            "title": "QA",
            "label": "EP-16 · QAS Partner Discovery",
            "status": "On track",
            "text": "Completed QPD improvements testing (status filtering, save/redirect behaviour, map visibility, UI updates, British English localisation for types and subtypes). Verified TU/TM institution inclusion/exclusion across all applicable pages. Started Profile Analytics testing covering access permissions, date range filters, profile visits, search appearances, comparison indicators, trend charts, visitor sources and search filter analytics.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "MyQS: support the LATAM rankings release and fix Stars data so the latest dataset is displayed.",
          "Partner Discovery: continue QA on Profile Analytics and Platform Stats, resolve incoming bugs, and add video tutorials.",
          "QA: continue testing remaining QPD tickets, retest identified issues, perform MyQS regression testing and run live-deployment sanity testing."
        ],
        "notes": []
      },
      {
        "week": 38,
        "team": "blr1",
        "heading": "BLR1 · Simon Hall",
        "highlights": "Progressed HUB2 QSSA Directory enablement into validation and release-readiness, preparing a batch of partner institutions for publishing to the new QSA Directory.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "HUB2",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Completed development and QA validation for the Financial Aid bulk upload fix, ensuring uploaded data is correctly reflected within the user interface. Resolved the programme editing issue responsible for false “programme already opened in another tab” warnings, with validation completed in QA and deployment progression towards staging and production environments. Completed development activities supporting batch client publishing, with production rollout pending final publishing activities and operational readiness. Delivered code changes required for QSA Directory enablement, with release readiness dependent on completion of institution data verification activities. Completed investigation of the logo update issue in General Details and confirmed the root cause to be Cloudflare-related rather than an application defect.",
            "bullets": []
          },
          {
            "title": "HUB1",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Completed planned ranking form improvements and platform maintenance activities. Progressed development of a new enhancement to improve cycle selection usability by displaying the word “Cycle” alongside the selected year within the cycle dropdown. Continued supporting platform consistency through targeted user experience improvements.",
            "bullets": []
          },
          {
            "title": "MyQS Partnership Discovery (QPD)",
            "label": "EP-16 · QAS Partner Discovery",
            "status": "On track",
            "text": "Completed implementation of the application-level filtering solution required to curate institution records from the existing Snowflake data source. Delivered the technical implementation required to support institution eligibility and discovery requirements within Partnership Discovery. Progressed the initiative into stakeholder validation, with production deployment dependent upon confirmation of the final institution dataset and business approval.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Support QA feedback resolution and production deployment activities for completed HUB2 deliverables.",
          "Progress batch client publishing and QSA Directory enablement activities through production release.",
          "Support stakeholder validation activities for QPD and prepare for production deployment following approval.",
          "Complete development and testing of the HUB1 cycle dropdown enhancement."
        ],
        "notes": []
      },
      {
        "week": 38,
        "team": [
          "ecu1",
          "ecu2"
        ],
        "heading": "ECU1 and ECU2 · Jonnathan Pena and Paula Jiminez",
        "highlights": "This week 1 Mentor went live with IBM. The Product team reported they were really impressed with the platform. The team also managed to certify all tasks and the staging environment for release 74.18.4, which was scheduled to go to production on the evening of 18 September.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "IBM go-live",
            "label": "EP-19 · 1 Mentor IBM",
            "status": "Shipped",
            "text": "1 Mentor is now live with IBM. The Product team confirmed they were impressed with the platform.",
            "bullets": []
          },
          {
            "title": "Release 74.18.4",
            "label": "Non-roadmap",
            "status": "Shipped",
            "text": "Updated the learner platform sidebar. Configured default providers for courses from the database. Cleaned up tables that are no longer in use. Improved the top bar in Career Trends. Specialised majors by instance and institution. Limited occupations by instance. Fixed minor bugs.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Sprint 118 starting: personalised Learning Path, account deletion, technical debt, Seneca PLAR wizard redesign."
        ],
        "notes": []
      },
      {
        "week": 38,
        "team": "movein",
        "heading": "MoveIN · Mahesh",
        "highlights": "Lumina has been upgraded to the latest version, strengthening security, expanding AI capabilities, improving usability and accessibility, and increasing reliability at scale. The MoveIN Console Instance Leaderboard gives teams a faster way to compare client institutions, identify issues and support more proactive account management.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "AI Template Builder and Communications",
            "label": "EP-89 · MoveIN Features",
            "status": "On track",
            "text": "Instant Brand Profile Extraction accelerates new client onboarding by automatically detecting brand typography, buttons and site languages directly from an institution’s URL. Campaign creation sped up with one-click template duplication, smart prompt suggestions and real-time size validation to prevent email clipping. Automated Design Polish ensures professional, brand-compliant emails by managing header/footer logo dimensions and image alignment without custom code. Human-readable AI token usage metrics (e.g. 175.4K / 2B) help administrators monitor consumption. In-app announcements introduce the AI email generator to first-time users.",
            "bullets": []
          },
          {
            "title": "Smart Matching and User Onboarding",
            "label": "EP-89 · MoveIN Features",
            "status": "On track",
            "text": "Interactive onboarding walkthrough accelerates customer time-to-value with a guided, step-by-step tour of automated contact matching. Operational review refinements streamline daily workflows with clearer run-status tracking and bulk matching actions.",
            "bullets": []
          },
          {
            "title": "MoveIN Console Instance Leaderboard",
            "label": "EP-89 · MoveIN Features",
            "status": "On track",
            "text": "Enables teams to compare client institutions at a glance, identify top and bottom performers and support earlier account intervention.",
            "bullets": []
          },
          {
            "title": "Lumina upgraded to latest version",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Introduces 30+ security fixes, safer login handling, improved performance, enhanced accessibility and a more streamlined user experience. Supports the latest Google and OpenAI models and enables users to create, manage, redirect, pause and coordinate AI agents for more complex workflows. Introduces Projects folders, pinned favourites, a redesigned sidebar, usage visibility and selected voice/podcast capabilities.",
            "bullets": []
          },
          {
            "title": "Data Management and Team Efficiency",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Simplified CSV Data Importer reduces import errors with an intuitive import-selection flow and a clear pre-import summary of new versus updated records. Flexible Bulk Contact Updates improve operational agility by allowing bulk updates using only email addresses, removing mandatory name-field constraints.",
            "bullets": []
          },
          {
            "title": "Localisation and Platform Quality",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Simplified Chinese localisation expanded for both front-office reference data and back-office system selection lists. Visual polish and character formatting fixed punctuation encoding in email subject lines and resolved interface alignment issues across various screen resolutions.",
            "bullets": []
          }
        ],
        "risks": [
          "Penetration test reports under evaluation. Any findings requiring remediation could create additional work.",
          "OpenAI Assistants API deprecation. An alternative has been identified."
        ],
        "nextWeek": [
          "Strengthen role-based access controls to prevent unauthorised access to applicant records through indirect links.",
          "Improve SharePoint document access: refreshed links immediately after merge, eliminating manual reloads.",
          "Standardise portal navigation: restore consistent headers and sidebars across single-portal configurations.",
          "Expand personalised reporting views: save customised versions of standard templates without modifying shared masters.",
          "Penetration test report evaluation: review findings and identify remediation actions.",
          "RabbitMQ upgrade planned for 22 September."
        ],
        "notes": []
      },
      {
        "week": 38,
        "team": "events",
        "heading": "Digital and Events · Catarina Cunha · Events and Drupal · week of 14–18 September 2026",
        "highlights": "Angular upgrade done, from version 14 to 21, no issues reported and no downtime. GME rankings released.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "GME rankings",
            "label": "Non-roadmap",
            "status": "Shipped",
            "text": "Released on the 16th.",
            "bullets": []
          },
          {
            "title": "Drupal clean-up",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "On track",
            "text": "What has been done is released, but we continued with this task by resolving errors and deletion of modules, since we have capacity.",
            "bullets": []
          },
          {
            "title": "CMT module conversion from React to Drupal",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Ready for release",
            "text": "This has been tested, is waiting for release.",
            "bullets": []
          },
          {
            "title": "TU performance investigation",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "Shipped",
            "text": "Some implementations done have been released, and we will continue with new tickets this sprint.",
            "bullets": []
          },
          {
            "title": "Agenda builder",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Testing is still ongoing, delayed due to Angular testing priority.",
            "bullets": []
          },
          {
            "title": "Angular upgrade (14 to 21)",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "Shipped",
            "text": "Angular upgrade done, from version 14 to 21, no issues reported and no downtime.",
            "bullets": []
          },
          {
            "title": "Drupal 11",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Aiming to conclude it in the next sprint, now fixing final issues before sending it to testing.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Latam rankings: preparation for this release is waiting data."
        ],
        "notes": []
      },
      {
        "week": 38,
        "team": "qsapply",
        "heading": "QS Apply (Appian) · Sreeram Sreekumar",
        "highlights": "The team continues to focus on Appian production support, while progressing with the discovery phase of the Appian migration.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Appian migration discovery",
            "label": "EP-54 · Appian to HubSpot Migration",
            "status": "On track",
            "text": "The discovery phase is now under way, with stakeholder workshops in progress to understand the current-state processes, system usage, pain points and opportunities for improvement across the Applicant and Application Journey and Admissions processes.",
            "bullets": []
          },
          {
            "title": "Production support",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "No ongoing production fixes or investigations to report this week.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Continue with scheduled stakeholder workshops as part of the Appian migration discovery phase.",
          "Progress towards completing the discovery phase, including consolidation of key findings, pain points, process gaps and requirements."
        ],
        "notes": []
      },
      {
        "week": 38,
        "team": "ubsdev",
        "heading": "UBS Development · Mohd Azhar Mohd Razman",
        "highlights": "The Appian development team has commenced work on developing integration replacements for enquiry forms within HubSpot. Once the replacements are complete, this will allow QS to decommission its legacy APIs, reduce AWS spend and take a step closer to decommissioning legacy CRMs.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Enquiry form (API) replacements",
            "label": "EP-54 · Appian to HubSpot Migration",
            "status": "On track",
            "text": "Replacements for ACU, ECU, Keele and RCA are ready for testing. Griffith has undergone QA, with some fixes required following the initial review.",
            "bullets": []
          },
          {
            "title": "Informatica replacement (S3 flat file)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "Griffith’s replacement is awaiting deployment, pending the API replacement. Brighton’s replacement has been developed and is awaiting testing. Stirling and ECU development work is under way.",
            "bullets": []
          },
          {
            "title": "Informatica replacement (Keystone)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "Two of three replacements (RCA and ECU) have been built in the test environment and are now ready for testing. Initial round of testing concluded for RCA with a few small fixes needed.",
            "bullets": []
          }
        ],
        "risks": [
          "Contact Matching unavailable in Sandbox. Issues promoting data from production to sandbox due to missing data objects. Checking with Simon when he returns from leave.",
          "University of London sandbox licensing. Missing required licensing to proceed with development. Simon is arranging access.",
          "Tag data ingestion. Need to agree how tag data should be ingested so it loads correctly into Contact Source. Needs replication in Sandbox for QA.",
          "HubSpot x HubSpot integration. Clare is awaiting the Data Model from Daniel before development can begin.",
          "LSBU paused. S3 flat-file replacement on hold pending tender outcome.",
          "Informatica will not be renewed. Procurement has been notified of the decision not to renew."
        ],
        "nextWeek": [
          "Continue building the rest of the HubSpot integration.",
          "Roll out this week’s fixes once testing is complete.",
          "Agree on the process for the ticket creation workflow.",
          "Continue the Informatica replacement work for Stirling and ECU."
        ],
        "notes": []
      },
      {
        "week": 38,
        "team": "cx",
        "heading": "CX Systems · Fahad Door",
        "highlights": "Successfully progressed Aircall operations through user onboarding and investigation of the Derby lines call-drop issue, while continuing to resolve the Sakari missing Sender ID issue and coordinating UAE Sender ID setup. Advanced the QS Events Sakari setup and troubleshooting the permissions issue with Sakari on US local number availability.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Aircall",
            "label": "Non-roadmap",
            "status": "",
            "text": "continued user onboarding and investigated the Derby lines call-drop issue.",
            "bullets": []
          },
          {
            "title": "Sakari",
            "label": "Non-roadmap",
            "status": "",
            "text": "continued working with Sakari Support on the missing Sender ID issue and progressed UAE Sender ID setup for specific universities.",
            "bullets": []
          },
          {
            "title": "QS Events",
            "label": "Non-roadmap",
            "status": "",
            "text": "progressed the Sakari setup and HubSpot integration.",
            "bullets": []
          },
          {
            "title": "US Numbers",
            "label": "Non-roadmap",
            "status": "",
            "text": "coordinated with Sakari regarding US local number availability and permissions for QS Events.",
            "bullets": []
          },
          {
            "title": "Niswey",
            "label": "Non-roadmap",
            "status": "",
            "text": "coordinated with the QS Events team on the Niswey setup.",
            "bullets": []
          },
          {
            "title": "Sender ID registration",
            "label": "Non-roadmap",
            "status": "",
            "text": "coordinated with the team to collect required client details for alphanumeric Sender ID registration.",
            "bullets": []
          },
          {
            "title": "Team operations",
            "label": "Non-roadmap",
            "status": "",
            "text": "managed team handovers and offboarding activities.",
            "bullets": []
          },
          {
            "title": "QS Dev",
            "label": "Non-roadmap",
            "status": "",
            "text": "worked on resolving the Facebook account MFA issue.",
            "bullets": []
          },
          {
            "title": "Macquarie University",
            "label": "Non-roadmap",
            "status": "",
            "text": "troubleshot and fixed the IVR misconfiguration.",
            "bullets": []
          }
        ],
        "risks": [
          "US local numbers. Sakari US local numbers do not currently appear to be available, which may delay the QS Events setup.",
          "Sender ID validation. Effectiveness will be confirmed through testing and production usage. Final results expected once destination-country registration is completed."
        ],
        "nextWeek": [
          "Team handovers and offboarding.",
          "Continue working on the QS Dev Facebook account MFA issue.",
          "Coordinate with SS managers to collect required information for each university.",
          "Complete handover and documentation from Yugan and Dil.",
          "Continue working with Sakari to obtain US local numbers for QS Events."
        ],
        "notes": []
      },
      {
        "week": 38,
        "team": "cyber",
        "heading": "Cyber · Rowan Chapman · Network Security Manager · week of 14–18 September 2026",
        "highlights": "QS’s external cybersecurity rating increased by a further five points, strengthening the organisation’s position as an established A-tier organisation in the eyes of independent cybersecurity risk-rating providers (UpGuard). This provides a positive assurance narrative for prospective customers and reflects the ongoing efforts of Engineering teams to remediate security vulnerabilities and improve the organisation’s overall security posture.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Drata GRC proof of value concluded",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "Done",
            "text": "Completed the evaluation of Drata and assessed the platform as suitable for QS. The solution demonstrated strong capability across continuous compliance monitoring, policy management, risk management and ISO governance requirements. The Compliance team has requested an extension to undertake further evaluation before a final recommendation is made.",
            "bullets": []
          },
          {
            "title": "CSPM and Third-Party Risk Management procurement",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "On track",
            "text": "Met with Procurement to review proposed Cybersecurity Posture Management (CSPM) and Third-Party Risk Management (TPRM) solutions. Provided additional context on business justifications, procurement requirements and vendor quotations.",
            "bullets": []
          },
          {
            "title": "Box security posture review",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "On track",
            "text": "Continued business discovery sessions with stakeholders to better understand current Box usage patterns, with particular focus on public sharing controls and data exposure risks. Findings are being consolidated into a recommendation package for the CISO.",
            "bullets": []
          },
          {
            "title": "D&E vulnerability and patch management compliance assessment",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "Done",
            "text": "Completed a security compliance review of vulnerability and patch management practices within D&E environments. While initiatives are under way to improve maturity, including the planned acquisition of Automox, the environment is currently assessed as non-compliant against QS security requirements and policy. Findings and recommendations have been formally provided to the CISO for action.",
            "bullets": []
          },
          {
            "title": "Freshservice helpdesk proof of value",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "Done",
            "text": "Concluded cybersecurity participation in the Freshservice evaluation process. Security observations and recommendations have been prepared and will be presented to Corporate IT to support their decision-making process.",
            "bullets": []
          },
          {
            "title": "CrowdStrike AI Security evaluation",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "On track",
            "text": "Participated in a half-day CrowdStrike AI Security workshop and hands-on lab, bringing newly acquired knowledge directly into the ongoing CrowdStrike Guardian (AIDR) PoV. Applied learnt techniques to investigate AI policy violations within the pilot group and gained greater visibility into organisational AI usage and governance opportunities. Initial findings indicate strong potential value for QS.",
            "bullets": []
          },
          {
            "title": "MoveOn security assessment activities",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "On track",
            "text": "External penetration testing and internal security assessment activities for the MoveOn environment continued to gain momentum, with stakeholder engagement and review activities increasing as assessment work progresses.",
            "bullets": []
          }
        ],
        "risks": [
          "Box platform constraints. Discovery sessions continue to reinforce that Box configurations and business processes are highly interconnected. This may significantly limit the security controls that can be introduced without broader operational impacts.",
          "D&E compliance gap. The D&E environment remains non-compliant with vulnerability and patch management standards. While remediation activities are under way, oversight and prioritisation will be required to address identified gaps."
        ],
        "nextWeek": [
          "Connect Procurement and key stakeholders with CSPM and TPRM vendor representatives for next-stage evaluation and commercial discussions.",
          "Continue Box discovery workshops and finalise recommendations for presentation to the CISO.",
          "Support the extended Drata evaluation and provide follow-up clarification as required.",
          "Deliver cybersecurity recommendations to Corporate IT following completion of the Freshservice proof of value.",
          "Present CrowdStrike AI Security PoV findings and recommendations to Alisha and create tickets for critical vulnerabilities.",
          "Continue oversight of external penetration testing and internal security assessment activities for the MoveOn environment."
        ],
        "notes": []
      },
      {
        "week": 38,
        "team": "mimo",
        "heading": "Infrastructure · MoveON and MoveIN",
        "highlights": "MoveON. Delivered measurable infrastructure cost and efficiency improvements through platform consolidation and optimisation activities. Enhanced platform observability, automation and operational resilience through expanded monitoring, logging, tracing, security automation and infrastructure standardisation initiatives.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "MoveON",
            "label": "Non-roadmap",
            "status": "",
            "text": "",
            "bullets": [
              "Strengthened automated security checks for exposed credentials and reviewed remediation progress with the team.",
              "Defined a phased modernisation plan for deployment tooling designed to avoid disruption to existing business processes.",
              "Expanded observability through SigNoz implementation, AppSync log integration, Logstash enhancements and monitoring improvements.",
              "Implemented automated DNS generation, secure Git credential management through Ansible Vault and configuration standardisation across environments.",
              "Deployed and configured the new Telemaxx MySQL (8.4) platform and integrated associated monitoring and high-availability capabilities.",
              "Completed France MySQL modernisation activities, including migration of remaining client instances and preparation for Telemaxx migrations.",
              "Progressed ADFS modernisation through Ansible-based deployment automation and validated new IDP integrations.",
              "Completed OVH France PlatformPHP1 migration and Demo JobsAPI/CentralHub migration with associated OS and PHP upgrades.",
              "Migrated MoveOn Hub using AWS RDS Blue/Green deployment and completed post-migration validation.",
              "Optimised platform infrastructure through EFS tuning, Shibboleth consolidation, Cloudflare improvements and security remediation activities.",
              "Completed AP Hotfix delivery, SSL automation enhancements, AP Sync support, monitoring onboarding and configuration inventory activities."
            ]
          },
          {
            "title": "MoveIN",
            "label": "Non-roadmap",
            "status": "",
            "text": "",
            "bullets": [
              "Completed UKF University SSO configuration.",
              "Provisioned a new RabbitMQ production server with required OS upgrades and prepared it for production cutover.",
              "Integrated MoveIN non-production environments with the new Uyuni vulnerability and patch management platform.",
              "Upgraded Elasticsearch in QA and expanded platform search capabilities."
            ]
          }
        ],
        "risks": [
          "MoveON: Telemaxx migration. Remaining platform migration activities require completion following execution challenges.",
          "MoveON: SigNoz ClickHouse. Memory utilisation requires further stabilisation.",
          "MoveON: Automox. Approval remains pending with the DPO team.",
          "MoveIN: RabbitMQ. Production cutover remains pending live integration."
        ],
        "nextWeek": [
          "MoveON: Begin Telemaxx client migrations onto the new MySQL platform.",
          "MoveON: Continue PlatformPHP1 migration activities.",
          "MoveON: Continue OS upgrade and component modernisation initiatives.",
          "MoveON: Continue configuration backup automation and Ansible modularisation/templating activities.",
          "MoveON: Continue observability rollout, Redis containerisation and platform standardisation initiatives.",
          "MoveON: Complete remaining ADFS automation and migration activities.",
          "MoveON: Apply production patching through Uyuni.",
          "MoveIN: Complete RabbitMQ production cutover and validation."
        ],
        "notes": []
      },
      {
        "week": 38,
        "team": "de-infra",
        "heading": "D&E",
        "highlights": "Successfully delivered major automation and platform engineering improvements through Jenkins/CDK integration and reusable deployment tooling. Expanded infrastructure provisioning and deployment capabilities through AWS CDK, CI/CD automation, GitHub Actions and standardised deployment workflows. Advanced platform modernisation initiatives across Outreach, HUB2, Rankings Admin, OpenSearch and NEXT environments.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "",
            "bullets": [
              "Completed end-to-end Apache Solr provisioning automation using CDK and Jenkins deployment pipelines for TU/TM/QSC.",
              "Implemented Modular CI/CD capabilities supporting automated D&E VM creation using CDK, GitLab and Ansible.",
              "Implemented GitHub Actions workflows to automate production deployments for Rankings Admin.",
              "Created a serverless OpenSearch environment to support the Partner Discovery Smart Search capability.",
              "Delivered GitHub Actions, Jenkins and infrastructure automation enhancements supporting deployment and provisioning standardisation.",
              "Completed PHP 8.4, Drupal 11 and platform upgrade activities in NEXT TU.",
              "Promoted Outreach pre-production environments into production and retired superseded infrastructure.",
              "Completed Aurora database upgrades and production readiness activities.",
              "Completed investigations confirming the QS RMS (CN) issue requires developer-side optimisation.",
              "Completed Hub1 OS upgrade preparation work and associated infrastructure readiness activities."
            ]
          }
        ],
        "risks": [
          "QS RMS (CN) CSV upload. Requires development-team optimisation.",
          "Automox. Approval remains pending with the DPO team.",
          "Bitdefender. Approval and legal documentation remain pending.",
          "Hub1 staging. Login issue investigation remains open and will require dev support."
        ],
        "nextWeek": [
          "Upgrade Analytics Tableau and align platform versions.",
          "Continue AWS CDK automation enhancements and TU non-production containerisation.",
          "Implement GitHub Actions deployment workflows for HUB2 and Rankings Admin.",
          "Progress Bitdefender approval activities.",
          "Upgrade OS on Hub1 dev and complete planned infrastructure upgrades."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "syd1",
        "heading": "QS Application System · Charlie Liu · SYD1 · week of 5–12 September 2026",
        "highlights": "QS Supergraph welcomes its new addition. The Recruitment subgraph is now federated into the eu-west-2 estate, hardened for production, imported from a snapshot of QAS-RecruitmentAdmin-GQL, backed by its own database and RDS Proxy, and fed by an Aircall sync running as a scheduled Lambda with a batched backfill path. The federation grew to take it: delivery and schema release are now scoped to each estate’s own subgraphs and Router readiness is derived from the composed supergraph, so the next subgraph lands on rails that already exist. The University Services dashboard queries it from graph.qs.com.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "QS Recruitment Admin",
            "label": "EP-9 · Uni Svcs – Productivity Dashboards",
            "status": "On track",
            "text": "Hardened for production and exposed as a federation subgraph, added to the eu-west-2 estate with its own database and RDS Proxy reachable through the SSM bastion, the Aircall sync running as a scheduled Lambda with a batched backfill ingest, and the University Services dashboard served from graph.qs.com.",
            "bullets": []
          },
          {
            "title": "QS Agent in the shell · with Caitlin Jiang",
            "label": "EP-60 · MyQS MCP",
            "status": "On track",
            "text": "Apps can now opt in to the header’s AI assistant, and the QS Agent opens from the button into a shell drawer rather than a floating bubble. Caitlin published AiChatBubble from the design-system root, controllable by its host; Cerebrum adopted the drawer on 2.1.39 and dropped its two workarounds.",
            "bullets": []
          },
          {
            "title": "Product access and admin roles · with Caitlin Jiang and Ming Shi",
            "label": "EP-87 · MyQS CX - Ph 2",
            "status": "On track",
            "text": "The CX product admin can manage across the app, scoped to the current account, with product_standard strictly read-only; No access is offered as a revoke in the product role field; QS IST members are tightened to bulk add only, with the CX product grant able to override the carve-out; and Ming tiered QS-admin access by product_role in the Auth API.",
            "bullets": []
          },
          {
            "title": "Dev estate tooling",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Apps and products synced from production (eu-west-2) into dev (us-east-1) — 3 inserts, 13 updates, applied on 10 September with dev-after identical to production across 143 rows; local dev now runs over HTTPS on local.myqsapp.com and carries into promoted alphas, with dev-estate values shipped in .env.example and promote as their source of truth. Staging still to come.",
            "bullets": []
          },
          {
            "title": "QS Auth",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "“Continue with a passkey” is offered on every post-identifier sign-in screen, rolled out to production.",
            "bullets": []
          },
          {
            "title": "Pulse",
            "label": "EP-77 · MyQS Core - Ph2",
            "status": "On track",
            "text": "The production ingest API is being fronted with pulse.api.qs.com.",
            "bullets": []
          },
          {
            "title": "Design System (qas-design) · with Caitlin Jiang",
            "label": "EP-26 · MyQS Design System",
            "status": "On track",
            "text": "2.1.35 through 2.1.39: AiChatBubble and the header AI-assistant opt-in, revoking a product by answering No access on its role menu with the default seat reported back, and a concealed fixed panel kept hidden through its flyout animation.",
            "bullets": []
          },
          {
            "title": "QS Supergraph",
            "label": "EP-77 · MyQS Core - Ph2",
            "status": "On track",
            "text": "The Recruitment subgraph federated in the eu-west-2 estate from a snapshot of QAS-RecruitmentAdmin-GQL; federation delivery and schema release scoped to each estate’s own subgraphs; Router readiness derived from the composed supergraph; and the migrate job entering the Recruitment app from CODEBUILD_SRC_DIR.",
            "bullets": []
          },
          {
            "title": "CX FE · with Caitlin Jiang",
            "label": "EP-87 · MyQS CX - Ph 2",
            "status": "On track",
            "text": "Five releases: bulk add opened to its own grant end to end, QS IST tightened, the CX product admin managing everywhere and then scoped to the current account, product_standard read-only, and the Products badge counting active subscriptions only.",
            "bullets": []
          },
          {
            "title": "MyQS FE · with Caitlin Jiang",
            "label": "EP-87 · MyQS CX - Ph 2",
            "status": "On track",
            "text": "Products listed by the account’s subscriptions rather than products it has members on, each described by its current subscription, No access as a revoke in the access dialogue, and the access editor’s catalogue widened to the grants it replaces.",
            "bullets": []
          },
          {
            "title": "HolonIQ / HolonOS · with Caitlin Jiang and Ming Shi",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Ranking and reputation report headers stick again while scrolling, promoted to qas-prod; two import cycles that crashed lazy routes were broken up, and Legacy Export was added to the Regional Rankings download menu; the hiq_internal sequence grant is recorded as applied on prod.",
            "bullets": []
          }
        ],
        "risks": [
          "Customer account smart switching needs a decision. It resolves the confusion of customer accounts holding different subscriptions.",
          "QAS CX and HolonIQ user account migration QA is in progress — fixing subscription duplication, delta users and similar."
        ],
        "nextWeek": [
          "Dev environment cleanup and staging setup continue.",
          "Options for customer account smart switching are worked up.",
          "The QAS CX and HolonIQ user account migration QA continues — subscription duplication and delta users.",
          "The Pulse production ingest API cutover to pulse.api.qs.com continues.",
          "Work on the Rankings template continues.",
          "QAS-Stars review and deployment on the Recruitment Admin pattern, and QAS-Alumni alpha promotion from prototype."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "cyber",
        "heading": "Cyber · Rowan Chapman · Network Security Manager · week of 7–12 September 2026",
        "highlights": "The cybersecurity analyst onboarding programme is now fully structured and under way, with a completed 30/60/90 plan and year-end objectives providing clear direction for capability growth within the security team.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "GRC platform evaluation (Drata)",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "On track",
            "text": "Continued the proof of value, with a focus on policy management capabilities and assessing how the platform can improve governance, compliance and audit readiness across the organisation. HyperProof evaluation to follow.",
            "bullets": []
          },
          {
            "title": "Vendor risk management platform procurement",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "On track",
            "text": "Worked with Procurement and key stakeholders to progress acquisition discussions for a vendor risk management solution to strengthen third-party risk oversight and support supplier due diligence processes.",
            "bullets": []
          },
          {
            "title": "Cybersecurity posture management platform procurement",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "On track",
            "text": "Advanced procurement and requirements discussions for a platform to improve visibility of organisational security posture and support ongoing risk reduction initiatives.",
            "bullets": []
          },
          {
            "title": "AI security proof of value",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "On track",
            "text": "Commenced a joint evaluation with Corporate IT of CrowdStrike’s AI security capabilities to assess opportunities for securing emerging AI usage and strengthening governance around AI-enabled technologies.",
            "bullets": []
          },
          {
            "title": "IT helpdesk platform evaluation",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "On track",
            "text": "Participated in an organisational proof of value for future IT helpdesk capabilities, providing security input and ensuring alignment with operational and governance requirements.",
            "bullets": []
          },
          {
            "title": "Box security posture review",
            "label": "EP-80 · Strengthen Cybersecurity",
            "status": "On track",
            "text": "Conducted the first Box use-case discovery sessions focused on reducing reliance on public shared links and identifying opportunities to strengthen information protection controls while maintaining business operations.",
            "bullets": []
          }
        ],
        "risks": [
          "Box configurations are highly interconnected. Current usage patterns appear deeply embedded across business processes. There is a risk that desired security improvements, particularly around public sharing controls, may be constrained by existing processes and require larger organisational change."
        ],
        "nextWeek": [
          "Continue Box discovery workshops to further understand business use cases, dependency chains and options for reducing the use of public shared links.",
          "Conclude the current Drata proof of value and provide recommendations on platform suitability and next steps.",
          "Conduct a vulnerability compliance review for the D&E infrastructure to validate adherence to vulnerability management policy and identify any remediation actions."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "blr2",
        "heading": "BLR2 · Simon Hall",
        "highlights": "Stars was migrated out of the MyQS Portal into a dedicated QAS-native stack (standalone front end and GraphQL backend), porting ratings views and the Asset Library alongside a redesign and a new multi-institution switcher, establishing Stars as a self-contained product. Partner Discovery gained self-service email template management for partnership outreach.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "MyQS Stars (QAS-native rebuild)",
            "label": "EP-46 · QAS Stars",
            "status": "On track",
            "text": "Ported the full Stars institution view (overview summary, category deep-dive, methodology) into the new standalone QAS front end and GraphQL backend. Migrated the Asset Library into the new stack with new schema and queries. Stood up the Stars GraphQL service (schema, data model, queries). Established data sync from Snowflake to keep the standalone service current. Added a multi-institution switcher for users managing multiple institutions. Refined star rating and score-range presentation in the existing Portal ahead of the port.",
            "bullets": []
          },
          {
            "title": "Stars (Portal)",
            "label": "EP-46 · QAS Stars",
            "status": "On track",
            "text": "Refined on-screen guidance in the category deep-dive area so users understand they can select a category and expand each indicator to review threshold, scores and how the result was achieved.",
            "bullets": []
          },
          {
            "title": "Partner Discovery",
            "label": "EP-16 · QAS Partner Discovery",
            "status": "On track",
            "text": "Delivered email templates management area for outreach. Added next/previous navigation on the opportunity detail page with position indicator. Added running total of applied filters on the apply action. Corrected per-section filter counts. Fixed QS Stars filtering so selecting a star category alone returns all rated institutions. Clarified collaboration readiness filter wording. Completed withdrawn-interest handling (IPS-2349): conversations tied to withdrawn interests are cleanly retired for both parties, with plain-language explanations for why replies are not possible, frozen conversation history and cleaned-up unread indicators.",
            "bullets": []
          },
          {
            "title": "QA",
            "label": "EP-16 · QAS Partner Discovery",
            "status": "On track",
            "text": "Completed Message Centre testing, institution and partnership directory filter testing, QPD improvements testing (navigation, visibility settings, email templates, role-based restrictions, UI messages), MyQS regression testing and live sanity testing.",
            "bullets": []
          },
          {
            "title": "MyQS dependency patching",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Updated platform dependencies to patch vulnerabilities.",
            "bullets": []
          }
        ],
        "risks": [
          "QPD back-office is inaccessible on live. Decision needed on where this will live.",
          "QAS Stars data copy. Decision needed on how data copy will be handled on the new QAS Stars stack."
        ],
        "nextWeek": [
          "MyQS: fix issues arising in the new QAS Stars and support live fixes in qs-portal.",
          "Partner Discovery: use AI to create an internal QS status page (data visualisation); continue QPD improvements and feedback items.",
          "QA: test newly assigned QPD stories, execute test cases and retest resolved defects."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "blr1",
        "heading": "BLR1 · Simon Hall",
        "highlights": "Advanced the new sprint across HUB2, HUB1 and QPD, while defining the institution eligibility and data-filtering approach for QPD to align with Top Universities and TopMBA listings.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "HUB2",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Progressed batch client publishing activities to support the rollout of institution updates and ensure approved changes are reflected across downstream systems. Continued QSA Directory enablement activities for a batch of clients. Investigated and progressed resolution efforts for the programme editing issue causing false “programme already opened in another tab” warnings. Continued analysis of the logo update issue in General Details, including investigation into potential Cloudflare-related impacts. Supported ongoing investigation of the Financial Aid bulk upload issue where uploaded data is not being reflected in the user interface despite successful processing.",
            "bullets": []
          },
          {
            "title": "HUB1",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Continued delivery of minor fixes and usability improvements to ranking forms.",
            "bullets": []
          },
          {
            "title": "MyQS Partnership Discovery (QPD)",
            "label": "EP-16 · QAS Partner Discovery",
            "status": "On track",
            "text": "Defined institution eligibility criteria based on Top Universities and TopMBA listings. Established the application-level filtering approach required to curate institution records using the existing Snowflake data source. Progressed the design and implementation approach for maintaining consistent institution data across QPD and wider QS platforms.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Continue progressing HUB2 sprint commitments, including resolution of the programme editing, logo update and Financial Aid bulk upload issues.",
          "Complete remaining batch client publishing and QSA Directory enablement activities.",
          "Advance implementation of the institution eligibility and filtering logic for QPD.",
          "Continue delivering minor fixes and improvements for HUB1 ranking forms."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "ecu1",
        "heading": "ECU1 · Jonnathan Pena",
        "highlights": "On Friday 12 September, the Customer Success team has a demo scheduled with IBM. The team confirmed with QA and the leads from both ECU1 and ECU2 that the platform for this client is functioning according to the customer’s requirements. As of 10 September at 10:30 PM Ecuador time, all inconsistencies were corrected and all feature flags were configured in preparation for the presentation.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "IBM demo certification",
            "label": "EP-19 · 1 Mentor IBM",
            "status": "Shipped",
            "text": "The following items were completed and deployed to production, with certification completed for IBM as of 10 September: Career Goals Explore bug with occupation match and skill set; Wizard Step 2 goal recommendations not shown; Ikigai recommending occupations not included in the IBM catalogue; Career Goals Explore by Field bug with skill sets and match; Learning Paths Create My Path labels; Recommendations with no occupations recommended by skill set; landing page updated to Career Goals; Career Goals Explore 1M suggestions not shown; Explore by Career Field filter; LP My Paths two empty states; Wizard Step 1 institution limit; and Activate LP in Career Goals My Objectives.",
            "bullets": []
          },
          {
            "title": "1 Mentor core fixes",
            "label": "Non-roadmap",
            "status": "Shipped",
            "text": "Hid the provider filter when only one provider is available, and fixed matching issues in recommended occupations.",
            "bullets": []
          }
        ],
        "risks": [
          "Microsoft SSO for 1 Mentor staging. The team needs the ability to configure Microsoft SSO to access the staging environment using corporate accounts, enabling more accurate QA certification testing. Martin Ochoa may have details on the required Microsoft account configuration."
        ],
        "nextWeek": [
          "Deploy a new release including authentication inconsistency reporting via email (SendGrid), technical debt items, accessibility improvements and fixes for low-impact visual bugs."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "ecu2",
        "heading": "ECU2 · Paula Jiminez",
        "highlights": "The site’s quiz data now has a real technical block against bots and scrapers, not just an advisory signal, closing the gap flagged last week where a crawler ignoring the rules could still reach the data directly. All work was verified by QA before shipping.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Site security hardening",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Shipped",
            "text": "Shipped a server-side block that stops bots and scrapers from pulling quiz data directly, closing the gap the advisory-only rules (robots.txt, headers) could not close alone. Also passed Google’s standard CSP security check and fixed a false positive blocking a legitimate embedded form. Automated tests now verify protections stay in place going forward. QA-verified.",
            "bullets": []
          },
          {
            "title": "Search and AI crawl policy",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Shipped",
            "text": "Signed off by the Tech Lead this week; design finalised.",
            "bullets": []
          },
          {
            "title": "Career Match analytics",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Shipped",
            "text": "Fixed data-accuracy issues found in Product Owner review: option labels now show the actual text students saw (not internal codes), a stale-data leak on the homepage was fixed and a duplicate tracking event was eliminated. QA-verified across multiple test runs.",
            "bullets": []
          },
          {
            "title": "General upkeep",
            "label": "Non-roadmap",
            "status": "Shipped",
            "text": "Routine security patches on a few open-source packages flagged by the dependency scanner; no functional change.",
            "bullets": []
          }
        ],
        "risks": [
          "Microsite moving to urgent-only mode. Starting next week, the Microsite pod addresses only urgent and priority items; no further general feature work is queued."
        ],
        "nextWeek": [
          "Decide on and flip the strict security layer from monitor-only to fully enforced (time-sensitive, likely the one non-urgent item still open).",
          "Going forward: only urgent and priority items addressed on the Microsite."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "movein",
        "heading": "MoveIN · Mahesh",
        "highlights": "Smart Match Assistant and AI Email Template Builder both advanced with clearer review workflows, better email compatibility, iterative editing, prompt reuse and improved brand integration. Platform reliability and data security improved through centralised SharePoint storage (QS Stars), SSO infrastructure migration, stability fixes and ongoing security maintenance.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Smart Match Assistant",
            "label": "EP-89 · MoveIN Features",
            "status": "On track",
            "text": "Teams can review AI matching activity more clearly through scan history, improved confirmation and rejection guidance and run-level performance visibility.",
            "bullets": []
          },
          {
            "title": "AI Email Template Builder",
            "label": "EP-89 · MoveIN Features",
            "status": "On track",
            "text": "Generated emails are more consistent across Outlook and Gmail; iterative editing, prompt history, spam checks and automated brand placement reduce manual effort.",
            "bullets": []
          },
          {
            "title": "Client evidence centralised in SharePoint (QS Stars)",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Shared storage reduces the risk of data loss and makes evidence easier for the team to access.",
            "bullets": []
          },
          {
            "title": "MoveIN SSO infrastructure migrated",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "All Shibboleth (SSO) clients have transitioned off legacy hardware, improving reliability, performance and backup resilience.",
            "bullets": []
          },
          {
            "title": "Scheduled task visibility and reminders",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Users receive three days’ notice before automations run and can track scheduled tasks directly from the MoveIN console.",
            "bullets": []
          },
          {
            "title": "Platform reliability and security",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Long-idle session issues fixed and essential security maintenance completed for the back-office interface.",
            "bullets": []
          }
        ],
        "risks": [
          "OpenAI Assistants API deprecation. Support is being deprecated; alternatives are being assessed to avoid disruption to the Lumina assistant capability.",
          "RabbitMQ upgrade requires validation. The upgraded version is being monitored in the demo environment; if no further issues emerge, the live upgrade is planned for the coming weeks."
        ],
        "nextWeek": [
          "SharePoint workflow improvement: newly merged documents accessible immediately without manual refresh.",
          "Multi-language support: key fields such as Gender and Country will display correctly in Spanish and other languages.",
          "AI Email Template Builder: brand logos and colours will load reliably, with no-code controls for image alignment.",
          "Automated Brand Setup v2: branding details pulled from school websites to reduce manual profile setup.",
          "Smart Match Assistant: scan history view for visibility into previous matching runs.",
          "Penetration-test report validation: review findings and identify required security actions."
        ],
        "notes": [
          "MoveIN Admin Console: security-focused validation under way to strengthen platform readiness.",
          "Brand Profile testing advanced: brand colour extraction and email footer defaults being validated for consistent branding.",
          "Smart Match Assistant changes verified: updated functionality and user interface improvements being tested before release.",
          "Data Management enhancements reached final testing: CSV import improvements and Back Office UI fixes nearing completion.",
          "Email Template improvements tested: font library sorting and open-source font integration being validated.",
          "Simplified Chinese localisation progressed: reference and non-reference list updates being tested."
        ]
      },
      {
        "week": 37,
        "team": "events",
        "heading": "Digital and Events · Catarina Cunha · Events and Drupal · week of 7–11 September 2026",
        "highlights": "",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "GME rankings",
            "label": "Non-roadmap",
            "status": "Ready for release",
            "text": "Ready for the release on the 16th.",
            "bullets": []
          },
          {
            "title": "Drupal clean-up",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "On track",
            "text": "In validation for release next week.",
            "bullets": []
          },
          {
            "title": "CMT module conversion from React to Drupal",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "On track",
            "text": "Waiting testing. UI changes reported during the testing phase are required.",
            "bullets": []
          },
          {
            "title": "TU performance investigation",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "Done",
            "text": "The investigation has been completed and based on it new tickets will be added to implement.",
            "bullets": []
          },
          {
            "title": "Agenda builder",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Testing is ongoing.",
            "bullets": []
          },
          {
            "title": "QS Future Forum",
            "label": "Non-roadmap",
            "status": "On track",
            "text": "Ongoing as expected.",
            "bullets": []
          },
          {
            "title": "Outreach V2 code removal and clean-up",
            "label": "Non-roadmap",
            "status": "Shipped",
            "text": "Complete and released.",
            "bullets": []
          },
          {
            "title": "New servers",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "On track",
            "text": "Last testing phase has been completed. Planned release for next week.",
            "bullets": []
          }
        ],
        "risks": [
          "Angular upgrade. New servers testing continues.",
          "Drupal upgrade. Waiting now for the new environment setup for the last round of testing."
        ],
        "nextWeek": [
          "TU/TM: release on the 17th, due to rankings release on the 16th; depending on traffic the team might have to postpone it to the 21st.",
          "Outreach/Events: new servers release planned on the 17th.",
          "Latam rankings: preparation for this release is waiting data."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "qsapply",
        "heading": "QS Apply (Appian) · Sreeram Sreekumar",
        "highlights": "The team continues to focus on Appian production support and issue resolution, while also progressing with the discovery phase for the Appian migration.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Appian migration discovery",
            "label": "EP-54 · Appian to HubSpot Migration",
            "status": "On track",
            "text": "The discovery phase is now under way, with stakeholder workshops initiated to understand the current-state processes, system usage, pain points and opportunities for improvement across Lead Management and Admissions.",
            "bullets": []
          },
          {
            "title": "Production support",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Visa application status: resolved an issue where visa applications were displaying incorrect statuses, improving data accuracy and hygiene. Menu display issue: resolved an issue with a menu not displaying correctly following a recent Appian vendor software update. Lead allocation: investigated an issue where leads were not being distributed evenly across agents; confirmed no underlying system defect; configuration adjustments implemented and lead allocation now operating as expected.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Continue with scheduled stakeholder workshops as part of the Appian migration discovery phase.",
          "Capture current-state processes, pain points, gaps and future-state requirements to support migration planning and solution assessment."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "ubsdev",
        "heading": "UBS Development · Mohd Azhar Mohd Razman",
        "highlights": "The Appian development team have been granted necessary access to HubSpot and have commenced work on developing integration replacements for enquiry forms within HubSpot. This additional resource has increased the workforce by four and will allow the team to complete this migration much faster. Once the replacements are complete, this will allow QS to decommission its legacy APIs, reduce AWS spend and take a step closer to decommissioning legacy CRMs.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Enquiry form (API) replacements",
            "label": "EP-54 · Appian to HubSpot Migration",
            "status": "On track",
            "text": "Replacement for the first of ten clients (ACU) is ready for testing. Work has also commenced on replacements for two other clients (Keele and RCA).",
            "bullets": []
          },
          {
            "title": "Informatica replacement (S3 flat file)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "Griffith’s replacement is awaiting deployment, pending API replacement. Brighton replacement has been developed and is awaiting testing. Stirling development work is under way. LSBU replacement work is paused, pending tender outcome.",
            "bullets": []
          },
          {
            "title": "Informatica replacement (Keystone)",
            "label": "EP-88 · Decommission Informatica",
            "status": "On track",
            "text": "Two of three replacements (RCA and ECU) have been built in the test environment and are now ready for testing. Initial round of testing has concluded for RCA with a few small fixes needed.",
            "bullets": []
          },
          {
            "title": "Appian production support",
            "label": "Non-roadmap",
            "status": "Done",
            "text": "Supported QS Apply with production fixes this week (see QS Apply section).",
            "bullets": []
          }
        ],
        "risks": [
          "HubSpot Contact Matching unavailable in test. Full integration testing cannot proceed until Contact Matching is available in the test environment. The team is working to resolve this.",
          "University of London sandbox licensing. Missing required licensing to proceed with development. Simon is arranging access.",
          "LSBU paused. S3 flat-file integration on hold pending tender outcome.",
          "Informatica contract ends 22 December 2026. Whether it can be fully decommissioned depends on finalising the York replacement, which is in discussion with Microsoft directly. Procurement has been advised of requirements if the contract needs to extend."
        ],
        "nextWeek": [
          "Continue building the rest of the HubSpot integration.",
          "Roll out this week’s fixes once testing is complete.",
          "Continue the Informatica replacement work for two more institutions (Stirling and ECU)."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "cx",
        "heading": "CX Systems · Fahad Door",
        "highlights": "Successfully progressed the Sakari sender ID rollout by completing setup and testing across multiple countries, while continuing to strengthen Aircall, IVR and WhatsApp processes and documentation.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Aircall",
            "label": "Non-roadmap",
            "status": "",
            "text": "onboarded new users; followed up with Support regarding the data provided by Sean from the Telco; currently awaiting their response.",
            "bullets": []
          },
          {
            "title": "IVR",
            "label": "Non-roadmap",
            "status": "",
            "text": "continued upgrades for the remaining universities; discussed Derby IVR enhancements with SS.",
            "bullets": []
          },
          {
            "title": "Sakari",
            "label": "Non-roadmap",
            "status": "",
            "text": "set up alphanumeric sender IDs for all existing universities; tested unregistered sender IDs with recipients in Nigeria and Vietnam; coordinated UAE sender IDs for specific universities; coordinated QS Events setup with Sebastian.",
            "bullets": []
          },
          {
            "title": "Documentation",
            "label": "Non-roadmap",
            "status": "",
            "text": "prepared handover and process documentation for Aircall and Twilio components currently in use.",
            "bullets": []
          },
          {
            "title": "Niswey",
            "label": "Non-roadmap",
            "status": "",
            "text": "coordinated to obtain the penetration-test report for the Compliance team; attended setup meeting with Sebastian.",
            "bullets": []
          },
          {
            "title": "Data",
            "label": "Non-roadmap",
            "status": "",
            "text": "coordinated with the Data team to investigate data discrepancies and verify Aircall call properties.",
            "bullets": []
          }
        ],
        "risks": [
          "Sakari credentials. QS Events Sakari credentials are required.",
          "Sender ID validation. Performance will be validated through testing and production results. Sender IDs have already been set up for existing clients to monitor performance. Final results are expected once registration completes in the destination countries.",
          "SS documentation outstanding. Awaiting the required documentation and information from the SS team to complete sender ID registrations in each destination country."
        ],
        "nextWeek": [
          "Sakari: coordinate with Sakari on sender ID registrations; coordinate with SS managers to collect the required information for each university; set up QS Events SMS integration with HubSpot.",
          "Documentation: continue handover and documentation with Yugan and Dil.",
          "Aircall: discuss property mapping from HubSpot to reports with the Data team.",
          "Freshservice ITSM: review the platform and share feedback and recommendations."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "mimo",
        "heading": "MIMO",
        "highlights": "MoveON. Successfully completed the migration of the OVH France and Telemaxx PlatformPHP2 servers from CentOS 7 to Ubuntu 24.04, including post-migration validation and functionality testing. Completed the MoveON France MySQL Percona cluster migration, stabilising the new cluster, resolving recurring outages and DNorm-related issues, and migrating the majority of remaining client instances. Continued MoveON modernisation through PHP 8.5 upgrades, Redis/Memcached containerisation, observability improvements, XCP-ng enhancements and platform migration activities. Upgraded the Advanced Publisher Telemaxx with a new MySQL 8.4.7 environment and completed France Advanced Publisher migration activities. Introduced internal secret scanning, manual production approval controls and deployment workflow improvements to strengthen governance, reduce risk and improve auditability across infrastructure repositories.\n\nMoveIN. Completed the MyQS Production MySQL upgrade from 8.0 to 8.4, resolving SSL transport configuration issues and validating application connectivity post-upgrade. Completed the MoveIN Shibboleth migration from Telemaxx to AWS. Upgraded MoveIN Elasticsearch QA from version 7.13 to 7.17.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "MoveON",
            "label": "Non-roadmap",
            "status": "",
            "text": "",
            "bullets": [
              "Completed migration of OVH France and Telemaxx PlatformPHP2 servers to Ubuntu 24.04.",
              "Completed and automated PHP 8.1 to 8.5 upgrades for Platform, CIMS, Jobs API and CentralHub environments, including migration of Demo CIMS to PHP 8.5.",
              "Completed the France MySQL Percona cluster migration and resolved migration-related application and cluster issues.",
              "Migrated approximately 45 client instances to the new France MySQL cluster while addressing configuration and application issues throughout the transition.",
              "Created the Advanced Publisher Telemaxx MySQL 8.4.7 VM and completed Advanced Publisher France migration activities.",
              "Migrated MoveOn Hub to a new AWS platform using RDS Blue/Green deployment and completed post-migration validation.",
              "Implemented SigNoz on the PlatformRouter staging environment with application log tracing and dashboard visibility.",
              "Completed staging deployment of the SP application using Docker and PHP 8.5, including IDP configuration and validation.",
              "Continued Redis/Memcached containerisation across Canada and France environments.",
              "Performed Telemaxx XCP-ng maintenance, VM validation, NTP automation and platform regression testing.",
              "Enhanced Percona monitoring and Galera alerting for the new MySQL platforms.",
              "Tested SSL automation on the MoveOn load balancer and developed supporting Jenkins/Ansible automation.",
              "Added new MySQL nodes and MGH hosts into Zabbix monitoring."
            ]
          },
          {
            "title": "MoveIN",
            "label": "Non-roadmap",
            "status": "",
            "text": "",
            "bullets": [
              "Completed MoveIN Shibboleth migration from Telemaxx to AWS.",
              "Upgraded Elasticsearch in MoveIN QA from version 7.13 to 7.17."
            ]
          }
        ],
        "risks": [
          "MoveON. PlatformPHP1 root-volume migration remains pending for OVH France and Telemaxx. Continued monitoring is required for the France MySQL environment following migration completion. Telemaxx MySQL cluster creation remains pending.",
          "MoveIN. RabbitMQ production upgrade remains pending approval and scheduling. Bitdefender legal documentation and approvals remain outstanding."
        ],
        "nextWeek": [
          "MoveON: complete France standalone MySQL migration activities; create the Telemaxx MySQL 8.4.7 cluster; proceed with PlatformPHP1 migration activities; continue OS upgrades; progress SigNoz PHP integration in staging; continue configuration backup automation and Ansible modularisation; complete SP IDP validation and staging cleanup.",
          "MoveIN: upgrade RabbitMQ in the production environment."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "de-infra",
        "heading": "D&E",
        "highlights": "Confirmed the QSChina RMS CSV upload issue is application-code related after ruling out infrastructure, database platform and scaling constraints. Completed the modular CI/CD implementation, including AWS instance provisioning using CDK TypeScript, GitLab automation, subnet support and Ansible-driven configuration management for D&E VM creation. Evaluated Typesense Cloud as a potential alternative to Algolia. Completed the Outreach pre-production environment setup. Resolved SSL hostname mismatch issues highlighted by the security team, through SendGrid Link Branding. Progressed D&E infrastructure automation through reusable AWS CDK templates and deployment pipelines.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "",
            "bullets": [
              "Enabled Apsara RDS logging and confirmed the QS RMS (CN) issue reproduces on both RDS and standalone MySQL environments, indicating application-side optimisation is required.",
              "Installed Node.js and NPX on the Jenkins slave and created a Jenkins automation pipeline for CDK-based VM provisioning.",
              "Migrated AWS users from legacy IAM accounts to AWS SSO.",
              "Updated TU/TM autoscaling base templates and deployment automation.",
              "Provided D&E AWS asset information for security PoC activities.",
              "Completed CISO review documentation for Automox adoption.",
              "Resolved Hub1 staging environment issues ahead of planned OS upgrade activities.",
              "Completed curator-prod-qsiu AWS RDS termination, including final snapshot retention.",
              "Performed initial investigation and planning activities for the Analytics Tableau platform upgrade."
            ]
          }
        ],
        "risks": [
          "QSChina RMS CSV upload. Requires development-team optimisation.",
          "Automox. Approval remains pending with the DPO team.",
          "Bitdefender. Approval and legal documentation remain pending.",
          "Hub1 staging. Login issue remains under investigation."
        ],
        "nextWeek": [
          "Upgrade PHP from 8.3 to 8.4 in NEXT TU.",
          "Perform Drupal 11 upgrade activities in NEXT TU.",
          "Continue QS RMS (CN) investigation with the application team.",
          "Upgrade Analytics Tableau to the latest version and align it with analytics-l-internal.",
          "Promote new Outreach pre-production servers into production.",
          "Continue development and optimisation of AWS CDK automation."
        ],
        "notes": []
      },
      {
        "week": 37,
        "team": "ubs",
        "heading": "UBS",
        "highlights": "Scheduled September maintenance activities for University Services production infrastructure. Completed Aberdeen and GCU Microsoft 365 domain changes and validated HubSpot functionality. Conducted Product IT Active Directory access review. Continued HubSpot, Snowflake, compliance and operational improvement activities.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "",
            "label": "Non-roadmap",
            "status": "",
            "text": "",
            "bullets": [
              "Engaged key stakeholders to schedule September monthly maintenance for University Services AWS production infrastructure.",
              "Reviewed and escalated HubSpot broadcast mail deliverability issues with Digital Outreach.",
              "Implemented Aberdeen and GCU Microsoft 365 domain changes and validated functionality with the HubSpot project team.",
              "Conducted Product IT Active Directory access review.",
              "Provided guidance on Sunway domain authorisation issues in HubSpot.",
              "Reviewed Okta access controls with Compliance.",
              "Created Lambda functions in APAC and EMEA regions to archive exported files.",
              "Exported HubSpot client data.",
              "Rotated Snowflake user key pairs older than 180 days.",
              "Created Snowflake service accounts for Data Science teams and assigned permissions.",
              "Implemented Snowflake storage integration with GCP."
            ]
          }
        ],
        "risks": [],
        "nextWeek": [
          "Conduct September monthly maintenance for University Services DEV/STG and UAT infrastructure.",
          "Conduct an access review for University Services Google Cloud Platform.",
          "Re-schedule HubSpot client data export activities.",
          "Complete Snowflake key pair rotation.",
          "Perform EMEA production Oracle database test recovery."
        ],
        "notes": []
      },
      {
        "week": 36,
        "team": "syd1",
        "heading": "QS Application System · Charlie Liu · SYD1 · week of 29 August – 5 September 2026",
        "highlights": "A post-launch fixes week. With MyQS on my.qs.com and HolonIQ on holoniq.qs.com, the work turned to what the launches surfaced: the audit views got a date scope and their feeds unbound, scheduled subscriptions stopped reading as expired across CX and MyQS, and tables became resizable and self-sizing everywhere. Two things were also stood up rather than repaired: the Seat/Peer quantity backfill closed out at 734 applied and confirmed on both sides, and QS Recruitment Admin went live as an alpha through a new prototype-to-alpha promotion path.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Audit and compliance surface",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "The audit views gained a date scope, the auth and access feeds were unbound from each other, and page views are date-filtered and aggregated by app. Behind them, the Pulse event graph is now gated on the CX product entitlement and compliance_log reads are scoped by row-level security, both promoted to eu‑west‑2. The Auth API’s own internal CRUD rows stay out of the auth view.",
            "bullets": []
          },
          {
            "title": "QS Recruitment Admin",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "A new alpha app, live end to end: promoted out of the university-services-dashboard prototype, registered as an alpha in the app registry, given a launcher tile, allowed on MyQS in the production tenant, and reading its auth API, claim namespace and app domain from qas/auth0. The prototype-to-alpha promotion workflow that produced it is now a repeatable path.",
            "bullets": []
          },
          {
            "title": "HolonIQ / HolonOS",
            "label": "EP-20 · HIQ – QAS Auth Migration",
            "status": "On track",
            "text": "Curation and admin editing moved off the Auth0 Admin role onto the Curate account feature, customer-admin features gated on the QAS CXACCESS product admin role, CX admins resolving as hiq_admin in the Postgres role, and LegacyPulse mounted, each promoted from qas-staging to qas-prod.",
            "bullets": []
          },
          {
            "title": "Seat and subscription data",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "The Seat/Peer quantity backfill closed: 734 quantities applied and confirmed on both sides (SEAT 383, PEER 351), with seat_count derived from SEAT line quantity under an owner ruling, shadow and native subscription rows unified in the account_view merge, and the ZXH0 seat-quantity conflict resolved by shelving migration 011. RLS audit tooling and the delta2 migrations landed alongside it.",
            "bullets": []
          },
          {
            "title": "Tracking and consent",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "Pulse and the HubSpot embed now run on the production estate only, and LegacyPulse hosts can override the page-view mode for pages that need it.",
            "bullets": []
          },
          {
            "title": "Design System (qas-design) · with Lorenzo and Caitlin Jiang",
            "label": "EP-26 · MyQS Design System",
            "status": "On track",
            "text": "2.1.27 through 2.1.35: the Calendar component exported from the package root, the block cards unified into one Card with a variant each, resizable self-sizing columns, the released roleOptions contract held to privileged-first lists with a last-entry fallback, and the launcher registry brought in line: Factfiles renamed, QS Analytics kept on the holoniq app id, and QS Recruitment Admin added as an alpha.",
            "bullets": []
          },
          {
            "title": "CX FE · with Caitlin Jiang",
            "label": "CX Admin 2",
            "status": "On track",
            "text": "The detail users tab filterable by role, status and product access, with its count labelled matched rather than total; products not yet started tagged Scheduled instead of Expired, with licence figures sourced from their scheduled terms; and resizable self-sizing columns swept across every table, including the embargo list and user-detail cards. 17 merged PRs.",
            "bullets": []
          },
          {
            "title": "MyQS FE · with Caitlin Jiang",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "‘Scheduled’ now drawn wherever a subscription’s status appears, with tests pinning how a subscription’s window is read and how the scheduled state travels through the catalogue and the grant path; the compliance log’s columns typed as TableView types them; and resizable columns adopted.",
            "bullets": []
          },
          {
            "title": "QS Supergraph",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "The Pulse event graph gated on the CX product entitlement and compliance_log given row-level security, both promoted to eu‑west‑2; QS Recruitment Admin registered as an alpha app, with its registry migration corrected off the product.created_by foreign key; and contract artefacts synced to production release 622558fd.",
            "bullets": []
          }
        ],
        "risks": [
          "Customer account smart switching needs a decision. It resolves the confusion of customer accounts holding different subscriptions."
        ],
        "nextWeek": [
          "Options for customer account smart switching are worked up.",
          "The dev environment cleanup and staging setup continue.",
          "Alpha feedback on QS Recruitment Admin is gathered.",
          "The Rankings template is the next app, already a prototype branch in the prototype repo."
        ],
        "notes": []
      },
      {
        "week": 36,
        "team": "ciso",
        "heading": "Security · Senthil Kumar · Chief Information Security Officer · week of 31 August – 5 September 2026",
        "highlights": "",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Closed out the MoveON AP security incident, including remediation, client communications and security improvement actions.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-74 · Strengthen Cyber Security",
            "status": "",
            "text": "Progressed penetration testing activities for MoveON, MoveIN and 1 Mentor, with an enhanced focus on access control and API security testing.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-74 · Strengthen Cyber Security",
            "status": "",
            "text": "Continued driving the BCP/DR programme across key QS products, including recovery planning, BIA workshops and resilience-testing preparation.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Completed vendor due diligence for D&E environment patching using Automox.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Drafted the AI agent business-risk mitigation, with action items.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [],
        "notes": []
      },
      {
        "week": 36,
        "team": "mimo",
        "heading": "MIMO",
        "highlights": "",
        "highlightBullets": [
          "MoveON: completed the migration of the AWS Canada PlatformPHP servers from CentOS 7 to Ubuntu 24.04, including post-migration validation and functionality testing.",
          "MoveON: progressed the France MySQL 8.4.7 migration, with approximately 50 per cent of client migrations completed and migration-related performance issues investigated and remediated.",
          "MoveON: completed the Advanced Publisher France migration to the new web server and MySQL platform, including hotfix deployment, backup validation and security enhancements.",
          "MoveON: improved platform resilience through XCP-ng storage monitoring, Redis and Memcached containerisation, PMM upgrades, security patching, automation improvements and observability initiatives.",
          "MoveIN: developed an Ansible playbook and AWS CDK template to automate Elasticsearch, Kibana and OS upgrades while preserving existing users, namespaces and dashboards."
        ],
        "delivery": [
          {
            "title": "MoveON",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "",
            "bullets": [
              "Completed migration of the AWS Canada PlatformPHP servers to Ubuntu 24.04.",
              "Configured XCP-ng RAID disk and local storage monitoring using Zabbix LLD and Trapper across the Telemaxx XCP-ng servers.",
              "Completed configuration and preparation of the PlatformPHP and AdvPub Webmaster servers in OVH France and Telemaxx for upcoming migrations.",
              "Configured the MoveOnHub Live migration from Ubuntu 18.04 to Ubuntu 24.04, including PHP upgrades.",
              "Completed approximately 50 per cent of the France MySQL 8.4.7 migration programme and resolved migration-related application performance issues.",
              "Completed the Advanced Publisher France migration to a new web server and MySQL platform, including hotfix deployment and backup validation.",
              "Applied planned security patching across the AWS Canada MoveON environments through Uyuni patch management.",
              "Upgraded the PMM monitoring servers in France and Telemaxx, including security and lifecycle improvements.",
              "Completed the Redis and Memcached migration to containers in the London environment and enabled Zabbix monitoring for the new services.",
              "Strengthened Advanced Publisher security by blocking unwanted wp-json API endpoint requests through Cloudflare.",
              "Progressed Jenkins hotfix automation by integrating regression testing and defining an approach for automated and on-demand execution.",
              "Continued AP migration support, Cloudflare security improvements, backup enhancements, AP Sync issue resolution, uptime reporting, GitLab automation testing, SSL automation and operational support."
            ]
          },
          {
            "title": "MoveIN",
            "label": "EP-84 · MIMO Infra Remediation",
            "status": "",
            "text": "",
            "bullets": [
              "Developed an Ansible playbook and AWS CDK automation template covering Elasticsearch, Kibana and OS upgrades.",
              "Continued the Shibboleth SSO implementation for the remaining City University environments.",
              "Upgraded and prepared the Outreach pre-production environment."
            ]
          },
          {
            "title": "MoveIN",
            "label": "EP-74 · Strengthen Cyber Security",
            "status": "",
            "text": "",
            "bullets": [
              "Executed penetration-testing activities by running the commands provided by the external penetration-testing team and supplying the resulting outputs.",
              "Provided the complete D&E AWS asset inventory to support Rowan’s security PoC activities."
            ]
          }
        ],
        "risks": [
          "MoveON. The France MySQL migration remains in progress and requires continued monitoring and migration of the remaining client environments; the Redis/Memcached containerisation rollout requires continued validation and monitoring; and continued testing and validation are required before production deployment of the Advanced Publisher file-access restrictions.",
          "MoveIN. The RabbitMQ production OS upgrade awaits approval from the MoveIN development team, and the Elasticsearch upgrade validation awaits confirmation from the testing team."
        ],
        "nextWeek": [
          "MoveON: complete the France MySQL 8.4.7 migration programme and France security package upgrades; plan and initiate the Telemaxx MySQL upgrade; proceed with the PlatformPHP migrations in Telemaxx and OVH France; continue the MoveOnHub Live migration; complete the Jenkins regression-testing integration; complete the Redis/Memcached container migration in Canada; and continue SSL and GitLab automation testing, configuration backup and Ansible modularisation, and AWS cost optimisation reviews.",
          "MoveIN: upgrade Elasticsearch in the demo environment, continue modular AWS CDK templates for infrastructure provisioning, and progress the RabbitMQ production upgrade following approval."
        ],
        "notes": []
      },
      {
        "week": 36,
        "team": "de-infra",
        "heading": "D&E",
        "highlights": "",
        "highlightBullets": [
          "Completed the Outreach pre-production environment setup.",
          "Evaluated Typesense Cloud as a potential alternative to Algolia and initiated further assessment.",
          "Progressed infrastructure automation through reusable AWS CDK templates and deployment tooling.",
          "Completed the CISO review activities for Automox adoption and provided the supporting documentation for approval."
        ],
        "delivery": [
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Completed the Outreach pre-production environment deployment.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-74 · Strengthen Cyber Security",
            "status": "",
            "text": "Provided complete D&E AWS asset inventory details to support security PoC activities.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "",
            "text": "Updated the TU/TM autoscaling base template and deployment automation configuration.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Developed and refined reusable AWS CDK templates for D&E infrastructure provisioning.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Provided the supporting documentation required to complete the Automox CISO review process.",
            "bullets": []
          }
        ],
        "risks": [
          "Automox. Deployment awaits DPO approval before proceeding with D&E Linux OS patching.",
          "Bitdefender. The NDA documentation remains outstanding.",
          "QSCHINA. The CSV upload issue in QSC forms via Drupal administration remains under investigation and may require dev review."
        ],
        "nextWeek": [
          "Continue the QS RMS (CN) CSV upload investigation.",
          "Progress the SigNoz staging implementation and validation.",
          "Continue AWS CDK automation development and testing.",
          "Progress Bitdefender onboarding and approval activities."
        ],
        "notes": []
      },
      {
        "week": 36,
        "team": "ubs",
        "heading": "UBS",
        "highlights": "",
        "highlightBullets": [
          "Completed the Okta SSO implementation for Aircall.",
          "Completed monthly maintenance across the UBS AWS environments.",
          "Reviewed University Services mail-domain deliverability and provided recommendations to stakeholders.",
          "Supported HubSpot refresh, CRM data activities, auditing, mailbox lifecycle management and operational improvements."
        ],
        "delivery": [
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Supported client delivery activities, including DPA feedback, mailbox reviews, domain-verification support and client-mail integration.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Completed scheduled maintenance, AWS access reviews and internal audit activities across the UBS environments.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-82 · Aurora Data Integrity",
            "status": "",
            "text": "Progressed HubSpot and CRM data-refresh activities across the APAC and EMEA regions, including data exports, scheduling, data sharing and RECON loading.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Resolved the New Relic invoicing issue in collaboration with the vendor.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Reviewed and actioned HubSpot notifications and mailbox lifecycle activities, including decommissioning obsolete Microsoft Graph applications and unused mailboxes.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Progressed the DEV/UAT database upgrades and the Synergy replication checks.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Created new Snowflake service accounts for Ranking and Validation and granted the required permissions.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Conduct the Product IT Active Directory access review.",
          "Implement the Aberdeen domain changes in Microsoft 365 and validate the HubSpot impacts.",
          "Complete Snowflake key-pair validation and rotation activities.",
          "Continue the HubSpot client-data export activities."
        ],
        "notes": []
      },
      {
        "week": 36,
        "team": "blr2",
        "heading": "BLR2 · Simon Hall",
        "highlights": "MyQS login security was hardened: the OAuth cookies (state, PKCE verifier, nonce) locked down with HttpOnly, SameSite, Secure and short TTLs, tied to the actual deployment protocol rather than NODE_ENV, with platform dependencies updated to patch known vulnerabilities. Partner Discovery’s Message Centre was delivered end to end, so institutions can now hold in-app conversations with prospective partners without leaving the module. Stars rolled out QS-branded typography (PP Telegraf) app-wide, aligning dashboards, popups, exports and navigation with QS branding.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "MyQS",
            "label": "EP-31 · QAS Auth – MyQS 1.0",
            "status": "On track",
            "text": "Hardened the NextAuth OAuth flow with explicit cookie configurations for state, pkceCodeVerifier and nonce (HttpOnly, SameSite=lax, 15-minute TTL, __Secure- prefix on HTTPS); useSecureCookies now derives from the NEXTAUTH_URL protocol; and stale-cookie cleanup fixed in the Auth0 sign-in route. Corrected inaccurate Latin America regional stats in the Rankings overview, restricted the Data Synchronisation area to super-admin users, fixed a login issue where a user’s linked institution could be incorrectly reset, fixed the institution selector dropdown filtering in Stars, and updated platform dependencies to patch vulnerabilities.",
            "bullets": []
          },
          {
            "title": "Stars",
            "label": "EP-46 · QAS Stars",
            "status": "On track",
            "text": "Restructured the Stars navigation menu with clearer icons and reorganised sub-sections (Overall Summary, Methodology, Category Deep Dive); redesigned the ratings summary and category deep-dive for clearer presentation; migrated app-wide typography to PP Telegraf across dashboards, popups, exports and navigation; and fixed post-rollout regressions (multiselect, tooltip import).",
            "bullets": []
          },
          {
            "title": "Partner Discovery",
            "label": "EP-16 · QAS Partner Discovery",
            "status": "On track",
            "text": "Delivered the full Message Centre: a conversation inbox, threaded chat view, composer, floating launcher and a dockable window accessible from anywhere in the module; edit and delete with undo; real-time new-message alerts and unread indicators surfaced on the activity dashboard; and downloadable conversation transcripts. Introduced a new directory filter panel with active filter chips and a rank-range selector, improved the add-partnership review-and-save flow and the manage-partnerships editing experience, and made notifications more actionable with direct links.",
            "bullets": []
          },
          {
            "title": "QA",
            "label": "EP-16 · QAS Partner Discovery",
            "status": "On track",
            "text": "Testing Message Centre functionality: unread counts, search, filters, conversation states, incoming notifications, and the edit and delete flows.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "MyQS: build Stars on the new platform (pending confirmation).",
          "QA: complete the remaining QPD ticket testing, MyQS regression testing and live-deployment sanity testing if scheduled."
        ],
        "notes": []
      },
      {
        "week": 36,
        "team": "blr1",
        "heading": "BLR1 · Simon Hall",
        "highlights": "All major sprint initiatives across HUB1, HUB2 and QPD progressed from active development into validation and testing, significantly improving release readiness and supporting QS’s goals around platform usability, operational efficiency and customer experience.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "HUB2",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "Completed development of the Media Partner authentication enhancements, including login redirection and password recovery workflows, and prepared the release for QA validation.",
            "bullets": []
          },
          {
            "title": "HUB1",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "Completed the ranking form enhancement implementation, currently in business validation for pre-populated data handling, source tracking and update workflows.",
            "bullets": []
          },
          {
            "title": "QPD enhancements",
            "label": "EP-16 · QAS Partner Discovery",
            "status": "On track",
            "text": "Finished development of platform improvements across opportunity management, notifications, messaging, filtering, navigation, visibility settings and overall user experience, with testing now under way in QA.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Complete QA testing and business validation for the HUB1, HUB2 and QPD enhancements.",
          "Address any feedback identified during validation and testing cycles.",
          "Progress deployments of approved enhancements to the live environment."
        ],
        "notes": []
      },
      {
        "week": 36,
        "team": "ecu1",
        "heading": "ECU1 · Jonnathan Pena",
        "highlights": "Release 74.7.3 went live, including email notifications for failed login attempts that tell users how many attempts remain before their account locks, responsive design improvements and a requirement requested by IBM for their white-label experience.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "1 Mentor core fixes",
            "label": "Initiative not identified",
            "status": "Shipped",
            "text": "Hid the provider filter when only one provider is available, and fixed matching issues in recommended occupations.",
            "bullets": []
          },
          {
            "title": "IBM white-label",
            "label": "EP-19 · 1 Mentor IBM",
            "status": "Shipped",
            "text": "Delivered the general platform toggle and favicon text customisability for IBM.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "A new sprint starts; planning indicates tasks for improving the sidebar, adding an ‘I want a real-life project’ section in target occupations styled as a CTA, and handling minimum and maximum salary ranges in job postings."
        ],
        "notes": []
      },
      {
        "week": 36,
        "team": "ecu2",
        "heading": "ECU2 · Paula Jiminez",
        "highlights": "Career Match site hardening: completed the design work for how search engines and AI bots should access Career Match, and shipped the first layer of protective security headers across the site, responding directly to the data-exposure risk flagged last week and reducing the site’s attack surface.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Site security headers",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Shipped",
            "text": "Rolled out core protective headers across the site and completed an audit defining the content security approach, reducing exposure to clickjacking and script injection.",
            "bullets": []
          },
          {
            "title": "Crawler and bot access policy",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "On track",
            "text": "Finished the design spike defining what search engines and AI crawlers should and should not be able to access as part of the Career Match rollout.",
            "bullets": []
          },
          {
            "title": "Career Match analytics",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Shipped",
            "text": "Added step-level tracking to the Career Match journey, showing exactly where students drop off rather than just whether they started or completed the journey.",
            "bullets": []
          },
          {
            "title": "Site stabilisation",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Shipped",
            "text": "Continued consolidating duplicated content into single sources of truth, reducing the risk of pages going out of sync.",
            "bullets": []
          },
          {
            "title": "Accessibility",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Shipped",
            "text": "Completed follow-up contrast and code-quality fixes from the earlier accessibility review.",
            "bullets": []
          }
        ],
        "risks": [
          "Content Security Policy still to land. The stricter part of the security hardening work, including the CSP, is still in progress and needs to land before the site can be considered fully hardened. No blockers at the moment."
        ],
        "nextWeek": [
          "Ship the crawler and bot access rules, including the decisions on what quiz data should move server-side versus remain public.",
          "Finish and roll out the stricter Content Security Policy to complete the hardening work."
        ],
        "notes": []
      },
      {
        "week": 36,
        "team": "events",
        "heading": "Digital and Events · Catarina Cunha · Events and Drupal · week of 31 August – 4 September 2026",
        "highlights": "",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "GME rankings",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "Data is uploaded and fully tested, with no bugs found.",
            "bullets": []
          },
          {
            "title": "Drupal clean-up",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "Removal of unused blocks and modules is ongoing; TU/TM is almost complete and QS China has started.",
            "bullets": []
          },
          {
            "title": "CMT module conversion from React to Drupal",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "UI changes reported during the testing phase are required.",
            "bullets": []
          },
          {
            "title": "Agenda builder",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "Code refactoring is complete, so testing can resume.",
            "bullets": []
          },
          {
            "title": "QS Future Forum",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "The new event type requested is done on Outreach, and the remaining dependencies will start now.",
            "bullets": []
          },
          {
            "title": "Outreach V2 code removal and clean-up",
            "label": "Initiative not identified",
            "status": "Ready for release",
            "text": "All unused sections have been removed and it is ready for release.",
            "bullets": []
          },
          {
            "title": "New servers",
            "label": "EP-85 · TU Performance & Upgrade",
            "status": "On track",
            "text": "The testing phase is ongoing.",
            "bullets": []
          }
        ],
        "risks": [
          "Angular upgrade. Testing on the new servers continues.",
          "Drupal upgrade. Fixing issues arising from the code merging."
        ],
        "nextWeek": [
          "TU/TM: release postponed to 7 September owing to the Friday holiday.",
          "Outreach/Events: release planned for 7 September.",
          "TU performance investigation: starting, analysing multiple aspects, mainly on the homepage, to understand what can be done to improve performance metrics.",
          "Latam rankings: preparation for this release is starting."
        ],
        "notes": []
      },
      {
        "week": 36,
        "team": "qsapply",
        "heading": "QS Apply (Appian) · Sreeram Sreekumar",
        "highlights": "The team focussed on Appian production support requests and started the discovery phase for the Appian migration.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Appian migration discovery",
            "label": "EP-54 · Appian to Hubspot Migration (US)",
            "status": "On track",
            "text": "The discovery phase has started, with stakeholder workshops scheduled for next week.",
            "bullets": []
          },
          {
            "title": "Production support",
            "label": "Initiative not identified",
            "status": "Done",
            "text": "Enhanced the application status update for the regional team: the choice of visa-denied reasons, previously available to the admissions team, is now extended to the regional team.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Stakeholder workshops as part of the discovery phase of the Appian migration."
        ],
        "notes": []
      },
      {
        "week": 36,
        "team": "ubsdev",
        "heading": "UBS Development · Mohd Azhar Mohd Razman, Development Manager",
        "highlights": "The Appian development team (Rahim, Anurag and Humaira) is transitioning into HubSpot development work, with the main focus the HubSpot enquiry API integration. Srinu has continued the Informatica S3 flat-file replacement.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "HubSpot transition",
            "label": "EP-54 · Appian to Hubspot Migration (US)",
            "status": "On track",
            "text": "The Appian development team has been briefed on the HubSpot development and API migration work; sandbox access has been granted, with Clare updating Jira so tickets can be assigned; each developer will be assigned an institution sandbox portal to begin development; and a list of training videos has been provided.",
            "bullets": []
          },
          {
            "title": "Informatica replacement",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "S3 flat-file replacement: development complete for Griffin in sandbox, ready for deployment. Keystone integration replacement: development complete for RCA and ECU in sandbox, ready for QA.",
            "bullets": []
          }
        ],
        "risks": [
          "Portal access rights. Some team members are still missing the correct portal access rights; flagged to Gwyneth.",
          "University of London sandbox. Srinu cannot create a workflow in the sandbox portal (blocked by a ‘Talk to Sales’ message); Simon to assist with resolving the licensing issue.",
          "LSBU paused. The S3 flat-file integration for LSBU has been paused while under tender.",
          "Informatica contract ends 22 December 2026. There is no plan to extend. The S3 flat-file replacement and Keystone work are on track to complete before this date, but a replacement for the York MS Dynamics connector is not confident by year-end. Rez has communicated the hard deadline to York, with a temporary flat-file import agreed as the fallback if the direct Dynamics–HubSpot integration is not deployed in time; the Informatica component needed to keep York running in the interim has been identified, awaiting confirmation from Informatica support."
        ],
        "nextWeek": [
          "Schedule regular progress catch-ups with the team to monitor progress and address issues.",
          "The Appian development team begins work on the API migration.",
          "Srinu continues the Brighton and Stirling S3 flat-file integrations."
        ],
        "notes": []
      },
      {
        "week": 36,
        "team": "cx",
        "heading": "CX Systems · Fahad Door",
        "highlights": "",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Aircall",
            "label": "Initiative not identified",
            "status": "",
            "text": "onboarded new users; coordinated with Aircall Support on the Telco data provided via Sean; continued IVR upgrades for the remaining universities; and backed up all IVR configurations and audio messages to the shared folder.",
            "bullets": []
          },
          {
            "title": "IVR",
            "label": "Initiative not identified",
            "status": "",
            "text": "fixed the Sunway IVR.",
            "bullets": []
          },
          {
            "title": "Sakari",
            "label": "Initiative not identified",
            "status": "",
            "text": "set up alphanumeric sender IDs across all existing universities; daily calls with Sakari on sender ID registrations and the best possible number combinations; and coordinated with Sebastian on the QS Events Sakari setup.",
            "bullets": []
          },
          {
            "title": "WhatsApp",
            "label": "EP-30 · Aurora Implementation",
            "status": "",
            "text": "onboarded Utah University and established its workflow; coordinated with Niswey and Rez on the consent workflow; completed the WhatsApp and Meta account documentation; and following up with Niswey on the payment method for WhatsApp accounts.",
            "bullets": []
          },
          {
            "title": "ClickSend",
            "label": "Initiative not identified",
            "status": "",
            "text": "call with Yoga, and coordination with the DO team, on ClickSend capabilities compared with Sakari and its friendliness with HubSpot.",
            "bullets": []
          },
          {
            "title": "Documentation and handover",
            "label": "Initiative not identified",
            "status": "",
            "text": "preparing the handover document and process documents for the Aircall and Twilio components in use, plus documentation on onboarding new clients for WhatsApp; catch-ups with Simon; and coordinated with SS on the AUT (NZ) main-market countries.",
            "bullets": []
          }
        ],
        "risks": [
          "IVR changes. The IVR changes require extensive testing to ensure everything is working as expected.",
          "Sakari. The QS Events Sakari credentials are needed.",
          "Sender ID results. The outcome of the sender ID and number combinations will be determined in testing and production; sender IDs are already set up for existing clients and being monitored, with the actual results expected once registration completes in the destination countries."
        ],
        "nextWeek": [
          "Sakari: conduct testing on QS Staging and communicate with the Sakari account manager; coordinate on sender ID registrations; gather the information required for each university from the SS managers; and set up QS Events SMS on HubSpot.",
          "Handover and documentation from Yugan and Dil.",
          "Catch up with Jonathan on the AI usage use case and security understanding for the DO Agent pilot."
        ],
        "notes": []
      },
      {
        "week": 35,
        "team": "syd1",
        "heading": "QS Application System · SYD1 · Charlie Liu · week of 22–30 August 2026",
        "highlights": "MyQS went live on my.qs.com. The production estate cut over from my2.qs.com with a transition window left open behind it, the Auth0 tenants and the design system followed in the same pass, and invitation URLs were repointed so mail already in flight lands on the new host. That closes the rename thread that has run for three weeks, inside a week that also delivered the audit and compliance surface end to end, the membership role rename applied across both database clusters, and the QS Agent’s move onto Claude Opus 5.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "MyQS production cutover",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "MyQS now serves from my.qs.com. The Auth0 tenants were cut over with a my2.qs.com transition window kept open, the design system followed, production invitation URLs were repointed, and the MyQS1 partner-discovery origin was synced from live prod.",
            "bullets": []
          },
          {
            "title": "HolonIQ migration",
            "label": "EP-20 · HIQ – QAS Auth Migration",
            "status": "On track",
            "text": "my.holoniq.com is now holoniq.qs.com. On the front end the launcher resolves the MyQS subdomain from an allowlisted key, qas-design was adopted through 2.1.9’s refreshed catalogue up to 2.1.19, QS Pulse activity tracking was mounted behind PULSE_INGEST_URL, and each change was promoted from holoniq-qas to qas-prod. On the back end, org-link resolution was reworked over qs_core_id, ranking_item_id and hrit_id with deploy-path guards and organisation-only links resolved through the single ranking item; the renamed QAS membership role vocabulary and the ranking_master account type are accepted in the consumer derivation; native and derived subscription rows are merged in account_view; and the DMS QAS sync was retired. 18 merged PRs and 39 commits across three HolonOS repositories.",
            "bullets": []
          },
          {
            "title": "Audit and compliance surface",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "Four log views on /audit-and-logs (auth audit, app and service access, page views and account operations), backed by attribution carried the whole way through: Auth-API records endpoint and token-derived origin into compliance_log, Pulse derives the application from the Auth0 redirect target, the supergraph exposes it on both compliance nodes, and CX names applications from the registry. Views page server-side, and the Auth API’s own internal CRUD rows are kept out of the auth view.",
            "bullets": []
          },
          {
            "title": "Pulse activity tracking",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "The shell tracker now reports activity from CX and Cerebrum; LegacyPulse gives legacy pages a zero-config tracker with full-URL page views behind the qs.com consent record; the HubSpot embed is consent-gated; and page-path resolution moved into the normaliser, with PAGE_PATH promoted to a first-class product-lane field.",
            "bullets": []
          },
          {
            "title": "QS Auth · with Ming Shi",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "Passkey logins exempted from MFA and MFA_SKIP_FOR_PASSKEY declared so imports stop wiping it; MFA waived for silent-auth continuations of proved sessions; MFA promoted to Always on prod; ACUL bundles rebuilt and re-pinned across both tenants; and a full email-copy refresh from Ming: a welcome overhaul, a branded MFA code template and a linked Support Team in place of support@qs.com.",
            "bullets": []
          },
          {
            "title": "Product access and role vocabulary · with Ming Shi",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "The membership role vocabulary renamed from admin/pro to account_*/product_*, applied to both clusters on 25 August and rolled out in phases: the federation made admin checks vocabulary-agnostic first, the API and front ends accepted both vocabularies through the transition, then the aliases were retired. Ming added the full-replace update-user-products and QS-admin bulk grant endpoints, and per-product role editing landed in both CX and MyQS.",
            "bullets": []
          },
          {
            "title": "Identity data load",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "The identity reload from the Mapping Master CSVs was applied to eu‑west‑2 on 26 August, followed by the MyQS pre-approved users set and the 28 August wave cut, with the account subscriptions data import completed as part of the same load. Pre-go-live outbox events were backfilled for the auth_user rows and the org link, and a local Postgres rehearsal database now rebuilds from schema.sql.",
            "bullets": []
          },
          {
            "title": "QS Agent and MCP",
            "label": "EP-60 · QAS MCP",
            "status": "On track",
            "text": "Claude Opus 5 is now the agent’s main model; thinking and tool progress stream before the first answer token; an authenticated warm-up ping builds and parks the whole session so the first real message is fast; production skills are served from an eu‑west‑1 registry; and the Cerebrum registry tool runs in production behind a product gate.",
            "bullets": []
          },
          {
            "title": "QS Supergraph · with Ming Shi",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "Origin, endpoint, token and redirect-target attribution exposed on both compliance event nodes and promoted to eu‑west‑2; the page-view path promoted to a first-class product-lane Pulse field; lastActionAt computed columns added across auth_user, account and account_user; the retired userAccountProductAccess block removed; and reviewed contract artefacts synced to four production releases.",
            "bullets": []
          },
          {
            "title": "Design System (qas-design) · with Lorenzo and Caitlin Jiang",
            "label": "EP-26 · QAS Design System",
            "status": "On track",
            "text": "2.1.0 through 2.1.25: resizable and reorderable table columns, per-product role granting from the table, a Tile component, the PageMoved screen, LegacyPulse, and a reworked launcher catalogue: Factfiles renamed to Rankings Preview and moved to its own subdomain, QS Stars promoted to a product app, and Stars and Partner Discovery badged alpha.",
            "bullets": []
          },
          {
            "title": "MyQS FE · with Caitlin Jiang and Ming Shi",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "The account administration release: people, products, compliance, security and profile surfaces; the rankings calendar read from the rankings-admin API; cookie purpose toggles applied immediately; and unmatched paths sent to the estate’s moved-page screen. Ming hardened invitations so mail scanners cannot auto-accept and the token survives the completion leg.",
            "bullets": []
          },
          {
            "title": "CX FE · with Caitlin Jiang",
            "label": "EP-43 · QAS Auth",
            "status": "On track",
            "text": "The four audit views with server-side paging; a Security column showing the factors each person has enrolled, with its own server-side filter; bulk user adding; per-product role editing on the account users table; a category filter on products; and Last Active read from the auth database’s lastActionAt rather than Pulse. 51 merged PRs, the busiest repo of the week.",
            "bullets": []
          },
          {
            "title": "Cerebrum FE",
            "label": "EP-32 · QAS Cerebrum",
            "status": "On track",
            "text": "Activity now reported to Pulse through the shell tracker, the agent session warmed before the user’s first message, and qas-design taken to 2.1.19 with its estate defaults and theme plugin adopted.",
            "bullets": []
          }
        ],
        "risks": [
          "User load needs QA and sign-off. The identity load is applied with minor loose ends still to close; it needs a QA pass and formal sign-off before it can be called done.",
          "Dev Redshift retirement is queued as cleanup. QAS-Pulse #18 stays a draft until there is capacity for it."
        ],
        "nextWeek": [
          "The my2.qs.com transition window closes and MyQS runs solely on my.qs.com.",
          "The dev environment is cleaned up and a staging environment is set up."
        ],
        "notes": []
      },
      {
        "week": 35,
        "team": "mimo",
        "heading": "Infrastructure · MIMO and D&E infrastructure teams · week of 24–28 August 2026 · MIMO",
        "highlights": "",
        "highlightBullets": [
          "MoveON: completed the migration of the AWS London PlatformPHP and MoveOnLite PlatformPHP servers to Ubuntu 24.04, alongside the Telemaxx web server migration to Ubuntu 22.04 with full validation.",
          "MoveON: advanced platform modernisation through Advanced Publisher upgrades in AWS Canada and AWS London, OS and PHP upgrades, and preparation for the upcoming France MySQL 8.4.7 migration using automated deployment tooling.",
          "MoveON: strengthened platform reliability and security through security patching, PMM upgrades, TLS/HSTS enhancements, RAID and storage monitoring, and observability initiatives using SigNoz and OpenTelemetry.",
          "MoveON: deployed the Bedrock AI Gateway in AWS Canada, providing governed access to multiple AI models with usage controls and budget guardrails.",
          "MoveIN: improved platform stability through Elasticsearch optimisation, monitoring enhancements and operational tooling improvements."
        ],
        "delivery": [
          {
            "title": "MoveON",
            "label": "Initiative not identified",
            "status": "",
            "text": "",
            "bullets": [
              "Completed migration of the AWS London PlatformPHP servers to Ubuntu 24.04 and validated functionality.",
              "Completed migration of the MoveOnLite PlatformPHP servers to Ubuntu 24.04.",
              "Completed the Telemaxx web server migration to Ubuntu 22.04.",
              "Completed Advanced Publisher upgrades in AWS Canada and AWS London, upgrading MySQL from 8.0 to 8.4 and PHP from 8.1 to 8.4.",
              "Upgraded the AWS London AP server to the new OS and PHP 8.4.",
              "Created and deployed an automated MySQL 8.4.7 Percona cluster solution for France to support the upcoming migration.",
              "Applied planned Uyuni patching for the AWS Canada environments and upgraded the PMM servers in France and Telemaxx.",
              "Deployed the Bedrock AI Gateway in AWS Canada.",
              "Configured XCP-ng RAID and local storage monitoring using Zabbix.",
              "Implemented a SigNoz and OpenTelemetry observability proof of concept in staging.",
              "Completed GitLab CI/CD automation testing and SSL automation testing across the MoveON and AP platforms.",
              "Added MySQL 8.4.7 cluster monitoring into Zabbix and completed AP instance creation in OVH France.",
              "Resolved backup issues affecting AWS Canada, MoveOnLite, RWTH Aachen backup delivery and staging database copy operations.",
              "Completed the OVH France offsite backup Btrfs setup and initiated snapshot synchronisation.",
              "Continued AP migration support, AP debugging, development support, data-copy activities and controls to restrict access to sensitive AP files."
            ]
          },
          {
            "title": "MoveIN",
            "label": "Initiative not identified",
            "status": "",
            "text": "",
            "bullets": [
              "Resolved Elasticsearch performance and indexing issues through infrastructure optimisation.",
              "Enhanced operational monitoring with Memcached dashboards and proactive alerting.",
              "Migrated additional Shibboleth clients from Telemaxx to AWS."
            ]
          }
        ],
        "risks": [
          "MoveON. France patching remains pending and is a dependency for the planned Uyuni server upgrade; the France MySQL 8.4.7 migration remains pending; PlatformPHP migration activities continue to require environment-specific validation and remediation; and the review and restriction of sensitive AP files and URLs is still being validated before production rollout.",
          "MoveIN. The RabbitMQ production OS upgrade remains pending development approval."
        ],
        "nextWeek": [
          "MoveON: start the France MySQL 8.4.7 migration; complete France patching; continue PHP migrations for the AWS Canada, Telemaxx and OVH France environments; continue Advanced Publisher server and Webmaster upgrades in France and Telemaxx; upgrade the Uyuni server once France patching is complete; continue PlatformPHP validation, security monitoring and CSPM reviews; progress ADFS containerisation; and continue GitLab CI/CD and SSL automation testing.",
          "MoveIN: continue Elasticsearch and Memcached performance monitoring, and progress the RabbitMQ production upgrade once approval is received."
        ],
        "notes": []
      },
      {
        "week": 35,
        "team": "de-infra",
        "heading": "Infrastructure · MIMO and D&E infrastructure teams · week of 24–28 August 2026 · D&E",
        "highlights": "",
        "highlightBullets": [
          "Deployed and hosted rankings-admin.qs.com, rankings-preview.qs.com, stars.qs.com and partnerdiscovery.qs.com using a containerised architecture on my.qs.com.",
          "Optimised TU/TM infrastructure costs by eliminating unnecessary CloudWatch log streaming, delivering estimated annual savings of approximately $2,300.",
          "Completed QSCHINA Solr upgrades across all non-production environments and automated Solr VM provisioning for the TU/TM environments.",
          "Continued expansion of reusable AWS CDK automation, improving deployment consistency and infrastructure provisioning."
        ],
        "delivery": [
          {
            "title": "",
            "label": "EP-33 · QAS Factfiles EP-46 · QAS Stars EP-16 · QAS Partner Discovery",
            "status": "",
            "text": "Completed deployment and hosting setup for the rankings-admin, rankings-preview, stars and partnerdiscovery platforms using Docker, Nginx and AWS ALB.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Resolved SSL hostname mismatch issues for outreach.qs.com and qs-enrollments.qs.com.",
            "bullets": []
          },
          {
            "title": "",
            "label": "EP-43 · QAS Auth",
            "status": "",
            "text": "Supported my.qs.com DNS updates and deployment activities.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Completed the Outreach pre-production setup using AWS CDK and Ansible automation.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Continued development of modular AWS CDK templates and provisioned TU/TM and Apache Solr pre-production environments.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Whitelisted new IP ranges across the bastion hosts for the new code-ingestion process.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Completed Solr upgrades across all QSCHINA non-production environments.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Automated Solr VM provisioning and installation for the TU/TM environments.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Implemented CDN cache optimisation with one-year expiry policies for WOFF/WOFF2 assets in QSCHINA live.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Implemented CloudWatch monitoring optimisation and cleanup activities.",
            "bullets": []
          },
          {
            "title": "",
            "label": "Initiative not identified",
            "status": "",
            "text": "Supported SSO deployment activities and Outreach deployment automation testing.",
            "bullets": []
          }
        ],
        "risks": [
          "TU. The QS Apply form submission investigation through Cloudflare Security Analytics remains ongoing.",
          "QSCHINA. The content team’s CSV import upload issue in QS RMS remains under investigation.",
          "Automox. Approval from the Legal and DPO teams is required before D&E Linux OS patch management adoption.",
          "Bitdefender. Deployment remains pending the required approvals and licensing confirmation."
        ],
        "nextWeek": [
          "Complete the remaining QSCHINA Solr validation activities.",
          "Continue investigation and remediation of the QS Apply form submission issues.",
          "Continue resolution of the QS RMS CSV import issue.",
          "Continue development and testing of modular AWS CDK templates.",
          "Progress Bitdefender approval and licensing activities.",
          "Continue SigNoz deployment activities in staging."
        ],
        "notes": []
      },
      {
        "week": 35,
        "team": "blr2",
        "heading": "Sector Intelligence · BLR and ECU delivery teams · week of 24–28 August 2026 · BLR2",
        "highlights": "Shipped the new auth with subdomains to live, including role-based gating for Rankings Admin and CX institution syncing, securing access control across the portal. Partner Discovery incoming-interest handling was reworked for reliable read-state syncing across the dashboard, interest lists and notifications.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "MyQS",
            "label": "EP-31 · QAS Auth – MyQS 1.0",
            "status": "On track",
            "text": "Shipped the new auth with subdomains to live. Added role-based access control for Rankings Admin via CX roles; fixed the institution switcher for Rankings and Stars; resolved an infinite redirect loop for users with no CX accounts and added expired CX session handling; built the Rankings Calendar API endpoint; replaced the access-restricted screen with a redirect to the request-demo page; and integrated the Legacy Pulse component for Stars users.",
            "bullets": []
          },
          {
            "title": "Stars",
            "label": "EP-46 · QAS Stars",
            "status": "On track",
            "text": "Renamed ‘Overall Summary’ to ‘Summary’ across the header and sidebar, and applied visual polish to the summary cards and modal (typography, icon alignment and spacing).",
            "bullets": []
          },
          {
            "title": "Partner Discovery",
            "label": "EP-16 · QAS Partner Discovery",
            "status": "On track",
            "text": "Reworked incoming-interest read state to sync across the dashboard, lists and notifications in one action; tightened access control on interest read actions; added a verified badge on staff and faculty profiles; and refreshed the Smart Match promo panel. Now adding region-based directory filtering, previous/next navigation on profile and detail pages, and a ‘Hidden’ partnership visibility option.",
            "bullets": []
          },
          {
            "title": "QA",
            "label": "EP-31 · QAS Auth – MyQS 1.0 EP-16 · QAS Partner Discovery",
            "status": "On track",
            "text": "Completed Chat Composer and Export testing, MyQS regression testing and QPD ticket estimations. Waiting for Products access to begin sanity testing.",
            "bullets": []
          }
        ],
        "risks": [
          "QPD admin module. Currently inaccessible owing to the deprecated Back Office. A decision is needed on where this will live now."
        ],
        "nextWeek": [
          "MyQS: provide continuous support in fixing bugs and implementing changes for the new auth.",
          "Partner Discovery: deploy enhancements to QA, complete the message centre with edit and delete features, and begin the next improvement ticket.",
          "QA: start testing newly assigned QPD stories, execute test cases and retest resolved defects."
        ],
        "notes": []
      },
      {
        "week": 35,
        "team": "blr1",
        "heading": "Sector Intelligence · BLR and ECU delivery teams · week of 24–28 August 2026 · BLR1",
        "highlights": "Development was initiated across HUB1, HUB2 and QPD enhancements, ensuring that key customer-facing improvements, authentication updates and platform experience upgrades are progressing from the start of the sprint. This provides a strong foundation for upcoming releases and supports QS’s ongoing focus on usability, operational efficiency and user engagement.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "HUB2",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "Initiated development of Media Partner authentication enhancements, including login redirection and password recovery workflows.",
            "bullets": []
          },
          {
            "title": "HUB1",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "Began implementation of ranking form enhancements to improve handling of pre-populated data, source tracking and data update workflows.",
            "bullets": []
          },
          {
            "title": "QPD enhancements",
            "label": "EP-16 · QAS Partner Discovery",
            "status": "On track",
            "text": "Started work on multiple platform improvements spanning opportunity management, notifications, messaging workflows, filtering, navigation, visibility settings and user experience enhancements.",
            "bullets": []
          }
        ],
        "risks": [
          "HUB2 timing. Minor timing risk on future HUB2 enhancements if pending requirements are received later in the sprint, reducing the available implementation and testing window."
        ],
        "nextWeek": [
          "Continue progress on HUB1, HUB2 and QPD enhancements.",
          "Incorporate additional HUB2 requirements as they become available.",
          "Advance development of authentication, ranking workflow and user experience improvements."
        ],
        "notes": []
      },
      {
        "week": 35,
        "team": "ecu1",
        "heading": "Sector Intelligence · BLR and ECU delivery teams · week of 24–28 August 2026 · ECU1",
        "highlights": "A new sprint started this week, with preparation for the next 1 Mentor (1M) release in the coming week.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Mixpanel coverage",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "Increased Mixpanel coverage across three 1M features (Ikigai, Saved courses and Learning paths); awaiting final approval.",
            "bullets": []
          },
          {
            "title": "IBM instance",
            "label": "EP-19 · 1 Mentor IBM",
            "status": "On track",
            "text": "Worked on several adjustments requested for the IBM instance.",
            "bullets": []
          },
          {
            "title": "Visual and accessibility improvements",
            "label": "Initiative not identified",
            "status": "Shipped",
            "text": "Delivered visual and accessibility improvements to the advisor and learner platforms.",
            "bullets": []
          },
          {
            "title": "QA",
            "label": "Initiative not identified",
            "status": "Done",
            "text": "Successfully validated all tasks planned for the current sprint.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Deliver the next release containing the requested changes for IBM.",
          "Start the push notifications project: choose the best notification provider, align with Product on requirements and scope, and design the data structure to support it."
        ],
        "notes": []
      },
      {
        "week": 35,
        "team": "ecu2",
        "heading": "Sector Intelligence · BLR and ECU delivery teams · week of 24–28 August 2026 · ECU2",
        "highlights": "Career Match accuracy: fixed a bug that could send students to the wrong subject’s results, and tightened how matches are ranked and capped. This directly improves the accuracy and trust of the core recommendation feature.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Career recommendation accuracy",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Shipped",
            "text": "Fixed a bug sending students to unrelated subject results, and capped and prioritised matches so the strongest ones surface first.",
            "bullets": []
          },
          {
            "title": "Career Match analytics",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Shipped",
            "text": "Fully instrumented the Career Match journey in Mixpanel, giving pathway-level funnel visibility for the first time.",
            "bullets": []
          },
          {
            "title": "TopUniversities integration",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Shipped",
            "text": "Career Match results now link directly to the matching subject page on topuniversities.com instead of a generic link.",
            "bullets": []
          },
          {
            "title": "Site stabilisation",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Shipped",
            "text": "Removed unused code and consolidated duplicated styling logic to keep the codebase easy to maintain.",
            "bullets": []
          },
          {
            "title": "Content and style fixes",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "Shipped",
            "text": "Minor content correction and header spacing polish.",
            "bullets": []
          }
        ],
        "risks": [
          "Exploratory phase. The team is working through what the microsite actually needs next; this week that surfaced crawler and bot protection (see next week). Identification and scoping will continue alongside any new Product requirements or opportunities to support another team."
        ],
        "nextWeek": [
          "New priority: crawler and bot protection for Career Match, raised by Natalie and Jonnathan. There is no robots.txt today, and some quiz data ships as plain JSON in the client bundle. The team will define robots.txt rules, confirm what is publicly downloadable and decide what should move server-side, while wrapping up the remaining TopUniversities parity items."
        ],
        "notes": []
      },
      {
        "week": 35,
        "team": "events",
        "heading": "Digital and Events · Events and Drupal · week of 24–28 August 2026",
        "highlights": "",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Career Matcher",
            "label": "EP-7 · TU – Career Match Microsite",
            "status": "On track",
            "text": "Changes requested after the main release are ready and in the testing phase.",
            "bullets": []
          },
          {
            "title": "CMT module conversion from React to Drupal",
            "label": "Initiative not identified",
            "status": "Ready for release",
            "text": "Testing is complete and the conversion is ready for release.",
            "bullets": []
          },
          {
            "title": "Agenda builder",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "The last phase of testing is taking place, with some code refactoring owing to merge issues.",
            "bullets": []
          },
          {
            "title": "Client App",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "The new app version is ready and approved by the business, to be released in the stores once the approval process is complete.",
            "bullets": []
          },
          {
            "title": "New servers",
            "label": "Initiative not identified",
            "status": "On track",
            "text": "The new servers are set up and testing is starting.",
            "bullets": []
          }
        ],
        "risks": [
          "Angular upgrade. Testing on the new servers has started.",
          "Drupal upgrade. All code has been merged again to resolve the conflicts that appeared from the last three sprints’ code."
        ],
        "nextWeek": [
          "TU/TM: release on 3 September."
        ],
        "notes": []
      },
      {
        "week": 35,
        "team": "cx",
        "heading": "University Services · CX Systems · week of 24–28 August 2026",
        "highlights": "",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Aircall",
            "label": "Initiative not identified",
            "status": "",
            "text": "onboarded new users; followed up with Sean to obtain the caller IDs Aircall requires for further investigation of the Derby call-drop issue; assisted Patrick with Aircall calling data and granted Jess access to the Aircall API and dashboard.",
            "bullets": []
          },
          {
            "title": "IVR",
            "label": "Initiative not identified",
            "status": "",
            "text": "continued IVR upgrades for the remaining universities; added a call-back request option to the Derby IVR and changed the Nottingham IVR; recreated IVRs for universities following the split of teams into two groups.",
            "bullets": []
          },
          {
            "title": "Sakari",
            "label": "Initiative not identified",
            "status": "",
            "text": "set up the alphanumeric sender ID in the UTSC environment for testing; conducted testing on QS Staging for the main markets and communicated with the Sakari account manager.",
            "bullets": []
          },
          {
            "title": "Sunway University",
            "label": "EP-30 · Aurora Implementation",
            "status": "",
            "text": "onboarding onto Sakari and integration with the HubSpot portal; flow testing and amendments; voicemail set up.",
            "bullets": []
          },
          {
            "title": "HubSpot campaign workflow",
            "label": "Initiative not identified",
            "status": "",
            "text": "continued developing and testing the automated campaign approval workflow, including the campaign request process, the approval flow and use of the approved email templates before campaigns are sent by the QS team.",
            "bullets": []
          },
          {
            "title": "Documentation and handover",
            "label": "Initiative not identified",
            "status": "",
            "text": "preparing the handover document and process documents for the Aircall and Twilio components currently in use, and documentation on onboarding new clients for WhatsApp.",
            "bullets": []
          },
          {
            "title": "ClickSend",
            "label": "Initiative not identified",
            "status": "",
            "text": "call with Yoga on ClickSend campaigns to understand how they differ from Sakari.",
            "bullets": []
          },
          {
            "title": "WhatsApp",
            "label": "Initiative not identified",
            "status": "",
            "text": "assisted Sebastian in finding failed WhatsApp campaign reports on Meta.",
            "bullets": []
          }
        ],
        "risks": [
          "IVR changes. The IVR changes require extensive testing to ensure everything is working as expected.",
          "Sakari. QS Events Sakari and HubSpot credentials are needed."
        ],
        "nextWeek": [
          "Sakari: conduct testing on QS Staging and communicate with the Sakari account manager; a call with Sakari is expected to finalise the QS Staging number combinations so they can be replicated in production; set up QS Events SMS on HubSpot.",
          "Handover and documentation from Yugan and Dil.",
          "Catch up with Jonathan on the AI usage use case and security understanding for the DO Agent pilot."
        ],
        "notes": []
      },
      {
        "week": 34,
        "team": "syd1",
        "heading": "SYD1 · Charlie Liu",
        "highlights": "HolonIQ went live on the QS production estate, closing last week’s outstanding item later than planned. The identity side landed as a shared-client origin model with the M2M audience moved and HolonIQ claims stamped onto access tokens; the data side followed within hours: entitlement_outbox joined the production DMS selection rules, and the entitlement forwarder (built inert earlier in the week) was activated against the HolonIQ production bus, enriching org-link events with the legacy core id through an S3 crosswalk. Alongside it, the new ACUL email-first, passkey-first login reached production and MyQS moved onto my2.qs.com.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "HolonIQ to QAS migration · with Ming Shi",
            "label": "",
            "status": "Delivered late",
            "text": "Production cutover done, later than planned. Shared-client origins and the M2M audience move landed in the Auth0 tenant, and HolonIQ claims are stamped on access tokens. On the data side, entitlement_outbox joined the production DMS selection rules with an append-only posture enforced against default ACLs; account and account_organization_authority were added as the sixth and seventh outbox entities; and the entitlement forwarder went live against the HolonIQ production bus, resolving its PutEvents region from the bus ARN, carrying per-detail-type and retry stocktake counters and enriching org-link events with the legacy core id through an S3 crosswalk.",
            "bullets": []
          },
          {
            "title": "QS Auth · with Ming Shi",
            "label": "",
            "status": "On track",
            "text": "ACUL production cutover: an email-first, passkey-first login and signup with consent collected once at the OTP step, replacing the three-policy line with QS General Terms and a marketing opt-in that persists to user_preference. passkey_enrolled now syncs from Auth0 log events and the post-login hook, user-facing Auth0 links are minted on the tenant custom domain, and hook auth became pipeline-owned so the drift warning could be retired.",
            "bullets": []
          },
          {
            "title": "Account invitations and user lifecycle · with Ming Shi",
            "label": "",
            "status": "On track",
            "text": "Invited users are now created eagerly with a pending membership and carry an invited status end to end: the People table shows the lifecycle plus who invited whom and when; CX badges invited users in amber and uses the MyQS invitation flow; a dedicated resend endpoint backs the re-invite button; brand-new invitees are handed to hosted signup before acceptance; and an already signed-in invitee is no longer re-prompted.",
            "bullets": []
          },
          {
            "title": "Compliance and Pulse audit",
            "label": "",
            "status": "On track",
            "text": "The eu‑west‑2 production assembly shipped (Snowflake-only and SQS-buffered), with per-environment CORS admitting the qs.com estate and a production audience and claim namespace. Event routing was corrected (auth.ferrt and agent.run.denied_product to audit, refresh exchanges to debug), and CX moved both its analytics and audit consumers onto the supergraph, retiring the REST client. Last week’s compliance_log outage risk is closed.",
            "bullets": []
          },
          {
            "title": "QS Supergraph · with Ming Shi",
            "label": "",
            "status": "On track",
            "text": "CX cross-account read paths opened behind the CX product entitlement, with the customer-facing account attributes exposed deliberately and the commercial ones omitted from schema generation; distinct-actor counts on the cross-account compliance page; the Pulse product and debug lanes served from dedup views through secret-named coordinates; contract artefacts synced to two production releases; and us‑east‑1 delivered from dev while eu‑west‑2 stays on main.",
            "bullets": []
          },
          {
            "title": "Design System (qas-design) · with Lorenzo and Caitlin Jiang",
            "label": "",
            "status": "On track",
            "text": "A shared three-step profile form exported on a ./profile-form subpath and raised from QSThemeProvider; the www.qs.com cookie consent adopted instead of re-asking in each app; a pre-paint theme plugin shipped from ./vite; and portal-first login, so satellites bounce to MyQS rather than self-hosting interactive login. The week closed on 2.1.0: a shell-wide toast provider from Caitlin, and the auth profile republished as a state the compiler forces every consumer to handle rather than a value that can quietly be unknown. 2.0.14 to 2.1.0.",
            "bullets": []
          },
          {
            "title": "MyQS FE · with Caitlin Jiang",
            "label": "",
            "status": "On track",
            "text": "Real QS conference and rankings calendars on the home dashboard, a full product catalogue page, My Profile and cookie settings; the app’s own onboarding gate dropped in favour of the shell’s, with the is_onboarding flag semantics fixed. Onboarding is live, closing last week’s behind item. Promoted to production on 22 August on qas-design 2.1.0, with every save, cancel and failure now reported through the shared toast, and the security page stating a verification posture only when a source actually answered.",
            "bullets": []
          },
          {
            "title": "CX FE · with Caitlin Jiang",
            "label": "",
            "status": "On track",
            "text": "KPI cards and stat rows rebuilt on measured counts rather than placeholders; audit search exportable as CSV with pagination and debounce fixes; products moved from cards to a searchable table; account profile fields and a home active-users chart; and page feedback now raised through the shell toast provider. Released on qas-design 2.1.0.",
            "bullets": []
          },
          {
            "title": "Cerebrum FE · with Caitlin Jiang",
            "label": "",
            "status": "On track",
            "text": "Estate config gated at build and boot with cross-estate defaults removed; the supergraph URL sourced from the qas/auth0 secret; the obsolete CerebrumAccessGuard retired now that product entitlement governs access; and ContentLayout, TableView and ListWidget adopted across the app.",
            "bullets": []
          },
          {
            "title": "MyQS rename and analytics subdomain",
            "label": "",
            "status": "On track",
            "text": "The promotion hop now targets my2.qs.com, the prod SPA identity is aligned to the rename, VITE_APP_MYQS_KEY is exported from the qas/auth0 secret across MyQS, CX and Cerebrum, and the Webflow login page’s MyQS links now point at my2.qs.com. The database-side analytics subdomain rename is staged behind a two-stage cutover timeline and the front-end change is deliberately held.",
            "bullets": []
          },
          {
            "title": "Platform and infra",
            "label": "",
            "status": "On track",
            "text": "MCP brought up on the eu‑west‑2 production estate with estate-aware runtimes and a product-entitlement access model; QAS-Infra now accepts environment=production and routes prod branches through cfg.is_production; and CloudFormation no longer manages the data-gql Snowflake secret value.",
            "bullets": []
          }
        ],
        "risks": [
          "QS Analytics subdomain cutover is a planned hold. QAS-Design #241 is staged behind the two-stage database rename timeline and lands once the cutover is scheduled.",
          "Factfiles login redirect. Needs to be configured to my2.qs.com for the launch strategy.",
          "HolonIQ needs connecting to QAS Pulse. Now that HolonIQ is in production, its events still need to reach the Pulse pipeline.",
          "Marketing consent is not yet piped through to HubSpot. The opt-in is captured at signup and persisted to user_preference, but nothing forwards it to HubSpot yet.",
          "Dev Redshift retirement is queued as cleanup. QAS-Pulse #18 stays a draft until there is capacity for it."
        ],
        "nextWeek": [
          "The QS Analytics subdomain cutover gets a date and the held front-end change lands.",
          "HolonIQ gets connected to QAS Pulse.",
          "User account subscriptions data import, and testing.",
          "QS MCP and agent optimisation, with cost analysis.",
          "Pulse production verification continues now the CX consumers sit on the supergraph.",
          "qas-design consolidates on 2.1.0 across MyQS, CX and Cerebrum.",
          "The dev Redshift path retirement gets picked up as capacity allows."
        ],
        "notes": []
      },
      {
        "week": 34,
        "team": "cerebrum",
        "heading": "Cerebrum",
        "highlights": "Institution records can now be submitted, validated through ten stages and committed to the core store; as of the end of the week they can be searched and their full change history viewed in the admin UI.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Data Pipeline (dbt and Dagster)",
            "label": "",
            "status": "",
            "text": "Entity ingestion is live end to end. A submitted data package is now validated through ten stages and committed to the core store, with every change versioned and attributed. This was the week’s main body of work.",
            "bullets": []
          },
          {
            "title": "Front end and Registry API",
            "label": "",
            "status": "",
            "text": "Entity search and version history. Staff can search records by QS ID, see an entity’s current state and step through its history with a property-level diff of what changed at each version. Live and verified end to end.",
            "bullets": []
          },
          {
            "title": "Data Store (Snowflake)",
            "label": "",
            "status": "",
            "text": "Every change is traceable. The history model treats the original data load as a real commit rather than a special case, so ‘this value has always been here’ is now an auditable answer instead of a gap.",
            "bullets": []
          },
          {
            "title": "Data Pipeline (dbt)",
            "label": "",
            "status": "",
            "text": "Validation records rather than blocks where it should. Records that predate a schema change, or reference something since withdrawn, are flagged and still accepted, a deliberate choice that stops one schema edit halting ingestion across the whole estate.",
            "bullets": []
          },
          {
            "title": "Infrastructure (AWS)",
            "label": "",
            "status": "",
            "text": "Moved to London (eu‑west‑2), alongside QS ID issuing and the registry’s production deployment target.",
            "bullets": []
          },
          {
            "title": "Fix: Data Store (Snowflake)",
            "label": "",
            "status": "",
            "text": "A data-integrity bug in the merge, caught before it mattered. The procedure that commits records looked transactional but was not, and two earlier failed merges had already left duplicate version records behind. Found, fixed and verified against real data.",
            "bullets": []
          },
          {
            "title": "Fix: Registry API",
            "label": "",
            "status": "",
            "text": "A deployment ceiling removed. The service was 1.5 KB below a hard AWS limit; roughly eight more endpoints would have started failing deploys mid-rollback. Restructured to leave permanent headroom.",
            "bullets": []
          },
          {
            "title": "Fix: Data Pipeline (dbt)",
            "label": "",
            "status": "",
            "text": "A validation stage that was passing falsely. One check was reading an empty table and reporting a clean result, so it would have waved through records it was meant to catch.",
            "bullets": []
          }
        ],
        "risks": [
          "A concurrency safeguard is switched off until someone sets it. The protection against two simultaneous submissions colliding on one record lives in a deployment setting, not in code, so no pull request can turn it on. Decision: who sets it, and whether before or after the first real backfill.",
          "A fix to the history backfill is still open. A property count was recorded incorrectly during the initial load. Small, but it sits on work described above as shipped.",
          "Entity type definitions. Behind schedule."
        ],
        "nextWeek": [
          "End-to-end testing of the full ingestion pipeline. It has only ever processed a single submission, so the real coverage work starts now: every property data type through typing and validation; versioning across repeated submissions to the same record, including sparse patches, no-op submissions and reinstatement; and structure evolution, where a record written under one schema version is updated under a later one and both the stored history and the UI have to render the older shape correctly.",
          "Set the concurrency limit, then run a real backfill at volume. Volume is the next thing that will teach us anything the single-submission path cannot.",
          "Harden what is there: integrity checks currently run as pipeline steps rather than first-class data checks, and the merge serialises across all record types rather than per type. Neither bites at current volume; both are the natural next increment."
        ],
        "notes": []
      },
      {
        "week": 34,
        "team": "blr2",
        "heading": "BLR2",
        "highlights": "Launched the Rankings Admin application in MyQS and upgraded the QAS design system package with layout fixes. Delivered institution-to-institution messaging for Partner Discovery: universities can now hold full conversations with file sharing, real-time notifications and exportable transcripts directly within the platform.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Partner Discovery",
            "label": "",
            "status": "On track",
            "text": "Launched in-app messaging with chat threads, attachments, transcript export and role-based access controls. QA validation of the role-based modules is complete; chat composer and export testing is in progress.",
            "bullets": []
          },
          {
            "title": "MyQS",
            "label": "",
            "status": "On track",
            "text": "Launched Rankings Admin in Back Office, completed the QS Stars visual refresh and shipped auth session synchronisation fixes.",
            "bullets": []
          }
        ],
        "risks": [
          "Partner Discovery admin module. The module currently lives in the Back Office, which has been moved to legacy, and is still required for some QPD features to work. Decision needed: migrate it into the Partner Discovery app or create a standalone app. Decision owner: to be determined."
        ],
        "nextWeek": [
          "Provide support to ship the new auth to live.",
          "Monitor Partner Discovery messaging in staging and production for regression.",
          "MyQS regression testing and live deployment sanity check."
        ],
        "notes": []
      },
      {
        "week": 34,
        "team": "blr1",
        "heading": "BLR1",
        "highlights": "Moved HUB 2 (Media Partners for Outreach) into testing, initiated HUB 1 delivery and progressed MyQS QPD into business validation, advancing partner acquisition, platform scalability and role-based user access management towards production readiness.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "HUB 2 – Media Partners for Outreach · IPS‑2220, IPS‑2341",
            "label": "",
            "status": "On track",
            "text": "Development is complete and the solution is undergoing testing ahead of planned production deployment.",
            "bullets": []
          },
          {
            "title": "HUB 1",
            "label": "",
            "status": "On track",
            "text": "Team onboarding and knowledge transfer are complete; one engineer is actively delivering IPS‑2361 and IPS‑2362, while another shadows the development lifecycle to build HUB 1 domain knowledge and delivery experience.",
            "bullets": []
          },
          {
            "title": "MyQS QPD",
            "label": "",
            "status": "On track",
            "text": "Completed role-based feature segregation for the QPD Dashboard; the solution is in business validation and approaching production deployment.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Complete HUB 2 testing and proceed with production deployment, subject to successful validation.",
          "Continue delivery of HUB 1 tickets IPS‑2361 and IPS‑2362.",
          "Support any feedback arising from the MyQS QPD Dashboard business validation, if required."
        ],
        "notes": []
      },
      {
        "week": 34,
        "team": "ecu1",
        "heading": "ECU1",
        "highlights": "The latest 1 Mentor (1M) release shipped this week, including the advisor feature-request flow linked to sales, the legacy code refactor for Sonar compliance and direct Learning Path-to-learner assignment.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "IBM integration",
            "label": "",
            "status": "On track",
            "text": "SSO for IBM has been completed and the IBM white-label configuration has been set up. These IBM-requested changes will be deployed to production.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Continue working on SSO for IBM to make it more robust and prevent user duplication.",
          "Improvements to the Advisor form for the CTAs."
        ],
        "notes": []
      },
      {
        "week": 34,
        "team": "ecu2",
        "heading": "ECU2",
        "highlights": "Full analytics tracking is now live across the candidate journey: Career Match steps, navigation clicks, video plays, the demo form and the ‘Bring QS to your institution’ form are all instrumented in Mixpanel and HubSpot, giving the business full visibility of how candidates engage with the site.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Candidate journey analytics (Mixpanel and HubSpot)",
            "label": "",
            "status": "Shipped",
            "text": "The team can now see how candidates move through Career Match and where they drop off.",
            "bullets": []
          },
          {
            "title": "Site protection and quality gate",
            "label": "",
            "status": "Shipped",
            "text": "The main site can no longer be updated without passing full automated checks first, reducing the risk of bugs reaching production.",
            "bullets": []
          },
          {
            "title": "Form accessibility improvements",
            "label": "",
            "status": "Shipped",
            "text": "Reduced friction and confusion in form fields for candidates who need extra help.",
            "bullets": []
          },
          {
            "title": "Mobile experience polish for Career Match results",
            "label": "",
            "status": "Shipped",
            "text": "Completed.",
            "bullets": []
          },
          {
            "title": "Parity fixes against the TopUniversities site",
            "label": "",
            "status": "On track",
            "text": "Header, footer and link parity fixes are in progress, ongoing.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Wrap up the remaining TopUniversities parity fixes."
        ],
        "notes": []
      },
      {
        "week": 34,
        "team": "events",
        "heading": "Digital and Events",
        "highlights": "Career Matcher has been released.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Career Matcher",
            "label": "",
            "status": "Shipped",
            "text": "Released and working as requested.",
            "bullets": []
          },
          {
            "title": "Quick Wins",
            "label": "",
            "status": "Shipped",
            "text": "Updated custom forms released.",
            "bullets": []
          },
          {
            "title": "CMT module conversion from React to Drupal",
            "label": "",
            "status": "On track",
            "text": "Testing is still ongoing.",
            "bullets": []
          },
          {
            "title": "QSA page and form",
            "label": "",
            "status": "Shipped",
            "text": "Reported data issues fixed and released.",
            "bullets": []
          },
          {
            "title": "Angular upgrade",
            "label": "",
            "status": "On hold",
            "text": "All issues fixed, but the release is on hold until the new servers are set up and tested.",
            "bullets": []
          },
          {
            "title": "Agenda builder",
            "label": "",
            "status": "On track",
            "text": "Continuing implementation of the last requirements phase, with testing happening in parallel.",
            "bullets": []
          }
        ],
        "risks": [
          "Angular upgrade. The decision has been made to wait for the new servers to be set up before releasing this new version.",
          "Drupal upgrade. Major code development needs to be on hold while all developers upgrade their local environments and all issues are fixed. DevOps team availability will also be needed, so a plan is being aligned with them to make sure the team is fully prepared."
        ],
        "nextWeek": [
          "Events: release on 24 August, including supporting tickets for the new event season."
        ],
        "notes": []
      },
      {
        "week": 34,
        "team": "hubspot",
        "heading": "UBS HubSpot Systems",
        "highlights": "",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Data updates for missing COI objects",
            "label": "",
            "status": "Ongoing",
            "text": "The process has started to update all missing COI objects across all portals.",
            "bullets": []
          },
          {
            "title": "V2 contact matching workflow",
            "label": "",
            "status": "Done",
            "text": "Added to all portals.",
            "bullets": []
          },
          {
            "title": "Activities on tickets",
            "label": "",
            "status": "Done",
            "text": "All phone-call tickets have had the calls attached and activities added in all portals.",
            "bullets": []
          },
          {
            "title": "Raw data file imports",
            "label": "",
            "status": "Done",
            "text": "Updates made to manage edge-case scenarios.",
            "bullets": []
          },
          {
            "title": "Griffith email and data",
            "label": "",
            "status": "Done",
            "text": "Fixed the missing-email issues and updated missing COI objects so that nurture flows could be turned on.",
            "bullets": []
          }
        ],
        "risks": [
          "CIPTEX SIP trunking. Price is in and has been passed to Pratik for negotiation."
        ],
        "nextWeek": [
          "Push raw data ingestion workflows to all portals.",
          "Continue the recon build.",
          "Take over lifecycle management and start the rewrite of lifecycle workflows to handle traffic."
        ],
        "notes": []
      },
      {
        "week": 34,
        "team": "cx",
        "heading": "CX Systems",
        "highlights": "",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Aircall support",
            "label": "",
            "status": "",
            "text": "investigated the call-drop issue reported by Derby and raised it with Aircall Support for further debugging; onboarded new users.",
            "bullets": []
          },
          {
            "title": "Sunway University",
            "label": "",
            "status": "",
            "text": "initiated procurement of a Malaysian (MY) number; set up Aircall–HubSpot Help Desk pipelines; and initiated onboarding of the WhatsApp integration for the landline number.",
            "bullets": []
          },
          {
            "title": "Audit management",
            "label": "",
            "status": "",
            "text": "completed audit management and asset logs for Aircall, Sakari and Niswey, and attended the internal audit for all three.",
            "bullets": []
          },
          {
            "title": "Aircall IVR",
            "label": "",
            "status": "",
            "text": "recreated IVRs for universities following the split of teams into two groups.",
            "bullets": []
          },
          {
            "title": "Niswey",
            "label": "",
            "status": "",
            "text": "conducted testing after removing users to assess potential cost savings.",
            "bullets": []
          },
          {
            "title": "SIP",
            "label": "",
            "status": "",
            "text": "caught up with Margarita to clarify and resolve SIP-related issues.",
            "bullets": []
          },
          {
            "title": "Sakari",
            "label": "",
            "status": "",
            "text": "set up the alphanumeric sender ID in the staging environment for testing; currently awaiting approval from Sakari.",
            "bullets": []
          }
        ],
        "risks": [
          "IVR changes. The IVR changes require extensive testing to ensure everything is working as expected.",
          "Sunway WhatsApp onboarding. There may be limitations with WhatsApp onboarding, as the current number is a landline rather than a mobile number; Aircall and Twilio do not currently offer Malaysian mobile numbers."
        ],
        "nextWeek": [
          "Follow up with Sean to obtain the caller IDs required by Aircall for further investigation of the Derby call-drop issue.",
          "Continue IVR upgrades for the remaining universities.",
          "Onboard Sunway University onto Sakari and integrate it with the HubSpot portal."
        ],
        "notes": []
      },
      {
        "week": 34,
        "team": "qsapply",
        "heading": "QS Apply (Appian)",
        "highlights": "The team focussed on Appian production support requests while continuing analysis and fixes for regression issues identified during recent validation cycles.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Regression fix · applicant status hierarchy",
            "label": "",
            "status": "On track",
            "text": "Applicant status is not being updated for some applications associated with the Student and Consent Form Digitalisation flows. The fix is in progress, with release planned for next week after detailed regression testing and validation.",
            "bullets": []
          },
          {
            "title": "Production support requests",
            "label": "",
            "status": "Done",
            "text": "Added a Lead Source column to the applicant grid so the enrolment team can identify B2C applicants from the source captured at lead creation; fixed the missing institution names reported by the Finance team on the Finance Dashboard; and added an email address column to the B2B partner dashboard downloadable export. Bulk deactivation is in progress for user accounts associated with 929 agencies on the legacy contract type, covering approximately 1,100 agents and external counsellors in Appian.",
            "bullets": []
          }
        ],
        "risks": [],
        "nextWeek": [
          "Kick-off for the Appian–HubSpot migration discovery phase.",
          "Release of the applicant status hierarchy regression fix after completion of thorough testing."
        ],
        "notes": []
      },
      {
        "week": 33,
        "team": "syd1",
        "heading": "QS Application System · Charlie Liu · week of 10–15 August 2026",
        "highlights": "The QS Application System went live on the eu‑west‑2 production estate. The QS Auth tenant is running on auth.api.qs.com with SES email and WebAuthn passkeys, MFA enforcement has moved off the blunt Guardian policy onto the QAS MFA Policy action, and the drift-import gate was lifted once hook auth had been verified end to end. The supergraph delivery stack was parameterised over regions, with eu‑west‑2 added as a production target and per-region schema-release credentials, and MyQS, CX, Cerebrum and the design system were all made estate-configurable, failing fast on missing configuration instead of silently falling back to dev, which unblocked the production front end against the new federation.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "QS Auth · with Ming Shi",
            "label": "",
            "status": "On track",
            "text": "Production Auth0 estate live on eu‑west‑2: auth.api.qs.com routes verified, SES sending from no-reply@my.qs.com, WebAuthn passkey and security-key factors enabled, and MFA enforcement moved to the QAS MFA Policy action. Auth-API now accepts QS platform-audience tokens and makes the current_account_id claim namespace deployment-configurable.",
            "bullets": []
          },
          {
            "title": "QS Supergraph · with Ming Shi",
            "label": "",
            "status": "On track",
            "text": "Federation delivery stack parameterised over regions, with an eu‑west‑2 production target and per-region schema-release credential secrets; RFC 9068 client-credentials tokens accepted at the schema-release guard; qs.com origins allowed at the router; and the qas_application catalogue added and exposed in the auth subgraph, superseding product.subdomain.",
            "bullets": []
          },
          {
            "title": "Design System (qas-design) · with Lorenzo and Caitlin Jiang",
            "label": "",
            "status": "On track",
            "text": "2.0 landed, dropping Tailwind and Flowbite, then 2.0.2 to 2.0.14 shipped across the week: a configurable app-launcher base domain, a LegacyAppLauncher subpath entry that drops the react-router requirement, Auth0 audience and auth-API base URL made configurable, and atomic release pushes. With Caitlin: dropdown redesign, new table cell types, responsive grid and profile data, and the app visibility model. Adopted by MyQS, CX, RR, CBR and MyQS 1.0 Legacy.",
            "bullets": []
          },
          {
            "title": "MyQS FE · with Caitlin Jiang",
            "label": "",
            "status": "Behind",
            "text": "Passkey enrolment and restructured sign-in methods with live method statuses and step-up demotion; a real compliance audit page on scoped fields behind admin route guards; home dashboard; and standardised account pages. With Caitlin: home dashboard cards, personal information fields and the global profile-completion onboarding flow. With Ming: deferred invitation flow adopted. Behind: the user onboarding flow is merged to main but not ready to go live, so the surface cannot be released as planned.",
            "bullets": []
          },
          {
            "title": "CX FE · with Caitlin Jiang",
            "label": "",
            "status": "On track",
            "text": "Account details, contacts and subscription management released to main; user management filtering, invitation resend and typed tables; admin gating; UTC subscription dates and currency preserved on edit; and the Amplify environment hardened to source everything from qas/auth0 and fail fast. Subscription pricing, licence limits and account detail fixes.",
            "bullets": []
          },
          {
            "title": "Compliance and Pulse audit",
            "label": "",
            "status": "Behind",
            "text": "Pulse split into purpose lanes with a dedicated compliance audit path: stable event_id derivation, batch deduplication on event_id, dead letters filed once per acknowledged batch, the four warehouse event names surfaced by the 90-day gate registered, and alarms on the event_id metrics. Auth-API records old/new diffs and product attribution for server-side mutations, resolving Origin against qas_application. Behind: the compliance_log omit still opens a front-end outage window that has to be sequenced before tracking can be called done.",
            "bullets": []
          },
          {
            "title": "Account invitations and primary contacts · with Ming Shi",
            "label": "",
            "status": "On track",
            "text": "Deferred invitation provisioning across Auth-API, the federation schema and MyQS; account primary contacts with authorisation; and authenticated JWTs without a current account now allowed.",
            "bullets": []
          },
          {
            "title": "HolonIQ to QAS migration",
            "label": "",
            "status": "Behind",
            "text": "Migration work is complete in dev. Behind: the production deployment is still outstanding.",
            "bullets": []
          },
          {
            "title": "QS Data Layer · with Ming Shi",
            "label": "",
            "status": "On track",
            "text": "The Snowflake data layer landed as a repo this week: a declarative DDL baseline across dev, staging and prod; a fail-closed RLS redesign (QAS_FULL_ACCESS / QAS_APP with a tagging engine, replacing a model that was fail-open for any role without QAS_ADMIN); promote/rollback tooling that preserves database-role grants; per-environment GraphQL and DMS loader roles; and the DMS lambda project imported as a subtree. The ACCOUNTADMIN setup was applied and the per-environment service users created and verified; SVC_GRAPHQL_EDGE_PROD went in ahead of the first eu‑west‑2 federation deploy that consumed it. Dev is not yet under repo management.",
            "bullets": []
          },
          {
            "title": "Platform data and tooling",
            "label": "",
            "status": "Done",
            "text": "DMS Lambda build pinned to manylinux2014_x86_64 / cp312 wheels and per-environment service users applied through the staging and prod edges; the Careers Microsite moved to bun with a single lockfile and the code-split regression blocking builds fixed; and the MCP Cerebrum tool gated on platform product access.",
            "bullets": []
          },
          {
            "title": "Cerebrum · QS identifiers",
            "label": "",
            "status": "",
            "text": "Implemented the new QS_ID format QS_{ENTITY_TYPE}_{NANOID}{CHECK}. The identifier uses Crockford Base32, with an appended check character for validation and error detection. Added a new API endpoint for issuing QS_IDs, backed by a persistent ledger that guarantees each QS_ID is issued only once, and ENUM validation during data ingestion.",
            "bullets": []
          }
        ],
        "risks": [
          "compliance_log front-end outage. The supergraph omit is merged and Pulse’s own plan records the outage window it opens; CX has already stripped ComplianceLog selections and rerun codegen.",
          "User onboarding is not ready. The global profile-completion flow is not live.",
          "UI tweaks still outstanding. Design feedback across the 2.0 surfaces is not closed out.",
          "HolonIQ to QAS migration. Finished in dev but not deployed to production."
        ],
        "nextWeek": [
          "The eu‑west‑2 production estate gets verified end to end: auth routes, invitations from the region-verified identity and the production front end against the supergraph.",
          "The compliance_log omit gets sequenced against the CX and MyQS front ends.",
          "User onboarding and the outstanding UI tweaks.",
          "The HolonIQ to QAS migration gets a production deployment."
        ],
        "notes": [
          "New production estate. A new production environment has been deployed in eu‑west‑2 (London) and is now hosted under the qs.com domain."
        ]
      },
      {
        "week": 33,
        "team": "infra-all",
        "heading": "Infrastructure · Infrastructure team · week of 10–15 August 2026",
        "highlights": "",
        "highlightBullets": [
          "MoveON: successfully migrated the demo platform PHP servers to Ubuntu 22.04, validating post-migration functionality.",
          "MoveIN: upgraded the RabbitMQ demo environment server to Ubuntu 24.04.",
          "D&E: completed DMARC configuration for the identified domains and reviewed the AWS analytics accounts, achieving cost savings."
        ],
        "delivery": [
          {
            "title": "MoveIN",
            "label": "",
            "status": "",
            "text": "Investigated Elasticsearch indexing and Memcached eviction issues, with configuration changes applied.",
            "bullets": []
          },
          {
            "title": "MoveON",
            "label": "",
            "status": "",
            "text": "Applied August patches to the staging and demo environments. Resolved Jenkins pipeline and AP dev VM issues, and implemented SSL automation pipeline work on staging. Set up a new workflow for renewing SSL certificates; implementation for all SSL certificates across MoveON environments continues next week.",
            "bullets": []
          },
          {
            "title": "TU and TM",
            "label": "",
            "status": "",
            "text": "Completed documentation for the Datadog monitoring updates in QSCHINA and reviewed Cloudflare metrics for TopUniversities.",
            "bullets": []
          },
          {
            "title": "D&E",
            "label": "",
            "status": "",
            "text": "Updated the ‘Auto Create Instance Check Alarms’ Lambda for automatic deletion of old alarms.",
            "bullets": []
          }
        ],
        "risks": [
          "MoveON downtime. Downtime was encountered owing to a disk failure on the MoveON Telemaxx hosting. VM migration to shared storage has been implemented and a RAID rebuild begun.",
          "D&E patching budget. Automox has been evaluated as a product for patching all D&E AWS account resources; awaiting budget approval from Patrick."
        ],
        "nextWeek": [
          "MoveIN: continue validation of the Memcached changes and resolve the Elasticsearch issues.",
          "MoveON: continue implementation of the SSL certificate renewal workflow across all environments; prepare the MySQL cluster server upgrade and build automation for OVH France; and switch the Telemaxx web servers over to Ubuntu.",
          "D&E: finalise the qs-hub-dev OS upgrades and continue progress on AWS resource optimisation."
        ],
        "notes": [
          "General: Bitdefender licensing for QS is being evaluated; legal confirmation is awaited and expected next week.",
          "MoveON Advanced Publisher: a GDPR compliance application issue was identified, requiring the infrastructure team to provide further evidence requested by the development team; the relevant logs have been provided."
        ]
      },
      {
        "week": 33,
        "team": "blr2",
        "heading": "BLR2 · week of 10–15 August 2026",
        "highlights": "The QS Stars dashboard is now production-ready: fully renamed, copy and UI changes shipped, and the category deep-dive aligned with Figma. Stars is the primary way institutions read and act on QS performance. The MyQS header, sidebar and app launcher are now aligned with CX platform standards. On Partner Discovery messaging, the docked chat UI has been built, with data modelling and API design under way, bringing in-platform communication to partnership workflows.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "MyQS Auth migration",
            "label": "",
            "status": "On track",
            "text": "Removed legacy ROLE references across the codebase to follow CX roles; integrated the QAS app launcher, replacing the custom implementation; and updated the header and sidebar UI to match the CX design.",
            "bullets": []
          },
          {
            "title": "Stars",
            "label": "",
            "status": "On track",
            "text": "Shipped all P1/P2 text changes (IPS‑2317, IPS‑2332), the route rename (stars-new to stars), an accordion responsiveness fix and brand colour updates.",
            "bullets": []
          },
          {
            "title": "Partner Discovery",
            "label": "",
            "status": "On track",
            "text": "Opportunity Management filters and status dots (IPS‑2324) moved to QA. The docked chat UI (IPS‑2350) has been built, targeting QA next week. Data modelling and APIs for messaging (IPS‑2347) are in progress, with the polling approach confirmed.",
            "bullets": []
          },
          {
            "title": "QA",
            "label": "",
            "status": "On track",
            "text": "Completed MyQS sprint regression testing. No live deployment this sprint owing to the new Auth implementation.",
            "bullets": []
          }
        ],
        "risks": [
          "Stars blocker. Some category tabs (Online Learning, Subject Ranking and others) show as ‘Not validated’ in Snowflake and are filtered out. If QA flags these, the root cause is data or configuration, not the front end. Confirmation is needed from the data team before QA sign-off.",
          "Decision needed. The Stars legacy route (stars-legacy) is still publicly accessible. A decision is needed on removal, redirect or a feature flag to avoid user confusion."
        ],
        "nextWeek": [
          "Stars: begin the new UI aligned with brand guidelines (IPS‑2337).",
          "Partner Discovery: ship the docked chat (IPS‑2350) to QA, wire the real messaging and attachment API and decide the message data contract, targeting a working communication feature with edit/delete and role-based contribution changes.",
          "QA: start testing newly assigned QPD stories, execute test cases and retest resolved defects."
        ],
        "notes": []
      },
      {
        "week": 33,
        "team": "blr1",
        "heading": "BLR1 · week of 10–15 August 2026",
        "highlights": "Progressed HUB 2 (Media Partners for Outreach) by identifying and aligning on a solution approach that reduces implementation complexity and minimises user impact. This accelerates delivery while establishing a scalable foundation for future media-partner acquisition opportunities.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "HUB 2 – Media Partners for Outreach · IPS‑2220, IPS‑2341",
            "label": "",
            "status": "On track",
            "text": "Completed analysis and aligned on a solution approach that reduces development effort and user impact.",
            "bullets": []
          },
          {
            "title": "HUB 1 project setup",
            "label": "",
            "status": "On track",
            "text": "The team completed knowledge transfer, Git and Docker setup, and application onboarding; sample data population is in progress (cross-training from the one contractor developer to QS developers).",
            "bullets": []
          },
          {
            "title": "MyQS QPD",
            "label": "",
            "status": "On track",
            "text": "Planning to take on QPD tickets to support team capacity and help balance workload across the team.",
            "bullets": []
          }
        ],
        "risks": [
          "Dependency on Outreach API integration. Full end-to-end delivery of HUB 2 remains dependent on the Outreach team adopting the updated Media Partners APIs."
        ],
        "nextWeek": [
          "Begin testing and validation of the HUB 2 solution.",
          "Continue HUB 1 environment setup and complete sample data onboarding.",
          "Progress MyQS QPD tickets to support delivery and reduce developer workload."
        ],
        "notes": []
      },
      {
        "week": 33,
        "team": "ecu1",
        "heading": "ECU1 · week of 10–15 August 2026",
        "highlights": "All tasks set for deployment in the coming week on 1 Mentor (1M) were successfully certified. This is important as it includes a request form for new features in the Advisor instance that leads to contacting sales.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Refactor of legacy code",
            "label": "",
            "status": "",
            "text": "Reduced the number of lines of code in the 1M project to enable Sonar to perform quality, accessibility and security analysis more aligned with standards.",
            "bullets": []
          },
          {
            "title": "Career Trends",
            "label": "",
            "status": "",
            "text": "Two CTAs will be added: additional locations on the Advisor platform will include the option to request new features for the sales team.",
            "bullets": []
          },
          {
            "title": "Learning Path to academic programme matching",
            "label": "",
            "status": "",
            "text": "Allows a Learning Path to be assigned directly to the Learner based on their academic programmes, consistently recommending resources relevant to their goals.",
            "bullets": []
          }
        ],
        "risks": [
          "QA capacity for 1M certification. Certification of the 1M production environment was estimated at three days with three QAs; with only one QA now available, more days may be required. To mitigate this, the Cypress automation project will be used to detect more critical errors and reduce QA time.",
          "IBM SSO integration. The IBM project was discussed this week, but the SSO integration and how to avoid duplicate Learner accounts remain unclear. A task has been created for the current sprint to evaluate alternatives, which could even lead to development by IBM."
        ],
        "nextWeek": [
          "Continue developing event tracking in Mixpanel for 1M, to understand where users are losing interest on the platform.",
          "Investigate the SSO implementation for IBM in 1M.",
          "Personalise Learning Paths based on the skills of the Learners in 1M."
        ],
        "notes": []
      },
      {
        "week": 33,
        "team": "ecu2",
        "heading": "ECU2 · week of 10–15 August 2026",
        "highlights": "Career Matcher expansion: Career Matcher can now match candidates against a much wider range of occupations, directly improving the accuracy of the core recommendation feature.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Career recommendation accuracy",
            "label": "",
            "status": "Shipped",
            "text": "Significantly expanded the data behind Career Matcher, enabling more precise matches across a broader range of careers.",
            "bullets": []
          },
          {
            "title": "Site navigation and footer",
            "label": "",
            "status": "Shipped",
            "text": "Fixed navigation and footer issues affecting overall site usability.",
            "bullets": []
          },
          {
            "title": "Accessibility compliance",
            "label": "",
            "status": "Shipped",
            "text": "Completed accessibility improvements and added automated checks to help prevent future regressions.",
            "bullets": []
          },
          {
            "title": "Site speed",
            "label": "",
            "status": "On track",
            "text": "Restructured page loading to improve performance, especially on the first visit.",
            "bullets": []
          },
          {
            "title": "Hosting and deployment upgrade",
            "label": "",
            "status": "Behind",
            "text": "Upgrading the tools used to build and deploy the site. Stability issues were encountered that required several same-day emergency fixes to keep deployments working.",
            "bullets": []
          },
          {
            "title": "Homepage and lead capture content",
            "label": "",
            "status": "Shipped",
            "text": "Completed a batch of homepage and lead capture form content and layout updates.",
            "bullets": []
          }
        ],
        "risks": [
          "Limited new feature work. The microsite is essentially feature complete. The team is waiting for the next priority, such as Alumni Insights, or for new feature and design requirements from Product; if another team needs support, they can also help there."
        ],
        "nextWeek": [],
        "notes": []
      },
      {
        "week": 33,
        "team": "events",
        "heading": "Digital and Events · Events and Drupal · week of 10–15 August 2026",
        "highlights": "",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Career Matcher",
            "label": "",
            "status": "On track",
            "text": "Backend work completed, including last sprint’s requirement changes. Frontend work is ongoing as expected.",
            "bullets": []
          },
          {
            "title": "Quick Wins",
            "label": "",
            "status": "On track",
            "text": "Custom forms changes have been completed and are ready for next week’s release.",
            "bullets": []
          },
          {
            "title": "CMT module conversion from React to Drupal",
            "label": "",
            "status": "On track",
            "text": "In the testing stage of the conversion, fixing any issues reported during testing.",
            "bullets": []
          },
          {
            "title": "QSA page and form",
            "label": "",
            "status": "On track",
            "text": "Reported data issues are fixed and breadcrumbs added as requested; ready for next week’s release.",
            "bullets": []
          },
          {
            "title": "Angular upgrade",
            "label": "",
            "status": "On track",
            "text": "In the testing stage of the upgrade, with bug fixing of issues reported.",
            "bullets": []
          },
          {
            "title": "Agenda builder",
            "label": "",
            "status": "On track",
            "text": "Implementing the last requirements phase, with testing happening in parallel.",
            "bullets": []
          }
        ],
        "risks": [
          "Angular upgrade. This is a substantial change that requires a lot of testing, and the events season is approaching. It should ideally be released before the season starts.",
          "Drupal upgrade. Major code development needs to be on hold while all developers upgrade their local environments and all issues are fixed. DevOps team availability will also be needed, so a plan is now being aligned with them to make sure the team is fully prepared."
        ],
        "nextWeek": [
          "TU/TM: release on 20 August.",
          "Angular: release date discussed and agreed upon."
        ],
        "notes": []
      },
      {
        "week": 33,
        "team": "hubspot",
        "heading": "University Services · Simon Pennington · week of 10–15 August 2026",
        "highlights": "Raw-data file ingestion workflows have now been completed and tested. This cuts the time it takes to upload raw data files supplied by clients from seven to eight hours per file down to one to two hours, with minimal human intervention. V2 contact matching has also been validated and tested; it will go live across all portals and resolves many of the duplication and throughput issues in the contact matching created by Huble.",
        "highlightBullets": [],
        "delivery": [
          {
            "title": "Data ingestion workflows",
            "label": "",
            "status": "On track",
            "text": "New workflows take raw data files, map the fields, rank the statuses and create contacts and COI objects automatically. This reduces the human checking needed to just records on review, and cuts around five hours from producing the required HubSpot objects.",
            "bullets": []
          },
          {
            "title": "V2 contact matching",
            "label": "",
            "status": "On track",
            "text": "V2 fixes the issues inherent in the contact matching created by Huble. Throughput speed is massively enhanced and duplication issues are removed. This will now be rolled out to all portals.",
            "bullets": []
          },
          {
            "title": "Marketing contact management",
            "label": "",
            "status": "On track",
            "text": "New workflows and rules have been created to manage the marketing contacts in HubSpot. There are currently too many marketing contacts in each portal, incurring monthly costs based on marketing contact numbers; the new workflows and rules have reduced the numbers in all portals to stop the costs being incurred.",
            "bullets": []
          }
        ],
        "risks": [
          "Missing data from migration files. The BI team have found that they missed contacts and Course of Interest (COI) objects in their alpha and delta extracts. Work is under way to establish what is missing and get it updated in all portals."
        ],
        "nextWeek": [
          "Work with Huble on recon workflows.",
          "Update all missing data across all portals.",
          "Roll out the contact-matching workflows to all portals.",
          "Adapt the data ingestion workflows for priority clients."
        ],
        "notes": [
          "These updates cover the development work needed; all other work is reportable by the Success or marketing teams."
        ]
      }
    ]
  },
  "weekly": {
    "reports": [
      {
        "id": "q3-patterns",
        "kind": "patterns",
        "label": "Q3 - 2026",
        "week": "Q3",
        "from": 33,
        "to": 41,
        "dates": "Weeks 33–41 · August to October 2026",
        "source": "the Week 33 to 41 reports",
        "pdf": "reports/qs-q3-patterns-report.pdf"
      },
      {
        "id": "42",
        "label": "Week 42",
        "week": 42,
        "dates": "12–16 October 2026",
        "source": "QS Week 42 Tech Report",
        "pdf": "reports/qs-week-42-report.pdf",
        "mapping": "labelled"
      },
      {
        "id": "41",
        "label": "Week 41",
        "week": 41,
        "dates": "5–9 October 2026",
        "source": "QS Week 41 Tech Report",
        "pdf": "reports/qs-week-41-report.pdf",
        "mapping": "labelled"
      },
      {
        "id": "40",
        "label": "Week 40",
        "week": 40,
        "dates": "28 September – 2 October 2026",
        "report": "QS Week 40 Tech Report and the Data Team Week 40 Update",
        "source": "QS Week 40 Tech Report and the Data Team Week 40 Update",
        "pdf": "reports/qs-week-40-report.pdf",
        "mapping": "labelled"
      },
      {
        "id": "38",
        "label": "Week 38",
        "week": 38,
        "dates": "14–19 September 2026",
        "source": "QS Week 38 Tech Report",
        "pdf": "reports/qs-week-38-report.pdf",
        "mapping": "labelled"
      },
      {
        "id": "37",
        "label": "Week 37",
        "week": 37,
        "dates": "7–12 September 2026",
        "source": "QS Week 37 Tech Report",
        "pdf": "reports/qs-week-37-report.pdf",
        "mapping": "labelled"
      },
      {
        "id": "36",
        "label": "Week 36",
        "week": 36,
        "dates": "31 August – 5 September 2026",
        "source": "QS Week 36 Tech Report",
        "pdf": "reports/qs-week-36-report.pdf",
        "mapping": "labelled"
      },
      {
        "id": "35",
        "label": "Week 35",
        "week": 35,
        "dates": "24–30 August 2026",
        "source": "QS Week 35 Tech Report",
        "pdf": "reports/qs-week-35-report.pdf",
        "mapping": "labelled"
      },
      {
        "id": "34",
        "label": "Week 34",
        "week": 34,
        "dates": "17–22 August 2026",
        "source": "QS Week 34 Tech Report",
        "pdf": "reports/qs-week-34-report.pdf",
        "mapping": "inferred"
      },
      {
        "id": "33",
        "label": "Week 33",
        "week": 33,
        "dates": "10–15 August 2026",
        "source": "QS Week 33 Tech Report",
        "pdf": "reports/qs-week-33-report.pdf",
        "mapping": "inferred"
      }
    ],
    "slideSize": {
      "width": 1280,
      "height": 720
    },
    "note": "Slides are derived from updates and teamUpdates for the week. Build one with: npm run build:weekly <week>."
  }
};
