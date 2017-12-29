
import {GroupViewModel} from './groupViewModel';
import {SymbolDp} from './symbolDp';
import {Quantities} from './quantities';

export const mockGroups: GroupViewModel[] = [
    { name: 'All', values: [] },
    { name: 'Index', values: []},
    { name: 'Sector', values: [/*'Banking', 'Biotech', 'Automotive'*/]},
    {name: 'Symbol', values: []}
];

export const symbolGrid: object[] = [
    {
        Ticker: 'JUNO',
        RelativeStrength: 0.9618931,
        OffensiveStrength: 0.985511661,
        DefensiveStrength: -0.0236185938,
        ClosePrice: 56.7
    },
    {
        Ticker: 'ALNY',
        RelativeStrength: 0.6949212,
        OffensiveStrength: 0.793412745,
        DefensiveStrength: -0.0984915346,
        ClosePrice: 137.31
    },
    {
        Ticker: 'EXAS',
        RelativeStrength: 0.527449965,
        OffensiveStrength: 0.400042653,
        DefensiveStrength: 0.127407283,
        ClosePrice: 57.95
    },
    {
        Ticker: 'ALGN',
        RelativeStrength: 0.509634,
        OffensiveStrength: 0.259772837,
        DefensiveStrength: 0.249861211,
        ClosePrice: 254.07
    },
    {
        Ticker: 'NRG',
        RelativeStrength: 0.478336275,
        OffensiveStrength: 0.308875382,
        DefensiveStrength: 0.1694609,
        ClosePrice: 27.95
    },
    {
        Ticker: 'WUBA',
        RelativeStrength: 0.473442078,
        OffensiveStrength: 0.339161277,
        DefensiveStrength: 0.1342808,
        ClosePrice: 72.41
    },
    {
        Ticker: 'HFC',
        RelativeStrength: 0.470957756,
        OffensiveStrength: 0.395576477,
        DefensiveStrength: 0.0753812939,
        ClosePrice: 44.25
    },
    {
        Ticker: 'NBIX',
        RelativeStrength: 0.470307648,
        OffensiveStrength: 0.4794703,
        DefensiveStrength: -0.009162664,
        ClosePrice: 73.6
    },
    {
        Ticker: 'FSLR',
        RelativeStrength: 0.4670935,
        OffensiveStrength: 0.320310831,
        DefensiveStrength: 0.146782666,
        ClosePrice: 60.3
    },
    {
        Ticker: 'KORS',
        RelativeStrength: 0.4430403,
        OffensiveStrength: 0.222273931,
        DefensiveStrength: 0.22076638,
        ClosePrice: 57.98
    },
    {
        Ticker: 'SQ',
        RelativeStrength: 0.436678469,
        OffensiveStrength: 0.3787055,
        DefensiveStrength: 0.05797297,
        ClosePrice: 38.22
    },
    {
        Ticker: 'MTCH',
        RelativeStrength: 0.421530038,
        OffensiveStrength: 0.266660035,
        DefensiveStrength: 0.15487,
        ClosePrice: 28.41
    },
    {
        Ticker: 'BLUE',
        RelativeStrength: 0.418022871,
        OffensiveStrength: 0.448139071,
        DefensiveStrength: -0.0301162,
        ClosePrice: 171.1
    },
    {
        Ticker: 'IPGP',
        RelativeStrength: 0.4048081,
        OffensiveStrength: 0.391537368,
        DefensiveStrength: 0.0132707506,
        ClosePrice: 224.13
    },
    {
        Ticker: 'IGT',
        RelativeStrength: 0.376923025,
        OffensiveStrength: 0.152718231,
        DefensiveStrength: 0.224204808,
        ClosePrice: 27.75
    },
    {
        Ticker: 'GRUB',
        RelativeStrength: 0.374881923,
        OffensiveStrength: 0.223923072,
        DefensiveStrength: 0.150958851,
        ClosePrice: 66.6
    },
    {
        Ticker: 'ANET',
        RelativeStrength: 0.374281853,
        OffensiveStrength: 0.30969125,
        DefensiveStrength: 0.0645906,
        ClosePrice: 228.65
    },
    {
        Ticker: 'FCAU',
        RelativeStrength: 0.374044627,
        OffensiveStrength: 0.241988912,
        DefensiveStrength: 0.132055715,
        ClosePrice: 17.09
    },
    {
        Ticker: 'IBKR',
        RelativeStrength: 0.366615474,
        OffensiveStrength: 0.188460514,
        DefensiveStrength: 0.178154945,
        ClosePrice: 58.08
    },
    {
        Ticker: 'CGNX',
        RelativeStrength: 0.361937553,
        OffensiveStrength: 0.348524153,
        DefensiveStrength: 0.0134133995,
        ClosePrice: 138.49
    },
    {
        Ticker: 'OLED',
        RelativeStrength: 0.355783284,
        OffensiveStrength: 0.323673964,
        DefensiveStrength: 0.0321093127,
        ClosePrice: 176.7
    },
    {
        Ticker: 'PPC',
        RelativeStrength: 0.355730534,
        OffensiveStrength: 0.260044754,
        DefensiveStrength: 0.09568578,
        ClosePrice: 37.28
    },
    {
        Ticker: 'SC',
        RelativeStrength: 0.3417197,
        OffensiveStrength: 0.0910293,
        DefensiveStrength: 0.2506904,
        ClosePrice: 17.37
    },
    {
        Ticker: 'TTWO',
        RelativeStrength: 0.339399278,
        OffensiveStrength: 0.114978239,
        DefensiveStrength: 0.224421054,
        ClosePrice: 110.76
    },
    {
        Ticker: 'WLK',
        RelativeStrength: 0.33523038,
        OffensiveStrength: 0.237488642,
        DefensiveStrength: 0.09774174,
        ClosePrice: 98.54
    },
    {
        Ticker: 'DHI',
        RelativeStrength: 0.328976661,
        OffensiveStrength: 0.195551589,
        DefensiveStrength: 0.133425072,
        ClosePrice: 50.43
    },
    {
        Ticker: 'EXEL',
        RelativeStrength: 0.323236585,
        OffensiveStrength: 0.12233229,
        DefensiveStrength: 0.20090428,
        ClosePrice: 28.12
    },
    {
        Ticker: 'SPR',
        RelativeStrength: 0.3069686,
        OffensiveStrength: 0.0617987365,
        DefensiveStrength: 0.245169863,
        ClosePrice: 82.97
    },
    {
        Ticker: 'THO',
        RelativeStrength: 0.3050245,
        OffensiveStrength: 0.3505413,
        DefensiveStrength: -0.0455167741,
        ClosePrice: 151.59
    },
    {
        Ticker: 'NTAP',
        RelativeStrength: 0.3047673,
        OffensiveStrength: 0.325625,
        DefensiveStrength: -0.0208577067,
        ClosePrice: 56.41
    },
    {
        Ticker: 'NVR',
        RelativeStrength: 0.29647243,
        OffensiveStrength: 0.266305268,
        DefensiveStrength: 0.030167155,
        ClosePrice: 3480
    },
    {
        Ticker: 'PYPL',
        RelativeStrength: 0.2911424,
        OffensiveStrength: 0.152198181,
        DefensiveStrength: 0.138944209,
        ClosePrice: 75.3
    },
    {
        Ticker: 'PII',
        RelativeStrength: 0.291086584,
        OffensiveStrength: 0.182958826,
        DefensiveStrength: 0.10812775,
        ClosePrice: 126.11
    },
    {
        Ticker: 'WB',
        RelativeStrength: 0.289256036,
        OffensiveStrength: 0.3334303,
        DefensiveStrength: -0.04417424,
        ClosePrice: 104.83
    },
    {
        Ticker: 'VRX',
        RelativeStrength: 0.2855456,
        OffensiveStrength: -0.0298278183,
        DefensiveStrength: 0.315373421,
        ClosePrice: 17.25
    },
    {
        Ticker: 'PHM',
        RelativeStrength: 0.2841699,
        OffensiveStrength: 0.219317064,
        DefensiveStrength: 0.0648528337,
        ClosePrice: 33.94
    },
    {
        Ticker: 'BA',
        RelativeStrength: 0.2751997,
        OffensiveStrength: 0.102499232,
        DefensiveStrength: 0.1727005,
        ClosePrice: 271.38
    },
    {
        Ticker: 'VMW',
        RelativeStrength: 0.272870272,
        OffensiveStrength: 0.134100482,
        DefensiveStrength: 0.138769791,
        ClosePrice: 124.44
    },
    {
        Ticker: 'PBYI',
        RelativeStrength: 0.270123273,
        OffensiveStrength: 0.200895086,
        DefensiveStrength: 0.06922819,
        ClosePrice: 106.1
    },
    {
        Ticker: 'GDI',
        RelativeStrength: 0.26970917,
        OffensiveStrength: 0.340308368,
        DefensiveStrength: -0.07059921,
        ClosePrice: 32.08
    },
    {
        Ticker: 'URI',
        RelativeStrength: 0.266464829,
        OffensiveStrength: 0.3242677,
        DefensiveStrength: -0.05780287,
        ClosePrice: 157.09
    },
    {
        Ticker: 'TEAM',
        RelativeStrength: 0.265270174,
        OffensiveStrength: 0.213295564,
        DefensiveStrength: 0.051974602,
        ClosePrice: 47.01
    },
    {
        Ticker: 'RHT',
        RelativeStrength: 0.264874518,
        OffensiveStrength: 0.0659721643,
        DefensiveStrength: 0.198902354,
        ClosePrice: 125.26
    },
    {
        Ticker: 'BAK',
        RelativeStrength: 0.264405549,
        OffensiveStrength: 0.1221845,
        DefensiveStrength: 0.142221034,
        ClosePrice: 27.91
    },
    {
        Ticker: 'SPLK',
        RelativeStrength: 0.260319948,
        OffensiveStrength: 0.369052231,
        DefensiveStrength: -0.108732268,
        ClosePrice: 79.7
    },
    {
        Ticker: 'GPS',
        RelativeStrength: 0.259010315,
        OffensiveStrength: 0.370012164,
        DefensiveStrength: -0.111001864,
        ClosePrice: 31.98
    },
    {
        Ticker: 'CF',
        RelativeStrength: 0.2576673,
        OffensiveStrength: 0.266877532,
        DefensiveStrength: -0.00921022147,
        ClosePrice: 37.59
    },
    {
        Ticker: 'CLR',
        RelativeStrength: 0.25764817,
        OffensiveStrength: 0.2186433,
        DefensiveStrength: 0.0390048921,
        ClosePrice: 48.47
    },
    {
        Ticker: 'TDY',
        RelativeStrength: 0.255415559,
        OffensiveStrength: 0.165997043,
        DefensiveStrength: 0.0894185,
        ClosePrice: 183.49
    },
    {
        Ticker: 'ALLY',
        RelativeStrength: 0.253938973,
        OffensiveStrength: 0.0620609671,
        DefensiveStrength: 0.191878021,
        ClosePrice: 27.25
    },
    {
        Ticker: 'ABMD',
        RelativeStrength: 0.2516792,
        OffensiveStrength: 0.2015955,
        DefensiveStrength: 0.0500837,
        ClosePrice: 194.6
    },
    {
        Ticker: 'UBNT',
        RelativeStrength: 0.251172483,
        OffensiveStrength: 0.182743236,
        DefensiveStrength: 0.06842925,
        ClosePrice: 66.84
    },
    {
        Ticker: 'CDEV',
        RelativeStrength: 0.249041542,
        OffensiveStrength: 0.0948866159,
        DefensiveStrength: 0.154154927,
        ClosePrice: 20.61
    },
    {
        Ticker: 'ABBV',
        RelativeStrength: 0.245991319,
        OffensiveStrength: 0.213568822,
        DefensiveStrength: 0.03242249,
        ClosePrice: 96.32
    },
    {
        Ticker: 'TROW',
        RelativeStrength: 0.245485723,
        OffensiveStrength: 0.218843326,
        DefensiveStrength: 0.02664239,
        ClosePrice: 102.79
    },
    {
        Ticker: 'RL',
        RelativeStrength: 0.243583024,
        OffensiveStrength: 0.08141358,
        DefensiveStrength: 0.162169442,
        ClosePrice: 95.6
    },
    {
        Ticker: 'MU',
        RelativeStrength: 0.241082549,
        OffensiveStrength: 0.205914989,
        DefensiveStrength: 0.0351675674,
        ClosePrice: 41.99
    },
    {
        Ticker: 'OA',
        RelativeStrength: 0.239771709,
        OffensiveStrength: -0.0132879168,
        DefensiveStrength: 0.253059626,
        ClosePrice: 132.28
    },
    {
        Ticker: 'X',
        RelativeStrength: 0.239213511,
        OffensiveStrength: 0.40180397,
        DefensiveStrength: -0.162590459,
        ClosePrice: 29.3
    },
    {
        Ticker: 'CBOE',
        RelativeStrength: 0.23821348,
        OffensiveStrength: 0.105931237,
        DefensiveStrength: 0.132282242,
        ClosePrice: 124.25
    },
    {
        Ticker: 'CPRT',
        RelativeStrength: 0.23506999,
        OffensiveStrength: 0.09088983,
        DefensiveStrength: 0.144180164,
        ClosePrice: 43.01
    },
    {
        Ticker: 'DLTR',
        RelativeStrength: 0.232510358,
        OffensiveStrength: 0.12760742,
        DefensiveStrength: 0.104902938,
        ClosePrice: 103.01
    },
    {
        Ticker: 'HUN',
        RelativeStrength: 0.226436824,
        OffensiveStrength: 0.242153868,
        DefensiveStrength: -0.015717037,
        ClosePrice: 31.72
    },
    {
        Ticker: 'OC',
        RelativeStrength: 0.2251504,
        OffensiveStrength: 0.176585034,
        DefensiveStrength: 0.0485653728,
        ClosePrice: 87.66
    },
    {
        Ticker: 'MTG',
        RelativeStrength: 0.216039762,
        OffensiveStrength: 0.286803424,
        DefensiveStrength: -0.07076366,
        ClosePrice: 14.98
    },
    {
        Ticker: 'TECK',
        RelativeStrength: 0.215645567,
        OffensiveStrength: 0.08561255,
        DefensiveStrength: 0.130033016,
        ClosePrice: 23.31
    },
    {
        Ticker: 'TSN',
        RelativeStrength: 0.214405954,
        OffensiveStrength: -0.01641649,
        DefensiveStrength: 0.230822444,
        ClosePrice: 82.39
    },
    {
        Ticker: 'ODFL',
        RelativeStrength: 0.213968351,
        OffensiveStrength: 0.2904383,
        DefensiveStrength: -0.07646994,
        ClosePrice: 127.41
    },
    {
        Ticker: 'NVDA',
        RelativeStrength: 0.213534623,
        OffensiveStrength: 0.129284009,
        DefensiveStrength: 0.084250614,
        ClosePrice: 197.68
    },
    {
        Ticker: 'CNC',
        RelativeStrength: 0.2063991,
        OffensiveStrength: 0.0544232875,
        DefensiveStrength: 0.151975811,
        ClosePrice: 101.1
    },
    {
        Ticker: 'CAT',
        RelativeStrength: 0.2045775,
        OffensiveStrength: 0.1093498,
        DefensiveStrength: 0.0952277,
        ClosePrice: 141.52
    },
    {
        Ticker: 'AA',
        RelativeStrength: 0.204328433,
        OffensiveStrength: 0.116445407,
        DefensiveStrength: 0.0878830254,
        ClosePrice: 41.64
    },
    {
        Ticker: 'TFX',
        RelativeStrength: 0.203492969,
        OffensiveStrength: 0.138563916,
        DefensiveStrength: 0.06492906,
        ClosePrice: 265.58
    },
    {
        Ticker: 'CC',
        RelativeStrength: 0.202801734,
        OffensiveStrength: 0.197361365,
        DefensiveStrength: 0.005440362,
        ClosePrice: 51.84
    },
    {
        Ticker: 'AVY',
        RelativeStrength: 0.202607021,
        OffensiveStrength: 0.004626617,
        DefensiveStrength: 0.1979804,
        ClosePrice: 112.63
    },
    {
        Ticker: 'CW',
        RelativeStrength: 0.202605575,
        OffensiveStrength: 0.118762091,
        DefensiveStrength: 0.08384349,
        ClosePrice: 123.73
    },
    {
        Ticker: 'ILMN',
        RelativeStrength: 0.202229649,
        OffensiveStrength: 0.06693955,
        DefensiveStrength: 0.1352901,
        ClosePrice: 225.24
    },
    {
        Ticker: 'TRN',
        RelativeStrength: 0.199251652,
        OffensiveStrength: 0.175741985,
        DefensiveStrength: 0.0235096738,
        ClosePrice: 35.44
    },
    {
        Ticker: 'SEIC',
        RelativeStrength: 0.1984563,
        OffensiveStrength: 0.132856086,
        DefensiveStrength: 0.06560022,
        ClosePrice: 70.19
    },
    {
        Ticker: 'TRU',
        RelativeStrength: 0.197862655,
        OffensiveStrength: 0.169489577,
        DefensiveStrength: 0.02837307,
        ClosePrice: 55.65
    },
    {
        Ticker: 'XPO',
        RelativeStrength: 0.196539938,
        OffensiveStrength: 0.299179435,
        DefensiveStrength: -0.1026395,
        ClosePrice: 77.99
    },
    {
        Ticker: 'ETFC',
        RelativeStrength: 0.193608567,
        OffensiveStrength: 0.09474607,
        DefensiveStrength: 0.0988625,
        ClosePrice: 48.89
    },
    {
        Ticker: 'ADBE',
        RelativeStrength: 0.193189383,
        OffensiveStrength: 0.160817608,
        DefensiveStrength: 0.0323717669,
        ClosePrice: 179.52
    },
    {
        Ticker: 'FNF',
        RelativeStrength: 0.192747816,
        OffensiveStrength: 0.104181871,
        DefensiveStrength: 0.0885659456,
        ClosePrice: 40.58
    },
    {
        Ticker: 'ISRG',
        RelativeStrength: 0.192012548,
        OffensiveStrength: 0.028912425,
        DefensiveStrength: 0.163100123,
        ClosePrice: 396.66
    },
    {
        Ticker: 'USG',
        RelativeStrength: 0.191391,
        OffensiveStrength: 0.2252508,
        DefensiveStrength: -0.03385979,
        ClosePrice: 37.92
    },
    {
        Ticker: 'BGCP',
        RelativeStrength: 0.1886855,
        OffensiveStrength: -0.04793918,
        DefensiveStrength: 0.236624688,
        ClosePrice: 16.35
    },
    {
        Ticker: 'BWXT',
        RelativeStrength: 0.188164338,
        OffensiveStrength: 0.107760504,
        DefensiveStrength: 0.0804038346,
        ClosePrice: 61.88
    },
    {
        Ticker: 'HRS',
        RelativeStrength: 0.187896371,
        OffensiveStrength: 0.07443102,
        DefensiveStrength: 0.113465346,
        ClosePrice: 142.86
    },
    {
        Ticker: 'ECA',
        RelativeStrength: 0.187766165,
        OffensiveStrength: 0.233124331,
        DefensiveStrength: -0.0453581661,
        ClosePrice: 12.11
    },
    {
        Ticker: 'OSK',
        RelativeStrength: 0.187650412,
        OffensiveStrength: 0.107996032,
        DefensiveStrength: 0.07965437,
        ClosePrice: 88.89
    },
    {
        Ticker: 'TOL',
        RelativeStrength: 0.186805949,
        OffensiveStrength: 0.111989096,
        DefensiveStrength: 0.07481685,
        ClosePrice: 49.67
    },
    {
        Ticker: 'LULU',
        RelativeStrength: 0.18318972,
        OffensiveStrength: 0.113333,
        DefensiveStrength: 0.06985672,
        ClosePrice: 67.22
    },
    {
        Ticker: 'EL',
        RelativeStrength: 0.181720242,
        OffensiveStrength: 0.0165685564,
        DefensiveStrength: 0.165151685,
        ClosePrice: 124.77
    },
    {
        Ticker: 'AEM',
        RelativeStrength: -0.172992438,
        OffensiveStrength: -0.198289528,
        DefensiveStrength: 0.025297083,
        ClosePrice: 43.71
    },
    {
        Ticker: 'DPZ',
        RelativeStrength: -0.173566312,
        OffensiveStrength: -0.229142219,
        DefensiveStrength: 0.0555759035,
        ClosePrice: 184.62
    },
    {
        Ticker: 'AR',
        RelativeStrength: -0.1743552,
        OffensiveStrength: -0.0562577248,
        DefensiveStrength: -0.118097469,
        ClosePrice: 19.39
    },
    {
        Ticker: 'TWX',
        RelativeStrength: -0.175490424,
        OffensiveStrength: -0.1690306,
        DefensiveStrength: -0.00645981729,
        ClosePrice: 91.3
    },
    {
        Ticker: 'MO',
        RelativeStrength: -0.175725818,
        OffensiveStrength: -0.112912156,
        DefensiveStrength: -0.06281367,
        ClosePrice: 68.58
    },
    {
        Ticker: 'SJM',
        RelativeStrength: -0.177106813,
        OffensiveStrength: -0.166641355,
        DefensiveStrength: -0.010465458,
        ClosePrice: 115.61
    },
    {
        Ticker: 'MCK',
        RelativeStrength: -0.178275883,
        OffensiveStrength: -0.112034582,
        DefensiveStrength: -0.06624131,
        ClosePrice: 146.39
    },
    {
        Ticker: 'LEG',
        RelativeStrength: -0.17834276,
        OffensiveStrength: 0.0108695775,
        DefensiveStrength: -0.189212337,
        ClosePrice: 47.88
    },
    {
        Ticker: 'KMI',
        RelativeStrength: -0.178415358,
        OffensiveStrength: -0.136393815,
        DefensiveStrength: -0.0420215428,
        ClosePrice: 17.41
    },
    {
        Ticker: 'EEP',
        RelativeStrength: -0.1791628,
        OffensiveStrength: -0.05479133,
        DefensiveStrength: -0.124371469,
        ClosePrice: 14.77
    },
    {
        Ticker: 'AES',
        RelativeStrength: -0.180274516,
        OffensiveStrength: -0.281046331,
        DefensiveStrength: 0.100771815,
        ClosePrice: 10.67
    },
    {
        Ticker: 'JCI',
        RelativeStrength: -0.181365,
        OffensiveStrength: -0.1569808,
        DefensiveStrength: -0.0243842,
        ClosePrice: 37.42
    },
    {
        Ticker: 'BIVV',
        RelativeStrength: -0.182899371,
        OffensiveStrength: -0.2078467,
        DefensiveStrength: 0.02494733,
        ClosePrice: 49.36
    },
    {
        Ticker: 'K',
        RelativeStrength: -0.18293418,
        OffensiveStrength: -0.151782647,
        DefensiveStrength: -0.0311515331,
        ClosePrice: 65.99
    },
    {
        Ticker: 'SNH',
        RelativeStrength: -0.183765829,
        OffensiveStrength: -0.109660424,
        DefensiveStrength: -0.0741054,
        ClosePrice: 19.39
    },
    {
        Ticker: 'OMC',
        RelativeStrength: -0.184800729,
        OffensiveStrength: -0.09136222,
        DefensiveStrength: -0.0934385061,
        ClosePrice: 73.38
    },
    {
        Ticker: 'GT',
        RelativeStrength: -0.185784876,
        OffensiveStrength: -0.08251443,
        DefensiveStrength: -0.103270441,
        ClosePrice: 32.12
    },
    {
        Ticker: 'COTY',
        RelativeStrength: -0.187918082,
        OffensiveStrength: -0.0232349634,
        DefensiveStrength: -0.164683118,
        ClosePrice: 17.05
    },
    {
        Ticker: 'CSRA',
        RelativeStrength: -0.192037791,
        OffensiveStrength: -0.0318504125,
        DefensiveStrength: -0.160187379,
        ClosePrice: 28.69
    },
    {
        Ticker: 'SBNY',
        RelativeStrength: -0.192456454,
        OffensiveStrength: -0.09138817,
        DefensiveStrength: -0.101068288,
        ClosePrice: 136.24
    },
    {
        Ticker: 'ARD',
        RelativeStrength: -0.192472771,
        OffensiveStrength: -0.149318188,
        DefensiveStrength: -0.0431545824,
        ClosePrice: 19.92
    },
    {
        Ticker: 'FDC',
        RelativeStrength: -0.192726642,
        OffensiveStrength: -0.0300797373,
        DefensiveStrength: -0.1626469,
        ClosePrice: 16.29
    },
    {
        Ticker: 'TAP',
        RelativeStrength: -0.19379288,
        OffensiveStrength: -0.234032422,
        DefensiveStrength: 0.0402395353,
        ClosePrice: 79.21
    },
    {
        Ticker: 'ACC',
        RelativeStrength: -0.19491227,
        OffensiveStrength: -0.179396182,
        DefensiveStrength: -0.0155160874,
        ClosePrice: 42.8
    },
    {
        Ticker: 'ERIC',
        RelativeStrength: -0.195580453,
        OffensiveStrength: -0.0583123267,
        DefensiveStrength: -0.137268126,
        ClosePrice: 6.25
    },
    {
        Ticker: 'KHC',
        RelativeStrength: -0.203337759,
        OffensiveStrength: -0.163448527,
        DefensiveStrength: -0.03988923,
        ClosePrice: 81.21
    },
    {
        Ticker: 'KR',
        RelativeStrength: -0.203635946,
        OffensiveStrength: 0.07660143,
        DefensiveStrength: -0.280237377,
        ClosePrice: 25.67
    },
    {
        Ticker: 'WHR',
        RelativeStrength: -0.205617413,
        OffensiveStrength: -0.0616142154,
        DefensiveStrength: -0.1440032,
        ClosePrice: 167.46
    },
    {
        Ticker: 'CHD',
        RelativeStrength: -0.206800669,
        OffensiveStrength: -0.1917688,
        DefensiveStrength: -0.0150318816,
        ClosePrice: 46.84
    },
    {
        Ticker: 'FLS',
        RelativeStrength: -0.207481325,
        OffensiveStrength: -0.0262094587,
        DefensiveStrength: -0.181271866,
        ClosePrice: 42.39
    },
    {
        Ticker: 'SABR',
        RelativeStrength: -0.208475739,
        OffensiveStrength: -0.08165325,
        DefensiveStrength: -0.126822487,
        ClosePrice: 19.62
    },
    {
        Ticker: 'WAB',
        RelativeStrength: -0.210476667,
        OffensiveStrength: -0.115389839,
        DefensiveStrength: -0.09508683,
        ClosePrice: 76.3
    },
    {
        Ticker: 'MLM',
        RelativeStrength: -0.211611554,
        OffensiveStrength: 0.0433787853,
        DefensiveStrength: -0.254990339,
        ClosePrice: 202.65
    },
    {
        Ticker: 'MIC',
        RelativeStrength: -0.213974044,
        OffensiveStrength: -0.09689908,
        DefensiveStrength: -0.117074966,
        ClosePrice: 67.31
    },
    {
        Ticker: 'CELG',
        RelativeStrength: -0.214357749,
        OffensiveStrength: -0.29305315,
        DefensiveStrength: 0.0786954,
        ClosePrice: 102.14
    },
    {
        Ticker: 'WBA',
        RelativeStrength: -0.215086058,
        OffensiveStrength: -0.1910601,
        DefensiveStrength: -0.0240259618,
        ClosePrice: 71.45
    },
    {
        Ticker: 'CQP',
        RelativeStrength: -0.215883285,
        OffensiveStrength: -0.235161692,
        DefensiveStrength: 0.0192784,
        ClosePrice: 27.73
    },
    {
        Ticker: 'CPB',
        RelativeStrength: -0.216565669,
        OffensiveStrength: -0.220180959,
        DefensiveStrength: 0.00361528248,
        ClosePrice: 49.22
    },
    {
        Ticker: 'TSLA',
        RelativeStrength: -0.217600614,
        OffensiveStrength: -0.24376592,
        DefensiveStrength: 0.0261653066,
        ClosePrice: 306.53
    },
    {
        Ticker: 'VIA',
        RelativeStrength: -0.218719572,
        OffensiveStrength: -0.1942609,
        DefensiveStrength: -0.0244586766,
        ClosePrice: 34.2
    },
    {
        Ticker: 'AM',
        RelativeStrength: -0.222471148,
        OffensiveStrength: -0.137415588,
        DefensiveStrength: -0.08505556,
        ClosePrice: 28.58
    },
    {
        Ticker: 'SPB',
        RelativeStrength: -0.225179479,
        OffensiveStrength: -0.047994107,
        DefensiveStrength: -0.177185372,
        ClosePrice: 114.21
    },
    {
        Ticker: 'PM',
        RelativeStrength: -0.225714639,
        OffensiveStrength: -0.204496235,
        DefensiveStrength: -0.0212184042,
        ClosePrice: 103.71
    },
    {
        Ticker: 'EXPE',
        RelativeStrength: -0.226035178,
        OffensiveStrength: -0.122793816,
        DefensiveStrength: -0.103241354,
        ClosePrice: 122.7
    },
    {
        Ticker: 'MRK',
        RelativeStrength: -0.2262329,
        OffensiveStrength: -0.213273764,
        DefensiveStrength: -0.0129591376,
        ClosePrice: 55.87
    },
    {
        Ticker: 'HNP',
        RelativeStrength: -0.226936653,
        OffensiveStrength: -0.05182579,
        DefensiveStrength: -0.175110862,
        ClosePrice: 25.5
    },
    {
        Ticker: 'NUAN',
        RelativeStrength: -0.228367627,
        OffensiveStrength: -0.007960126,
        DefensiveStrength: -0.2204075,
        ClosePrice: 15.8
    },
    {
        Ticker: 'ABX',
        RelativeStrength: -0.23004204,
        OffensiveStrength: -0.419787765,
        DefensiveStrength: 0.189745724,
        ClosePrice: 14.07
    },
    {
        Ticker: 'BG',
        RelativeStrength: -0.231282443,
        OffensiveStrength: -0.128238291,
        DefensiveStrength: -0.103044152,
        ClosePrice: 67.14
    },
    {
        Ticker: 'WGP',
        RelativeStrength: -0.231597453,
        OffensiveStrength: -0.1858801,
        DefensiveStrength: -0.04571736,
        ClosePrice: 36.5
    },
    {
        Ticker: 'INCY',
        RelativeStrength: -0.232682928,
        OffensiveStrength: -0.181212679,
        DefensiveStrength: -0.05147025,
        ClosePrice: 97.94
    },
    {
        Ticker: 'HAS',
        RelativeStrength: -0.239466071,
        OffensiveStrength: -0.105453372,
        DefensiveStrength: -0.1340127,
        ClosePrice: 91.84
    },
    {
        Ticker: 'CLNS',
        RelativeStrength: -0.243276417,
        OffensiveStrength: -0.237366945,
        DefensiveStrength: -0.00590948,
        ClosePrice: 12.13
    },
    {
        Ticker: 'RE',
        RelativeStrength: -0.2444508,
        OffensiveStrength: -0.15647611,
        DefensiveStrength: -0.08797468,
        ClosePrice: 218.06
    },
    {
        Ticker: 'SRCL',
        RelativeStrength: -0.245474964,
        OffensiveStrength: -0.196494862,
        DefensiveStrength: -0.0489801019,
        ClosePrice: 66.94
    },
    {
        Ticker: 'PEGA',
        RelativeStrength: -0.247342378,
        OffensiveStrength: -0.00715993345,
        DefensiveStrength: -0.240182444,
        ClosePrice: 50.25
    },
    {
        Ticker: 'EFX',
        RelativeStrength: -0.248464182,
        OffensiveStrength: -0.211684376,
        DefensiveStrength: -0.036779806,
        ClosePrice: 112.93
    },
    {
        Ticker: 'NEU',
        RelativeStrength: -0.253956556,
        OffensiveStrength: -0.169717938,
        DefensiveStrength: -0.0842386,
        ClosePrice: 396.63
    },
    {
        Ticker: 'HCP',
        RelativeStrength: -0.2540259,
        OffensiveStrength: -0.193745062,
        DefensiveStrength: -0.0602808446,
        ClosePrice: 26.66
    },
    {
        Ticker: 'IPG',
        RelativeStrength: -0.258554757,
        OffensiveStrength: -0.119340062,
        DefensiveStrength: -0.1392147,
        ClosePrice: 20.09
    },
    {
        Ticker: 'OHI',
        RelativeStrength: -0.26292944,
        OffensiveStrength: -0.1337913,
        DefensiveStrength: -0.129138127,
        ClosePrice: 27.19
    },
    {
        Ticker: 'WES',
        RelativeStrength: -0.263252139,
        OffensiveStrength: -0.143913984,
        DefensiveStrength: -0.119338155,
        ClosePrice: 45.96
    },
    {
        Ticker: 'RRC',
        RelativeStrength: -0.2701108,
        OffensiveStrength: -0.09193977,
        DefensiveStrength: -0.178171024,
        ClosePrice: 18.5
    },
    {
        Ticker: 'UAL',
        RelativeStrength: -0.283650458,
        OffensiveStrength: -0.1373496,
        DefensiveStrength: -0.146300867,
        ClosePrice: 62.57
    },
    {
        Ticker: 'MAT',
        RelativeStrength: -0.285075247,
        OffensiveStrength: -0.404660463,
        DefensiveStrength: 0.119585223,
        ClosePrice: 17.26
    },
    {
        Ticker: 'SNAP',
        RelativeStrength: -0.2875855,
        OffensiveStrength: -0.247098133,
        DefensiveStrength: -0.04048735,
        ClosePrice: 13.87
    },
    {
        Ticker: 'VIAB',
        RelativeStrength: -0.2901225,
        OffensiveStrength: -0.142745748,
        DefensiveStrength: -0.147376761,
        ClosePrice: 28.4
    },
    {
        Ticker: 'PCG',
        RelativeStrength: -0.2917558,
        OffensiveStrength: -0.4103107,
        DefensiveStrength: 0.118554905,
        ClosePrice: 54.13
    },
    {
        Ticker: 'PAA',
        RelativeStrength: -0.2985388,
        OffensiveStrength: 0.0577331632,
        DefensiveStrength: -0.356271982,
        ClosePrice: 20.16
    },
    {
        Ticker: 'AAP',
        RelativeStrength: -0.302638322,
        OffensiveStrength: 0.00624588132,
        DefensiveStrength: -0.3088842,
        ClosePrice: 99.28
    },
    {
        Ticker: 'ETP',
        RelativeStrength: -0.303249031,
        OffensiveStrength: -0.169462651,
        DefensiveStrength: -0.13378638,
        ClosePrice: 16.53
    },
    {
        Ticker: 'NCR',
        RelativeStrength: -0.309423625,
        OffensiveStrength: -0.03769271,
        DefensiveStrength: -0.2717309,
        ClosePrice: 31.61
    },
    {
        Ticker: 'AXS',
        RelativeStrength: -0.312925041,
        OffensiveStrength: -0.134486347,
        DefensiveStrength: -0.178438678,
        ClosePrice: 51.64
    },
    {
        Ticker: 'REGN',
        RelativeStrength: -0.3142681,
        OffensiveStrength: -0.351375878,
        DefensiveStrength: 0.03710775,
        ClosePrice: 373.47
    },
    {
        Ticker: 'CAH',
        RelativeStrength: -0.320310533,
        OffensiveStrength: -0.192834243,
        DefensiveStrength: -0.1274763,
        ClosePrice: 58.9
    },
    {
        Ticker: 'DISH',
        RelativeStrength: -0.332317829,
        OffensiveStrength: -0.1611629,
        DefensiveStrength: -0.171154931,
        ClosePrice: 50.32
    },
    {
        Ticker: 'HSIC',
        RelativeStrength: -0.336830378,
        OffensiveStrength: -0.367477119,
        DefensiveStrength: 0.0306467265,
        ClosePrice: 70.66
    },
    {
        Ticker: 'ALK',
        RelativeStrength: -0.3527374,
        OffensiveStrength: -0.0287215412,
        DefensiveStrength: -0.324015856,
        ClosePrice: 66.91
    },
    {
        Ticker: 'S',
        RelativeStrength: -0.367018253,
        OffensiveStrength: -0.07322028,
        DefensiveStrength: -0.29379797,
        ClosePrice: 5.97
    },
    {
        Ticker: 'DISCA',
        RelativeStrength: -0.377093375,
        OffensiveStrength: -0.1629313,
        DefensiveStrength: -0.214162067,
        ClosePrice: 19.46
    },
    {
        Ticker: 'AGN',
        RelativeStrength: -0.383401215,
        OffensiveStrength: -0.289693356,
        DefensiveStrength: -0.0937078446,
        ClosePrice: 169.94
    },
    {
        Ticker: 'BPL',
        RelativeStrength: -0.3860314,
        OffensiveStrength: -0.174397647,
        DefensiveStrength: -0.211633727,
        ClosePrice: 46.67
    },
    {
        Ticker: 'DISCK',
        RelativeStrength: -0.393300354,
        OffensiveStrength: -0.173885435,
        DefensiveStrength: -0.219414935,
        ClosePrice: 18.4
    },
    {
        Ticker: 'ULTA',
        RelativeStrength: -0.409782618,
        OffensiveStrength: -0.1232225,
        DefensiveStrength: -0.286560118,
        ClosePrice: 212.58
    },
    {
        Ticker: 'VIPS',
        RelativeStrength: -0.4196467,
        OffensiveStrength: -0.164662331,
        DefensiveStrength: -0.254984379,
        ClosePrice: 8.41
    },
    {
        Ticker: 'INCR',
        RelativeStrength: -0.444072,
        OffensiveStrength: -0.225683868,
        DefensiveStrength: -0.218388125,
        ClosePrice: 37.85
    },
    {
        Ticker: 'CMG',
        RelativeStrength: -0.461574316,
        OffensiveStrength: -0.00509674847,
        DefensiveStrength: -0.456477582,
        ClosePrice: 307.59
    },
    {
        Ticker: 'SCG',
        RelativeStrength: -0.5150139,
        OffensiveStrength: -0.390621662,
        DefensiveStrength: -0.124392226,
        ClosePrice: 44.26
    },
    {
        Ticker: 'NWL',
        RelativeStrength: -0.5502427,
        OffensiveStrength: -0.5438988,
        DefensiveStrength: -0.00634389371,
        ClosePrice: 31.51
    },
    {
        Ticker: 'GE',
        RelativeStrength: -0.5570427,
        OffensiveStrength: -0.283755451,
        DefensiveStrength: -0.273287237,
        ClosePrice: 17.88
    },
    {
        Ticker: 'TSRO',
        RelativeStrength: -0.5585313,
        OffensiveStrength: -0.267410964,
        DefensiveStrength: -0.2911203,
        ClosePrice: 85.16
    },
    {
        Ticker: 'UAA',
        RelativeStrength: -0.5919377,
        OffensiveStrength: -0.422098815,
        DefensiveStrength: -0.16983889,
        ClosePrice: 13.15
    },
    {
        Ticker: 'EVHC',
        RelativeStrength: -0.595600963,
        OffensiveStrength: -0.4327289,
        DefensiveStrength: -0.162872061,
        ClosePrice: 30.74
    },
    {
        Ticker: 'CTL',
        RelativeStrength: -0.6756695,
        OffensiveStrength: -0.252119422,
        DefensiveStrength: -0.423550069,
        ClosePrice: 14.3
    }
];

