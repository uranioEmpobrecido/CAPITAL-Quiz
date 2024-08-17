const countries = [
    {
        name: 'Afghanistan',
        flag: '🇦🇫',
        capital: 'Kabul',
        cities: ['Herat', 'Kandahar', 'Mazar-i-Sharif'],
        region: 'Asia'
    },
    {
        name: 'Albania',
        flag: '🇦🇱',
        capital: 'Tirana',
        cities: ['Durrës', 'Vlorë', 'Shkodër'],
        region: 'Europe'
    },
    {
        name: 'Algeria',
        flag: '🇩🇿',
        capital: 'Algiers',
        cities: ['Oran', 'Constantine', 'Annaba'],
        region: 'Africa'
    },
    {
        name: 'American Samoa',
        flag: '🇦🇸',
        capital: 'Pago Pago',
        cities: ['Tafuna', 'Leone', 'Fagatogo'],
        region: 'Oceania'
    },
    {
        name: 'Angola',
        flag: '🇦🇴',
        capital: 'Luanda',
        cities: ['Huambo', 'Lobito', 'Benguela'],
        region: 'Africa'
    },
    {
        name: 'Andorra',
        flag: '🇦🇩',
        capital: 'Andorra la Vella',
        cities: ['Escaldes-Engordany', 'Encamp', 'La Massana'],
        region: 'Europe'
    },
    {
        name: 'Anguilla',
        flag: '🇦🇮',
        capital: 'The Valley',
        cities: ['Blowing Point', 'Sandy Ground', 'East End'],
        region: 'North America'
    },
    {
        name: 'Antarctica',
        flag: '🇦🇶',
        capital: 'No Capital',
        cities: ['No Major Cities'],
        region: 'Antarctica'
    },
    {
        name: 'Antigua & Barbuda',
        flag: '🇦🇬',
        capital: 'St. John´s',
        cities: ['All Saints', 'Liberta', 'Potters Village'],
        region: 'North America'
    },
    {
        name: 'Argentina',
        flag: '🇦🇷',
        capital: 'Buenos Aires',
        cities: ['Córdoba', 'Rosario', 'Mendoza'],
        region: 'South America'
    },
    {
        name: 'Armenia',
        flag: '🇦🇲',
        capital: 'Yerevan',
        cities: ['Gyumri', 'Vanadzor', 'Hrazdan'],
        region: 'Asia'
    },
    {
        name: 'Aruba',
        flag: '🇦🇼',
        capital: 'Oranjestad',
        cities: ['San Nicolas', 'Noord', 'Santa Cruz'],
        region: 'North America'
    },
    {
        name: 'Åland Islands',
        flag: '🇦🇽',
        capital: 'Mariehamn',
        cities: ['Jomala', 'Finström', 'Lemland'],
        region: 'Europe'
    },
    {
        name: 'Ascension Island',
        flag: '🇦🇨',
        capital: 'Georgetown',
        cities: ['Two Boats Village'],
        region: 'Africa'
    },
    {
        name: 'Australia',
        flag: '🇦🇺',
        capital: 'Canberra',
        cities: ['Sydney', 'Melbourne', 'Brisbane'],
        region: 'Oceania'
    },
    {
        name: 'Austria',
        flag: '🇦🇹',
        capital: 'Vienna',
        cities: ['Graz', 'Linz', 'Salzburg'],
        region: 'Europe'
    },
    {
        name: 'Azerbaijan',
        flag: '🇦🇿',
        capital: 'Baku',
        cities: ['Ganja', 'Sumqayit', 'Mingachevir'],
        region: 'Asia'
    },
    {
        name: 'Bahamas',
        flag: '🇧🇸',
        capital: 'Nassau',
        cities: ['Freeport', 'West End', 'Marsh Harbour'],
        region: 'North America'
    },
    {
        name: 'Bahrain',
        flag: '🇧🇭',
        capital: 'Manama',
        cities: ['Riffa', 'Muharraq', 'Hamad Town'],
        region: 'Asia'
    },
    {
        name: 'Bangladesh',
        flag: '🇧🇩',
        capital: 'Dhaka',
        cities: ['Chittagong', 'Khulna', 'Rajshahi'],
        region: 'Asia'
    },
    {
        name: 'Barbados',
        flag: '🇧🇧',
        capital: 'Bridgetown',
        cities: ['Speightstown', 'Oistins', 'Holetown'],
        region: 'North America'
    },
    {
        name: 'Belarus',
        flag: '🇧🇾',
        capital: 'Minsk',
        cities: ['Gomel', 'Mogilev', 'Vitebsk'],
        region: 'Europe'
    },
    {
        name: 'Belgium',
        flag: '🇧🇪',
        capital: 'Brussels',
        cities: ['Antwerp', 'Ghent', 'Bruges'],
        region: 'Europe'
    },
    {
        name: 'Belize',
        flag: '🇧🇿',
        capital: 'Belmopan',
        cities: ['Belize City', 'San Ignacio', 'Orange Walk Town'],
        region: 'North America'
    },
    {
        name: 'Benin',
        flag: '🇧🇯',
        capital: 'Porto-Novo',
        cities: ['Cotonou', 'Parakou', 'Djougou'],
        region: 'Africa'
    },
    {
        name: 'Bermuda',
        flag: '🇧🇲',
        capital: 'Hamilton',
        cities: ['St. George', 'Somerset Village'],
        region: 'North America'
    },
    {
        name: 'Bhutan',
        flag: '🇧🇹',
        capital: 'Thimphu',
        cities: ['Phuntsholing', 'Punakha', 'Wangdue Phodrang'],
        region: 'Asia'
    },
    {
        name: 'Bolivia',
        flag: '🇧🇴',
        capital: 'Sucre',
        cities: ['La Paz', 'Santa Cruz', 'Cochabamba'],
        region: 'South America'
    },
    {
        name: 'Bosnia & Herzegovina',
        flag: '🇧🇦',
        capital: 'Sarajevo',
        cities: ['Banja Luka', 'Mostar', 'Tuzla'],
        region: 'Europe'
    },
    {
        name: 'Botswana',
        flag: '🇧🇼',
        capital: 'Gaborone',
        cities: ['Francistown', 'Molepolole', 'Maun'],
        region: 'Africa'
    },
    {
        name: 'Bouvet Island',
        flag: '🇧🇻',
        capital: 'No Capital',
        cities: ['No Major Cities'],
        region: 'Antarctica'
    },
    {
        name: 'Brazil',
        flag: '🇧🇷',
        capital: 'Brasília',
        cities: ['São Paulo', 'Rio de Janeiro', 'Salvador'],
        region: 'South America'
    },
    {
        name: 'British Indian Ocean Territory',
        flag: '🇮🇴',
        capital: 'Diego Garcia',
        cities: ['No Major Cities'],
        region: 'Asia'
    },
    {
        name: 'Brunei',
        flag: '🇧🇳',
        capital: 'Bandar Seri Begawan',
        cities: ['Kuala Belait', 'Seria', 'Tutong'],
        region: 'Asia'
    },
    {
        name: 'Bulgaria',
        flag: '🇧🇬',
        capital: 'Sofia',
        cities: ['Plovdiv', 'Varna', 'Burgas'],
        region: 'Europe'
    },
    {
        name: 'Burkina Faso',
        flag: '🇧🇫',
        capital: 'Ouagadougou',
        cities: ['Bobo-Dioulasso', 'Koudougou', 'Banfora'],
        region: 'Africa'
    },
    {
        name: 'Burundi',
        flag: '🇧🇮',
        capital: 'Gitega',
        cities: ['Bujumbura', 'Muyinga', 'Ngozi'],
        region: 'Africa'
    },
    {
        name: 'Cabo Verde',
        flag: '🇨🇻',
        capital: 'Praia',
        cities: ['Mindelo', 'Santa Maria', 'Assomada'],
        region: 'Africa'
    },
    {
        name: 'Cambodia',
        flag: '🇰🇭',
        capital: 'Phnom Penh',
        cities: ['Siem Reap', 'Battambang', 'Sihanoukville'],
        region: 'Asia'
    },
    {
        name: 'Cameroon',
        flag: '🇨🇲',
        capital: 'Yaoundé',
        cities: ['Douala', 'Garoua', 'Bamenda'],
        region: 'Africa'
    },
    {
        name: 'Canada',
        flag: '🇨🇦',
        capital: 'Ottawa',
        cities: ['Toronto', 'Vancouver', 'Montreal'],
        region: 'North America'
    },
    {
        name: 'Canary Islands',
        flag: '🇮🇨',
        capital: 'Las Palmas',
        cities: ['Santa Cruz de Tenerife', 'La Laguna', 'Telde'],
        region: 'Europe'
    },
    {
        name: 'Cayman Islands',
        flag: '🇰🇾',
        capital: 'George Town',
        cities: ['West Bay', 'Bodden Town', 'East End'],
        region: 'North America'
    },
    {
        name: 'Caribbean Netherlands',
        flag: '🇧🇶',
        capital: 'Kralendijk',
        cities: ['Oranjestad', 'The Bottom'],
        region: 'North America'
    },
    {
        name: 'Central African Republic',
        flag: '🇨🇫',
        capital: 'Bangui',
        cities: ['Bimbo', 'Mbaïki', 'Berbérati'],
        region: 'Africa'
    },
    {
        name: 'Chad',
        flag: '🇹🇩',
        capital: 'N´Djamena',
        cities: ['Moundou', 'Sarh', 'Abéché'],
        region: 'Africa'
    },
    {
        name: 'Chile',
        flag: '🇨🇱',
        capital: 'Santiago',
        cities: ['Valparaíso', 'Concepción', 'La Serena'],
        region: 'South America'
    },
    {
        name: 'China',
        flag: '🇨🇳',
        capital: 'Beijing',
        cities: ['Shanghai', 'Guangzhou', 'Shenzhen'],
        region: 'Asia'
    },
    {
        name: 'Christmas Island',
        flag: '🇨🇽',
        capital: 'Flying Fish Cove',
        cities: ['Silver City', 'Poon Saan', 'Drumsite'],
        region: 'Asia'
    },
    {
        name: 'Cocos (Keeling) Islands',
        flag: '🇨🇨',
        capital: 'West Island',
        cities: ['Bantam Village'],
        region: 'Asia'
    },
    {
        name: 'Colombia',
        flag: '🇨🇴',
        capital: 'Bogotá',
        cities: ['Medellín', 'Cali', 'Barranquilla'],
        region: 'South America'
    },
    {
        name: 'Comoros',
        flag: '🇰🇲',
        capital: 'Moroni',
        cities: ['Mutsamudu', 'Fomboni', 'Domoni'],
        region: 'Africa'
    },
    {
        name: 'Congo - Brazzaville',
        flag: '🇨🇬',
        capital: 'Brazzaville',
        cities: ['Pointe-Noire', 'Dolisie', 'Nkayi'],
        region: 'Africa'
    },
    {
        name: 'Congo - Kinshasa',
        flag: '🇨🇩',
        capital: 'Kinshasa',
        cities: ['Lubumbashi', 'Mbuji-Mayi', 'Kisangani'],
        region: 'Africa'
    },
    {
        name: 'Cook Islands',
        flag: '🇨🇰',
        capital: 'Avarua',
        cities: ['Arutanga', 'Omoka', 'Mangaia'],
        region: 'Oceania'
    },
    {
        name: 'Costa Rica',
        flag: '🇨🇷',
        capital: 'San José',
        cities: ['Alajuela', 'Cartago', 'Heredia'],
        region: 'North America'
    },
    {
        name: 'Côte d´Ivoire',
        flag: '🇨🇮',
        capital: 'Yamoussoukro',
        cities: ['Abidjan', 'Bouaké', 'Daloa'],
        region: 'Africa'
    },
    {
        name: 'Clipperton Island',
        flag: '🇨🇵',
        capital: 'No Capital',
        cities: ['No Major Cities'],
        region: 'North America'
    },
    {
        name: 'Croatia',
        flag: '🇭🇷',
        capital: 'Zagreb',
        cities: ['Split', 'Rijeka', 'Osijek'],
        region: 'Europe'
    },
    {
        name: 'Cuba',
        flag: '🇨🇺',
        capital: 'Havana',
        cities: ['Santiago de Cuba', 'Camagüey', 'Holguín'],
        region: 'North America'
    },
    {
        name: 'Curaçao',
        flag: '🇨🇼',
        capital: 'Willemstad',
        cities: ['Nieuwpoort', 'Barber', 'Soto'],
        region: 'North America'
    },
    {
        name: 'Cyprus',
        flag: '🇨🇾',
        capital: 'Nicosia',
        cities: ['Limassol', 'Larnaca', 'Famagusta'],
        region: 'Europe'
    },
    {
        name: 'Czechia',
        flag: '🇨🇿',
        capital: 'Prague',
        cities: ['Brno', 'Ostrava', 'Plzeň'],
        region: 'Europe'
    },
    {
        name: 'Denmark',
        flag: '🇩🇰',
        capital: 'Copenhagen',
        cities: ['Aarhus', 'Odense', 'Aalborg'],
        region: 'Europe'
    },
    {
        name: 'Diego Garcia',
        flag: '🇩🇬',
        capital: 'No Capital',
        cities: ['No Major Cities'],
        region: 'Asia'
    },
    {
        name: 'Djibouti',
        flag: '🇩🇯',
        capital: 'Djibouti',
        cities: ['Ali Sabieh', 'Tadjoura', 'Obock'],
        region: 'Africa'
    },
    {
        name: 'Dominica',
        flag: '🇩🇲',
        capital: 'Roseau',
        cities: ['Portsmouth', 'Marigot', 'Berekua'],
        region: 'North America'
    },
    {
        name: 'Dominican Republic',
        flag: '🇩🇴',
        capital: 'Santo Domingo',
        cities: ['Santiago de los Caballeros', 'La Romana', 'San Pedro de Macorís'],
        region: 'North America'
    },
    {
        name: 'Ecuador',
        flag: '🇪🇨',
        capital: 'Quito',
        cities: ['Guayaquil', 'Cuenca', 'Santo Domingo'],
        region: 'South America'
    },
    {
        name: 'Egypt',
        flag: '🇪🇬',
        capital: 'Cairo',
        cities: ['Alexandria', 'Giza', 'Shubra El Kheima'],
        region: 'Africa'
    },
    {
        name: 'El Salvador',
        flag: '🇸🇻',
        capital: 'San Salvador',
        cities: ['Santa Ana', 'San Miguel', 'Mejicanos'],
        region: 'North America'
    },
    {
        name: 'Equatorial Guinea',
        flag: '🇬🇶',
        capital: 'Malabo',
        cities: ['Bata', 'Ebebiyin', 'Aconibe'],
        region: 'Africa'
    },
    {
        name: 'Eritrea',
        flag: '🇪🇷',
        capital: 'Asmara',
        cities: ['Keren', 'Massawa', 'Mendefera'],
        region: 'Africa'
    },
    {
        name: 'Estonia',
        flag: '🇪🇪',
        capital: 'Tallinn',
        cities: ['Tartu', 'Narva', 'Pärnu'],
        region: 'Europe'
    },
    {
        name: 'Eswatini',
        flag: '🇸🇿',
        capital: 'Mbabane',
        cities: ['Manzini', 'Lobamba', 'Siteki'],
        region: 'Africa'
    },
    {
        name: 'Ethiopia',
        flag: '🇪🇹',
        capital: 'Addis Ababa',
        cities: ['Dire Dawa', 'Mekelle', 'Gondar'],
        region: 'Africa'
    },
    {
        name: 'European Union',
        flag: '🇪🇺',
        capital: 'Brussels',
        cities: ['Luxembourg', 'Strasbourg', 'Frankfurt'],
        region: 'Europe'
    },
    {
        name: 'Falkland Islands',
        flag: '🇫🇰',
        capital: 'Stanley',
        cities: ['Goose Green'],
        region: 'South America'
    },
    {
        name: 'Faroe Islands',
        flag: '🇫🇴',
        capital: 'Tórshavn',
        cities: ['Klaksvík', 'Hoyvík', 'Argir'],
        region: 'Europe'
    },
    {
        name: 'Fiji',
        flag: '🇫🇯',
        capital: 'Suva',
        cities: ['Nadi', 'Lautoka', 'Labasa'],
        region: 'Oceania'
    },
    {
        name: 'Finland',
        flag: '🇫🇮',
        capital: 'Helsinki',
        cities: ['Espoo', 'Tampere', 'Vantaa'],
        region: 'Europe'
    },
    {
        name: 'France',
        flag: '🇫🇷',
        capital: 'Paris',
        cities: ['Marseille', 'Lyon', 'Toulouse'],
        region: 'Europe'
    },
    {
        name: 'French Guiana',
        flag: '🇬🇫',
        capital: 'Cayenne',
        cities: ['Saint-Laurent-du-Maroni', 'Kourou', 'Macouria'],
        region: 'South America'
    },
    {
        name: 'French Polynesia',
        flag: '🇵🇫',
        capital: 'Papeete',
        cities: ['Faaa', 'Punaauia', 'Mahina'],
        region: 'Oceania'
    },
    {
        name: 'Gabon',
        flag: '🇬🇦',
        capital: 'Libreville',
        cities: ['Port-Gentil', 'Franceville', 'Oyem'],
        region: 'Africa'
    },
    {
        name: 'Gambia',
        flag: '🇬🇲',
        capital: 'Banjul',
        cities: ['Serekunda', 'Brikama', 'Bakau'],
        region: 'Africa'
    },
    {
        name: 'Georgia',
        flag: '🇬🇪',
        capital: 'Tbilisi',
        cities: ['Kutaisi', 'Batumi', 'Rustavi'],
        region: 'Asia'
    },
    {
        name: 'Germany',
        flag: '🇩🇪',
        capital: 'Berlin',
        cities: ['Hamburg', 'Munich', 'Frankfurt'],
        region: 'Europe'
    },
    {
        name: 'Gibraltar',
        flag: '🇬🇮',
        capital: 'Gibraltar',
        cities: ['No Major Cities'],
        region: 'Europe'
    },
    {
        name: 'Ghana',
        flag: '🇬🇭',
        capital: 'Accra',
        cities: ['Kumasi', 'Tamale', 'Sekondi-Takoradi'],
        region: 'Africa'
    },
    {
        name: 'Greece',
        flag: '🇬🇷',
        capital: 'Athens',
        cities: ['Thessaloniki', 'Patras', 'Heraklion'],
        region: 'Europe'
    },
    {
        name: 'Greenland',
        flag: '🇬🇱',
        capital: 'Nuuk',
        cities: ['Sisimiut', 'Ilulissat', 'Qaqortoq'],
        region: 'North America'
    },
    {
        name: 'Grenada',
        flag: '🇬🇩',
        capital: 'St. George´s',
        cities: ['Gouyave', 'Grenville', 'Victoria'],
        region: 'North America'
    },
    {
        name: 'Guadeloupe',
        flag: '🇬🇵',
        capital: 'Basse-Terre',
        cities: ['Les Abymes', 'Baie-Mahault', 'Le Gosier'],
        region: 'North America'
    },
    {
        name: 'Guam',
        flag: '🇬🇺',
        capital: 'Hagåtña',
        cities: ['Dededo', 'Yigo', 'Tamuning'],
        region: 'Oceania'
    },
    {
        name: 'Guatemala',
        flag: '🇬🇹',
        capital: 'Guatemala City',
        cities: ['Mixco', 'Villa Nueva', 'Quetzaltenango'],
        region: 'North America'
    },
    {
        name: 'Guernsey',
        flag: '🇬🇬',
        capital: 'St. Peter Port',
        cities: ['St. Sampson', 'St. Martin', 'St. Andrew'],
        region: 'Europe'
    },
    {
        name: 'Guinea',
        flag: '🇬🇳',
        capital: 'Conakry',
        cities: ['Nzérékoré', 'Kankan', 'Kindia'],
        region: 'Africa'
    },
    {
        name: 'Guinea-Bissau',
        flag: '🇬🇼',
        capital: 'Bissau',
        cities: ['Bafatá', 'Gabú', 'Bissorã'],
        region: 'Africa'
    },
    {
        name: 'Guyana',
        flag: '🇬🇾',
        capital: 'Georgetown',
        cities: ['Linden', 'New Amsterdam', 'Bartica'],
        region: 'South America'
    },
    {
        name: 'Haiti',
        flag: '🇭🇹',
        capital: 'Port-au-Prince',
        cities: ['Cap-Haïtien', 'Les Cayes', 'Gonaïves'],
        region: 'North America'
    },
    {
        name: 'Heard & McDonald Islands',
        flag: '🇭🇲',
        capital: 'No Capital',
        cities: ['No Major Cities'],
        region: 'Antarctica'
    },
    {
        name: 'Honduras',
        flag: '🇭🇳',
        capital: 'Tegucigalpa',
        cities: ['San Pedro Sula', 'Choloma', 'La Ceiba'],
        region: 'North America'
    },
    {
        name: 'Hong Kong SAR China',
        flag: '🇭🇰',
        capital: 'Hong Kong',
        cities: ['Kowloon', 'Tsuen Wan', 'Sha Tin'],
        region: 'Asia'
    },
    {
        name: 'Hungary',
        flag: '🇭🇺',
        capital: 'Budapest',
        cities: ['Debrecen', 'Szeged', 'Miskolc'],
        region: 'Europe'
    },
    {
        name: 'Iceland',
        flag: '🇮🇸',
        capital: 'Reykjavik',
        cities: ['Kopavogur', 'Hafnarfjordur', 'Akureyri'],
        region: 'Europe'
    },
    {
        name: 'India',
        flag: '🇮🇳',
        capital: 'New Delhi',
        cities: ['Mumbai', 'Bangalore', 'Kolkata'],
        region: 'Asia'
    },
    {
        name: 'Indonesia',
        flag: '🇮🇩',
        capital: 'Jakarta',
        cities: ['Surabaya', 'Bandung', 'Medan'],
        region: 'Asia'
    },
    {
        name: 'Iran',
        flag: '🇮🇷',
        capital: 'Tehran',
        cities: ['Mashhad', 'Isfahan', 'Shiraz'],
        region: 'Asia'
    },
    {
        name: 'Iraq',
        flag: '🇮🇶',
        capital: 'Baghdad',
        cities: ['Basra', 'Mosul', 'Erbil'],
        region: 'Asia'
    },
    {
        name: 'Ireland',
        flag: '🇮🇪',
        capital: 'Dublin',
        cities: ['Cork', 'Limerick', 'Galway'],
        region: 'Europe'
    },
    {
        name: 'Isle of Man',
        flag: '🇮🇲',
        capital: 'Douglas',
        cities: ['Ramsey', 'Peel', 'Castletown'],
        region: 'Europe'
    },
    {
        name: 'Israel',
        flag: '🇮🇱',
        capital: 'Jerusalem',
        cities: ['Tel Aviv', 'Haifa', 'Rishon LeZion'],
        region: 'Asia'
    },
    {
        name: 'Italy',
        flag: '🇮🇹',
        capital: 'Rome',
        cities: ['Milan', 'Naples', 'Turin'],
        region: 'Europe'
    },
    {
        name: 'Jamaica',
        flag: '🇯🇲',
        capital: 'Kingston',
        cities: ['Montego Bay', 'Spanish Town', 'Portmore'],
        region: 'North America'
    },
    {
        name: 'Japan',
        flag: '🇯🇵',
        capital: 'Tokyo',
        cities: ['Osaka', 'Yokohama', 'Nagoya'],
        region: 'Asia'
    },
    {
        name: 'Jersey',
        flag: '🇯🇪',
        capital: 'Saint Helier',
        cities: ['Saint Saviour', 'Saint Brelade', 'Grouville'],
        region: 'Europe'
    },
    {
        name: 'Jordan',
        flag: '🇯🇴',
        capital: 'Amman',
        cities: ['Zarqa', 'Irbid', 'Aqaba'],
        region: 'Asia'
    },
    {
        name: 'Kazakhstan',
        flag: '🇰🇿',
        capital: 'Astana',
        cities: ['Almaty', 'Shymkent', 'Karaganda'],
        region: 'Asia'
    },
    {
        name: 'Kenya',
        flag: '🇰🇪',
        capital: 'Nairobi',
        cities: ['Mombasa', 'Kisumu', 'Nakuru'],
        region: 'Africa'
    },
    {
        name: 'Kiribati',
        flag: '🇰🇮',
        capital: 'Tarawa',
        cities: ['Betio', 'Bairiki', 'Tabiteuea'],
        region: 'Oceania'
    },
    {
        name: 'Kuwait',
        flag: '🇰🇼',
        capital: 'Kuwait City',
        cities: ['Al Ahmadi', 'Hawalli', 'Salmiya'],
        region: 'Asia'
    },
    {
        name: 'Kyrgyzstan',
        flag: '🇰🇬',
        capital: 'Bishkek',
        cities: ['Osh', 'Jalal-Abad', 'Karakol'],
        region: 'Asia'
    },
    {
        name: 'Laos',
        flag: '🇱🇦',
        capital: 'Vientiane',
        cities: ['Luang Prabang', 'Pakse', 'Savannakhet'],
        region: 'Asia'
    },
    {
        name: 'Latvia',
        flag: '🇱🇻',
        capital: 'Riga',
        cities: ['Daugavpils', 'Liepāja', 'Jelgava'],
        region: 'Europe'
    },
    {
        name: 'Lebanon',
        flag: '🇱🇧',
        capital: 'Beirut',
        cities: ['Tripoli', 'Sidon', 'Zahle'],
        region: 'Asia'
    },
    {
        name: 'Lesotho',
        flag: '🇱🇸',
        capital: 'Maseru',
        cities: ['Teyateyaneng', 'Mafeteng', 'Hlotse'],
        region: 'Africa'
    },
    {
        name: 'Liberia',
        flag: '🇱🇷',
        capital: 'Monrovia',
        cities: ['Gbarnga', 'Buchanan', 'Kakata'],
        region: 'Africa'
    },
    {
        name: 'Libya',
        flag: '🇱🇾',
        capital: 'Tripoli',
        cities: ['Benghazi', 'Misrata', 'Bayda'],
        region: 'Africa'
    },
    {
        name: 'Liechtenstein',
        flag: '🇱🇮',
        capital: 'Vaduz',
        cities: ['Schaan', 'Balzers', 'Triesen'],
        region: 'Europe'
    },
    {
        name: 'Lithuania',
        flag: '🇱🇹',
        capital: 'Vilnius',
        cities: ['Kaunas', 'Klaipėda', 'Šiauliai'],
        region: 'Europe'
    },
    {
        name: 'Luxembourg',
        flag: '🇱🇺',
        capital: 'Luxembourg City',
        cities: ['Esch-sur-Alzette', 'Differdange', 'Dudelange'],
        region: 'Europe'
    },
    {
        name: 'Madagascar',
        flag: '🇲🇬',
        capital: 'Antananarivo',
        cities: ['Toamasina', 'Antsirabe', 'Fianarantsoa'],
        region: 'Africa'
    },
    {
        name: 'Malawi',
        flag: '🇲🇼',
        capital: 'Lilongwe',
        cities: ['Blantyre', 'Mzuzu', 'Zomba'],
        region: 'Africa'
    },
    {
        name: 'Malaysia',
        flag: '🇲🇾',
        capital: 'Kuala Lumpur',
        cities: ['George Town', 'Johor Bahru', 'Ipoh'],
        region: 'Asia'
    },
    {
        name: 'Maldives',
        flag: '🇲🇻',
        capital: 'Malé',
        cities: ['Addu City', 'Fuvahmulah', 'Thinadhoo'],
        region: 'Asia'
    },
    {
        name: 'Mali',
        flag: '🇲🇱',
        capital: 'Bamako',
        cities: ['Sikasso', 'Mopti', 'Koutiala'],
        region: 'Africa'
    },
    {
        name: 'Malta',
        flag: '🇲🇹',
        capital: 'Valletta',
        cities: ['Birkirkara', 'Mosta', 'Sliema'],
        region: 'Europe'
    },
    {
        name: 'Marshall Islands',
        flag: '🇲🇭',
        capital: 'Majuro',
        cities: ['Ebeye', 'Jaluit', 'Wotje'],
        region: 'Oceania'
    },
    {
        name: 'Martinique',
        flag: '🇲🇶',
        capital: 'Fort-de-France',
        cities: ['Le Lamentin', 'Le Robert', 'Sainte-Marie'],
        region: 'North America'
    },
    {
        name: 'Mauritania',
        flag: '🇲🇷',
        capital: 'Nouakchott',
        cities: ['Nouadhibou', 'Kaédi', 'Rosso'],
        region: 'Africa'
    },
    {
        name: 'Mauritius',
        flag: '🇲🇺',
        capital: 'Port Louis',
        cities: ['Vacoas-Phoenix', 'Beau Bassin-Rose Hill', 'Curepipe'],
        region: 'Africa'
    },
    {
        name: 'Mexico',
        flag: '🇲🇽',
        capital: 'Mexico City',
        cities: ['Guadalajara', 'Monterrey', 'Puebla'],
        region: 'North America'
    },
    {
        name: 'Micronesia',
        flag: '🇫🇲',
        capital: 'Palikir',
        cities: ['Weno', 'Tofol', 'Kolonia'],
        region: 'Oceania'
    },
    {
        name: 'Moldova',
        flag: '🇲🇩',
        capital: 'Chișinău',
        cities: ['Tiraspol', 'Bălți', 'Bender'],
        region: 'Europe'
    },
    {
        name: 'Monaco',
        flag: '🇲🇨',
        capital: 'Monaco',
        cities: ['Monte Carlo', 'La Condamine', 'Fontvieille'],
        region: 'Europe'
    },
    {
        name: 'Mongolia',
        flag: '🇲🇳',
        capital: 'Ulaanbaatar',
        cities: ['Erdenet', 'Darkhan', 'Choibalsan'],
        region: 'Asia'
    },
    {
        name: 'Montenegro',
        flag: '🇲🇪',
        capital: 'Podgorica',
        cities: ['Nikšić', 'Herceg Novi', 'Pljevlja'],
        region: 'Europe'
    },
    {
        name: 'Montserrat',
        flag: '🇲🇸',
        capital: 'Plymouth (de jure), Brades (de facto)',
        cities: ['Salem', 'Saint Peter´s'],
        region: 'North America'
    },
    {
        name: 'Morocco',
        flag: '🇲🇦',
        capital: 'Rabat',
        cities: ['Casablanca', 'Fes', 'Marrakesh'],
        region: 'Africa'
    },
    {
        name: 'Mozambique',
        flag: '🇲🇿',
        capital: 'Maputo',
        cities: ['Matola', 'Beira', 'Nampula'],
        region: 'Africa'
    },
    {
        name: 'Myanmar',
        flag: '🇲🇲',
        capital: 'Naypyidaw',
        cities: ['Yangon', 'Mandalay', 'Naypyidaw'],
        region: 'Asia'
    },
    {
        name: 'Namibia',
        flag: '🇳🇦',
        capital: 'Windhoek',
        cities: ['Walvis Bay', 'Rundu', 'Oshakati'],
        region: 'Africa'
    },
    {
        name: 'Nauru',
        flag: '🇳🇷',
        capital: 'Yaren (de facto)',
        cities: ['Boe', 'Aiwo', 'Anabar'],
        region: 'Oceania'
    },
    {
        name: 'Nepal',
        flag: '🇳🇵',
        capital: 'Kathmandu',
        cities: ['Pokhara', 'Lalitpur', 'Biratnagar'],
        region: 'Asia'
    },
    {
        name: 'Netherlands',
        flag: '🇳🇱',
        capital: 'Amsterdam',
        cities: ['Rotterdam', 'The Hague', 'Utrecht'],
        region: 'Europe'
    },
    {
        name: 'New Caledonia',
        flag: '🇳🇨',
        capital: 'Nouméa',
        cities: ['Mont-Dore', 'Dumbéa', 'Païta'],
        region: 'Oceania'
    },
    {
        name: 'New Zealand',
        flag: '🇳🇿',
        capital: 'Wellington',
        cities: ['Auckland', 'Christchurch', 'Hamilton'],
        region: 'Oceania'
    },
    {
        name: 'Northern Mariana Islands',
        flag: '🇲🇵',
        capital: 'Saipan',
        cities: ['Tinian', 'Rota', 'San Antonio'],
        region: 'Oceania'
    },
    {
        name: 'Nicaragua',
        flag: '🇳🇮',
        capital: 'Managua',
        cities: ['León', 'Masaya', 'Granada'],
        region: 'North America'
    },
    {
        name: 'Niger',
        flag: '🇳🇪',
        capital: 'Niamey',
        cities: ['Zinder', 'Maradi', 'Agadez'],
        region: 'Africa'
    },
    {
        name: 'Nigeria',
        flag: '🇳🇬',
        capital: 'Abuja',
        cities: ['Lagos', 'Kano', 'Ibadan'],
        region: 'Africa'
    },
    {
        name: 'Niue',
        flag: '🇳🇺',
        capital: 'Alofi',
        cities: ['Hakupu', 'Avatele', 'Tuapa'],
        region: 'Oceania'
    },
    {
        name: 'North Korea',
        flag: '🇰🇵',
        capital: 'Pyongyang',
        cities: ['Hamhung', 'Chongjin', 'Nampo'],
        region: 'Asia'
    },
    {
        name: 'North Macedonia',
        flag: '🇲🇰',
        capital: 'Skopje',
        cities: ['Bitola', 'Kumanovo', 'Prilep'],
        region: 'Europe'
    },
    {
        name: 'Norfolk Island',
        flag: '🇳🇫',
        capital: 'Kingston',
        cities: ['Burnt Pine'],
        region: 'Oceania'
    },
    {
        name: 'Norway',
        flag: '🇳🇴',
        capital: 'Oslo',
        cities: ['Bergen', 'Trondheim', 'Stavanger'],
        region: 'Europe'
    },
    {
        name: 'Oman',
        flag: '🇴🇲',
        capital: 'Muscat',
        cities: ['Salalah', 'Sohar', 'Nizwa'],
        region: 'Asia'
    },
    {
        name: 'Pakistan',
        flag: '🇵🇰',
        capital: 'Islamabad',
        cities: ['Karachi', 'Lahore', 'Faisalabad'],
        region: 'Asia'
    },
    {
        name: 'Palau',
        flag: '🇵🇼',
        capital: 'Ngerulmud',
        cities: ['Koror', 'Melekeok', 'Airai'],
        region: 'Oceania'
    },
    {
        name: 'Palestine',
        flag: '🇵🇸',
        capital: 'East Jerusalem',
        cities: ['Gaza City', 'Hebron', 'Nablus'],
        region: 'Asia'
    },
    {
        name: 'Panama',
        flag: '🇵🇦',
        capital: 'Panama City',
        cities: ['San Miguelito', 'Tocumen', 'David'],
        region: 'North America'
    },
    {
        name: 'Papua New Guinea',
        flag: '🇵🇬',
        capital: 'Port Moresby',
        cities: ['Lae', 'Mount Hagen', 'Madang'],
        region: 'Oceania'
    },
    {
        name: 'Paraguay',
        flag: '🇵🇾',
        capital: 'Asunción',
        cities: ['Ciudad del Este', 'San Lorenzo', 'Luque'],
        region: 'South America'
    },
    {
        name: 'Peru',
        flag: '🇵🇪',
        capital: 'Lima',
        cities: ['Arequipa', 'Trujillo', 'Chiclayo'],
        region: 'South America'
    },
    {
        name: 'Philippines',
        flag: '🇵🇭',
        capital: 'Manila',
        cities: ['Quezon City', 'Davao City', 'Cebu City'],
        region: 'Asia'
    },
    {
        name: 'Pitcairn Islands',
        flag: '🇵🇳',
        capital: 'Adamstown',
        cities: ['No Major Cities'],
        region: 'Oceania'
    },
    {
        name: 'Poland',
        flag: '🇵🇱',
        capital: 'Warsaw',
        cities: ['Kraków', 'Łódź', 'Wrocław'],
        region: 'Europe'
    },
    {
        name: 'Portugal',
        flag: '🇵🇹',
        capital: 'Lisbon',
        cities: ['Porto', 'Amadora', 'Braga'],
        region: 'Europe'
    },
    {
        name: 'Puerto Rico',
        flag: '🇵🇷',
        capital: 'San Juan',
        cities: ['Bayamón', 'Ponce', 'Carolina'],
        region: 'North America'
    },
    {
        name: 'Qatar',
        flag: '🇶🇦',
        capital: 'Doha',
        cities: ['Al Rayyan', 'Umm Salal Muhammad', 'Al Wakrah'],
        region: 'Asia'
    },
    {
        name: 'Romania',
        flag: '🇷🇴',
        capital: 'Bucharest',
        cities: ['Cluj-Napoca', 'Timișoara', 'Iași'],
        region: 'Europe'
    },
    {
        name: 'Russia',
        flag: '🇷🇺',
        capital: 'Moscow',
        cities: ['Saint Petersburg', 'Novosibirsk', 'Yekaterinburg'],
        region: 'Europe'
    },
    {
        name: 'Rwanda',
        flag: '🇷🇼',
        capital: 'Kigali',
        cities: ['Butare', 'Gitarama', 'Musanze'],
        region: 'Africa'
    },
    {
        name: 'Saint Barthélemy',
        flag: '🇧🇱',
        capital: 'Gustavia',
        cities: ['Lorient', 'Saint-Jean', 'Corossol'],
        region: 'North America'
    },
    {
        name: 'Samoa',
        flag: '🇼🇸',
        capital: 'Apia',
        cities: ['Vaitele', 'Faleasiu', 'Vaiusu'],
        region: 'Oceania'
    },
    {
        name: 'San Marino',
        flag: '🇸🇲',
        capital: 'San Marino',
        cities: ['Serravalle', 'Borgo Maggiore', 'Domagnano'],
        region: 'Europe'
    },
    {
        name: 'Saudi Arabia',
        flag: '🇸🇦',
        capital: 'Riyadh',
        cities: ['Jeddah', 'Mecca', 'Medina'],
        region: 'Asia'
    },
    {
        name: 'Senegal',
        flag: '🇸🇳',
        capital: 'Dakar',
        cities: ['Touba', 'Thiès', 'Kaolack'],
        region: 'Africa'
    },
    {
        name: 'Serbia',
        flag: '🇷🇸',
        capital: 'Belgrade',
        cities: ['Novi Sad', 'Niš', 'Kragujevac'],
        region: 'Europe'
    },
    {
        name: 'Seychelles',
        flag: '🇸🇨',
        capital: 'Victoria',
        cities: ['Anse Boileau', 'Bel Ombre', 'Beau Vallon'],
        region: 'Africa'
    },
    {
        name: 'Sierra Leone',
        flag: '🇸🇱',
        capital: 'Freetown',
        cities: ['Bo', 'Kenema', 'Makeni'],
        region: 'Africa'
    },
    {
        name: 'Singapore',
        flag: '🇸🇬',
        capital: 'Singapore',
        cities: ['Jurong East', 'Woodlands', 'Changi'],
        region: 'Asia'
    },
    {
        name: 'Slovakia',
        flag: '🇸🇰',
        capital: 'Bratislava',
        cities: ['Košice', 'Prešov', 'Žilina'],
        region: 'Europe'
    },
    {
        name: 'Slovenia',
        flag: '🇸🇮',
        capital: 'Ljubljana',
        cities: ['Maribor', 'Celje', 'Kranj'],
        region: 'Europe'
    },
    {
        name: 'Solomon Islands',
        flag: '🇸🇧',
        capital: 'Honiara',
        cities: ['Gizo', 'Auki', 'Munda'],
        region: 'Oceania'
    },
    {
        name: 'Somalia',
        flag: '🇸🇴',
        capital: 'Mogadishu',
        cities: ['Hargeisa', 'Bosaso', 'Baidoa'],
        region: 'Africa'
    },
    {
        name: 'South Africa',
        flag: '🇿🇦',
        capital: 'Pretoria (executive), Bloemfontein (judicial), Cape Town (legislative)',
        cities: ['Johannesburg', 'Durban', 'Soweto'],
        region: 'Africa'
    },
    {
        name: 'South Georgia & South Sandwich Islands',
        flag: '🇬🇸',
        capital: 'King Edward Point',
        cities: ['Grytviken'],
        region: 'Antarctica'
    },
    {
        name: 'South Korea',
        flag: '🇰🇷',
        capital: 'Seoul',
        cities: ['Busan', 'Incheon', 'Daegu'],
        region: 'Asia'
    },
    {
        name: 'South Sudan',
        flag: '🇸🇸',
        capital: 'Juba',
        cities: ['Malakal', 'Wau', 'Yei'],
        region: 'Africa'
    },
    {
        name: 'Spain',
        flag: '🇪🇸',
        capital: 'Madrid',
        cities: ['Barcelona', 'Valencia', 'Seville'],
        region: 'Europe'
    },
    {
        name: 'Sri Lanka',
        flag: '🇱🇰',
        capital: 'Sri Jayawardenepura Kotte',
        cities: ['Colombo', 'Kandy', 'Galle'],
        region: 'Asia'
    },
    {
        name: 'St. Helena',
        flag: '🇸🇭',
        capital: 'Jamestown',
        cities: ['Georgetown', 'Edinburgh of the Seven Seas'],
        region: 'Africa'
    },
    {
        name: 'St. Pierre & Miquelon',
        flag: '🇵🇲',
        capital: 'Saint-Pierre',
        cities: ['Miquelon-Langlade'],
        region: 'North America'
    },
    {
        name: 'Sudan',
        flag: '🇸🇩',
        capital: 'Khartoum',
        cities: ['Omdurman', 'Port Sudan', 'Kassala'],
        region: 'Africa'
    },
    {
        name: 'Suriname',
        flag: '🇸🇷',
        capital: 'Paramaribo',
        cities: ['Lelydorp', 'Nieuw Nickerie', 'Moengo'],
        region: 'South America'
    },
    {
        name: 'Sweden',
        flag: '🇸🇪',
        capital: 'Stockholm',
        cities: ['Gothenburg', 'Malmö', 'Uppsala'],
        region: 'Europe'
    },
    {
        name: 'Switzerland',
        flag: '🇨🇭',
        capital: 'Bern',
        cities: ['Zurich', 'Geneva', 'Basel'],
        region: 'Europe'
    },
    {
        name: 'Syria',
        flag: '🇸🇾',
        capital: 'Damascus',
        cities: ['Aleppo', 'Homs', 'Latakia'],
        region: 'Asia'
    },
    {
        name: 'Taiwan',
        flag: '🇹🇼',
        capital: 'Taipei',
        cities: ['Kaohsiung', 'Taichung', 'Tainan'],
        region: 'Asia'
    },
    {
        name: 'Tajikistan',
        flag: '🇹🇯',
        capital: 'Dushanbe',
        cities: ['Khujand', 'Kulob', 'Bokhtar'],
        region: 'Asia'
    },
    {
        name: 'Tanzania',
        flag: '🇹🇿',
        capital: 'Dodoma',
        cities: ['Dar es Salaam', 'Mwanza', 'Arusha'],
        region: 'Africa'
    },
    {
        name: 'Thailand',
        flag: '🇹🇭',
        capital: 'Bangkok',
        cities: ['Chiang Mai', 'Pattaya', 'Phuket'],
        region: 'Asia'
    },
    {
        name: 'Timor-Leste',
        flag: '🇹🇱',
        capital: 'Dili',
        cities: ['Baucau', 'Manatuto', 'Lospalos'],
        region: 'Asia'
    },
    {
        name: 'Togo',
        flag: '🇹🇬',
        capital: 'Lomé',
        cities: ['Sokodé', 'Kara', 'Atakpamé'],
        region: 'Africa'
    },
    {
        name: 'Tonga',
        flag: '🇹🇴',
        capital: 'Nukuʻalofa',
        cities: ['Neiafu', 'Haveluloto', 'Vaini'],
        region: 'Oceania'
    },
    {
        name: 'Trinidad & Tobago',
        flag: '🇹🇹',
        capital: 'Port of Spain',
        cities: ['San Fernando', 'Chaguanas', 'Arima'],
        region: 'North America'
    },
    {
        name: 'Tunisia',
        flag: '🇹🇳',
        capital: 'Tunis',
        cities: ['Sfax', 'Sousse', 'Ettadhamen'],
        region: 'Africa'
    },
    {
        name: 'Turkey',
        flag: '🇹🇷',
        capital: 'Ankara',
        cities: ['Istanbul', 'Izmir', 'Bursa'],
        region: 'Asia'
    },
    {
        name: 'Turkmenistan',
        flag: '🇹🇲',
        capital: 'Ashgabat',
        cities: ['Turkmenabat', 'Dashoguz', 'Mary'],
        region: 'Asia'
    },
    {
        name: 'Tuvalu',
        flag: '🇹🇻',
        capital: 'Funafuti',
        cities: ['Savave', 'Tanrake', 'Toga'],
        region: 'Oceania'
    },
    {
        name: 'Uganda',
        flag: '🇺🇬',
        capital: 'Kampala',
        cities: ['Gulu', 'Lira', 'Mbarara'],
        region: 'Africa'
    },
    {
        name: 'Ukraine',
        flag: '🇺🇦',
        capital: 'Kyiv',
        cities: ['Kharkiv', 'Odessa', 'Dnipro'],
        region: 'Europe'
    },
    {
        name: 'United Arab Emirates',
        flag: '🇦🇪',
        capital: 'Abu Dhabi',
        cities: ['Dubai', 'Sharjah', 'Al Ain'],
        region: 'Asia'
    },
    {
        name: 'United Kingdom',
        flag: '🇬🇧',
        capital: 'London',
        cities: ['Birmingham', 'Manchester', 'Glasgow'],
        region: 'Europe'
    },
    {
        name: 'United States',
        flag: '🇺🇸',
        capital: 'Washington, D.C.',
        cities: ['New York City', 'Los Angeles', 'Chicago'],
        region: 'North America'
    },
    {
        name: 'Uruguay',
        flag: '🇺🇾',
        capital: 'Montevideo',
        cities: ['Salto', 'Ciudad de la Costa', 'Paysandú'],
        region: 'South America'
    },
    {
        name: 'Uzbekistan',
        flag: '🇺🇿',
        capital: 'Tashkent',
        cities: ['Samarkand', 'Bukhara', 'Namangan'],
        region: 'Asia'
    },
    {
        name: 'Vanuatu',
        flag: '🇻🇺',
        capital: 'Port Vila',
        cities: ['Luganville', 'Norsup', 'Isangel'],
        region: 'Oceania'
    },
    {
        name: 'Vatican City',
        flag: '🇻🇦',
        capital: 'Vatican City',
        cities: ['No Major Cities'],
        region: 'Europe'
    },
    {
        name: 'Venezuela',
        flag: '🇻🇪',
        capital: 'Caracas',
        cities: ['Maracaibo', 'Valencia', 'Barquisimeto'],
        region: 'South America'
    },
    {
        name: 'Vietnam',
        flag: '🇻🇳',
        capital: 'Hanoi',
        cities: ['Ho Chi Minh City', 'Da Nang', 'Hai Phong'],
        region: 'Asia'
    },
    {
        name: 'Western Sahara',
        flag: '🇪🇭',
        capital: 'Laayoune',
        cities: ['Dakhla', 'Smara'],
        region: 'Africa'
    },
    {
        name: 'Yemen',
        flag: '🇾🇪',
        capital: 'Sana\'a',
        cities: ['Aden', 'Taiz', 'Al Hudaydah'],
        region: 'Asia'
    },
    {
        name: 'Zambia',
        flag: '🇿🇲',
        capital: 'Lusaka',
        cities: ['Kitwe', 'Ndola', 'Livingstone'],
        region: 'Africa'
    },
    {
        name: 'Zimbabwe',
        flag: '🇿🇼',
        capital: 'Harare',
        cities: ['Bulawayo', 'Chitungwiza', 'Mutare'],
        region: 'Africa'
    }
];

