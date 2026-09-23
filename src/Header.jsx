import SearchIcon from "@mui/icons-material/Search";
import Person2Icon from '@mui/icons-material/Person2';

function Header() 
{ 
    return( 
        <> 
            <div className="flex gap-3 items-center mx-7 my-3 font-bold justify-between"> 
                <div className="flex gap-4">                    
                    <div className="w-10 h-10 flex items-center mx-2"> 
                        <a href="/">
                            <img src="\myntraLogo.png" alt="" /> 
                        </a>
                    </div> 

                    <div className="flex mx-3 my-3 items-center gap-7"> 

                        <div className="relative group">
                            <button className="px-2">MEN</button>
                            <div className="hidden group-hover:flex absolute font-light text-sm bg-white h-90 w-150 justify-between px-5 py-5">
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Topwear</h3>
                                    <a href="/men/t-shirts">T-Shirts</a>
                                    <a href="/men/casual-shirts">Casual Shirts</a>
                                    <a href="/men/formal-shirts">Formal Shirts</a>
                                    <a href="/men/sweatshirts">Sweatshirts</a>
                                    <a href="/men/sweaters">Sweaters</a>
                                    <a href="/men/jackets">Jackets</a>
                                    <a href="/men/blazers-coats">Blazers & Coats</a>
                                    <a href="/men/suits">Suits</a>
                                    <a href="/men/rain-jackets">Rain Jackets</a>

                                    <h3 className="text-pink-600 font-bold">Indian & Festive Wear</h3>
                                    <a href="/men/kurtas">Kurtas & Kurta Sets</a>
                                    <a href="/men/sherwanis">Sherwanis</a>
                                    <a href="/men/nehru-jackets">Nehru Jackets</a>
                                    <a href="/men/dhotis">Dhotis</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Bottomwear</h3>
                                    <a href="/men/jeans">Jeans</a>
                                    <a href="/men/casual-trousers">Casual Trousers</a>
                                    <a href="/men/formal-trousers">Formal Trousers</a>
                                    <a href="/men/shorts">Shorts</a>
                                    <a href="/men/track-pants">Track Pants & Joggers</a>

                                    <h3 className="text-pink-600 font-bold">Plus Size</h3>
                                    <a href="/men/plus-size-tshirts">Plus Size T-Shirts</a>
                                    <a href="/men/plus-size-shirts">Plus Size Shirts</a>
                                    <a href="/men/plus-size-trousers">Plus Size Trousers</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Footwear</h3>
                                    <a href="/men/casual-shoes">Casual Shoes</a>
                                    <a href="/men/sports-shoes">Sports Shoes</a>
                                    <a href="/men/formal-shoes">Formal Shoes</a>
                                    <a href="/men/sneakers">Sneakers</a>
                                    <a href="/men/sandals-floaters">Sandals & Floaters</a>
                                    <a href="/men/flip-flops">Flip Flops</a>
                                    <a href="/men/socks">Socks</a>

                                    <h3 className="text-pink-600 font-bold">Sports & Activewear</h3>
                                    <a href="/men/sports-tshirts">Sports T-Shirts</a>
                                    <a href="/men/track-pants">Track Pants</a>
                                    <a href="/men/sports-shoes">Sports Shoes</a>
                                </div>
                            </div>
                        </div> 

                        <div className="relative group">
                            <button className="px-2">WOMEN</button>
                            <div className="hidden group-hover:flex absolute font-light text-sm bg-white h-auto w-250 justify-between px-5 py-5">
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Indian & Fusion Wear</h3>
                                    <a href="/women/kurtas-suits">Kurtas & Suits</a>
                                    <a href="/women/kurtis">Kurtis, Tunics & Tops</a>
                                    <a href="/women/sarees">Sarees</a>
                                    <a href="/women/ethnic-wear">Ethnic Wear</a>
                                    <a href="/women/leggings-salwars">Leggings, Salwars & Churidars</a>
                                    <a href="/women/skirts-palazzos">Skirts & Palazzos</a>
                                    <a href="/women/dress-materials">Dress Materials</a>
                                    <a href="/women/lehenga-cholis">Lehenga Cholis</a>
                                    <a href="/women/dupatta-shawls">Dupattas & Shawls</a>
                                    <a href="/women/jackets">Jackets</a>

                                    <h3 className="text-pink-600 font-bold">Belts, Scarves & More</h3>
                                    <a href="/women/accessories">Accessories</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Western Wear</h3>
                                    <a href="/women/dresses">Dresses</a>
                                    <a href="/women/tops">Tops</a>
                                    <a href="/women/tshirts">Tshirts</a>
                                    <a href="/women/jeans">Jeans</a>
                                    <a href="/women/trousers-capris">Trousers & Capris</a>
                                    <a href="/women/shorts-skirts">Shorts & Skirts</a>
                                    <a href="/women/co-ords">Co-ords</a>
                                    <a href="/women/plussize">Playsuits</a>
                                    <a href="/women/jumpsuits">Jumpsuits</a>
                                    <a href="/women/shrugs">Shrugs</a>
                                    <a href="/women/sweaters">Sweaters & Sweatshirts</a>
                                    <a href="/women/jackets-coats">Jackets & Coats</a>
                                    <a href="/women/blazers-waistcoats">Blazers & Waistcoats</a>

                                    <h3 className="text-pink-600 font-bold">Plus Size</h3>
                                    <a href="/women/plus-size">Plus Size Clothing</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Maternity</h3>
                                    <a href="/women/maternity">Maternity Wear</a>

                                    <h3 className="text-pink-600 font-bold">Sunglasses & Frames</h3>
                                    <a href="/women/sunglasses">Sunglasses</a>

                                    <h3 className="text-pink-600 font-bold">Footwear</h3>
                                    <a href="/women/flats">Flats</a>
                                    <a href="/women/casual-shoes">Casual Shoes</a>
                                    <a href="/women/heels">Heels</a>
                                    <a href="/women/boots">Boots</a>
                                    <a href="/women/sports-shoes">Sports Shoes & Floaters</a>

                                    <h3 className="text-pink-600 font-bold">Sports & Active Wear</h3>
                                    <a href="/women/sports-clothing">Clothing</a>
                                    <a href="/women/sports-footwear">Footwear</a>
                                    <a href="/women/sports-accessories">Sports Accessories</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Beauty & Personal Care</h3>
                                    <a href="/women/makeup">Makeup</a>
                                    <a href="/women/skincare">Skincare</a>
                                    <a href="/women/premium-beauty">Premium Beauty</a>
                                    <a href="/women/lipsticks">Lipsticks</a>
                                    <a href="/women/fragrances">Fragrances</a>

                                    <h3 className="text-pink-600 font-bold">Footwear</h3>
                                    <a href="/women/flats">Flats</a>
                                    <a href="/women/casual-shoes">Casual Shoes</a>
                                    <a href="/women/heels">Heels</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Gadgets</h3>
                                    <a href="/women/smart-wearables">Smart Wearables</a>
                                    <a href="/women/fitness-gadgets">Fitness Gadgets</a>
                                    <a href="/women/headphones">Headphones</a>
                                    <a href="/women/speakers">Speakers</a>

                                    <h3 className="text-pink-600 font-bold">Jewellery</h3>
                                    <a href="/women/fashion-jewellery">Fashion Jewellery</a>
                                    <a href="/women/fine-jewellery">Fine Jewellery</a>
                                    <a href="/women/earrings">Earrings</a>

                                    <h3 className="text-pink-600 font-bold">Handbags & Bags</h3>
                                    <a href="/women/handbags">Handbags</a>
                                    <a href="/women/backpacks">Backpacks</a>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="px-2">KIDS</button>
                            <div className="hidden group-hover:flex absolute font-light text-sm bg-white h-auto w-200 justify-between px-5 py-5">
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Boys Clothing</h3>
                                    <a href="/kids/boys-tshirts">T-Shirts</a>
                                    <a href="/kids/boys-shirts">Shirts</a>
                                    <a href="/kids/boys-shorts">Shorts</a>
                                    <a href="/kids/boys-jeans">Jeans</a>
                                    <a href="/kids/boys-trousers">Trousers</a>
                                    <a href="/kids/boys-clothing-sets">Clothing Sets</a>
                                    <a href="/kids/boys-ethnic-wear">Ethnic Wear</a>
                                    <a href="/kids/boys-track-pants">Track Pants & Pyjamas</a>
                                    <a href="/kids/boys-jackets">Jacket, Sweater & Sweatshirts</a>
                                    <a href="/kids/boys-party-wear">Party Wear</a>
                                    <a href="/kids/boys-nightwear">Nightwear & Loungewear</a>
                                    <a href="/kids/boys-value-packs">Value Packs</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Girls Clothing</h3>
                                    <a href="/kids/girls-dresses">Dresses</a>
                                    <a href="/kids/girls-tops">Tops</a>
                                    <a href="/kids/girls-tshirts">Tshirts</a>
                                    <a href="/kids/girls-clothing-sets">Clothing Sets</a>
                                    <a href="/kids/girls-lehengas">Lehenga Choli</a>
                                    <a href="/kids/girls-kurta-sets">Kurta Sets</a>
                                    <a href="/kids/girls-party-wear">Party Wear</a>
                                    <a href="/kids/girls-dungarees">Dungarees & Jumpsuits</a>
                                    <a href="/kids/girls-skirts-shorts">Skirts & Shorts</a>
                                    <a href="/kids/girls-tights">Tights & Leggings</a>
                                    <a href="/kids/girls-jeans">Jeans, Trousers & Capris</a>
                                    <a href="/kids/girls-jackets">Jacket, Sweater & Sweatshirts</a>
                                    <a href="/kids/girls-nightwear">Nightwear & Loungewear</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Footwear</h3>
                                    <a href="/kids/casual-shoes">Casual Shoes</a>
                                    <a href="/kids/flipflops">Flipflops</a>
                                    <a href="/kids/sports-shoes">Sports Shoes</a>
                                    <a href="/kids/flats">Flats</a>
                                    <a href="/kids/sandals">Sandals</a>
                                    <a href="/kids/heels">Heels</a>
                                    <a href="/kids/school-shoes">School Shoes</a>
                                    <a href="/kids/socks">Socks</a>

                                    <h3 className="text-pink-600 font-bold">Toys & Games</h3>
                                    <a href="/kids/learning-development">Learning & Development</a>
                                    <a href="/kids/activity-toys">Activity Toys</a>
                                    <a href="/kids/soft-toys">Soft Toys</a>
                                    <a href="/kids/action-figures">Action Figure / Play set</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Infants</h3>
                                    <a href="/kids/bodysuits">Bodysuits</a>
                                    <a href="/kids/rompers">Rompers & Sleepsuits</a>
                                    <a href="/kids/clothing-sets">Clothing Sets</a>
                                    <a href="/kids/tshirts-tops">Tshirts & Tops</a>
                                    <a href="/kids/dresses">Dresses</a>
                                    <a href="/kids/bottomwear">Bottom wear</a>
                                    <a href="/kids/winter-wear">Winter Wear</a>
                                    <a href="/kids/infant-care">Infant Care</a>

                                    <h3 className="text-pink-600 font-bold">Home & Bath</h3>
                                    <a href="/kids/home-bath">Home & Bath</a>

                                    <h3 className="text-pink-600 font-bold">Personal Care</h3>
                                    <a href="/kids/personal-care">Personal Care</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Kids Accessories</h3>
                                    <a href="/kids/bags-backpacks">Bags & Backpacks</a>
                                    <a href="/kids/watches">Watches</a>
                                    <a href="/kids/jewellery">Jewellery & Hair accessory</a>
                                    <a href="/kids/sunglasses">Sunglasses</a>
                                    <a href="/kids/masks">Masks & Protective Gears</a>
                                    <a href="/kids/caps-hats">Caps & Hats</a>

                                    <h3 className="text-pink-600 font-bold">Brands</h3>
                                    <a href="/kids/hm">H&M</a>
                                    <a href="/kids/max">Max Kids</a>
                                    <a href="/kids/pantaloons">Pantaloons</a>
                                    <a href="/kids/benetton">United Colors Of Benetton Kids</a>
                                    <a href="/kids/yk">YK</a>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="px-2">HOME</button>
                            <div className="hidden group-hover:flex absolute font-light text-sm bg-white h-auto w-190 justify-between px-5 py-5">
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Bed Linen & Furnishing</h3>
                                    <a href="/home/bed-runners">Bed Runners</a>
                                    <a href="/home/mattress-protectors">Mattress Protectors</a>
                                    <a href="/home/bedsheets">Bedsheets</a>
                                    <a href="/home/bedding-sets">Bedding Sets</a>
                                    <a href="/home/blankets-quilts">Blankets, Quilts & Dohars</a>
                                    <a href="/home/pillows">Pillows & Pillow Covers</a>
                                    <a href="/home/bed-covers">Bed Covers</a>
                                    <a href="/home/diwan-sets">Diwan Sets</a>
                                    <a href="/home/chair-pads">Chair Pads & Covers</a>
                                    <a href="/home/sofa-covers">Sofa Covers</a>

                                    <h3 className="text-pink-600 font-bold">Flooring</h3>
                                    <a href="/home/floor-runners">Floor Runners</a>
                                    <a href="/home/carpets">Carpets</a>
                                    <a href="/home/floor-mats">Floor Mats & Dhurries</a>
                                    <a href="/home/door-mats">Door Mats</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Bath</h3>
                                    <a href="/home/bath-towels">Bath Towels</a>
                                    <a href="/home/hand-face-towels">Hand & Face Towels</a>
                                    <a href="/home/beach-towels">Beach Towels</a>
                                    <a href="/home/towels-set">Towels Set</a>
                                    <a href="/home/bath-rugs">Bath Rugs</a>
                                    <a href="/home/bath-robes">Bath Robes</a>
                                    <a href="/home/bathroom-accessories">Bathroom Accessories</a>
                                    <a href="/home/shower-curtains">Shower Curtains</a>

                                    <h3 className="text-pink-600 font-bold">Lamps & Lighting</h3>
                                    <a href="/home/floor-lamps">Floor Lamps</a>
                                    <a href="/home/ceiling-lamps">Ceiling Lamps</a>
                                    <a href="/home/table-lamps">Table Lamps</a>
                                    <a href="/home/wall-lamps">Wall Lamps</a>
                                    <a href="/home/outdoor-lamps">Outdoor Lamps</a>
                                    <a href="/home/string-lights">String Lights</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Home Décor</h3>
                                    <a href="/home/plants-planters">Plants & Planters</a>
                                    <a href="/home/aromas-candles">Aromas & Candles</a>
                                    <a href="/home/clocks">Clocks</a>
                                    <a href="/home/mirrors">Mirrors</a>
                                    <a href="/home/wall-decor">Wall Décor</a>
                                    <a href="/home/festive-decor">Festive Decor</a>
                                    <a href="/home/pooja-essentials">Pooja Essentials</a>
                                    <a href="/home/wall-shelves">Wall Shelves</a>
                                    <a href="/home/fountains">Fountains</a>
                                    <a href="/home/showpieces">Showpieces & Vases</a>
                                    <a href="/home/ottoman">Ottoman</a>

                                    <h3 className="text-pink-600 font-bold">Cushions & Cushion Covers</h3>
                                    <a href="/home/cushions">Cushions</a>

                                    <h3 className="text-pink-600 font-bold">Curtains</h3>
                                    <a href="/home/curtains">Curtains</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Furniture</h3>
                                    <a href="/home/furniture">Furniture</a>

                                    <h3 className="text-pink-600 font-bold">Home Gift Sets</h3>
                                    <a href="/home/gift-sets">Gift Sets</a>

                                    <h3 className="text-pink-600 font-bold">Kitchen & Table</h3>
                                    <a href="/home/table-runners">Table Runners</a>
                                    <a href="/home/dinnerware">Dinnerware & Serveware</a>
                                    <a href="/home/cups-mugs">Cups and Mugs</a>
                                    <a href="/home/bakeware-cookware">Bakeware & Cookware</a>
                                    <a href="/home/kitchen-storage">Kitchen Storage & Tools</a>
                                    <a href="/home/bar-drinkware">Bar & Drinkware</a>
                                    <a href="/home/table-covers">Table Covers & Furnishings</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Storage</h3>
                                    <a href="/home/bins">Bins</a>
                                    <a href="/home/hangers">Hangers</a>
                                    <a href="/home/organisers">Organisers</a>
                                    <a href="/home/hooks-holders">Hooks & Holders</a>
                                    <a href="/home/laundry-bags">Laundry Bags</a>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="px-2">BEAUTY</button>
                            <div className="hidden group-hover:flex absolute font-light text-sm bg-white h-auto w-180 justify-between px-5 py-5">
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Makeup</h3>
                                    <a href="/beauty/lipstick">Lipstick</a>
                                    <a href="/beauty/lip-gloss">Lip Gloss</a>
                                    <a href="/beauty/lip-liner">Lip Liner</a>
                                    <a href="/beauty/mascara">Mascara</a>
                                    <a href="/beauty/eyeliner">Eyeliner</a>
                                    <a href="/beauty/kajal">Kajal</a>
                                    <a href="/beauty/eyeshadow">Eyeshadow</a>
                                    <a href="/beauty/foundation">Foundation</a>
                                    <a href="/beauty/primer">Primer</a>
                                    <a href="/beauty/concealer">Concealer</a>
                                    <a href="/beauty/compact">Compact</a>
                                    <a href="/beauty/nail-polish">Nail Polish</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Skincare, Bath & Body</h3>
                                    <a href="/beauty/moisturiser">Face Moisturiser</a>
                                    <a href="/beauty/cleanser">Cleanser</a>
                                    <a href="/beauty/masks-peel">Masks & Peel</a>
                                    <a href="/beauty/sunscreen">Sunscreen</a>
                                    <a href="/beauty/serum">Serum</a>
                                    <a href="/beauty/face-wash">Face Wash</a>
                                    <a href="/beauty/eye-cream">Eye Cream</a>
                                    <a href="/beauty/lip-balm">Lip Balm</a>
                                    <a href="/beauty/body-lotion">Body Lotion</a>
                                    <a href="/beauty/body-wash">Body Wash</a>
                                    <a href="/beauty/body-scrub">Body Scrub</a>
                                    <a href="/beauty/hand-cream">Hand Cream</a>

                                    <h3 className="text-pink-600 font-bold">Baby Care</h3>
                                    <a href="/beauty/baby-care">Baby Care</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Haircare</h3>
                                    <a href="/beauty/shampoo">Shampoo</a>
                                    <a href="/beauty/conditioner">Conditioner</a>
                                    <a href="/beauty/hair-cream">Hair Cream</a>
                                    <a href="/beauty/hair-oil">Hair Oil</a>
                                    <a href="/beauty/hair-gel">Hair Gel</a>
                                    <a href="/beauty/hair-color">Hair Color</a>
                                    <a href="/beauty/hair-serum">Hair Serum</a>
                                    <a href="/beauty/hair-accessory">Hair Accessory</a>

                                    <h3 className="text-pink-600 font-bold">Fragrances</h3>
                                    <a href="/beauty/perfume">Perfume</a>
                                    <a href="/beauty/deodorant">Deodorant</a>
                                    <a href="/beauty/body-mist">Body Mist</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Appliances</h3>
                                    <a href="/beauty/hair-straightener">Hair Straightener</a>
                                    <a href="/beauty/hair-dryer">Hair Dryer</a>
                                    <a href="/beauty/epilator">Epilator</a>

                                    <h3 className="text-pink-600 font-bold">Men's Grooming</h3>
                                    <a href="/beauty/trimmers">Trimmers</a>
                                    <a href="/beauty/beard-oil">Beard Oil</a>
                                    <a href="/beauty/hair-wax">Hair Wax</a>

                                    <h3 className="text-pink-600 font-bold">Beauty Gift & Makeup Set</h3>
                                    <a href="/beauty/gift-sets">Beauty Gift</a>
                                    <a href="/beauty/makeup-kit">Makeup Kit</a>

                                    <h3 className="text-pink-600 font-bold">Premium Beauty</h3>
                                    <a href="/beauty/premium">Premium Beauty</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Top Brands</h3>
                                    <a href="/beauty/lakme">Lakme</a>
                                    <a href="/beauty/maybelline">Maybelline</a>
                                    <a href="/beauty/loreal">L'Oreal</a>
                                    <a href="/beauty/philips">Philips</a>
                                    <a href="/beauty/bath-body-works">Bath & Body Works</a>
                                    <a href="/beauty/the-body-shop">THE BODY SHOP</a>
                                    <a href="/beauty/biotique">Biotique</a>
                                    <a href="/beauty/mamaearth">Mamaearth</a>
                                    <a href="/beauty/mccaffeine">MCaffeine</a>
                                    <a href="/beauty/nivea">Nivea</a>
                                    <a href="/beauty/lotus-herbals">Lotus Herbals</a>
                                    <a href="/beauty/kama-ayurveda">KAMA AYURVEDA</a>
                                    <a href="/beauty/mac">M.A.C</a>
                                    <a href="/beauty/forest-essentials">Forest Essentials</a>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="px-2">GENZ</button>
                            <div className="hidden group-hover:flex absolute font-light text-sm bg-white h-auto w-180 justify-between px-5 py-5">
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Women's Western Wear</h3>
                                    <a href="/genz/women/dresses">Dresses Under ₹599</a>
                                    <a href="/genz/women/tops">Tops Under ₹499</a>
                                    <a href="/genz/women/jeans">Jeans Under ₹599</a>
                                    <a href="/genz/women/trousers">Trousers Under ₹699</a>
                                    <a href="/genz/women/tshirts">T-shirts Under ₹299</a>
                                    <a href="/genz/women/shirts">Shirts Under ₹499</a>
                                    <a href="/genz/women/skirts">Skirts Under ₹499</a>
                                    <a href="/genz/women/shorts">Shorts Under ₹699</a>
                                    <a href="/genz/women/co-ords">Co-ords Under ₹799</a>
                                    <a href="/genz/women/jumpsuits">Jumpsuits Under ₹899</a>
                                    <a href="/genz/women/track-pants">Track pants Under ₹699</a>
                                    <a href="/genz/women/jackets">Jackets Under ₹899</a>
                                    <a href="/genz/women/sweatshirts">Sweatshirts Under ₹699</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Women's Ethnic Wear</h3>
                                    <a href="/genz/women/kurtas">Kurtas Under ₹399</a>
                                    <a href="/genz/women/kurtis">Kurtis Under ₹499</a>
                                    <a href="/genz/women/kurta-sets">Kurta sets Under ₹499</a>
                                    <a href="/genz/women/ethnic-dresses">Ethnic Dresses Under ₹999</a>
                                    <a href="/genz/women/palazzos">Palazzos Under ₹799</a>

                                    <h3 className="text-pink-600 font-bold">Lingerie & Loungewear</h3>
                                    <a href="/genz/women/bras">Bras Under ₹399</a>
                                    <a href="/genz/women/night-suits">Night suits Under ₹799</a>
                                    <a href="/genz/women/nightdresses">Nightdresses Under ₹999</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Men's Casual Wear</h3>
                                    <a href="/genz/men/tshirts">T-shirts Under ₹299</a>
                                    <a href="/genz/men/shirts">Shirts Under ₹499</a>
                                    <a href="/genz/men/jeans">Jeans Under ₹599</a>
                                    <a href="/genz/men/trousers">Trousers Under ₹699</a>
                                    <a href="/genz/men/shorts">Shorts Under ₹599</a>
                                    <a href="/genz/men/track-pants">Track pants Under ₹699</a>
                                    <a href="/genz/men/jackets">Jackets Under ₹899</a>
                                    <a href="/genz/men/sweatshirts">Sweatshirts Under ₹699</a>
                                    <a href="/genz/men/sweaters">Sweaters Under ₹999</a>
                                    <a href="/genz/men/co-ords">Co-ords Under ₹999</a>

                                    <h3 className="text-pink-600 font-bold">Men's Occasion Wear</h3>
                                    <a href="/genz/men/kurtas">Kurtas Under ₹799</a>
                                    <a href="/genz/men/kurta-sets">Kurta Sets Under ₹999</a>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-pink-600 font-bold">Women's Footwear</h3>
                                    <a href="/genz/women/heels">Heels Under ₹599</a>
                                    <a href="/genz/women/flats">Flats Under ₹499</a>
                                    <a href="/genz/women/casual-shoes">Casual shoes Under ₹699</a>
                                    <a href="/genz/women/sports-shoes">Sports shoes Under ₹999</a>
                                    <a href="/genz/women/flip-flops">Flip flops Under ₹799</a>
                                    <a href="/genz/women/boots">Boots Under ₹999</a>
                                    <a href="/genz/women/ballet-flats">Ballerinas Under ₹799</a>

                                    <h3 className="text-pink-600 font-bold">Men's Footwear</h3>
                                    <a href="/genz/men/casual-shoes">Casual shoes Under ₹799</a>
                                    <a href="/genz/men/sports-shoes">Sports shoes Under ₹999</a>
                                    <a href="/genz/men/formal-shoes">Formal shoes Under ₹999</a>
                                    <a href="/genz/men/sandals">Sandals Under ₹799</a>
                                    <a href="/genz/men/flip-flops">Flip flops Under ₹499</a>
                                    <a href="/genz/men/boots">Boots Under ₹999</a>
                                </div>

                            </div>
                        </div>

                        <button className="px-2">STUDIO</button>  

                    </div> 
                </div>

                <div className="flex gap-3"> 
                    <div className="border border-gray-100 hover:border-gray-500 w-100 bg-gray-100 font-semibold px-2 py-2"> 
                        <SearchIcon></SearchIcon>
                        <input className="px-1 py-1 text-sm w-80 focus:outline-none" placeholder="Search for products, brands and more"/> 
                    </div> 

                    <button>Profile</button> 
                    <button>Wishlist</button> 
                    <button>Bag</button>
                </div> 

            </div> 
        </>  
    ) 
} 
 
export default Header;