const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

// If deployed, use the deployed database. Otherwise use the local 'bookwormDb' database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bookwormDb";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); // Last two options are for avoiding deprecation

const bookSeed = [
  {
    title: "Lord of the Flies",
    author: "William Golding",
    synopsis:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    image:
      "https://books.google.com/books/content?id=iyfgqV5dxXQC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70XidU6Piffszwx67EHBYEFqr3i0wU3hq7LMq1Cx6ySy8CgjXX5mXnF9YjkyIQu6RqCNT9u7vJOKjlIi-poyj99jmba2Q8ETLcBlC9nrf3cvpkbedE6fvyeSzEFoWn7KKXomhb3",
    link:
      "https://books.google.com/books?id=iyfgqV5dxXQC&newbks=1&newbks_redir=0&dq=title:+lord+of+the+flies&source=gbs_navlinks_s",
    date: new Date(Date.now())
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    synopsis:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    image:
      "https://books.google.com/books/content?id=FqSiDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71A1YWnR7QErqfK1ypTPpR7eTsqG96kiwu0YrhP5LFawH3mOyFemluIvlj6Rj5jS_Iq59qbY6Ye6_jzSmMw1KaOvee1dti0Mi1m_Rh4DgABvL19mKkpOpgTWbRDCgc3HaEm1rrO",
    link:
      "https://books.google.com/books?id=FqSiDwAAQBAJ&newbks=1&newbks_redir=0&dq=title:+the+catcher+in+the+rye&source=gbs_navlinks_s",
    date: new Date(Date.now())
  },
  {
    title: "Total Recall: My Unbelievably True Life Story",
    author: "Arnold Schwarzenegger",
    synopsis:
      "In his signature larger-than-life style, Arnold Schwarzenegger’s Total Recall is a revealing self-portrait of his illustrious, controversial, and truly unique life. The greatest immigrant success story of our time. His story is unique, and uniquely entertaining, and he tells it brilliantly in these pages. He was born in a year of famine, in a small Austrian town, the son of an austere police chief. He dreamed of moving to America to become a bodybuilding champion and a movie star. By the age of twenty-one, he was living in Los Angeles and had been crowned Mr. Universe. Within five years, he had learned English and become the greatest bodybuilder in the world. Within ten years, he had earned his college degree and was a millionaire from his business enterprises in real estate, landscaping, and bodybuilding. He was also the winner of a Golden Globe Award for his debut as a dramatic actor in Stay Hungry. Within twenty years, he was the world’s biggest movie star, the husband of Maria Shriver, and an emerging Republican leader who was part of the Kennedy family. Thirty-six years after coming to America, the man once known by fellow body­builders as the Austrian Oak was elected governor of California, the seventh largest economy in the world. He led the state through a budget crisis, natural disasters, and political turmoil, working across party lines for a better environment, election reforms, and bipartisan solutions. With Maria Shriver, he raised four fantastic children. In the wake of a scandal he brought upon himself, he tried to keep his family together. Until now, he has never told the full story of his life, in his own voice. Here is Arnold, with total recall.",
    image:
      "https://books.google.com/books/content?id=qYijfgz4acgC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70OC1KOMwdipId3Q2JWQviOr7VNHkG5AHRWKpcni5obY2jW-_15Ns_AZwtTcMH1CqLoz7RDL5nlEhvrjhzaRhQvEjqJy_rRHmu68GfE2I-Us91Htc9V2vx_xaFKPcKSNsi9F0qs",
    link:
      "https://books.google.com/books?id=qYijfgz4acgC&newbks=1&newbks_redir=0&dq=Total+Recall:+My+Unbelievably+True+Life+Story&source=gbs_navlinks_s",
    date: new Date(Date.now())
  },
  {
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    author: "Ashlee Vance",
    synopsis:
      "In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American invention and its new makers. Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius' life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits. Vance uses Musk's story to explore one of the pressing questions of our age: Can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk - one of the most unusual and striking figures in American business history - is a contemporary, visionary amalgam of legendary inventors and industrialists, including Thomas Edison, Henry Ford, Howard Hughes,and Steve Jobs. More than any other entrepreneur today, Musk has dedicated his energies and his own vast fortune to inventing a future that is as rich and far reaching as the visionaries of the golden age of science-fiction fantasy.",
    image:
      "https://books.google.com/books/content?id=Ma4sjwEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73JXyupVQcejhMW1NmMZEELQEo3qVt6wTSMjAU_fj5srqH1OJ6tjEM7OdpxIKl8dRc4wxyWcr6sefK_apS4ZV07BPWPTRzPRScG8OQQfQsECF2k_9K3zuSW1lYwj_QmR3JHnWEB",
    link:
      "https://books.google.com/books?id=Ma4sjwEACAAJ&dq=Elon+Musk:+Tesla,+SpaceX,+and+the+Quest+for+a+Fantastic+Future&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwiWxKHQ1MfnAhVJR60KHWLGBLAQ6wEwAHoECAAQAQ",
    date: new Date(Date.now())
  },
  {
    title: "1984",
    author: "George Orwell",
    synopsis:
      "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching... A startling and haunting vision of the world, 1984 is so powerful that it is completely convincing from start to finish. No one can deny the influence of this novel, its hold on the imaginations of multiple generations of readers, or the resiliency of its admonitions—a legacy that seems only to grow with the passage of time.",
    image:
      "https://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71apwe66BdFFaxC0dEzWTbfDbOtpug09SfIWl0IbZxGJswoYMgIH08gUCNVuiby1IqYs5TBR4L3Jlh1u3N9MlRNWLXczcSNZHkrtPkQIEHleAgAzS8_EkJHdctQrl2_1C50VPVN",
    link:
      "https://books.google.com/books?id=kotPYEqx7kMC&newbks=1&newbks_redir=0&dq=1984&source=gbs_navlinks_s",
    date: new Date(Date.now())
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    synopsis:
      "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
    image:
      "https://books.google.com/books/content?id=iWA-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70c8eKclZCK5fsXs056Qyoumf8_dnGWRwoqrroEuElGqXQowEc9VwmLEk2634OOnK3gDEfe5DnPB-d_QYBIr4-uTtaJH59htSpdaqrgBiG7cauBuwqTRGNB0vEzfuFEHhMqSgJr",
    link:
      "https://books.google.com/books?id=iWA-DwAAQBAJ&dq=The+Great+Gatsby&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwiDhvv_1MfnAhVIKqwKHf8ADVoQ6wEwAHoECAUQAQ",
    date: new Date(Date.now())
  }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