let currentCountry;
let correctCount = 0;
let incorrectCount = 0;
let streakCount = 0;
let difficulty = 'easy'; // Dificultad inicial
let shownFlags = []; // Array para mantener los países ya mostrados
let flagsRemaining;
let totalFlagsToGuess;

const easyCountries = [
    'United States', 'China', 'Germany', 'United Kingdom', 'France',
    'Japan', 'India', 'Brazil', 'Canada', 'Italy',
    'Australia', 'Russia', 'Mexico', 'South Korea', 'Spain',
    'Saudi Arabia', 'Netherlands', 'Turkey', 'Switzerland', 'Sweden',
    'Argentina', 'South Africa', 'Egypt', 'Indonesia', 'Pakistan', 
    'Thailand', 'Colombia', 'Malaysia', 'Ukraine', 'Poland', 'Chile',
    'Peru', 'Czech Republic', 'Romania', 'Portugal', 'Israel',
    'Belgium', 'Austria', 'Denmark', 'Ireland', 'Greece',
    'Norway', 'New Zealand', 'Finland', 'Singapore', 'United Arab Emirates'
];

const mediumCountries = [
    ...easyCountries,
    'Kazakhstan', 'Angola', 'Morocco', 'Kenya', 'Ethiopia',
    'Ghana', 'Tanzania', 'Algeria', 'Tunisia', 'Jordan',
    'Serbia', 'Hungary', 'Bulgaria', 'Slovakia', 'Croatia',
    'Bosnia & Herzegovina', 'Slovenia', 'Lithuania', 'Latvia', 'Estonia',
    'Lebanon', 'Georgia', 'Armenia', 'Azerbaijan', 'Uzbekistan',
    'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Venezuela',
    'Cuba', 'Panama', 'Uruguay', 'Paraguay', 'Costa Rica',
    'Honduras', 'Guatemala', 'El Salvador', 'Bolivia', 'Ecuador',
    'Nigeria', 'Philippines', 'Bangladesh', 'Vietnam'
];

