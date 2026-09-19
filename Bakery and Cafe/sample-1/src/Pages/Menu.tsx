type MenuItem = {
  name: string;
  price: string;
  description: string;
  imageSearch: string;
};

type MenuSection = {
  id: string;
  title: string;
  intro?: string;
  items: MenuItem[];
};

const imageLink = (query: string) =>
  `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;

const sections: MenuSection[] = [
  {
    id: "pastries",
    title: "English Pastries & Bakes",
    intro:
      "Traditional English recipes, baked fresh every morning using time-honoured methods.",
    items: [
      {
        name: "Chelsea Bun",
        price: "£3.20",
        description:
          "A soft, spiralled pastry swirled with cinnamon and dried fruit, finished with a sticky sugar glaze — a Chelsea classic since the 18th century.",
        imageSearch: "Chelsea bun English pastry",
      },
      {
        name: "Eccles Cake",
        price: "£3.00",
        description:
          "Flaky, buttery pastry parcels filled with sweet currants and mixed spice, glazed with a caramelised sugar crust. A Lancashire favourite.",
        imageSearch: "Eccles cake pastry",
      },
      {
        name: "Bakewell Tart",
        price: "£3.50",
        description:
          "Sweet shortcrust pastry filled with jam and a delicate almond frangipane, topped with glacé icing and a single cherry.",
        imageSearch: "Bakewell tart",
      },
      {
        name: "Victoria Sponge Slice",
        price: "£3.80",
        description:
          "Two layers of light sponge sandwiched with raspberry jam and fresh whipped cream, dusted with caster sugar.",
        imageSearch: "Victoria sponge cake slice",
      },
      {
        name: "Battenberg Cake",
        price: "£3.60",
        description:
          "Pink and yellow chequered sponge wrapped in a thin layer of marzipan — as pretty as it is sweet.",
        imageSearch: "Battenberg cake",
      },
      {
        name: "Scone with Clotted Cream & Jam",
        price: "£3.40",
        description:
          "A cream tea classic. Freshly baked and served warm with a generous dollop of clotted cream and strawberry jam.",
        imageSearch: "English scone clotted cream jam",
      },
      {
        name: "Sausage Roll",
        price: "£3.20",
        description:
          "Buttery puff pastry wrapped around seasoned British pork sausage meat, baked until golden and flaky.",
        imageSearch: "British sausage roll pastry",
      },
      {
        name: "Cornish Pasty",
        price: "£4.50",
        description:
          "A hearty hand-crimped pastry filled with diced beef, potato, swede and onion, baked to a golden finish.",
        imageSearch: "Cornish pasty",
      },
      {
        name: "Banana Bread Slice",
        price: "£3.00",
        description:
          "Moist, dense banana loaf studded with walnuts — a teatime favourite alongside a hot cup of tea.",
        imageSearch: "banana bread slice walnuts",
      },
    ],
  },
  {
    id: "bread",
    title: "Fresh Breads",
    intro: "Baked in-house every morning, ready by 7am.",
    items: [
      {
        name: "Malt Loaf",
        price: "£2.80",
        description:
          "A dense, sticky loaf packed with sultanas and malt extract — best sliced thick and spread with butter.",
        imageSearch: "malt loaf sliced butter",
      },
      {
        name: "Bloomer Loaf",
        price: "£3.50",
        description:
          "A crusty white farmhouse loaf with a soft, airy crumb, slashed across the top and baked fresh every morning.",
        imageSearch: "bloomer loaf bread",
      },
      {
        name: "Cottage Loaf",
        price: "£3.80",
        description:
          "Two stacked rounds of crusty white bread — a traditional English shape that's been baked since Victorian times.",
        imageSearch: "cottage loaf bread",
      },
    ],
  },
  {
    id: "coffee",
    title: "Coffee & Hot Drinks",
    intro: "Ethically sourced beans, roasted with care, brewed to order.",
    items: [
      {
        name: "English Breakfast Tea",
        price: "£2.50",
        description:
          "A robust, malty blend of black teas, brewed strong and best served with a splash of milk.",
        imageSearch: "English breakfast tea cup",
      },
      {
        name: "Espresso",
        price: "£2.40",
        description:
          "A concentrated shot of rich, dark-roasted coffee with a thick golden crema. Small, strong, and to the point.",
        imageSearch: "espresso shot coffee cup",
      },
      {
        name: "Americano",
        price: "£2.90",
        description:
          "Espresso lengthened with hot water for a lighter, smoother cup without losing the depth of flavour.",
        imageSearch: "americano coffee cup",
      },
      {
        name: "Flat White",
        price: "£3.20",
        description:
          "A double shot of espresso topped with a thin layer of velvety steamed milk — smooth, strong, and beautifully balanced.",
        imageSearch: "flat white coffee latte art",
      },
      {
        name: "Cappuccino",
        price: "£3.30",
        description:
          "Equal parts espresso, steamed milk, and airy milk foam, finished with a dust of cocoa powder.",
        imageSearch: "cappuccino coffee foam",
      },
      {
        name: "Filter Coffee",
        price: "£2.70",
        description:
          "Slow-brewed and full-bodied, our house filter coffee is made fresh throughout the day.",
        imageSearch: "filter coffee brew",
      },
      {
        name: "Mocha",
        price: "£3.60",
        description:
          "Espresso, steamed milk, and rich melted chocolate, topped with whipped cream for an indulgent treat.",
        imageSearch: "mocha coffee whipped cream",
      },
      {
        name: "Hot Chocolate",
        price: "£3.40",
        description:
          "Thick, creamy melted chocolate steamed with milk — a comforting favourite for cooler days.",
        imageSearch: "hot chocolate mug",
      },
      {
        name: "Chai Latte",
        price: "£3.50",
        description:
          "Spiced black tea steamed with milk, warmed through with notes of cinnamon, cardamom, and ginger.",
        imageSearch: "chai latte mug",
      },
    ],
  },
  {
    id: "french",
    title: "The French Corner",
    intro:
      "A little taste of Paris — classic French viennoiserie and pâtisserie, baked the traditional way.",
    items: [
      {
        name: "Croissant",
        price: "£2.80",
        description:
          "Buttery, laminated pastry dough, rolled and folded to create dozens of flaky layers, baked until golden.",
        imageSearch: "French croissant pastry",
      },
      {
        name: "Pain au Chocolat",
        price: "£3.00",
        description:
          "The same flaky, buttery dough as our croissant, folded around two batons of rich dark chocolate.",
        imageSearch: "pain au chocolat pastry",
      },
      {
        name: "Pain aux Raisins",
        price: "£3.10",
        description:
          "A spiral of laminated pastry layered with crème pâtissière and plump raisins, glazed to a gentle shine.",
        imageSearch: "pain aux raisins pastry",
      },
      {
        name: "Assorted Macarons",
        price: "£2.20 each",
        description:
          "Delicate almond meringue shells sandwiched with ganache or buttercream, in a rotating range of flavours.",
        imageSearch: "French macarons assorted",
      },
      {
        name: "Éclair au Chocolat",
        price: "£3.60",
        description:
          "Choux pastry piped and baked to a crisp, filled with vanilla crème pâtissière and topped with a chocolate glaze.",
        imageSearch: "chocolate eclair pastry",
      },
      {
        name: "Madeleine",
        price: "£2.00",
        description:
          "A small, shell-shaped sponge cake with a delicate hump, flavoured with butter and a hint of lemon zest.",
        imageSearch: "French madeleine cake",
      },
      {
        name: "Tarte Tatin",
        price: "£4.20",
        description:
          "Caramelised apples baked beneath a disc of buttery pastry, then flipped to reveal a glossy, golden top.",
        imageSearch: "tarte tatin apple tart",
      },
      {
        name: "Financier",
        price: "£2.30",
        description:
          "A small almond sponge cake made with brown butter, giving it a nutty richness beneath a delicate golden crust.",
        imageSearch: "financier almond cake French",
      },
      {
        name: "Mille-feuille",
        price: "£4.00",
        description:
          "Layers of crisp puff pastry alternated with smooth vanilla crème pâtissière, topped with a feathered fondant glaze.",
        imageSearch: "mille-feuille pastry",
      },
      {
        name: "Quiche Lorraine",
        price: "£4.80",
        description:
          "A buttery shortcrust case filled with smoked bacon, gruyère, and a silky egg custard, baked until just set.",
        imageSearch: "quiche Lorraine slice",
      },
      {
        name: "Café au Lait",
        price: "£3.20",
        description:
          "Strong brewed coffee combined in equal measure with hot steamed milk — simple, classic, and comforting.",
        imageSearch: "cafe au lait coffee",
      },
    ],
  },
];

export const Menu = () => {
  return (
    <main className="menu-page">
      <section className="menu-hero">
        <h1>Our Menu</h1>
        <span className="divider"></span>
        <p>
          Freshly baked English classics, a dedicated French corner, and
          coffee brewed just the way you like it. Hover over an item to read
          more, and click through to see what it looks like.
        </p>
      </section>

      <nav className="menu-quicknav" aria-label="Jump to menu section">
        {sections.map((section) => (
          <a href={`#${section.id}`} key={section.id}>
            {section.title}
          </a>
        ))}
      </nav>

      <section className="menu-overview" aria-label="Full menu at a glance">
        <h2>At a Glance</h2>
        <span className="divider"></span>
        <div className="overview-grid">
          {sections.map((section) => (
            <div className="overview-group" key={section.id}>
              <h3>
                <a href={`#${section.id}`}>{section.title} ↘</a>
              </h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {sections.map((section) => (
        <section className="menu-section" key={section.id} id={section.id}>
          <div className="menu-section-heading">
            <h2>{section.title}</h2>
            <span className="divider"></span>
            {section.intro && <p className="menu-section-intro">{section.intro}</p>}
          </div>

          <div className="menu-grid">
            {section.items.map((item) => (
              <a
                className="menu-item-card"
                href={imageLink(item.imageSearch)}
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
              >
                <div className="menu-item-face menu-item-front">
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <div className="menu-item-face menu-item-back">
                  <p>{item.description}</p>
                  <span className="menu-item-view">View image ↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}
      <section className="menu-closing">
        <p className="allergen-note">
          Most items are made in a kitchen that handles gluten, nuts, dairy,
          and eggs. Please ask our team about allergens before ordering.
        </p>

        <div className="cta">
          <a href="/contact">Order for Collection</a>
        </div>
      </section>
    </main>
  );
};