const riverData = [
    {
      "riverCode": "09180000",
      "riverName": " DOLORES RIVER NEAR CISCO, UT "
    },
    {
      "riverCode": "09180500",
      "riverName": " COLORADO RIVER NEAR CISCO, UT "
    },
    {
      "riverCode": "09183500",
      "riverName": " MILL CREEK AT SHELEY TUNNEL, NEAR MOAB, UT "
    },
    {
      "riverCode": "09183600",
      "riverName": " MILL CREEK BELOW SHELEY TUNNEL, NEAR MOAB, UT "
    },
    {
      "riverCode": "09185100",
      "riverName": " MILL CREEK BLW PACK CREEK NR MOUTH AT MOAB, UT "
    },
    {
      "riverCode": "09185600",
      "riverName": " COLORADO RIVER AT POTASH, UT "
    },
    {
      "riverCode": "09217900",
      "riverName": " BLACKS FORK NEAR ROBERTSON, WY "
    },
    {
      "riverCode": "09234500",
      "riverName": " GREEN RIVER NEAR GREENDALE, UT "
    },
    {
      "riverCode": "09261000",
      "riverName": " GREEN RIVER NEAR JENSEN, UT "
    },
    {
      "riverCode": "09261700",
      "riverName": " BIG BRUSH CRK ABV RED FLEET RES, NR VERNAL, UT "
    },
    {
      "riverCode": "09272400",
      "riverName": " GREEN RIVER AT OURAY, UTAH "
    },
    {
      "riverCode": "09277500",
      "riverName": " DUCHESNE RIVER NEAR TABIONA, UT "
    },
    {
      "riverCode": "09279000",
      "riverName": " ROCK CREEK NEAR MOUNTAIN HOME, UT "
    },
    {
      "riverCode": "09285900",
      "riverName": " STRAWBERRY RIVER AT PINNACLES NEAR FRUITLAND, UT "
    },
    {
      "riverCode": "09288000",
      "riverName": " CURRANT CREEK NEAR FRUITLAND, UT "
    },
    {
      "riverCode": "09288180",
      "riverName": " STRAWBERRY RIVER NEAR DUCHESNE, UT "
    },
    {
      "riverCode": "09289500",
      "riverName": " LAKE FORK RIVER AB MOON LAKE, NR MOUNTAIN HOME, UT "
    },
    {
      "riverCode": "09291000",
      "riverName": " LAKE FORK RIVER BL MOON LAKE NR MOUNTAIN HOME, UT "
    },
    {
      "riverCode": "09292000",
      "riverName": " YELLOWSTONE R @ BRIDGE CMPGRND NR ALTONAH, UT "
    },
    {
      "riverCode": "09292500",
      "riverName": " YELLOWSTONE RIVER NEAR ALTONAH, UT "
    },
    {
      "riverCode": "09295000",
      "riverName": " DUCHESNE RIVER AT MYTON, UT "
    },
    {
      "riverCode": "09295100",
      "riverName": " DUCHESNE RIV ABV UINTA RIV, NR RANDLETT, UT "
    },
    {
      "riverCode": "09296800",
      "riverName": " UINTA R BLW POWERPLANT DIVERSION, NR NEOLA, UT "
    },
    {
      "riverCode": "09299500",
      "riverName": " WHITEROCKS RIVER NEAR WHITEROCKS, UT "
    },
    {
      "riverCode": "09301500",
      "riverName": " UINTA RIVER AT RANDLETT, UT "
    },
    {
      "riverCode": "09302000",
      "riverName": " DUCHESNE RIVER NEAR RANDLETT, UT "
    },
    {
      "riverCode": "09306500",
      "riverName": " WHITE RIVER NEAR WATSON, UTAH "
    },
    {
      "riverCode": "09309600",
      "riverName": " FAIRVIEW TUNNEL NEAR FAIRVIEW, UT "
    },
    {
      "riverCode": "09310500",
      "riverName": " FISH CREEK ABOVE RESERVOIR, NEAR SCOFIELD, UT "
    },
    {
      "riverCode": "09310700",
      "riverName": " MUD CRK BL WINTER QUARTERS CYN @ SCOFIELD, UT "
    },
    {
      "riverCode": "09312600",
      "riverName": " WHITE R BL TABBYUNE CRK NR SOLDIER SUMMIT, UT "
    },
    {
      "riverCode": "09314500",
      "riverName": " PRICE RIVER AT WOODSIDE, UT "
    },
    {
      "riverCode": "09315000",
      "riverName": " GREEN RIVER AT GREEN RIVER, UT "
    },
    {
      "riverCode": "09319000",
      "riverName": " EPHRAIM TUNNEL NEAR EPHRAIM, UT "
    },
    {
      "riverCode": "09326500",
      "riverName": " FERRON CREEK (UPPER STATION) NEAR FERRON, UT "
    },
    {
      "riverCode": "09327000",
      "riverName": " FERRON CR BL MILLSITE RES & DIVS NR FERRON, UT "
    },
    {
      "riverCode": "09328500",
      "riverName": " SAN RAFAEL RIVER NEAR GREEN RIVER, UT "
    },
    {
      "riverCode": "09328910",
      "riverName": " SAN RAFAEL RIVER AT MOUTH NEAR GREEN RIVER, UT "
    },
    {
      "riverCode": "09328920",
      "riverName": " GREEN RIVER AT MINERAL BOTTOM NR CYNLNDS NTL PARK "
    },
    {
      "riverCode": "09328990",
      "riverName": " Colorado River ab Dirty Devil River nr Hite, UT "
    },
    {
      "riverCode": "09329050",
      "riverName": " SEVEN MILE CREEK NEAR FISH LAKE, UT "
    },
    {
      "riverCode": "09330000",
      "riverName": " FREMONT RIVER NEAR BICKNELL, UT "
    },
    {
      "riverCode": "09330500",
      "riverName": " MUDDY CREEK NEAR EMERY, UT "
    },
    {
      "riverCode": "09333500",
      "riverName": " DIRTY DEVIL R AB POISON SP WSH NR HANKSVILLE UT "
    },
    {
      "riverCode": "09337000",
      "riverName": " PINE CREEK NEAR ESCALANTE, UT "
    },
    {
      "riverCode": "09337500",
      "riverName": " ESCALANTE RIVER NEAR ESCALANTE, UT "
    },
    {
      "riverCode": "09378170",
      "riverName": " SOUTH CREEK ABOVE RESERVOIR NEAR MONTICELLO, UT "
    },
    {
      "riverCode": "09378630",
      "riverName": " RECAPTURE CREEK NEAR BLANDING, UT "
    },
    {
      "riverCode": "09379500",
      "riverName": " SAN JUAN RIVER NEAR BLUFF, UT "
    },
    {
      "riverCode": "09381800",
      "riverName": " PARIA RIVER NEAR KANAB, UTAH "
    },
    {
      "riverCode": "09403600",
      "riverName": " KANAB CREEK NEAR KANAB, UT "
    },
    {
      "riverCode": "09404450",
      "riverName": " EAST FORK VIRGIN RIVER NEAR GLENDALE, UT "
    },
    {
      "riverCode": "09404900",
      "riverName": " EAST FORK VIRGIN RIVER NEAR SPRINGDALE, UT "
    },
    {
      "riverCode": "09405500",
      "riverName": " NORTH FORK VIRGIN RIVER NEAR SPRINGDALE, UT "
    },
    {
      "riverCode": "09406000",
      "riverName": " VIRGIN RIVER AT VIRGIN, UT "
    },
    {
      "riverCode": "09406100",
      "riverName": " VIRGIN RIVER AB LA VERKIN CREEK NR LA VERKIN, UT "
    },
    {
      "riverCode": "09408000",
      "riverName": " LEEDS CREEK NEAR LEEDS, UT "
    },
    {
      "riverCode": "09408135",
      "riverName": " VIRGIN RIVER AB QUAIL CREEK NEAR HURRICANE, UT "
    },
    {
      "riverCode": "09408150",
      "riverName": " VIRGIN RIVER NEAR HURRICANE, UT "
    },
    {
      "riverCode": "09408195",
      "riverName": " FORT PEARCE WASH NEAR ST. GEORGE, UT "
    },
    {
      "riverCode": "09408400",
      "riverName": " SANTA CLARA RIVER NEAR PINE VALLEY, UT "
    },
    {
      "riverCode": "09409100",
      "riverName": " SANTA CLARA RIVER ABV BAKER RES, NR CENTRAL, UT "
    },
    {
      "riverCode": "09410100",
      "riverName": " SANTA CLARA RIV BLW WINSOR DAM, NR SANTA CLARA, UT "
    },
    {
      "riverCode": "09413000",
      "riverName": " SANTA CLARA RIVER AT ST. GEORGE, UT "
    },
    {
      "riverCode": "09413200",
      "riverName": " VIRGIN RIVER NEAR BLOOMINGTON, UT "
    },
    {
      "riverCode": "09413500",
      "riverName": " VIRGIN RIVER NEAR ST. GEORGE, UT "
    },
    {
      "riverCode": "09413700",
      "riverName": " VIRGIN RV ABV THE NARROWS NR LITTLEFIELD, AZ "
    },
    {
      "riverCode": "09413900",
      "riverName": " BEAVER DAM WASH NEAR ENTERPRISE, UT "
    },
    {
      "riverCode": "10011500",
      "riverName": " BEAR RIVER NEAR UTAH-WYOMING STATE LINE "
    },
    {
      "riverCode": "10016900",
      "riverName": " BEAR RIVER AT EVANSTON, WY "
    },
    {
      "riverCode": "10020100",
      "riverName": " BEAR RIVER ABOVE RESERVOIR, NEAR WOODRUFF, UT "
    },
    {
      "riverCode": "10020300",
      "riverName": " BEAR RIVER BELOW RESERVOIR, NEAR WOODRUFF, UT "
    },
    {
      "riverCode": "10023000",
      "riverName": " BIG CREEK NEAR RANDOLPH, UT "
    },
    {
      "riverCode": "10028500",
      "riverName": " BEAR RIVER BELOW PIXLEY DAM, NEAR COKEVILLE, WY "
    },
    {
      "riverCode": "10032000",
      "riverName": " SMITHS FORK NEAR BORDER, WY "
    },
    {
      "riverCode": "10038000",
      "riverName": " BEAR RIVER BLW SMITHS FORK, NR COKEVILLE, WY "
    },
    {
      "riverCode": "10039500",
      "riverName": " BEAR RIVER AT BORDER, WY "
    },
    {
      "riverCode": "10068500",
      "riverName": " BEAR RIVER AT PESCADERO, ID "
    },
    {
      "riverCode": "10092700",
      "riverName": " BEAR RIVER AT IDAHO-UTAH STATE LINE "
    },
    {
      "riverCode": "10105900",
      "riverName": " LITTLE BEAR RIVER AT PARADISE, UT "
    },
    {
      "riverCode": "10108400",
      "riverName": " CACHE HIGHLINE CANAL NEAR LOGAN, UTAH "
    },
    {
      "riverCode": "10109000",
      "riverName": " LOGAN RIVER ABOVE STATE DAM, NEAR LOGAN, UT "
    },
    {
      "riverCode": "10113500",
      "riverName": " BLACKSMITH FORK AB UP and L CO.'S DAM NR HYRUM, UT "
    },
    {
      "riverCode": "10126000",
      "riverName": " BEAR RIVER NEAR CORINNE, UT "
    },
    {
      "riverCode": "10128500",
      "riverName": " WEBER RIVER NEAR OAKLEY, UT "
    },
    {
      "riverCode": "10129300",
      "riverName": " WEBER RIVER NEAR PEOA, UTAH "
    },
    {
      "riverCode": "10129500",
      "riverName": " WEBER RIVER NEAR WANSHIP, UT "
    },
    {
      "riverCode": "10129900",
      "riverName": " SILVER CREEK NEAR SILVER CREEK JUNCTION, UT "
    },
    {
      "riverCode": "10130500",
      "riverName": " WEBER RIVER NEAR COALVILLE, UT "
    },
    {
      "riverCode": "10131000",
      "riverName": " CHALK CREEK AT COALVILLE, UT "
    },
    {
      "riverCode": "10132000",
      "riverName": " WEBER RIVER AT ECHO, UT "
    },
    {
      "riverCode": "10132500",
      "riverName": " LOST CREEK NEAR CROYDON, UTAH "
    },
    {
      "riverCode": "10133600",
      "riverName": " MCLEOD CREEK NEAR PARK CITY, UT "
    },
    {
      "riverCode": "10133650",
      "riverName": " E CANYON CR BL I-80 REST STOP NR PARK CITY, UT "
    },
    {
      "riverCode": "10133800",
      "riverName": " EAST CANYON CREEK NEAR JEREMY RANCH, UT "
    },
    {
      "riverCode": "10133980",
      "riverName": " EAST CANYON CREEK AB EAST CYN RES NR MORGAN, UTAH "
    },
    {
      "riverCode": "10134500",
      "riverName": " EAST CANYON CREEK NEAR MORGAN, UT "
    },
    {
      "riverCode": "10136500",
      "riverName": " WEBER RIVER AT GATEWAY, UT "
    },
    {
      "riverCode": "10136600",
      "riverName": " WEBER RIVER AT I-84 AT UINTAH, UT "
    },
    {
      "riverCode": "10137000",
      "riverName": " WEBER RIVER AT OGDEN, UTAH "
    },
    {
      "riverCode": "10137500",
      "riverName": " SOUTH FORK OGDEN RIVER NEAR HUNTSVILLE, UT "
    },
    {
      "riverCode": "10140100",
      "riverName": " OGDEN RIVER BL PINEVIEW RES NR HUNTSVILLE, UT "
    },
    {
      "riverCode": "10140700",
      "riverName": " OGDEN RIVER NR GIBSON AVENUE AT OGDEN, UT "
    },
    {
      "riverCode": "10141000",
      "riverName": " WEBER RIVER NEAR PLAIN CITY, UT "
    },
    {
      "riverCode": "10142000",
      "riverName": " FARMINGTON CR ABV DIV NR FARMINGTON, UTAH "
    },
    {
      "riverCode": "10145400",
      "riverName": " SALT CRK BL NEPHI POWERPLANT DIV NR NEPHI, UT "
    },
    {
      "riverCode": "10146000",
      "riverName": " SALT CREEK AT NEPHI, UT "
    },
    {
      "riverCode": "10146400",
      "riverName": " CURRANT CREEK NEAR MONA, UT "
    },
    {
      "riverCode": "10147100",
      "riverName": " SUMMIT CREEK ABV SUMMIT CR CANAL NR SANTAQUIN UT "
    },
    {
      "riverCode": "10149000",
      "riverName": " SIXTH WATER CRK AB SYAR TUN NR SPRINGVILLE, UT "
    },
    {
      "riverCode": "10149400",
      "riverName": " DIAMOND FORK ABV RED HOLLOW NR THISTLE, UT "
    },
    {
      "riverCode": "10150500",
      "riverName": " SPANISH FORK AT CASTILLA, UT "
    },
    {
      "riverCode": "10153100",
      "riverName": " HOBBLE CREEK AT 1650 WEST AT SPRINGVILLE, UTAH "
    },
    {
      "riverCode": "10154200",
      "riverName": " PROVO RIVER NEAR WOODLAND, UT "
    },
    {
      "riverCode": "10155000",
      "riverName": " PROVO RIVER NEAR HAILSTONE, UT "
    },
    {
      "riverCode": "10155200",
      "riverName": " PROVO RIV AT RIV ROAD BRIDGE NR HEBER CITY, UT "
    },
    {
      "riverCode": "10155500",
      "riverName": " PROVO RIVER NEAR CHARLESTON, UT "
    },
    {
      "riverCode": "10156000",
      "riverName": " SNAKE CREEK NEAR CHARLESTON, UT "
    },
    {
      "riverCode": "10157500",
      "riverName": " DANIELS CREEK AT CHARLESTON, UT "
    },
    {
      "riverCode": "10163000",
      "riverName": " PROVO RIVER AT PROVO, UT "
    },
    {
      "riverCode": "10164500",
      "riverName": " AMERICAN FK AB UPPER POWERPLANT NR AMERICAN FK, UT "
    },
    {
      "riverCode": "10166430",
      "riverName": " WEST CANYON CREEK NEAR CEDAR FORT, UT "
    },
    {
      "riverCode": "10168000",
      "riverName": " LITTLE COTTONWOOD CREEK @ JORDAN RIVER NR SLC "
    },
    {
      "riverCode": "10170500",
      "riverName": " SURPLUS CANAL @ SALT LAKE CITY, UT "
    },
    {
      "riverCode": "10171000",
      "riverName": " JORDAN RIVER @ 1700 SOUTH @ SALT LAKE CITY, UT "
    },
    {
      "riverCode": "10172200",
      "riverName": " RED BUTTE CREEK AT FORT DOUGLAS, NEAR SLC, UT "
    },
    {
      "riverCode": "10172630",
      "riverName": " GOGGIN DRAIN NEAR MAGNA UTAH "
    },
    {
      "riverCode": "10172700",
      "riverName": " VERNON CREEK NEAR VERNON, UT "
    },
    {
      "riverCode": "10172727",
      "riverName": " FAUST CREEK NEAR VERNON, UT "
    },
    {
      "riverCode": "10172800",
      "riverName": " SOUTH WILLOW CREEK NEAR GRANTSVILLE, UT "
    },
    {
      "riverCode": "10172870",
      "riverName": " TROUT CREEK NEAR CALLAO, UT "
    },
    {
      "riverCode": "10172952",
      "riverName": " DUNN CREEK NEAR PARK VALLEY, UT "
    },
    {
      "riverCode": "10173450",
      "riverName": " MAMMOTH CREEK ABV WEST HATCH DITCH, NEAR HATCH, UT "
    },
    {
      "riverCode": "10174500",
      "riverName": " SEVIER RIVER AT HATCH, UT "
    },
    {
      "riverCode": "10183500",
      "riverName": " SEVIER RIVER NEAR KINGSTON, UT "
    },
    {
      "riverCode": "10189000",
      "riverName": " EAST FORK SEVIER RIVER NEAR KINGSTON, UT "
    },
    {
      "riverCode": "10194200",
      "riverName": " CLEAR CREEK ABOVE DIVERSIONS, NEAR SEVIER, UT "
    },
    {
      "riverCode": "10205030",
      "riverName": " SALINA CREEK NEAR EMERY, UT "
    },
    {
      "riverCode": "10215900",
      "riverName": " MANTI CREEK BLW DUGWAY CREEK, NR MANTI, UT "
    },
    {
      "riverCode": "10217000",
      "riverName": " SEVIER RIV BLW SAN PITCH RIV NR GUNNISON, UT "
    },
    {
      "riverCode": "10219000",
      "riverName": " SEVIER RIVER NEAR JUAB, UT "
    },
    {
      "riverCode": "10224000",
      "riverName": " SEVIER RIVER NEAR LYNNDYL, UT "
    },
    {
      "riverCode": "10234500",
      "riverName": " BEAVER RIVER NEAR BEAVER, UT "
    },
    {
      "riverCode": "10242000",
      "riverName": " COAL CREEK NEAR CEDAR CITY, UT "
    },
    {
      "riverCode": "403835112171801",
      "riverName": "  (C- 2- 4)15cac-S1 MILL SPRING NR ERDA, UT "
    },
    {
      "riverCode": "09379900",
      "riverName": " LAKE POWELL AT GLEN CANYON DAM, AZ "
    },
    {
      "riverCode": "10010000",
      "riverName": " GREAT SALT LAKE AT SALTAIR BOAT HARBOR, UT "
    },
    {
      "riverCode": "10010020",
      "riverName": " GSL BREACH AT LAKESIDE, UT "
    },
    {
      "riverCode": "10010025",
      "riverName": " GSL BREACH 6 MILES E OF LAKESIDE, UT; S TO N FLOW "
    },
    {
      "riverCode": "10010100",
      "riverName": " GREAT SALT LAKE NEAR SALINE, UT "
    },
    {
      "riverCode": "10055000",
      "riverName": " BEAR LAKE AT STATE PARK MARINA NR GARDEN CITY, UT "
    },
    {
      "riverCode": "410401112134801",
      "riverName": " GSL FARMINGTON BAY OUTFLOW AT CAUSEWAY BRIDGE "
    },
    {
      "riverCode": "415941111175401",
      "riverName": " Bear Lake nr east shore 0.4 mi S of UT-ID border "
    },
    {
      "riverCode": "420407111201201",
      "riverName": " Bear Lake 3.6 miles northeast of Fish Haven, Idaho "
    }
  ]