const hardCountries = [
    ...mediumCountries,
    'Afghanistan', 'Albania', 'Andorra', 'Antigua & Barbuda', 'Bahamas',
    'Barbados', 'Belarus', 'Belize', 'Benin', 'Bhutan',
    'Botswana', 'Brunei', 'Burkina Faso', 'Burundi', 'Cabo Verde',
    'Cambodia', 'Cameroon', 'Central African Republic', 'Chad', 'Comoros',
    'Congo - Brazzaville', 'Congo - Kinshasa', 'Djibouti', 'Dominica', 'East Timor',
    'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Fiji', 'Gabon',
    'Gambia', 'Grenada', 'Guinea', 'Guinea-Bissau', 'Guyana',
    'Iceland', 'Jamaica', 'Kiribati', 'Kyrgyzstan', 'Laos',
    'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Luxembourg',
    'Madagascar', 'Malawi', 'Maldives', 'Mali', 'Malta',
    'Marshall Islands', 'Mauritania', 'Mauritius', 'Micronesia', 'Moldova',
    'Monaco', 'Mongolia', 'Montenegro', 'Mozambique', 'Myanmar',
    'Namibia', 'Nauru', 'Nepal', 'Niger', 'North Macedonia',
    'Papua New Guinea', 'Rwanda', 'Saint Kitts & Nevis', 'Saint Lucia', 'Saint Vincent & Grenadines',
    'Samoa', 'San Marino', 'Sao Tome & Principe', 'Seychelles', 'Sierra Leone',
    'Solomon Islands', 'Somalia', 'South Sudan', 'Sri Lanka', 'Suriname',
    'Syria', 'Tajikistan', 'Togo', 'Tonga', 'Trinidad & Tobago',
    'Turkmenistan', 'Tuvalu', 'Uganda', 'Vanuatu', 'Vatican City',
    'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'
];

