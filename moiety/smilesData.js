// smilesData.js
const smilesList = [
    "CNC",
    "CC(=O)O",                        // No match
    "CC(=O)Oc1ccccc1C(=O)O",
    "c1ccncc1",                   // No match (Pyridine)
    "C(C1C(C(C(C(O1)O)O)O)O)O",
    "CCC1CC2C3CCC4=CC(=O)CCC4C3CCC2(C1O)C",
    "CCCCC(CC(C)C)N",
    "c1ccc(cc1)-c2cnc(o2)-c3ccccc3",
    "C1=NNC2C1C(=O)NC(=N2)N",
    "C1=CC=C(C(=C1)CSCC(C(=O)NCC(=O)O)NC(=O)CCC(C(=O)O)N)Cl",
    "CSCOC1=CC=CC=C1",
    "COCCCNC1=C(C=C(C=N1)C(F)(F)F)Cl",
    "CC1=C(C2=NC(=C(C=C2C=C1)C(=O)O)Cl)C",
    "CC(=O)NCCCC(CC(=O)NC(CCCNC(=O)C)CC(=O)OC)NC(=O)C",
    "C1C(=O)N(CS1)C2=CC=C(C=C2)Br",
    "CCC1=CC=CC=C1N(CC)CC",
    "C1=C(C=NC(=C1Cl)NCC(CC#N)O)C(F)(F)F",
    "CC(CCO)C(F)(F)F",
    "CCOC(=O)C1=NN(C(=O)C=C1Cl)C2=CC=CC=C2",
    "CC(C)(C)OC(=O)N(C1=CC=C(C=C1)F)S(=O)(=O)C",
    "C1=CC(=CC(=C1)Cl)C2C(C(=O)NC(=S)N2)C#N",
    "C1=CC(=CC(=C1)NC2=NC(=NC(=N2)N)NC3=CC=CC(=C3)N)N",
    "CC(C)(C)OOC(=O)C1=CC(=CC=C1)C(=O)OOC(C)(C)C",
    "CCC1=NC2=CC=CC=C2N=C1NC(=O)C",
    "[O-][Se](=O)[O-].[Na+].[Na+]",
    "CC(=O)N1CC(CC1C(=O)O)O",
    "c1ccc(cc1)-c2cnc(o2)-c3ccccc3",    // Match: Naphthalene
    "CC(C)CC",
    "CCC1=NC(=C(O1)C)C",
    "Cc1nc(C)c(C)o1",
    "CCN(CC)CCC(=O)N1C2=CC=CC=C2SC3=C1C=C(C=C3)C(F)(F)F",
    "CCO"                    // No match
  ];
  
  export default smilesList;