export const rsStrongRsWeak: object[] = [
    {
        Date: '2016-12-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.370380372
            },
            {
                Type: 'RSWeak',
                Value: -0.276501477
            }
        ]
    },
    {
        Date: '2016-12-12T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3614795
            },
            {
                Type: 'RSWeak',
                Value: -0.277480036
            }
        ]
    },
    {
        Date: '2016-12-13T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.360373884
            },
            {
                Type: 'RSWeak',
                Value: -0.278278917
            }
        ]
    },
    {
        Date: '2016-12-14T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3525291
            },
            {
                Type: 'RSWeak',
                Value: -0.279694617
            }
        ]
    },
    {
        Date: '2016-12-15T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3870152
            },
            {
                Type: 'RSWeak',
                Value: -0.304278165
            }
        ]
    },
    {
        Date: '2016-12-16T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.4031082
            },
            {
                Type: 'RSWeak',
                Value: -0.315082848
            }
        ]
    },
    {
        Date: '2016-12-19T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.393136472
            },
            {
                Type: 'RSWeak',
                Value: -0.308693767
            }
        ]
    },
    {
        Date: '2016-12-20T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.385531
            },
            {
                Type: 'RSWeak',
                Value: -0.308383882
            }
        ]
    },
    {
        Date: '2016-12-21T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.380088717
            },
            {
                Type: 'RSWeak',
                Value: -0.306244671
            }
        ]
    },
    {
        Date: '2016-12-22T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.379884928
            },
            {
                Type: 'RSWeak',
                Value: -0.310254574
            }
        ]
    },
    {
        Date: '2016-12-23T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.398891062
            },
            {
                Type: 'RSWeak',
                Value: -0.318309933
            }
        ]
    },
    {
        Date: '2016-12-27T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.401102126
            },
            {
                Type: 'RSWeak',
                Value: -0.3195711
            }
        ]
    },
    {
        Date: '2016-12-28T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.386602849
            },
            {
                Type: 'RSWeak',
                Value: -0.310749769
            }
        ]
    },
    {
        Date: '2016-12-29T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3718781
            },
            {
                Type: 'RSWeak',
                Value: -0.2983494
            }
        ]
    },
    {
        Date: '2016-12-30T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.363350421
            },
            {
                Type: 'RSWeak',
                Value: -0.295686752
            }
        ]
    },
    {
        Date: '2017-01-03T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3470686
            },
            {
                Type: 'RSWeak',
                Value: -0.279682338
            }
        ]
    },
    {
        Date: '2017-01-04T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3562971
            },
            {
                Type: 'RSWeak',
                Value: -0.2776741
            }
        ]
    },
    {
        Date: '2017-01-05T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.342279673
            },
            {
                Type: 'RSWeak',
                Value: -0.266720742
            }
        ]
    },
    {
        Date: '2017-01-06T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3437541
            },
            {
                Type: 'RSWeak',
                Value: -0.271009058
            }
        ]
    },
    {
        Date: '2017-01-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3455485
            },
            {
                Type: 'RSWeak',
                Value: -0.271335334
            }
        ]
    },
    {
        Date: '2017-01-10T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.356607825
            },
            {
                Type: 'RSWeak',
                Value: -0.274866253
            }
        ]
    },
    {
        Date: '2017-01-11T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.353613764
            },
            {
                Type: 'RSWeak',
                Value: -0.275694549
            }
        ]
    },
    {
        Date: '2017-01-12T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3482255
            },
            {
                Type: 'RSWeak',
                Value: -0.274530441
            }
        ]
    },
    {
        Date: '2017-01-13T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.34839
            },
            {
                Type: 'RSWeak',
                Value: -0.2761701
            }
        ]
    },
    {
        Date: '2017-01-17T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.328089654
            },
            {
                Type: 'RSWeak',
                Value: -0.26762566
            }
        ]
    },
    {
        Date: '2017-01-18T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3256385
            },
            {
                Type: 'RSWeak',
                Value: -0.2643717
            }
        ]
    },
    {
        Date: '2017-01-19T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3220629
            },
            {
                Type: 'RSWeak',
                Value: -0.267931759
            }
        ]
    },
    {
        Date: '2017-01-20T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3240675
            },
            {
                Type: 'RSWeak',
                Value: -0.268734574
            }
        ]
    },
    {
        Date: '2017-01-23T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3250425
            },
            {
                Type: 'RSWeak',
                Value: -0.267683476
            }
        ]
    },
    {
        Date: '2017-01-24T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.334835559
            },
            {
                Type: 'RSWeak',
                Value: -0.281436682
            }
        ]
    },
    {
        Date: '2017-01-25T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.346490324
            },
            {
                Type: 'RSWeak',
                Value: -0.2864116
            }
        ]
    },
    {
        Date: '2017-01-26T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3428605
            },
            {
                Type: 'RSWeak',
                Value: -0.287676781
            }
        ]
    },
    {
        Date: '2017-01-27T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.338560969
            },
            {
                Type: 'RSWeak',
                Value: -0.283467084
            }
        ]
    },
    {
        Date: '2017-01-30T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3166928
            },
            {
                Type: 'RSWeak',
                Value: -0.269844681
            }
        ]
    },
    {
        Date: '2017-01-31T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.311997324
            },
            {
                Type: 'RSWeak',
                Value: -0.2600541
            }
        ]
    },
    {
        Date: '2017-02-01T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3197105
            },
            {
                Type: 'RSWeak',
                Value: -0.266474068
            }
        ]
    },
    {
        Date: '2017-02-02T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.318705946
            },
            {
                Type: 'RSWeak',
                Value: -0.264345825
            }
        ]
    },
    {
        Date: '2017-02-03T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3203683
            },
            {
                Type: 'RSWeak',
                Value: -0.268595755
            }
        ]
    },
    {
        Date: '2017-02-06T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3229363
            },
            {
                Type: 'RSWeak',
                Value: -0.268609375
            }
        ]
    },
    {
        Date: '2017-02-07T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.311118484
            },
            {
                Type: 'RSWeak',
                Value: -0.270053327
            }
        ]
    },
    {
        Date: '2017-02-08T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3088158
            },
            {
                Type: 'RSWeak',
                Value: -0.264618933
            }
        ]
    },
    {
        Date: '2017-02-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.314832151
            },
            {
                Type: 'RSWeak',
                Value: -0.265718579
            }
        ]
    },
    {
        Date: '2017-02-10T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.310413152
            },
            {
                Type: 'RSWeak',
                Value: -0.262979984
            }
        ]
    },
    {
        Date: '2017-02-13T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.315075278
            },
            {
                Type: 'RSWeak',
                Value: -0.265098155
            }
        ]
    },
    {
        Date: '2017-02-14T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.319567949
            },
            {
                Type: 'RSWeak',
                Value: -0.2658557
            }
        ]
    },
    {
        Date: '2017-02-15T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3177341
            },
            {
                Type: 'RSWeak',
                Value: -0.263781071
            }
        ]
    },
    {
        Date: '2017-02-16T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3167627
            },
            {
                Type: 'RSWeak',
                Value: -0.264020652
            }
        ]
    },
    {
        Date: '2017-02-17T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3159843
            },
            {
                Type: 'RSWeak',
                Value: -0.2625283
            }
        ]
    },
    {
        Date: '2017-02-21T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.313881427
            },
            {
                Type: 'RSWeak',
                Value: -0.2581135
            }
        ]
    },
    {
        Date: '2017-02-22T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.313559055
            },
            {
                Type: 'RSWeak',
                Value: -0.2587098
            }
        ]
    },
    {
        Date: '2017-02-23T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.302884042
            },
            {
                Type: 'RSWeak',
                Value: -0.2523797
            }
        ]
    },
    {
        Date: '2017-02-24T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.300914317
            },
            {
                Type: 'RSWeak',
                Value: -0.249606326
            }
        ]
    },
    {
        Date: '2017-02-27T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.310340643
            },
            {
                Type: 'RSWeak',
                Value: -0.2504534
            }
        ]
    },
    {
        Date: '2017-02-28T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3101043
            },
            {
                Type: 'RSWeak',
                Value: -0.2550246
            }
        ]
    },
    {
        Date: '2017-03-01T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3267121
            },
            {
                Type: 'RSWeak',
                Value: -0.271978766
            }
        ]
    },
    {
        Date: '2017-03-02T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.311769068
            },
            {
                Type: 'RSWeak',
                Value: -0.269091785
            }
        ]
    },
    {
        Date: '2017-03-03T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.312957138
            },
            {
                Type: 'RSWeak',
                Value: -0.271419734
            }
        ]
    },
    {
        Date: '2017-03-06T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.311038971
            },
            {
                Type: 'RSWeak',
                Value: -0.2713073
            }
        ]
    },
    {
        Date: '2017-03-07T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.305495352
            },
            {
                Type: 'RSWeak',
                Value: -0.277638465
            }
        ]
    },
    {
        Date: '2017-03-08T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.307279438
            },
            {
                Type: 'RSWeak',
                Value: -0.273772359
            }
        ]
    },
    {
        Date: '2017-03-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3037752
            },
            {
                Type: 'RSWeak',
                Value: -0.2759228
            }
        ]
    },
    {
        Date: '2017-03-10T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.298749059
            },
            {
                Type: 'RSWeak',
                Value: -0.272981137
            }
        ]
    },
    {
        Date: '2017-03-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3010419
            },
            {
                Type: 'RSWeak',
                Value: -0.276112229
            }
        ]
    },
    {
        Date: '2017-03-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.299202055
            },
            {
                Type: 'RSWeak',
                Value: -0.275055349
            }
        ]
    },
    {
        Date: '2017-03-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.29884395
            },
            {
                Type: 'RSWeak',
                Value: -0.2705864
            }
        ]
    },
    {
        Date: '2017-03-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.297750443
            },
            {
                Type: 'RSWeak',
                Value: -0.274881363
            }
        ]
    },
    {
        Date: '2017-03-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.296183318
            },
            {
                Type: 'RSWeak',
                Value: -0.2747379
            }
        ]
    },
    {
        Date: '2017-03-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.295028061
            },
            {
                Type: 'RSWeak',
                Value: -0.279425323
            }
        ]
    },
    {
        Date: '2017-03-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.281437337
            },
            {
                Type: 'RSWeak',
                Value: -0.274089366
            }
        ]
    },
    {
        Date: '2017-03-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.279765278
            },
            {
                Type: 'RSWeak',
                Value: -0.275439322
            }
        ]
    },
    {
        Date: '2017-03-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.282102823
            },
            {
                Type: 'RSWeak',
                Value: -0.273219049
            }
        ]
    },
    {
        Date: '2017-03-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.287289977
            },
            {
                Type: 'RSWeak',
                Value: -0.2718059
            }
        ]
    },
    {
        Date: '2017-03-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.282561064
            },
            {
                Type: 'RSWeak',
                Value: -0.2666736
            }
        ]
    },
    {
        Date: '2017-03-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2820557
            },
            {
                Type: 'RSWeak',
                Value: -0.266926676
            }
        ]
    },
    {
        Date: '2017-03-29T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2748
            },
            {
                Type: 'RSWeak',
                Value: -0.254381925
            }
        ]
    },
    {
        Date: '2017-03-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.272670746
            },
            {
                Type: 'RSWeak',
                Value: -0.258646935
            }
        ]
    },
    {
        Date: '2017-03-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2715798
            },
            {
                Type: 'RSWeak',
                Value: -0.255195171
            }
        ]
    },
    {
        Date: '2017-04-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.271401167
            },
            {
                Type: 'RSWeak',
                Value: -0.257820427
            }
        ]
    },
    {
        Date: '2017-04-04T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.268142372
            },
            {
                Type: 'RSWeak',
                Value: -0.2641758
            }
        ]
    },
    {
        Date: '2017-04-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.267313659
            },
            {
                Type: 'RSWeak',
                Value: -0.2647698
            }
        ]
    },
    {
        Date: '2017-04-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.270679474
            },
            {
                Type: 'RSWeak',
                Value: -0.261482567
            }
        ]
    },
    {
        Date: '2017-04-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.280270845
            },
            {
                Type: 'RSWeak',
                Value: -0.265433729
            }
        ]
    },
    {
        Date: '2017-04-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.27755037
            },
            {
                Type: 'RSWeak',
                Value: -0.256555557
            }
        ]
    },
    {
        Date: '2017-04-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.276656
            },
            {
                Type: 'RSWeak',
                Value: -0.2556857
            }
        ]
    },
    {
        Date: '2017-04-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.268772781
            },
            {
                Type: 'RSWeak',
                Value: -0.2512621
            }
        ]
    },
    {
        Date: '2017-04-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.267152429
            },
            {
                Type: 'RSWeak',
                Value: -0.2524636
            }
        ]
    },
    {
        Date: '2017-04-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.263659835
            },
            {
                Type: 'RSWeak',
                Value: -0.253594548
            }
        ]
    },
    {
        Date: '2017-04-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.263967574
            },
            {
                Type: 'RSWeak',
                Value: -0.254814655
            }
        ]
    },
    {
        Date: '2017-04-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.265216768
            },
            {
                Type: 'RSWeak',
                Value: -0.254362851
            }
        ]
    },
    {
        Date: '2017-04-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.27188015
            },
            {
                Type: 'RSWeak',
                Value: -0.254824877
            }
        ]
    },
    {
        Date: '2017-04-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2721638
            },
            {
                Type: 'RSWeak',
                Value: -0.2525605
            }
        ]
    },
    {
        Date: '2017-04-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2793143
            },
            {
                Type: 'RSWeak',
                Value: -0.260830551
            }
        ]
    },
    {
        Date: '2017-04-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.281873375
            },
            {
                Type: 'RSWeak',
                Value: -0.260626376
            }
        ]
    },
    {
        Date: '2017-04-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2837804
            },
            {
                Type: 'RSWeak',
                Value: -0.257711
            }
        ]
    },
    {
        Date: '2017-04-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.286340654
            },
            {
                Type: 'RSWeak',
                Value: -0.26525414
            }
        ]
    },
    {
        Date: '2017-04-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2902967
            },
            {
                Type: 'RSWeak',
                Value: -0.259033948
            }
        ]
    },
    {
        Date: '2017-05-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.297775
            },
            {
                Type: 'RSWeak',
                Value: -0.258091867
            }
        ]
    },
    {
        Date: '2017-05-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.287059933
            },
            {
                Type: 'RSWeak',
                Value: -0.254756272
            }
        ]
    },
    {
        Date: '2017-05-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.274920583
            },
            {
                Type: 'RSWeak',
                Value: -0.252892137
            }
        ]
    },
    {
        Date: '2017-05-04T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.275235623
            },
            {
                Type: 'RSWeak',
                Value: -0.2576597
            }
        ]
    },
    {
        Date: '2017-05-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.276055038
            },
            {
                Type: 'RSWeak',
                Value: -0.248065859
            }
        ]
    },
    {
        Date: '2017-05-08T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2759314
            },
            {
                Type: 'RSWeak',
                Value: -0.249059185
            }
        ]
    },
    {
        Date: '2017-05-09T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.278173029
            },
            {
                Type: 'RSWeak',
                Value: -0.247955874
            }
        ]
    },
    {
        Date: '2017-05-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2904805
            },
            {
                Type: 'RSWeak',
                Value: -0.2536728
            }
        ]
    },
    {
        Date: '2017-05-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.28511557
            },
            {
                Type: 'RSWeak',
                Value: -0.261903316
            }
        ]
    },
    {
        Date: '2017-05-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.285936
            },
            {
                Type: 'RSWeak',
                Value: -0.265932
            }
        ]
    },
    {
        Date: '2017-05-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2855832
            },
            {
                Type: 'RSWeak',
                Value: -0.262443
            }
        ]
    },
    {
        Date: '2017-05-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.296247423
            },
            {
                Type: 'RSWeak',
                Value: -0.267631352
            }
        ]
    },
    {
        Date: '2017-05-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.281543016
            },
            {
                Type: 'RSWeak',
                Value: -0.268090069
            }
        ]
    },
    {
        Date: '2017-05-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2891038
            },
            {
                Type: 'RSWeak',
                Value: -0.2717517
            }
        ]
    },
    {
        Date: '2017-05-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2839093
            },
            {
                Type: 'RSWeak',
                Value: -0.2708002
            }
        ]
    },
    {
        Date: '2017-05-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.289378345
            },
            {
                Type: 'RSWeak',
                Value: -0.2727478
            }
        ]
    },
    {
        Date: '2017-05-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.289627761
            },
            {
                Type: 'RSWeak',
                Value: -0.275422066
            }
        ]
    },
    {
        Date: '2017-05-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.293149918
            },
            {
                Type: 'RSWeak',
                Value: -0.2747252
            }
        ]
    },
    {
        Date: '2017-05-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3052331
            },
            {
                Type: 'RSWeak',
                Value: -0.3045459
            }
        ]
    },
    {
        Date: '2017-05-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.327709436
            },
            {
                Type: 'RSWeak',
                Value: -0.3120725
            }
        ]
    },
    {
        Date: '2017-05-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.325542778
            },
            {
                Type: 'RSWeak',
                Value: -0.317920685
            }
        ]
    },
    {
        Date: '2017-05-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.320172936
            },
            {
                Type: 'RSWeak',
                Value: -0.325543463
            }
        ]
    },
    {
        Date: '2017-06-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.321710229
            },
            {
                Type: 'RSWeak',
                Value: -0.321784437
            }
        ]
    },
    {
        Date: '2017-06-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.328231841
            },
            {
                Type: 'RSWeak',
                Value: -0.332155824
            }
        ]
    },
    {
        Date: '2017-06-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.325661242
            },
            {
                Type: 'RSWeak',
                Value: -0.332301885
            }
        ]
    },
    {
        Date: '2017-06-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3330305
            },
            {
                Type: 'RSWeak',
                Value: -0.328881264
            }
        ]
    },
    {
        Date: '2017-06-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.341456622
            },
            {
                Type: 'RSWeak',
                Value: -0.3359111
            }
        ]
    },
    {
        Date: '2017-06-08T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3404022
            },
            {
                Type: 'RSWeak',
                Value: -0.33606413
            }
        ]
    },
    {
        Date: '2017-06-09T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3076457
            },
            {
                Type: 'RSWeak',
                Value: -0.310271651
            }
        ]
    },
    {
        Date: '2017-06-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.294234246
            },
            {
                Type: 'RSWeak',
                Value: -0.3003395
            }
        ]
    },
    {
        Date: '2017-06-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.300291717
            },
            {
                Type: 'RSWeak',
                Value: -0.295343369
            }
        ]
    },
    {
        Date: '2017-06-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3015274
            },
            {
                Type: 'RSWeak',
                Value: -0.305012375
            }
        ]
    },
    {
        Date: '2017-06-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.304918379
            },
            {
                Type: 'RSWeak',
                Value: -0.317212939
            }
        ]
    },
    {
        Date: '2017-06-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.309966
            },
            {
                Type: 'RSWeak',
                Value: -0.316619337
            }
        ]
    },
    {
        Date: '2017-06-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3246479
            },
            {
                Type: 'RSWeak',
                Value: -0.326772332
            }
        ]
    },
    {
        Date: '2017-06-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.321158856
            },
            {
                Type: 'RSWeak',
                Value: -0.330930054
            }
        ]
    },
    {
        Date: '2017-06-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.332061261
            },
            {
                Type: 'RSWeak',
                Value: -0.3428843
            }
        ]
    },
    {
        Date: '2017-06-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.336410552
            },
            {
                Type: 'RSWeak',
                Value: -0.3393039
            }
        ]
    },
    {
        Date: '2017-06-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.339929849
            },
            {
                Type: 'RSWeak',
                Value: -0.327222347
            }
        ]
    },
    {
        Date: '2017-06-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.344954461
            },
            {
                Type: 'RSWeak',
                Value: -0.322614461
            }
        ]
    },
    {
        Date: '2017-06-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.329903156
            },
            {
                Type: 'RSWeak',
                Value: -0.320229053
            }
        ]
    },
    {
        Date: '2017-06-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3278122
            },
            {
                Type: 'RSWeak',
                Value: -0.322472781
            }
        ]
    },
    {
        Date: '2017-06-29T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.313670129
            },
            {
                Type: 'RSWeak',
                Value: -0.306967
            }
        ]
    },
    {
        Date: '2017-06-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.309942722
            },
            {
                Type: 'RSWeak',
                Value: -0.301173449
            }
        ]
    },
    {
        Date: '2017-07-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.287846327
            },
            {
                Type: 'RSWeak',
                Value: -0.2817351
            }
        ]
    },
    {
        Date: '2017-07-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.29477343
            },
            {
                Type: 'RSWeak',
                Value: -0.303454727
            }
        ]
    },
    {
        Date: '2017-07-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.296201825
            },
            {
                Type: 'RSWeak',
                Value: -0.3106851
            }
        ]
    },
    {
        Date: '2017-07-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.300564557
            },
            {
                Type: 'RSWeak',
                Value: -0.3176028
            }
        ]
    },
    {
        Date: '2017-07-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.301041365
            },
            {
                Type: 'RSWeak',
                Value: -0.308960348
            }
        ]
    },
    {
        Date: '2017-07-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.312550783
            },
            {
                Type: 'RSWeak',
                Value: -0.314585447
            }
        ]
    },
    {
        Date: '2017-07-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.317441344
            },
            {
                Type: 'RSWeak',
                Value: -0.315939248
            }
        ]
    },
    {
        Date: '2017-07-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3126058
            },
            {
                Type: 'RSWeak',
                Value: -0.3074806
            }
        ]
    },
    {
        Date: '2017-07-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3159848
            },
            {
                Type: 'RSWeak',
                Value: -0.305966675
            }
        ]
    },
    {
        Date: '2017-07-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3112463
            },
            {
                Type: 'RSWeak',
                Value: -0.300213426
            }
        ]
    },
    {
        Date: '2017-07-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.315351665
            },
            {
                Type: 'RSWeak',
                Value: -0.305268884
            }
        ]
    },
    {
        Date: '2017-07-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3119981
            },
            {
                Type: 'RSWeak',
                Value: -0.29596585
            }
        ]
    },
    {
        Date: '2017-07-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.320485
            },
            {
                Type: 'RSWeak',
                Value: -0.2988947
            }
        ]
    },
    {
        Date: '2017-07-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.313342452
            },
            {
                Type: 'RSWeak',
                Value: -0.29889223
            }
        ]
    },
    {
        Date: '2017-07-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3258009
            },
            {
                Type: 'RSWeak',
                Value: -0.2949404
            }
        ]
    },
    {
        Date: '2017-07-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.312180251
            },
            {
                Type: 'RSWeak',
                Value: -0.280790627
            }
        ]
    },
    {
        Date: '2017-07-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.312175
            },
            {
                Type: 'RSWeak',
                Value: -0.2820068
            }
        ]
    },
    {
        Date: '2017-07-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.299233973
            },
            {
                Type: 'RSWeak',
                Value: -0.269942164
            }
        ]
    },
    {
        Date: '2017-07-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.304384768
            },
            {
                Type: 'RSWeak',
                Value: -0.276859134
            }
        ]
    },
    {
        Date: '2017-07-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.298374921
            },
            {
                Type: 'RSWeak',
                Value: -0.2728778
            }
        ]
    },
    {
        Date: '2017-08-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2998639
            },
            {
                Type: 'RSWeak',
                Value: -0.272114068
            }
        ]
    },
    {
        Date: '2017-08-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.296474427
            },
            {
                Type: 'RSWeak',
                Value: -0.274545372
            }
        ]
    },
    {
        Date: '2017-08-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2958804
            },
            {
                Type: 'RSWeak',
                Value: -0.287438065
            }
        ]
    },
    {
        Date: '2017-08-04T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.29522562
            },
            {
                Type: 'RSWeak',
                Value: -0.28512913
            }
        ]
    },
    {
        Date: '2017-08-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.305639237
            },
            {
                Type: 'RSWeak',
                Value: -0.292717516
            }
        ]
    },
    {
        Date: '2017-08-08T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3033401
            },
            {
                Type: 'RSWeak',
                Value: -0.299942255
            }
        ]
    },
    {
        Date: '2017-08-09T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.298871756
            },
            {
                Type: 'RSWeak',
                Value: -0.2965197
            }
        ]
    },
    {
        Date: '2017-08-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.292016149
            },
            {
                Type: 'RSWeak',
                Value: -0.291680634
            }
        ]
    },
    {
        Date: '2017-08-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2992797
            },
            {
                Type: 'RSWeak',
                Value: -0.292335331
            }
        ]
    },
    {
        Date: '2017-08-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.294523418
            },
            {
                Type: 'RSWeak',
                Value: -0.3008907
            }
        ]
    },
    {
        Date: '2017-08-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.299953461
            },
            {
                Type: 'RSWeak',
                Value: -0.2986399
            }
        ]
    },
    {
        Date: '2017-08-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.308169037
            },
            {
                Type: 'RSWeak',
                Value: -0.298445851
            }
        ]
    },
    {
        Date: '2017-08-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2991077
            },
            {
                Type: 'RSWeak',
                Value: -0.293257415
            }
        ]
    },
    {
        Date: '2017-08-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2988809
            },
            {
                Type: 'RSWeak',
                Value: -0.2953192
            }
        ]
    },
    {
        Date: '2017-08-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.30388236
            },
            {
                Type: 'RSWeak',
                Value: -0.3015406
            }
        ]
    },
    {
        Date: '2017-08-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.307504267
            },
            {
                Type: 'RSWeak',
                Value: -0.305455685
            }
        ]
    },
    {
        Date: '2017-08-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3097839
            },
            {
                Type: 'RSWeak',
                Value: -0.299256474
            }
        ]
    },
    {
        Date: '2017-08-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.312533766
            },
            {
                Type: 'RSWeak',
                Value: -0.299422115
            }
        ]
    },
    {
        Date: '2017-08-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3074096
            },
            {
                Type: 'RSWeak',
                Value: -0.296071172
            }
        ]
    },
    {
        Date: '2017-08-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.312249422
            },
            {
                Type: 'RSWeak',
                Value: -0.296122044
            }
        ]
    },
    {
        Date: '2017-08-29T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.308042139
            },
            {
                Type: 'RSWeak',
                Value: -0.28941825
            }
        ]
    },
    {
        Date: '2017-08-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3099254
            },
            {
                Type: 'RSWeak',
                Value: -0.290981978
            }
        ]
    },
    {
        Date: '2017-08-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.313934535
            },
            {
                Type: 'RSWeak',
                Value: -0.288213551
            }
        ]
    },
    {
        Date: '2017-09-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.308855385
            },
            {
                Type: 'RSWeak',
                Value: -0.2841938
            }
        ]
    },
    {
        Date: '2017-09-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.314800382
            },
            {
                Type: 'RSWeak',
                Value: -0.28164196
            }
        ]
    },
    {
        Date: '2017-09-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.307735324
            },
            {
                Type: 'RSWeak',
                Value: -0.274867773
            }
        ]
    },
    {
        Date: '2017-09-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.315473527
            },
            {
                Type: 'RSWeak',
                Value: -0.281684518
            }
        ]
    },
    {
        Date: '2017-09-08T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3116916
            },
            {
                Type: 'RSWeak',
                Value: -0.287574172
            }
        ]
    },
    {
        Date: '2017-09-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.311130852
            },
            {
                Type: 'RSWeak',
                Value: -0.285524517
            }
        ]
    },
    {
        Date: '2017-09-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3207595
            },
            {
                Type: 'RSWeak',
                Value: -0.277586132
            }
        ]
    },
    {
        Date: '2017-09-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.315691978
            },
            {
                Type: 'RSWeak',
                Value: -0.2662351
            }
        ]
    },
    {
        Date: '2017-09-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.316532075
            },
            {
                Type: 'RSWeak',
                Value: -0.266939759
            }
        ]
    },
    {
        Date: '2017-09-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.311932981
            },
            {
                Type: 'RSWeak',
                Value: -0.266818881
            }
        ]
    },
    {
        Date: '2017-09-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3083322
            },
            {
                Type: 'RSWeak',
                Value: -0.273565352
            }
        ]
    },
    {
        Date: '2017-09-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3130548
            },
            {
                Type: 'RSWeak',
                Value: -0.2809748
            }
        ]
    },
    {
        Date: '2017-09-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.311722159
            },
            {
                Type: 'RSWeak',
                Value: -0.279856384
            }
        ]
    },
    {
        Date: '2017-09-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.312159121
            },
            {
                Type: 'RSWeak',
                Value: -0.2773761
            }
        ]
    },
    {
        Date: '2017-09-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.309869051
            },
            {
                Type: 'RSWeak',
                Value: -0.276671022
            }
        ]
    },
    {
        Date: '2017-09-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.294294119
            },
            {
                Type: 'RSWeak',
                Value: -0.265893757
            }
        ]
    },
    {
        Date: '2017-09-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.292033255
            },
            {
                Type: 'RSWeak',
                Value: -0.26536116
            }
        ]
    },
    {
        Date: '2017-09-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.303282171
            },
            {
                Type: 'RSWeak',
                Value: -0.2665047
            }
        ]
    },
    {
        Date: '2017-09-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.304938585
            },
            {
                Type: 'RSWeak',
                Value: -0.270357519
            }
        ]
    },
    {
        Date: '2017-09-29T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.306361437
            },
            {
                Type: 'RSWeak',
                Value: -0.270896137
            }
        ]
    },
    {
        Date: '2017-10-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.308159471
            },
            {
                Type: 'RSWeak',
                Value: -0.273690075
            }
        ]
    },
    {
        Date: '2017-10-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3111182
            },
            {
                Type: 'RSWeak',
                Value: -0.273257256
            }
        ]
    },
    {
        Date: '2017-10-04T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.311438471
            },
            {
                Type: 'RSWeak',
                Value: -0.2741398
            }
        ]
    },
    {
        Date: '2017-10-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.309747756
            },
            {
                Type: 'RSWeak',
                Value: -0.2740979
            }
        ]
    },
    {
        Date: '2017-10-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.310051829
            },
            {
                Type: 'RSWeak',
                Value: -0.2732937
            }
        ]
    },
    {
        Date: '2017-10-09T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.313224554
            },
            {
                Type: 'RSWeak',
                Value: -0.2788756
            }
        ]
    },
    {
        Date: '2017-10-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.305392653
            },
            {
                Type: 'RSWeak',
                Value: -0.274483323
            }
        ]
    },
    {
        Date: '2017-10-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.304796726
            },
            {
                Type: 'RSWeak',
                Value: -0.275792122
            }
        ]
    },
    {
        Date: '2017-10-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3068381
            },
            {
                Type: 'RSWeak',
                Value: -0.278169066
            }
        ]
    },
    {
        Date: '2017-10-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3042452
            },
            {
                Type: 'RSWeak',
                Value: -0.269603372
            }
        ]
    },
    {
        Date: '2017-10-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.302778155
            },
            {
                Type: 'RSWeak',
                Value: -0.2725023
            }
        ]
    },
    {
        Date: '2017-10-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.297450244
            },
            {
                Type: 'RSWeak',
                Value: -0.267404974
            }
        ]
    },
    {
        Date: '2017-10-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.288148075
            },
            {
                Type: 'RSWeak',
                Value: -0.266279429
            }
        ]
    },
    {
        Date: '2017-10-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2818604
            },
            {
                Type: 'RSWeak',
                Value: -0.268528044
            }
        ]
    },
    {
        Date: '2017-10-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.28291
            },
            {
                Type: 'RSWeak',
                Value: -0.267731547
            }
        ]
    },
    {
        Date: '2017-10-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.280803829
            },
            {
                Type: 'RSWeak',
                Value: -0.275423437
            }
        ]
    },
    {
        Date: '2017-10-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.288271338
            },
            {
                Type: 'RSWeak',
                Value: -0.2741125
            }
        ]
    },
    {
        Date: '2017-10-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.278207928
            },
            {
                Type: 'RSWeak',
                Value: -0.2716353
            }
        ]
    },
    {
        Date: '2017-10-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.279449582
            },
            {
                Type: 'RSWeak',
                Value: -0.272169322
            }
        ]
    },
    {
        Date: '2017-10-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.289688915
            },
            {
                Type: 'RSWeak',
                Value: -0.281315327
            }
        ]
    },
    {
        Date: '2017-10-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.284614652
            },
            {
                Type: 'RSWeak',
                Value: -0.281098038
            }
        ]
    },
    {
        Date: '2017-10-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.285219252
            },
            {
                Type: 'RSWeak',
                Value: -0.283121884
            }
        ]
    },
    {
        Date: '2017-11-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2846566
            },
            {
                Type: 'RSWeak',
                Value: -0.279661328
            }
        ]
    },
    {
        Date: '2017-11-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.294001728
            },
            {
                Type: 'RSWeak',
                Value: -0.298062325
            }
        ]
    },
    {
        Date: '2017-11-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.292312026
            },
            {
                Type: 'RSWeak',
                Value: -0.294693172
            }
        ]
    },
    {
        Date: '2017-11-06T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.287953675
            },
            {
                Type: 'RSWeak',
                Value: -0.293002784
            }
        ]
    },
    {
        Date: '2017-11-07T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.298054844
            },
            {
                Type: 'RSWeak',
                Value: -0.295508355
            }
        ]
    },
    {
        Date: '2017-11-08T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2996151
            },
            {
                Type: 'RSWeak',
                Value: -0.3017812
            }
        ]
    },
    {
        Date: '2017-11-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.294974267
            },
            {
                Type: 'RSWeak',
                Value: -0.29621923
            }
        ]
    },
    {
        Date: '2017-11-10T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.292196333
            },
            {
                Type: 'RSWeak',
                Value: -0.293807983
            }
        ]
    },
    {
        Date: '2017-11-13T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2933557
            },
            {
                Type: 'RSWeak',
                Value: -0.298226953
            }
        ]
    },
    {
        Date: '2017-11-14T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.292314827
            },
            {
                Type: 'RSWeak',
                Value: -0.3004694
            }
        ]
    },
    {
        Date: '2017-11-15T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.29328686
            },
            {
                Type: 'RSWeak',
                Value: -0.294931561
            }
        ]
    },
    {
        Date: '2017-11-16T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.2986058
            },
            {
                Type: 'RSWeak',
                Value: -0.2905587
            }
        ]
    },
    {
        Date: '2017-11-17T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.303726375
            },
            {
                Type: 'RSWeak',
                Value: -0.284682423
            }
        ]
    },
    {
        Date: '2017-11-20T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.3104918
            },
            {
                Type: 'RSWeak',
                Value: -0.29270637
            }
        ]
    },
    {
        Date: '2017-11-21T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.313384652
            },
            {
                Type: 'RSWeak',
                Value: -0.29836303
            }
        ]
    },
    {
        Date: '2017-11-22T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.309692562
            },
            {
                Type: 'RSWeak',
                Value: -0.291986048
            }
        ]
    },
    {
        Date: '2017-11-24T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.311348557
            },
            {
                Type: 'RSWeak',
                Value: -0.295719
            }
        ]
    },
    {
        Date: '2017-11-27T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.302051634
            },
            {
                Type: 'RSWeak',
                Value: -0.294848084
            }
        ]
    },
    {
        Date: '2017-11-28T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.29985252
            },
            {
                Type: 'RSWeak',
                Value: -0.2902894
            }
        ]
    },
    {
        Date: '2017-11-29T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.285259336
            },
            {
                Type: 'RSWeak',
                Value: -0.276273936
            }
        ]
    },
    {
        Date: '2017-11-30T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.289711952
            },
            {
                Type: 'RSWeak',
                Value: -0.272264779
            }
        ]
    },
    {
        Date: '2017-12-01T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSStr',
                Value: 0.292002171
            },
            {
                Type: 'RSWeak',
                Value: -0.272361845
            }
        ]
    }
];

