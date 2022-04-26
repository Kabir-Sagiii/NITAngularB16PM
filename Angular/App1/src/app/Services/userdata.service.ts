import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  usersProfile:any= {
	"results": [
		{
		"gender": "male",
		"name": {
			"title": "Mr",
			"first": "Alex",
			"last": "Fournier"
		},
		"location": {
			"street": {
				"number": 5216,
				"name": "Rue des Chartreux"
			},
			"city": "Angers",
			"state": "Mayotte",
			"country": "France",
			"postcode": 65360,
			"coordinates": {
				"latitude": "0.8250",
				"longitude": "-104.4548"
			},
			"timezone": {
				"offset": "+7:00",
				"description": "Bangkok, Hanoi, Jakarta"
			}
		},
		"email": "alex.fournier@example.com",
		"login": {
			"uuid": "05d8b0a9-2b0c-4ca9-b09d-5950205c7486",
			"username": "organicswan411",
			"password": "757575",
			"salt": "hScXVQKR",
			"md5": "bc2a0d0c05ddae0cb335616530db04b2",
			"sha1": "41cbd37b97918e089a95de05e54600bbee854051",
			"sha256": "4fa8fdc32c9eb08f395f7b41328bea5ad71f2f44f3a592c9cd2ac7a1706aa240"
		},
		"dob": {
			"date": "1977-01-16T13:01:49.803Z",
			"age": 45
		},
		"registered": {
			"date": "2008-07-05T18:50:32.205Z",
			"age": 14
		},
		"phone": "01-03-84-25-40",
		"cell": "06-07-69-19-33",
		"id": {
			"name": "INSEE",
			"value": "1NNaN81423033 17"
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/3.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/3.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/3.jpg"
		},
		"nat": "FR"
	}, {
		"gender": "male",
		"name": {
			"title": "Mr",
			"first": "نيما",
			"last": "جعفری"
		},
		"location": {
			"street": {
				"number": 4436,
				"name": "آفریقا"
			},
			"city": "اراک",
			"state": "مرکزی",
			"country": "Iran",
			"postcode": 72650,
			"coordinates": {
				"latitude": "-72.8361",
				"longitude": "-149.4809"
			},
			"timezone": {
				"offset": "+5:45",
				"description": "Kathmandu"
			}
		},
		"email": "nym.jaafry@example.com",
		"login": {
			"uuid": "c9f2f56d-1735-4156-aea5-e1b700ab0e7f",
			"username": "heavylion514",
			"password": "shaved",
			"salt": "c3B7I1U0",
			"md5": "bf4dd1224083127b244f61a259d8c290",
			"sha1": "8ed7073ecf4fca5c984829defdffff92e5e427ce",
			"sha256": "9dfc755bdfcce35fabb2f90db656fe7d75ca0a304f2607ea7170d54616ef49e8"
		},
		"dob": {
			"date": "1956-07-29T06:58:26.117Z",
			"age": 66
		},
		"registered": {
			"date": "2008-01-21T15:45:14.473Z",
			"age": 14
		},
		"phone": "099-98602698",
		"cell": "0998-891-8119",
		"id": {
			"name": "",
			"value": null
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/10.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/10.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/10.jpg"
		},
		"nat": "IR"
	}, {
		"gender": "female",
		"name": {
			"title": "Mrs",
			"first": "Rosa",
			"last": "Møller"
		},
		"location": {
			"street": {
				"number": 6920,
				"name": "Engparken"
			},
			"city": "Silkeboeg",
			"state": "Danmark",
			"country": "Denmark",
			"postcode": 99271,
			"coordinates": {
				"latitude": "10.3319",
				"longitude": "124.4491"
			},
			"timezone": {
				"offset": "+7:00",
				"description": "Bangkok, Hanoi, Jakarta"
			}
		},
		"email": "rosa.moller@example.com",
		"login": {
			"uuid": "cfc78735-1eff-4ea0-b9fd-edee1e22e5ec",
			"username": "ticklishgoose612",
			"password": "larry1",
			"salt": "u87nOFYo",
			"md5": "27bb06ebcb2c65e90e3d87859fb00c8e",
			"sha1": "4fe72dc2adf78a28f52d54ba55bfea72e0b8943d",
			"sha256": "1fdb17a1126dd4fc5e587d2fe2c4f326b751bc58d89f07fdd8f05160a4b5522f"
		},
		"dob": {
			"date": "1988-03-22T15:19:18.319Z",
			"age": 34
		},
		"registered": {
			"date": "2019-08-27T19:14:02.613Z",
			"age": 3
		},
		"phone": "14737100",
		"cell": "36623023",
		"id": {
			"name": "CPR",
			"value": "220388-7961"
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/27.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/27.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/27.jpg"
		},
		"nat": "DK"
	}, {
		"gender": "female",
		"name": {
			"title": "Ms",
			"first": "غزل",
			"last": "سهيلي راد"
		},
		"location": {
			"street": {
				"number": 9773,
				"name": "کمیل"
			},
			"city": "سیرجان",
			"state": "زنجان",
			"country": "Iran",
			"postcode": 68031,
			"coordinates": {
				"latitude": "16.8927",
				"longitude": "-37.6855"
			},
			"timezone": {
				"offset": "-5:00",
				"description": "Eastern Time (US & Canada), Bogota, Lima"
			}
		},
		"email": "gzl.shylyrd@example.com",
		"login": {
			"uuid": "db2b1f5f-f3a8-4c38-959c-f416b5c2006a",
			"username": "blackswan815",
			"password": "1776",
			"salt": "UY1KOWW2",
			"md5": "83e37167316091da62795eee1b3d3c13",
			"sha1": "08527ebf848697cb2385829f9ac352b76f685940",
			"sha256": "904466ed8bb1f2498b0167e934f68d72315486bb3dde17934e3b20d77975d965"
		},
		"dob": {
			"date": "1953-11-07T14:31:53.181Z",
			"age": 69
		},
		"registered": {
			"date": "2005-02-24T02:31:03.540Z",
			"age": 17
		},
		"phone": "016-44178009",
		"cell": "0916-224-8157",
		"id": {
			"name": "",
			"value": null
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/45.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/45.jpg"
		},
		"nat": "IR"
	}, {
		"gender": "male",
		"name": {
			"title": "Mr",
			"first": "Eren",
			"last": "Kahveci"
		},
		"location": {
			"street": {
				"number": 6405,
				"name": "Tunalı Hilmi Cd"
			},
			"city": "Batman",
			"state": "Eskişehir",
			"country": "Turkey",
			"postcode": 14667,
			"coordinates": {
				"latitude": "23.4005",
				"longitude": "-105.9388"
			},
			"timezone": {
				"offset": "+5:00",
				"description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
			}
		},
		"email": "eren.kahveci@example.com",
		"login": {
			"uuid": "6045ce91-be85-4b3f-b96a-cdd9accd02dc",
			"username": "angrysnake572",
			"password": "poohbear",
			"salt": "ZbxYJxjh",
			"md5": "f60fa1043a18aaf2b94e4152fd4c2d35",
			"sha1": "217d225473d405ac0ce40726ce9a7461e3bb69a0",
			"sha256": "3b40754e85e063bb7db8a27e68b3b052a996eb697be3ed543582e90a0b50c36c"
		},
		"dob": {
			"date": "1980-02-24T12:40:44.275Z",
			"age": 42
		},
		"registered": {
			"date": "2011-02-08T06:32:26.579Z",
			"age": 11
		},
		"phone": "(495)-707-8035",
		"cell": "(928)-998-5344",
		"id": {
			"name": "",
			"value": null
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/41.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/41.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/41.jpg"
		},
		"nat": "TR"
	}, {
		"gender": "female",
		"name": {
			"title": "Miss",
			"first": "Alina",
			"last": "Matre"
		},
		"location": {
			"street": {
				"number": 346,
				"name": "Ingiers vei"
			},
			"city": "Farsund",
			"state": "Akershus",
			"country": "Norway",
			"postcode": "2985",
			"coordinates": {
				"latitude": "-59.3836",
				"longitude": "-119.7415"
			},
			"timezone": {
				"offset": "-11:00",
				"description": "Midway Island, Samoa"
			}
		},
		"email": "alina.matre@example.com",
		"login": {
			"uuid": "729772bd-01e2-4a34-bd29-bf757aaae50d",
			"username": "heavygoose438",
			"password": "serious",
			"salt": "LcnoAXDF",
			"md5": "844a290d92e79afb322041f01ce973ef",
			"sha1": "1839315f64ea242349353c0d11a7969cbcd39e75",
			"sha256": "fb3363de58595fae3d065167c9566e7d6cc467e3f098cd26be937e3f39559462"
		},
		"dob": {
			"date": "1976-11-27T22:36:53.793Z",
			"age": 46
		},
		"registered": {
			"date": "2010-03-17T14:10:00.651Z",
			"age": 12
		},
		"phone": "71962592",
		"cell": "49792472",
		"id": {
			"name": "FN",
			"value": "27117625635"
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/33.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
		},
		"nat": "NO"
	}, {
		"gender": "male",
		"name": {
			"title": "Mr",
			"first": "Asher",
			"last": "Zhang"
		},
		"location": {
			"street": {
				"number": 3310,
				"name": "Highgate"
			},
			"city": "Hamilton",
			"state": "Bay of Plenty",
			"country": "New Zealand",
			"postcode": 29019,
			"coordinates": {
				"latitude": "-86.6529",
				"longitude": "-44.2930"
			},
			"timezone": {
				"offset": "+6:00",
				"description": "Almaty, Dhaka, Colombo"
			}
		},
		"email": "asher.zhang@example.com",
		"login": {
			"uuid": "d9621b0c-8a86-47f8-80be-159f3dffe847",
			"username": "orangepeacock421",
			"password": "kirsten",
			"salt": "5blAxxnU",
			"md5": "113534ed4a59ee956f55f242a6274644",
			"sha1": "13f2a16a001bf93397da911a7fb7002f2bd5ac69",
			"sha256": "551f987a297e4cbe4c61367f6a83cacdb16b1383ec506eeca00c5d35c4852f95"
		},
		"dob": {
			"date": "1988-04-27T21:06:55.029Z",
			"age": 34
		},
		"registered": {
			"date": "2011-11-01T05:48:32.072Z",
			"age": 11
		},
		"phone": "(375)-809-0333",
		"cell": "(958)-563-4060",
		"id": {
			"name": "",
			"value": null
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/24.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
		},
		"nat": "NZ"
	}, {
		"gender": "male",
		"name": {
			"title": "Mr",
			"first": "Jaxon",
			"last": "Wood"
		},
		"location": {
			"street": {
				"number": 1882,
				"name": "New North Road"
			},
			"city": "Tauranga",
			"state": "Southland",
			"country": "New Zealand",
			"postcode": 27085,
			"coordinates": {
				"latitude": "-10.4184",
				"longitude": "112.1000"
			},
			"timezone": {
				"offset": "+5:30",
				"description": "Bombay, Calcutta, Madras, New Delhi"
			}
		},
		"email": "jaxon.wood@example.com",
		"login": {
			"uuid": "f0810062-0a90-4336-878c-756975d1ea38",
			"username": "bigdog833",
			"password": "tundra",
			"salt": "Zm4TKDdn",
			"md5": "c8bf98ed03fe5674a12ac27041babeaa",
			"sha1": "150ab843293ed6c8b10b3a2e4c04b0caef005af2",
			"sha256": "2d8b4b8358aea72d3884f6c770c20564c00fe595509aa0728c4d980e59961945"
		},
		"dob": {
			"date": "1949-07-10T09:56:20.512Z",
			"age": 73
		},
		"registered": {
			"date": "2011-07-26T01:32:06.635Z",
			"age": 11
		},
		"phone": "(255)-096-5064",
		"cell": "(650)-582-6458",
		"id": {
			"name": "",
			"value": null
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/92.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/92.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/92.jpg"
		},
		"nat": "NZ"
	}, {
		"gender": "male",
		"name": {
			"title": "Mr",
			"first": "Nihal",
			"last": "Sarıoğlu"
		},
		"location": {
			"street": {
				"number": 5589,
				"name": "Mevlana Cd"
			},
			"city": "Ankara",
			"state": "Mersin",
			"country": "Turkey",
			"postcode": 42780,
			"coordinates": {
				"latitude": "85.0383",
				"longitude": "-88.9923"
			},
			"timezone": {
				"offset": "-7:00",
				"description": "Mountain Time (US & Canada)"
			}
		},
		"email": "nihal.sarioglu@example.com",
		"login": {
			"uuid": "1ebf36c4-74e7-41fc-9641-3e036663c88c",
			"username": "crazygorilla129",
			"password": "ashlee",
			"salt": "JTbLgiX4",
			"md5": "bd1a7685ab64a2a1f16e2659be151bcd",
			"sha1": "9167cc49213b4344a19338c86bcc65a5e4bd2d95",
			"sha256": "132973ca8031ad8c92f00a078072673debd0561153f7dcba09bb4392a06d4ba8"
		},
		"dob": {
			"date": "1952-05-19T15:53:46.759Z",
			"age": 70
		},
		"registered": {
			"date": "2016-09-20T19:23:40.029Z",
			"age": 6
		},
		"phone": "(035)-512-1340",
		"cell": "(581)-007-9323",
		"id": {
			"name": "",
			"value": null
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/87.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/87.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/87.jpg"
		},
		"nat": "TR"
	}, {
		"gender": "male",
		"name": {
			"title": "Mr",
			"first": "Necati",
			"last": "Keçeci"
		},
		"location": {
			"street": {
				"number": 5921,
				"name": "Istiklal Cd"
			},
			"city": "Malatya",
			"state": "Kırşehir",
			"country": "Turkey",
			"postcode": 73776,
			"coordinates": {
				"latitude": "-25.6548",
				"longitude": "110.6198"
			},
			"timezone": {
				"offset": "-11:00",
				"description": "Midway Island, Samoa"
			}
		},
		"email": "necati.kececi@example.com",
		"login": {
			"uuid": "835c8e0e-0665-4f9d-8a66-1b1d08eb39ca",
			"username": "tinyfish646",
			"password": "creation",
			"salt": "BsYlcMLz",
			"md5": "966cf676febdba89e774ef2c0833d706",
			"sha1": "5d11beb9b00116ccf5014038c6bd3ac323b1e6fc",
			"sha256": "5cf4a4449e727b093402d91e8c62beeede2a213abb4d79b3c1edd774fb505126"
		},
		"dob": {
			"date": "1987-07-15T15:01:13.710Z",
			"age": 35
		},
		"registered": {
			"date": "2015-04-15T12:41:25.151Z",
			"age": 7
		},
		"phone": "(233)-424-1655",
		"cell": "(191)-487-0962",
		"id": {
			"name": "",
			"value": null
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/72.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
		},
		"nat": "TR"
	}],
	"info": {
		"seed": "57db587064ad4d12",
		"results": 10,
		"page": 1,
		"version": "1.3"
	}
}

  constructor() { }
}
