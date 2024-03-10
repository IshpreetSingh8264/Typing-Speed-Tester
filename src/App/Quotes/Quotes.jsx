import React, { useEffect, useState } from 'react';

const Quotes = ({ text, disableKeys, setErrorCount }) => {
  const quotes = [
    'The sun was setting behind the mountains, painting the sky in hues of orange and pink. As the day came to a close, a sense of calm settled over the landscape. Birds flew back to their nests, and the rustling of leaves in the gentle breeze could be heard. It was a peaceful evening, perfect for reflection and introspection.',
    'Sarah sat by the window, watching the raindrops trickle down the glass. The sound of rain was soothing, and she found herself lost in thought. Memories from the past flooded her mind, bringing a mix of emotions. She thought about the people she had met, the places she had been, and the experiences she had had. Each memory was like a thread in the tapestry of her life, weaving together to form a beautiful story.',
    'The old bookstore was a treasure trove of knowledge, with shelves stacked high with books of all kinds. The smell of old paper filled the air, and the sound of pages turning was music to the ears. It was a place where time seemed to stand still, and one could get lost in the world of words.',
    'As the train pulled out of the station, Mark waved goodbye to his family. He was embarking on a new adventure, leaving behind the familiar for the unknown. Excitement and anticipation filled his heart as he looked forward to the journey ahead.',
    'The sound of laughter echoed through the park as children played on the swings and slides. Parents sat on benches, watching over their little ones with smiles on their faces. It was a scene of pure joy and innocence, a reminder of the simple pleasures in life.',
    'The waves crashed against the shore, sending sprays of water into the air. The beach was deserted, save for a few seagulls scavenging for food. The salty smell of the sea filled the air, and the sound of the waves was both calming and invigorating.',
    'Anna sat at her desk, staring at the blank page in front of her. She had writer\'s block and couldn\'t seem to find the right words. Frustration mounted as she struggled to put her thoughts into words. She closed her eyes and took a deep breath, hoping to find inspiration.',
    'The city skyline glittered in the evening light, a beacon of civilization amidst the darkness. Cars honked their horns, and people hurried along the sidewalks, lost in their own thoughts. It was a bustling metropolis, alive with energy and possibility.',
    'The forest was alive with the sounds of nature. Birds chirped in the trees, squirrels chattered as they scurried about, and the wind whispered through the leaves. It was a peaceful place, untouched by the chaos of the outside world.',
    'As the plane soared through the sky, Sarah looked out the window at the world below. The patchwork of fields and forests stretched out as far as the eye could see, and she felt a sense of wonder at the vastness of the world.',
    'In the heart of a bustling city, where the rhythm of life beats relentlessly, there lies a hidden oasis of tranquility. Tucked away from the chaos, a small park emerges, offering solace to weary souls. Tall trees stretch their branches towards the sky, forming a canopy of greenery that shields visitors from the harsh sun. The air is filled with the sweet scent of flowers, their vibrant colors a stark contrast to the concrete jungle surrounding them. Birds chirp melodiously, adding to the symphony of nature\'s sounds. Here, time seems to slow down, inviting those who enter to pause, breathe, and find peace amidst the urban frenzy',
    'High above the city, the moon shines brightly, casting a silver glow over the sleeping streets. Stars twinkle in the night sky, like diamonds scattered across a velvet curtain. The world below is still, wrapped in the embrace of night, a momentary respite from the chaos of the day. In this peaceful solitude, dreams take flight, carried on the wings of imagination to distant lands and unknown adventures. The night holds its secrets close, whispering tales of magic and wonder to those who listen with open hearts.',
    'In the heart of a dense forest, a gentle stream winds its way through the trees, its waters clear and cool. Sunlight filters through the canopy above, dappling the forest floor in a mesmerizing dance of light and shadow. Birds sing joyfully, their melodies blending harmoniously with the rustling of leaves in the breeze. The air is filled with the earthy scent of moss and damp soil, a testament to the ancient, untouched beauty of the forest. Here, time seems to stand still, nature\'s rhythms unfolding in a timeless symphony of life and renewal.',
    'On the edge of a cliff, overlooking the vast expanse of the ocean, a solitary figure stands, gazing out at the horizon. The sea stretches out endlessly, its surface shimmering in the sunlight, a vast blue canvas that meets the sky in a seamless blend of colors. The sound of crashing waves fills the air, a constant reminder of the ocean\'s power and majesty. In this moment of quiet contemplation, the world seems to fade away, leaving only the endless expanse of the sea and the infinite possibilities it represents.',
    'Amidst the hustle and bustle of a busy marketplace, a street performer takes center stage, captivating the crowd with their mesmerizing performance. Their hands move with fluid grace, weaving a story without words, a tale of love, loss, and redemption. The music swells, filling the air with its haunting melody, drawing the audience into its embrace. Faces in the crowd are transformed, expressions of wonder and awe replacing the hurried masks of everyday life. In this fleeting moment, barriers dissolve, and strangers become connected, united by the power of music and the shared experience of beauty.',
    'In a quaint village nestled in the hills, life moves at a slower pace, in tune with the rhythm of nature. The streets are lined with charming cottages, their walls adorned with colorful flowers that spill over in a riot of hues. The scent of freshly baked bread wafts through the air, mingling with the earthy aroma of the surrounding fields. Children play in the streets, their laughter a joyful symphony that echoes through the village. Here, time seems to stand still, a peaceful oasis untouched by the chaos of the modern world.',
    'Beneath the canopy of a ancient tree, a group of friends gathers, their faces illuminated by the warm glow of a campfire. The crackling flames cast dancing shadows on their faces, painting them in shades of orange and gold. They share stories and laughter, their voices mingling with the nocturnal chorus of insects and frogs. Above, the stars twinkle in the velvet sky, a breathtaking display of nature\'s beauty. In this moment of camaraderie, the world feels small and intimate, a place where friendships are forged and memories are made that will last a lifetime.',
    'In the heart of a bustling city, a street artist sets up their easel, preparing to capture the vibrant energy of urban life on canvas. Passersby stop to watch, their curiosity piqued by the artist\'s skillful strokes and bold use of color. The cityscape unfolds before them, a tapestry of sights and sounds that is both chaotic and beautiful. The artist works quickly, their hands moving with practiced ease, translating the hustle and bustle of the city into a work of art. In this fleeting moment, the city is transformed, its rough edges softened by the artist\'s vision.',
    'At the foot of a towering mountain, a winding trail beckons, leading upwards into the unknown. The air is crisp and clean, tinged with the scent of pine and earth. The sounds of the forest fill the air, a symphony of bird calls and rustling leaves. As the trail climbs higher, the world below unfolds like a map, revealing the patchwork of fields and forests that stretch out to the horizon. At the summit, the view is breathtaking, a panorama of snow-capped peaks and endless sky. In this moment of awe-inspiring beauty, the mountain reveals its timeless majesty, a reminder of nature\'s power and grandeur.'
  ];


  const [quote, setQuote] = useState('');

  useEffect(() => {
    if (!disableKeys) {
      setQuote(getRandomQuote());
    }
  }, [disableKeys]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const renderQuote = () => {
    if (!quote) {
      return null;
    }

    return quote.split('').map((char, index) => {
      let color;
      if (index < text.length) {
        color = char === text[index] ? 'grey' : 'red';
      } else {
        color = '#a3a0a0';
      }
      return <span key={index} style={{ color }}>{char}</span>;
    });
  };

  useEffect(() => {
    if (!disableKeys) {
      const errors = text.split('').reduce((acc, char, index) => {
        if (char !== quote[index]) {
          return acc + 1;
        }
        return acc;
      }, 0);
      setErrorCount(errors);
    }
  }, [disableKeys, text, quote, setErrorCount]);

  return (
    <div className='text-area quotes'>
      {renderQuote()}
    </div>
  );
};

export default Quotes;