function startGame(numFlags) {
    correctCount = 0;
    incorrectCount = 0;
    streakCount = 0;
    shownFlags = [];
    totalFlagsToGuess = numFlags === 'all' ? getAvailableCountries().length : numFlags;
    flagsRemaining = totalFlagsToGuess;

    document.getElementById('selection-container').style.display = 'none';
    document.getElementById('game-buttons').style.display = 'flex';
    document.getElementById('flag-display').innerText = '🏳️'; // Mostrar la bandera de inicio

    console.log(`Iniciando juego con dificultad: ${difficulty}`);
    console.log(`Países disponibles:`, getAvailableCountries());
    
    loadNewCapital();
}

function getAvailableCountries() {
    if (difficulty === 'easy') {
        return countries.filter(c => easyCountries.includes(c.name));
    } else if (difficulty === 'medium') {
        return countries.filter(c => mediumCountries.includes(c.name));
    } else {
        return countries.filter(c => hardCountries.includes(c.name));
    }
}

function loadNewCapital() {
    if (shownFlags.length >= totalFlagsToGuess) {
        showEndEmoji();
        return;
    }

    let availableCountries = getAvailableCountries();
    console.log('Países disponibles después de filtrar:', availableCountries);

    let availableFlags = availableCountries.filter(country => !shownFlags.includes(country.name));
    console.log('Banderas disponibles:', availableFlags);

    if (availableFlags.length === 0) {
        console.error('No more countries available.');
        showEndEmoji();
        return;
    }

    currentCountry = availableFlags[Math.floor(Math.random() * availableFlags.length)];
    shownFlags.push(currentCountry.name);
    flagsRemaining = totalFlagsToGuess - shownFlags.length;

    document.getElementById('flag-display').innerText = currentCountry.flag;

    let options = [...currentCountry.cities];
    options.push(currentCountry.capital);
    const shuffledOptions = shuffleArray(options);

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    shuffledOptions.forEach(city => {
        const button = document.createElement('button');
        button.innerText = city;
        button.className = 'option-button';
        button.onclick = () => checkAnswer(button, city);
        optionsContainer.appendChild(button);
    });

    document.getElementById('flags-remaining').innerText = `Capitals Remaining: ${flagsRemaining}`;
}

