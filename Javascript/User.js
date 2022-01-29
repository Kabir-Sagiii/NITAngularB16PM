var user = {
  results: [
    {
      gender: "female", //  user.results[0].name.last
      name: {
        title: "Ms",
        first: "Cilla",
        last: "Ten Velde",
      },
      location: {
        street: {
          number: 4916,
          name: "Koninginnenlaan",
        },
        city: "Holwerd",
        state: "Zuid-Holland",
        country: "Netherlands",
        postcode: 18526,
        coordinates: {
          latitude: "40.6613",
          longitude: "-119.0585",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "cilla.tenvelde@example.com",
      login: {
        uuid: "bd17f5e1-fd0e-438a-8716-29d989892f0f",
        username: "biggorilla264",
        password: "jonjon",
        salt: "91a6nHQt",
        md5: "716ac4c3845a95f8ffb5309ca7cc4877",
        sha1: "5d0eb408530f1f179bdf746b0bda91d41192d0c8",
        sha256:
          "67d0b0e22d4e46e4301022a1d1e1c8b34192f22db925817ff53bdcde9d620646",
      },
      dob: {
        date: "1976-10-19T01:44:17.536Z",
        age: 46,
      },
      registered: {
        date: "2017-05-07T20:17:25.907Z",
        age: 5,
      },
      phone: "(555)-619-0917",
      cell: "(360)-137-5515",
      id: {
        name: "BSN",
        value: "39985976",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/58.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/58.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/58.jpg",
      },
      nat: "NL",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Sophie",
        last: "Collins",
      },
      location: {
        street: {
          number: 1236,
          name: "Henry Street",
        },
        city: "Oranmore",
        state: "Wicklow",
        country: "Ireland",
        postcode: 77650,
        coordinates: {
          latitude: "-69.9595",
          longitude: "88.0970",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "sophie.collins@example.com",
      login: {
        uuid: "6a125b88-185f-4ee8-bba9-e22e14bfc743",
        username: "yellowpeacock730",
        password: "polska",
        salt: "DtmNF2gW",
        md5: "6f0801942f15956d928582af63ab555e",
        sha1: "2188980642e90622385cf65c527ee8e48738581a",
        sha256:
          "4f37889306a0486c8ad9834e2b2ec8f965c09625b432cf4307f8b453406de9d2",
      },
      dob: {
        date: "1950-10-23T22:15:56.906Z",
        age: 72,
      },
      registered: {
        date: "2007-06-30T03:05:33.131Z",
        age: 15,
      },
      phone: "041-359-5539",
      cell: "081-105-5546",
      id: {
        name: "PPS",
        value: "0097213T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/4.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg",
      },
      nat: "IE",
    },
  ],
  info: {
    seed: "91614a1440fd7945",
    results: 2,
    page: 1,
    version: "1.3",
  },
};

console.log(user.results[0].gender);
console.log(user.results[0].name.last);
