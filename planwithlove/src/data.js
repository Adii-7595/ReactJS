const data = [
    {
        id: 1,
        name: "Agra",
        image: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=is&k=20&c=CY3pDvJY1aVslEn0X_yjDq3bJT7OxDtiflKA8NzGLAg=",
        price: "35,758",
        info: "Agra, a city on the banks of the Yamuna River in Uttar Pradesh, India, is known for its rich history and architectural marvels. It is home to the Taj Mahal, a white marble mausoleum commissioned by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. This UNESCO World Heritage Site is renowned for its stunning architecture and intricate inlay work. Apart from the Taj Mahal, Agra also boasts other historic landmarks such as the Agra Fort, a massive red sandstone fortress, and the Tomb of Itimad-ud-Daulah, often referred to as the 'Baby Taj' for its resemblance to the Taj Mahal. The city offers a blend of Mughal history and contemporary culture, making it a popular destination for tourists from around the world."
    },
    {
        id: 2,
        name: "Jaipur",
        image: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.webp?s=612x612&w=is&k=20&c=Ji8GVY_5yhmm06yo4ChxN8pqR-fJZpBw7SQsKw6T918=",
        price: "28,500",
        info: "Jaipur, the capital city of Rajasthan, India, is renowned for its vibrant culture and historic palaces. Often called the 'Pink City' due to its distinct pink-colored buildings, Jaipur is a popular tourist destination known for its stunning forts and palaces. The Amer Fort, perched on a hill, is a majestic example of Rajput architecture, while the City Palace complex showcases royal heritage with its intricate courtyards and gardens. The Hawa Mahal, or 'Palace of Winds,' is another iconic landmark, famous for its unique façade. Jaipur's bustling markets, rich cuisine, and cultural festivals add to its charm, making it an essential stop on the Golden Triangle tourist circuit."
    },
    {
        id: 3,
        name: "Mumbai",
        image: "https://media.istockphoto.com/id/991785376/photo/varanasi-city-with-ancient-architecture-view-of-the-holy-manikarnika-ghat-at-varanasi-india-at.jpg?s=2048x2048&w=is&k=20&c=7uPUj1KoRzNdKhZQkpuMZIw-f0-IS8SDprnXyXCc01M=",
        price: "45,999",
        info: "Mumbai, formerly known as Bombay, is a bustling metropolis on the west coast of India. It is the financial, commercial, and entertainment capital of the country. The city is famous for its vibrant nightlife, historical landmarks, and the Bollywood film industry. Key attractions include the Gateway of India, an iconic monument overlooking the Arabian Sea, and Marine Drive, a scenic boulevard along the coast. Mumbai also boasts historical sites such as the Elephanta Caves, a network of Hindu and Buddhist caves located on Elephanta Island. The city is a melting pot of cultures, offering diverse culinary experiences, world-class shopping, and a lively arts scene."
    },
    {
        id: 4,
        name: "Goa",
        image: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.webp?s=612x612&w=is&k=20&c=Ji8GVY_5yhmm06yo4ChxN8pqR-fJZpBw7SQsKw6T918=",
        price: "33,250",
        info: "Goa, located on the western coast of India, is renowned for its stunning beaches, vibrant nightlife, and Portuguese heritage. The state is a popular tourist destination known for its picturesque coastline, with beaches like Baga, Anjuna, and Palolem attracting visitors from around the world. Goa's historic churches, such as the Basilica of Bom Jesus and Se Cathedral, reflect its colonial past and are part of the UNESCO World Heritage Site of Old Goa. The state's unique blend of Indian and Portuguese cultures is evident in its cuisine, architecture, and festivals. Goa also offers a range of water sports, scenic wildlife sanctuaries, and lively markets."
    },
    {
        id: 5,
        name: "Delhi",
        image: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.webp?s=612x612&w=is&k=20&c=Ji8GVY_5yhmm06yo4ChxN8pqR-fJZpBw7SQsKw6T918=",
        price: "29,750",
        info: "Delhi, the capital city of India, is a bustling metropolis that combines ancient history with modernity. The city is divided into Old Delhi and New Delhi, each offering a unique experience. Old Delhi is known for its historic sites, including the Red Fort, Jama Masjid, and Chandni Chowk, a vibrant market area. New Delhi, designed by British architect Edwin Lutyens, is home to landmarks such as India Gate, Rashtrapati Bhavan, and Connaught Place. Delhi's diverse cultural heritage is reflected in its numerous museums, temples, and vibrant street food scene. The city serves as a gateway to explore other parts of northern India and offers a rich tapestry of experiences for visitors."
    },
    {
        id: 6,
        name: "Kerala",
        image: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.webp?s=612x612&w=is&k=20&c=Ji8GVY_5yhmm06yo4ChxN8pqR-fJZpBw7SQsKw6T918=",
        price: "42,300",
        info: "Kerala, often referred to as 'God's Own Country,' is a state located on the southwestern coast of India. Known for its serene backwaters, lush green landscapes, and beautiful beaches, Kerala is a popular destination for nature lovers and those seeking relaxation. The state is famous for its houseboat cruises on the backwaters of Alleppey and Kumarakom, where visitors can enjoy the tranquil environment and scenic beauty. Kerala's hill stations, such as Munnar and Wayanad, offer breathtaking views and tea plantations. The state's rich cultural heritage is showcased in its traditional dance forms like Kathakali and Mohiniyattam, and its cuisine, known for its use of coconut and spices."
    },
    {
        id: 7,
        name: "Manali",
        image: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.webp?s=612x612&w=is&k=20&c=Ji8GVY_5yhmm06yo4ChxN8pqR-fJZpBw7SQsKw6T918=",
        price: "37,950",
        info: "Manali, a popular hill station in Himachal Pradesh, India, is known for its picturesque landscapes and adventure activities. Situated in the Kullu Valley, Manali is a gateway to the Himalayas and offers stunning views of snow-capped peaks, lush forests, and meandering rivers. The town is a favorite destination for tourists seeking both relaxation and adventure, with opportunities for skiing, paragliding, and trekking. Key attractions include the Hadimba Temple, dedicated to the goddess Hadimba, and Solang Valley, known for its outdoor sports. Manali's vibrant local markets and scenic beauty make it an ideal destination for a rejuvenating getaway."
    },
    {
        id: 8,
        name: "Shimla",
        image: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.webp?s=612x612&w=is&k=20&c=Ji8GVY_5yhmm06yo4ChxN8pqR-fJZpBw7SQsKw6T918=",
        price: "34,200",
        info: "Shimla, the capital city of Himachal Pradesh, India, is renowned for its colonial architecture, pleasant climate, and scenic beauty. Nestled in the Himalayas, Shimla is a popular hill station that offers a charming blend of natural beauty and historical significance. The Ridge, a large open space in the heart of the city, provides panoramic views of the surrounding mountains and is a popular spot for leisurely walks. The Mall Road, lined with shops and cafes, is another major attraction. Shimla's attractions include the Jakhoo Temple, Christ Church, and the Indian Institute of Advanced Study. The city's pleasant weather and picturesque landscapes make it a favored destination for tourists year-round."
    },
    {
        id: 9,
        name: "Udaipur",
        image: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.webp?s=612x612&w=is&k=20&c=Ji8GVY_5yhmm06yo4ChxN8pqR-fJZpBw7SQsKw6T918=",
        price: "31,700",
        info: "Udaipur, known as the 'City of Lakes,' is a picturesque city in Rajasthan, India, renowned for its stunning lakes and palaces. The city's charm lies in its beautiful water bodies, including Lake Pichola, Lake Palace, and Fateh Sagar Lake. Udaipur's palaces, such as the City Palace and Jag Mandir, showcase exquisite Rajput architecture and offer a glimpse into the city's royal heritage. The city is also known for its vibrant markets, traditional crafts, and colorful festivals. Udaipur's serene ambiance, combined with its historical landmarks and cultural richness, makes it a popular destination for travelers seeking both romance and history."
    },
    {
        id: 10,
        name: "Varanasi",
        image: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.webp?s=612x612&w=is&k=20&c=Ji8GVY_5yhmm06yo4ChxN8pqR-fJZpBw7SQsKw6T918=",
        price: "26,800",
        info: "Varanasi, one of the oldest continuously inhabited cities in the world, is a spiritual and cultural hub in northern India. Situated on the banks of the Ganges River, Varanasi is known for its ghats, where devotees perform ritualistic bathing and religious ceremonies. The city's narrow winding streets are lined with ancient temples, vibrant markets, and traditional workshops. Key attractions include the Kashi Vishwanath Temple, dedicated to Lord Shiva, and Sarnath, an important Buddhist site where Buddha gave his first sermon. Varanasi's rich cultural heritage, spiritual significance, and lively atmosphere make it a unique destination for travelers interested in India's spiritual and historical legacy."
    },
    {
        id: 11,
        name: "Rishikesh",
        image: "https://media.istockphoto.com/id/1650063900/photo/beautiful-milky-way-with-beautiful-landscape-views-of-nature-at-the-crazy-tranquil-lake.jpg?s=612x612&w=is&k=20&c=F8aK65t64C4RecBpgKfR_E_sU5YYWt-P8kN7UAFy7wY=",
        price: "30,550",
        info: "Rishikesh, located in the northern part of India in Uttarakhand, is renowned as the 'Yoga Capital of the World.' It is situated along the banks of the Ganges River, surrounded by lush green hills and offers a serene environment ideal for meditation and spiritual practices. The city is famous for its numerous ashrams and yoga centers, where visitors can engage in yoga and meditation retreats. Rishikesh is also known for the iconic Laxman Jhula and Ram Jhula suspension bridges that span the Ganges, as well as the evening Ganga Aarti ceremony held on the ghats, which attracts visitors from around the globe. The city's tranquil atmosphere, combined with its spiritual significance and adventure opportunities, such as white-water rafting and trekking, makes it a sought-after destination for both spiritual seekers and adventure enthusiasts."
    },
    {
        id: 12,
        name: "Darjeeling",
        image: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=is&k=20&c=CY3pDvJY1aVslEn0X_yjDq3bJT7OxDtiflKA8NzGLAg=",


        price: "39,400",
        info: "Darjeeling, a picturesque hill station located in the Indian state of West Bengal, is celebrated for its stunning views of the Himalayas, particularly the Kanchenjunga, the third highest peak in the world. Known as the 'Queen of the Hills,' Darjeeling offers a charming blend of natural beauty, colonial architecture, and cultural diversity. The city's most iconic attraction is the Darjeeling Himalayan Railway, a UNESCO World Heritage Site that offers a nostalgic train journey through the scenic hills. Visitors can also explore the lush tea gardens, visit the beautiful Buddhist monasteries such as the Ghoom Monastery, and enjoy the vibrant local markets. Darjeeling's pleasant climate, combined with its panoramic vistas and rich heritage, makes it a popular destination for those seeking a serene escape from city life."
    },
    // ... other entries ...
];

export default data;