export const rss: SymbolDp[] = [
    {
        Date: '2016-12-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6468818
            }
        ]
    },
    {
        Date: '2016-12-12T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6389595
            }
        ]
    },
    {
        Date: '2016-12-13T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6386528
            }
        ]
    },
    {
        Date: '2016-12-14T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6322237
            }
        ]
    },
    {
        Date: '2016-12-15T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.691293359
            }
        ]
    },
    {
        Date: '2016-12-16T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.718191
            }
        ]
    },
    {
        Date: '2016-12-19T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.701830268
            }
        ]
    },
    {
        Date: '2016-12-20T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6939149
            }
        ]
    },
    {
        Date: '2016-12-21T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6863334
            }
        ]
    },
    {
        Date: '2016-12-22T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.690139532
            }
        ]
    },
    {
        Date: '2016-12-23T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.717201
            }
        ]
    },
    {
        Date: '2016-12-27T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.7206732
            }
        ]
    },
    {
        Date: '2016-12-28T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.697352648
            }
        ]
    },
    {
        Date: '2016-12-29T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6702275
            }
        ]
    },
    {
        Date: '2016-12-30T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6590372
            }
        ]
    },
    {
        Date: '2017-01-03T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.626750946
            }
        ]
    },
    {
        Date: '2017-01-04T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6339712
            }
        ]
    },
    {
        Date: '2017-01-05T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.609000444
            }
        ]
    },
    {
        Date: '2017-01-06T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.614763141
            }
        ]
    },
    {
        Date: '2017-01-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6168839
            }
        ]
    },
    {
        Date: '2017-01-10T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6314741
            }
        ]
    },
    {
        Date: '2017-01-11T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.629308343
            }
        ]
    },
    {
        Date: '2017-01-12T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.622755945
            }
        ]
    },
    {
        Date: '2017-01-13T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6245601
            }
        ]
    },
    {
        Date: '2017-01-17T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5957153
            }
        ]
    },
    {
        Date: '2017-01-18T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.590010166
            }
        ]
    },
    {
        Date: '2017-01-19T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.589994669
            }
        ]
    },
    {
        Date: '2017-01-20T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.592802048
            }
        ]
    },
    {
        Date: '2017-01-23T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.592726
            }
        ]
    },
    {
        Date: '2017-01-24T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6162722
            }
        ]
    },
    {
        Date: '2017-01-25T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6329019
            }
        ]
    },
    {
        Date: '2017-01-26T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6305373
            }
        ]
    },
    {
        Date: '2017-01-27T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.622028053
            }
        ]
    },
    {
        Date: '2017-01-30T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5865375
            }
        ]
    },
    {
        Date: '2017-01-31T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5720514
            }
        ]
    },
    {
        Date: '2017-02-01T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.586184561
            }
        ]
    },
    {
        Date: '2017-02-02T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5830518
            }
        ]
    },
    {
        Date: '2017-02-03T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.588964045
            }
        ]
    },
    {
        Date: '2017-02-06T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5915457
            }
        ]
    },
    {
        Date: '2017-02-07T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5811718
            }
        ]
    },
    {
        Date: '2017-02-08T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5734347
            }
        ]
    },
    {
        Date: '2017-02-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.58055073
            }
        ]
    },
    {
        Date: '2017-02-10T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5733931
            }
        ]
    },
    {
        Date: '2017-02-13T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.580173433
            }
        ]
    },
    {
        Date: '2017-02-14T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.585423648
            }
        ]
    },
    {
        Date: '2017-02-15T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5815152
            }
        ]
    },
    {
        Date: '2017-02-16T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.580783367
            }
        ]
    },
    {
        Date: '2017-02-17T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5785126
            }
        ]
    },
    {
        Date: '2017-02-21T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5719949
            }
        ]
    },
    {
        Date: '2017-02-22T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.572268844
            }
        ]
    },
    {
        Date: '2017-02-23T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.555263758
            }
        ]
    },
    {
        Date: '2017-02-24T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.550520658
            }
        ]
    },
    {
        Date: '2017-02-27T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.560794055
            }
        ]
    },
    {
        Date: '2017-02-28T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5651289
            }
        ]
    },
    {
        Date: '2017-03-01T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.598690867
            }
        ]
    },
    {
        Date: '2017-03-02T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.580860853
            }
        ]
    },
    {
        Date: '2017-03-03T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5843769
            }
        ]
    },
    {
        Date: '2017-03-06T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.582346261
            }
        ]
    },
    {
        Date: '2017-03-07T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5831338
            }
        ]
    },
    {
        Date: '2017-03-08T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5810518
            }
        ]
    },
    {
        Date: '2017-03-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.579697967
            }
        ]
    },
    {
        Date: '2017-03-10T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5717302
            }
        ]
    },
    {
        Date: '2017-03-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.57715416
            }
        ]
    },
    {
        Date: '2017-03-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5742574
            }
        ]
    },
    {
        Date: '2017-03-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.569430351
            }
        ]
    },
    {
        Date: '2017-03-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.572631836
            }
        ]
    },
    {
        Date: '2017-03-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5709212
            }
        ]
    },
    {
        Date: '2017-03-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.574453354
            }
        ]
    },
    {
        Date: '2017-03-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.555526733
            }
        ]
    },
    {
        Date: '2017-03-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.55520463
            }
        ]
    },
    {
        Date: '2017-03-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5553219
            }
        ]
    },
    {
        Date: '2017-03-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.55909586
            }
        ]
    },
    {
        Date: '2017-03-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5492346
            }
        ]
    },
    {
        Date: '2017-03-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5489824
            }
        ]
    },
    {
        Date: '2017-03-29T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.529181957
            }
        ]
    },
    {
        Date: '2017-03-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5313177
            }
        ]
    },
    {
        Date: '2017-03-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.526775
            }
        ]
    },
    {
        Date: '2017-04-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5292216
            }
        ]
    },
    {
        Date: '2017-04-04T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5323182
            }
        ]
    },
    {
        Date: '2017-04-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.532083452
            }
        ]
    },
    {
        Date: '2017-04-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5321621
            }
        ]
    },
    {
        Date: '2017-04-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5457046
            }
        ]
    },
    {
        Date: '2017-04-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5341059
            }
        ]
    },
    {
        Date: '2017-04-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5323417
            }
        ]
    },
    {
        Date: '2017-04-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5200349
            }
        ]
    },
    {
        Date: '2017-04-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.519616
            }
        ]
    },
    {
        Date: '2017-04-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.517254353
            }
        ]
    },
    {
        Date: '2017-04-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.518782258
            }
        ]
    },
    {
        Date: '2017-04-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.519579649
            }
        ]
    },
    {
        Date: '2017-04-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.526705
            }
        ]
    },
    {
        Date: '2017-04-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5247243
            }
        ]
    },
    {
        Date: '2017-04-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.540144861
            }
        ]
    },
    {
        Date: '2017-04-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5424998
            }
        ]
    },
    {
        Date: '2017-04-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5414914
            }
        ]
    },
    {
        Date: '2017-04-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5515948
            }
        ]
    },
    {
        Date: '2017-04-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.549330652
            }
        ]
    },
    {
        Date: '2017-05-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.555866838
            }
        ]
    },
    {
        Date: '2017-05-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.541816235
            }
        ]
    },
    {
        Date: '2017-05-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5278127
            }
        ]
    },
    {
        Date: '2017-05-04T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5328953
            }
        ]
    },
    {
        Date: '2017-05-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5241209
            }
        ]
    },
    {
        Date: '2017-05-08T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.524990559
            }
        ]
    },
    {
        Date: '2017-05-09T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5261289
            }
        ]
    },
    {
        Date: '2017-05-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.544153333
            }
        ]
    },
    {
        Date: '2017-05-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5470189
            }
        ]
    },
    {
        Date: '2017-05-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.551867962
            }
        ]
    },
    {
        Date: '2017-05-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5480262
            }
        ]
    },
    {
        Date: '2017-05-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5638788
            }
        ]
    },
    {
        Date: '2017-05-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5496331
            }
        ]
    },
    {
        Date: '2017-05-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5608555
            }
        ]
    },
    {
        Date: '2017-05-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5547095
            }
        ]
    },
    {
        Date: '2017-05-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.56212616
            }
        ]
    },
    {
        Date: '2017-05-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5650498
            }
        ]
    },
    {
        Date: '2017-05-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.567875147
            }
        ]
    },
    {
        Date: '2017-05-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.609779
            }
        ]
    },
    {
        Date: '2017-05-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.639781952
            }
        ]
    },
    {
        Date: '2017-05-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6434635
            }
        ]
    },
    {
        Date: '2017-05-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6457164
            }
        ]
    },
    {
        Date: '2017-06-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.643494666
            }
        ]
    },
    {
        Date: '2017-06-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.660387635
            }
        ]
    },
    {
        Date: '2017-06-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.657963157
            }
        ]
    },
    {
        Date: '2017-06-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6619117
            }
        ]
    },
    {
        Date: '2017-06-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6773677
            }
        ]
    },
    {
        Date: '2017-06-08T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.676466346
            }
        ]
    },
    {
        Date: '2017-06-09T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.617917359
            }
        ]
    },
    {
        Date: '2017-06-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.594573736
            }
        ]
    },
    {
        Date: '2017-06-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.595635056
            }
        ]
    },
    {
        Date: '2017-06-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6065398
            }
        ]
    },
    {
        Date: '2017-06-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.622131348
            }
        ]
    },
    {
        Date: '2017-06-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.626585364
            }
        ]
    },
    {
        Date: '2017-06-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.651420236
            }
        ]
    },
    {
        Date: '2017-06-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6520889
            }
        ]
    },
    {
        Date: '2017-06-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6749456
            }
        ]
    },
    {
        Date: '2017-06-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6757145
            }
        ]
    },
    {
        Date: '2017-06-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.667152166
            }
        ]
    },
    {
        Date: '2017-06-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6675689
            }
        ]
    },
    {
        Date: '2017-06-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6501322
            }
        ]
    },
    {
        Date: '2017-06-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.650285
            }
        ]
    },
    {
        Date: '2017-06-29T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6206371
            }
        ]
    },
    {
        Date: '2017-06-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6111162
            }
        ]
    },
    {
        Date: '2017-07-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5695814
            }
        ]
    },
    {
        Date: '2017-07-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.598228157
            }
        ]
    },
    {
        Date: '2017-07-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6068869
            }
        ]
    },
    {
        Date: '2017-07-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6181674
            }
        ]
    },
    {
        Date: '2017-07-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6100017
            }
        ]
    },
    {
        Date: '2017-07-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.62713623
            }
        ]
    },
    {
        Date: '2017-07-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6333806
            }
        ]
    },
    {
        Date: '2017-07-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.620086432
            }
        ]
    },
    {
        Date: '2017-07-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.621951461
            }
        ]
    },
    {
        Date: '2017-07-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.611459732
            }
        ]
    },
    {
        Date: '2017-07-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.620620549
            }
        ]
    },
    {
        Date: '2017-07-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6079639
            }
        ]
    },
    {
        Date: '2017-07-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6193797
            }
        ]
    },
    {
        Date: '2017-07-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6122347
            }
        ]
    },
    {
        Date: '2017-07-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6207413
            }
        ]
    },
    {
        Date: '2017-07-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.592970848
            }
        ]
    },
    {
        Date: '2017-07-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5941818
            }
        ]
    },
    {
        Date: '2017-07-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.569176137
            }
        ]
    },
    {
        Date: '2017-07-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5812439
            }
        ]
    },
    {
        Date: '2017-07-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5712527
            }
        ]
    },
    {
        Date: '2017-08-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.571978
            }
        ]
    },
    {
        Date: '2017-08-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.571019769
            }
        ]
    },
    {
        Date: '2017-08-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5833185
            }
        ]
    },
    {
        Date: '2017-08-04T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.58035475
            }
        ]
    },
    {
        Date: '2017-08-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5983567
            }
        ]
    },
    {
        Date: '2017-08-08T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.603282332
            }
        ]
    },
    {
        Date: '2017-08-09T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.595391452
            }
        ]
    },
    {
        Date: '2017-08-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5836968
            }
        ]
    },
    {
        Date: '2017-08-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.591615
            }
        ]
    },
    {
        Date: '2017-08-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.595414162
            }
        ]
    },
    {
        Date: '2017-08-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.598593354
            }
        ]
    },
    {
        Date: '2017-08-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6066149
            }
        ]
    },
    {
        Date: '2017-08-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.592365146
            }
        ]
    },
    {
        Date: '2017-08-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.594200134
            }
        ]
    },
    {
        Date: '2017-08-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.605423
            }
        ]
    },
    {
        Date: '2017-08-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.61296
            }
        ]
    },
    {
        Date: '2017-08-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6090404
            }
        ]
    },
    {
        Date: '2017-08-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6119559
            }
        ]
    },
    {
        Date: '2017-08-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6034808
            }
        ]
    },
    {
        Date: '2017-08-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6083715
            }
        ]
    },
    {
        Date: '2017-08-29T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5974604
            }
        ]
    },
    {
        Date: '2017-08-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6009074
            }
        ]
    },
    {
        Date: '2017-08-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.602148056
            }
        ]
    },
    {
        Date: '2017-09-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.593049169
            }
        ]
    },
    {
        Date: '2017-09-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.596442342
            }
        ]
    },
    {
        Date: '2017-09-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5826031
            }
        ]
    },
    {
        Date: '2017-09-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5971581
            }
        ]
    },
    {
        Date: '2017-09-08T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5992658
            }
        ]
    },
    {
        Date: '2017-09-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.596655369
            }
        ]
    },
    {
        Date: '2017-09-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.598345637
            }
        ]
    },
    {
        Date: '2017-09-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.581927061
            }
        ]
    },
    {
        Date: '2017-09-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.583471835
            }
        ]
    },
    {
        Date: '2017-09-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.578751862
            }
        ]
    },
    {
        Date: '2017-09-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.581897557
            }
        ]
    },
    {
        Date: '2017-09-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5940296
            }
        ]
    },
    {
        Date: '2017-09-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.591578543
            }
        ]
    },
    {
        Date: '2017-09-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.589535236
            }
        ]
    },
    {
        Date: '2017-09-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5865401
            }
        ]
    },
    {
        Date: '2017-09-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5601879
            }
        ]
    },
    {
        Date: '2017-09-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5573944
            }
        ]
    },
    {
        Date: '2017-09-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5697869
            }
        ]
    },
    {
        Date: '2017-09-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5752961
            }
        ]
    },
    {
        Date: '2017-09-29T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5772576
            }
        ]
    },
    {
        Date: '2017-10-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5818496
            }
        ]
    },
    {
        Date: '2017-10-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.584375441
            }
        ]
    },
    {
        Date: '2017-10-04T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.585578263
            }
        ]
    },
    {
        Date: '2017-10-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5838456
            }
        ]
    },
    {
        Date: '2017-10-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.583345532
            }
        ]
    },
    {
        Date: '2017-10-09T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.592100143
            }
        ]
    },
    {
        Date: '2017-10-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.579875946
            }
        ]
    },
    {
        Date: '2017-10-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5805888
            }
        ]
    },
    {
        Date: '2017-10-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5850072
            }
        ]
    },
    {
        Date: '2017-10-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5738486
            }
        ]
    },
    {
        Date: '2017-10-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5752804
            }
        ]
    },
    {
        Date: '2017-10-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5648552
            }
        ]
    },
    {
        Date: '2017-10-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5544275
            }
        ]
    },
    {
        Date: '2017-10-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.550388455
            }
        ]
    },
    {
        Date: '2017-10-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.550641537
            }
        ]
    },
    {
        Date: '2017-10-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.556227267
            }
        ]
    },
    {
        Date: '2017-10-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.562383831
            }
        ]
    },
    {
        Date: '2017-10-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5498432
            }
        ]
    },
    {
        Date: '2017-10-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.551618934
            }
        ]
    },
    {
        Date: '2017-10-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5710043
            }
        ]
    },
    {
        Date: '2017-10-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5657127
            }
        ]
    },
    {
        Date: '2017-10-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.568341136
            }
        ]
    },
    {
        Date: '2017-11-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.564317942
            }
        ]
    },
    {
        Date: '2017-11-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.592064
            }
        ]
    },
    {
        Date: '2017-11-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5870052
            }
        ]
    },
    {
        Date: '2017-11-06T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.580956459
            }
        ]
    },
    {
        Date: '2017-11-07T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5935632
            }
        ]
    },
    {
        Date: '2017-11-08T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6013963
            }
        ]
    },
    {
        Date: '2017-11-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5911935
            }
        ]
    },
    {
        Date: '2017-11-10T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5860043
            }
        ]
    },
    {
        Date: '2017-11-13T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.591582656
            }
        ]
    },
    {
        Date: '2017-11-14T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5927842
            }
        ]
    },
    {
        Date: '2017-11-15T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.588218451
            }
        ]
    },
    {
        Date: '2017-11-16T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5891645
            }
        ]
    },
    {
        Date: '2017-11-17T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5884088
            }
        ]
    },
    {
        Date: '2017-11-20T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6031982
            }
        ]
    },
    {
        Date: '2017-11-21T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6117477
            }
        ]
    },
    {
        Date: '2017-11-22T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6016786
            }
        ]
    },
    {
        Date: '2017-11-24T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.6070676
            }
        ]
    },
    {
        Date: '2017-11-27T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.596899748
            }
        ]
    },
    {
        Date: '2017-11-28T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5901419
            }
        ]
    },
    {
        Date: '2017-11-29T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.5615333
            }
        ]
    },
    {
        Date: '2017-11-30T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.561976731
            }
        ]
    },
    {
        Date: '2017-12-01T00:00:00-05:00',
        Quantities: [
            {
                Type: 'RSS',
                Value: 0.564364
            }
        ]
    }
];

