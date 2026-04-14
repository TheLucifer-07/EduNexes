import { useState } from "react";
import { Folder, ExternalLink, Download, ChevronLeft, BookOpen } from "lucide-react";

// Google Drive Links Generator
function driveLinks(id) {
  return {
    file: `https://drive.google.com/uc?export=download&id=${id}`,
    view: `https://drive.google.com/file/d/${id}/preview`,
  };
}

const Resources = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [step, setStep] = useState(1);

// ----- PDF Data -----
const data = {
  "1st Year": {
    "CSE": {
      "LAC": {
        "Mid-I Portion": [
          { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") }
        ],
        "Mid-II Portion": [
          { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
        ]
      },
      "Physics": {
        "Mid-I Portion": [
          { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") }
      ]
      },
      "Chemistry":{
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(Question Bank Answers)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ]
      },
      "IP(C Language)":{
        "Mid-I Portion": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        ],
        "Mid-II Portion": [ 
        { name: "Unit 4(Functions)", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ]
    },
      "Engineering Graphics(Drawing)": {
        "Mid-I Portion": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") }
        ],
        "Mid-II Portion": [ 
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ]
      },
      "BCME(Civil)": {
        "Mid Portion": [
          { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
        ]
      },
      "BCME(Mechanical)": {
        "Mid Portion": [
          { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ]
    },
      "DEVC": {
        "Mid-I Portion": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1kXk6VHX5efKI2LDYiWPnmIJYiSZBiWG_") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") }
        ],
        "Mid-II Portion": [
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ]
    },
      "Communicative English": {
        "Mid-I Portion": [
        { name: "Mid-I(Q/A)", ...driveLinks("1Ii1tJCyJjdz1P-78IhgiMR8iySez13_E") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("18RJzqydbx4Q-KQyeWsGiPuRZVhXlCE4C") },
        { name: "Mid-II(Essays)", ...driveLinks("1lAjR7GO6NabJvdtAu9XcAZGTwnDs5EYf") },
        { name: "Mid-II(Q/A)", ...driveLinks("1iQjMlPCyYqQ3Ywii5ATmhUFO9QludbJZ") },
        { name: "Mid-II(Essays)", ...driveLinks("1CTTCwDOCXoP16sELQm1C02-VTpQCcytm") }
      ]
    },
      "BEEE(Electronics)": {
        "Mid Portion":  [
       { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ]
    },
      "BEEE(Electricals)": {
        "Mid Portion":  [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ]},
      "DSA(Data Structures and Algorithms in C)": {
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1R9kQao6d1O5qiO0cvt3osz0wJL1WGyhf") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1MlHCBNi4g5H6f2AF9OnncSkDCrxyr6r7") },
        { name: "Unit 1(Notes)", ...driveLinks("1dBfHtSPtPoUK6dWmjvZ3SjAvTq7B_qg4") },
        { name: "Unit 2(Notes)", ...driveLinks("1VBD4F6YkuccZzDGRpOIZnkUbFdCehMwU") },
        { name: "Unit 2(longs)", ...driveLinks("1lvIDcT_CPJZ-O4Hx83WcVlrBm-dNrxhM") },
        { name: "Unit 3(longs)", ...driveLinks("1a2F_XpbdcVYYZGALFZPtlLNf10waglqO") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("1u0bMnbaJHOwcN4_3PefthpT7sY2lToNU") },
        { name: "Unit 5(Trees and Hashing)", ...driveLinks("14I5-j46MdsNWw6pc0q7oOjWWFPnx9oad") }
      ]
    }
    },


    "ACSE": {
      "LAC": {
        "Mid-I Portion": [
          { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") }
        ],
        "Mid-II Portion": [
          { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
        ]
      },

      "Physics": {
        "Mid-I Portion": [
          { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") }
      ]
      },
      "Chemistry":{
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(Question Bank Answers)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ]
      },
      "IP(C Language)":{
        "Mid-I Portion": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        ],
        "Mid-II Portion": [ 
        { name: "Unit 4(Functions)", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ],
    },
      "Engineering Graphics(Drawing)": {
        "Mid-I Portion": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") }
        ],
        "Mid-II Portion": [ 
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      },
      "BCME(Civil)": {
        "Mid Portion": [
          { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
        ]
      },
      "BCME(Mechanical)": {
        "Mid Portion": [
          { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ]
    },
      "DEVC": {
        "Mid-I Portion": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1kXk6VHX5efKI2LDYiWPnmIJYiSZBiWG_") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") }
        ],
        "Mid-II Portion": [
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ]
    },
      "Communicative English": {
        "Mid-I Portion": [
        { name: "Mid-I(Q/A)", ...driveLinks("1Ii1tJCyJjdz1P-78IhgiMR8iySez13_E") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("18RJzqydbx4Q-KQyeWsGiPuRZVhXlCE4C") },
        { name: "Mid-II(Essays)", ...driveLinks("1lAjR7GO6NabJvdtAu9XcAZGTwnDs5EYf") },
        { name: "Mid-II(Q/A)", ...driveLinks("1iQjMlPCyYqQ3Ywii5ATmhUFO9QludbJZ") },
        { name: "Mid-II(Essays)", ...driveLinks("1CTTCwDOCXoP16sELQm1C02-VTpQCcytm") }
      ]
    },
      "BEEE(Electronics)": {
        "Mid Portion":  [
       { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ]
    },
      "BEEE(Electricals)": {
        "Mid Portion":  [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ]},
      "DSA(Data Structures and Algorithms in C)": {
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1R9kQao6d1O5qiO0cvt3osz0wJL1WGyhf") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1MlHCBNi4g5H6f2AF9OnncSkDCrxyr6r7") },
        { name: "Unit 1(Notes)", ...driveLinks("1dBfHtSPtPoUK6dWmjvZ3SjAvTq7B_qg4") },
        { name: "Unit 2(Notes)", ...driveLinks("1VBD4F6YkuccZzDGRpOIZnkUbFdCehMwU") },
        { name: "Unit 2(longs)", ...driveLinks("1lvIDcT_CPJZ-O4Hx83WcVlrBm-dNrxhM") },
        { name: "Unit 3(longs)", ...driveLinks("1a2F_XpbdcVYYZGALFZPtlLNf10waglqO") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("1u0bMnbaJHOwcN4_3PefthpT7sY2lToNU") },
        { name: "Unit 5(Trees and Hashing)", ...driveLinks("14I5-j46MdsNWw6pc0q7oOjWWFPnx9oad") }
      ]
    }
    },


    "AI&DS": {
      "LAC": {
        "Mid-I Portion": [
          { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") }
        ],
        "Mid-II Portion": [
          { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
        ]
      },

      "Physics": {
        "Mid-I Portion": [
          { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") }
      ]
      },
      "Chemistry":{
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(Question Bank Answers)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ]
      },
      "IP(C Language)":{
        "Mid-I Portion": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        ],
        "Mid-II Portion": [ 
        { name: "Unit 4(Functions)", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ]
    },
      "Engineering Graphics(Drawing)": {
        "Mid-I Portion": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") }
        ],
        "Mid-II Portion": [ 
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ]
      },
      "BCME(Civil)": {
        "Mid Portion": [
          { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
        ]
      },
      "BCME(Mechanical)": {
        "Mid Portion": [
          { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ]
    },
      "DEVC": {
        "Mid-I Portion": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1kXk6VHX5efKI2LDYiWPnmIJYiSZBiWG_") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") }
        ],
        "Mid-II Portion": [
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ]
    },
      "Communicative English": {
        "Mid-I Portion": [
        { name: "Mid-I(Q/A)", ...driveLinks("1Ii1tJCyJjdz1P-78IhgiMR8iySez13_E") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("18RJzqydbx4Q-KQyeWsGiPuRZVhXlCE4C") },
        { name: "Mid-II(Essays)", ...driveLinks("1lAjR7GO6NabJvdtAu9XcAZGTwnDs5EYf") },
        { name: "Mid-II(Q/A)", ...driveLinks("1iQjMlPCyYqQ3Ywii5ATmhUFO9QludbJZ") },
        { name: "Mid-II(Essays)", ...driveLinks("1CTTCwDOCXoP16sELQm1C02-VTpQCcytm") }
      ]
    },
      "BEEE(Electronics)": {
        "Mid Portion":  [
       { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ]
    },
      "BEEE(Electricals)": {
        "Mid Portion":  [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ]},
      "DSA(Data Structures and Algorithms in C)": {
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1R9kQao6d1O5qiO0cvt3osz0wJL1WGyhf") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1MlHCBNi4g5H6f2AF9OnncSkDCrxyr6r7") },
        { name: "Unit 1(Notes)", ...driveLinks("1dBfHtSPtPoUK6dWmjvZ3SjAvTq7B_qg4") },
        { name: "Unit 2(Notes)", ...driveLinks("1VBD4F6YkuccZzDGRpOIZnkUbFdCehMwU") },
        { name: "Unit 2(longs)", ...driveLinks("1lvIDcT_CPJZ-O4Hx83WcVlrBm-dNrxhM") },
        { name: "Unit 3(longs)", ...driveLinks("1a2F_XpbdcVYYZGALFZPtlLNf10waglqO") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("1u0bMnbaJHOwcN4_3PefthpT7sY2lToNU") },
        { name: "Unit 5(Trees and Hashing)", ...driveLinks("14I5-j46MdsNWw6pc0q7oOjWWFPnx9oad") }
      ]
    }
    },


    "IT": {
      "LAC": {
        "Mid-I Portion": [
          { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") }
        ],
        "Mid-II Portion": [
          { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
        ]
      },

     "Physics": {
        "Mid-I Portion": [
          { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") }
      ]
      },
      "Chemistry":{
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(Question Bank Answers)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ]
      },
      "IP(C Language)":{
        "Mid-I Portion": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        ],
        "Mid-II Portion": [ 
        { name: "Unit 4(Functions)", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ]
    },
      "Engineering Graphics(Drawing)": {
        "Mid-I Portion": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") }
        ],
        "Mid-II Portion": [ 
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ]
      },
      "BCME(Civil)": {
        "Mid Portion": [
          { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
        ]
      },
      "BCME(Mechanical)": {
        "Mid Portion": [
          { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ]
    },
      "DEVC": {
        "Mid-I Portion": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1kXk6VHX5efKI2LDYiWPnmIJYiSZBiWG_") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") }
        ],
        "Mid-II Portion": [
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ]
    },
      "Communicative English": {
        "Mid-I Portion": [
        { name: "Mid-I(Q/A)", ...driveLinks("1Ii1tJCyJjdz1P-78IhgiMR8iySez13_E") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("18RJzqydbx4Q-KQyeWsGiPuRZVhXlCE4C") },
        { name: "Mid-II(Essays)", ...driveLinks("1lAjR7GO6NabJvdtAu9XcAZGTwnDs5EYf") },
        { name: "Mid-II(Q/A)", ...driveLinks("1iQjMlPCyYqQ3Ywii5ATmhUFO9QludbJZ") },
        { name: "Mid-II(Essays)", ...driveLinks("1CTTCwDOCXoP16sELQm1C02-VTpQCcytm") }
      ]
    },
      "BEEE(Electronics)": {
        "Mid Portion":  [
       { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ]
    },
      "BEEE(Electricals)": {
        "Mid Portion":  [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ]},
      "DSA(Data Structures and Algorithms in C)": {
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1R9kQao6d1O5qiO0cvt3osz0wJL1WGyhf") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1MlHCBNi4g5H6f2AF9OnncSkDCrxyr6r7") },
        { name: "Unit 1(Notes)", ...driveLinks("1dBfHtSPtPoUK6dWmjvZ3SjAvTq7B_qg4") },
        { name: "Unit 2(Notes)", ...driveLinks("1VBD4F6YkuccZzDGRpOIZnkUbFdCehMwU") },
        { name: "Unit 2(longs)", ...driveLinks("1lvIDcT_CPJZ-O4Hx83WcVlrBm-dNrxhM") },
        { name: "Unit 3(longs)", ...driveLinks("1a2F_XpbdcVYYZGALFZPtlLNf10waglqO") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("1u0bMnbaJHOwcN4_3PefthpT7sY2lToNU") },
        { name: "Unit 5(Trees and Hashing)", ...driveLinks("14I5-j46MdsNWw6pc0q7oOjWWFPnx9oad") }
      ]
    }
    },


    "ECM": {
     "LAC": {
        "Mid-I Portion": [
          { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") }
        ],
        "Mid-II Portion": [
          { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
        ]
      },

      "Physics": {
        "Mid-I Portion": [
          { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") }
      ]
      },
      "Chemistry":{
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(Question Bank Answers)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ]
      },
      "IP(C Language)":{
        "Mid-I Portion": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        ],
        "Mid-II Portion": [ 
        { name: "Unit 4(Functions)", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ]
    },
      "Engineering Graphics(Drawing)": {
        "Mid-I Portion": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") }
        ],
        "Mid-II Portion": [ 
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ]
      },
      "BCME(Civil)": {
        "Mid Portion": [
          { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
        ]
      },
      "BCME(Mechanical)": {
        "Mid Portion": [
          { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ]
    },
      "DEVC": {
        "Mid-I Portion": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1kXk6VHX5efKI2LDYiWPnmIJYiSZBiWG_") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") }
        ],
        "Mid-II Portion": [
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ]
    },
      "Communicative English": {
        "Mid-I Portion": [
        { name: "Mid-I(Q/A)", ...driveLinks("1Ii1tJCyJjdz1P-78IhgiMR8iySez13_E") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("18RJzqydbx4Q-KQyeWsGiPuRZVhXlCE4C") },
        { name: "Mid-II(Essays)", ...driveLinks("1lAjR7GO6NabJvdtAu9XcAZGTwnDs5EYf") },
        { name: "Mid-II(Q/A)", ...driveLinks("1iQjMlPCyYqQ3Ywii5ATmhUFO9QludbJZ") },
        { name: "Mid-II(Essays)", ...driveLinks("1CTTCwDOCXoP16sELQm1C02-VTpQCcytm") }
      ]
    },
      "BEEE(Electronics)": {
        "Mid Portion":  [
       { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ]
    },
      "BEEE(Electricals)": {
        "Mid Portion":  [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ]},
      "DSA(Data Structures and Algorithms in C)": {
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1R9kQao6d1O5qiO0cvt3osz0wJL1WGyhf") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1MlHCBNi4g5H6f2AF9OnncSkDCrxyr6r7") },
        { name: "Unit 1(Notes)", ...driveLinks("1dBfHtSPtPoUK6dWmjvZ3SjAvTq7B_qg4") },
        { name: "Unit 2(Notes)", ...driveLinks("1VBD4F6YkuccZzDGRpOIZnkUbFdCehMwU") },
        { name: "Unit 2(longs)", ...driveLinks("1lvIDcT_CPJZ-O4Hx83WcVlrBm-dNrxhM") },
        { name: "Unit 3(longs)", ...driveLinks("1a2F_XpbdcVYYZGALFZPtlLNf10waglqO") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("1u0bMnbaJHOwcN4_3PefthpT7sY2lToNU") },
        { name: "Unit 5(Trees and Hashing)", ...driveLinks("14I5-j46MdsNWw6pc0q7oOjWWFPnx9oad") }
      ]
    }
    },


    "EEE": {
     "LAC": {
        "Mid-I Portion": [
          { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") }
        ],
        "Mid-II Portion": [
          { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
        ]
      },

     "Physics": {
        "Mid-I Portion": [
          { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") }
      ]
      },
      "Chemistry":{
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(Question Bank Answers)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ]
      },
      "IP(C Language)":{
        "Mid-I Portion": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        ],
        "Mid-II Portion": [ 
        { name: "Unit 4(Functions)", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ]
    },
      "Engineering Graphics(Drawing)": {
        "Mid-I Portion": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") }
        ],
        "Mid-II Portion": [ 
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      },
      "BCME(Civil)": {
        "Mid Portion": [
          { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
        ]
      },
      "BCME(Mechanical)": {
        "Mid Portion": [
          { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ]
    },
      "DEVC": {
        "Mid-I Portion": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1kXk6VHX5efKI2LDYiWPnmIJYiSZBiWG_") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") }
        ],
        "Mid-II Portion": [
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ]
    },
      "Communicative English": {
        "Mid-I Portion": [
        { name: "Mid-I(Q/A)", ...driveLinks("1Ii1tJCyJjdz1P-78IhgiMR8iySez13_E") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("18RJzqydbx4Q-KQyeWsGiPuRZVhXlCE4C") },
        { name: "Mid-II(Essays)", ...driveLinks("1lAjR7GO6NabJvdtAu9XcAZGTwnDs5EYf") },
        { name: "Mid-II(Q/A)", ...driveLinks("1iQjMlPCyYqQ3Ywii5ATmhUFO9QludbJZ") },
        { name: "Mid-II(Essays)", ...driveLinks("1CTTCwDOCXoP16sELQm1C02-VTpQCcytm") }
      ]
    },
      "BEEE(Electronics)": {
        "Mid Portion":  [
       { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ]
    },
      "BEEE(Electricals)": {
        "Mid Portion":  [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ]},
      "DSA(Data Structures and Algorithms in C)": {
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1R9kQao6d1O5qiO0cvt3osz0wJL1WGyhf") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1MlHCBNi4g5H6f2AF9OnncSkDCrxyr6r7") },
        { name: "Unit 1(Notes)", ...driveLinks("1dBfHtSPtPoUK6dWmjvZ3SjAvTq7B_qg4") },
        { name: "Unit 2(Notes)", ...driveLinks("1VBD4F6YkuccZzDGRpOIZnkUbFdCehMwU") },
        { name: "Unit 2(longs)", ...driveLinks("1lvIDcT_CPJZ-O4Hx83WcVlrBm-dNrxhM") },
        { name: "Unit 3(longs)", ...driveLinks("1a2F_XpbdcVYYZGALFZPtlLNf10waglqO") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("1u0bMnbaJHOwcN4_3PefthpT7sY2lToNU") },
        { name: "Unit 5(Trees and Hashing)", ...driveLinks("14I5-j46MdsNWw6pc0q7oOjWWFPnx9oad") }
      ]
    }
    },


    "ECE": {
     "LAC": {
        "Mid-I Portion": [
          { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") }
        ],
        "Mid-II Portion": [
          { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
        ]
      },

    "Physics": {
        "Mid-I Portion": [
          { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") }
      ]
      },
      "Chemistry":{
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(Question Bank Answers)", ...driveLinks("1bDuINHDvwE6EgnHaEhxfNMCGtLehQYbM") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1a-zRbAY0ftl3Q_YP_x-674nkE62Gpgaz") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-II(Question Bank)", ...driveLinks("1eob8m_gy-R1ZUDyFxc2cSt9ecAG-6qcd") },
        { name: "Unit 3(Electro Chemistry)", ...driveLinks("1qBDJuD6AldVaFJDwbNaWajOsVcdPqquw") },
        { name: "Unit 4(Polymer Chemistry)", ...driveLinks("1lEf448HLyjkatOKr5DCwJ0CqvwZEj2dz") },
        { name: "Unit 5", ...driveLinks("1yqHNTDWyyt6rWcKn9LhoX0vX_ObrOT8M") },
        { name: "Model Paper(Sem)", ...driveLinks("1KvSXSP8j6pSWILKpZmVpC6gJ5ZogBRBh") }
      ]
      },
      "IP(C Language)":{
        "Mid-I Portion": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        ],
        "Mid-II Portion": [ 
        { name: "Unit 4(Functions)", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ],
    },
      "Engineering Graphics(Drawing)": {
        "Mid-I Portion": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") }
        ],
        "Mid-II Portion": [ 
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      },
      "BCME(Civil)": {
        "Mid Portion": [
          { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
        ]
      },
      "BCME(Mechanical)": {
        "Mid Portion": [
          { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ]
    },
      "DEVC": {
        "Mid-I Portion": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1kXk6VHX5efKI2LDYiWPnmIJYiSZBiWG_") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") }
        ],
        "Mid-II Portion": [
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ]
    },
      "Communicative English": {
        "Mid-I Portion": [
        { name: "Mid-I(Q/A)", ...driveLinks("1Ii1tJCyJjdz1P-78IhgiMR8iySez13_E") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("18RJzqydbx4Q-KQyeWsGiPuRZVhXlCE4C") },
        { name: "Mid-II(Essays)", ...driveLinks("1lAjR7GO6NabJvdtAu9XcAZGTwnDs5EYf") },
        { name: "Mid-II(Q/A)", ...driveLinks("1iQjMlPCyYqQ3Ywii5ATmhUFO9QludbJZ") },
        { name: "Mid-II(Essays)", ...driveLinks("1CTTCwDOCXoP16sELQm1C02-VTpQCcytm") }
      ]
    },
      "BEEE(Electronics)": {
        "Mid Portion":  [
       { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ]
    },
      "BEEE(Electricals)": {
        "Mid Portion":  [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ]},
      "Network Analysis":{
      "Mid-II Portion": [
        { name: "Unit 3 Mid-II", ...driveLinks("1jIGjZQqgwuDjPPTYYzH8O_pYvLZSDvkm") },
        { name: "Unit 4", ...driveLinks("1EE5x7MO-5PILMkbkJXFlA7BcB03oox0O") },
        { name: "Mid-II(2 Marks) ", ...driveLinks("11KIVeUTVFPtz_jIWj90uweaHjW0_epRJ") },
        { name: "Unit 5 (longs)", ...driveLinks("1AmzRweNoox593KvEdhf-u_o5aExAjVJI") },
        { name: "Unit 5 (Q/A)", ...driveLinks("1Mot0HjQWNqZ7q_oUgp_SJzvenKU-c6Xz") },
        { name: "Unit 5(Mid-II)", ...driveLinks("12DAtxRah79Ps8bjZGDS1aKaZkKtzBPxv") }
      ]
    }
    },


    "Civil": {
      "LAC": {
        "Mid-I Portion": [
          { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") }
        ],
        "Mid-II Portion": [
          { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
        ]
      },

     "Physics": {
        "Mid-I Portion": [
          { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Mid-II Portion": [ 
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") }
      ]
      },
      "Engineering Chemistry": {

        "Mid-I Portion": [
          { name: "Mid-I&MidII(Question Bank)", ...driveLinks("1fUAvEPa92FqZkWeZ_-ePOb27e1AvahvY") },
          { name: "Mid-I&MidII(2 Marks)", ...driveLinks("13a_fVVGYRn007g0qOMu9ZOBVwnDZxU2z") },
          { name: "Unit 2", ...driveLinks("1UX7vKOq8n7SHkpu38pnLmxnkm07ZT5kH") }
        ],
        "Mid-II Portion": [
          { name: "Mid-I&MidII(Question Bank)", ...driveLinks("1fUAvEPa92FqZkWeZ_-ePOb27e1AvahvY") },
          { name: "Mid-I&MidII(2 Marks)", ...driveLinks("13a_fVVGYRn007g0qOMu9ZOBVwnDZxU2z") },
          { name: "Unit 2", ...driveLinks("1UX7vKOq8n7SHkpu38pnLmxnkm07ZT5kH") }
      ]
    },
      "IP(C Language)":{
        "Mid-I Portion": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        ],
        "Mid-II Portion": [ 
        { name: "Unit 4(Functions)", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ]
    },
      "Engineering Graphics(Drawing)": {
        "Mid-I Portion": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") }
        ],
        "Mid-II Portion": [ 
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ]
      },
      "BCME(Civil)": {
        "Mid Portion": [
          { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
        ]
      },
      "BCME(Mechanical)": {
        "Mid Portion": [
          { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ]
    },
      "DEVC": {
        "Mid-I Portion": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1kXk6VHX5efKI2LDYiWPnmIJYiSZBiWG_") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") }
        ],
        "Mid-II Portion": [
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ]
    },
      "Communicative English": {
        "Mid-I Portion": [
        { name: "Mid-I(Q/A)", ...driveLinks("1Ii1tJCyJjdz1P-78IhgiMR8iySez13_E") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("18RJzqydbx4Q-KQyeWsGiPuRZVhXlCE4C") },
        { name: "Mid-II(Essays)", ...driveLinks("1lAjR7GO6NabJvdtAu9XcAZGTwnDs5EYf") },
        { name: "Mid-II(Q/A)", ...driveLinks("1iQjMlPCyYqQ3Ywii5ATmhUFO9QludbJZ") },
        { name: "Mid-II(Essays)", ...driveLinks("1CTTCwDOCXoP16sELQm1C02-VTpQCcytm") }
      ]
    },
      "BEEE(Electronics)": {
        "Mid Portion":  [
       { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ]
    },
      "BEEE(Electricals)": {
        "Mid Portion":  [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ]},
      "EM(Engineering Mechanics)": {
        "Mid-I Portion": [
        { name: "Mid-I(Q/A)", ...driveLinks("1SIXFmX0CiK35vFKT_A8z2IJl44sHiX_K") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("1kuLNEjPzd5Pk7j12Nebjp2EJPsR0EP_s") },
        { name: "Complete Material", ...driveLinks("1fnngB8JhVOZ35ogrf6ptUE4fT4LcMoJ1") }
      ]
    }
  },


    "Mech": {
      "LAC": {
        "Mid-I Portion": [
          { name: "Mid-I(Question Bank)", ...driveLinks("1u85GFLBz3ldREyuffnzEdgog-zppy99P") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1AIeeND8iSIlpkZ7Cl-Y5JCiEs7rFVlDs") }
        ],
        "Mid-II Portion": [
          { name: "Complete Notes(5 Units)", ...driveLinks("1dEu2dhMmE8BIli9Nj9TxS6tplXwQZLEe") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1E771zSNrfN9ugIK2xFXyFMk8OhaGA_vL") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1MrRyx15Kxw4HJd2IS5P96BiVqEFALvaJ") }
        ]
      },

      "Physics": {
        "Mid-I Portion": [
          { name: "Mid-I(Fasttrack)", ...driveLinks("1dwhTYEnzZEJCR5SBK_1xuDJFa1WzpXlU") },
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") },
        { name: "Unit 1(Numericals)", ...driveLinks("1Juhtz0yRSPLx30wGX0dPChqwfkK01fkG") },
        { name: "Unit 2(Numericals)", ...driveLinks("1aAnEx1JB6_CeCDyf1U0rPVqcbNyC92fE") }
      ],
      "Mid-II Portion": [
        { name: "Mid-I&Mid-II(Q/A)", ...driveLinks("1ZH6KpuoRvpWrKuGeU-gfUFHes0CX-ryC") }
      ]
      },
      "Engineering Chemistry": {

        "Mid-I Portion": [
          { name: "Mid-I&MidII(Question Bank)", ...driveLinks("1fUAvEPa92FqZkWeZ_-ePOb27e1AvahvY") },
          { name: "Mid-I&MidII(2 Marks)", ...driveLinks("13a_fVVGYRn007g0qOMu9ZOBVwnDZxU2z") },
          { name: "Unit 2", ...driveLinks("1UX7vKOq8n7SHkpu38pnLmxnkm07ZT5kH") }
        ],
        "Mid-II Portion": [
          { name: "Mid-I&MidII(Question Bank)", ...driveLinks("1fUAvEPa92FqZkWeZ_-ePOb27e1AvahvY") },
          { name: "Mid-I&MidII(2 Marks)", ...driveLinks("13a_fVVGYRn007g0qOMu9ZOBVwnDZxU2z") },
          { name: "Unit 2", ...driveLinks("1UX7vKOq8n7SHkpu38pnLmxnkm07ZT5kH") }
      ]
    },
      "IP(C Language)":{
        "Mid-I Portion": [
        { name: "Mid-I(2 Marks)", ...driveLinks("1zjApUNrfKKmq07lXbjUpsXxBjWB43EyT") },
        { name: "Mid-I(longs)", ...driveLinks("1ya3o5e7gNbwKXI6SYfc3-rx4zxLmcMiH") },
        ],
        "Mid-II Portion": [ 
        { name: "Unit 4(Functions)", ...driveLinks("1qE4TeGPypOc3z1s8yfmx_WOnxOSXq6rt") },
        { name: "Mid-II(Q/A)", ...driveLinks("1X6deAYefCHeFOFet_zloDZJnAjCYovO4") }
      ]
    },
      "Engineering Graphics(Drawing)": {
        "Mid-I Portion": [
        { name: "Notes", ...driveLinks("1YPXb1EskWCnVkOjJnxcuOIbHaoDpsBpB") },
        { name: "Complete Notes", ...driveLinks("1shznl5W_FRsksP3Trk1Zkuxy1OOCml-g") },
        { name: "Model Paper 1", ...driveLinks("1Nwkq67n0rtLvGx37inUcQEf5MG4OYmRX") }
        ],
        "Mid-II Portion": [ 
        { name: "Model Paper 2", ...driveLinks("18SnzUukjnYPksINsBjbzPU0U4HltiG7A") },
        { name: "Model Paper 3", ...driveLinks("1PXLZWwzczprxOOTp5Jr3CN5KP1iSzZ7b") },
        { name: "Model Paper 4", ...driveLinks("1OGt9c5UwEj_y7ZsTUcF9mSvcZc0DXVQ1") },
        { name: "Model Paper 5", ...driveLinks("11T1UxaFK2OGGSlvvJ6f5XHA6OWRZoNoN") },
        { name: "Previous Year Question Papers", ...driveLinks("1fk6scA_YWwgXgctHJvPJD9hsf-UBkbrH") }
      ],
      },

      "BCME(Civil)": {
        "Mid Portion": [
          { name: "Mid-I and Mid-II(Q/A)", ...driveLinks("1-pmsBYFXr11sVfU_VW4C5hWs5-dualPQ") }
        ]
      },
      "BCME(Mechanical)": {
        "Mid Portion": [
          { name: "Unit 1,2,3(Notes)", ...driveLinks("1ZLQpk9zAiQCOvwaGgeWeyhzvJ1UBTGOL") },
        { name: "Unit 2", ...driveLinks("1reTEhYVc2VV2EMsYYeg8swyV0fJ_-hUi") },
        { name: "Unit 3", ...driveLinks("170QDMQmiC28BLVsJOzP99PTxL-1pufOp") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bxNVzQTawtkN9FZtuwsJ7cSS6_nSkLoQ") },
        { name: "All shorts", ...driveLinks("1E4gcNVCFXx0MTSJsmo8LqC0A3bPzzJom") }
      ]
    },
      "DEVC": {
        "Mid-I Portion": [
        { name: "Unit 1(2 Marks)", ...driveLinks("1DZh97BXU1ocdMMdl7_B0ylnMfthRNtd6") },
        { name: "Unit 1(longs)", ...driveLinks("1kXk6VHX5efKI2LDYiWPnmIJYiSZBiWG_") },
        { name: "Unit 2(Q/A)", ...driveLinks("1abLDwios3bCosR_d6NYKynSfswINP0bF") },
        { name: "Unit 3(Q/A)", ...driveLinks("1CmclLd8AGzW4fDTgY_AMBmEpeL053IeL") }
        ],
        "Mid-II Portion": [
        { name: "Mid II(Q/A)", ...driveLinks("1sRdijQuux7yeQGc4KPZSvTy_T2qQAFtq") },
        { name: "Unit 3,4(2 Marks)", ...driveLinks("1AfWzeq40ZUbJYeIRvbRZiziIKAIeaQLr") },
        { name: "Unit 5(Q/A)", ...driveLinks("1tknBiIGro-sjeYNoABNWmtMauDW5wC72") },
        { name: "Sample Question paper", ...driveLinks("1mY00RTMsHgEoWLme8cYatNosSQ-ynT7E") }
      ]
    },
      "Communicative English": {
        "Mid-I Portion": [
        { name: "Mid-I(Q/A)", ...driveLinks("1Ii1tJCyJjdz1P-78IhgiMR8iySez13_E") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("18RJzqydbx4Q-KQyeWsGiPuRZVhXlCE4C") },
        { name: "Mid-II(Essays)", ...driveLinks("1lAjR7GO6NabJvdtAu9XcAZGTwnDs5EYf") },
        { name: "Mid-II(Q/A)", ...driveLinks("1iQjMlPCyYqQ3Ywii5ATmhUFO9QludbJZ") },
        { name: "Mid-II(Essays)", ...driveLinks("1CTTCwDOCXoP16sELQm1C02-VTpQCcytm") }
      ]
    },
      "BEEE(Electronics)": {
        "Mid Portion":  [
       { name: "Question Bank", ...driveLinks("1y1oHmaP7oNocspE7BXexwHiE34yAl7BU") },
        { name: "Unit 1", ...driveLinks("1lu-f6xjclZp5033EP3tyZ8aIgu44X-nI") },
        { name: "Unit 2", ...driveLinks("1nG_Kg6jc0gWCJbBMfKYFycA1wZaP7eC3") },
        { name: "All 2 Marks", ...driveLinks("1Ri2hf25RVRNKlYGKyeZ9w-8Gar2ceFmO") }
      ]
    },
      "BEEE(Electricals)": {
        "Mid Portion":  [
        { name: "Question Bank", ...driveLinks("1YVi5wVph69ILKEnX3yiN5bWgSHE3lOx5") },
        { name: "Unit 1(Q/A)", ...driveLinks("1QzxuD9GiTL5x2gcnXvLiF7uPmz2pfOx4") },
        { name: "Unit 2(Q/A)", ...driveLinks("1eXcIIKNuXyz9D6h47vRwuwXIlENfQjJ3") },
        { name: "Transformers", ...driveLinks("1Pr--LG7OtGX6ApVwPd2TeQYCcd1zOJbP") },
        { name: "Unit 3(Q/A)", ...driveLinks("1cGM11cl84JivQpJ8v2wghiwh0-hRBZTe") }
      ]},
      "Engineering Mechanics": {
        "Mid-I Portion": [
        { name: "Mid-I(Q/A)", ...driveLinks("1SIXFmX0CiK35vFKT_A8z2IJl44sHiX_K") }
        ],
        "Mid-II Portion": [
        { name: "Mid-II(Q/A)", ...driveLinks("1kuLNEjPzd5Pk7j12Nebjp2EJPsR0EP_s") },
        { name: "Complete Notes", ...driveLinks("1fnngB8JhVOZ35ogrf6ptUE4fT4LcMoJ1") }
      ]
    }
  }},



  "2nd Year": {
    "CSE": {
      "MFCS": {
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1c6NXyTrT36Rr3u5IHoHNGlS49Dif9OkV") },
        { name: "Unit 1(2 Marks)", ...driveLinks("1SleI-teABEbbmDZub_LiIBcjtVw9c7Q_") },
        { name: "Unit 2(2 Marks)", ...driveLinks("187jZJ7vDBNuUdfSqRoegPFPniJ2zwYDB") },
        { name: "Unit 3(mid-1 2 marks)", ...driveLinks("1QNO1GDESc8yzS4N_ELTOMQy4mCI0Dm5o") },
        { name: "Unit 1(longs)", ...driveLinks("15lqYd1YywHS5B-jj9aj7-FS46DE5YCFs") },
        { name: "Unit 2(longs)", ...driveLinks("1tJPrEHSkAkWXeg2ynlaCJHq4ueqBEO5B") },
        ],
        "Mid-II Portion": [ 
        { name: "Unit 4(Notes Model 1)", ...driveLinks("1R2-CL6vhY5vP43mf37GVU37iIfeCPjHZ") },
        { name: "Unit 4(Notes Model 2)", ...driveLinks("1xMo0f4yHChWf8cegm_xA8PzGLelV-Al_") },
        { name: "Unit 3(mid-1 longs)", ...driveLinks("1A6cqdJMpjfQP-95nAyWUCYS37CLflYcQ") }
      ]
      },
      "UHV": {
        "Mid-I Portion": [
        { name: "Question Bank", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "Mid-I(Q/A)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Mid-I(Shorts)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") },
        { name: "Mid-I(longs)", ...driveLinks("125782qemrCIrZynlOS-mYjiUtvEuXT-Y") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1pwJtMkq1KVwEGbI0gqdr2VOBNlysQI2q") },
        { name: "MID-II(Answers)", ...driveLinks("1KkXOn2i5-M9FAa0BW-1C0vT9wmF_cnYw") },
        { name: "Mid-II(Shorts)", ...driveLinks("14OZARQ6AFcE1PT9gs8nQMYh2A-Bmq_L5") },
        { name: "Mid-II Unit 3(longs)", ...driveLinks("12b95fSbBdwxlRzNmQwvUsfzqBFPrvf4p") },
        { name: "Mid-II Unit 4(longs)", ...driveLinks("1y1dBpPd-9Kx0zZBwqw8oWH4YbFyOQdJH") },
        { name: "Mid-II Unit 5(longs)", ...driveLinks("1t6ZJhzD-aCn3_YuR_3K_QTBsn-M09GkW") }
      ]
      },
      "DLCO": {
      "Mid-I Portion": [  
        { name: "Unit 1(Number system)", ...driveLinks("1TE8t2P60vKlOK3m-l4kxcMpnmAlnMXri") },
        { name: "Unit 2(Shift Registers)", ...driveLinks("1UVf6yeZmc5C-9GSpg8R1xIFYYxNOnxO3") },
        { name: "Unit 3(Counters)", ...driveLinks("1jj9sgasUF2Xp0bCGRApvXDtn6RmPNKv5") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1VUBYJZltejB5K3yQUyK7TATINDDiONn8") },
        { name: "Unit 2(longs)", ...driveLinks("1RlPn8NP7p2F5b_WxMPYPYnKz54vq9mXH") },
        { name: "Unit 3(longs)", ...driveLinks("1fMHsf9HVwKHuNmOePDZGqRHLBXPJk_Pw") },
        { name: "Unit 1(2 Marks)", ...driveLinks("1pnTdWPan0CPA1tiMP9TvNIfmmNL-VUs1") },
        { name: "Unit 2(2 Marks)", ...driveLinks("1ceLEdRU3-6cv81n1l3x1S390e5vgi_kd") },
        { name: "Unit 3(2 Marks)", ...driveLinks("1zIuiN_9FWCHxLn7Dwvm8kKVrdVCvV3mz") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(Question Bank)", ...driveLinks("1-otUPj2yiZOjhbwJJ-fEd786WwCCf1fw") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1EDFdkT7KynmCF91NHGionkSpl1KqgTB4") },
        { name: "Mid-II(Longs)", ...driveLinks("1nM3b7vcGZXOQhPCkSD9SBvloaX95htyj") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1rfDGJEFOKpYFU9KnzEquGUjDGmu_3HML") },
        { name: "Unit 4(Notes)", ...driveLinks("1i-Qy99FH6Iqbb5YdYySV1a2RIO4ZPWfs") },
        { name: "Unit 4 & 5(2 Marks)", ...driveLinks("1yDUY6cSlrIs2kVwWe0zmWBAC_5fgAD6i") },
        { name: "Unit 4 & 5(Material)", ...driveLinks("1Okw_0ghXrrLDr57a_025C45WkVuQOcKi") },
        { name: "Unit 5(Material Model 1)", ...driveLinks("1-2lhqB2WC4R-y77dJVywoVFZ8bzsmmnj") },
        { name: "Unit 5(Material Model 2)", ...driveLinks("1y4GRBpwM1OT9CP8A1jMfDr4vHrFWwetp") },
        { name: "Complete Material", ...driveLinks("1JaCZiro92RdMg_HlR5_UPQj5LHpTUTE_") }

      ]
      },
      "Software Engineering(SE)": {
      "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bPLFfQZ9KoLQseHGf3ME_WmvuO9lmc19") },
        { name: "Unit 1(Q/A)", ...driveLinks("1nGbUuE2b0Tcy8HtJuyANHXXf2e_LMYOS") },
        { name: "Unit 2(Material)", ...driveLinks("1QFYjJ-x0R6QbRP3ZXI0YcSc-5760pJRA") },
        { name: "Unit 2(Q/A)", ...driveLinks("1dI7wVFZ0jdUba2qaQ0vFniKT9tAYmB9T") },
        { name: "Unit 3(Q/A --> Mid-I)", ...driveLinks("1mevSyGmoHpNTv5S7ye8WOU7GiSVwOQUY") }
      ],
      "Mid-II Portion": [
        { name: "Unit 5(Material)", ...driveLinks("1f1XptUy3JMD3VHf7uQLxEUlzfLGUaK0U") }
      ]
    },
      
      "JAVA (oops)": {
      "Mid-I Portion": [
        { name: "MID-I(Question Bank)", ...driveLinks("113zw2NK6OqEeT3nNY-Kt8i6e_MqLVCLA") },
        { name: "Unit 1(Ans)", ...driveLinks("1vNP_jgA6jIxbBOxKIwRRCCHtqqomYwEo") },
        { name: "Unit 2(Ans)", ...driveLinks("1EIfnHUSYYRj2i_M_9hCvql9-Axo3M2Ft") },
        { name: "Unit 3(Ans)", ...driveLinks("1y9GvroVbwf06fZVr705G7eYdqfI9mb9F") },
        { name: "Unit 1(Material)", ...driveLinks("1ao2lASFp-Vt7thsQ2pd43Vhm1JZZcaTB") },
        { name: "Unit 2(Material)", ...driveLinks("1wZCFdhbZmXX15-TpyhFCL807nkwLTL7p") },
        { name: "Unit 3(Material)", ...driveLinks("1_Vq376ktgEQ_7w409g5CKZENcgvkiOB8") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1978hisyz4ytuxdBQujycADZAwDz1WoFD") },
        { name: "MID-II(2 Marks)", ...driveLinks("1qgXOWNeqS3oBdyrBDDMH-6EP5JiFgVj1") },
        { name: "MID-II(Longs)", ...driveLinks("1jB00sk5DdHwHTqLh5lXu8-dyVOg0EHYV") },
        { name: "MID-II(Question Bank Answers)", ...driveLinks("1RoLnQBDaLs1paw83osqJRsCPNfkrKnnR") },
        { name: "MID-II(Unit 3 Answers)", ...driveLinks("1LR0kegagv3dLTt9jwM9J3zFzWFtYbZW7") },
        { name: "MID-II(Unit 4 Answers)", ...driveLinks("1KNzjT9PrVhLB9lqv501loxslgb0Ii85A") },
        { name: "MID-II(Unit 5 Answers)", ...driveLinks("1uKw9-lpW6zHp0r7mrBB-tBYxeHBt8AX-") },
        { name: "Unit 4(Programs)", ...driveLinks("1BQsVQiNFs5MLGi0exzvktaSTy1xwHO_h") },
        { name: "Unit 4(Notes)", ...driveLinks("17Emy_zdoSBWJP8Gl38MCC9P6V6kvflax") },
        { name: "Unit 4(Material)", ...driveLinks("1Whi_yTe_GlREreZljCxGE8mU4T5u4QsL") },
        { name: "Unit 5(Material)", ...driveLinks("1bctIGcHHWnNchhUDp89QSUnaLlZoG1D0") }
         ]
        },
      "Environmental Science(ES)": {
      "Mid-I Portion": [
       { name: "Mid-I(Question Bank)", ...driveLinks("1nIWc20tpe6WSfytN3iHE1cX6MIU7jWRM") },
       { name: "Mid-I(2 Marks)", ...driveLinks("14b_hqC6FiSUF54QoFNnbLOi1fy3QIWVm") },
       { name: "Mid-I(All Q/A)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") },
        { name: "Unit 1(longs)", ...driveLinks("1R5lpsMCiItarSvMLNXroBIoUZvaZXiUy") },
        { name: "Unit 2(longs)", ...driveLinks("1EuqyHvNyo5MkdhUSCaDjt-ozMRy_gU80") },
        { name: "Unit 3 Mid-I(longs)", ...driveLinks("1MR2CzqjnVlq5LFw0q_wU5rel-SnJRqSn") }
      ],
      "Mid-II Portion": [
       { name: "Mid-II(Question Bank)", ...driveLinks("1kCOTwJ5Gp6lS0wjj7Iak0HIzHPP4GVUM") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1x7mmB4ksUGcLMDOqnMbu6SUX5z9HMmMh") }
      ]
    },
      // "Full Stack Development-1": [
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      // ],
      "MEFA": {
      "Mid-I Portion": [
        { name: "Complete Notes", ...driveLinks("1mBkfV4hWOnVIb9f6f5VFcauqJLn97UkP") },
        { name: "1 to 6 Units Material", ...driveLinks("1ijZakkLUzEQoYTaF9_Oapmid1powsRYn") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1DBWn7b2hbtm5hziF3Q4pHpzL-yXVpz9w") },
        { name: "Mid-I(Shorts Material)", ...driveLinks("1pyRe1mIwmZUoZnymdVIW3QC_i33Eb2gO") },
        { name: "Unit 1(Material)", ...driveLinks("1Qp1al3AZiAYnF-o663H-7dpKnlqrqHY3") },
        { name: "Unit 1(Q/A)", ...driveLinks("1uwOSlrmIhbz_QXxwsmEvJJEr1S5KRuN7") },
        { name: "Unit 1&2(Material)", ...driveLinks("1CGWv96DeVeTco711OwJThiRwAy4YlAEx") },
        { name: "Unit 3(5 Marks)", ...driveLinks("18-srSvJDSaAIkGPRDcCead4FTSKwA7gO") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1lMrDWu42d4000CanaHwgOAB6bEm_w4VX") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(2 Marks)", ...driveLinks("1aEMRjNehOnHXxDv4LxVx01Tu1Ntl1Pxc") },
        { name: "Unit 4(5 Marks)", ...driveLinks("1Uf6RtmV-obTbl7GARHTp9sZTTZg3rgdh") },
        { name: "Unit 4(Notes)", ...driveLinks("1IMX4pplgIAHw9NulfxHK6s1oVNmj3VIS") },
        { name: "Unit 4(Sums)", ...driveLinks("1THmnHHB1F7tBMGhw6YQ4vYsmCIJuqiyc") },
        { name: "Unit 5(5 Marks)", ...driveLinks("172zRhddRfP8PM_9lQjm3FGcrol0cPaTT") },
        { name: "Unit 5(Handwritten Notes 1)", ...driveLinks("11GA-3BZOsguJdvcufgoIVli0yigE-IVJ") }
      ]
    },
      "PS": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Operating Systems": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      ],
      "DBMS": {
        "Mid-I Portion": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("13720qT75I9MVmM_QKSpPfcSVZXRjAhjX") },
        { name: "Unit 3(Material)", ...driveLinks("19ZzYo9C84Hopbh0wSZkZJRbUh6HbKBUb") },
        { name: "Unit 4(Material)", ...driveLinks("17AOAv6DEHnu3qZL0G10pn249IEbAx7aG") },
        { name: "Unit 5(Material)", ...driveLinks("1PitBPnk0Nwc4YPS1guYjuWvp6I47zEbb") }
      ]
    },
      "FLAT": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Python Programming": {
      "Mid-I Portion": [
        { name: "Unit 1", ...driveLinks("1Kb4SIA-m1eivnMhrnInDIAyhUwirUAXZ") },
        { name: "Unit 2", ...driveLinks("1JlV1tZ0lDcCAuBo3kMr_aW2eiyCrTbWQ") },
        { name: "Unit 3", ...driveLinks("1XVrgLsKJnv8HxM6-NeNKN-CEO9Osohvn") }
      ],
      "Mid-II Portion": [
        { name: "Unit 4&5", ...driveLinks("1tzq1fiQTzEumA3y_Xy_yL4qujEvhJkUs") }
      ]
    }
  },


    "ACSE": {
      "DMGT": {
        "Mid-I Portion":[
        { name: "Model paper", ...driveLinks("1Kipl3AyrXW9N7gsI1CoNT50IFG-Rb93J") },
        { name: "Mid-I(Question Bank)", ...driveLinks("16FpMlgEcn933tZpNTYYgk27bIFHOgSbY") },
        { name: "Unit 1(2 Marks)", ...driveLinks("10WhxzSR6tH7edTgaUQmeT7Hw0QLS6WK_") },
        { name: "Unit 1(longs)", ...driveLinks("1HfEaDzVehz1I8K6l0CLycBT6L7fMm4XV") },
        { name: "Unit 1(Notes)", ...driveLinks("1FTLktpF5Qxg3SAYcIAE1qm8snJAtmVYc") },
        { name: "Unit 2(2 Marks)", ...driveLinks("1vEDGNK3tYuPPZlFZjBiqCKc3SqW91sd3") },
        { name: "Unit 2(Notes)", ...driveLinks("1MkhJ_Dch7DzODbsFSNBexMZvntJzmHE2") },
        { name: "Unit 2&3(MId -I Q/A)", ...driveLinks("1xO3kwZGHzaQ1dJbG-0QuYvRnBTad9geS") },
        { name: "Unit 3(Part-1 Notes)", ...driveLinks("1qkvgY8525-1qhJzkxfT7CwcAdJ_heKX8") }
        ],
        "Mid-II Portion":[
        { name: "Mid-II(Question Bank)", ...driveLinks("1QoZUkSv4X_m4IV1cncILPN9LmrXXJqEU") },
        { name: "Unit 3(Notes)", ...driveLinks("1tL9rl8dyLqjEgf_ljI3XGUbo-vLg56rd") },
        { name: "Unit 3(shorts)", ...driveLinks("1SiB_LeXYJtBJ4TUF7UPJpSX_dD7AOfik") },
        { name: "Unit 4(longs)", ...driveLinks("1Aib9ARS8s53XT_L9VDL7qGpaZrNBtmbt") },
        { name: "Unit 5(longs Model 1)", ...driveLinks("1TOrErsm8UUJotVtlV1bwfS9-_Vkzq1Pi") },
        { name: "Unit 5(longs Model 2)", ...driveLinks("1nl72XswRVWazZUK2XYZQz8sO49MYWZUQ") },
        { name: "Unit 4&5(Shorts)", ...driveLinks("1fIgvivyJP_Q0v7kcJfX0ORTrD-HwbkVx") },
        { name: "Unit 4(Notes)", ...driveLinks("1BOMjwZlV86ohqF1Et31fHnIL43l6Yy_E") },
        { name: "Unit 4(Question Bank)", ...driveLinks("1iZzwk34yAXd7irUekoYoCLV8XnuAS1-K") },
        { name: "Unit 5(Notes Model 1)", ...driveLinks("1bpsNPw_cuA1u96Nil79nTt37P1oytono") }
      ]
    },
  
      "UHV": {
        "Mid-I Portion":[
        { name: "Question Bank", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "Mid-I(Q/A)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Mid-I(Shorts)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") },
        { name: "Mid-I(longs)", ...driveLinks("125782qemrCIrZynlOS-mYjiUtvEuXT-Y") }
      ],
      "Mid-II Portion":[
        { name: "MID-II(Question Bank)", ...driveLinks("1pwJtMkq1KVwEGbI0gqdr2VOBNlysQI2q") },
        { name: "MID-II(Answers)", ...driveLinks("1KkXOn2i5-M9FAa0BW-1C0vT9wmF_cnYw") },
        { name: "Mid-II(Shorts)", ...driveLinks("14OZARQ6AFcE1PT9gs8nQMYh2A-Bmq_L5") },
        { name: "Mid-II Unit 3(longs)", ...driveLinks("12b95fSbBdwxlRzNmQwvUsfzqBFPrvf4p") },
        { name: "Mid-II Unit 4(longs)", ...driveLinks("1y1dBpPd-9Kx0zZBwqw8oWH4YbFyOQdJH") },
        { name: "Mid-II Unit 5(longs)", ...driveLinks("1t6ZJhzD-aCn3_YuR_3K_QTBsn-M09GkW") }
        ]
        
      },
      "DLCO": {
        "Mid-I Portion":[
        { name: "Mid-I(Question Bank)", ...driveLinks("1VUBYJZltejB5K3yQUyK7TATINDDiONn8") },
        { name: "Unit 1(Number system)", ...driveLinks("1TE8t2P60vKlOK3m-l4kxcMpnmAlnMXri") },
        { name: "Unit 1(2 Marks)", ...driveLinks("1pnTdWPan0CPA1tiMP9TvNIfmmNL-VUs1") },
        { name: "Unit 2(Shift Registers)", ...driveLinks("1UVf6yeZmc5C-9GSpg8R1xIFYYxNOnxO3") },
        { name: "Unit 2(2 Marks)", ...driveLinks("1ceLEdRU3-6cv81n1l3x1S390e5vgi_kd") },
        { name: "Unit 2(longs)", ...driveLinks("1RlPn8NP7p2F5b_WxMPYPYnKz54vq9mXH") },
        { name: "Unit 3(longs)", ...driveLinks("1fMHsf9HVwKHuNmOePDZGqRHLBXPJk_Pw") },
        { name: "Unit 3(Counters)", ...driveLinks("1jj9sgasUF2Xp0bCGRApvXDtn6RmPNKv5") },
        { name: "Unit 3(2 Marks)", ...driveLinks("1zIuiN_9FWCHxLn7Dwvm8kKVrdVCvV3mz") }
        ],
        "Mid-II Portion":[
        { name: "Mid-II(Question Bank)", ...driveLinks("1-otUPj2yiZOjhbwJJ-fEd786WwCCf1fw") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1EDFdkT7KynmCF91NHGionkSpl1KqgTB4") },
        { name: "Mid-II(Longs)", ...driveLinks("1nM3b7vcGZXOQhPCkSD9SBvloaX95htyj") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1rfDGJEFOKpYFU9KnzEquGUjDGmu_3HML") },
        { name: "Unit 4(Notes)", ...driveLinks("1i-Qy99FH6Iqbb5YdYySV1a2RIO4ZPWfs") },
        { name: "Unit 4 & 5(2 Marks)", ...driveLinks("1yDUY6cSlrIs2kVwWe0zmWBAC_5fgAD6i") },
        { name: "Unit 4 & 5(Material)", ...driveLinks("1Okw_0ghXrrLDr57a_025C45WkVuQOcKi") },
        { name: "Unit 5(Material Model 1)", ...driveLinks("1-2lhqB2WC4R-y77dJVywoVFZ8bzsmmnj") },
        { name: "Unit 5(Material Model 2)", ...driveLinks("1y4GRBpwM1OT9CP8A1jMfDr4vHrFWwetp") },
        { name: "Complete Material", ...driveLinks("1JaCZiro92RdMg_HlR5_UPQj5LHpTUTE_") }
        ]
      },
      "ADSAA(C Language)": {
        "Mid-I Portion":[
        { name: "Unit 1(Sums)", ...driveLinks("1vepY2RW2nXhztwUHOH1rbgJFXm_6HAMR") },
        { name: "Unit 1(Material)", ...driveLinks("1-Gjf2SroHwfAKkUF3pPprZUGSA3DEQg4") },
        { name: "Unit 1(Notes)", ...driveLinks("1vepY2RW2nXhztwUHOH1rbgJFXm_6HAMR") },
        { name: "Unit 1(longs)", ...driveLinks("1HruxpeZ8uccUW1KVykbIyz_kY4hGkb-j") },
        { name: "Unit 2(sums)", ...driveLinks("1Rzv747aL7ZdyoQXz4gtqw-jI-1rGzmOz") },
        { name: "Unit 2(Material)", ...driveLinks("11YMwr0iehKM2weOpPHUK-2ujndYu1Y9E") },
        { name: "Heap trees Notes", ...driveLinks("1TUe3GHeYA5FyQuERqermngcqZNCJlOVl") },
        { name: "Unit 3(Notes)", ...driveLinks("1SuMRxPaqb3mDrZSr9sWql0vQzq78qmu4") },
        { name: "Unit 3(Material)", ...driveLinks("18ZixBC79bCQk__PlkeGKwmOV3OpcntPW") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1iIi4Hjzj6lxQdXnj_IKN3Th5feoGWn40") },
        { name: "Mid-I(2 Marks Model 1)", ...driveLinks("18y0ZCD4wYwONvAQUyHJbDKk2dRcw0x8k") },
        { name: "Mid-I(2 Marks Model 2)", ...driveLinks("1PgGu-r5Zj04umea4TPIM-U1GN1dSUj6S") }
        ],
        "Mid-II Portion":[
        { name: "Mid-II(Question Bank)", ...driveLinks("1xTByerRjl8qtUpTo-FcFsTOmSQpYJC7v") },
        { name: "Mid-II(2 Marks Model 1)", ...driveLinks("1Aqoo5LQAaE7-VS0VNAIhOyq6I7KO-eWe") },
        { name: "Mid-II(2 Marks Model 2)", ...driveLinks("1Op13yVMufXfRH7R3g1RL80HgAbhJUcBy") },
        { name: "Unit 3(sums)", ...driveLinks("12nLNJi9a_xGUl-MVgY8J4anlyTxIR18F") },
        { name: "Unit 4(sums)", ...driveLinks("17Kxxxj_BOoiGKqAgzojgo_6HU7GfT8vt") },
        { name: "Graphs Notes", ...driveLinks("1JCGnglDjzbzaojcgw5ud4SFwuZqrv9Wz") },
        { name: "Unit 4(Material)", ...driveLinks("1DEltM9NM9GJqsi024RpLPSyXwDrx-yDM") },
        { name: "Unit 4(Notes Backtracking)", ...driveLinks("1HJbAP1NyR3fyOslyJ_daFt8if1s1Tn3y") },
        { name: "Knapsack Explanation", ...driveLinks("1DxN9r_lCCtZLH66R9DC20Haru9-FJDkR") },
        { name: "Unit 5(Notes)", ...driveLinks("1o0wUw9aWloceZ19cK1JHrcPLXQbsXEX3") },
        { name: "Unit 5(Material)", ...driveLinks("1jKaxu2Ni90lhchRog8s5pfr6GSiHwOIw") }
        ]
      },
      "OOPS (JAVA)": {
        "Mid-I Portion":[
        { name: "MID-I(Question Bank)", ...driveLinks("113zw2NK6OqEeT3nNY-Kt8i6e_MqLVCLA") },
        { name: "Unit 1(Ans)", ...driveLinks("1vNP_jgA6jIxbBOxKIwRRCCHtqqomYwEo") },
        { name: "Unit 2(Ans)", ...driveLinks("1EIfnHUSYYRj2i_M_9hCvql9-Axo3M2Ft") },
        { name: "Unit 3(Ans)", ...driveLinks("1y9GvroVbwf06fZVr705G7eYdqfI9mb9F") },
        { name: "Unit 1(Material)", ...driveLinks("1ao2lASFp-Vt7thsQ2pd43Vhm1JZZcaTB") },
        { name: "Unit 2(Material)", ...driveLinks("1wZCFdhbZmXX15-TpyhFCL807nkwLTL7p") },
        { name: "Unit 3(Material)", ...driveLinks("1_Vq376ktgEQ_7w409g5CKZENcgvkiOB8") }
        ],
        "Mid-II Portion":[
        { name: "MID-II(Question Bank)", ...driveLinks("1978hisyz4ytuxdBQujycADZAwDz1WoFD") },
        { name: "MID-II(2 Marks)", ...driveLinks("1qgXOWNeqS3oBdyrBDDMH-6EP5JiFgVj1") },
        { name: "MID-II(Longs)", ...driveLinks("1jB00sk5DdHwHTqLh5lXu8-dyVOg0EHYV") },
        { name: "MID-II(Question Bank Answers)", ...driveLinks("1RoLnQBDaLs1paw83osqJRsCPNfkrKnnR") },
        { name: "MID-II(Unit 3 Answers)", ...driveLinks("1LR0kegagv3dLTt9jwM9J3zFzWFtYbZW7") },
        { name: "MID-II(Unit 4 Answers)", ...driveLinks("1KNzjT9PrVhLB9lqv501loxslgb0Ii85A") },
        { name: "MID-II(Unit 5 Answers)", ...driveLinks("1uKw9-lpW6zHp0r7mrBB-tBYxeHBt8AX-") },
        { name: "Unit 4(Programs)", ...driveLinks("1BQsVQiNFs5MLGi0exzvktaSTy1xwHO_h") },
        { name: "Unit 4(Notes)", ...driveLinks("17Emy_zdoSBWJP8Gl38MCC9P6V6kvflax") },
        { name: "Unit 4(Material)", ...driveLinks("1Whi_yTe_GlREreZljCxGE8mU4T5u4QsL") },
        { name: "Unit 5(Material)", ...driveLinks("1bctIGcHHWnNchhUDp89QSUnaLlZoG1D0") }
        ]
      },
      "Environmental Science(ES)": {
       "Mid-I Portion":[
       { name: "Mid-I(Question Bank)", ...driveLinks("1nIWc20tpe6WSfytN3iHE1cX6MIU7jWRM") },
       { name: "Mid-I(2 Marks)", ...driveLinks("14b_hqC6FiSUF54QoFNnbLOi1fy3QIWVm") },
       { name: "Mid-I(All Q/A)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") },
        { name: "Unit 1(longs)", ...driveLinks("1R5lpsMCiItarSvMLNXroBIoUZvaZXiUy") },
        { name: "Unit 2(longs)", ...driveLinks("1EuqyHvNyo5MkdhUSCaDjt-ozMRy_gU80") },
        { name: "Unit 3 Mid-I(longs)", ...driveLinks("1MR2CzqjnVlq5LFw0q_wU5rel-SnJRqSn") }
       ],
       "Mid-II Portion":[ 
        { name: "Mid-II(Question Bank)", ...driveLinks("1kCOTwJ5Gp6lS0wjj7Iak0HIzHPP4GVUM") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1x7mmB4ksUGcLMDOqnMbu6SUX5z9HMmMh") }
      ]
      },
      "MEFA": {
        "Mid-I Portion":[
        { name: "Complete Notes", ...driveLinks("1mBkfV4hWOnVIb9f6f5VFcauqJLn97UkP") },
        { name: "1 to 6 Units Material", ...driveLinks("1ijZakkLUzEQoYTaF9_Oapmid1powsRYn") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1DBWn7b2hbtm5hziF3Q4pHpzL-yXVpz9w") },
        { name: "Mid-I(Shorts Material)", ...driveLinks("1pyRe1mIwmZUoZnymdVIW3QC_i33Eb2gO") },
        { name: "Unit 1(Material)", ...driveLinks("1Qp1al3AZiAYnF-o663H-7dpKnlqrqHY3") },
        { name: "Unit 1(Q/A)", ...driveLinks("1uwOSlrmIhbz_QXxwsmEvJJEr1S5KRuN7") },
        { name: "Unit 1&2(Material)", ...driveLinks("1CGWv96DeVeTco711OwJThiRwAy4YlAEx") },
        { name: "Unit 3(5 Marks)", ...driveLinks("18-srSvJDSaAIkGPRDcCead4FTSKwA7gO") }
        ],
        "Mid-II Portion":[
        { name: "Mid-II(Question Bank)", ...driveLinks("1lMrDWu42d4000CanaHwgOAB6bEm_w4VX") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1aEMRjNehOnHXxDv4LxVx01Tu1Ntl1Pxc") },
        { name: "Unit 4(5 Marks)", ...driveLinks("1Uf6RtmV-obTbl7GARHTp9sZTTZg3rgdh") },
        { name: "Unit 4(Notes)", ...driveLinks("1IMX4pplgIAHw9NulfxHK6s1oVNmj3VIS") },
        { name: "Unit 4(Sums)", ...driveLinks("1THmnHHB1F7tBMGhw6YQ4vYsmCIJuqiyc") },
        { name: "Unit 5(5 Marks)", ...driveLinks("172zRhddRfP8PM_9lQjm3FGcrol0cPaTT") },
        { name: "Unit 5(Handwritten Notes 1)", ...driveLinks("11GA-3BZOsguJdvcufgoIVli0yigE-IVJ") }
      ]
    },
      "Number Theory & Applications": {
        // "Mid-I Portion":[
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      // ],
     // "Mid-II Portion":[
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ]
    },
      "Operating Systems": {
       // "Mid-I Portion":[
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
     // ],
     //"Mid-II Portion":[
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ]
  },
      "DBMS": {
        "Mid-II Portion":[
        { name: "MID-II(Question Bank)", ...driveLinks("13720qT75I9MVmM_QKSpPfcSVZXRjAhjX") },
        { name: "Unit 3(Material)", ...driveLinks("19ZzYo9C84Hopbh0wSZkZJRbUh6HbKBUb") },
        { name: "Unit 4(Material)", ...driveLinks("17AOAv6DEHnu3qZL0G10pn249IEbAx7aG") },
        { name: "Unit 5(Material)", ...driveLinks("1PitBPnk0Nwc4YPS1guYjuWvp6I47zEbb") }
      ]
    },
      "Computer Networks": {
       // "Mid-I Portion":[
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
     // ],
      //"Mid-II Portion":[
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ]
    },
      "Python Programming": {
        "Mid-I Portion":[
        { name: "Unit 1", ...driveLinks("1Kb4SIA-m1eivnMhrnInDIAyhUwirUAXZ") },
        { name: "Unit 2", ...driveLinks("1JlV1tZ0lDcCAuBo3kMr_aW2eiyCrTbWQ") },
        { name: "Unit 3", ...driveLinks("1XVrgLsKJnv8HxM6-NeNKN-CEO9Osohvn") }
        ],
        "Mid-II Portion":[
        { name: "Unit 4&5", ...driveLinks("1tzq1fiQTzEumA3y_Xy_yL4qujEvhJkUs") }
      ]
      },
      "IDS": {
        "Mid-I Portion":[
        { name: "Unit 1(Handwritten Notes)", ...driveLinks("1BoJ0ME51mppoEpA0xrdQEkouOeF8fNdi") },
        { name: "Unit 1(PDF)", ...driveLinks("19LAd9VqJR0m_WjlVj-rPydiyKTaijPlA") },
        { name: "Unit 2(Handwritten Notes)", ...driveLinks("1pJeut2WZ1ft3ZbYQovdDv265HYInJ6c9") },
        { name: "Unit 2(Material)", ...driveLinks("1tHeTT75Iqlm805lmIlDayoPAv8CWNfeU") },
        { name: "Unit 3(Material)", ...driveLinks("1iFfdrVYRm9-KKP8ATAc-A2QmZj7KSYKY") },
        { name: "Unit 3(Mid-I Notes)", ...driveLinks("1qdIm1IfI_edCYLhHg51TXMgPEJljsTFU") },
        { name: "Mid-I(Shorts)", ...driveLinks("18kIA0dH1V9yx6xk6KFkGHGw_pgO6G5-g") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1EWdhPl7zLfRqYOPxhplcqdL7SX-H_HQW") }
        ],
        "Mid-II Portion":[
        { name: "Unit 4(Material)", ...driveLinks("1Q9XwwAETxezdrQbIK9DUDkPgcMu02_ET") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1dUISkIOOT6FK-Sui9ug2zGXF5X4IQNOE") },
        { name: "Unit 5(Material)", ...driveLinks("1_r4EVUJWj4isq-ZZT4Yw4DQXhf9nsX7Z") },
        { name: "Unit 5(Handwritten Notes)", ...driveLinks("1iROv8um4YNUldU76HY9xXqMBhuFi1veR") }

      ]
    },
      "SMDS": {
       // "Mid-I Portion":[
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      //],
      //"Mid-II Portion":[
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
     // ]
    },
      "Data Engineering": {
        // "Mid-I Portion":[
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
     // ],
      //"Mid-II Portion":[
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") } 
        
     // ]
    }
  },


    "AI&DS": {
      "DMGT": {
        "Mid-I Portion":[
        { name: "Model paper", ...driveLinks("1Kipl3AyrXW9N7gsI1CoNT50IFG-Rb93J") },
        { name: "Mid-I(Question Bank)", ...driveLinks("16FpMlgEcn933tZpNTYYgk27bIFHOgSbY") },
        { name: "Unit 1(2 Marks)", ...driveLinks("10WhxzSR6tH7edTgaUQmeT7Hw0QLS6WK_") },
        { name: "Unit 1(longs)", ...driveLinks("1HfEaDzVehz1I8K6l0CLycBT6L7fMm4XV") },
        { name: "Unit 1(Notes)", ...driveLinks("1FTLktpF5Qxg3SAYcIAE1qm8snJAtmVYc") },
        { name: "Unit 2(2 Marks)", ...driveLinks("1vEDGNK3tYuPPZlFZjBiqCKc3SqW91sd3") },
        { name: "Unit 2(Notes)", ...driveLinks("1MkhJ_Dch7DzODbsFSNBexMZvntJzmHE2") },
        { name: "Unit 2&3(MId -I Q/A)", ...driveLinks("1xO3kwZGHzaQ1dJbG-0QuYvRnBTad9geS") },
        { name: "Unit 3(Part-1 Notes)", ...driveLinks("1qkvgY8525-1qhJzkxfT7CwcAdJ_heKX8") }
        ],
        "Mid-II Portion":[
        { name: "Mid-II(Question Bank)", ...driveLinks("1QoZUkSv4X_m4IV1cncILPN9LmrXXJqEU") },
        { name: "Unit 3(Notes)", ...driveLinks("1tL9rl8dyLqjEgf_ljI3XGUbo-vLg56rd") },
        { name: "Unit 3(shorts)", ...driveLinks("1SiB_LeXYJtBJ4TUF7UPJpSX_dD7AOfik") },
        { name: "Unit 4(longs)", ...driveLinks("1Aib9ARS8s53XT_L9VDL7qGpaZrNBtmbt") },
        { name: "Unit 5(longs Model 1)", ...driveLinks("1TOrErsm8UUJotVtlV1bwfS9-_Vkzq1Pi") },
        { name: "Unit 5(longs Model 2)", ...driveLinks("1nl72XswRVWazZUK2XYZQz8sO49MYWZUQ") },
        { name: "Unit 4&5(Shorts)", ...driveLinks("1fIgvivyJP_Q0v7kcJfX0ORTrD-HwbkVx") },
        { name: "Unit 4(Notes)", ...driveLinks("1BOMjwZlV86ohqF1Et31fHnIL43l6Yy_E") },
        { name: "Unit 4(Question Bank)", ...driveLinks("1iZzwk34yAXd7irUekoYoCLV8XnuAS1-K") },
        { name: "Unit 5(Notes Model 1)", ...driveLinks("1bpsNPw_cuA1u96Nil79nTt37P1oytono") }
      ]
    },
      "UHV": {
        "Mid-I Portion": [
        { name: "Question Bank", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "Mid-I(Q/A)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Mid-I(Shorts)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") },
        { name: "Mid-I(longs)", ...driveLinks("125782qemrCIrZynlOS-mYjiUtvEuXT-Y") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1pwJtMkq1KVwEGbI0gqdr2VOBNlysQI2q") },
        { name: "MID-II(Answers)", ...driveLinks("1KkXOn2i5-M9FAa0BW-1C0vT9wmF_cnYw") },
        { name: "Mid-II(Shorts)", ...driveLinks("14OZARQ6AFcE1PT9gs8nQMYh2A-Bmq_L5") },
        { name: "Mid-II Unit 3(longs)", ...driveLinks("12b95fSbBdwxlRzNmQwvUsfzqBFPrvf4p") },
        { name: "Mid-II Unit 4(longs)", ...driveLinks("1y1dBpPd-9Kx0zZBwqw8oWH4YbFyOQdJH") },
        { name: "Mid-II Unit 5(longs)", ...driveLinks("1t6ZJhzD-aCn3_YuR_3K_QTBsn-M09GkW") }
      ]
      },
      "DLCO": {
      "Mid-I Portion": [  
        { name: "Unit 1(Number system)", ...driveLinks("1TE8t2P60vKlOK3m-l4kxcMpnmAlnMXri") },
        { name: "Unit 2(Shift Registers)", ...driveLinks("1UVf6yeZmc5C-9GSpg8R1xIFYYxNOnxO3") },
        { name: "Unit 3(Counters)", ...driveLinks("1jj9sgasUF2Xp0bCGRApvXDtn6RmPNKv5") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1VUBYJZltejB5K3yQUyK7TATINDDiONn8") },
        { name: "Unit 2(longs)", ...driveLinks("1RlPn8NP7p2F5b_WxMPYPYnKz54vq9mXH") },
        { name: "Unit 3(longs)", ...driveLinks("1fMHsf9HVwKHuNmOePDZGqRHLBXPJk_Pw") },
        { name: "Unit 1(2 Marks)", ...driveLinks("1pnTdWPan0CPA1tiMP9TvNIfmmNL-VUs1") },
        { name: "Unit 2(2 Marks)", ...driveLinks("1ceLEdRU3-6cv81n1l3x1S390e5vgi_kd") },
        { name: "Unit 3(2 Marks)", ...driveLinks("1zIuiN_9FWCHxLn7Dwvm8kKVrdVCvV3mz") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(Question Bank)", ...driveLinks("1-otUPj2yiZOjhbwJJ-fEd786WwCCf1fw") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1EDFdkT7KynmCF91NHGionkSpl1KqgTB4") },
        { name: "Mid-II(Longs)", ...driveLinks("1nM3b7vcGZXOQhPCkSD9SBvloaX95htyj") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1rfDGJEFOKpYFU9KnzEquGUjDGmu_3HML") },
        { name: "Unit 4(Notes)", ...driveLinks("1i-Qy99FH6Iqbb5YdYySV1a2RIO4ZPWfs") },
        { name: "Unit 4 & 5(2 Marks)", ...driveLinks("1yDUY6cSlrIs2kVwWe0zmWBAC_5fgAD6i") },
        { name: "Unit 4 & 5(Material)", ...driveLinks("1Okw_0ghXrrLDr57a_025C45WkVuQOcKi") },
        { name: "Unit 5(Material Model 1)", ...driveLinks("1-2lhqB2WC4R-y77dJVywoVFZ8bzsmmnj") },
        { name: "Unit 5(Material Model 2)", ...driveLinks("1y4GRBpwM1OT9CP8A1jMfDr4vHrFWwetp") },
        { name: "Complete Material", ...driveLinks("1JaCZiro92RdMg_HlR5_UPQj5LHpTUTE_") }

      ]
      },
      "ADSAA(C Language)": {
        "Mid-I Portion":[
        { name: "Unit 1(Sums)", ...driveLinks("1vepY2RW2nXhztwUHOH1rbgJFXm_6HAMR") },
        { name: "Unit 1(Material)", ...driveLinks("1-Gjf2SroHwfAKkUF3pPprZUGSA3DEQg4") },
        { name: "Unit 1(Notes)", ...driveLinks("1vepY2RW2nXhztwUHOH1rbgJFXm_6HAMR") },
        { name: "Unit 1(longs)", ...driveLinks("1HruxpeZ8uccUW1KVykbIyz_kY4hGkb-j") },
        { name: "Unit 2(sums)", ...driveLinks("1Rzv747aL7ZdyoQXz4gtqw-jI-1rGzmOz") },
        { name: "Unit 2(Material)", ...driveLinks("11YMwr0iehKM2weOpPHUK-2ujndYu1Y9E") },
        { name: "Heap trees Notes", ...driveLinks("1TUe3GHeYA5FyQuERqermngcqZNCJlOVl") },
        { name: "Unit 3(Notes)", ...driveLinks("1SuMRxPaqb3mDrZSr9sWql0vQzq78qmu4") },
        { name: "Unit 3(Material)", ...driveLinks("18ZixBC79bCQk__PlkeGKwmOV3OpcntPW") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1iIi4Hjzj6lxQdXnj_IKN3Th5feoGWn40") },
        { name: "Mid-I(2 Marks Model 1)", ...driveLinks("18y0ZCD4wYwONvAQUyHJbDKk2dRcw0x8k") },
        { name: "Mid-I(2 Marks Model 2)", ...driveLinks("1PgGu-r5Zj04umea4TPIM-U1GN1dSUj6S") }
        ],
        "Mid-II Portion":[
        { name: "Mid-II(Question Bank)", ...driveLinks("1xTByerRjl8qtUpTo-FcFsTOmSQpYJC7v") },
        { name: "Mid-II(2 Marks Model 1)", ...driveLinks("1Aqoo5LQAaE7-VS0VNAIhOyq6I7KO-eWe") },
        { name: "Mid-II(2 Marks Model 2)", ...driveLinks("1Op13yVMufXfRH7R3g1RL80HgAbhJUcBy") },
        { name: "Unit 3(sums)", ...driveLinks("12nLNJi9a_xGUl-MVgY8J4anlyTxIR18F") },
        { name: "Unit 4(sums)", ...driveLinks("17Kxxxj_BOoiGKqAgzojgo_6HU7GfT8vt") },
        { name: "Graphs Notes", ...driveLinks("1JCGnglDjzbzaojcgw5ud4SFwuZqrv9Wz") },
        { name: "Unit 4(Material)", ...driveLinks("1DEltM9NM9GJqsi024RpLPSyXwDrx-yDM") },
        { name: "Unit 4(Notes Backtracking)", ...driveLinks("1HJbAP1NyR3fyOslyJ_daFt8if1s1Tn3y") },
        { name: "Knapsack Explanation", ...driveLinks("1DxN9r_lCCtZLH66R9DC20Haru9-FJDkR") },
        { name: "Unit 5(Notes)", ...driveLinks("1o0wUw9aWloceZ19cK1JHrcPLXQbsXEX3") },
        { name: "Unit 5(Material)", ...driveLinks("1jKaxu2Ni90lhchRog8s5pfr6GSiHwOIw") }
        ]
      },
       "JAVA (oops)": {
      "Mid-I Portion": [
        { name: "MID-I(Question Bank)", ...driveLinks("113zw2NK6OqEeT3nNY-Kt8i6e_MqLVCLA") },
        { name: "Unit 1(Ans)", ...driveLinks("1vNP_jgA6jIxbBOxKIwRRCCHtqqomYwEo") },
        { name: "Unit 2(Ans)", ...driveLinks("1EIfnHUSYYRj2i_M_9hCvql9-Axo3M2Ft") },
        { name: "Unit 3(Ans)", ...driveLinks("1y9GvroVbwf06fZVr705G7eYdqfI9mb9F") },
        { name: "Unit 1(Material)", ...driveLinks("1ao2lASFp-Vt7thsQ2pd43Vhm1JZZcaTB") },
        { name: "Unit 2(Material)", ...driveLinks("1wZCFdhbZmXX15-TpyhFCL807nkwLTL7p") },
        { name: "Unit 3(Material)", ...driveLinks("1_Vq376ktgEQ_7w409g5CKZENcgvkiOB8") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1978hisyz4ytuxdBQujycADZAwDz1WoFD") },
        { name: "MID-II(2 Marks)", ...driveLinks("1qgXOWNeqS3oBdyrBDDMH-6EP5JiFgVj1") },
        { name: "MID-II(Longs)", ...driveLinks("1jB00sk5DdHwHTqLh5lXu8-dyVOg0EHYV") },
        { name: "MID-II(Question Bank Answers)", ...driveLinks("1RoLnQBDaLs1paw83osqJRsCPNfkrKnnR") },
        { name: "MID-II(Unit 3 Answers)", ...driveLinks("1LR0kegagv3dLTt9jwM9J3zFzWFtYbZW7") },
        { name: "MID-II(Unit 4 Answers)", ...driveLinks("1KNzjT9PrVhLB9lqv501loxslgb0Ii85A") },
        { name: "MID-II(Unit 5 Answers)", ...driveLinks("1uKw9-lpW6zHp0r7mrBB-tBYxeHBt8AX-") },
        { name: "Unit 4(Programs)", ...driveLinks("1BQsVQiNFs5MLGi0exzvktaSTy1xwHO_h") },
        { name: "Unit 4(Notes)", ...driveLinks("17Emy_zdoSBWJP8Gl38MCC9P6V6kvflax") },
        { name: "Unit 4(Material)", ...driveLinks("1Whi_yTe_GlREreZljCxGE8mU4T5u4QsL") },
        { name: "Unit 5(Material)", ...driveLinks("1bctIGcHHWnNchhUDp89QSUnaLlZoG1D0") }
         ]
        },
      "Environmental Science(ES)": {
      "Mid-I Portion": [
       { name: "Mid-I(Question Bank)", ...driveLinks("1nIWc20tpe6WSfytN3iHE1cX6MIU7jWRM") },
       { name: "Mid-I(2 Marks)", ...driveLinks("14b_hqC6FiSUF54QoFNnbLOi1fy3QIWVm") },
       { name: "Mid-I(All Q/A)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") },
        { name: "Unit 1(longs)", ...driveLinks("1R5lpsMCiItarSvMLNXroBIoUZvaZXiUy") },
        { name: "Unit 2(longs)", ...driveLinks("1EuqyHvNyo5MkdhUSCaDjt-ozMRy_gU80") },
        { name: "Unit 3 Mid-I(longs)", ...driveLinks("1MR2CzqjnVlq5LFw0q_wU5rel-SnJRqSn") }
      ],
      "Mid-II Portion": [
       { name: "Mid-II(Question Bank)", ...driveLinks("1kCOTwJ5Gp6lS0wjj7Iak0HIzHPP4GVUM") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1x7mmB4ksUGcLMDOqnMbu6SUX5z9HMmMh") }
      ]
    },
      "Full Stack Development-1": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "MEFA": {
      "Mid-I Portion": [
        { name: "Complete Notes", ...driveLinks("1mBkfV4hWOnVIb9f6f5VFcauqJLn97UkP") },
        { name: "1 to 6 Units Material", ...driveLinks("1ijZakkLUzEQoYTaF9_Oapmid1powsRYn") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1DBWn7b2hbtm5hziF3Q4pHpzL-yXVpz9w") },
        { name: "Mid-I(Shorts Material)", ...driveLinks("1pyRe1mIwmZUoZnymdVIW3QC_i33Eb2gO") },
        { name: "Unit 1(Material)", ...driveLinks("1Qp1al3AZiAYnF-o663H-7dpKnlqrqHY3") },
        { name: "Unit 1(Q/A)", ...driveLinks("1uwOSlrmIhbz_QXxwsmEvJJEr1S5KRuN7") },
        { name: "Unit 1&2(Material)", ...driveLinks("1CGWv96DeVeTco711OwJThiRwAy4YlAEx") },
        { name: "Unit 3(5 Marks)", ...driveLinks("18-srSvJDSaAIkGPRDcCead4FTSKwA7gO") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1lMrDWu42d4000CanaHwgOAB6bEm_w4VX") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(2 Marks)", ...driveLinks("1aEMRjNehOnHXxDv4LxVx01Tu1Ntl1Pxc") },
        { name: "Unit 4(5 Marks)", ...driveLinks("1Uf6RtmV-obTbl7GARHTp9sZTTZg3rgdh") },
        { name: "Unit 4(Notes)", ...driveLinks("1IMX4pplgIAHw9NulfxHK6s1oVNmj3VIS") },
        { name: "Unit 4(Sums)", ...driveLinks("1THmnHHB1F7tBMGhw6YQ4vYsmCIJuqiyc") },
        { name: "Unit 5(5 Marks)", ...driveLinks("172zRhddRfP8PM_9lQjm3FGcrol0cPaTT") },
        { name: "Unit 5(Handwritten Notes 1)", ...driveLinks("11GA-3BZOsguJdvcufgoIVli0yigE-IVJ") }
      ]
    },
          "Number Theory & Applications": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Operating Systems": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "DBMS": {
      "Mid-I Portion": [
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("13720qT75I9MVmM_QKSpPfcSVZXRjAhjX") },
        { name: "Unit 3(Material)", ...driveLinks("19ZzYo9C84Hopbh0wSZkZJRbUh6HbKBUb") },
        { name: "Unit 4(Material)", ...driveLinks("17AOAv6DEHnu3qZL0G10pn249IEbAx7aG") },
        { name: "Unit 5(Material)", ...driveLinks("1PitBPnk0Nwc4YPS1guYjuWvp6I47zEbb") }
      ]
    },
      "Computer Networks": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Python Programming": {
      "Mid-I Portion": [
        { name: "Unit 1", ...driveLinks("1Kb4SIA-m1eivnMhrnInDIAyhUwirUAXZ") },
        { name: "Unit 2", ...driveLinks("1JlV1tZ0lDcCAuBo3kMr_aW2eiyCrTbWQ") },
        { name: "Unit 3", ...driveLinks("1XVrgLsKJnv8HxM6-NeNKN-CEO9Osohvn") }
      ],
      "Mid-II Portion": [
        { name: "Unit 4&5", ...driveLinks("1tzq1fiQTzEumA3y_Xy_yL4qujEvhJkUs") }
      ]
    },
      "IDS": {
      "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1EWdhPl7zLfRqYOPxhplcqdL7SX-H_HQW") },
        { name: "Mid-I(Shorts)", ...driveLinks("18kIA0dH1V9yx6xk6KFkGHGw_pgO6G5-g") },
        { name: "Unit 1(Handwritten Notes)", ...driveLinks("1BoJ0ME51mppoEpA0xrdQEkouOeF8fNdi") },
        { name: "Unit 1(PDF)", ...driveLinks("19LAd9VqJR0m_WjlVj-rPydiyKTaijPlA") },
        { name: "Unit 2(Handwritten Notes)", ...driveLinks("1pJeut2WZ1ft3ZbYQovdDv265HYInJ6c9") },
        { name: "Unit 2(Material)", ...driveLinks("1tHeTT75Iqlm805lmIlDayoPAv8CWNfeU") },
        { name: "Unit 3(Material)", ...driveLinks("1iFfdrVYRm9-KKP8ATAc-A2QmZj7KSYKY") },
        { name: "Unit 3(Mid-I Notes)", ...driveLinks("1qdIm1IfI_edCYLhHg51TXMgPEJljsTFU") }
      ],
      "Mid-II Portion": [
        { name: "Unit 4(Material)", ...driveLinks("1Q9XwwAETxezdrQbIK9DUDkPgcMu02_ET") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1dUISkIOOT6FK-Sui9ug2zGXF5X4IQNOE") },
        { name: "Unit 5(Material)", ...driveLinks("1_r4EVUJWj4isq-ZZT4Yw4DQXhf9nsX7Z") },
        { name: "Unit 5(Handwritten Notes)", ...driveLinks("1iROv8um4YNUldU76HY9xXqMBhuFi1veR") }
      ]
    },
      "SMDS": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Data Engineering": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Principles of AI": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    },

    "ECM": {
      "PS": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "UHV": {
        "Mid-I Portion": [
        { name: "Question Bank", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "Mid-I(Q/A)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Mid-I(Shorts)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") },
        { name: "Mid-I(longs)", ...driveLinks("125782qemrCIrZynlOS-mYjiUtvEuXT-Y") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1pwJtMkq1KVwEGbI0gqdr2VOBNlysQI2q") },
        { name: "MID-II(Answers)", ...driveLinks("1KkXOn2i5-M9FAa0BW-1C0vT9wmF_cnYw") },
        { name: "Mid-II(Shorts)", ...driveLinks("14OZARQ6AFcE1PT9gs8nQMYh2A-Bmq_L5") },
        { name: "Mid-II Unit 3(longs)", ...driveLinks("12b95fSbBdwxlRzNmQwvUsfzqBFPrvf4p") },
        { name: "Mid-II Unit 4(longs)", ...driveLinks("1y1dBpPd-9Kx0zZBwqw8oWH4YbFyOQdJH") },
        { name: "Mid-II Unit 5(longs)", ...driveLinks("1t6ZJhzD-aCn3_YuR_3K_QTBsn-M09GkW") }
      ]
      },
      "DCD": {
      "Mid-I Portion": [
        { name: "Unit 1(Complete Notes)", ...driveLinks("1xsUnP7nMAtC9LkmoZ4sAUP3XIOcqb6JP") },
        { name: "Syllabus", ...driveLinks("1ACELXKzgMWQTN4UxLo6qtMtQn3rL-CYU") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1H8NtnapCYIyYrT70NrT625tFVWUH4XJF") },
        { name: "Unit 1(Notes)", ...driveLinks("1xsUnP7nMAtC9LkmoZ4sAUP3XIOcqb6JP") },
        { name: "Unit 1(ppt version)", ...driveLinks("1Wup1tCKEq-DVzB9l47GfI6_eUbjj_kbg") },
        { name: "Unit 2(ppt version)", ...driveLinks("1uK-RfbB7e5YZxr7d5gsPaHi1BfpCP8o6") },
        { name: "Unit 2(Notes)", ...driveLinks("1ThzFvNK6jBNy4X8KjLqPdOGBUOws1fin") },
        { name: "Unit 3(ppt version)", ...driveLinks("1iKSgNSMsO9VLFtc4kUy47QS5W5DQ6Ih2") },
        { name: "Unit 3(Q/A)", ...driveLinks("1G9oxB4GlI605xsx_FO47WH2ZIUA2tn9p") },
        { name: "Unit 3(Counters)", ...driveLinks("1-44B7XG5zHpF2OqNDJPH8fbP2SRTJ77D") },
        { name: "Mid-I(2 Marks)", ...driveLinks("12yW6RVGNVSOYy1g08ZN8SI60JO0t5d_0") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(2 Marks)", ...driveLinks("10DH4eSoEPtULHhFo64lc19pRli7Wmpll") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1uaaDZTV2Qltl3dvrOWPDxO7Tj55wEaIx") },
        { name: "Unit 4(Material)", ...driveLinks("11iLaqn5k93y3j9DKkg6iwJUNrstcT5gZ") },
        { name: "Unit 4(Notes)", ...driveLinks("1qwl7DuKViPQVd5geV2g7IHddpkEGN8-Z") },
        { name: "Unit 4(Part-B)", ...driveLinks("1XCHEvXi7k5WQakUSBMFXSV2EieHKxXXE") },
        { name: "Unit 5(Notes)", ...driveLinks("1_to_zJGTfdnj10TiU7JjsX6qB7aa4qEA") }
      ]
    },
      "EDC": {
      "Mid-I Portion": [
        { name: "TextBook", ...driveLinks("1dPwTOzhcc2Wd75KZMA4YiUregSnGS-cw") },
       { name: "Mid-I(Question Bank)", ...driveLinks("17IVIYQ6GSDRZ1ipe7SN9qbBpyoBoxSFz") },
       { name: "Mid-I(2 Marks)", ...driveLinks("1AbbVU8iR4IlNuZItSLVpw4I6n5MJE8b-") },
        { name: "Unit 1(Material)", ...driveLinks("1gkUwVrECUPYED7satKdR9OGKCn9I7oYU") },
        { name: "Unit 1(Handwritten Notes)", ...driveLinks("1LO2_MmxrbrjFek7-92EXFwafhG-FTsm9") },
        { name: "Unit 1(Question Bank answers)", ...driveLinks("1a1JNVcgPPtdgHEGHtw7xi-HXZHTdn2UJ") },
        { name: "Unit 2(Material)", ...driveLinks("1GZJsmnSMMgUL_5sukTQVlm3r-4kc_jPa") },
        { name: "Unit 2(Handwritten Notes)", ...driveLinks("14x9skgbmOZanv0MGX4bSwINYn-PZdQy1") },
        { name: "Unit 3(Material)", ...driveLinks("1uaKjA4GahhnzmejV0h7rFalXYhGzoUKc") },
        { name: "Unit 3(Mid-I)", ...driveLinks("1IhzCnxhtUqWh_2SrYRZVTibz1w5aokXi") },
        { name: "Unit 3(Handwritten Notes 1)", ...driveLinks("1kPa8xjX1U2JP-hyzhLcYQv2mYm6Sn3Os") },
        { name: "Unit 3(Handwritten Notes 2)", ...driveLinks("1TGR79kungIZz-6mdc-X53_gIkqAT1-i0") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(Question Bank)", ...driveLinks("1QTLoU_plVgRSZwxcXtjdpyEn1jF9jkd9") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1mphd3cKtEFdmy6m7h2_uHziC0Iz-AwOx") },
        { name: "Unit 4(Notes)", ...driveLinks("1kmchw9eDWxDgZRmZJOBvgNdVNWj6vz9w") },
        { name: "Unit 5(Notes)", ...driveLinks("1WBZlIIQ9rDm_5xqEDEeQiXJsZCTk5cf6") }
      ]
    },
       "JAVA (oops)": {
      "Mid-I Portion": [
        { name: "MID-I(Question Bank)", ...driveLinks("113zw2NK6OqEeT3nNY-Kt8i6e_MqLVCLA") },
        { name: "Unit 1(Ans)", ...driveLinks("1vNP_jgA6jIxbBOxKIwRRCCHtqqomYwEo") },
        { name: "Unit 2(Ans)", ...driveLinks("1EIfnHUSYYRj2i_M_9hCvql9-Axo3M2Ft") },
        { name: "Unit 3(Ans)", ...driveLinks("1y9GvroVbwf06fZVr705G7eYdqfI9mb9F") },
        { name: "Unit 1(Material)", ...driveLinks("1ao2lASFp-Vt7thsQ2pd43Vhm1JZZcaTB") },
        { name: "Unit 2(Material)", ...driveLinks("1wZCFdhbZmXX15-TpyhFCL807nkwLTL7p") },
        { name: "Unit 3(Material)", ...driveLinks("1_Vq376ktgEQ_7w409g5CKZENcgvkiOB8") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1978hisyz4ytuxdBQujycADZAwDz1WoFD") },
        { name: "MID-II(2 Marks)", ...driveLinks("1qgXOWNeqS3oBdyrBDDMH-6EP5JiFgVj1") },
        { name: "MID-II(Longs)", ...driveLinks("1jB00sk5DdHwHTqLh5lXu8-dyVOg0EHYV") },
        { name: "MID-II(Question Bank Answers)", ...driveLinks("1RoLnQBDaLs1paw83osqJRsCPNfkrKnnR") },
        { name: "MID-II(Unit 3 Answers)", ...driveLinks("1LR0kegagv3dLTt9jwM9J3zFzWFtYbZW7") },
        { name: "MID-II(Unit 4 Answers)", ...driveLinks("1KNzjT9PrVhLB9lqv501loxslgb0Ii85A") },
        { name: "MID-II(Unit 5 Answers)", ...driveLinks("1uKw9-lpW6zHp0r7mrBB-tBYxeHBt8AX-") },
        { name: "Unit 4(Programs)", ...driveLinks("1BQsVQiNFs5MLGi0exzvktaSTy1xwHO_h") },
        { name: "Unit 4(Notes)", ...driveLinks("17Emy_zdoSBWJP8Gl38MCC9P6V6kvflax") },
        { name: "Unit 4(Material)", ...driveLinks("1Whi_yTe_GlREreZljCxGE8mU4T5u4QsL") },
        { name: "Unit 5(Material)", ...driveLinks("1bctIGcHHWnNchhUDp89QSUnaLlZoG1D0") }
         ]
        },
      "Environmental Science(ES)": {
      "Mid-I Portion": [
       { name: "Mid-I(Question Bank)", ...driveLinks("1nIWc20tpe6WSfytN3iHE1cX6MIU7jWRM") },
       { name: "Mid-I(2 Marks)", ...driveLinks("14b_hqC6FiSUF54QoFNnbLOi1fy3QIWVm") },
       { name: "Mid-I(All Q/A)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") },
        { name: "Unit 1(longs)", ...driveLinks("1R5lpsMCiItarSvMLNXroBIoUZvaZXiUy") },
        { name: "Unit 2(longs)", ...driveLinks("1EuqyHvNyo5MkdhUSCaDjt-ozMRy_gU80") },
        { name: "Unit 3 Mid-I(longs)", ...driveLinks("1MR2CzqjnVlq5LFw0q_wU5rel-SnJRqSn") }
      ],
      "Mid-II Portion": [
       { name: "Mid-II(Question Bank)", ...driveLinks("1kCOTwJ5Gp6lS0wjj7Iak0HIzHPP4GVUM") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1x7mmB4ksUGcLMDOqnMbu6SUX5z9HMmMh") }
      ]
    },
      "Full Stack Development-1": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "MEFA": {
      "Mid-I Portion": [
        { name: "Complete Notes", ...driveLinks("1mBkfV4hWOnVIb9f6f5VFcauqJLn97UkP") },
        { name: "1 to 6 Units Material", ...driveLinks("1ijZakkLUzEQoYTaF9_Oapmid1powsRYn") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1DBWn7b2hbtm5hziF3Q4pHpzL-yXVpz9w") },
        { name: "Mid-I(Shorts Material)", ...driveLinks("1pyRe1mIwmZUoZnymdVIW3QC_i33Eb2gO") },
        { name: "Unit 1(Material)", ...driveLinks("1Qp1al3AZiAYnF-o663H-7dpKnlqrqHY3") },
        { name: "Unit 1(Q/A)", ...driveLinks("1uwOSlrmIhbz_QXxwsmEvJJEr1S5KRuN7") },
        { name: "Unit 1&2(Material)", ...driveLinks("1CGWv96DeVeTco711OwJThiRwAy4YlAEx") },
        { name: "Unit 3(5 Marks)", ...driveLinks("18-srSvJDSaAIkGPRDcCead4FTSKwA7gO") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1lMrDWu42d4000CanaHwgOAB6bEm_w4VX") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(2 Marks)", ...driveLinks("1aEMRjNehOnHXxDv4LxVx01Tu1Ntl1Pxc") },
        { name: "Unit 4(5 Marks)", ...driveLinks("1Uf6RtmV-obTbl7GARHTp9sZTTZg3rgdh") },
        { name: "Unit 4(Notes)", ...driveLinks("1IMX4pplgIAHw9NulfxHK6s1oVNmj3VIS") },
        { name: "Unit 4(Sums)", ...driveLinks("1THmnHHB1F7tBMGhw6YQ4vYsmCIJuqiyc") },
        { name: "Unit 5(5 Marks)", ...driveLinks("172zRhddRfP8PM_9lQjm3FGcrol0cPaTT") },
        { name: "Unit 5(Handwritten Notes 1)", ...driveLinks("11GA-3BZOsguJdvcufgoIVli0yigE-IVJ") }
      ]
    },
      "(SS)Signals&Systems": {
      "Mid-I Portion": [
        { name: "Complete Notes", ...driveLinks("1Rp3IxxFfTYteFbq_A4iH31d2d8qNwaxM") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1aGyoXO0hQbI1GfRIrp27VKOOaAS5YmYp") },
        { name: "Unit 1(Notes)", ...driveLinks("1pwoEItg-o3T7RkuvqEHjfJd-obV5Dp42") },
        { name: "Unit 1(Shorts & longs)", ...driveLinks("1B9afGLP9wk6t3xvFyPdOCVhw73qxvZRR") },
        { name: "Unit 1(part B)", ...driveLinks("1q-fHMFxmBXk8PldTcMB4KSicNyKGEvtV") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bJPaMQrPQjfVKT-xr6CXpQLe1nemGzz_") },
        { name: "Unit 2(Part B)", ...driveLinks("1wkoK0pfHwPKcyASZ-3qVlUaFsGe6Az20") },
        { name: "Unit 2(Notes)", ...driveLinks("1CRV1egHhS5Z808zerQJSBPFFEevHcv7B") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(Question Bank)", ...driveLinks("19-VWt6u4_nvDWG2QBaHpiuC_eRG-_rUU") },
        { name: "Model Paper", ...driveLinks("1A4VWc4yS0v4HU9srQhxZUgi7mHkvv7A7") }
      ]
    },
      "ACD": {
      "Mid-I Portion": [
        { name: "Syllabus", ...driveLinks("1XyEHj27sg_pEe1PSWLRPj1pNInJKHhrs") },
      { name: "Mid-I(Question Bank)", ...driveLinks("1Oi_T5XN4YT-At1XFFgeN0kYtE7vxpgDG") },
      { name: "Mid-I(Shorts)", ...driveLinks("1NVy_UUlzg8bL5vmTdwDSAz4nM9DDRmn1") },
       { name: "Unit 1(Notes)", ...driveLinks("1KQaCKm-PIvvCF6eO2ZmCYPLIX7cHuco3") },
       { name: "Unit 1(longs)", ...driveLinks("11t515WPL9dYWknmT4mUr8C1W3hXCGJu4") },
       { name: "Unit 2(Notes)", ...driveLinks("1AWLdDc8PBfu45_TDA8yU924j8ALQ20Ih") },
       { name: "Unit 2(longs)", ...driveLinks("11WndSb2R32d7aOg0jI143ayKJybw52ixG") },
       { name: "Unit 3 Mid-I(Notes)", ...driveLinks("1LRIa_VDA8foB90kuqZPqYghwzWoEE_ym") }
      ],
      "Mid-II Portion": [
       { name: "Mid-II(Question Bank)", ...driveLinks("1YNkfIzv9xpFsIDScG1cHz1ypSUb2ZVka") },
       { name: "Unit 3 Mid-II(Notes)", ...driveLinks("1dgnC8uXJvavEwF5usKeYO0m5L3nUa9UI") },
       { name: "Unit 4(longs)", ...driveLinks("1fHFTbpyJMpvN75M7EUjzv5EXO7p2RNhF") },
        { name: "Mid-II(Shorts)", ...driveLinks("10-Jnp2hmGDoeNam2HliZgvktuUtlY_1J") }
      ]
    },
      "DBMS": {
      "Mid-I Portion": [
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("13720qT75I9MVmM_QKSpPfcSVZXRjAhjX") },
        { name: "Unit 3(Material)", ...driveLinks("19ZzYo9C84Hopbh0wSZkZJRbUh6HbKBUb") },
        { name: "Unit 4(Material)", ...driveLinks("17AOAv6DEHnu3qZL0G10pn249IEbAx7aG") },
        { name: "Unit 5(Material)", ...driveLinks("1PitBPnk0Nwc4YPS1guYjuWvp6I47zEbb") }
      ]
    },
       "ADC": {
      "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1AoX3gjn-z3TXQ-n-jk1NW0x6sJxNbk12") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1KS3ThLFs_Tn16pX9S0bkpfbARyjAFQ7n") },
        { name: "Unit 2(Notes)", ...driveLinks("1lbcLqGlNzPxFAuYXzCWcWXGRbYZvH3sM") },
        { name: "Unit 3(Material)", ...driveLinks("14GQQzUonAvm1IXKT23xkwtc2xHTjpi9p") }
      ],
      "Mid-II Portion": [
        { name: "Unit 4(ppt version)", ...driveLinks("1PVkM4Epz_M6nlMJZmMc75bjjFux8ys3p") },
        { name: "Unit 4(Handwritten Notes)", ...driveLinks("198NbuPqSaqHMtWmo8P3AsADPa7ubUhX_") },
        { name: "Unit 5(Material)", ...driveLinks("1AUveIfIxsn_qci7EGKIEKpIGVO_8APMZ") },
        { name: "Unit 5(ppt version)", ...driveLinks("1SQvTiGWIermPzG0j0I352f7gjfsr2ZrL") },
        { name: "Comparisons", ...driveLinks("1bBXq9BROfqelO_zsPq5H3CaSuU-z9eVS") }
      ]
    },
      "Python Programming": {
      "Mid-I Portion": [
        { name: "Unit 1", ...driveLinks("1Kb4SIA-m1eivnMhrnInDIAyhUwirUAXZ") },
        { name: "Unit 2", ...driveLinks("1JlV1tZ0lDcCAuBo3kMr_aW2eiyCrTbWQ") },
        { name: "Unit 3", ...driveLinks("1XVrgLsKJnv8HxM6-NeNKN-CEO9Osohvn") }
      ],
      "Mid-II Portion": [
        { name: "Unit 4&5", ...driveLinks("1tzq1fiQTzEumA3y_Xy_yL4qujEvhJkUs") }
      ]
    },
  },


    "EEE": {
      "CVNM": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
     "UHV": {
        "Mid-I Portion": [
        { name: "Question Bank", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "Mid-I(Q/A)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Mid-I(Shorts)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") },
        { name: "Mid-I(longs)", ...driveLinks("125782qemrCIrZynlOS-mYjiUtvEuXT-Y") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1pwJtMkq1KVwEGbI0gqdr2VOBNlysQI2q") },
        { name: "MID-II(Answers)", ...driveLinks("1KkXOn2i5-M9FAa0BW-1C0vT9wmF_cnYw") },
        { name: "Mid-II(Shorts)", ...driveLinks("14OZARQ6AFcE1PT9gs8nQMYh2A-Bmq_L5") },
        { name: "Mid-II Unit 3(longs)", ...driveLinks("12b95fSbBdwxlRzNmQwvUsfzqBFPrvf4p") },
        { name: "Mid-II Unit 4(longs)", ...driveLinks("1y1dBpPd-9Kx0zZBwqw8oWH4YbFyOQdJH") },
        { name: "Mid-II Unit 5(longs)", ...driveLinks("1t6ZJhzD-aCn3_YuR_3K_QTBsn-M09GkW") }
      ],
      },
      "EMF": [
        { name: "MID-I(2 Marks)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "ECA-II": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "DC Machines & Transformers": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Environmental Science(ES)": {
      "Mid-I Portion": [
       { name: "Mid-I(Question Bank)", ...driveLinks("1nIWc20tpe6WSfytN3iHE1cX6MIU7jWRM") },
       { name: "Mid-I(2 Marks)", ...driveLinks("14b_hqC6FiSUF54QoFNnbLOi1fy3QIWVm") },
       { name: "Mid-I(All Q/A)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") },
        { name: "Unit 1(longs)", ...driveLinks("1R5lpsMCiItarSvMLNXroBIoUZvaZXiUy") },
        { name: "Unit 2(longs)", ...driveLinks("1EuqyHvNyo5MkdhUSCaDjt-ozMRy_gU80") },
        { name: "Unit 3 Mid-I(longs)", ...driveLinks("1MR2CzqjnVlq5LFw0q_wU5rel-SnJRqSn") }
      ],
      "Mid-II Portion": [
       { name: "Mid-II(Question Bank)", ...driveLinks("1kCOTwJ5Gp6lS0wjj7Iak0HIzHPP4GVUM") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1x7mmB4ksUGcLMDOqnMbu6SUX5z9HMmMh") }
      ]
    },
      "Analog Circuits": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "MEFA": {
      "Mid-I Portion": [
        { name: "Complete Notes", ...driveLinks("1mBkfV4hWOnVIb9f6f5VFcauqJLn97UkP") },
        { name: "1 to 6 Units Material", ...driveLinks("1ijZakkLUzEQoYTaF9_Oapmid1powsRYn") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1DBWn7b2hbtm5hziF3Q4pHpzL-yXVpz9w") },
        { name: "Mid-I(Shorts Material)", ...driveLinks("1pyRe1mIwmZUoZnymdVIW3QC_i33Eb2gO") },
        { name: "Unit 1(Material)", ...driveLinks("1Qp1al3AZiAYnF-o663H-7dpKnlqrqHY3") },
        { name: "Unit 1(Q/A)", ...driveLinks("1uwOSlrmIhbz_QXxwsmEvJJEr1S5KRuN7") },
        { name: "Unit 1&2(Material)", ...driveLinks("1CGWv96DeVeTco711OwJThiRwAy4YlAEx") },
        { name: "Unit 3(5 Marks)", ...driveLinks("18-srSvJDSaAIkGPRDcCead4FTSKwA7gO") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1lMrDWu42d4000CanaHwgOAB6bEm_w4VX") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(2 Marks)", ...driveLinks("1aEMRjNehOnHXxDv4LxVx01Tu1Ntl1Pxc") },
        { name: "Unit 4(5 Marks)", ...driveLinks("1Uf6RtmV-obTbl7GARHTp9sZTTZg3rgdh") },
        { name: "Unit 4(Notes)", ...driveLinks("1IMX4pplgIAHw9NulfxHK6s1oVNmj3VIS") },
        { name: "Unit 4(Sums)", ...driveLinks("1THmnHHB1F7tBMGhw6YQ4vYsmCIJuqiyc") },
        { name: "Unit 5(5 Marks)", ...driveLinks("172zRhddRfP8PM_9lQjm3FGcrol0cPaTT") },
        { name: "Unit 5(Handwritten Notes 1)", ...driveLinks("11GA-3BZOsguJdvcufgoIVli0yigE-IVJ") }
      ]
    },
      "Power Systems-I": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "ISM": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Control Systems": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Python Programming": {
      "Mid-I Portion": [
        { name: "Unit 1", ...driveLinks("1Kb4SIA-m1eivnMhrnInDIAyhUwirUAXZ") },
        { name: "Unit 2", ...driveLinks("1JlV1tZ0lDcCAuBo3kMr_aW2eiyCrTbWQ") },
        { name: "Unit 3", ...driveLinks("1XVrgLsKJnv8HxM6-NeNKN-CEO9Osohvn") }
      ],
      "Mid-II Portion": [
        { name: "Unit 4&5", ...driveLinks("1tzq1fiQTzEumA3y_Xy_yL4qujEvhJkUs") }
      ]
    },
  },


    "ECE": {
      "RVSP": {
      "Mid-I Portion": [
        { name: "Complete Notes", ...driveLinks("1oz63sjFjyomuVgvCTC1Y28i393JZILFs") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1SCq4wmPntV4HxgR_7h1w0dtqtYWn2eNC") },
        { name: "Unit 1(shorts)", ...driveLinks("1cdKfW4pdXGw4g1cxN5EhLS-4hrNV1gn6") },
        { name: "Unit 3(Notes)", ...driveLinks("1tXbYI6Ks1XWLFj3kFQSmTpjBuHA9OTAL") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(Question Bank)", ...driveLinks("1XSeXmTKJeq7fyQK3pf9nUcIHtgTNWFpF") },
        { name: "Unit 4&5(2 Marks)", ...driveLinks("1Ei_MWhT7K-TVbeSngHh_YvUBrtkCBN4s") },
        { name: "Unit 4(Notes)", ...driveLinks("1cdKfW4pdXGw4g1cxN5EhLS-4hrNV1gn6") },
        { name: "Unit 5(longs)", ...driveLinks("1aleJiBjcYrp7nUyY_pZWIrhmobAToUow") },
        { name: "Previous Year Papers", ...driveLinks("1cdKfW4pdXGw4g1cxN5EhLS-4hrNV1gn6") }
        
      ]
    },
     "UHV": {
        "Mid-I Portion": [
        { name: "Question Bank", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "Mid-I(Q/A)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Mid-I(Shorts)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") },
        { name: "Mid-I(longs)", ...driveLinks("125782qemrCIrZynlOS-mYjiUtvEuXT-Y") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1pwJtMkq1KVwEGbI0gqdr2VOBNlysQI2q") },
        { name: "MID-II(Answers)", ...driveLinks("1KkXOn2i5-M9FAa0BW-1C0vT9wmF_cnYw") },
        { name: "Mid-II(Shorts)", ...driveLinks("14OZARQ6AFcE1PT9gs8nQMYh2A-Bmq_L5") },
        { name: "Mid-II Unit 3(longs)", ...driveLinks("12b95fSbBdwxlRzNmQwvUsfzqBFPrvf4p") },
        { name: "Mid-II Unit 4(longs)", ...driveLinks("1y1dBpPd-9Kx0zZBwqw8oWH4YbFyOQdJH") },
        { name: "Mid-II Unit 5(longs)", ...driveLinks("1t6ZJhzD-aCn3_YuR_3K_QTBsn-M09GkW") }
      ]
      },
      "DCD": {
      "Mid-I Portion": [
        { name: "Unit 1(Complete Notes)", ...driveLinks("1xsUnP7nMAtC9LkmoZ4sAUP3XIOcqb6JP") },
        { name: "Syllabus", ...driveLinks("1ACELXKzgMWQTN4UxLo6qtMtQn3rL-CYU") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1H8NtnapCYIyYrT70NrT625tFVWUH4XJF") },
        { name: "Unit 1(Notes)", ...driveLinks("1xsUnP7nMAtC9LkmoZ4sAUP3XIOcqb6JP") },
        { name: "Unit 1(ppt version)", ...driveLinks("1Wup1tCKEq-DVzB9l47GfI6_eUbjj_kbg") },
        { name: "Unit 2(ppt version)", ...driveLinks("1uK-RfbB7e5YZxr7d5gsPaHi1BfpCP8o6") },
        { name: "Unit 2(Notes)", ...driveLinks("1ThzFvNK6jBNy4X8KjLqPdOGBUOws1fin") },
        { name: "Unit 3(ppt version)", ...driveLinks("1iKSgNSMsO9VLFtc4kUy47QS5W5DQ6Ih2") },
        { name: "Unit 3(Q/A)", ...driveLinks("1G9oxB4GlI605xsx_FO47WH2ZIUA2tn9p") },
        { name: "Unit 3(Counters)", ...driveLinks("1-44B7XG5zHpF2OqNDJPH8fbP2SRTJ77D") },
        { name: "Mid-I(2 Marks)", ...driveLinks("12yW6RVGNVSOYy1g08ZN8SI60JO0t5d_0") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(2 Marks)", ...driveLinks("10DH4eSoEPtULHhFo64lc19pRli7Wmpll") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1uaaDZTV2Qltl3dvrOWPDxO7Tj55wEaIx") },
        { name: "Unit 4(Material)", ...driveLinks("11iLaqn5k93y3j9DKkg6iwJUNrstcT5gZ") },
        { name: "Unit 4(Notes)", ...driveLinks("1qwl7DuKViPQVd5geV2g7IHddpkEGN8-Z") },
        { name: "Unit 4(Part-B)", ...driveLinks("1XCHEvXi7k5WQakUSBMFXSV2EieHKxXXE") },
        { name: "Unit 5(Notes)", ...driveLinks("1_to_zJGTfdnj10TiU7JjsX6qB7aa4qEA") }
      ]
    },
      "EDC": {
      "Mid-I Portion": [
        { name: "TextBook", ...driveLinks("1dPwTOzhcc2Wd75KZMA4YiUregSnGS-cw") },
       { name: "Mid-I(Question Bank)", ...driveLinks("17IVIYQ6GSDRZ1ipe7SN9qbBpyoBoxSFz") },
       { name: "Mid-I(2 Marks)", ...driveLinks("1AbbVU8iR4IlNuZItSLVpw4I6n5MJE8b-") },
        { name: "Unit 1(Material)", ...driveLinks("1gkUwVrECUPYED7satKdR9OGKCn9I7oYU") },
        { name: "Unit 1(Handwritten Notes)", ...driveLinks("1LO2_MmxrbrjFek7-92EXFwafhG-FTsm9") },
        { name: "Unit 1(Question Bank answers)", ...driveLinks("1a1JNVcgPPtdgHEGHtw7xi-HXZHTdn2UJ") },
        { name: "Unit 2(Material)", ...driveLinks("1GZJsmnSMMgUL_5sukTQVlm3r-4kc_jPa") },
        { name: "Unit 2(Handwritten Notes)", ...driveLinks("14x9skgbmOZanv0MGX4bSwINYn-PZdQy1") },
        { name: "Unit 3(Material)", ...driveLinks("1uaKjA4GahhnzmejV0h7rFalXYhGzoUKc") },
        { name: "Unit 3(Mid-I)", ...driveLinks("1IhzCnxhtUqWh_2SrYRZVTibz1w5aokXi") },
        { name: "Unit 3(Handwritten Notes 1)", ...driveLinks("1kPa8xjX1U2JP-hyzhLcYQv2mYm6Sn3Os") },
        { name: "Unit 3(Handwritten Notes 2)", ...driveLinks("1TGR79kungIZz-6mdc-X53_gIkqAT1-i0") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(Question Bank)", ...driveLinks("1QTLoU_plVgRSZwxcXtjdpyEn1jF9jkd9") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1mphd3cKtEFdmy6m7h2_uHziC0Iz-AwOx") },
        { name: "Unit 4(Notes)", ...driveLinks("1kmchw9eDWxDgZRmZJOBvgNdVNWj6vz9w") },
        { name: "Unit 5(Notes)", ...driveLinks("1WBZlIIQ9rDm_5xqEDEeQiXJsZCTk5cf6") }
      ]
    },
      "LCS": {
      "Mid-I Portion": [
        { name: "Unit 1(Notes)", ...driveLinks("1FOV2bGI0IAywn4N45mZ0RXeEjTnpLQni") },
        { name: "Unit 2(Notes)", ...driveLinks("1VPu5JS3z_EPyKNoVoVu4VJlZP2PwBars") },
        { name: "Unit 3(Notes)", ...driveLinks("1XZSwJkAH2S-LRlCxYlY8E0T487n_TMxs") },
        { name: "Unit 4(Notes)", ...driveLinks("1QJt087J0CzVtS-Rcknlj7bTxOA-9mPiQ") },
        { name: "Unit 5(Notes)", ...driveLinks("1_hkpJzgKJi9klshOvfeAf4FhoJ0Jjvd2") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1bumxquaojAXsKtLx82AL3aq3N2YKCIj3") },
        { name: "Unit 1(Q/A)", ...driveLinks("1LB8lwyYbNpEtIVfvswPvHchxyEMwNeEy") },
        { name: "Unit 1(Part B)", ...driveLinks("1H_mfx_--muA_QOOCKbvjGpbQd4t_GhXo") },
        { name: "Unit 2(shorts)", ...driveLinks("1BgP3pGJ5PXzt2l2RxTbGLbaOB3_Kci96") },
        { name: "Unit 2(longs)", ...driveLinks("1Qec9zVyQOFFTtHtKSjy8TcrVBKk-Fz6b") },
        { name: "Root locus sums", ...driveLinks("12XP0VYb9lK4vysDm2WA0r0h6xxhVSmFN") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(Question Bank)", ...driveLinks("1K-b5Vs6QVlKWBOgxKBd9lIuobcZyeP4B") },
        { name: "Unit 3&4(2 Marks)", ...driveLinks("1uc3S55NVHCHLnFuZaAPkrWX_H9bdWsSc") },
        { name: "Unit 3(Part 2)", ...driveLinks("1ZdE4AID1AXsNqnlzkuwkp2nipxucvS76") },
        { name: "Unit 3(Shorts)", ...driveLinks("1kl1AMrZ3zML_OkMIWHGXZCRQbwDMMZZO") },
        { name: "Unit 3(longs)", ...driveLinks("1GskWKcAzipBuEWwrCDhCXLlXSgj9VyUv") },
        { name: "Unit 4(Sums)", ...driveLinks("1MDgd-_jJNJs66w0j3WnlBsWLsGPT-OwH") },
        { name: "Unit 5(Sums)", ...driveLinks("1VOpLO9jlCELLBG3N753gf9XftFkfhyyF") },
        { name: "Previous year paper", ...driveLinks("1X4vENa3vMejfHy-d-JN1ZI6uwhAnDVmC") }
      ]
    },
      "Environmental Science(ES)": {
      "Mid-I Portion": [
       { name: "Mid-I(Question Bank)", ...driveLinks("1nIWc20tpe6WSfytN3iHE1cX6MIU7jWRM") },
       { name: "Mid-I(2 Marks)", ...driveLinks("14b_hqC6FiSUF54QoFNnbLOi1fy3QIWVm") },
       { name: "Mid-I(All Q/A)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") },
        { name: "Unit 1(longs)", ...driveLinks("1R5lpsMCiItarSvMLNXroBIoUZvaZXiUy") },
        { name: "Unit 2(longs)", ...driveLinks("1EuqyHvNyo5MkdhUSCaDjt-ozMRy_gU80") },
        { name: "Unit 3 Mid-I(longs)", ...driveLinks("1MR2CzqjnVlq5LFw0q_wU5rel-SnJRqSn") }
      ],
      "Mid-II Portion": [
       { name: "Mid-II(Question Bank)", ...driveLinks("1kCOTwJ5Gp6lS0wjj7Iak0HIzHPP4GVUM") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1x7mmB4ksUGcLMDOqnMbu6SUX5z9HMmMh") }
      ]
    },
      "EMWTL": {
      "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1xNxLm-EBDt9_nq0koM_SGhUubo85xxnT") },
       { name: "Unit 1(Q/A)", ...driveLinks("1kPhvlXvG2k4vu7t6S6QUsN1RFO48efZa") },
       { name: "Unit 2(Q/A)", ...driveLinks("15t1VLOAlJfUVGDNYvwWiydf-9CAa1Jnt") },
       { name: "Unit 3(Q/A)", ...driveLinks("160Hh6hIBXuSdsTlUSWWN7obuibTLkR-L") },
       { name: "Unit 1&2(Shorts)", ...driveLinks("1SjkekTi-OJVIRW-rcmlzw8Sja7vNQpuy") },
        { name: "Unit 1(longs)", ...driveLinks("1INxpx-Z1oPMoyB6H-XBTMNnUh26qSUas") },
        { name: "Unit 2(longs)", ...driveLinks("1kw7wJ3QYUbH_-cUDNnz3Jgeo-QPIuPRT") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(Question Bank)", ...driveLinks("1YNkfIzv9xpFsIDScG1cHz1ypSUb2ZVka") },
        { name: "Mid-II(Shorts Material)", ...driveLinks("1BGuLxirQgbzzksHPzMKzmZ19CjnBy-qZ") },
        { name: "Mid-II(Shorts Notes)", ...driveLinks("1dgkKx2-RVDdprJCP-a3fvdsuhEM_Z3rN") },
        { name: "Unit 3 Mid-II(longs)", ...driveLinks("1swGi2ukR58kSwm6svw_WLix5LhLkBCYp") },
        { name: "Unit 4(longs)", ...driveLinks("1r78q5MzbVJjHxb4aZr1RQPkagVzgIwaO") },
        { name: "Unit 5(longs)", ...driveLinks("1wC8JC-_YYXaDPxG-vz8nDCHTqsqHNB9o") }
      ]
    },
      "MEFA": {
      "Mid-I Portion": [
        { name: "Complete Notes", ...driveLinks("1mBkfV4hWOnVIb9f6f5VFcauqJLn97UkP") },
        { name: "1 to 6 Units Material", ...driveLinks("1ijZakkLUzEQoYTaF9_Oapmid1powsRYn") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1DBWn7b2hbtm5hziF3Q4pHpzL-yXVpz9w") },
        { name: "Mid-I(Shorts Material)", ...driveLinks("1pyRe1mIwmZUoZnymdVIW3QC_i33Eb2gO") },
        { name: "Unit 1(Material)", ...driveLinks("1Qp1al3AZiAYnF-o663H-7dpKnlqrqHY3") },
        { name: "Unit 1(Q/A)", ...driveLinks("1uwOSlrmIhbz_QXxwsmEvJJEr1S5KRuN7") },
        { name: "Unit 1&2(Material)", ...driveLinks("1CGWv96DeVeTco711OwJThiRwAy4YlAEx") },
        { name: "Unit 3(5 Marks)", ...driveLinks("18-srSvJDSaAIkGPRDcCead4FTSKwA7gO") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1lMrDWu42d4000CanaHwgOAB6bEm_w4VX") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(2 Marks)", ...driveLinks("1aEMRjNehOnHXxDv4LxVx01Tu1Ntl1Pxc") },
        { name: "Unit 4(5 Marks)", ...driveLinks("1Uf6RtmV-obTbl7GARHTp9sZTTZg3rgdh") },
        { name: "Unit 4(Notes)", ...driveLinks("1IMX4pplgIAHw9NulfxHK6s1oVNmj3VIS") },
        { name: "Unit 4(Sums)", ...driveLinks("1THmnHHB1F7tBMGhw6YQ4vYsmCIJuqiyc") },
        { name: "Unit 5(5 Marks)", ...driveLinks("172zRhddRfP8PM_9lQjm3FGcrol0cPaTT") },
        { name: "Unit 5(Handwritten Notes 1)", ...driveLinks("11GA-3BZOsguJdvcufgoIVli0yigE-IVJ") }
      ]
    },
      "(SS)Signals&Systems": {
      "Mid-I Portion": [
        { name: "Complete Notes", ...driveLinks("1Rp3IxxFfTYteFbq_A4iH31d2d8qNwaxM") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1aGyoXO0hQbI1GfRIrp27VKOOaAS5YmYp") },
        { name: "Unit 1(Notes)", ...driveLinks("1pwoEItg-o3T7RkuvqEHjfJd-obV5Dp42") },
        { name: "Unit 1(Shorts & longs)", ...driveLinks("1B9afGLP9wk6t3xvFyPdOCVhw73qxvZRR") },
        { name: "Unit 1(part B)", ...driveLinks("1q-fHMFxmBXk8PldTcMB4KSicNyKGEvtV") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1bJPaMQrPQjfVKT-xr6CXpQLe1nemGzz_") },
        { name: "Unit 2(Part B)", ...driveLinks("1wkoK0pfHwPKcyASZ-3qVlUaFsGe6Az20") },
        { name: "Unit 2(Notes)", ...driveLinks("1CRV1egHhS5Z808zerQJSBPFFEevHcv7B") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(Question Bank)", ...driveLinks("19-VWt6u4_nvDWG2QBaHpiuC_eRG-_rUU") },
        { name: "Model Paper", ...driveLinks("1A4VWc4yS0v4HU9srQhxZUgi7mHkvv7A7") }
      ]
    },
      "ACD": {
      "Mid-I Portion": [
        { name: "Syllabus", ...driveLinks("1XyEHj27sg_pEe1PSWLRPj1pNInJKHhrs") },
      { name: "Mid-I(Question Bank)", ...driveLinks("1Oi_T5XN4YT-At1XFFgeN0kYtE7vxpgDG") },
      { name: "Mid-I(Shorts)", ...driveLinks("1NVy_UUlzg8bL5vmTdwDSAz4nM9DDRmn1") },
       { name: "Unit 1(Notes)", ...driveLinks("1KQaCKm-PIvvCF6eO2ZmCYPLIX7cHuco3") },
       { name: "Unit 1(longs)", ...driveLinks("11t515WPL9dYWknmT4mUr8C1W3hXCGJu4") },
       { name: "Unit 2(Notes)", ...driveLinks("1AWLdDc8PBfu45_TDA8yU924j8ALQ20Ih") },
       { name: "Unit 2(longs)", ...driveLinks("11WndSb2R32d7aOg0jI143ayKJybw52ixG") },
       { name: "Unit 3 Mid-I(Notes)", ...driveLinks("1LRIa_VDA8foB90kuqZPqYghwzWoEE_ym") }
      ],
      "Mid-II Portion": [
       { name: "Mid-II(Question Bank)", ...driveLinks("1YNkfIzv9xpFsIDScG1cHz1ypSUb2ZVka") },
       { name: "Unit 3 Mid-II(Notes)", ...driveLinks("1dgnC8uXJvavEwF5usKeYO0m5L3nUa9UI") },
       { name: "Unit 4(longs)", ...driveLinks("1fHFTbpyJMpvN75M7EUjzv5EXO7p2RNhF") },
        { name: "Mid-II(Shorts)", ...driveLinks("10-Jnp2hmGDoeNam2HliZgvktuUtlY_1J") }
      ]
    },
      "ADC": {
      "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1AoX3gjn-z3TXQ-n-jk1NW0x6sJxNbk12") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1KS3ThLFs_Tn16pX9S0bkpfbARyjAFQ7n") },
        { name: "Unit 2(Notes)", ...driveLinks("1lbcLqGlNzPxFAuYXzCWcWXGRbYZvH3sM") },
        { name: "Unit 3(Material)", ...driveLinks("14GQQzUonAvm1IXKT23xkwtc2xHTjpi9p") }
      ],
      "Mid-II Portion": [
        { name: "Unit 4(ppt version)", ...driveLinks("1PVkM4Epz_M6nlMJZmMc75bjjFux8ys3p") },
        { name: "Unit 4(Handwritten Notes)", ...driveLinks("198NbuPqSaqHMtWmo8P3AsADPa7ubUhX_") },
        { name: "Unit 5(Material)", ...driveLinks("1AUveIfIxsn_qci7EGKIEKpIGVO_8APMZ") },
        { name: "Unit 5(ppt version)", ...driveLinks("1SQvTiGWIermPzG0j0I352f7gjfsr2ZrL") },
        { name: "Comparisons", ...driveLinks("1bBXq9BROfqelO_zsPq5H3CaSuU-z9eVS") }
      ]
    },
      "Python Programming": {
      "Mid-I Portion": [
        { name: "Unit 1", ...driveLinks("1Kb4SIA-m1eivnMhrnInDIAyhUwirUAXZ") },
        { name: "Unit 2", ...driveLinks("1JlV1tZ0lDcCAuBo3kMr_aW2eiyCrTbWQ") },
        { name: "Unit 3", ...driveLinks("1XVrgLsKJnv8HxM6-NeNKN-CEO9Osohvn") }
      ],
      "Mid-II Portion": [
        { name: "Unit 4&5", ...driveLinks("1tzq1fiQTzEumA3y_Xy_yL4qujEvhJkUs") }
      ]
    },
  },


    "IT": {
      "PS": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("1FIbd6svq98S6-YacxDod9hDor7heGThl") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
     "UHV": {
        "Mid-I Portion": [
        { name: "Question Bank", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "Mid-I(Q/A)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Mid-I(Shorts)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") },
        { name: "Mid-I(longs)", ...driveLinks("125782qemrCIrZynlOS-mYjiUtvEuXT-Y") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1pwJtMkq1KVwEGbI0gqdr2VOBNlysQI2q") },
        { name: "MID-II(Answers)", ...driveLinks("1KkXOn2i5-M9FAa0BW-1C0vT9wmF_cnYw") },
        { name: "Mid-II(Shorts)", ...driveLinks("14OZARQ6AFcE1PT9gs8nQMYh2A-Bmq_L5") },
        { name: "Mid-II Unit 3(longs)", ...driveLinks("12b95fSbBdwxlRzNmQwvUsfzqBFPrvf4p") },
        { name: "Mid-II Unit 4(longs)", ...driveLinks("1y1dBpPd-9Kx0zZBwqw8oWH4YbFyOQdJH") },
        { name: "Mid-II Unit 5(longs)", ...driveLinks("1t6ZJhzD-aCn3_YuR_3K_QTBsn-M09GkW") }
      ],
      },
      "MEFA": {
      "Mid-I Portion": [
        { name: "Complete Notes", ...driveLinks("1mBkfV4hWOnVIb9f6f5VFcauqJLn97UkP") },
        { name: "1 to 6 Units Material", ...driveLinks("1ijZakkLUzEQoYTaF9_Oapmid1powsRYn") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1DBWn7b2hbtm5hziF3Q4pHpzL-yXVpz9w") },
        { name: "Mid-I(Shorts Material)", ...driveLinks("1pyRe1mIwmZUoZnymdVIW3QC_i33Eb2gO") },
        { name: "Unit 1(Material)", ...driveLinks("1Qp1al3AZiAYnF-o663H-7dpKnlqrqHY3") },
        { name: "Unit 1(Q/A)", ...driveLinks("1uwOSlrmIhbz_QXxwsmEvJJEr1S5KRuN7") },
        { name: "Unit 1&2(Material)", ...driveLinks("1CGWv96DeVeTco711OwJThiRwAy4YlAEx") },
        { name: "Unit 3(5 Marks)", ...driveLinks("18-srSvJDSaAIkGPRDcCead4FTSKwA7gO") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1lMrDWu42d4000CanaHwgOAB6bEm_w4VX") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(2 Marks)", ...driveLinks("1aEMRjNehOnHXxDv4LxVx01Tu1Ntl1Pxc") },
        { name: "Unit 4(5 Marks)", ...driveLinks("1Uf6RtmV-obTbl7GARHTp9sZTTZg3rgdh") },
        { name: "Unit 4(Notes)", ...driveLinks("1IMX4pplgIAHw9NulfxHK6s1oVNmj3VIS") },
        { name: "Unit 4(Sums)", ...driveLinks("1THmnHHB1F7tBMGhw6YQ4vYsmCIJuqiyc") },
        { name: "Unit 5(5 Marks)", ...driveLinks("172zRhddRfP8PM_9lQjm3FGcrol0cPaTT") },
        { name: "Unit 5(Handwritten Notes 1)", ...driveLinks("11GA-3BZOsguJdvcufgoIVli0yigE-IVJ") }
      ]
    },
      "MFCS": {
        "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1c6NXyTrT36Rr3u5IHoHNGlS49Dif9OkV") },
        { name: "Unit 1(2 Marks)", ...driveLinks("1SleI-teABEbbmDZub_LiIBcjtVw9c7Q_") },
        { name: "Unit 2(2 Marks)", ...driveLinks("187jZJ7vDBNuUdfSqRoegPFPniJ2zwYDB") },
        { name: "Unit 3(mid-1 2 marks)", ...driveLinks("1QNO1GDESc8yzS4N_ELTOMQy4mCI0Dm5o") },
        { name: "Unit 1(longs)", ...driveLinks("15lqYd1YywHS5B-jj9aj7-FS46DE5YCFs") },
        { name: "Unit 2(longs)", ...driveLinks("1tJPrEHSkAkWXeg2ynlaCJHq4ueqBEO5B") },
        ],
        "Mid-II Portion": [ 
        { name: "Unit 4(Notes Model 1)", ...driveLinks("1R2-CL6vhY5vP43mf37GVU37iIfeCPjHZ") },
        { name: "Unit 4(Notes Model 2)", ...driveLinks("1xMo0f4yHChWf8cegm_xA8PzGLelV-Al_") },
        { name: "Unit 3(mid-1 longs)", ...driveLinks("1A6cqdJMpjfQP-95nAyWUCYS37CLflYcQ") }
      ]
      },
       "JAVA (oops)": {
      "Mid-I Portion": [
        { name: "MID-I(Question Bank)", ...driveLinks("113zw2NK6OqEeT3nNY-Kt8i6e_MqLVCLA") },
        { name: "Unit 1(Ans)", ...driveLinks("1vNP_jgA6jIxbBOxKIwRRCCHtqqomYwEo") },
        { name: "Unit 2(Ans)", ...driveLinks("1EIfnHUSYYRj2i_M_9hCvql9-Axo3M2Ft") },
        { name: "Unit 3(An,s)", ...driveLinks("1y9GvroVbwf06fZVr705G7eYdqfI9mb9F") },
        { name: "Unit 1(Material)", ...driveLinks("1ao2lASFp-Vt7thsQ2pd43Vhm1JZZcaTB") },
        { name: "Unit 2(Material)", ...driveLinks("1wZCFdhbZmXX15-TpyhFCL807nkwLTL7p") },
        { name: "Unit 3(Material)", ...driveLinks("1_Vq376ktgEQ_7w409g5CKZENcgvkiOB8") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1978hisyz4ytuxdBQujycADZAwDz1WoFD") },
        { name: "MID-II(2 Marks)", ...driveLinks("1qgXOWNeqS3oBdyrBDDMH-6EP5JiFgVj1") },
        { name: "MID-II(Longs)", ...driveLinks("1jB00sk5DdHwHTqLh5lXu8-dyVOg0EHYV") },
        { name: "MID-II(Question Bank Answers)", ...driveLinks("1RoLnQBDaLs1paw83osqJRsCPNfkrKnnR") },
        { name: "MID-II(Unit 3 Answers)", ...driveLinks("1LR0kegagv3dLTt9jwM9J3zFzWFtYbZW7") },
        { name: "MID-II(Unit 4 Answers)", ...driveLinks("1KNzjT9PrVhLB9lqv501loxslgb0Ii85A") },
        { name: "MID-II(Unit 5 Answers)", ...driveLinks("1uKw9-lpW6zHp0r7mrBB-tBYxeHBt8AX-") },
        { name: "Unit 4(Programs)", ...driveLinks("1BQsVQiNFs5MLGi0exzvktaSTy1xwHO_h") },
        { name: "Unit 4(Notes)", ...driveLinks("17Emy_zdoSBWJP8Gl38MCC9P6V6kvflax") },
        { name: "Unit 4(Material)", ...driveLinks("1Whi_yTe_GlREreZljCxGE8mU4T5u4QsL") },
        { name: "Unit 5(Material)", ...driveLinks("1bctIGcHHWnNchhUDp89QSUnaLlZoG1D0") }
         ]
        },
      "Environmental Science(ES)": {
      "Mid-I Portion": [
       { name: "Mid-I(Question Bank)", ...driveLinks("1nIWc20tpe6WSfytN3iHE1cX6MIU7jWRM") },
       { name: "Mid-I(2 Marks)", ...driveLinks("14b_hqC6FiSUF54QoFNnbLOi1fy3QIWVm") },
       { name: "Mid-I(All Q/A)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") },
        { name: "Unit 1(longs)", ...driveLinks("1R5lpsMCiItarSvMLNXroBIoUZvaZXiUy") },
        { name: "Unit 2(longs)", ...driveLinks("1EuqyHvNyo5MkdhUSCaDjt-ozMRy_gU80") },
        { name: "Unit 3 Mid-I(longs)", ...driveLinks("1MR2CzqjnVlq5LFw0q_wU5rel-SnJRqSn") }
      ],
      "Mid-II Portion": [
       { name: "Mid-II(Question Bank)", ...driveLinks("1kCOTwJ5Gp6lS0wjj7Iak0HIzHPP4GVUM") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1x7mmB4ksUGcLMDOqnMbu6SUX5z9HMmMh") }
      ]
    },
      "Django Framework": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
     "Software Engineering(SE)": {
      "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1bPLFfQZ9KoLQseHGf3ME_WmvuO9lmc19") },
        { name: "Unit 1(Q/A)", ...driveLinks("1nGbUuE2b0Tcy8HtJuyANHXXf2e_LMYOS") },
        { name: "Unit 2(Material)", ...driveLinks("1QFYjJ-x0R6QbRP3ZXI0YcSc-5760pJRA") },
        { name: "Unit 2(Q/A)", ...driveLinks("1dI7wVFZ0jdUba2qaQ0vFniKT9tAYmB9T") },
        { name: "Unit 3(Q/A --> Mid-I)", ...driveLinks("1mevSyGmoHpNTv5S7ye8WOU7GiSVwOQUY") }
      ],
      "Mid-II Portion": [
        { name: "Unit 5(Material)", ...driveLinks("1f1XptUy3JMD3VHf7uQLxEUlzfLGUaK0U") }
      ]
    },
      "OS": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "DLCO": {
      "Mid-I Portion": [  
        { name: "Unit 1(Number system)", ...driveLinks("1TE8t2P60vKlOK3m-l4kxcMpnmAlnMXri") },
        { name: "Unit 2(Shift Registers)", ...driveLinks("1UVf6yeZmc5C-9GSpg8R1xIFYYxNOnxO3") },
        { name: "Unit 3(Counters)", ...driveLinks("1jj9sgasUF2Xp0bCGRApvXDtn6RmPNKv5") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1VUBYJZltejB5K3yQUyK7TATINDDiONn8") },
        { name: "Unit 2(longs)", ...driveLinks("1RlPn8NP7p2F5b_WxMPYPYnKz54vq9mXH") },
        { name: "Unit 3(longs)", ...driveLinks("1fMHsf9HVwKHuNmOePDZGqRHLBXPJk_Pw") },
        { name: "Unit 1(2 Marks)", ...driveLinks("1pnTdWPan0CPA1tiMP9TvNIfmmNL-VUs1") },
        { name: "Unit 2(2 Marks)", ...driveLinks("1ceLEdRU3-6cv81n1l3x1S390e5vgi_kd") },
        { name: "Unit 3(2 Marks)", ...driveLinks("1zIuiN_9FWCHxLn7Dwvm8kKVrdVCvV3mz") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(Question Bank)", ...driveLinks("1-otUPj2yiZOjhbwJJ-fEd786WwCCf1fw") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1EDFdkT7KynmCF91NHGionkSpl1KqgTB4") },
        { name: "Mid-II(Longs)", ...driveLinks("1nM3b7vcGZXOQhPCkSD9SBvloaX95htyj") },
        { name: "Mid-II(2 Marks)", ...driveLinks("1rfDGJEFOKpYFU9KnzEquGUjDGmu_3HML") },
        { name: "Unit 4(Notes)", ...driveLinks("1i-Qy99FH6Iqbb5YdYySV1a2RIO4ZPWfs") },
        { name: "Unit 4 & 5(2 Marks)", ...driveLinks("1yDUY6cSlrIs2kVwWe0zmWBAC_5fgAD6i") },
        { name: "Unit 4 & 5(Material)", ...driveLinks("1Okw_0ghXrrLDr57a_025C45WkVuQOcKi") },
        { name: "Unit 5(Material Model 1)", ...driveLinks("1-2lhqB2WC4R-y77dJVywoVFZ8bzsmmnj") },
        { name: "Unit 5(Material Model 2)", ...driveLinks("1y4GRBpwM1OT9CP8A1jMfDr4vHrFWwetp") },
        { name: "Complete Material", ...driveLinks("1JaCZiro92RdMg_HlR5_UPQj5LHpTUTE_") }

      ]
      },
      "DBMS": {
      "Mid-I Portion": [
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("13720qT75I9MVmM_QKSpPfcSVZXRjAhjX") },
        { name: "Unit 3(Material)", ...driveLinks("19ZzYo9C84Hopbh0wSZkZJRbUh6HbKBUb") },
        { name: "Unit 4(Material)", ...driveLinks("17AOAv6DEHnu3qZL0G10pn249IEbAx7aG") },
        { name: "Unit 5(Material)", ...driveLinks("1PitBPnk0Nwc4YPS1guYjuWvp6I47zEbb") }
      ]
    },
      "DAOA": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Python Programming": {
      "Mid-I Portion": [
        { name: "Unit 1", ...driveLinks("1Kb4SIA-m1eivnMhrnInDIAyhUwirUAXZ") },
        { name: "Unit 2", ...driveLinks("1JlV1tZ0lDcCAuBo3kMr_aW2eiyCrTbWQ") },
        { name: "Unit 3", ...driveLinks("1XVrgLsKJnv8HxM6-NeNKN-CEO9Osohvn") }
      ],
      "Mid-II Portion": [
        { name: "Unit 4&5", ...driveLinks("1tzq1fiQTzEumA3y_Xy_yL4qujEvhJkUs") }
      ]
    }
  },


    "Civil": {
      "NSM": {
        "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1dCngTkrSsMD8riTLZeLU_6rVhyVASirT") },
        { name: "Unit 4(Notes)", ...driveLinks("10mBne2ZvniKhh0ZegOPEfocXzB7ts9Un") },
        { name: "Unit 5(Notes)", ...driveLinks("1tx921w20O85PsDyKEUDAYqY3YOFhXGwb") },
        { name: "Eulers Mathod", ...driveLinks("1zpiMk9d5ixmZDZI6m-lDBZ7MAEzJ4Fd-") }
      ]
      },
      "UHV": {
        "Mid-I Portion": [
        { name: "Question Bank", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "Mid-I(Q/A)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Mid-I(Shorts)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") },
        { name: "Mid-I(longs)", ...driveLinks("125782qemrCIrZynlOS-mYjiUtvEuXT-Y") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1pwJtMkq1KVwEGbI0gqdr2VOBNlysQI2q") },
        { name: "MID-II(Answers)", ...driveLinks("1KkXOn2i5-M9FAa0BW-1C0vT9wmF_cnYw") },
        { name: "Mid-II(Shorts)", ...driveLinks("14OZARQ6AFcE1PT9gs8nQMYh2A-Bmq_L5") },
        { name: "Mid-II Unit 3(longs)", ...driveLinks("12b95fSbBdwxlRzNmQwvUsfzqBFPrvf4p") },
        { name: "Mid-II Unit 4(longs)", ...driveLinks("1y1dBpPd-9Kx0zZBwqw8oWH4YbFyOQdJH") },
        { name: "Mid-II Unit 5(longs)", ...driveLinks("1t6ZJhzD-aCn3_YuR_3K_QTBsn-M09GkW") }
      ]
      },
      "Surveying": {
        "Mid-I Portion": [
        { name: "Unit 1(Question Bank)", ...driveLinks("1_8K-MlGVWdW07s0YNEC_fyPeOOxhn_wo") },
        { name: "Unit 1(Notes)", ...driveLinks("1wYu0Z4DLeLFiSZalBhumGaPB8WMBKedt") },
        { name: "Unit 1(Q/A)", ...driveLinks("1nw6JGF8LbM3k6r4jjd_DgNOk9MELyfwc") },
        { name: "Unit 2(Notes)", ...driveLinks("1fNgRi_YkUVs8MzWgMqOJ6xKBiQcEsftm") },
        { name: "Unit 3(Notes)", ...driveLinks("1ySsmLCnrckY_8ezUuZ9bvwbVTunVDlZ4") }
      ]
      },
      "Strength of Materials": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "(FM)Fluid Mechanics": {
      "Mid-I Portion": [
        { name: "Unit 1", ...driveLinks("1OcWQpr2PokZSHoz_Lkksg8M518uN9Dxj") },
        { name: "Unit 2", ...driveLinks("13MUqpTdjNERgELipT1PJqFfXNBvBMYeR") }
      ]},
      "Environmental Science(ES)": {
      "Mid-I Portion": [
       { name: "Mid-I(Question Bank)", ...driveLinks("1nIWc20tpe6WSfytN3iHE1cX6MIU7jWRM") },
       { name: "Mid-I(2 Marks)", ...driveLinks("14b_hqC6FiSUF54QoFNnbLOi1fy3QIWVm") },
       { name: "Mid-I(All Q/A)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") },
        { name: "Unit 1(longs)", ...driveLinks("1R5lpsMCiItarSvMLNXroBIoUZvaZXiUy") },
        { name: "Unit 2(longs)", ...driveLinks("1EuqyHvNyo5MkdhUSCaDjt-ozMRy_gU80") },
        { name: "Unit 3 Mid-I(longs)", ...driveLinks("1MR2CzqjnVlq5LFw0q_wU5rel-SnJRqSn") }
      ],
      "Mid-II Portion": [
       { name: "Mid-II(Question Bank)", ...driveLinks("1kCOTwJ5Gp6lS0wjj7Iak0HIzHPP4GVUM") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1x7mmB4ksUGcLMDOqnMbu6SUX5z9HMmMh") }
      ]
    },
      "BPD": {
      "Mid-I Portion": [
        { name: "Complete Material", ...driveLinks("1M5Ndj-VIBxy8BJsQK7UVehQFCE4S3qac") },
        { name: "Specifications for the BPD", ...driveLinks("1c9OCYKZGuPuYNKvlWpUPmbKqC_CIRJ-y") }
      ]
      },
      "MEFA": {
      "Mid-I Portion": [
        { name: "Complete Notes", ...driveLinks("1mBkfV4hWOnVIb9f6f5VFcauqJLn97UkP") },
        { name: "1 to 6 Units Material", ...driveLinks("1ijZakkLUzEQoYTaF9_Oapmid1powsRYn") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1DBWn7b2hbtm5hziF3Q4pHpzL-yXVpz9w") },
        { name: "Mid-I(Shorts Material)", ...driveLinks("1pyRe1mIwmZUoZnymdVIW3QC_i33Eb2gO") },
        { name: "Unit 1(Material)", ...driveLinks("1Qp1al3AZiAYnF-o663H-7dpKnlqrqHY3") },
        { name: "Unit 1(Q/A)", ...driveLinks("1uwOSlrmIhbz_QXxwsmEvJJEr1S5KRuN7") },
        { name: "Unit 1&2(Material)", ...driveLinks("1CGWv96DeVeTco711OwJThiRwAy4YlAEx") },
        { name: "Unit 3(5 Marks)", ...driveLinks("18-srSvJDSaAIkGPRDcCead4FTSKwA7gO") },
        { name: "Mid-II(Question Bank)", ...driveLinks("1lMrDWu42d4000CanaHwgOAB6bEm_w4VX") }
      ],
      "Mid-II Portion": [
        { name: "Mid-II(2 Marks)", ...driveLinks("1aEMRjNehOnHXxDv4LxVx01Tu1Ntl1Pxc") },
        { name: "Unit 4(5 Marks)", ...driveLinks("1Uf6RtmV-obTbl7GARHTp9sZTTZg3rgdh") },
        { name: "Unit 4(Notes)", ...driveLinks("1IMX4pplgIAHw9NulfxHK6s1oVNmj3VIS") },
        { name: "Unit 4(Sums)", ...driveLinks("1THmnHHB1F7tBMGhw6YQ4vYsmCIJuqiyc") },
        { name: "Unit 5(5 Marks)", ...driveLinks("172zRhddRfP8PM_9lQjm3FGcrol0cPaTT") },
        { name: "Unit 5(Handwritten Notes 1)", ...driveLinks("11GA-3BZOsguJdvcufgoIVli0yigE-IVJ") }
      ]
    },
      "Engineering Geology": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "BMCT": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Structural Analysis": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "HHM": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "RS&GIS": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    },


    "Mech": {
      "NSM": {
        "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1dCngTkrSsMD8riTLZeLU_6rVhyVASirT") },
        { name: "Unit 4(Notes)", ...driveLinks("10mBne2ZvniKhh0ZegOPEfocXzB7ts9Un") },
        { name: "Unit 5(Notes)", ...driveLinks("1tx921w20O85PsDyKEUDAYqY3YOFhXGwb") },
        { name: "Eulers Mathod", ...driveLinks("1zpiMk9d5ixmZDZI6m-lDBZ7MAEzJ4Fd-") }
      ]
      },
     "UHV": {
        "Mid-I Portion": [
        { name: "Question Bank", ...driveLinks("1LUNJq4_mPijRpsrjbGiBVEfIHjZhIvBD") },
        { name: "Mid-I(Q/A)", ...driveLinks("1MdtJEfmSu3j-BkFgCA5xhvoO0NURubC9") },
        { name: "Mid-I(Shorts)", ...driveLinks("1Kpwtsh4UgPQQ2113Db23TM53XBanO99a") },
        { name: "Mid-I(longs)", ...driveLinks("125782qemrCIrZynlOS-mYjiUtvEuXT-Y") }
      ],
      "Mid-II Portion": [
        { name: "MID-II(Question Bank)", ...driveLinks("1pwJtMkq1KVwEGbI0gqdr2VOBNlysQI2q") },
        { name: "MID-II(Answers)", ...driveLinks("1KkXOn2i5-M9FAa0BW-1C0vT9wmF_cnYw") },
        { name: "Mid-II(Shorts)", ...driveLinks("14OZARQ6AFcE1PT9gs8nQMYh2A-Bmq_L5") },
        { name: "Mid-II Unit 3(longs)", ...driveLinks("12b95fSbBdwxlRzNmQwvUsfzqBFPrvf4p") },
        { name: "Mid-II Unit 4(longs)", ...driveLinks("1y1dBpPd-9Kx0zZBwqw8oWH4YbFyOQdJH") },
        { name: "Mid-II Unit 5(longs)", ...driveLinks("1t6ZJhzD-aCn3_YuR_3K_QTBsn-M09GkW") }
      ]
      },
      "MSM": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Mechanics of Solids": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Theromodynamics": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Environmental Science(ES)": {
      "Mid-I Portion": [
       { name: "Mid-I(Question Bank)", ...driveLinks("1nIWc20tpe6WSfytN3iHE1cX6MIU7jWRM") },
       { name: "Mid-I(2 Marks)", ...driveLinks("14b_hqC6FiSUF54QoFNnbLOi1fy3QIWVm") },
       { name: "Mid-I(All Q/A)", ...driveLinks("1H3ISg4SzDNU3Be-1kCT_DZ7ivMfQucWV") },
        { name: "Unit 1(longs)", ...driveLinks("1R5lpsMCiItarSvMLNXroBIoUZvaZXiUy") },
        { name: "Unit 2(longs)", ...driveLinks("1EuqyHvNyo5MkdhUSCaDjt-ozMRy_gU80") },
        { name: "Unit 3 Mid-I(longs)", ...driveLinks("1MR2CzqjnVlq5LFw0q_wU5rel-SnJRqSn") }
      ],
      "Mid-II Portion": [
       { name: "Mid-II(Question Bank)", ...driveLinks("1kCOTwJ5Gp6lS0wjj7Iak0HIzHPP4GVUM") },
        { name: "Mid-II(Question Bank Answers)", ...driveLinks("1x7mmB4ksUGcLMDOqnMbu6SUX5z9HMmMh") }
      ]
    },
      "IM": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "PCV": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "Manufacturing processes": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "FMHM(Fluid Mechanics and Hydraulic Machines)": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ],
      "DOMM(Design of Machine Members )": [
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
        // { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      ]
    }
  },

  "3rd Year": {
    "CSE": {
      "DWDM(Data Warehousing and Data Mining)": {
        "Mid-I Portion": [
        { name: "IMP(Queestions)", ...driveLinks("1vsHFrKzx6sphD-0uB70ZEKg9qIiGVbIy") },
        { name: "Unit 1", ...driveLinks("12zLhHYlTahnlYy5iDQV1RUTCqwY1aug5") },
        { name: "Unit 1&2", ...driveLinks("1g7LRbKcptv1pGJgAnl59yaIR66Rwhzus") },
        { name: "Unit 2(Data preprocessing)", ...driveLinks("1W-6-qvZ8u1yJ9SHW45fDcrkf74t-qBWn") },
        { name: "Unit 3", ...driveLinks("10F1iQO96VN0sIuggrK1en8tB9Wac6Gpq") }
      ]
      },
      "AOR(Applied operation research)": {
      "Mid-I Portion": [
        { name: "Mid-I(Question Bank)", ...driveLinks("1NKa-SdmVti18GizbiwDgySM-t_WiTa1x") },
        { name: "Assignment problem", ...driveLinks("18g4rAhJw-ZL-40oYl2so1qCW1j8OBekz") },
        { name: "Dual simplex", ...driveLinks("1itlkvsFfF0auRvR8os6EZ7fTpuuTGWQQ") },
        { name: "Gllp,canonical", ...driveLinks("1rWXn1wwpf5A3-a6oRHjd5V9fJ1HXMA8C") },
        { name: "lpp graphical method", ...driveLinks("1518Ty6hpeuNm-jj2pQlnq3pvXYYwXIbd") },
        { name: "Replacement theory", ...driveLinks("1oYAwyWYtzO51pVU1GCqrZscvjxqjmW3O") },
        { name: "Sequencing", ...driveLinks("1dqeynAvlAvfTO9pcYVBcPJPUhJ3kYrKh") },
        { name: "simplex", ...driveLinks("1vETlNSwZ95ckIpLlqLlJKLlTqYPhACiC") },
        { name: "transhipment", ...driveLinks("11jePUHe_vsK45odfZt6F8Vs1EjtFB6TW") },
        { name: "transportation problem", ...driveLinks("1miwTeqkoFiY4rZ_6AF30wSJjQjAXn1UU") },
        { name: "two phase", ...driveLinks("1Ef0OXeITt7KLrnNtc4KQrp7ui6vwtY8Z") }
      ]
    },
      "ADSAT(Advanced Data Structures and Algorithms)":{
      "Mid-I Portion": [
        { name: "Graphs", ...driveLinks("19m1i6OiwvXq0GXym-ZcBoQ6MglW6RhAR") },
        { name: "AVL Trees", ...driveLinks("1xi8GVDypgAD3R4GdKJPyGx4esYARLwC0") }
      ]},
      "OOAD(ObjectOrientedAnalysis and Design)": {
      "Mid-I Portion": [
        { name: "Unit 1(Notes)", ...driveLinks("1cevwcwis71PXCcqC1eG7H1luMZguxDyK") },
        { name: "Unit 2(Notes)", ...driveLinks("1LqJ-CigGcE1ynDOiUetWEuSf_7YsZMrm") },
        { name: "Class Diagrams", ...driveLinks("1IVFF0a2sqQ7y5zKNsYZtbvXpsrQbw1dJ") },
        { name: "Classes", ...driveLinks("1mLZEY8kiTKrtIJwPcejf8nyLj2_UlTpO") },
        { name: "Common Mechanisms", ...driveLinks("1sPqcSYOyKXBDZivhw6yA-8F5i3vNHerN") },
        { name: "Interfaces,types and Roles", ...driveLinks("1HM_6GEcFVOsLQybyHpuLThGYLnOpugzi") },
        { name: "object Diagrams", ...driveLinks("1_FulfuCf6mAjt6nArUdQx2O3nzvIlb7e") },
        { name: "Advanced Relationships", ...driveLinks("1IB9M2ShsyUG-5ihLHRwgHYcJqvbO1AnS") },
        { name: "Packages", ...driveLinks("1E-NdZ0sBdslpDayTzSreGxijpuJhdnj_") }
      ]},
      "CD(Computer Design)": {
      "Mid-I Portion": [
        { name: "MID-I(Question Bank)", ...driveLinks("1EV-rafuOAlzapvAcbWUm1kzKurV5zVRv") },
        { name: "Unit 1", ...driveLinks("1RHT5M3ElbEwsDpdGRacFZuQomSqnaPTn") },
        { name: "Unit 2", ...driveLinks("1GITvi9fPFNzGWTi45tmxJvPptbbzyOo2") },
        { name: "Unit 3", ...driveLinks("1mnk00Qs1iBvorZO7NtWWj4aNUusm2_bB") }   
         ]
    } 
  },   
    
    // "ACSE":{
    // "Software Engineering(SE)": {
    //   "Mid-I Portion": [
    //     { name: "Mid-I(Question Bank)", ...driveLinks("1bPLFfQZ9KoLQseHGf3ME_WmvuO9lmc19") },
    //     { name: "Unit 1(Q/A)", ...driveLinks("1nGbUuE2b0Tcy8HtJuyANHXXf2e_LMYOS") },
    //     { name: "Unit 2(Material)", ...driveLinks("1QFYjJ-x0R6QbRP3ZXI0YcSc-5760pJRA") },
    //     { name: "Unit 2(Q/A)", ...driveLinks("1dI7wVFZ0jdUba2qaQ0vFniKT9tAYmB9T") },
    //     { name: "Unit 3(Q/A --> Mid-I)", ...driveLinks("1mevSyGmoHpNTv5S7ye8WOU7GiSVwOQUY") }
    //   ],
    //   "Mid-II Portion": [
    //     { name: "Unit 5(Material)", ...driveLinks("1f1XptUy3JMD3VHf7uQLxEUlzfLGUaK0U") }
    //   ]
    // },
      // "Applied Operation": [
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      // ],
      // "CNAP(Computer Networks ArchitectureandProtocols": [
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      // ],
      // "Natural Language Processing": [
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      // ],
      // "OS(Operating System)": [
      //   { name: "Unit 1(Lecture No 1)", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
      //   { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
      // ],
    // "OE-I Microprocessor & Microcontroller": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Cloud Computing": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "ICS(Introduction to Cyber Security)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "ATCD(Automatation Theory& Compiler Design)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "PASD(Probability and applied Statistics)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    // "ML(Machine Learning)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Predictive Analytics": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Artificial Intelligence": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ]

    // "AI&DS":{
    //     "Software Engineering(SE)": {
    //   "Mid-I Portion": [
    //     { name: "Mid-I(Question Bank)", ...driveLinks("1bPLFfQZ9KoLQseHGf3ME_WmvuO9lmc19") },
    //     { name: "Unit 1(Q/A)", ...driveLinks("1nGbUuE2b0Tcy8HtJuyANHXXf2e_LMYOS") },
    //     { name: "Unit 2(Material)", ...driveLinks("1QFYjJ-x0R6QbRP3ZXI0YcSc-5760pJRA") },
    //     { name: "Unit 2(Q/A)", ...driveLinks("1dI7wVFZ0jdUba2qaQ0vFniKT9tAYmB9T") },
    //     { name: "Unit 3(Q/A --> Mid-I)", ...driveLinks("1mevSyGmoHpNTv5S7ye8WOU7GiSVwOQUY") }
    //   ],
    //   "Mid-II Portion": [
    //     { name: "Unit 5(Material)", ...driveLinks("1f1XptUy3JMD3VHf7uQLxEUlzfLGUaK0U") }
    //   ]
    // },
    //   "ATC (Automatation Theory and Compiler Design)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "OE-I(Renewable Energy Systems)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    // "Machine Learning": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Operating Systems": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ]
    // },
    // "IT":{
    //   "DWD(Data Warehousing and Data Mining)": [
    //     { name: "Mid-I(Question Bank)", ...driveLinks("1c6NXyTrT36Rr3u5IHoHNGlS49Dif9OkV") },
    //     { name: "Unit 1(2 Marks)", ...driveLinks("1SleI-teABEbbmDZub_LiIBcjtVw9c7Q_") },
    //     { name: "Unit 2(longs)", ...driveLinks("1tJPrEHSkAkWXeg2ynlaCJHq4ueqBEO5B") },
    //     { name: "Unit 3(mid-1 longs)", ...driveLinks("1A6cqdJMpjfQP-95nAyWUCYS37CLflYcQ") }
    //   ],
    //   "ATC (Automatation Theory and Compiler Design)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Computer Networks Architecture": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Advanced Java": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Green Building": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ]
    // },
    // "ECM":{
    //   "DWD(Data Warehousing and Data Mining)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "PO(Principal of Operating)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //      { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "LD IC(Linear and Digital IC)": [
    //    { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "CAO(Computer Architecture and Organization)": [
    //    { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "MM(Microprocessor and Microcontroller)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Constitution of India": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ]
    // },
    // "ECE":{
    //   "ADIC(Analog and Digital IC)":[
    //     { name: "Unit 1", ...driveLinks("19z4v9sOxuIu13yW83ELW6Px-hiFsqL0w") },
    //     { name: "Unit 2", ...driveLinks("1dmlvNJaYu2IB9qiRRW_y1NDYhEPiAFNO") },
    //     { name: "Mid-I(Shorts)", ...driveLinks("1tDX0HZChWvLeq5yNXNxTlGQ74iHgU_RA") }
    //   ],
    //   "PO(Principal of Operating)": [
    //     { name: "Mid-I(Question Bank)", ...driveLinks("1c6NXyTrT36Rr3u5IHoHNGlS49Dif9OkV") },
    //     { name: "Unit 1(2 Marks)", ...driveLinks("1SleI-teABEbbmDZub_LiIBcjtVw9c7Q_") },
    //     { name: "Unit 2(longs)", ...driveLinks("1tJPrEHSkAkWXeg2ynlaCJHq4ueqBEO5B") },
    //     { name: "Unit 3(mid-1 longs)", ...driveLinks("1A6cqdJMpjfQP-95nAyWUCYS37CLflYcQ") }
    //   ],
    //   "AWP(Antennas and Wave Propagation)": [
    //     { name: "Unit 2", ...driveLinks("13EgcEMT64bVI4tvtrLmQrh10ZALdLnDv") },
    //     { name: "Unit 3", ...driveLinks("19ZABE1ZMC7MOsXl2oJQOwlMVuus5ev_Y") },
    //     { name: "Half wave dipole", ...driveLinks("1__e3NSITbbOaKH2klxyAI_IuNyr29cU6") }
    //   ],
    //   "EMS(Electronic Measurements and Instrumentation)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "MM(Microprocessor and Microcontroller)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Constitution of India": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ]      
    // },
    // "EEE":{
    //   "PE (Power Electronics)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Digital Circuits": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Power Systems-II": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "SS(Signal and Systems)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "FIT(Fundamentals of internet of Things)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "TPW&IPR(Technical Paper Writing and IPR)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    // },
    // "Civil":{
    //   "WRE (Water Resource Engineering)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "DRCS(Design of Reinforced Concrete Structures)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Geotechnnical Engineering": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Ground Improvements Techniques": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Industrial safety": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ]
    // },
    // "Mech":{
    //   "MTM (Machine Tools and Mertology)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Thermal Engineering": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "Theory of Machines": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "ICS(Instrumentation & control Systems)": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ],
    //   "(SET)Sustainable Energy Technologies": [
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") },
    //     { name: "Unit 1", ...driveLinks("16NEKEnMoABxYHJgFRuJApFR5GgG2heJ3") }
    //   ]
    // }
  
  },



  "4th Year": {
    "CSE":
    {
      "Cloud computing": {
        "MID-I Portion": [
        { name: "Syllabus", ...driveLinks("1zEMR14WIRN5pq2h2b5iE0U2B7SF9CQYf") },
        { name: "Unit 1 (Part 1)Introduction to Cloud Computing", ...driveLinks("1J-BnnfBYdBM1PsgGWInofxMoiNg0inzA") },
        { name: "Unit 1(Part 2)Virtualization", ...driveLinks("1jmBhf3taQPjfPjgQZl13ZuySTshcL1Ey") },
        { name: "Unit 2 (Cloud Platform Architecture)", ...driveLinks("1MTyT2-73CXs5ehcH0AILXizCRD_7qPiK") },
        { name: "Unit 3 (Cloud Programming and software development)", ...driveLinks("1W-6-qvZ8u1yJ9SHW45fDcrkf74t-qBWn") },
        { name: "Unit 4(Material)", ...driveLinks("1Ow1HpBOZnmf-2o0YYsDQJB8vHg7VhJST") },
        { name: "2 Marks", ...driveLinks("1bnBNXkT3rwgtqw94CYZ_gwujROMVD5Dh") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1dq5pq1Wz6tNKQru4swWhgDgLqpF8_aQy") }
      ]
      },
      "Disaster Management": {
        "MID-I Portion": [
        { name: "Syllabus", ...driveLinks("16que0-4ANcOoaSOl5tvwf87hDYY_l_L3") },
        { name: "Unit 1(Introduction)ppt", ...driveLinks("17TjtDIGX7UuXcFxYl1ml4Qb6xYSuyKcI") },
        { name: "Types of Disasters ppt", ...driveLinks("14LO_1UMeRS8PTle-x5BEPKCngUagp4bp") },
        { name: "Unit 1 (Disasters Material)", ...driveLinks("1AEjEeSBISAtbzdtyFbAU9M7AYP9bq-d5") },
        { name: "Unit 2(Hydrolodical Hazards)", ...driveLinks("1DdY0PCVOeWQtrO8CVuxtffYDQ3peC8bu") },
        { name: "Unit 3(Geological Hazards)", ...driveLinks("1tQMNo3a5iOstv5d043uNkiALPV7M5u-c") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1lPI0xLoQ_e0QJ1vzXDMefwZhgO42unCE") },
        { name: "Mid-I(Question Bank Answers)", ...driveLinks("1VuBDQH2BoXgqMlB6N_aH4Vpfm0auFl_a") }
      ]
    },
      "English Communicative": {
      "MID-I Portion": [
        { name: "Unit 1", ...driveLinks("1Fgd4sjizfjGN-iUX8VVIfnX8Pm4sf2Rx") },
        { name: "Mid-I(Question Bank)", ...driveLinks("1cJkliYotFkUU8wbUSTRVV5XegzVtPs5G") },
        { name: "Mid-I(2 Marks)", ...driveLinks("1Syul4v5mHVOAYIPxrusx2tEH1G1wuWW2") },
        { name: "Mid-I(Material)", ...driveLinks("1pxIe5A8LW2NqOOHmnw4eOWhUa362hQpM") }
      ]
    },
      // "ERP-II": [
      //   { name: "Unit 1(Notes)", ...driveLinks("1cevwcwis71PXCcqC1eG7H1luMZguxDyK") },
      //   { name: "Unit 2(Notes)", ...driveLinks("1LqJ-CigGcE1ynDOiUetWEuSf_7YsZMrm") },
      //   { name: "Class Diagrams", ...driveLinks("1IVFF0a2sqQ7y5zKNsYZtbvXpsrQbw1dJ") },
      //   { name: "Classes", ...driveLinks("1mLZEY8kiTKrtIJwPcejf8nyLj2_UlTpO") },
      //   { name: "Packages", ...driveLinks("1E-NdZ0sBdslpDayTzSreGxijpuJhdnj_") }
      // ],
      "Image Processing Techniques": {
        "MID-I Portion": [
        { name: "Syllabus", ...driveLinks("1jjAphAKv44-1sfQ4xGTtgql48jO-kte7") },
        { name: "Unit 1(Digital Image Fundamentails)", ...driveLinks("1_er83nWmKXlkHxSld_XFEEfZOpmAaaHY") },
        { name: "Unit 1(Handwritten Q/A)", ...driveLinks("1ISdjTFlMY_csDBdtm30DPLaYIVD0dzT2") },
        { name: "Unit 2(Image Enhancement)", ...driveLinks("1USHr6sGVoOxtYhhQnYiFhXLG2mKkEdyF") },
        { name: "Unit 3(Handwritten Q/A)", ...driveLinks("1rtNa4Qiv8vcL7SpqrofCT03OU_lcKT4a") },   
        { name: "Mid-I(Question Bank)", ...driveLinks("1Q9GI_Y9M62zb0N5ZK3-TtZM7xrmyekBr") },   
        { name: "Mid-I(2 Marks)", ...driveLinks("1I8a9tkljqh4TvIzqXTOVD5IrRbQo6b4W") },   
         ]
      },
        
         "Management Science": {
        "MID-I Portion": [
        { name: "Syllabus", ...driveLinks("1EV-rafuOAlzapvAcbWUm1kzKurV5zVRv") },
        { name: "MID-I(Question Bank)", ...driveLinks("1EV-rafuOAlzapvAcbWUm1kzKurV5zVRv") },
        { name: "MID-I(2 Marks)", ...driveLinks("1EV-rafuOAlzapvAcbWUm1kzKurV5zVRv") },
        { name: "Unit 1(Notes)", ...driveLinks("1RHT5M3ElbEwsDpdGRacFZuQomSqnaPTn") },
        { name: "Unit 1(ppt)", ...driveLinks("1GITvi9fPFNzGWTi45tmxJvPptbbzyOo2") }
         ]
      },
        "Introduction to Data Science": [
        { name: "Syllabus", ...driveLinks("1VlwsY-2Z_i8oDahG3JUL2TG1dvEKwur1") },
        { name: "Unit 1(Material)", ...driveLinks("1BiTeOxtVaLUYw-_GEAQaVN_YsxP0Hv8o") },
        { name: "Unit 1(Additional Material)", ...driveLinks("1dADS-w_v8aIZxeuJD0lAvAfZ3el3zbvM") },
        { name: "Unit 1(ppt version)", ...driveLinks("19VjkwgAxv6OO9_HHkQM4JaU3695PJ07l") },
        { name: "Unit 2(Machine Learning in Data Science)Material", ...driveLinks("1-s4oDQAK7fhsKf2UZbTbKHtY0XWD-NoR") },   
        { name: "Unit 2(Machine Learning in Data Science)Additional Material", ...driveLinks("1qgaAp5RyERNJkXs2wmsfSTPwrAH49NDn") },  
        { name: "Unit 3 NoSQL Movement", ...driveLinks("1TOldDX5xskRtr2_ijJL_PBUbmYmGt1rF") },  
        { name: "Mid-I(Question Bank)", ...driveLinks("1rl0hPMDt5zHmDMdA5EAeFWeJ0Ppd81__") }
         ]
    }
  }
};

  return (
    <article className="min-h-screen text-white pt-32 pb-8 px-4 md:px-6 relative overflow-hidden">

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header with Back Button */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#E6D3A3] to-[#D4AF8D] bg-clip-text text-transparent mb-2">
              Resources
            </h1>
            <p className="text-gray-400 text-sm">Access study materials, notes, and question papers</p>
          </div>
          
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E6D3A3]/10 border border-[#E6D3A3]/30 hover:bg-[#E6D3A3]/20 text-[#E6D3A3] transition-all duration-200"
            >
              <ChevronLeft size={18} />
              <span className="text-sm font-medium">Back</span>
            </button>
          )}
        </div>

        {/* Breadcrumb Navigation */}
        {step > 1 && (
          <section className="mb-8 p-4 bg-gradient-to-r from-[#E6D3A3]/5 to-[#D4AF8D]/5 rounded-xl border border-[#E6D3A3]/20 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Path</p>
            <div className="flex flex-wrap gap-3 items-center">
              {selectedYear && (
                <>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#E6D3A3]/10 rounded-lg border border-[#E6D3A3]/30">
                    <BookOpen size={14} className="text-[#E6D3A3]" />
                    <span className="text-sm font-medium text-[#E6D3A3]">{selectedYear}</span>
                  </div>
                  {selectedBranch && <span className="text-[#D4AF8D]">/</span>}
                </>
              )}
              {selectedBranch && (
                <>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#D4AF8D]/10 rounded-lg border border-[#D4AF8D]/30">
                    <Folder size={14} className="text-[#D4AF8D]" />
                    <span className="text-sm font-medium text-[#D4AF8D]">{selectedBranch}</span>
                  </div>
                  {selectedSubject && <span className="text-[#E6D3A3]">/</span>}
                </>
              )}
              {selectedSubject && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#E6D3A3]/10 rounded-lg border border-[#E6D3A3]/30">
                  <BookOpen size={14} className="text-[#E6D3A3]" />
                  <span className="text-sm font-medium text-[#E6D3A3]">{selectedSubject}</span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Main Content Section */}
        <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-3xl border border-[#E6D3A3]/20 backdrop-blur-xl shadow-2xl overflow-hidden">
          
          {/* Year Selection */}
          {step === 1 && (
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Select Year</h2>
                <p className="text-gray-400 text-sm">Choose your academic year to view resources</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(data || {}).map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setSelectedBranch(null);
                      setSelectedSubject(null);
                      setSelectedFile(null);
                      setStep(2);
                    }}
                    className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                      selectedYear === year
                        ? "bg-[#E6D3A3]/20 border-[#E6D3A3] shadow-lg shadow-[#E6D3A3]/10"
                        : "bg-[#1a1a1a] border-[#E6D3A3]/20 hover:bg-[#E6D3A3]/10 hover:border-[#E6D3A3]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="text-[#E6D3A3]" size={24} />
                      <span className="text-lg font-semibold text-white">{year}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Branch Selection */}
          {step === 2 && selectedYear && (
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Select Branch</h2>
                <p className="text-gray-400 text-sm">Choose your branch for {selectedYear}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(data[selectedYear] || {}).map((branch) => (
                  <button
                    key={branch}
                    onClick={() => {
                      setSelectedBranch(branch);
                      setSelectedSubject(null);
                      setSelectedFile(null);
                      setStep(3);
                    }}
                    className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                      selectedBranch === branch
                        ? "bg-[#D4AF8D]/20 border-[#D4AF8D] shadow-lg shadow-[#D4AF8D]/10"
                        : "bg-[#1a1a1a] border-[#E6D3A3]/20 hover:bg-[#E6D3A3]/10 hover:border-[#E6D3A3]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Folder className="text-[#D4AF8D]" size={24} />
                      <span className="text-lg font-semibold text-white">{branch}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Subject Selection */}
          {step === 3 && selectedBranch && (
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Select Subject</h2>
                <p className="text-gray-400 text-sm">Choose a subject from {selectedBranch}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(data[selectedYear]?.[selectedBranch] || {}).map((subject) => (
                  <button
                    key={subject}
                    onClick={() => {
                      setSelectedSubject(subject);
                      setSelectedFile(null);
                      setStep(4);
                    }}
                    className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                      selectedSubject === subject
                        ? "bg-[#E6D3A3]/20 border-[#E6D3A3] shadow-lg shadow-[#E6D3A3]/10"
                        : "bg-[#1a1a1a] border-[#E6D3A3]/20 hover:bg-[#E6D3A3]/10 hover:border-[#E6D3A3]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="text-[#E6D3A3]" size={24} />
                      <span className="text-lg font-semibold text-white">{subject}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* File Selection & Preview */}
          {step === 4 && selectedSubject && selectedYear && selectedBranch && (
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Files List */}
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-bold text-white mb-6">Available Files</h3>
                  
                  <div className="space-y-3">
                    {Object.entries(
                      data[selectedYear]?.[selectedBranch]?.[selectedSubject] || {}
                    ).map(([portion, files]) => {
                      if (!Array.isArray(files)) return null;

                      return (
                        <div key={portion}>
                          <p className="text-xs uppercase tracking-widest text-[#D4AF8D] font-semibold mb-3">{portion}</p>
                          
                          <div className="space-y-2">
                            {files.map((file, i) => (
                              <button
                                key={file.name + i}
                                onClick={() => setSelectedFile(file.view)}
                                className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                                  selectedFile === file.view
                                    ? "bg-[#E6D3A3]/20 border-[#E6D3A3] shadow-md shadow-[#E6D3A3]/10"
                                    : "bg-[#1a1a1a] border-[#E6D3A3]/20 hover:bg-[#E6D3A3]/10 hover:border-[#E6D3A3]/40"
                                }`}
                              >
                                <p className="text-sm font-medium text-white truncate">{file.name}</p>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Preview Section */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">File Preview</h3>
                    {selectedFile && (
                      <div className="flex gap-3">
                        {Object.values(
                          data[selectedYear]?.[selectedBranch]?.[selectedSubject] || {}
                        ).map((files) => {
                          if (!Array.isArray(files)) return null;
                          const currentFile = files.find(f => f.view === selectedFile);
                          if (!currentFile) return null;
                          
                          return (
                            <div key={currentFile.name} className="flex gap-3">
                              <a
                                href={currentFile.view}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-[#E6D3A3]/20 border border-[#E6D3A3]/50 rounded-lg hover:bg-[#E6D3A3]/30 text-[#E6D3A3] transition-all duration-200"
                              >
                                <ExternalLink size={16} />
                                <span className="text-sm font-medium">Open</span>
                              </a>
                              
                              <a
                                href={currentFile.file}
                                className="flex items-center gap-2 px-4 py-2 bg-[#D4AF8D]/20 border border-[#D4AF8D]/50 rounded-lg hover:bg-[#D4AF8D]/30 text-[#D4AF8D] transition-all duration-200"
                              >
                                <Download size={16} />
                                <span className="text-sm font-medium">Download</span>
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {!selectedFile ? (
                    <div className="h-96 flex flex-col items-center justify-center bg-[#1a1a1a] rounded-xl border border-[#E6D3A3]/20 backdrop-blur-sm">
                      <BookOpen size={48} className="text-[#E6D3A3]/30 mb-4" />
                      <p className="text-gray-400 text-center">Select a file from the list to preview</p>
                    </div>
                  ) : (
                    <div className="bg-[#1a1a1a] rounded-xl border border-[#E6D3A3]/20 overflow-hidden shadow-xl">
                      <iframe
                        src={selectedFile}
                        title="PDF Viewer"
                        className="w-full h-96 md:h-[600px] border-none"
                      />
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

        </section>
      </div>
    </article>
  );
};

export default Resources;