'use client';

import { useParams } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from 'react';

const projectsData = {
    "nouveau-pavilion": {
        title: "Nouveau Pavilion",
        category: "Architecture",
        year: "2023",
        location: "Paris, France",
        client: "Galleries d'Art Moderne",
        description: "A temporary sculptural intervention exploring the limits of structural glass and carbon fiber. The pavilion serves as a meditative space where light and shadow perform a continuous dance through generative patterns.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ5CzULKKeUsYM-QmuqzlTJqwxLAyw4o6awXp7iTTHgVt2U10onHI7vhB71J3bYlqOzAKK_ztCe4NwDwCQf6bQqVU0WKcPmmspZRhG01_NCCRsdSxP0CdJ0FiZHVBcM0z6mAjLnk1ZA4hVusj1JFWfUtW7zsIM3Z7jbVkvcWW3kS5I1-3AM6p7aSfUw1fZS3YFv7PTRFuCDftRtB5PN8_Gh9torB7h6s2DDjQMJqkv3n2-YPhtvqZnXek1Kn9PAcbmx_p9D77IVoY",
        details: [
            { label: "Fabrication", value: "Carbon Fiber Mesh" },
            { label: "Material", value: "Dichroic Glass" },
            { label: "Status", value: "Completed" }
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ5CzULKKeUsYM-QmuqzlTJqwxLAyw4o6awXp7iTTHgVt2U10onHI7vhB71J3bYlqOzAKK_ztCe4NwDwCQf6bQqVU0WKcPmmspZRhG01_NCCRsdSxP0CdJ0FiZHVBcM0z6mAjLnk1ZA4hVusj1JFWfUtW7zsIM3Z7jbVkvcWW3kS5I1-3AM6p7aSfUw1fZS3YFv7PTRFuCDftRtB5PN8_Gh9torB7h6s2DDjQMJqkv3n2-YPhtvqZnXek1Kn9PAcbmx_p9D77IVoY",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCHyJcPBCF6ebsUGU7ZCypNmUKZVOynARX9M55AN1JZZOxWUU81CfgMkT0kY-PuJBgJoMS8Nt5Ej-BQqxOXnXIrWvC7rtZBPGycZi50JvmSR7WwQquBpldbRqxoFC9hWpm8h3rNN41csvdE_AgpO66QYOr9ZFvu00o7nWPMLPlzSUq1MvrCLkSPT5FtMP81cfkhEsNrUei7ldsm2Q1uNCpeHsfS_DP2zrkyEv8DgN_ZIIYMOUjxVhW1mQbIxXEWVv6p2XCdq7a7u4E",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCwel83yexCP55LtI72ogmeT5ABAyTkeEYbyCCPnaBOx2cZHaCdaQlEZorwim6UO3-eC_j-YUinH0AhJVU9wgn2SJjuRwTCUDFhXipVIyneVZ4F-7o_g_8HcurlbykI2-UVQoHlFcvJxuZviP9Vj1bqDW6bfR6RKkEFYY1WI89kPQZCuHbqcGrrjNWKpsatV0B_uNlguuzfWENGdIwE-0PWKEg3GphFpABmLrFQbsFTWXRmyeZd0zG0p2_PdLbQehGXg2H27a64eNU",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAnxzAaA0lJ62emswelaz-jxuZtZTMMoya5H5WiPBrbh4V_012rfrH0w-2e61r1gmUEckq21fK59gdy5TdIdu-1P2UbI4wCu11hWntYRmP2HYf8tnXQIC_7vqMI76czpdBbqXZVWMHbXJM39x32idYMcQAXgUIdbbW2FrfH3ua8UwV3iWgJmJ9uZQZr61qJCfnFw3A0gI2B94kShm-BBUhL9GsRqmLPK2nzdaY28vBfQZORO8T4YjLqqMHyn9k7GDsujB-FaYLynLo",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBMUrdaK7RHH-ozwFT4M7WQxEsy49dm56QTIIk4vInlO7rAZeYEMArRqDYGwGB16F2KRKbz5SZAGuZkcKJWBgUi3U_7XNtmqcpMVWOykK7emqQrQJzuyEq16v9ba30VOplcC4qZ5W6Tw5QqF4S09sdvDXHSVb7vwcgD_PcFRrd2SHHmG8nx6YaZhaHbbPSZ-UCDv8AXdMOZGY-4Ux7bgQppHBBCQWmyWCdWFzEhCBjKaYf4RNyWMGZXGK3b_4s9BJ49pScQeOMmS1A"
        ]
    },
    // ... same for others, using multi-replace or general logic to augment gallery
    "steel-lattice-structure": {
        title: "Steel Lattice Structure",
        category: "Fabrication",
        year: "2022",
        location: "Seattle, WA",
        client: "Tech Hub Plaza",
        description: "Advanced robotic welding and CNC laser cutting come together in this intricate architectural screen. The lattice provides both structural support and solar shading for the main atrium.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_8_x8QCjBMCTTWQ0fC__hzxMkd2qZ-cCMlY5nIp0VZXTk5guGJq4W9ehdofVYyOsiPBvGWpx1jOxSa62MENrddjp8c3dEqYSk1oZJk4ei8HdRThIdoZAYEVLix-KWVZkQWLHByn6M2ZUr42zx1xucBwAUYKWzJmP0ob8opcsCDPvTEW3A4U7DBdm_X2AgeLFrPY2VLD_qlWCo-0E8kYHsl_LWwPsuxQTi0xufny-dzS_WXQprignoTrTz3zreUWiLck7-JtfhOZk",
        details: [
            { label: "Technique", value: "Parametric Welding" },
            { label: "Material", value: "A36 Structural Steel" },
            { label: "Scale", value: "12m Height" }
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD_8_x8QCjBMCTTWQ0fC__hzxMkd2qZ-cCMlY5nIp0VZXTk5guGJq4W9ehdofVYyOsiPBvGWpx1jOxSa62MENrddjp8c3dEqYSk1oZJk4ei8HdRThIdoZAYEVLix-KWVZkQWLHByn6M2ZUr42zx1xucBwAUYKWzJmP0ob8obcsCDPvTEW3A4U7DBdm_X2AgeLFrPY2VLD_qlWCo-0E8kYHsl_LWwPsuxQTi0xufny-dzS_WXQprignoTrTz3zreUWiLck7-JtfhOZk",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBN4wYeoGIixUoJ5bKg4QWShbfXsGK08x3YJYiuFOjU1xvlZJiv5o6E7t4KG-Iq3zUAo6UsV8bW-By-Xn3BOk28m7mgbbHCE1kBGKjfYh5V7SvlXn4ukTsb2U9eS2d8DzjyZzMIiEz5kUUrZnB0J01h19OBveWrwRLvOk0s5_pv72pT2ptWqSj8rKgRv6U1LQJVah3rmFyfjtpQXBlHW5fe1-uj5nlYSi206e-QjEsWwaoE2AS5G4Cw4ziGMJj9fOdWWNL5leM1g_w",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ5CzULKKeUsYM-QmuQzlTJqwxLAyw4o6awXp7iTTHgVt2U10onHI7vhB71J3bYlqOzAKK_ztCe4NwDwCQf6bQqVU0WKcPmmspZRhG01_NCCRsdSxP0CdJ0FiZHVBcM0z6mAjLnk1ZA4hVusj1JFWfUtW7zsIM3Z7jbVkvcWW3kS5I1-3AM6p7aSfUw1fZS3YFv7PTRFuCDftRtB5PN8_Gh9torB7h6s2DDjQMJqkv3n2-YPhtvqZnXek1Kn9PAcbmx_p9D77IVoY",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCHyJcPBCF6ebsUGU7ZCypNmUKZVOynARX9M55AN1JZZOxWUU81CfgMkT0kY-PuJBgJoMS8Nt5Ej-BQqxOXnXIrWvC7rtZBPGycZi50JvmSR7WwQquBpldbRqxoFC9hWpm8h3rNN41csvdE_AgpO66QYOr9ZFvu00o7nWPMLPlzSUq1MvrCLkSPT5FtMP81cfkhEsNrUei7ldsm2Q1uNCpeHsfS_DP2zrkyEv8DgN_ZIIYMOUjxVhW1mQbIxXEWVv6p2XCdq7a7u4E"
        ]
    },
    "the-monolith": {
        title: "The Monolith Pavilion",
        category: "Architecture",
        year: "2023",
        location: "Reykjavik, Iceland",
        client: "Public Space Commission",
        description: "A brutalist masterpiece that harmonizes with the volcanic landscape of the Nordic coast. The rough concrete exterior contrasts with a highly polished interior that reflects the Aurora Borealis.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHyJcPBCF6ebsUGU7ZCypNmUKZVOynARX9M55AN1JZZOxWUU81CfgMkT0kY-PuJBgJoMS8Nt5Ej-BQqxOXnXIrWvC7rtZBPGycZi50JvmSR7WwQquBpldbRqxoFC9hWpm8h3rNN41csvdE_AgpO66QYOr9ZFvu00o7nWPMLPlzSUq1MvrCLkSPT5FtMP81cfkhEsNrUei7ldsm2Q1uNCpeHsfS_DP2zrkyEv8DgN_ZIIYMOUjxVhW1mQbIxXEWVv6p2XCdq7a7u4E",
        details: [
            { label: "Concrete", value: "Self-Compacting" },
            { label: "Interior", value: "Polished Aluminum" },
            { label: "Energy", value: "Geothermal Heating" }
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCHyJcPBCF6ebsUGU7ZCypNmUKZVOynARX9M55AN1JZZOxWUU81CfgMkT0kY-PuJBgJoMS8Nt5Ej-BQqxOXnXIrWvC7rtZBPGycZi50JvmSR7WwQquBpldbRqxoFC9hWpm8h3rNN41csvdE_AgpO66QYOr9ZFvu00o7nWPMLPlzSUq1MvrCLkSPT5FtMP81cfkhEsNrUei7ldsm2Q1uNCpeHsfS_DP2zrkyEv8DgN_ZIIYMOUjxVhW1mQbIxXEWVv6p2XCdq7a7u4E",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCwel83yexCP55LtI72ogmeT5ABAyTkeEYbyCCPnaBOx2cZHaCdaQlEZorwim6UO3-eC_j-YUinH0AhJVU9wgn2SJjuRwTCUDFhXipVIyneVZ4F-7o_g_8HcurlbykI2-UVQoHlFcvJxuZviP9Vj1bqDW6bfR6RKkEFYY1WI89kPQZCuHbqcGrrjNWKpsatV0B_uNlguuzfWENGdIwE-0PWKEg3GphFpABmLrFQbsFTWXRmyeZd0zG0p2_PdLbQehGXg2H27a64eNU",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ5CzULKKeUsYM-QmuqzlTJqwxLAyw4o6awXp7iTTHgVt2U10onHI7vhB71J3bYlqOzAKK_ztCe4NwDwCQf6bQqVU0WKcPmmspZRhG01_NCCRsdSxP0CdJ0FiZHVBcM0z6mAjLnk1ZA4hVusj1JFWfUtW7zsIM3Z7jbVkvcWW3kS5I1-3AM6p7aSfUw1fZS3YFv7PTRFuCDftRtB5PN8_Gh9torB7h6s2DDjQMJqkv3n2-YPhtvqZnXek1Kn9PAcbmx_p9D77IVoY",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAnxzAaA0lJ62emswelaz-jxuZtZTMMoya5H5WiPBrbh4V_012rfrH0w-2e61r1gmUEckq21fK59gdy5TdIdu-1P2UbI4wCu11hWntYRmP2HYf8tnXQIC_7vqMI76czpdBbqXZVWMHbXJM39x32idYMcQAXgUIdbbW2FrfH3ua8UwV3iWgJmJ9uZQZr61qJCfnFw3A0gI2B94kShm-BBUhL9GsRqmLPK2nzdaY28vBfQZORO8T4YjLqqMHyn9k7GDsujB-FaYLynLo"
        ]
    },
    "glass-atrium": {
        title: "Glass Atrium",
        category: "Fabrication",
        year: "2021",
        location: "London, UK",
        client: "Vanguard Corporate",
        description: "A complex geometric skylight system utilizing high-precision structural steel connectors. The result is an ethereal canopy that floods the workspace with natural daylight while maintaining thermal efficiency.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMUrdaK7RHH-ozwFT4M7WQxEsy49dm56QTIIk4vInlO7rAZeYEMArRqDYGwGB16F2KRKbz5SZAGuZkcKJWBgUi3U_7XNtmqcpMVWOykK7emqQrQJzuyEq16v9ba30VOplcC4qZ5W6Tw5QqF4S09sdvDXHSVb7vwcgD_PcFRrd2SHHmG8nx6YaZhaHbbPSZ-UCDv8AXdMOZGY-4Ux7bgQppHBBCQWmyWCdWFzEhCBjKaYf4RNyWMGZXGK3b_4s9BJ49pScQeOMmS1A",
        details: [
            { label: "Glass", value: "Triple Glazed Low-E" },
            { label: "Connectors", value: "Custom Milling" },
            { label: "Surface", value: "450 sqm" }
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBMUrdaK7RHH-ozwFT4M7WQxEsy49dm56QTIIk4vInlO7rAZeYEMArRqDYGwGB16F2KRKbz5SZAGuZkcKJWBgUi3U_7XNtmqcpMVWOykK7emqQrQJzuyEq16v9ba30VOplcC4qZ5W6Tw5QqF4S09sdvDXHSVb7vwcgD_PcFRrd2SHHmG8nx6YaZhaHbbPSZ-UCDv8AXdMOZGY-4Ux7bgQppHBBCQWmyWCdWFzEhCBjKaYf4RNyWMGZXGK3b_4s9BJ49pScQeOMmS1A",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAnxzAaA0lJ62emswelaz-jxuZtZTMMoya5H5WiPBrbh4V_012rfrH0w-2e61r1gmUEckq21fK59gdy5TdIdu-1P2UbI4wCu11hWntYRmP2HYf8tnXQIC_7vqMI76czpdBbqXZVWMHbXJM39x32idYMcQAXgUIdbbW2FrfH3ua8UwV3iWgJmJ9uZQZr61qJCfnFw3A0gI2B94kShm-BBUhL9GsRqmLPK2nzdaY28vBfQZORO8T4YjLqqMHyn9k7GDsujB-FaYLynLo"
        ]
    },
    "the-cantilever": {
        title: "The Cantilever",
        category: "Architecture",
        year: "2022",
        location: "Austin, TX",
        client: "Private Residence",
        description: "Challenging gravity with a 15-meter cantilevered terrace overlooking the hill country. The project pushes the boundaries of suspended structural steel in residential architecture.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBlLWvcrLuCVkj1e7-gpO_D7EbxFScUgMRLOqxqdvmYFotxGKyU8itY0jxpls6ABwXPuMOmnDq_ymbEmVUWPfC4wTh5zHDXSMJUIndtFQSM4N_a2SrLRtafZ6RRNYfBDqSbp0RzemFq90aj5DtZDkaDF_I7ycKSE2jw5T2fD_XE4CCE2mtRhe5lLJiYzcCrLoNN32em4y6fuLdIl7nsNfL-Vr_uqrENklLBensGjN2miJ5GKBMwYpuc3fH6q7Tp7znGv9dpMfu6MI",
        details: [
            { label: "Balance", value: "Counterweight Core" },
            { label: "Steel", value: "Weathering Steel" },
            { label: "Decking", value: "Bespoke Timber" }
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCBlLWvcrLuCVkj1e7-gpO_D7EbxFScUgMRLOqxqdvmYFotxGKyU8itY0jxpls6ABwXPuMOmnDq_ymbEmVUWPfC4wTh5zHDXSMJUIndtFQSM4N_a2SrLRtafZ6RRNYfBDqSbp0RzemFq90aj5DtZDkaDF_I7ycKSE2jw5T2fD_XE4CCE2mtRhe5lLJiYzcCrLoNN32em4y6fuLdIl7nsNfL-Vr_uqrENklLBensGjN2miJ5GKBMwYpuc3fH6q7Tp7znGv9dpMfu6MI",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCHyJcPBCF6ebsUGU7ZCypNmUKZVOynARX9M55AN1JZZOxWUU81CfgMkT0kY-PuJBgJoMS8Nt5Ej-BQqxOXnXIrWvC7rtZBPGycZi50JvmSR7WwQquBpldbRqxoFC9hWpm8h3rNN41csvdE_AgpO66QYOr9ZFvu00o7nWPMLPlzSUq1MvrCLkSPT5FtMP81cfkhEsNrUei7ldsm2Q1uNCpeHsfS_DP2zrkyEv8DgN_ZIIYMOUjxVhW1mQbIxXEWVv6p2XCdq7a7u4E"
        ]
    },
    "industrial-core": {
        title: "Industrial Core",
        category: "Fabrication",
        year: "2023",
        location: "Berlin, Germany",
        client: "Kreativ Loft",
        description: "Heavy-duty industrial components repurposed into a boutique office lobby installation. Every element retains the grit of its origin while being refined to jewelry-level precision through hand-finishing.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN4wYeoGIixUoJ5bKg4QWShbfXsGK08x3YJYiuFOjU1xvlZJiv5o6E7t4KG-Iq3zUAo6UsV8bW-By-Xn3BOk28m7mgbbHCE1kBGKjfYh5V7SvlXn4ukTsb2U9eS2d8DzjyZzMIiEz5kUUrZnB0J01h19OBveWrwRLvOk0s5_pv72pT2ptWqSj8rKgRv6U1LQJVah3rmFyfjtpQXBlHW5fe1-uj5nlYSi206e-QjEsWwaoE2AS5G4Cw4ziGMJj9fOdWWNL5leM1g_w",
        details: [
            { label: "Origins", value: "Aerospace Surplus" },
            { label: "Finish", value: "Black Oxide" },
            { label: "Assembly", value: "Visible Fasteners" }
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBN4wYeoGIixUoJ5bKg4QWShbfXsGK08x3YJYiuFOjU1xvlZJiv5o6E7t4KG-Iq3zUAo6UsV8bW-By-Xn3BOk28m7mgbbHCE1kBGKjfYh5V7SvlXn4ukTsb2U9eS2d8DzjyZzMIiEz5kUUrZnB0J01h19OBveWrwRLvOk0s5_pv72pT2ptWqSj8rKgRv6U1LQJVah3rmFyfjtpQXBlHW5fe1-uj5nlYSi206e-QjEsWwaoE2AS5G4Cw4ziGMJj9fOdWWNL5leM1g_w",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD_8_x8QCjBMCTTWQ0fC__hzxMkd2qZ-cCMlY5nIp0VZXTk5guGJq4W9ehdofVYyOsiPBvGWpx1jOxSa62MENrddjp8c3dEqYSk1oZJk4ei8HdRThIdoZAYEVLix-KWVZkQWLHByn6M2ZUr42zx1xucBwAUYKWzJmP0ob8obcsCDPvTEW3A4U7DBdm_X2AgeLFrPY2VLD_qlWCo-0E8kYHsl_LWwPsuxQTi0xufny-dzS_WXQprignoTrTz3zreUWiLck7-JtfhOZk"
        ]
    },
    "kinetic-timber": {
        title: "Kinetic Timber",
        category: "Research",
        year: "2023",
        location: "Oslo, Norway",
        client: "Research Foundation",
        description: "An exploration of adaptive wooden structures that react to humidity and light. The installation uses the natural properties of hygroscopic wood to create a living, breathing facade.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwel83yexCP55LtI72ogmeT5ABAyTkeEYbyCCPnaBOx2cZHaCdaQlEZorwim6UO3-eC_j-YUinH0AhJVU9wgn2SJjuRwTCUDFhXipVIyneVZ4F-7o_g_8HcurlbykI2-UVQoHlFcvJxuZviP9Vj1bqDW6bfR6RKkEFYY1WI89kPQZCuHbqcGrrjNWKpsatV0B_uNlguuzfWENGdIwE-0PWKEg3GphFpABmLrFQbsFTWXRmyeZd0zG0p2_PdLbQehGXg2H27a64eNU",
        details: [
            { label: "Mechanism", value: "Passive Actuation" },
            { label: "Material", value: "Cross Laminated Timber" },
            { label: "Sensors", value: "Environmental" }
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCwel83yexCP55LtI72ogmeT5ABAyTkeEYbyCCPnaBOx2cZHaCdaQlEZorwim6UO3-eC_j-YUinH0AhJVU9wgn2SJjuRwTCUDFhXipVIyneVZ4F-7o_g_8HcurlbykI2-UVQoHlFcvJxuZviP9Vj1bqDW6bfR6RKkEFYY1WI89kPQZCuHbqcGrrjNWKpsatV0B_uNlguuzfWENGdIwE-0PWKEg3GphFpABmLrFQbsFTWXRmyeZd0zG0p2_PdLbQehGXg2H27a64eNU",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCHyJcPBCF6ebsUGU7ZCypNmUKZVOynARX9M55AN1JZZOxWUU81CfgMkT0kY-PuJBgJoMS8Nt5Ej-BQqxOXnXIrWvC7rtZBPGycZi50JvmSR7WwQquBpldbRqxoFC9hWpm8h3rNN41csvdE_AgpO66QYOr9ZFvu00o7nWPMLPlzSUq1MvrCLkSPT5FtMP81cfkhEsNrUei7ldsm2Q1uNCpeHsfS_DP2zrkyEv8DgN_ZIIYMOUjxVhW1mQbIxXEWVv6p2XCdq7a7u4E"
        ]
    },
    "neural-steel": {
        title: "Neural Steel",
        category: "Custom Fabrication",
        year: "2024",
        location: "Tokyo, Japan",
        client: "Cyber Art Collective",
        description: "Algorithmic design translated into a series of generative steel sculptures. Each piece is unique, calculated by neural networks to optimize structural integrity and visual complexity.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnxzAaA0lJ62emswelaz-jxuZtZTMMoya5H5WiPBrbh4V_012rfrH0w-2e61r1gmUEckq21fK59gdy5TdIdu-1P2UbI4wCu11hWntYRmP2HYf8tnXQIC_7vqMI76czpdBbqXZVWMHbXJM39x32idYMcQAXgUIdbbW2FrfH3ua8UwV3iWgJmJ9uZQZr61qJCfnFw3A0gI2B94kShm-BBUhL9GsRqmLPK2nzdaY28vBfQZORO8T4YjLqqMHyn9k7GDsujB-FaYLynLo",
        details: [
            { label: "Logic", value: "Neural Network" },
            { label: "Steel", value: "Titanium Alloy" },
            { label: "Method", value: "Plasma Cutting" }
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAnxzAaA0lJ62emswelaz-jxuZtZTMMoya5H5WiPBrbh4V_012rfrH0w-2e61r1gmUEckq21fK59gdy5TdIdu-1P2UbI4wCu11hWntYRmP2HYf8tnXQIC_7vqMI76czpdBbqXZVWMHbXJM39x32idYMcQAXgUIdbbW2FrfH3ua8UwV3iWgJmJ9uZQZr61qJCfnFw3A0gI2B94kShm-BBUhL9GsRqmLPK2nzdaY28vBfQZORO8T4YjLqqMHyn9k7GDsujB-FaYLynLo",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBMUrdaK7RHH-ozwFT4M7WQxEsy49dm56QTIIk4vInlO7rAZeYEMArRqDYGwGB16F2KRKbz5SZAGuZkcKJWBgUi3U_7XNtmqcpMVWOykK7emqQrQJzuyEq16v9ba30VOplcC4qZ5W6Tw5QqF4S09sdvDXHSVb7vwcgD_PcFRrd2SHHmG8nx6YaZhaHbbPSZ-UCDv8AXdMOZGY-4Ux7bgQppHBBCQWmyWCdWFzEhCBjKaYf4RNyWMGZXGK3b_4s9BJ49pScQeOMmS1A"
        ]
    }
};

