const text = [
    `India is a country in South Asia, known
     for its rich history, diverse culture, and 
     significant contributions to various fields 
     including science, mathematics, literature, 
     and philosophy.
     Geography: Bordered by Pakistan to the northwest,
     China and Nepal to the north, Bhutan to the northeast
     , and Bangladesh and Myanmar to the east. The Indian 
     Ocean lies to the south.`,

    `Major Cities: New Delhi
     (capital), Mumbai, Kolkata, Chennai,
      Bengaluru, and Hyderabad.
    Landscape: India has a varied landscape
     that includes the Himalayan mountain range
      in the north, the Thar Desert in the west,
       and coastal regions in the south.`,

    `Demographics: Over 1.4 billion people,
     making it the second-most populous country
      in the world. Languages: Hindi and English are
       the official languages. There are 21 other officially
        recognized languages including Bengali, Telugu, Marathi,
         Tamil, and Urdu.`,

    `Religion: Major religions include
     Hinduism, Islam, Christianity, Sikhism
     , Buddhism, and Jainism.
    Culture: India is known for its
     cultural diversity, with a multitude of
      languages, religions, and ethnic groups.`,

    `Cuisine: Renowned for its diverse and
     flavorful cuisine, with regional specialties
      such as North Indian curries, South Indian dosas,
       and Bengali sweets.
    Festivals: Celebrates numerous 
    festivals like Diwali, Holi, Eid,
     Christmas, and Durga Puja.`,

    `Education and Science: Known for its strong 
    emphasis on education, with institutions like 
    the Indian Institutes of Technology (IITs) and Indian
     Institutes of Management (IIMs) gaining international
      recognition.
    Scientific Contributions: Significant
     contributions in fields like space research
      (ISRO), medicine, and information technology.`,

    `Notable Achievements: Space Exploration: 
    Successful missions like Chandrayaan (moon mission)
     and Mangalyaan (Mars mission).
    Arts and Literature: Rich tradition in 
    classical dance, music, and literature, with 
    internationally acclaimed authors like Rabindranath 
    Tagore and Arundhati Roy.`,

    `Cinema: Bollywood, based in Mumbai, is 
    one of the largest centers of film production 
    in the world.
    Geography and Natural Features: India's geography
     ranges from the snow-capped peaks of the Himalayas in
      the north to the tropical beaches of the south. It includes 
      fertile plains such as the Indo-Gangetic Plain, the Thar Desert,
       and dense forests in states like Madhya Pradesh and Kerala.`,

    `Rivers: Major rivers include the Ganges, 
    Yamuna, Brahmaputra, and Indus, which play crucial
     roles in agriculture, religion, and daily life.
    Climate: Varies from tropical in the south to 
    temperate and alpine in the north. India experiences
     monsoons, with the southwest monsoon being the most significant,
      providing the majority of the annual rainfall.`
];

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let value = parseInt(amount.value);
    let random = Math.floor(Math.random() * text.length);

    if (isNaN(value) || value <= 0 || value > text.length) {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item) {
            return `<p class="result">${item}</p>`;
        }).join("");
        result.innerHTML = tempText;
    }
});
