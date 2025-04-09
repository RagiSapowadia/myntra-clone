import "./Footer.css";
import React from "react";
// import footer_col4_img1 from "./footer_col4-img1.PNG";
// import footer_col4_img2 from "./footer_col4-img2.PNG";

export default function Footer() {
  return (
    <footer >
        <div className="container">
        <div className="footer_menu ">
        <div className="footer_menu-col1">
          <h1>ONLINE SHOPPING</h1>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
          </ul>

          <h1>USEFUL LINKS</h1>
          <ul>
            <li>Blog</li>
            <li>Carrers</li>
            <li>Sitemap</li>
            <li>Whitehat</li>
          </ul>
        </div>

        <div className="footer_menu-col2">
          <h1>CUSTOMER POLICIES</h1>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div className="footer_menu-col3">
          <h1>EXPERIENCE MYNTRA APP ON MOBILE</h1>
          <div className="apps">
            <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" />
            <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" />
          </div>

          <h1>KEEP IN TOUCH</h1>
          <div className="social">
            <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" />
            <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" />
            <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" />
            <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" />
          </div>
        </div>

        <div className="footer_menu-col4">
          {/* <img src={footer_col4_img1} />
          <img src={footer_col4_img2} /> */}
        </div>
      </div>

      <div className="search">
        <h1>POPULAR SEARCHES</h1>
        <p>
          Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones |
          Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport
          Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings
          | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches |
          Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye
          Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show |
          Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles
          | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes |
          Jewellery | Designers Sarees
        </p>
        <div className="copyright">
          <h1>
            In case of any concern, <span id="contact">Contact Us</span>
          </h1>
          <h1>© 2022 www.myntra.com. All rights reserved.</h1>
        </div>
      </div>

      <div className="office-address">
        <h1>Registered Office Address</h1>
        <div className="address">
          <h1 id="location">
            Buildings Alyssa,
            <br />
            Begonia and Clover situated in Embassy Tech Village,
            <br />
            Outer Ring Road,
            <br />
            Devarabeesanahalli Village,
            <br />
            Varthur Hobli,
            <br />
            Bengaluru – 560103, India
          </h1>
          <h1 id="info">
            CIN: U72300KA2007PTC041799
            <br />
            Telephone: <span id="tel">+91-80-61561999</span>
          </h1>
        </div>
      </div>

      <div className="description">
        <h1 id="description-head1">ONLINE SHOPPING MADE EASY AT MYNTRA</h1>
        <p>
          If you would like to experience the best of online shopping for men,
          women and kids in India, you are at the right place. Myntra is the
          ultimate destination for fashion and lifestyle, being host to a wide
          array of merchandise including clothing, footwear, accessories,
          jewellery, personal care products and more. It is time to redefine
          your style statement with our treasure-trove of trendy items. Our
          online store brings you the latest in designer products straight out
          of fashion houses. You can shop online at Myntra from the comfort of
          your home and get your favourites delivered right to your doorstep.
        </p>

        <h1 id="description-head2">
          BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION
        </h1>
        <p>
          Be it clothing, footwear or accessories, Myntra offers you the ideal
          combination of fashion and functionality for men, women and kids. You
          will realise that the sky is the limit when it comes to the types of
          outfits that you can purchase for different occasions.
        </p>

        <p>
          <b>1) Smart men’s clothing -</b> At Myntra you will find myriad
          options in smart formal shirts and trousers, cool T-shirts and jeans,
          or kurta and pyjama combinations for men. Wear your attitude with
          printed T-shirts. Create the back-to-campus vibe with varsity T-shirts
          and distressed jeans. Be it gingham, buffalo, or window-pane style,
          checked shirts are unbeatably smart. Team them up with chinos, cuffed
          jeans or cropped trousers for a smart casual look. Opt for a stylish
          layered look with biker jackets. Head out in cloudy weather with
          courage in water-resistant jackets. Browse through our innerwear
          section to find supportive garments which would keep you confident in
          any outfit.
        </p>

        <p>
          <b>2) Trendy women’s clothing -</b> Online shopping for women at
          Myntra is a mood-elevating experience. Look hip and stay comfortable
          with chinos and printed shorts this summer. Look hot on your date
          dressed in a little black dress, or opt for red dresses for a sassy
          vibe. Striped dresses and T-shirts represent the classic spirit of
          nautical fashion. Choose your favourites from among Bardot,
          off-shoulder, shirt-style, blouson, embroidered and peplum tops, to
          name a few. Team them up with skinny-fit jeans, skirts or palazzos.
          Kurtis and jeans make the perfect fusion-wear combination for the cool
          urbanite. Our grand sarees and lehenga-choli selections are perfect to
          make an impression at big social events such as weddings. Our
          salwar-kameez sets, kurtas and Patiala suits make comfortable options
          for regular wear.
        </p>

        <p>
          <b>3) Fashionable footwear -</b> While clothes maketh the man, the
          type of footwear you wear reflects your personality. We bring you an
          exhaustive lineup of options in casual shoes for men, such as sneakers
          and loafers. Make a power statement at work dressed in brogues and
          oxfords. Practice for your marathon with running shoes for men and
          women. Choose shoes for individual games such as tennis, football,
          basketball, and the like. Or step into the casual style and comfort
          offered by sandals, sliders, and flip-flops. Explore our lineup of
          fashionable footwear for ladies, including pumps, heeled boots,
          wedge-heels, and pencil-heels. Or enjoy the best of comfort and style
          with embellished and metallic flats.
        </p>

        <p>
          <b>4) Stylish accessories -</b> Myntra is one of the best online
          shopping sites for classy accessories that perfectly complement your
          outfits. You can select smart analogue or digital watches and match
          them up with belts and ties. Pick up spacious bags, backpacks, and
          wallets to store your essentials in style. Whether you prefer minimal
          jewellery or grand and sparkling pieces, our online jewellery
          collection offers you many impressive options.
        </p>

        <p>
          <b>5) Fun and frolic -</b> Online shopping for kids at Myntra is a
          complete joy. Your little princess is going to love the wide variety
          of pretty dresses, ballerina shoes, headbands and clips. Delight your
          son by picking up sports shoes, superhero T-shirts, football jerseys
          and much more from our online store. Check out our lineup of toys with
          which you can create memories to cherish.
        </p>

        <p>
          <b>6) Beauty begins here -</b> You can also refresh, rejuvenate and
          reveal beautiful skin with personal care, beauty and grooming products
          from Myntra. Our soaps, shower gels, skin care creams, lotions and
          other ayurvedic products are specially formulated to reduce the effect
          of aging and offer the ideal cleansing experience. Keep your scalp
          clean and your hair uber-stylish with shampoos and hair care products.
          Choose makeup to enhance your natural beauty.
        </p>

        <p>
          Myntra is one of the best online shopping sites in India which could
          help transform your living spaces completely. Add colour and
          personality to your bedrooms with bed linen and curtains. Use smart
          tableware to impress your guest. Wall decor, clocks, photo frames and
          artificial plants are sure to breathe life into any corner of your
          home.
        </p>

        <h1 id="description-head3">AFFORDABLE FASHION AT YOUR FINGERTIPS</h1>
        <p>
          Myntra is one of the unique online shopping sites in India where
          fashion is accessible to all. Check out our new arrivals to view the
          latest designer clothing, footwear and accessories in the market. You
          can get your hands on the trendiest style every season in western
          wear. You can also avail the best of ethnic fashion during all Indian
          festive occasions. You are sure to be impressed with our seasonal
          discounts on footwear, trousers, shirts, backpacks and more. The
          end-of-season sale is the ultimate experience when fashion gets
          unbelievably affordable.
        </p>

        <h1 id="description-head4">MYNTRA INSIDER</h1>
        <p>
          Every online shopping experience is precious. Hence, a cashless
          reward-based customer loyalty program called Myntra Insider was
          introduced to enhance your online experience. The program is
          applicable to every registered customer and measures rewards in the
          form of Insider Points. There are four levels to achieve in the
          program, as the Insider Points accumulate. They are - Insider, Select,
          Elite or Icon. Apart from offering discounts on Myntra and partner
          platform coupons, each tier comes with its own special perks.
        </p>

        <h1 id="insider">Insider</h1>
        <ul>
          <li>
            Opportunity to master any domain in fashion with tips from celebrity
            stylists at Myntra Masterclass sessions.
          </li>
          <li>Curated collections from celeb stylists.</li>
        </ul>

        <h1 id="elite">Elite</h1>
        <ul>
          <li>
            VIP access to special sale events such as the End of Reason Sale
            (EORS) and product launches.
          </li>
          <li>Exclusive early access to Limited Edition products</li>
        </ul>

        <h1 id="icon">Icon</h1>
        <ul>
          <li>Chance to get on guest lists for special events.</li>
        </ul>

        <h1 id="description-head5">
          MYNTRA STUDIO - THE PERSONALISED FASHION FEED YOU WOULDN’T WANT TO
          MISS OUT ON
        </h1>
        <p>
          The world wide web is evolving at a relentless pace, and with an
          accelerated growth each passing year, there is bound to be an
          overwhelming surge of online content. It was for this very reason that
          personalisation of search feeds was proposed as a solution to combat
          the overload of irrelevant information. Several social media platforms
          such as Facebook and Instagram along with various online shopping
          websites have chosen to help filter content, increasing user
          engagement, retention and customer loyalty. Myntra is one such online
          shopping website that joins the list of platforms that help curate a
          personalised fashion feed. Named theMyntra Studio, this personalised
          search feed brings you the latest men and women’s fashion trends,
          celebrity styles, branded content and daily updates from your
          favourite fashion labels. If you are wondering how impactful Myntra
          Studio can be, we are listing out five perks of having a rich,
          meaningful, and personalised fashion feed in your life.
        </p>

        <h1 id="keep">
          Keep Up With What Your Favourite Fashion Icons Are Upto
        </h1>
        <ul>
          <li>
            The #OOTD, AKA outfit of the day hashtag trend has been a rage among
            fashion bloggers and stylists. The whole concept of building an
            outfit from scratch and showcasing it to a huge community of
            enthusiasts using the hashtag has helped individuals with
            understanding trends and making suitable for daily wear. Imagine if
            you could keep up with every piece of clothing and accessory worn by
            the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin
            Bieber, Myntra Studio has a ‘Stories’ feature to help track
            celebrity fashion trends, exploring details such as their outfit of
            the day. This way, you would not ever miss out on the latest
            celebrity fashion trends, from all around the world.
          </li>
        </ul>

        <h1 id="tips">Quick Fashion Tip And Tricks</h1>
        <ul>
          <li>
            Whether it is draping a saree into a dhoti style, wearing the right
            lingerie under certain dresses or discovering multiple uses out of
            heavy ethnic wear, Myntra Studio will help you acquire some unique
            and useful fashion hacks. Each hack is designed with the intention
            to help you get the best wear out of everything in your wardrobe.
          </li>
        </ul>

        <h1 id="updates">
          Updates on What Is Trending and New Product Launches
        </h1>
        <ul>
          <li>
            Since fast fashion seems to be extremely hard to keep up with these
            days, a quick update on what is trending in accessories, clothing
            and footwear would certainly be of great help. Myntra Studio helps
            you stay connected to the most beloved and sought after brands such
            as Puma, Coverstory, The Label Life and so many more. Your feed
            keeps you updated with stories of what the brands are creating
            including clothing, footwear and jewellery, along with their new
            seasonal collections.
          </li>
        </ul>

        <h1 id="explicit">
          Explicit Step-By-Step Beauty Routines From Experts
        </h1>
        <ul>
          <li>
            Just like fashion, the beauty community keeps on growing, and with
            brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina
            Kaif, are constantly coming up with mind-blowing products. Whether
            it is creating a no-makeup look, different winged eyeliners,
            do-it-yourself facial masks and other personal care beauty routines,
            Myntra Studio is here for you.
          </li>
        </ul>

        <h1 id="celebrity">
          Celebrity Confessions And A Look Into Their Lives
        </h1>
        <ul>
          <li>
            A bonus feature that Myntra Studio has in store for you is celebrity
            confessions and a peek into their lives. So, Myntra helps you stay
            connected to your most beloved celebrities in a matter of clicks. If
            you are very particular when it comes to the content you wish to
            view and engage with on social media, the ability to intricately
            filter content helps achieve that. Applying the same formula for
            hardcore fashion lovers and shoppers, Myntra Studio brings you a
            daily fashion fix incorporating everything that you love, all at one
            place. Sign up on Myntra today and start organising your fashion
            feed, just the way you want to.
          </li>
        </ul>

        <h1 id="description-head6">MYNTRA APP</h1>
        <p>
          Myntra, India’s no. 1 online fashion destination justifies its fashion
          relevance by bringing something new and chic to the table on the
          daily. Fashion trends seem to change at lightning speed, yet the
          Myntra shopping app has managed to keep up without any hiccups. In
          addition, Myntra has vowed to serve customers to the best of its
          ability by introducing its first-ever loyalty program, The Myntra
          Insider. Gain access to priority delivery, early sales, lucrative
          deals and other special perks on all your shopping with the Myntra
          app. Download the Myntra app on your Android or IOS device today and
          experience shopping like never before!
        </p>

        <h1 id="description-head7">HISTORY OF MYNTRA</h1>
        <p>
          Becoming India’s no. 1 fashion destination is not an easy feat.
          Sincere efforts, digital enhancements and a team of dedicated
          personnel with an equally loyal customer base have made Myntra the
          online platform that it is today. The original B2B venture for
          personalized gifts was conceived in 2007 but transitioned into a
          full-fledged ecommerce giant within a span of just a few years. By
          2012, Myntra had introduced 350 Indian and international brands to its
          platform, and this has only grown in number each passing year. Today
          Myntra sits on top of the online fashion game with an astounding
          social media following, a loyalty program dedicated to its customers,
          and tempting, hard-to-say-no-to deals. The Myntra shopping app came
          into existence in the year 2015 to further encourage customers’
          shopping sprees. Download the app on your Android or IOS device this
          very minute to experience fashion like never before
        </p>

        <h1 id="description-head8">
          SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
        </h1>
        <p>
          Another reason why Myntra is the best of all online stores is the
          complete convenience that it offers. You can view your favourite
          brands with price options for different products in one place. A
          user-friendly interface will guide you through your selection process.
          Comprehensive size charts, product information and high-resolution
          images help you make the best buying decisions. You also have the
          freedom to choose your payment options, be it card or
          cash-on-delivery. The 30-day returns policy gives you more power as a
          buyer. Additionally, the try-and-buy option for select products takes
          customer-friendliness to the next level. Enjoy the hassle-free
          experience as you shop comfortably from your home or your workplace.
          You can also shop for your friends, family and loved-ones and avail
          our gift services for special occasions.
        </p>
      </div>
        </div>
    
    </footer>
  );
}
