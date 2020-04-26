const trendingBooks = [
  {
    title: "Go in Action",
    isbn: "1617291781",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ketelsen.jpg",
    status: "MEAP",
    authors: ["Brian Ketelsen", "Erik St. Martin", "", "William Kennedy"],
    categories: ["Magazines"],
  },
  {
    title: "The Programmer's Guide to Apache Thrift ",
    isbn: "1617291811",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/abernethy.jpg",
    status: "MEAP",
    authors: ["Randy Abernethy"],
    categories: ["Magazines"],
  },
  {
    title: "Grokking Functional Programming",
    isbn: "1617291838",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/khan.jpg",
    status: "MEAP",
    authors: ["Aslam Khan"],
    categories: ["Magazines"],
  },
  {
    title: "CORS in Action",
    isbn: "161729182X",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hossain.jpg",
    status: "MEAP",
    authors: ["Monsur Hossain"],
    categories: ["Magazines"],
  },
  {
    title: "Reactive Design Patterns",
    isbn: "1617291803",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kuhn.jpg",
    status: "MEAP",
    authors: ["Roland Kuhn", "Jamie Allen"],
    categories: ["Magazines"],
  },
  {
    title: "Storm Applied",
    isbn: "1617291897",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pathirana.jpg",
    status: "MEAP",
    authors: ["Sean Allen", "Peter Pathirana", "", "Matthew Jankowski"],
    categories: ["Departmental"],
  },
  {
    title: "Real-World Machine Learning",
    isbn: "1617291927",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brink.jpg",
    status: "MEAP",
    authors: ["Henrik Brink", "Joseph Richards"],
    categories: ["Departmental"],
  },
  {
    title: "jQuery UI in Action",
    isbn: "1617291935",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/vantoll.jpg",
    status: "MEAP",
    authors: ["Theodore J. (T.J.) VanToll III"],
    categories: ["Departmental"],
  },
  {
    title: "Web Components in Action",
    isbn: "1617291943",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/buckett2.jpg",
    status: "MEAP",
    authors: ["Chris Buckett"],
    categories: ["Departmental"],
  },
  {
    title: "JavaScript Application Design",
    isbn: "1617291951",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bevacqua.jpg",
    status: "MEAP",
    authors: ["Nicolas G. Bevacqua"],
    categories: ["Departmental"],
  },
  {
    title: "Git in Practice",
    isbn: "1617291978",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mcquaid.jpg",
    status: "MEAP",
    authors: ["Mike McQuaid"],
    categories: ["Story"],
  },
  {
    title: "Impala in Action",
    isbn: "1617291986",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/saltzer.jpg",
    status: "MEAP",
    authors: ["Richard L. Saltzer", "Istvan Szegedi"],
    categories: ["Story"],
  },
  {
    title: "Java 8 in Action",
    isbn: "1617291994",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/urma.jpg",
    status: "MEAP",
    authors: ["Raoul-Gabriel Urma", "Mario Fusco", "", "Alan Mycroft"],
    categories: ["Story"],
  },
  {
    title: "Elixir in Action",
    isbn: "161729201X",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/juric.jpg",
    status: "MEAP",
    authors: ["Sa�a Juric�"],
    categories: ["Story"],
  },
  {
    title: "MongoDB in Action, Second Edition",
    isbn: "1617291609",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
    status: "MEAP",
    authors: [
      "Kyle Banker",
      "Peter Bakkum",
      "Tim Hawkins",
      "Shaun Verch",
      "",
      "Douglas Garrett",
    ],
    categories: ["Story"],
  },
  {
    title: "Getting MEAN with Mongo, Express, Angular, and Node",
    isbn: "1617292036",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
    status: "MEAP",
    authors: ["Simon Holmes"],
    categories: ["Journals"],
  },
  {
    title: "jQuery in Action, Third Edition",
    isbn: "1617292079",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/derosa.jpg",
    status: "MEAP",
    authors: ["Bear Bibeault", "Yehuda Katz", "", "Aurelio De Rosa"],
    categories: ["Journals"],
  },
  {
    title: "D3.js in Action",
    isbn: "1617292117",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/meeks.jpg",
    status: "MEAP",
    authors: ["Elijah Meeks"],
    categories: ["Journals"],
  },
  {
    title: "Learn SQL Server Administration in a Month of Lunches",
    isbn: "1617292133",
    pageCount: 0,
    publishedDate: {
      $date: "2014-05-02T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones5.jpg",
    status: "PUBLISH",
    authors: ["Don Jones"],
    categories: ["Journals"],
  },
  {
    title: "Geoprocessing with Python",
    isbn: "1617292141",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/garrard.jpg",
    status: "MEAP",
    authors: ["Chris Garrard"],
    categories: ["Journals"],
  },
  {
    title: "Barcodes with iOS",
    isbn: "161729215X",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/drobnik.jpg",
    status: "MEAP",
    authors: ["Oliver Drobnik"],
    categories: ["Others"],
  },
  {
    title: "Chef in Action",
    isbn: "1617292214",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/aivaliotis.jpg",
    status: "MEAP",
    authors: ["Dimitri Aivaliotis"],
    categories: ["Others"],
  },
  {
    title: "Hadoop in Practice, Second Edition",
    isbn: "1617292222",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/holmes2.jpg",
    status: "MEAP",
    authors: ["Alex Holmes"],
    categories: ["Others"],
  },
  {
    title: "Oculus Rift in Action",
    isbn: "1617292192",
    pageCount: 0,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bdavis.jpg",
    status: "MEAP",
    authors: ["Bradley Austin Davis", "Karen Bryla", "", "Alex Benton"],
    categories: ["Others"],
  },
];

export default trendingBooks;