export const domDoe: object[] = [
    {
        Date: '2016-12-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0
            },
            {
                Type: 'DOE',
                Value: 0
            }
        ]
    },
    {
        Date: '2016-12-12T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0
            },
            {
                Type: 'DOE',
                Value: -0.005125793
            }
        ]
    },
    {
        Date: '2016-12-13T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0
            },
            {
                Type: 'DOE',
                Value: -0.001303354
            }
        ]
    },
    {
        Date: '2016-12-14T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0
            },
            {
                Type: 'DOE',
                Value: -0.0128295645
            }
        ]
    },
    {
        Date: '2016-12-15T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.00332206488
            },
            {
                Type: 'DOE',
                Value: -0.0128295645
            }
        ]
    },
    {
        Date: '2016-12-16T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.00194158358
            },
            {
                Type: 'DOE',
                Value: -0.0128295645
            }
        ]
    },
    {
        Date: '2016-12-19T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.00194158358
            },
            {
                Type: 'DOE',
                Value: -0.0111609437
            }
        ]
    },
    {
        Date: '2016-12-20T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.00194158358
            },
            {
                Type: 'DOE',
                Value: -0.006521915
            }
        ]
    },
    {
        Date: '2016-12-21T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.00194158358
            },
            {
                Type: 'DOE',
                Value: -0.009059544
            }
        ]
    },
    {
        Date: '2016-12-22T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: -0.00234164577
            },
            {
                Type: 'DOE',
                Value: -0.009059544
            }
        ]
    },
    {
        Date: '2016-12-23T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.000631590141
            },
            {
                Type: 'DOE',
                Value: -0.009059544
            }
        ]
    },
    {
        Date: '2016-12-27T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.00413529063
            },
            {
                Type: 'DOE',
                Value: -0.009059544
            }
        ]
    },
    {
        Date: '2016-12-28T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.00413529063
            },
            {
                Type: 'DOE',
                Value: -0.019067226
            }
        ]
    },
    {
        Date: '2016-12-29T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.00413529063
            },
            {
                Type: 'DOE',
                Value: -0.0177296232
            }
        ]
    },
    {
        Date: '2016-12-30T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.00413529063
            },
            {
                Type: 'DOE',
                Value: -0.0212188
            }
        ]
    },
    {
        Date: '2017-01-03T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.00413529063
            },
            {
                Type: 'DOE',
                Value: -0.0128938351
            }
        ]
    },
    {
        Date: '2017-01-04T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0175825842
            },
            {
                Type: 'DOE',
                Value: -0.0128938351
            }
        ]
    },
    {
        Date: '2017-01-05T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0175825842
            },
            {
                Type: 'DOE',
                Value: -0.0149532417
            }
        ]
    },
    {
        Date: '2017-01-06T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0198496711
            },
            {
                Type: 'DOE',
                Value: -0.0149532417
            }
        ]
    },
    {
        Date: '2017-01-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.01520526
            },
            {
                Type: 'DOE',
                Value: -0.0149532417
            }
        ]
    },
    {
        Date: '2017-01-10T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0183845814
            },
            {
                Type: 'DOE',
                Value: -0.0149532417
            }
        ]
    },
    {
        Date: '2017-01-11T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0183845814
            },
            {
                Type: 'DOE',
                Value: -0.0118506365
            }
        ]
    },
    {
        Date: '2017-01-12T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0183845814
            },
            {
                Type: 'DOE',
                Value: -0.0140543431
            }
        ]
    },
    {
        Date: '2017-01-13T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0223551467
            },
            {
                Type: 'DOE',
                Value: -0.0140543431
            }
        ]
    },
    {
        Date: '2017-01-17T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0223551467
            },
            {
                Type: 'DOE',
                Value: -0.0188855138
            }
        ]
    },
    {
        Date: '2017-01-18T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0223551467
            },
            {
                Type: 'DOE',
                Value: -0.0161140785
            }
        ]
    },
    {
        Date: '2017-01-19T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0223551467
            },
            {
                Type: 'DOE',
                Value: -0.0206393879
            }
        ]
    },
    {
        Date: '2017-01-20T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0261104722
            },
            {
                Type: 'DOE',
                Value: -0.0206393879
            }
        ]
    },
    {
        Date: '2017-01-23T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0261104722
            },
            {
                Type: 'DOE',
                Value: -0.0224042665
            }
        ]
    },
    {
        Date: '2017-01-24T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.037939474
            },
            {
                Type: 'DOE',
                Value: -0.0224042665
            }
        ]
    },
    {
        Date: '2017-01-25T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.04606045
            },
            {
                Type: 'DOE',
                Value: -0.0224042665
            }
        ]
    },
    {
        Date: '2017-01-26T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.04606045
            },
            {
                Type: 'DOE',
                Value: -0.024155613
            }
        ]
    },
    {
        Date: '2017-01-27T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.04606045
            },
            {
                Type: 'DOE',
                Value: -0.0267291963
            }
        ]
    },
    {
        Date: '2017-01-30T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.04606045
            },
            {
                Type: 'DOE',
                Value: -0.0340173058
            }
        ]
    },
    {
        Date: '2017-01-31T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.04606045
            },
            {
                Type: 'DOE',
                Value: -0.0308766961
            }
        ]
    },
    {
        Date: '2017-02-01T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.04509541
            },
            {
                Type: 'DOE',
                Value: -0.0308766961
            }
        ]
    },
    {
        Date: '2017-02-02T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.04509541
            },
            {
                Type: 'DOE',
                Value: -0.0289796777
            }
        ]
    },
    {
        Date: '2017-02-03T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0537405759
            },
            {
                Type: 'DOE',
                Value: -0.0289796777
            }
        ]
    },
    {
        Date: '2017-02-06T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0509669147
            },
            {
                Type: 'DOE',
                Value: -0.0289796777
            }
        ]
    },
    {
        Date: '2017-02-07T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0509669147
            },
            {
                Type: 'DOE',
                Value: -0.0303726979
            }
        ]
    },
    {
        Date: '2017-02-08T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0509669147
            },
            {
                Type: 'DOE',
                Value: -0.0281218477
            }
        ]
    },
    {
        Date: '2017-02-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0591825135
            },
            {
                Type: 'DOE',
                Value: -0.0281218477
            }
        ]
    },
    {
        Date: '2017-02-10T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0591825135
            },
            {
                Type: 'DOE',
                Value: -0.02344126
            }
        ]
    },
    {
        Date: '2017-02-13T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.06280549
            },
            {
                Type: 'DOE',
                Value: -0.02344126
            }
        ]
    },
    {
        Date: '2017-02-14T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0660284
            },
            {
                Type: 'DOE',
                Value: -0.02344126
            }
        ]
    },
    {
        Date: '2017-02-15T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0660284
            },
            {
                Type: 'DOE',
                Value: -0.018398283
            }
        ]
    },
    {
        Date: '2017-02-16T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0660284
            },
            {
                Type: 'DOE',
                Value: -0.0203945823
            }
        ]
    },
    {
        Date: '2017-02-17T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0660284
            },
            {
                Type: 'DOE',
                Value: -0.01904486
            }
        ]
    },
    {
        Date: '2017-02-21T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0660284
            },
            {
                Type: 'DOE',
                Value: -0.0107367244
            }
        ]
    },
    {
        Date: '2017-02-22T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.06285952
            },
            {
                Type: 'DOE',
                Value: -0.0107367244
            }
        ]
    },
    {
        Date: '2017-02-23T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.06285952
            },
            {
                Type: 'DOE',
                Value: -0.0140390322
            }
        ]
    },
    {
        Date: '2017-02-24T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.06285952
            },
            {
                Type: 'DOE',
                Value: -0.0127035044
            }
        ]
    },
    {
        Date: '2017-02-27T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0664017
            },
            {
                Type: 'DOE',
                Value: -0.0127035044
            }
        ]
    },
    {
        Date: '2017-02-28T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.05979128
            },
            {
                Type: 'DOE',
                Value: -0.0127035044
            }
        ]
    },
    {
        Date: '2017-03-01T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0731609
            },
            {
                Type: 'DOE',
                Value: -0.0127035044
            }
        ]
    },
    {
        Date: '2017-03-02T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0731609
            },
            {
                Type: 'DOE',
                Value: -0.0214353818
            }
        ]
    },
    {
        Date: '2017-03-03T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07440435
            },
            {
                Type: 'DOE',
                Value: -0.0214353818
            }
        ]
    },
    {
        Date: '2017-03-06T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07440435
            },
            {
                Type: 'DOE',
                Value: -0.0263943821
            }
        ]
    },
    {
        Date: '2017-03-07T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0700838
            },
            {
                Type: 'DOE',
                Value: -0.0263943821
            }
        ]
    },
    {
        Date: '2017-03-08T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0700838
            },
            {
                Type: 'DOE',
                Value: -0.0299113672
            }
        ]
    },
    {
        Date: '2017-03-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0700838
            },
            {
                Type: 'DOE',
                Value: -0.03173659
            }
        ]
    },
    {
        Date: '2017-03-10T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0700838
            },
            {
                Type: 'DOE',
                Value: -0.0275600925
            }
        ]
    },
    {
        Date: '2017-03-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07298267
            },
            {
                Type: 'DOE',
                Value: -0.0275600925
            }
        ]
    },
    {
        Date: '2017-03-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07298267
            },
            {
                Type: 'DOE',
                Value: -0.0327731371
            }
        ]
    },
    {
        Date: '2017-03-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07298267
            },
            {
                Type: 'DOE',
                Value: -0.02021699
            }
        ]
    },
    {
        Date: '2017-03-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07203065
            },
            {
                Type: 'DOE',
                Value: -0.02021699
            }
        ]
    },
    {
        Date: '2017-03-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07203065
            },
            {
                Type: 'DOE',
                Value: -0.0200253334
            }
        ]
    },
    {
        Date: '2017-03-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.06872842
            },
            {
                Type: 'DOE',
                Value: -0.0200253334
            }
        ]
    },
    {
        Date: '2017-03-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.06872842
            },
            {
                Type: 'DOE',
                Value: -0.0362107381
            }
        ]
    },
    {
        Date: '2017-03-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.06872842
            },
            {
                Type: 'DOE',
                Value: -0.0335866772
            }
        ]
    },
    {
        Date: '2017-03-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.06958461
            },
            {
                Type: 'DOE',
                Value: -0.0335866772
            }
        ]
    },
    {
        Date: '2017-03-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.06964013
            },
            {
                Type: 'DOE',
                Value: -0.0335866772
            }
        ]
    },
    {
        Date: '2017-03-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.06964013
            },
            {
                Type: 'DOE',
                Value: -0.0340569653
            }
        ]
    },
    {
        Date: '2017-03-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.06964013
            },
            {
                Type: 'DOE',
                Value: -0.0268032439
            }
        ]
    },
    {
        Date: '2017-03-29T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.06964013
            },
            {
                Type: 'DOE',
                Value: -0.02414516
            }
        ]
    },
    {
        Date: '2017-03-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.072155416
            },
            {
                Type: 'DOE',
                Value: -0.02414516
            }
        ]
    },
    {
        Date: '2017-03-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.072155416
            },
            {
                Type: 'DOE',
                Value: -0.0238938965
            }
        ]
    },
    {
        Date: '2017-04-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0674187243
            },
            {
                Type: 'DOE',
                Value: -0.0238938965
            }
        ]
    },
    {
        Date: '2017-04-04T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0670567751
            },
            {
                Type: 'DOE',
                Value: -0.0238938965
            }
        ]
    },
    {
        Date: '2017-04-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0670567751
            },
            {
                Type: 'DOE',
                Value: -0.02909279
            }
        ]
    },
    {
        Date: '2017-04-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07306303
            },
            {
                Type: 'DOE',
                Value: -0.02909279
            }
        ]
    },
    {
        Date: '2017-04-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07252673
            },
            {
                Type: 'DOE',
                Value: -0.02909279
            }
        ]
    },
    {
        Date: '2017-04-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07252673
            },
            {
                Type: 'DOE',
                Value: -0.0265568327
            }
        ]
    },
    {
        Date: '2017-04-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07252673
            },
            {
                Type: 'DOE',
                Value: -0.02530621
            }
        ]
    },
    {
        Date: '2017-04-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07252673
            },
            {
                Type: 'DOE',
                Value: -0.0318356119
            }
        ]
    },
    {
        Date: '2017-04-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07252673
            },
            {
                Type: 'DOE',
                Value: -0.0395830646
            }
        ]
    },
    {
        Date: '2017-04-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07252673
            },
            {
                Type: 'DOE',
                Value: -0.029904766
            }
        ]
    },
    {
        Date: '2017-04-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07042277
            },
            {
                Type: 'DOE',
                Value: -0.029904766
            }
        ]
    },
    {
        Date: '2017-04-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.07120389
            },
            {
                Type: 'DOE',
                Value: -0.029904766
            }
        ]
    },
    {
        Date: '2017-04-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0797529
            },
            {
                Type: 'DOE',
                Value: -0.029904766
            }
        ]
    },
    {
        Date: '2017-04-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0797529
            },
            {
                Type: 'DOE',
                Value: -0.03298979
            }
        ]
    },
    {
        Date: '2017-04-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0906336159
            },
            {
                Type: 'DOE',
                Value: -0.03298979
            }
        ]
    },
    {
        Date: '2017-04-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09598814
            },
            {
                Type: 'DOE',
                Value: -0.03298979
            }
        ]
    },
    {
        Date: '2017-04-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09598814
            },
            {
                Type: 'DOE',
                Value: -0.03237114
            }
        ]
    },
    {
        Date: '2017-04-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0972541347
            },
            {
                Type: 'DOE',
                Value: -0.03237114
            }
        ]
    },
    {
        Date: '2017-04-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0972541347
            },
            {
                Type: 'DOE',
                Value: -0.0371543579
            }
        ]
    },
    {
        Date: '2017-05-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09887241
            },
            {
                Type: 'DOE',
                Value: -0.0371543579
            }
        ]
    },
    {
        Date: '2017-05-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09887241
            },
            {
                Type: 'DOE',
                Value: -0.03756887
            }
        ]
    },
    {
        Date: '2017-05-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09887241
            },
            {
                Type: 'DOE',
                Value: -0.0420966744
            }
        ]
    },
    {
        Date: '2017-05-04T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09797119
            },
            {
                Type: 'DOE',
                Value: -0.0420966744
            }
        ]
    },
    {
        Date: '2017-05-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09797119
            },
            {
                Type: 'DOE',
                Value: -0.0334440432
            }
        ]
    },
    {
        Date: '2017-05-08T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09513185
            },
            {
                Type: 'DOE',
                Value: -0.0334440432
            }
        ]
    },
    {
        Date: '2017-05-09T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09508655
            },
            {
                Type: 'DOE',
                Value: -0.0334440432
            }
        ]
    },
    {
        Date: '2017-05-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09991483
            },
            {
                Type: 'DOE',
                Value: -0.0334440432
            }
        ]
    },
    {
        Date: '2017-05-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09576057
            },
            {
                Type: 'DOE',
                Value: -0.0334440432
            }
        ]
    },
    {
        Date: '2017-05-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0928981155
            },
            {
                Type: 'DOE',
                Value: -0.0334440432
            }
        ]
    },
    {
        Date: '2017-05-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.0928981155
            },
            {
                Type: 'DOE',
                Value: -0.0261565577
            }
        ]
    },
    {
        Date: '2017-05-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09216471
            },
            {
                Type: 'DOE',
                Value: -0.0261565577
            }
        ]
    },
    {
        Date: '2017-05-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09216471
            },
            {
                Type: 'DOE',
                Value: -0.04460635
            }
        ]
    },
    {
        Date: '2017-05-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09573691
            },
            {
                Type: 'DOE',
                Value: -0.04460635
            }
        ]
    },
    {
        Date: '2017-05-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.09573691
            },
            {
                Type: 'DOE',
                Value: -0.0355181471
            }
        ]
    },
    {
        Date: '2017-05-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.10210181
            },
            {
                Type: 'DOE',
                Value: -0.0355181471
            }
        ]
    },
    {
        Date: '2017-05-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.102995649
            },
            {
                Type: 'DOE',
                Value: -0.0355181471
            }
        ]
    },
    {
        Date: '2017-05-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.106101841
            },
            {
                Type: 'DOE',
                Value: -0.0355181471
            }
        ]
    },
    {
        Date: '2017-05-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.108606495
            },
            {
                Type: 'DOE',
                Value: -0.0355181471
            }
        ]
    },
    {
        Date: '2017-05-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.108062565
            },
            {
                Type: 'DOE',
                Value: -0.0355181471
            }
        ]
    },
    {
        Date: '2017-05-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.104743481
            },
            {
                Type: 'DOE',
                Value: -0.0355181471
            }
        ]
    },
    {
        Date: '2017-05-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.105224065
            },
            {
                Type: 'DOE',
                Value: -0.0355181471
            }
        ]
    },
    {
        Date: '2017-06-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.105224065
            },
            {
                Type: 'DOE',
                Value: -0.0232334565
            }
        ]
    },
    {
        Date: '2017-06-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.107148059
            },
            {
                Type: 'DOE',
                Value: -0.0232334565
            }
        ]
    },
    {
        Date: '2017-06-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.107148059
            },
            {
                Type: 'DOE',
                Value: -0.02646714
            }
        ]
    },
    {
        Date: '2017-06-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.1045349
            },
            {
                Type: 'DOE',
                Value: -0.02646714
            }
        ]
    },
    {
        Date: '2017-06-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.104360238
            },
            {
                Type: 'DOE',
                Value: -0.02646714
            }
        ]
    },
    {
        Date: '2017-06-08T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.104360238
            },
            {
                Type: 'DOE',
                Value: -0.0238232762
            }
        ]
    },
    {
        Date: '2017-06-09T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.104360238
            },
            {
                Type: 'DOE',
                Value: -0.0227254964
            }
        ]
    },
    {
        Date: '2017-06-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.104360238
            },
            {
                Type: 'DOE',
                Value: -0.02266782
            }
        ]
    },
    {
        Date: '2017-06-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.110509954
            },
            {
                Type: 'DOE',
                Value: -0.02266782
            }
        ]
    },
    {
        Date: '2017-06-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.10674195
            },
            {
                Type: 'DOE',
                Value: -0.02266782
            }
        ]
    },
    {
        Date: '2017-06-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.103239231
            },
            {
                Type: 'DOE',
                Value: -0.02266782
            }
        ]
    },
    {
        Date: '2017-06-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.103782
            },
            {
                Type: 'DOE',
                Value: -0.02266782
            }
        ]
    },
    {
        Date: '2017-06-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.111319415
            },
            {
                Type: 'DOE',
                Value: -0.02266782
            }
        ]
    },
    {
        Date: '2017-06-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.1018059
            },
            {
                Type: 'DOE',
                Value: -0.02266782
            }
        ]
    },
    {
        Date: '2017-06-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.100221306
            },
            {
                Type: 'DOE',
                Value: -0.02266782
            }
        ]
    },
    {
        Date: '2017-06-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.101636104
            },
            {
                Type: 'DOE',
                Value: -0.02266782
            }
        ]
    },
    {
        Date: '2017-06-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.101636104
            },
            {
                Type: 'DOE',
                Value: -0.0180976987
            }
        ]
    },
    {
        Date: '2017-06-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.104289293
            },
            {
                Type: 'DOE',
                Value: -0.0180976987
            }
        ]
    },
    {
        Date: '2017-06-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.104289293
            },
            {
                Type: 'DOE',
                Value: -0.025950212
            }
        ]
    },
    {
        Date: '2017-06-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.114375
            },
            {
                Type: 'DOE',
                Value: -0.025950212
            }
        ]
    },
    {
        Date: '2017-06-29T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.114375
            },
            {
                Type: 'DOE',
                Value: -0.0335000865
            }
        ]
    },
    {
        Date: '2017-06-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.114375
            },
            {
                Type: 'DOE',
                Value: -0.0310077816
            }
        ]
    },
    {
        Date: '2017-07-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.114375
            },
            {
                Type: 'DOE',
                Value: -0.02676474
            }
        ]
    },
    {
        Date: '2017-07-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.11265339
            },
            {
                Type: 'DOE',
                Value: -0.02676474
            }
        ]
    },
    {
        Date: '2017-07-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.101761207
            },
            {
                Type: 'DOE',
                Value: -0.02676474
            }
        ]
    },
    {
        Date: '2017-07-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.109069631
            },
            {
                Type: 'DOE',
                Value: -0.02676474
            }
        ]
    },
    {
        Date: '2017-07-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.109069631
            },
            {
                Type: 'DOE',
                Value: -0.0265976861
            }
        ]
    },
    {
        Date: '2017-07-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.109855048
            },
            {
                Type: 'DOE',
                Value: -0.0265976861
            }
        ]
    },
    {
        Date: '2017-07-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.118213005
            },
            {
                Type: 'DOE',
                Value: -0.0265976861
            }
        ]
    },
    {
        Date: '2017-07-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.118213005
            },
            {
                Type: 'DOE',
                Value: -0.0247093625
            }
        ]
    },
    {
        Date: '2017-07-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.12331219
            },
            {
                Type: 'DOE',
                Value: -0.0247093625
            }
        ]
    },
    {
        Date: '2017-07-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.12331219
            },
            {
                Type: 'DOE',
                Value: -0.0238163881
            }
        ]
    },
    {
        Date: '2017-07-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.122118041
            },
            {
                Type: 'DOE',
                Value: -0.0238163881
            }
        ]
    },
    {
        Date: '2017-07-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.122118041
            },
            {
                Type: 'DOE',
                Value: -0.0161438249
            }
        ]
    },
    {
        Date: '2017-07-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.120943852
            },
            {
                Type: 'DOE',
                Value: -0.0161438249
            }
        ]
    },
    {
        Date: '2017-07-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.120943852
            },
            {
                Type: 'DOE',
                Value: -0.0165989716
            }
        ]
    },
    {
        Date: '2017-07-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.121741384
            },
            {
                Type: 'DOE',
                Value: -0.0165989716
            }
        ]
    },
    {
        Date: '2017-07-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.121741384
            },
            {
                Type: 'DOE',
                Value: -0.0124084987
            }
        ]
    },
    {
        Date: '2017-07-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.11993175
            },
            {
                Type: 'DOE',
                Value: -0.0124084987
            }
        ]
    },
    {
        Date: '2017-07-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.11993175
            },
            {
                Type: 'DOE',
                Value: -0.0154510885
            }
        ]
    },
    {
        Date: '2017-07-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.119205624
            },
            {
                Type: 'DOE',
                Value: -0.0154510885
            }
        ]
    },
    {
        Date: '2017-07-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.119205624
            },
            {
                Type: 'DOE',
                Value: -0.0159503836
            }
        ]
    },
    {
        Date: '2017-08-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.121225461
            },
            {
                Type: 'DOE',
                Value: -0.0159503836
            }
        ]
    },
    {
        Date: '2017-08-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.121225461
            },
            {
                Type: 'DOE',
                Value: -0.0194901153
            }
        ]
    },
    {
        Date: '2017-08-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.119235739
            },
            {
                Type: 'DOE',
                Value: -0.0194901153
            }
        ]
    },
    {
        Date: '2017-08-04T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.119235739
            },
            {
                Type: 'DOE',
                Value: -0.0175295435
            }
        ]
    },
    {
        Date: '2017-08-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.120456114
            },
            {
                Type: 'DOE',
                Value: -0.0175295435
            }
        ]
    },
    {
        Date: '2017-08-08T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.116764478
            },
            {
                Type: 'DOE',
                Value: -0.0175295435
            }
        ]
    },
    {
        Date: '2017-08-09T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.116764478
            },
            {
                Type: 'DOE',
                Value: -0.0205932949
            }
        ]
    },
    {
        Date: '2017-08-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.116764478
            },
            {
                Type: 'DOE',
                Value: -0.03624169
            }
        ]
    },
    {
        Date: '2017-08-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.118455045
            },
            {
                Type: 'DOE',
                Value: -0.03624169
            }
        ]
    },
    {
        Date: '2017-08-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.128170654
            },
            {
                Type: 'DOE',
                Value: -0.03624169
            }
        ]
    },
    {
        Date: '2017-08-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.125795081
            },
            {
                Type: 'DOE',
                Value: -0.03624169
            }
        ]
    },
    {
        Date: '2017-08-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.128952786
            },
            {
                Type: 'DOE',
                Value: -0.03624169
            }
        ]
    },
    {
        Date: '2017-08-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.128952786
            },
            {
                Type: 'DOE',
                Value: -0.051232256
            }
        ]
    },
    {
        Date: '2017-08-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.127517685
            },
            {
                Type: 'DOE',
                Value: -0.051232256
            }
        ]
    },
    {
        Date: '2017-08-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.128300741
            },
            {
                Type: 'DOE',
                Value: -0.051232256
            }
        ]
    },
    {
        Date: '2017-08-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.137972087
            },
            {
                Type: 'DOE',
                Value: -0.051232256
            }
        ]
    },
    {
        Date: '2017-08-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.137972087
            },
            {
                Type: 'DOE',
                Value: -0.05264344
            }
        ]
    },
    {
        Date: '2017-08-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.137636572
            },
            {
                Type: 'DOE',
                Value: -0.05264344
            }
        ]
    },
    {
        Date: '2017-08-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.137636572
            },
            {
                Type: 'DOE',
                Value: -0.0498692244
            }
        ]
    },
    {
        Date: '2017-08-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.137178063
            },
            {
                Type: 'DOE',
                Value: -0.0498692244
            }
        ]
    },
    {
        Date: '2017-08-29T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.137178063
            },
            {
                Type: 'DOE',
                Value: -0.0502567738
            }
        ]
    },
    {
        Date: '2017-08-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.14301382
            },
            {
                Type: 'DOE',
                Value: -0.0502567738
            }
        ]
    },
    {
        Date: '2017-08-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.151258081
            },
            {
                Type: 'DOE',
                Value: -0.0502567738
            }
        ]
    },
    {
        Date: '2017-09-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.151258081
            },
            {
                Type: 'DOE',
                Value: -0.0461641364
            }
        ]
    },
    {
        Date: '2017-09-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.143255055
            },
            {
                Type: 'DOE',
                Value: -0.0461641364
            }
        ]
    },
    {
        Date: '2017-09-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.143255055
            },
            {
                Type: 'DOE',
                Value: -0.04345668
            }
        ]
    },
    {
        Date: '2017-09-07T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.14171
            },
            {
                Type: 'DOE',
                Value: -0.04345668
            }
        ]
    },
    {
        Date: '2017-09-08T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.141940564
            },
            {
                Type: 'DOE',
                Value: -0.04345668
            }
        ]
    },
    {
        Date: '2017-09-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.141940564
            },
            {
                Type: 'DOE',
                Value: -0.0327369571
            }
        ]
    },
    {
        Date: '2017-09-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.1462675
            },
            {
                Type: 'DOE',
                Value: -0.0327369571
            }
        ]
    },
    {
        Date: '2017-09-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.1462675
            },
            {
                Type: 'DOE',
                Value: -0.03354334
            }
        ]
    },
    {
        Date: '2017-09-14T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.145930082
            },
            {
                Type: 'DOE',
                Value: -0.03354334
            }
        ]
    },
    {
        Date: '2017-09-15T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.145930082
            },
            {
                Type: 'DOE',
                Value: -0.031394247
            }
        ]
    },
    {
        Date: '2017-09-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.1488637
            },
            {
                Type: 'DOE',
                Value: -0.031394247
            }
        ]
    },
    {
        Date: '2017-09-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.148412541
            },
            {
                Type: 'DOE',
                Value: -0.031394247
            }
        ]
    },
    {
        Date: '2017-09-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.148412541
            },
            {
                Type: 'DOE',
                Value: -0.0287074335
            }
        ]
    },
    {
        Date: '2017-09-21T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.148412541
            },
            {
                Type: 'DOE',
                Value: -0.0307470635
            }
        ]
    },
    {
        Date: '2017-09-22T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.148412541
            },
            {
                Type: 'DOE',
                Value: -0.0284531
            }
        ]
    },
    {
        Date: '2017-09-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.148412541
            },
            {
                Type: 'DOE',
                Value: -0.0288863573
            }
        ]
    },
    {
        Date: '2017-09-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.148412541
            },
            {
                Type: 'DOE',
                Value: -0.0286472682
            }
        ]
    },
    {
        Date: '2017-09-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.153648615
            },
            {
                Type: 'DOE',
                Value: -0.0286472682
            }
        ]
    },
    {
        Date: '2017-09-28T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.155119568
            },
            {
                Type: 'DOE',
                Value: -0.0286472682
            }
        ]
    },
    {
        Date: '2017-09-29T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.158602342
            },
            {
                Type: 'DOE',
                Value: -0.0286472682
            }
        ]
    },
    {
        Date: '2017-10-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.1636401
            },
            {
                Type: 'DOE',
                Value: -0.0286472682
            }
        ]
    },
    {
        Date: '2017-10-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.16606611
            },
            {
                Type: 'DOE',
                Value: -0.0286472682
            }
        ]
    },
    {
        Date: '2017-10-04T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.167862922
            },
            {
                Type: 'DOE',
                Value: -0.0286472682
            }
        ]
    },
    {
        Date: '2017-10-05T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.167862922
            },
            {
                Type: 'DOE',
                Value: -0.0254834574
            }
        ]
    },
    {
        Date: '2017-10-06T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.167862922
            },
            {
                Type: 'DOE',
                Value: -0.02687984
            }
        ]
    },
    {
        Date: '2017-10-09T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.165059641
            },
            {
                Type: 'DOE',
                Value: -0.02687984
            }
        ]
    },
    {
        Date: '2017-10-10T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.165059641
            },
            {
                Type: 'DOE',
                Value: -0.0248915385
            }
        ]
    },
    {
        Date: '2017-10-11T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.166618586
            },
            {
                Type: 'DOE',
                Value: -0.0248915385
            }
        ]
    },
    {
        Date: '2017-10-12T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.166489989
            },
            {
                Type: 'DOE',
                Value: -0.0248915385
            }
        ]
    },
    {
        Date: '2017-10-13T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.166489989
            },
            {
                Type: 'DOE',
                Value: -0.0239582025
            }
        ]
    },
    {
        Date: '2017-10-16T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.166820064
            },
            {
                Type: 'DOE',
                Value: -0.0239582025
            }
        ]
    },
    {
        Date: '2017-10-17T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.166820064
            },
            {
                Type: 'DOE',
                Value: -0.0251201354
            }
        ]
    },
    {
        Date: '2017-10-18T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.166820064
            },
            {
                Type: 'DOE',
                Value: -0.02399181
            }
        ]
    },
    {
        Date: '2017-10-19T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.166820064
            },
            {
                Type: 'DOE',
                Value: -0.02310256
            }
        ]
    },
    {
        Date: '2017-10-20T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.172251031
            },
            {
                Type: 'DOE',
                Value: -0.02310256
            }
        ]
    },
    {
        Date: '2017-10-23T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.167554
            },
            {
                Type: 'DOE',
                Value: -0.02310256
            }
        ]
    },
    {
        Date: '2017-10-24T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.168910861
            },
            {
                Type: 'DOE',
                Value: -0.02310256
            }
        ]
    },
    {
        Date: '2017-10-25T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.168910861
            },
            {
                Type: 'DOE',
                Value: -0.0302812662
            }
        ]
    },
    {
        Date: '2017-10-26T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.171807051
            },
            {
                Type: 'DOE',
                Value: -0.0302812662
            }
        ]
    },
    {
        Date: '2017-10-27T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.1761983
            },
            {
                Type: 'DOE',
                Value: -0.0302812662
            }
        ]
    },
    {
        Date: '2017-10-30T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.1761983
            },
            {
                Type: 'DOE',
                Value: -0.0341914333
            }
        ]
    },
    {
        Date: '2017-10-31T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.178983033
            },
            {
                Type: 'DOE',
                Value: -0.0341914333
            }
        ]
    },
    {
        Date: '2017-11-01T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.178983033
            },
            {
                Type: 'DOE',
                Value: -0.0342148319
            }
        ]
    },
    {
        Date: '2017-11-02T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.178385139
            },
            {
                Type: 'DOE',
                Value: -0.0342148319
            }
        ]
    },
    {
        Date: '2017-11-03T00:00:00-04:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.178385139
            },
            {
                Type: 'DOE',
                Value: -0.031181071
            }
        ]
    },
    {
        Date: '2017-11-06T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.178385139
            },
            {
                Type: 'DOE',
                Value: -0.026975248
            }
        ]
    },
    {
        Date: '2017-11-07T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.175590545
            },
            {
                Type: 'DOE',
                Value: -0.026975248
            }
        ]
    },
    {
        Date: '2017-11-08T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.1770397
            },
            {
                Type: 'DOE',
                Value: -0.026975248
            }
        ]
    },
    {
        Date: '2017-11-09T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.1770397
            },
            {
                Type: 'DOE',
                Value: -0.0313974656
            }
        ]
    },
    {
        Date: '2017-11-10T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.1770397
            },
            {
                Type: 'DOE',
                Value: -0.0313588828
            }
        ]
    },
    {
        Date: '2017-11-13T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.1774582
            },
            {
                Type: 'DOE',
                Value: -0.0313588828
            }
        ]
    },
    {
        Date: '2017-11-14T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.175354138
            },
            {
                Type: 'DOE',
                Value: -0.0313588828
            }
        ]
    },
    {
        Date: '2017-11-15T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.175354138
            },
            {
                Type: 'DOE',
                Value: -0.0358019248
            }
        ]
    },
    {
        Date: '2017-11-16T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.18409659
            },
            {
                Type: 'DOE',
                Value: -0.0358019248
            }
        ]
    },
    {
        Date: '2017-11-17T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.18409659
            },
            {
                Type: 'DOE',
                Value: -0.03315589
            }
        ]
    },
    {
        Date: '2017-11-20T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.186434746
            },
            {
                Type: 'DOE',
                Value: -0.03315589
            }
        ]
    },
    {
        Date: '2017-11-21T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.191733286
            },
            {
                Type: 'DOE',
                Value: -0.03315589
            }
        ]
    },
    {
        Date: '2017-11-22T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.191733286
            },
            {
                Type: 'DOE',
                Value: -0.0331438519
            }
        ]
    },
    {
        Date: '2017-11-24T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.192862511
            },
            {
                Type: 'DOE',
                Value: -0.0331438519
            }
        ]
    },
    {
        Date: '2017-11-27T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.192862511
            },
            {
                Type: 'DOE',
                Value: -0.036243096
            }
        ]
    },
    {
        Date: '2017-11-28T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.192862511
            },
            {
                Type: 'DOE',
                Value: -0.0274169277
            }
        ]
    },
    {
        Date: '2017-11-29T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.192862511
            },
            {
                Type: 'DOE',
                Value: -0.0263489839
            }
        ]
    },
    {
        Date: '2017-11-30T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.200040132
            },
            {
                Type: 'DOE',
                Value: -0.0263489839
            }
        ]
    },
    {
        Date: '2017-12-01T00:00:00-05:00',
        Quantities: [
            {
                Type: 'DOM',
                Value: 0.199333832
            },
            {
                Type: 'DOE',
                Value: -0.0263489839
            }
        ]
    }
];



export const mockIndicies: string[] = [
  'klah',
  'asd',
  'ery',
  'qerk',
    'qwu',
    'yrl',
    'asd12',
    'gn65',
    'skf7'
];

export const mockSectors: string[] = [
  'Banking',
  'Biotech',
  'Automotive',
  'Legal',
  'blahblah',
  'asdiy'
];


export const mockData: any[] = [
    {date: Date.UTC(2017, 11, 2), value: 0.11},
    {date: Date.UTC(2017, 11, 5), value: 0.16},
    {date: Date.UTC(2017, 11, 7), value: 0.23},
    {date: Date.UTC(2017, 11, 12), value: 0.29},
    {date: Date.UTC(2017, 11, 16), value: 0.33},
    {date: Date.UTC(2017, 11, 20), value: 0.44},
    {date: Date.UTC(2017, 11, 22), value: 0.03},
    {date: Date.UTC(2017, 11, 25), value: 0.50},
    {date: Date.UTC(2017, 11, 28), value: 0.22},
    {date: Date.UTC(2017, 11, 29), value: 0.87}
];
