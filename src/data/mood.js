const moods = {
  heartbroken: {
    emoji: "💔 (hearbroken)",
    quote: "i know you need to cry 🫂 you'll be okay ",
    embedCode: `
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/1unkUUKwoqA?si=_LVrV1J-ZYQSQhei" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    `,
    bgColor: "#ff4d8d",
  },
  nostalgic: {
    emoji: "📼 (nolstagic)",
    quote: "You only miss the old you, because they are gone.",
    embedCode:`
    <iframe width="560" 
     height="315" 
     src="https://www.youtube.com/embed/PzIXNqpCug0?si=E5fmA3xhCBHwcHsE" 
     title="YouTube video player" 
     frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen>
     </iframe>
    `, 
    bgColor: "#7e57c2",
  },
  rage: {
    emoji: "💥 (rage)",
    quote: "Do you need to scream? Let it out.",
    embedCode:`<iframe width="560"
     height="315" 
     src="https://www.youtube.com/embed/38_WVr5H2FA?si=GuA1OKW6y5B0goiS" 
     title="YouTube video player" 
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen>
    </iframe>`,
    bgColor: "#ff1744",
  },
  dramatic: {
    emoji: "🎭 (dramatic)",
    quote: "Haven't you people ever heard of closing the goddamn door?!",
    embedCode:`
   <iframe width="560"
    height="315" src="https://www.youtube.com/embed/jXNaZv7b_qw?si=5v5iy7SlWZlb2rCE" 
    title="YouTube video player" 
    frameborder="0" allow="accelerometer; 
    autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
   </iframe>
    `,
    bgColor: "#d500f9",
  },
  rebellious: {
    emoji: "🔥 (rebellious)",
    quote: "Do you smell that? (its teen spirit)",
    embedCode:`
    <iframe width="560" 
     height="315" 
     src="https://www.youtube.com/embed/V0hDhjO3AwM?si=MSwMJgdaJ_JcR0lN"
     title="YouTube video player" frameborder="0" allow="accelerometer; 
     autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen>
    </iframe>
    `,
    bgColor: "#ff9100",
  },
  softgirl: {
    emoji: "🍓 (softgirl)",
    quote: "show me how you care",
    embedCode:`
    <iframe width="560" 
    height="315" src="https://www.youtube.com/embed/1bDuNZpIFOw?si=2yNOxl7I2Nu30bNV" 
    title="YouTube video player"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
    </iframe>
    `,
    bgColor: "#ff4081",
  },
  vibing: {
    emoji: "🛼 (vibing)",
    quote: "Your feelings are valid, even the chill ones.",
    embedCode:`
    <iframe width="560" 
     height="315" 
     src="https://www.youtube.com/embed/Zj0tcBe0OBk?si=k-LHKvuQUc2Sns54" 
     title="YouTube video player" 
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen>
    </iframe>
    `,
    bgColor: "#00e676",
  },
  lonely: {
    emoji: "🌙 (lonely)",
    quote: "Nobody notices until you go quiet.",
    embedCode:`
    <iframe width="560" height="315" 
     src="https://www.youtube.com/embed/qooWnw5rEcI?si=_z8W9IYMi3mBWmcC" 
     title="YouTube video player" 
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen>
    </iframe>
    `,
    bgColor: "#2962ff",
  },
  romantic: {
    emoji: "💘 (romantic)",
    quote: "Love me like you used to.",
    embedCode:`
    <iframe width="560" 
     height="315" 
     src="https://www.youtube.com/embed/wE66jV0VFMQ" 
     title="YouTube video player" 
     frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen>
     </iframe>
    `,
    bgColor: "#ff3d00",
  },
  chaotic: {
    emoji: "🌀 (chaotic)",
    quote: "If you love me let me go.",
    embedCode:`
    <iframe width="560" 
     height="315" 
     src="https://www.youtube.com/embed/tGE381tbQa8" 
     title="YouTube video player" 
     frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen>
     </iframe>
    `,
    bgColor: "#ffea00",
  },
  burntout: {
    emoji: "🥲 (burntout)",
    quote: "ive been trying too hard.",
    embedCode:`
    <iframe width="560" 
     height="315" 
     src="https://www.youtube.com/embed/Py_-3di1yx0" 
     title="YouTube video player" 
     frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen>
     </iframe>
    `,
    bgColor: "#8d6e63",
  },
  euphoria: {
    emoji: "🕊️ (euphoria)",
    quote: "You hear that, its the endorphins",
    embedCode:`
    <iframe width="560" 
     height="315" 
     src="https://www.youtube.com/embed/6JCLY0Rlx6Q" 
     title="YouTube video player" 
     frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen>
     </iframe>
    `,
    bgColor: "#00b0ff",
  }
};

export default moods;