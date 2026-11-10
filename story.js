export const startScene = "alley";

export const scenes = {
  alley: {
    text: "Miso wakes in a moonlit alley. The city smells of rain, and somewhere beyond the rooftops is home.",
    choices: [
      { text: "Follow the warm smell of fish", next: "market" },
      { text: "Climb the fire escape", next: "rooftops" }
    ]
  },
  market: {
    text: "The night market is closing. A fishmonger leaves one silver scrap beside a blue umbrella.",
    choices: [
      { text: "Take the fish and follow the tram bells", next: "station" },
      { text: "Slip beneath the blue umbrella", next: "courtyard" }
    ]
  },
  rooftops: {
    text: "From the rooftops, Miso sees a red lighthouse blinking over the river and hears a familiar lullaby.",
    choices: [
      { text: "Cross the rooftops toward the lullaby", next: "garden" },
      { text: "Chase the red light", next: "river" }
    ]
  },
  station: {
    text: "An empty tram waits at the station. Its windows reflect a tiny paw print in the fog.",
    choices: [
      { text: "Board the tram", next: "home" },
      { text: "Follow the paw prints into the tunnel", next: "tunnel" }
    ]
  },
  courtyard: {
    text: "The umbrella shelters a quiet courtyard. A child has left a ribbon tied to a gate.",
    choices: [
      { text: "Follow the ribbon", next: "garden" },
      { text: "Curl up beside the sleeping dog", next: "badEnd" }
    ]
  },
  garden: {
    text: "A hidden garden glows between apartment blocks. Fireflies gather around a path of cat-shaped stones.",
    choices: [
      { text: "Walk the stone path", next: "home" },
      { text: "Paw at the old fountain", next: "secretEnd" }
    ]
  },
  river: {
    text: "At the river, the red light belongs to a boat drifting away. The current is loud and the bridge is slick.",
    choices: [
      { text: "Cross the bridge carefully", next: "home" },
      { text: "Leap onto the departing boat", next: "badEnd" }
    ]
  },
  tunnel: {
    text: "The tunnel ends at a locked service door, but a breeze carries the scent of Miso's favorite blanket.",
    choices: [
      { text: "Scratch at the service door", next: "secretEnd" },
      { text: "Turn back to the station", next: "station" }
    ]
  },
  home: {
    text: "The tram rolls past Miso's street. A familiar window opens, and warm hands lift Miso into bed.",
    ending: "good"
  },
  badEnd: {
    text: "The night grows cold and the city lights blur. Miso finds a dry box, but home will have to wait.",
    ending: "bad"
  },
  secretEnd: {
    text: "Behind the door is a hidden cat tunnel beneath the city. It leads straight to Miso's own doorstep.",
    ending: "secret"
  }
};
