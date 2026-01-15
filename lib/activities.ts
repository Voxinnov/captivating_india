export type Activity = {
  title: string
  slug: string
  destination: string
  description: string
  longDescription?: string
  image: string
}

export const ACTIVITIES: Activity[] = [
  {
    title: 'Backwater Village Experience',
    slug: 'backwater-village-experience',
    destination: 'Kumarakom',
    description:
      'Glide through narrow canals on a country boat, stopping at small villages to see coir making, toddy tapping and traditional fishing, with a simple home‑cooked lunch.',
    image: '/images/rithudmc-keralabackwaters-kumarakom-2808.jpg',
    longDescription:
      'Glide through the serene backwaters on a traditional country boat and discover villages that can often only be reached by water. Along the way you stop at small communities to see coir rope being made, toddy tapping, lime shell collection and traditional fishing techniques. There is ample time to watch everyday life unfold along the canals and to chat with local families.\n\nA simple home‑cooked lunch in a village home is usually the highlight of the experience, with dishes prepared using fresh local ingredients. This is a gentle, unhurried way to understand the backwater lifestyle beyond the main tourist routes.',
  },
  {
    title: 'Guided Nature Walks & Plantation Trails',
    slug: 'guided-nature-walks-plantation-trails',
    destination: 'Thekkady',
    description:
      'Explore spice plantations, tea estates and forested slopes with an experienced naturalist who explains the flora, birdlife and small wildlife of the region.',
    image: '/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
    longDescription:
      'These gentle walks are led by naturalists who are familiar with the local ecology and birdlife. As you wind through spice gardens, cardamom valleys, tea estates or moist deciduous forest, your guide points out interesting trees, medicinal plants and endemic species.\n\nThe walks can be tailored to your fitness and interests and usually take place in the cool of the morning or late afternoon. They are ideal for travellers who enjoy being outdoors and want to understand more about the landscapes they are travelling through.',
  },
  {
    title: 'Cooking Demonstrations & Market Visits',
    slug: 'cooking-demonstrations-market-visits',
    destination: 'Cochin',
    description:
      'Visit a local market with your host to buy fresh ingredients, followed by a relaxed cooking demonstration and shared meal in a family kitchen or boutique homestay.',
    image: '/images/29-05-2021-12-37-36-Mararikulam---1.jpg',
    longDescription:
      'Your host takes you to a neighbourhood market to introduce the spices, vegetables and staples that are the foundation of regional cuisine. Back in the kitchen you watch and, where you wish, assist as a selection of dishes is prepared step by step.\n\nAlong the way you learn about everyday cooking techniques, family recipes and the cultural significance of certain dishes. The experience concludes with a relaxed shared meal, a chance to ask questions and exchange stories.',
  },
  {
    title: 'Cultural Performances & Storytelling',
    slug: 'cultural-performances-storytelling',
    destination: 'Cochin',
    description:
      'Enjoy traditional dance, music or martial arts demonstrations in an intimate venue, often with a short introduction to the history, costumes and symbolism involved.',
    image: '/images/rithudmc-keralabackwaters-kumarakom-9085.jpg',
    longDescription:
      'Carefully curated performances focus on authenticity rather than spectacle. Before the show begins, artists or a compère explain the origins of the art form, the significance of the costumes and make‑up and the stories portrayed during the performance.\n\nDepending on the venue and season, you may see classical dance, temple music, percussion ensembles or Kalaripayattu, Kerala’s ancient martial art. This is an accessible way to gain insight into the cultural heritage of the region.',
  },
  {
    title: 'Soft Adventure & Day Hikes',
    slug: 'soft-adventure-day-hikes',
    destination: 'Wayanad',
    description:
      'Gentle treks, village‑to‑village walks and viewpoints that suit most fitness levels, accompanied by experienced local guides with a focus on safety and scenery.',
    image: '/images/rithu-dmc-about-3709.jpg',
    longDescription:
      'For travellers who enjoy walking but prefer not to undertake strenuous treks, we offer a selection of soft adventure options. These include village‑to‑village walks, short climbs to panoramic viewpoints and rambles through forest and farmland.\n\nRoutes are selected according to the season and your fitness level, and are always accompanied by experienced local guides. En‑route you may stop at tea stalls, farms and small temples, with plenty of opportunities for photography.',
  },
  {
    title: 'Wildlife Safaris & Boat Cruises',
    slug: 'wildlife-safaris-boat-cruises',
    destination: 'Periyar',
    description:
      'Early‑morning or late‑afternoon safaris in selected reserves, combining jeep drives and, where possible, boat cruises with a strong emphasis on responsible tourism.',
    image: '/images/odishatribaltourkeralatravelagent-8565.jpg',
    longDescription:
      'In and around key wildlife sanctuaries we arrange game drives and boat safaris with reputable operators who respect park regulations. Safaris are usually timed for early morning or late afternoon when animals are most active and the light is at its best.\n\nWhile sightings of big mammals can never be guaranteed, these excursions offer a memorable chance to experience forests, grasslands and lakes at their most atmospheric, accompanied by trained guides and naturalists.',
  },
]

export const ACTIVITY_DESTINATIONS = Array.from(
  new Set(ACTIVITIES.map((activity) => activity.destination)),
).sort()