function checkAnswer(button, city) {
    const optionsButtons = document.querySelectorAll('#options-container button');
    if (city === currentCountry.capital) {
        button.classList.add('correct');
        correctCount++;
        streakCount++;
    } else {
        button.classList.add('incorrect');
        incorrectCount++;
        streakCount = 0;
        optionsButtons.forEach(btn => {
            if (btn.innerText === currentCountry.capital) {
                btn.classList.add('show-correct');
            }
        });
    }

    updateCounters();

    setTimeout(() => {
        loadNewCapital();
    }, 1000);
}

function updateCounters() {
    document.querySelector('#correct-counter span').innerText = correctCount;
    document.querySelector('#incorrect-counter span').innerText = incorrectCount;
    document.querySelector('#streak-counter span').innerText = streakCount;
}

function changeDifficulty() {
    const difficultyButton = document.getElementById('difficulty-button');
    if (difficulty === 'easy') {
        difficulty = 'medium';
        difficultyButton.innerText = 'Medium';
        difficultyButton.className = 'option-button medium';
    } else if (difficulty === 'medium') {
        difficulty = 'hard';
        difficultyButton.innerText = 'Hard';
        difficultyButton.className = 'option-button hard';
    } else {
        difficulty = 'easy';
        difficultyButton.innerText = 'Easy';
        difficultyButton.className = 'option-button easy';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const difficultyButton = document.getElementById('difficulty-button');
    difficultyButton.innerText = 'Easy';  // Cambia 'Hard' a 'Easy'
    difficultyButton.className = 'option-button easy';  // Cambia 'hard' a 'easy'
    difficultyButton.onclick = changeDifficulty;
});

function showEndEmoji() {
    const totalFlags = correctCount + incorrectCount;
    const correctPercentage = (correctCount / totalFlags) * 100;
    let emoji = '';

    if (correctPercentage <= 25) {
        emoji = '💩';
    } else if (correctPercentage <= 50) {
        emoji = '🪨';
    } else if (correctPercentage <= 75) {
        emoji = '🥉';
    } else if (correctPercentage <= 85) {
        emoji = '🥈';
    } else if (correctPercentage <= 95) {
        emoji = '🥇';
    } else {
        emoji = '🏆';
    }

    document.getElementById('flag-display').innerText = emoji;
    document.getElementById('options-container').innerHTML = '';

    document.getElementById('selection-container').style.display = 'flex';
    document.getElementById('game-buttons').style.display = 'none';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}