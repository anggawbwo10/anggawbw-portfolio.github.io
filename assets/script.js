let datas = [
  {
    asset: "assets/img/bookhotel.jpg",
    title: "BookHotel Mobile Apps",
    description:
      "Apps that will help user to easily find hotel with affordable prices and many more",
    button_text: "See Details",
  },
  {
    asset: "assets/img/swara-apps.jpg",
    title: "Swara Music Apps",
    description:
      " Swara is Fictional Music Apps that will help user to get trendy music all around the world",
    button_text: "See Details",
  },
  {
    asset: "assets/img/jobseeker-lp.jpg",
    title: "JobSeeker Landing Page",
    description:
      " JobSeeker landing page that will help user find their best dream job in the world",
    button_text: "See Details",
  },
  {
    asset: "assets/img/nft-marketplace.jpg",
    title: "NFT Marketplace Landing Page",
    description:
      " Apps that will help user to manage and track their income and outcome without using the paper anymore",
    button_text: "See Details",
  },
  {
    asset: "assets/img/money-mngt.jpg",
    title: "Money Management UI Design",
    description:
      " Apps that will help user to manage and track their income and outcome without using the paper anymore",
    button_text: "See Details",
  },
  {
    asset: "assets/img/oh-ftball.jpg",
    title: "OH-FTBALL Landing Page",
    description:
      " Landing page for sports fictional company to give new update about the sports",
    button_text: "See Details",
  },
  {
    asset: "assets/img/fantech-ig.jpg",
    title: "Instagram Commercial Poster",
    description:
      " This poster is for Instagram Ads commercial poster purpose that my clients request",
    button_text: "See Details",
  },
  {
    asset: "assets/img/posters-ig.jpg",
    title: "Seminar Posters",
    description:
      " Instagram Poster for my clients to present their Psychology seminar purpose",
    button_text: "See Details",
  },
];

let card1 = document.getElementById("test-1");

for (let i = 0; i < datas.length; i++) {
  let data = datas[i];
  let newItem = document.createElement("div");
  newItem.classList.add("container", "rm-margin");
  newItem.innerHTML = `
      <div class="card-list">
        <img src="${data.asset}" alt="" />
        <h4>${data.title}</h4>
        <p>
          ${data.description}
        </p>
        <button class="btn-readmore">
          <a href="#"
            >${data.button_text}<i class="fa-solid fa-arrow-right"></i
          ></a>
        </button>
      </div>
  `;
  card1.appendChild(newItem);
}