export default function ProjectDetail() {
    const { slug } = useParams();
    const [mounted, setMounted] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const project = projectsData[slug as keyof typeof projectsData];
    const allImages = project ? [project.heroImage, ...project.gallery.filter(img => img !== project.heroImage)] : [];

    const nextImage = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((selectedIndex + 1) % allImages.length);
    };

    const prevImage = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((selectedIndex - 1 + allImages.length) % allImages.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') setSelectedIndex(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, allImages.length]);

    if (!mounted) return null;

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-base text-content">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Project Not Found</h1>
                    <Link href="/portfolio" className="text-primary uppercase tracking-[0.2em] text-xs font-bold border-b border-primary pb-1">Return to Portfolio</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="font-display bg-base text-content antialiased flex min-h-screen w-full flex-col selection:bg-primary selection:text-white transition-colors duration-500">
            <Header />

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-2xl transition-all duration-500 animate-in fade-in"
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <span className="material-symbols-outlined text-4xl">close</span>
                    </button>

                    {/* Navigation Buttons */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 pointer-events-none">
                        <button
                            className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white pointer-events-auto transition-all transform hover:scale-110 active:scale-95 group"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <span className="material-symbols-outlined text-4xl group-hover:-translate-x-1 transition-transform">chevron_left</span>
                        </button>
                        <button
                            className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white pointer-events-auto transition-all transform hover:scale-110 active:scale-95 group"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <span className="material-symbols-outlined text-4xl group-hover:translate-x-1 transition-transform">chevron_right</span>
                        </button>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-[10px] font-bold uppercase tracking-[0.4em]">
                        {selectedIndex + 1} / {allImages.length}
                    </div>

                    <div
                        className="relative w-[90vw] h-[80vh] transition-all duration-500"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <Image
                            src={allImages[selectedIndex]}
                            alt="Project Detail"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}

            <main className="flex-1 mt-20">
                {/* Minimal Header Section */}
                <section className="pt-24 pb-12 px-6 md:px-16 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                        <div className="max-w-3xl">
                            <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-4 block animate-fade-in">
                                {project.category} / {project.year}
                            </span>
                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-content uppercase leading-none mb-8 animate-fade-in-up">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-content/70 font-light leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>
                                {project.description}
                            </p>
                        </div>
                        <div className="lg:w-1/3 grid grid-cols-2 gap-x-8 gap-y-4 pt-8 border-t border-subtle lg:border-t-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
                            {project.details.map((detail, i) => (
                                <div key={i} className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted block">{detail.label}</span>
                                    <span className="text-sm font-medium uppercase text-content">{detail.value}</span>
                                </div>
                            ))}
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted block">Location</span>
                                <span className="text-sm font-medium uppercase text-content">{project.location}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="px-6 md:px-16 max-w-7xl mx-auto pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                        {allImages.map((img, i) => {
                            // Sophisticated asymmetrical grid pattern
                            let gridSpan = "md:col-span-6";
                            let aspect = "aspect-[4/3]";

                            if (i % 5 === 0) {
                                gridSpan = "md:col-span-7";
                                aspect = "aspect-[4/3]";
                            } else if (i % 5 === 1) {
                                gridSpan = "md:col-span-5";
                                aspect = "aspect-square";
                            } else if (i % 5 === 2) {
                                gridSpan = "md:col-span-12";
                                aspect = "aspect-[21/7]";
                            } else if (i % 5 === 3) {
                                gridSpan = "md:col-span-5";
                                aspect = "aspect-square";
                            } else if (i % 5 === 4) {
                                gridSpan = "md:col-span-7";
                                aspect = "aspect-[4/3]";
                            }

                            return (
                                <div
                                    key={i}
                                    className={`relative overflow-hidden bg-sub group cursor-pointer transition-all duration-700
                                        ${gridSpan} ${aspect}
                                        hover:shadow-2xl hover:shadow-primary/10
                                    `}
                                    onClick={() => setSelectedIndex(i)}
                                >
                                    <Image
                                        src={img}
                                        alt={`${project.title} - view ${i + 1}`}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                        priority={i === 0}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                        <span className="material-symbols-outlined text-white text-3xl">open_in_full</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Footer Navigation */}
                <section className="py-24 border-t border-subtle">
                    <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
                        <Link href="/portfolio" className="group flex items-center gap-4 text-muted hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-[0.4em]">
                            <span className="material-symbols-outlined transform group-hover:-translate-x-2 transition-transform duration-500">arrow_back</span>
                            Back to Collection
                        </Link>

                        <div className="flex items-center gap-12">
                            <Link href="/contact" className="text-[10px] font-bold uppercase tracking-[0.4em] text-content hover:text-primary transition-colors">
                                Start a Conversation
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>
    );
}
