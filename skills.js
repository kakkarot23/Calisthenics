// Calisthenics Skill Database
// Levels 1 to 7, grouped by categories with prerequisites, execution steps, target sets/reps, and muscle focus.

const CALISTHENICS_DB = [
  // ================= LEVEL 1 - ABSOLUTE BEGINNER (Foundation) =================
  // Push Skills
  {
    id: "wall_push_up",
    name: "Wall Push-up",
    level: 1,
    category: "Push",
    subCategory: "Push Skills",
    description: "An introductory push exercise to build foundational arm and chest coordination with minimal load.",
    prerequisites: [],
    steps: [
      "Stand facing a wall, about arm's length away.",
      "Place hands flat on the wall, shoulder-width apart at chest level.",
      "Bend elbows and lean chest toward the wall, keeping your body in a straight line.",
      "Push back to the start position control."
    ],
    tips: ["Tuck your elbows to a 45-degree angle.", "Engage your core to maintain a straight spine."],
    target: { reps: "3 sets of 15-20 reps", hold: "" },
    muscleFocus: ["Chest", "Triceps", "Front Delts"]
  },
  {
    id: "incline_push_up",
    name: "Incline Push-up",
    level: 1,
    category: "Push",
    subCategory: "Push Skills",
    description: "Using an elevated surface (like a bench) to reduce bodyweight percentage while practicing horizontal push mechanics.",
    prerequisites: ["wall_push_up"],
    steps: [
      "Place hands shoulder-width apart on an elevated, stable surface (e.g., bench or table).",
      "Extend feet back so your body forms a straight line from head to heels.",
      "Lower chest to the edge of the surface by bending your arms.",
      "Push away with power until arms are fully extended."
    ],
    tips: ["Keep shoulders down and away from ears.", "Squeeze glutes to stabilize your pelvis."],
    target: { reps: "3 sets of 12-15 reps", hold: "" },
    muscleFocus: ["Chest", "Triceps", "Front Delts"]
  },
  {
    id: "knee_push_up",
    name: "Knee Push-up",
    level: 1,
    category: "Push",
    subCategory: "Push Skills",
    description: "A floor push-up variation that unloads the lower body weight by placing pivot points on the knees.",
    prerequisites: ["incline_push_up"],
    steps: [
      "Start on all fours, hands slightly wider than shoulder-width.",
      "Walk knees back until your torso forms a straight line from head to knees.",
      "Lower chest to the floor by bending elbows backward.",
      "Press through the floor to return to the starting position."
    ],
    tips: ["Don't let your hips sag or push back into a table-top shape.", "Squeeze shoulder blades together on the descent, push them apart at the top."],
    target: { reps: "3 sets of 10-12 reps", hold: "" },
    muscleFocus: ["Chest", "Triceps", "Front Delts"]
  },
  {
    id: "standard_push_up",
    name: "Standard Push-up",
    level: 1,
    category: "Push",
    subCategory: "Push Skills",
    description: "The fundamental horizontal pushing exercise in bodyweight training.",
    prerequisites: ["knee_push_up"],
    steps: [
      "Assume a plank position with hands directly under shoulders.",
      "Lower body as a single unit until chest is an inch from the floor.",
      "Keep elbows tucked close to the body (45 degrees or less).",
      "Push upward, locking out elbows and protracting the shoulder blades at the top."
    ],
    tips: ["Lock your legs and tighten your core throughout the movement.", "Keep head in a neutral position, looking slightly ahead."],
    target: { reps: "3 sets of 10-15 reps", hold: "" },
    muscleFocus: ["Chest", "Triceps", "Front Delts", "Core"]
  },
  {
    id: "diamond_push_up",
    name: "Diamond Push-up",
    level: 1,
    category: "Push",
    subCategory: "Push Skills",
    description: "A push-up variation placing hands close together to shift focus onto the triceps and inner chest.",
    prerequisites: ["standard_push_up"],
    steps: [
      "Setup on the floor with index fingers and thumbs touching to form a diamond shape.",
      "Lower your chest down to touch the back of your hands.",
      "Keep elbows close to your sides.",
      "Push back up to the top, locking out the arms."
    ],
    tips: ["If too difficult, widen your feet to create a more stable base.", "Ensure the diamond hand position is centered under your sternum."],
    target: { reps: "3 sets of 8-12 reps", hold: "" },
    muscleFocus: ["Triceps", "Chest", "Front Delts"]
  },
  {
    id: "wide_push_up",
    name: "Wide Push-up",
    level: 1,
    category: "Push",
    subCategory: "Push Skills",
    description: "A wide-stance push-up focusing heavily on the chest fibers and outer shoulder muscles.",
    prerequisites: ["standard_push_up"],
    steps: [
      "Place hands about 1.5 times shoulder-width apart.",
      "Perform a push-up, lowering chest to the ground.",
      "Press back up, keeping tension in the chest."
    ],
    tips: ["Avoid letting your elbows flare directly out to a 90-degree angle; keep a slight angle down."],
    target: { reps: "3 sets of 10-12 reps", hold: "" },
    muscleFocus: ["Chest", "Shoulders"]
  },

  // Pull Skills
  {
    id: "dead_hang",
    name: "Dead Hang",
    level: 1,
    category: "Pull",
    subCategory: "Pull Skills",
    description: "Passive hanging to build grip strength, shoulder mobility, and spinal decompression.",
    prerequisites: [],
    steps: [
      "Grip the bar with palms facing forward (pronated grip).",
      "Let your feet leave the ground, allowing your body to hang completely loose.",
      "Relax your shoulders and let them touch your ears."
    ],
    tips: ["Focus on breathing deeply and holding grip tight.", "Excellent for active decompression of the spine after loading."],
    target: { reps: "", hold: "3 sets of 30-60s" },
    muscleFocus: ["Forearms", "Grip", "Shoulder Girdle"]
  },
  {
    id: "active_hang",
    name: "Active Hang",
    level: 1,
    category: "Pull",
    subCategory: "Pull Skills",
    description: "Hanging from the bar while engaging the scapular retractors/depressors to build pulling stability.",
    prerequisites: ["dead_hang"],
    steps: [
      "Hang from the bar with a shoulder-width grip.",
      "Without bending your elbows, pull your shoulder blades down and back.",
      "Lift chest slightly and pull your ears away from your shoulders."
    ],
    tips: ["Keep your arms perfectly straight; the movement comes entirely from your shoulder blades.", "Engage your core to prevent excessive arching."],
    target: { reps: "", hold: "3 sets of 15-30s" },
    muscleFocus: ["Lats", "Lower Traps", "Rhomboids", "Grip"]
  },
  {
    id: "australian_row",
    name: "Australian Row",
    level: 1,
    category: "Pull",
    subCategory: "Pull Skills",
    description: "A horizontal pulling exercise using a low bar to build base strength for vertical pulling.",
    prerequisites: ["active_hang"],
    steps: [
      "Lie under a bar set at waist height. Grip the bar with an overhand, shoulder-width grip.",
      "Extend legs forward, resting heels on the floor to form a straight plank.",
      "Pull chest up to touch the bar, keeping your body rigid.",
      "Lower under control."
    ],
    tips: ["Lead the movement with your chest, not your hips.", "Squeeze shoulder blades together at the top of each rep."],
    target: { reps: "3 sets of 8-12 reps", hold: "" },
    muscleFocus: ["Upper Back", "Lats", "Biceps", "Core"]
  },
  {
    id: "negative_pull_up",
    name: "Negative Pull-up",
    level: 1,
    category: "Pull",
    subCategory: "Pull Skills",
    description: "Eccentric training to build strength by slowly lowering yourself from the top of a pull-up.",
    prerequisites: ["australian_row"],
    steps: [
      "Jump or use a box to get your chin over the pull-up bar.",
      "Establish control at the top, squeezing your shoulder blades.",
      "Slowly lower your body over a count of 5-8 seconds.",
      "Maintain control until your arms are fully extended at the bottom."
    ],
    tips: ["Ensure you lower at a consistent speed throughout, do not drop rapidly at the bottom.", "Keep shoulders active at the very bottom."],
    target: { reps: "3 sets of 4-6 reps", hold: "" },
    muscleFocus: ["Lats", "Biceps", "Upper Back", "Grip"]
  },
  {
    id: "assisted_chin_up",
    name: "Assisted Chin-up",
    level: 1,
    category: "Pull",
    subCategory: "Pull Skills",
    description: "Underhand pull-up variation using a band or leg assist to build biceps and lat strength.",
    prerequisites: ["australian_row"],
    steps: [
      "Hang from the bar with palms facing you (supinated grip).",
      "Rest feet on a box or band to remove a percentage of weight.",
      "Pull chin over the bar, keeping elbows close to the body.",
      "Lower down slowly to a dead hang."
    ],
    tips: ["A supinated grip makes it easier to engage biceps, providing a bridge to raw chin-ups."],
    target: { reps: "3 sets of 6-8 reps", hold: "" },
    muscleFocus: ["Biceps", "Lats", "Forearms"]
  },
  {
    id: "band_assisted_pull_up",
    name: "Band Assisted Pull-up",
    level: 1,
    category: "Pull",
    subCategory: "Pull Skills",
    description: "Overhand pull-up using resistance bands for adjustable lower-body assistance.",
    prerequisites: ["negative_pull_up"],
    steps: [
      "Loop a resistance band over the bar and place one foot or knee into the loop.",
      "Grip the bar with an overhand grip, arms straight.",
      "Pull yourself up until your chin clears the bar.",
      "Return slowly, resisting the snap-back of the band."
    ],
    tips: ["Use a thicker band initially and gradually decrease band thickness as you get stronger."],
    target: { reps: "3 sets of 6-10 reps", hold: "" },
    muscleFocus: ["Lats", "Rhomboids", "Biceps", "Grip"]
  },

  // Legs
  {
    id: "bodyweight_squat",
    name: "Bodyweight Squat",
    level: 1,
    category: "Legs",
    subCategory: "Legs",
    description: "The fundamental lower-body movement pattern to build quad, glute, and hip strength.",
    prerequisites: [],
    steps: [
      "Stand with feet shoulder-width apart, toes pointing slightly outward.",
      "Initiate the squat by pushing hips back, bending knees as if sitting in a chair.",
      "Lower until thighs are at least parallel to the floor, keeping chest up.",
      "Drive through the heels to stand back up."
    ],
    tips: ["Keep your knees tracked over your toes; do not let them cave inward.", "Keep heels flat on the floor."],
    target: { reps: "3 sets of 15-20 reps", hold: "" },
    muscleFocus: ["Quads", "Glutes", "Hamstrings"]
  },
  {
    id: "box_squat",
    name: "Box Squat",
    level: 1,
    category: "Legs",
    subCategory: "Legs",
    description: "A squat variation using a box or chair to set a standard depth and build confidence for squatting.",
    prerequisites: [],
    steps: [
      "Stand in front of a sturdy box or chair facing away from it.",
      "Squat down until your glutes lightly touch the box.",
      "Pause for a split second without fully relaxing your weight.",
      "Stand back up using quad and glute power."
    ],
    tips: ["Focus on sitting back and using your hips rather than just bending knees forward."],
    target: { reps: "3 sets of 12-15 reps", hold: "" },
    muscleFocus: ["Quads", "Glutes", "Hip Flexors"]
  },
  {
    id: "walking_lunges",
    name: "Walking Lunges",
    level: 1,
    category: "Legs",
    subCategory: "Legs",
    description: "Unilateral leg movement that builds balance, stability, and coordinates glute/quad strength.",
    prerequisites: ["bodyweight_squat"],
    steps: [
      "Step forward with your right foot.",
      "Lower your hips until your back knee is just above the floor and front thigh is parallel to the ground.",
      "Push off your back foot and step forward to stand up or directly transition into the next stride."
    ],
    tips: ["Keep your torso vertical. Avoid leaning excessively forward.", "Ensure front knee doesn't push way past your toes."],
    target: { reps: "3 sets of 10 reps per leg", hold: "" },
    muscleFocus: ["Quads", "Glutes", "Hamstrings", "Core"]
  },
  {
    id: "reverse_lunges",
    name: "Reverse Lunges",
    level: 1,
    category: "Legs",
    subCategory: "Legs",
    description: "A knee-friendly lunge variant where you step backward, reducing pressure on the kneecaps.",
    prerequisites: ["bodyweight_squat"],
    steps: [
      "Stand tall, then step backward with one leg.",
      "Lower your hips until back knee is close to the floor.",
      "Push through your front heel to return to the starting standing posture."
    ],
    tips: ["Keeps knee alignment easier to control than forward lunges."],
    target: { reps: "3 sets of 10 reps per leg", hold: "" },
    muscleFocus: ["Glutes", "Hamstrings", "Quads"]
  },
  {
    id: "step_ups",
    name: "Step Ups",
    level: 1,
    category: "Legs",
    subCategory: "Legs",
    description: "Step onto an elevated surface to target single-leg drive and balance.",
    prerequisites: ["bodyweight_squat"],
    steps: [
      "Place one foot flat on a sturdy box or bench.",
      "Drive through that foot to lift your body onto the box, standing tall.",
      "Step down slowly with the trailing leg."
    ],
    tips: ["Do not push off the floor with your trailing foot; let the elevated leg do all the pulling and pressing."],
    target: { reps: "3 sets of 10 reps per leg", hold: "" },
    muscleFocus: ["Quads", "Glutes", "Calves"]
  },
  {
    id: "calf_raises",
    name: "Calf Raises",
    level: 1,
    category: "Legs",
    subCategory: "Legs",
    description: "Isolation movement to strengthen the calves (gastrocnemius and soleus) and ankle joints.",
    prerequisites: [],
    steps: [
      "Stand on a step or flat ground, heels hanging off if elevated.",
      "Raise up onto the balls of your feet, squeezing calves at the top.",
      "Lower heels down below the step level for a deep stretch."
    ],
    tips: ["Pause at both the top and bottom of the movement to eliminate momentum."],
    target: { reps: "3 sets of 15-20 reps", hold: "" },
    muscleFocus: ["Calves", "Ankles"]
  },
  {
    id: "glute_bridge",
    name: "Glute Bridge",
    level: 1,
    category: "Legs",
    subCategory: "Legs",
    description: "Floor exercise targeting the posterior chain, particularly glutes and hamstrings.",
    prerequisites: [],
    steps: [
      "Lie on your back, knees bent, feet flat on the floor hip-width apart.",
      "Drive through heels to lift hips toward the ceiling.",
      "Squeeze glutes at the top, forming a straight line from knees to shoulders.",
      "Lower down slowly."
    ],
    tips: ["Avoid hyperextending your lower back; keep your ribs tucked and hips rotated forward."],
    target: { reps: "3 sets of 12-15 reps", hold: "" },
    muscleFocus: ["Glutes", "Hamstrings", "Lower Back"]
  },

  // Core
  {
    id: "plank",
    name: "Plank",
    level: 1,
    category: "Core",
    subCategory: "Core",
    description: "Isometric core holds that build anti-extension abdominal strength and shoulder endurance.",
    prerequisites: [],
    steps: [
      "Place forearms on the floor, elbows aligned under shoulders.",
      "Extend legs back, feet together, resting on toes.",
      "Keep body in a perfectly straight line, drawing belly button to spine.",
      "Actively press elbows into the floor, pushing the upper back slightly upward."
    ],
    tips: ["Never let your lower back sag. Squeeze your glutes and quads tight.", "Keep head relaxed, looking at your hands."],
    target: { reps: "", hold: "3 sets of 30-60s" },
    muscleFocus: ["Abs", "Transverse Abdominals", "Shoulders", "Glutes"]
  },
  {
    id: "side_plank",
    name: "Side Plank",
    level: 1,
    category: "Core",
    subCategory: "Core",
    description: "Lateral core stabilization focusing on the oblique muscles and hip abductors.",
    prerequisites: ["plank"],
    steps: [
      "Lie on your side, supporting upper body on one forearm.",
      "Stack feet on top of each other and lift hips off the floor.",
      "Keep body in a straight line, hand on hip or pointing up."
    ],
    tips: ["Keep your hips high; do not let them drop toward the floor.", "Engage your shoulder blade to protect the shoulder joint."],
    target: { reps: "", hold: "3 sets of 20-40s per side" },
    muscleFocus: ["Obliques", "Abs", "Glute Medius"]
  },
  {
    id: "hollow_hold",
    name: "Hollow Hold",
    level: 1,
    category: "Core",
    subCategory: "Core",
    description: "The absolute foundational gymnastics body shape for all advanced holds (L-Sit, Handstand, Planche).",
    prerequisites: ["plank"],
    steps: [
      "Lie on your back, legs straight, arms extended overhead.",
      "Press your lower back flat into the ground, eliminating any gap.",
      "Lift legs, shoulders, and arms off the floor, keeping lower back glued to the floor.",
      "Point toes and squeeze legs together."
    ],
    tips: ["CRITICAL: If your lower back arches off the floor, immediately scale by raising legs higher or bending knees."],
    target: { reps: "", hold: "3 sets of 20-30s" },
    muscleFocus: ["Abs", "Transverse Abdominals", "Hip Flexors"]
  },
  {
    id: "arch_hold",
    name: "Arch Hold (Superman)",
    level: 1,
    category: "Core",
    subCategory: "Core",
    description: "Isometric posterior chain hold, the opposite of the hollow hold, building lower back and glute endurance.",
    prerequisites: [],
    steps: [
      "Lie face down on the floor, arms extended overhead, legs straight.",
      "Lift chest, arms, knees, and feet as high as possible off the floor.",
      "Squeeze glutes, hamstrings, and upper back muscles to hold the shape."
    ],
    tips: ["Keep your gaze down at the floor to avoid strain on your neck.", "Keep arms and legs fully straight."],
    target: { reps: "", hold: "3 sets of 20-30s" },
    muscleFocus: ["Lower Back", "Glutes", "Hamstrings", "Upper Back"]
  },
  {
    id: "dead_bug",
    name: "Dead Bug",
    level: 1,
    category: "Core",
    subCategory: "Core",
    description: "Superb dynamic core coordination exercise that maintains a flat spine during limb movement.",
    prerequisites: [],
    steps: [
      "Lie flat on back, arms pointing to ceiling, hips and knees bent to 90 degrees.",
      "Press lower back into the floor.",
      "Slowly extend right arm overhead and left leg straight out, hovering just above floor.",
      "Return to start and repeat with opposite limbs."
    ],
    tips: ["Slow and controlled wins here. Keep lower back pinned down throughout."],
    target: { reps: "3 sets of 10 reps per side", hold: "" },
    muscleFocus: ["Abs", "Obliques", "Hip Flexors"]
  },
  {
    id: "bird_dog",
    name: "Bird Dog",
    level: 1,
    category: "Core",
    subCategory: "Core",
    description: "Quadruped core stabilizer focusing on spine alignment and rear glute-shoulder cross connectivity.",
    prerequisites: [],
    steps: [
      "Start on hands and knees (quadruped position).",
      "Reach one arm forward while driving the opposite leg straight backward.",
      "Keep hips square to the ground and spine neutral.",
      "Return to hands and knees and alternate sides."
    ],
    tips: ["Do not arch the lower back at the top; kick back, not up."],
    target: { reps: "3 sets of 10 reps per side", hold: "" },
    muscleFocus: ["Glutes", "Lower Back", "Shoulders"]
  },
  {
    id: "superman_hold",
    name: "Superman Hold",
    level: 1,
    category: "Core",
    subCategory: "Core",
    description: "A variation of the arch hold focusing on holding the dynamic flight shape.",
    prerequisites: ["arch_hold"],
    steps: [
      "Lie on stomach, raise arms and legs off the ground simultaneously.",
      "Maintain maximum lift throughout the set duration."
    ],
    tips: ["Focus on breathing steadily while keeping the core loaded."],
    target: { reps: "", hold: "3 sets of 20-30s" },
    muscleFocus: ["Lower Back", "Glutes", "Rhomboids"]
  },

  // Mobility
  {
    id: "shoulder_mobility",
    name: "Shoulder Mobility Drill",
    level: 1,
    category: "Mobility",
    subCategory: "Mobility",
    description: "Active range of motion work (e.g., band dislocates) to prepare the shoulders for heavy loading.",
    prerequisites: [],
    steps: [
      "Hold a stick or resistance band with a wide grip in front of your thighs.",
      "Keeping arms straight, lift the band overhead and bring it all the way to your lower back.",
      "Reverse the motion back to the front under control."
    ],
    tips: ["Widen your grip if your elbows bend; narrow it as shoulder mobility improves."],
    target: { reps: "3 sets of 10-12 reps", hold: "" },
    muscleFocus: ["Shoulder Rotators", "Chest", "Upper Back"]
  },
  {
    id: "wrist_mobility",
    name: "Wrist Mobility Routine",
    level: 1,
    category: "Mobility",
    subCategory: "Mobility",
    description: "Essential conditioning for wrists to withstand handstands, pushups, and planche leans.",
    prerequisites: [],
    steps: [
      "Get on hands and knees, fingers pointing forward.",
      "Lean forward gently, stretching the wrists, then rock back.",
      "Turn hands around so fingers point toward knees, rock back slowly.",
      "Perform circular movements on palms."
    ],
    tips: ["Do not rush these stretches; push only to a mild stretching sensation, never sharp pain."],
    target: { reps: "2-3 minutes total", hold: "" },
    muscleFocus: ["Wrists", "Forearms"]
  },
  {
    id: "hip_mobility",
    name: "Hip Mobility Flow",
    level: 1,
    category: "Mobility",
    subCategory: "Mobility",
    description: "Dynamic stretch patterns (like the 90/90 stretch) to unlock tight hip flexors and rotators.",
    prerequisites: [],
    steps: [
      "Sit on the floor, knees bent to 90 degrees, feet flat and wide.",
      "Drop both knees to one side so they touch the floor in 90-degree angles.",
      "Rotate hips over, switching knee positions to the opposite side."
    ],
    tips: ["Keep your torso as upright as possible without relying entirely on your hands for support."],
    target: { reps: "3 sets of 10 switches", hold: "" },
    muscleFocus: ["Hips", "Glutes"]
  },
  {
    id: "jefferson_curl",
    name: "Jefferson Curl",
    level: 1,
    category: "Mobility",
    subCategory: "Mobility",
    description: "Segmental spinal flexion under light loading to build hamstring and back flexibility.",
    prerequisites: [],
    steps: [
      "Stand on a box or bench holding a very light dumbbell or kettlebell.",
      "Tuck chin to chest, then slowly roll down vertebra by vertebra.",
      "Let weights hang low, letting knees stay straight but not locked.",
      "Slowly roll back up, starting from lower spine, head coming up last."
    ],
    tips: ["Start with ultra-light weight (or bodyweight only) to safely condition your connective tissues."],
    target: { reps: "3 sets of 6-8 reps", hold: "" },
    muscleFocus: ["Hamstrings", "Lower Back", "Spine"]
  },
  {
    id: "deep_squat_hold",
    name: "Deep Squat Hold",
    level: 1,
    category: "Mobility",
    subCategory: "Mobility",
    description: "Resting in a deep squat position to restore natural hip, ankle, and lower back mechanics.",
    prerequisites: ["bodyweight_squat"],
    steps: [
      "Drop into a deep squat, keeping heels flat on the floor.",
      "Let your butt hang low, elbows pushing knees slightly outwards.",
      "Keep chest up, maintaining a relatively straight posture."
    ],
    tips: ["If heels lift, place a book or plate under them or hold onto a pole for counterweight."],
    target: { reps: "", hold: "3 sets of 45-60s" },
    muscleFocus: ["Ankles", "Hips", "Achilles Tendon"]
  },
  {
    id: "pancake_stretch",
    name: "Pancake Stretch",
    level: 1,
    category: "Mobility",
    subCategory: "Mobility",
    description: "Seated straddle stretch aiming to lean forward, unlocking hamstrings and adductors.",
    prerequisites: [],
    steps: [
      "Sit on floor, legs spread wide in a straddle.",
      "Keeping spine straight, hinge forward from the hips.",
      "Walk hands forward, lowering chest toward the floor.",
      "Hold the maximum stretch."
    ],
    tips: ["Do not hunch your upper back; tilt the pelvis forward to initiate the stretch."],
    target: { reps: "", hold: "3 sets of 30-45s" },
    muscleFocus: ["Adductors", "Hamstrings", "Groin"]
  },

  // ================= LEVEL 2 - BEGINNER =================
  // Push
  {
    id: "decline_push_up",
    name: "Decline Push-up",
    level: 2,
    category: "Push",
    subCategory: "Push",
    description: "Push-up variation with feet elevated, shifting the focus to the upper chest and shoulders.",
    prerequisites: ["standard_push_up"],
    steps: [
      "Place feet on a box or bench and hands flat on the floor.",
      "Lower chest to the ground under control.",
      "Press back up, keeping the body in a solid line."
    ],
    tips: ["Do not let your head sag down; look forward slightly to ensure a neutral neck."],
    target: { reps: "3 sets of 10-12 reps", hold: "" },
    muscleFocus: ["Upper Chest", "Front Delts", "Triceps"]
  },
  {
    id: "pike_push_up",
    name: "Pike Push-up",
    level: 2,
    category: "Push",
    subCategory: "Push",
    description: "A vertical pressing precursor that shifts push-up load heavily onto the shoulders.",
    prerequisites: ["standard_push_up"],
    steps: [
      "Setup in a push-up position, then walk feet forward, lifting hips into an inverted 'V' shape (pike).",
      "Look at your feet. Lower your forehead forward of your hands to form a tripod shape with your hands.",
      "Press through the shoulders to push back up and return to the starting pike position."
    ],
    tips: ["Do not lower your head straight between your hands; lower forward to form a tripod.", "Keep legs straight if hamstring flexibility allows."],
    target: { reps: "3 sets of 8-10 reps", hold: "" },
    muscleFocus: ["Shoulders", "Triceps", "Traps"]
  },
  {
    id: "hindu_push_up",
    name: "Hindu Push-up",
    level: 2,
    category: "Push",
    subCategory: "Push",
    description: "A dynamic push-up flow building shoulder power, spine mobility, and core control.",
    prerequisites: ["pike_push_up"],
    steps: [
      "Start in a downward-facing dog or high pike position.",
      "Bend elbows and swoop chest down close to the floor in a sweeping motion.",
      "Push chest up toward the ceiling into an upward-facing dog stance.",
      "Push hips back up directly to return to the pike position."
    ],
    tips: ["Flow smoothly from pike, to swoop, to cobra, to pike."],
    target: { reps: "3 sets of 8-10 reps", hold: "" },
    muscleFocus: ["Shoulders", "Triceps", "Chest", "Lower Back"]
  },
  {
    id: "pseudo_planche_push_up",
    name: "Pseudo Planche Push-up",
    level: 2,
    category: "Push",
    subCategory: "Push",
    description: "Hands turned outwards, leaning forward to place leverage focus on anterior deltoids, mimicking planche pushups.",
    prerequisites: ["standard_push_up", "wrist_mobility"],
    steps: [
      "Place hands on floor, fingers pointing out or slightly backward.",
      "Lean forward so your shoulders are ahead of your hands, loading the front delts.",
      "Maintain this forward lean as you lower your chest to the floor.",
      "Press back up, maintaining the lean (protract shoulders at the top)."
    ],
    tips: ["A protraction (hollowing the back) at the top of the rep is critical for planche conditioning."],
    target: { reps: "3 sets of 6-8 reps", hold: "" },
    muscleFocus: ["Front Delts", "Chest", "Wrists", "Core"]
  },
  {
    id: "bench_dips",
    name: "Bench Dips",
    level: 2,
    category: "Push",
    subCategory: "Push",
    description: "Vertical pressing targeting triceps, using a bench behind your body.",
    prerequisites: ["standard_push_up"],
    steps: [
      "Sit on edge of bench, hands gripping the edge beside your hips.",
      "Slide glutes forward off the bench, legs extended.",
      "Bend elbows to lower your hips towards the floor.",
      "Press through palms to return to full extension."
    ],
    tips: ["Keep your back close to the bench to avoid shoulder strain."],
    target: { reps: "3 sets of 12-15 reps", hold: "" },
    muscleFocus: ["Triceps", "Front Delts"]
  },
  {
    id: "parallel_bar_dips",
    name: "Parallel Bar Dips",
    level: 2,
    category: "Push",
    subCategory: "Push",
    description: "Excellent compound exercise supporting your full weight, building lower chest and tricep power.",
    prerequisites: ["bench_dips", "standard_push_up"],
    steps: [
      "Jump up to support yourself on parallel bars, arms locked out.",
      "Bend elbows, lowering your body until shoulders are below elbows.",
      "Lean slightly forward to engage the chest.",
      "Press back up powerfully, locking out the arms at the top."
    ],
    tips: ["Maintain active shoulders: push down away from ears. Do not collapse at the bottom."],
    target: { reps: "3 sets of 6-10 reps", hold: "" },
    muscleFocus: ["Chest", "Triceps", "Front Delts"]
  },

  // Pull
  {
    id: "chin_up",
    name: "Chin-up",
    level: 2,
    category: "Pull",
    subCategory: "Pull",
    description: "Underhand pullup providing excellent biceps and lat engagement.",
    prerequisites: ["assisted_chin_up", "band_assisted_pull_up"],
    steps: [
      "Hang from the bar with an underhand grip (palms facing you).",
      "Pull chest to the bar, keeping elbows close to your torso.",
      "Clear chin over the bar, then lower with control."
    ],
    tips: ["Avoid swinging; pull with pure arm and back power."],
    target: { reps: "3 sets of 5-8 reps", hold: "" },
    muscleFocus: ["Biceps", "Lats", "Forearms"]
  },
  {
    id: "pull_up",
    name: "Pull-up",
    level: 2,
    category: "Pull",
    subCategory: "Pull",
    description: "The absolute benchmark pull exercise targeting the latissimus dorsi and upper back.",
    prerequisites: ["band_assisted_pull_up"],
    steps: [
      "Hang with an overhand grip (palms facing away), hands slightly wider than shoulder-width.",
      "Depress and retract shoulders (active hang initial motion).",
      "Pull elbows down toward your back pocket, lifting chest to the bar.",
      "Lower with complete control to a full dead hang."
    ],
    tips: ["Perform full range of motion: chin over the bar at the top, elbows locked at the bottom."],
    target: { reps: "3 sets of 5-8 reps", hold: "" },
    muscleFocus: ["Lats", "Upper Back", "Biceps", "Grip"]
  },
  {
    id: "neutral_grip_pull_up",
    name: "Neutral Grip Pull-up",
    level: 2,
    category: "Pull",
    subCategory: "Pull",
    description: "Pull-up performed with palms facing each other, reducing shoulder rotation strain.",
    prerequisites: ["pull_up"],
    steps: [
      "Grip parallel handles on a pull-up rig (palms face each other).",
      "Pull chest up to handle height.",
      "Lower slowly to a dead hang."
    ],
    tips: ["A great variation if overhand pull-ups cause wrist or elbow irritation."],
    target: { reps: "3 sets of 6-8 reps", hold: "" },
    muscleFocus: ["Brachialis", "Lats", "Upper Back"]
  },
  {
    id: "scapular_pull_up",
    name: "Scapular Pull-up",
    level: 2,
    category: "Pull",
    subCategory: "Pull",
    description: "Isolated scapular depression targeting lower trap control and active hang strength.",
    prerequisites: ["active_hang"],
    steps: [
      "Hang from a bar, arms straight.",
      "Using only shoulder blade movement, shrug your body upward.",
      "Pause for a second at the top, then lower passively."
    ],
    tips: ["Focus on squeezing the lower scapular muscles."],
    target: { reps: "3 sets of 10-12 reps", hold: "" },
    muscleFocus: ["Lower Traps", "Rhomboids"]
  },
  {
    id: "archer_row",
    name: "Archer Row",
    level: 2,
    category: "Pull",
    subCategory: "Pull",
    description: "Unilateral row progression where one arm pulls while the other remains straight as a guide.",
    prerequisites: ["australian_row"],
    steps: [
      "Hold the low bar with a wide grip, body in an incline row position.",
      "Pull body up toward one hand, extending the opposite arm straight out to the side.",
      "Lower down, and repeat on the alternate side."
    ],
    tips: ["The straight arm should only act as a stabilizer; pull with the bending arm."],
    target: { reps: "3 sets of 6-8 reps per side", hold: "" },
    muscleFocus: ["Upper Back", "Biceps", "Single-arm Pull"]
  },

  // Legs
  {
    id: "bulgarian_split_squat",
    name: "Bulgarian Split Squat",
    level: 2,
    category: "Legs",
    subCategory: "Legs",
    description: "Single-leg squat with rear foot elevated, placing intense focus on front leg quads and glutes.",
    prerequisites: ["walking_lunges"],
    steps: [
      "Place one foot flat behind you on a bench or chair.",
      "Hop front foot forward so you can sink down into a deep squat.",
      "Lower until rear knee is close to floor, front thigh parallel.",
      "Drive back up using front leg heel."
    ],
    tips: ["Keep front knee aligned with toes, avoiding inward collapse."],
    target: { reps: "3 sets of 8-12 reps per leg", hold: "" },
    muscleFocus: ["Quads", "Glutes", "Hamstrings"]
  },
  {
    id: "shrimp_squat_progression",
    name: "Shrimp Squat Progression",
    level: 2,
    category: "Legs",
    subCategory: "Legs",
    description: "Unilateral squat holding rear foot off floor, preparing knees/quads for raw shrimp squats.",
    prerequisites: ["reverse_lunges"],
    steps: [
      "Stand on one leg, bending the free leg behind you.",
      "Reach back and grab the ankle of the free leg with one hand.",
      "Squat down until the free knee lightly taps the floor.",
      "Drive back up to a standing position."
    ],
    tips: ["Start by putting a pad or book under your back knee to reduce the depth initially."],
    target: { reps: "3 sets of 5-8 reps per leg", hold: "" },
    muscleFocus: ["Quads", "Glutes", "Balance"]
  },
  {
    id: "assisted_pistol_squat",
    name: "Assisted Pistol Squat",
    level: 2,
    category: "Legs",
    subCategory: "Legs",
    description: "Single-leg squat holding a strap, pole, or TRX band for stability and depth assistance.",
    prerequisites: ["bodyweight_squat"],
    steps: [
      "Stand on one leg, extending the other leg straight forward.",
      "Grip a stable support (like a doorframe or pole).",
      "Squat down on the working leg while keeping the support grip light.",
      "Push back up to standing."
    ],
    tips: ["Pull with your hands only when you are stuck in the bottom (hole) of the squat."],
    target: { reps: "3 sets of 6-8 reps per leg", hold: "" },
    muscleFocus: ["Quads", "Glutes", "Ankle Mobility"]
  },
  {
    id: "jump_squat",
    name: "Jump Squat",
    level: 2,
    category: "Legs",
    subCategory: "Legs",
    description: "Explosive squat pattern to build power and speed in the lower body.",
    prerequisites: ["bodyweight_squat"],
    steps: [
      "Perform a normal squat to parallel.",
      "Drive up explosively, launching your feet off the floor.",
      "Land softly, immediately absorbing impact by sinking into the next squat."
    ],
    tips: ["Ensure soft landings: land on balls of feet first and bend knees to absorb shock."],
    target: { reps: "3 sets of 10-12 reps", hold: "" },
    muscleFocus: ["Quads", "Calves", "Glutes", "Explosiveness"]
  },

  // Core
  {
    id: "hanging_knee_raise",
    name: "Hanging Knee Raise",
    level: 2,
    category: "Core",
    subCategory: "Core",
    description: "Hanging from a bar while raising knees to chest, targeting lower abs and grip.",
    prerequisites: ["active_hang", "hollow_hold"],
    steps: [
      "Hang from the bar with an active shoulder position.",
      "Keeping torso still, lift knees up towards your chest.",
      "Control the descent to avoid swinging."
    ],
    tips: ["Do not swing. Initiate the pull from the core, not momentum."],
    target: { reps: "3 sets of 8-12 reps", hold: "" },
    muscleFocus: ["Abs", "Hip Flexors", "Grip"]
  },
  {
    id: "reverse_crunch",
    name: "Reverse Crunch",
    level: 2,
    category: "Core",
    subCategory: "Core",
    description: "Floor compression exercise, rolling the pelvis toward the ribs to target the rectus abdominis.",
    prerequisites: ["plank"],
    steps: [
      "Lie on your back, knees bent to 90 degrees.",
      "Press hands to floor, then pull knees toward chest, lifting tailbone off floor.",
      "Slowly lower hips back to start position."
    ],
    tips: ["Focus on rolling the spine off the floor rather than just throwing legs."],
    target: { reps: "3 sets of 12-15 reps", hold: "" },
    muscleFocus: ["Lower Abs"]
  },
  {
    id: "hanging_leg_raise",
    name: "Hanging Leg Raise",
    level: 2,
    category: "Core",
    subCategory: "Core",
    description: "Hanging from a bar and raising fully straight legs to hip height.",
    prerequisites: ["hanging_knee_raise"],
    steps: [
      "Hang from the bar with straight arms.",
      "Keeping legs straight and squeezed together, lift them to a 90-degree angle.",
      "Lower legs slowly back down, maintaining tension."
    ],
    tips: ["Actively push down on the bar to engage lats and stabilize your torso."],
    target: { reps: "3 sets of 6-8 reps", hold: "" },
    muscleFocus: ["Abs", "Hip Flexors", "Lats", "Grip"]
  },
  {
    id: "dragon_flag_progression",
    name: "Dragon Flag Progression",
    level: 2,
    category: "Core",
    subCategory: "Core",
    description: "Bruce Lee's signature core movement, performed here with tucked knees to reduce the lever length.",
    prerequisites: ["hollow_hold"],
    steps: [
      "Lie on a bench or floor, gripping a solid support behind your head.",
      "Tuck your knees to your chest, then raise your hips and lower back off the bench.",
      "In this tucked position, slowly lower your torso down until only your shoulders touch the bench.",
      "Pull back up using core and arm bracing."
    ],
    tips: ["Do not rest your weight on your neck; load should sit on your upper shoulders."],
    target: { reps: "3 sets of 5-8 reps", hold: "" },
    muscleFocus: ["Core", "Abs", "Lats", "Triceps"]
  },

  // First Skills
  {
    id: "frog_stand",
    name: "Frog Stand",
    level: 2,
    category: "Balance",
    subCategory: "First Skills",
    description: "The classic hand balance entry skill. Balancing your knees on your elbows to condition wrists and find balance.",
    prerequisites: ["standard_push_up", "wrist_mobility"],
    steps: [
      "Squat down and place hands flat on the floor, shoulder-width apart.",
      "Place knees against the outside or top of your bent elbows.",
      "Lean forward, shifting bodyweight onto hands until feet lift off the floor.",
      "Find balance, keeping elbows bent."
    ],
    tips: ["Grip the floor with your fingers (like claws) to adjust your balance dynamically."],
    target: { reps: "", hold: "3 sets of 20-30s" },
    muscleFocus: ["Wrists", "Forearms", "Shoulders", "Balance"]
  },
  {
    id: "crow_pose",
    name: "Crow Pose",
    level: 2,
    category: "Balance",
    subCategory: "First Skills",
    description: "Yoga variation of frog stand with knees resting higher on the triceps, keeping arms straighter.",
    prerequisites: ["frog_stand"],
    steps: [
      "Place hands on the floor. Raise hips up high.",
      "Tuck knees high up on your triceps (near armpits).",
      "Lean forward, lifting feet off the floor, striving to straighten elbows."
    ],
    tips: ["Look forward, not down; looking down will make you tip forward onto your head."],
    target: { reps: "", hold: "3 sets of 15-20s" },
    muscleFocus: ["Shoulders", "Wrists", "Core", "Balance"]
  },
  {
    id: "l_sit_tucked",
    name: "L-Sit (Tucked)",
    level: 2,
    category: "Core",
    subCategory: "First Skills",
    description: "Holding your body weight on your hands while tucking knees, starting abdominal compression.",
    prerequisites: ["hanging_knee_raise", "parallel_bar_dips"],
    steps: [
      "Sit between parallettes, parallel bars, or on the floor.",
      "Depress shoulders down (push the floor away) and lock your elbows straight.",
      "Tuck your knees to your chest and lift your butt and feet off the floor.",
      "Hold this tucked suspension."
    ],
    tips: ["Focus on depressing shoulders down; don't let ears fall into your shoulders."],
    target: { reps: "", hold: "3 sets of 15-20s" },
    muscleFocus: ["Lower Abs", "Hip Flexors", "Triceps", "Lats"]
  },
  {
    id: "tuck_support_hold",
    name: "Tuck Support Hold",
    level: 2,
    category: "Core",
    subCategory: "First Skills",
    description: "Supporting your bodyweight on parallel bars with active scapular depression.",
    prerequisites: ["parallel_bar_dips"],
    steps: [
      "Jump onto parallel bars, locking arms.",
      "Tuck knees up slightly and hold the support position, shoulders depressed down away from ears."
    ],
    tips: ["A simple but essential conditioning drill for L-sits and dips."],
    target: { reps: "", hold: "3 sets of 30-40s" },
    muscleFocus: ["Lats", "Rhomboids", "Triceps"]
  },

  // ================= LEVEL 3 - INTERMEDIATE =================
  // Hand Balance
  {
    id: "wall_handstand",
    name: "Wall Handstand",
    level: 3,
    category: "Balance",
    subCategory: "Hand Balance",
    description: "Developing vertical shoulder stacking by kicking up against a wall.",
    prerequisites: ["pike_push_up", "wrist_mobility"],
    steps: [
      "Place hands about 6-12 inches from a wall.",
      "Kick up one leg at a time until your heels rest against the wall.",
      "Actively push the floor away, locking out elbows and shoulders.",
      "Keep body tight, squeezing glutes."
    ],
    tips: ["Focus on pushing your shoulders 'up' to the ceiling to lock your skeleton in place."],
    target: { reps: "", hold: "3 sets of 30-45s" },
    muscleFocus: ["Shoulders", "Triceps", "Wrists"]
  },
  {
    id: "chest_to_wall_handstand",
    name: "Chest-to-Wall Handstand",
    level: 3,
    category: "Balance",
    subCategory: "Hand Balance",
    description: "Walking up the wall backward to align hips and shoulders without lumbar hyperextension.",
    prerequisites: ["wall_handstand"],
    steps: [
      "Start in a plank with feet touching the wall.",
      "Walk feet up the wall while walking hands closer to the wall.",
      "Get hands as close to the wall as possible, chest facing wall.",
      "Point toes and pull ribs in, creating a straight line."
    ],
    tips: ["This variation is superior for alignment. Avoid the banana back shape (hyper-arched lower back)."],
    target: { reps: "", hold: "3 sets of 30-40s" },
    muscleFocus: ["Shoulders", "Traps", "Core Alignment"]
  },
  {
    id: "freestanding_handstand",
    name: "Freestanding Handstand",
    level: 3,
    category: "Balance",
    subCategory: "Hand Balance",
    description: "The gold standard of balance. Holding a vertical handstand without wall support.",
    prerequisites: ["chest_to_wall_handstand"],
    steps: [
      "Kick up from a lunge, placing hands shoulder-width apart.",
      "Find vertical alignment: wrists, elbows, shoulders, hips, and ankles stacked.",
      "Balance by pressing finger pads to pull back, or shifting weight to palms to push forward."
    ],
    tips: ["Use 'finger walking' to balance: if falling over, dig fingers into the floor. If falling back, push heel of palm."],
    target: { reps: "", hold: "3 sets of 10-15s" },
    muscleFocus: ["Shoulders", "Wrists", "Forearms", "Core"]
  },
  {
    id: "handstand_walking",
    name: "Handstand Walking",
    level: 3,
    category: "Balance",
    subCategory: "Hand Balance",
    description: "Walking on your hands by intentionally shifting balance forward and stepping to catch it.",
    prerequisites: ["freestanding_handstand"],
    steps: [
      "Kick up into a handstand.",
      "Tilt your legs slightly forward past your head to create forward momentum.",
      "Quickly step forward with one hand, then the next, chasing your center of mass."
    ],
    tips: ["Keep steps short and controlled; don't let legs swing wildly."],
    target: { reps: "3 sets of 5-10 meters", hold: "" },
    muscleFocus: ["Shoulders", "Triceps", "Core"]
  },
  {
    id: "handstand_shoulder_taps",
    name: "Handstand Shoulder Taps",
    level: 3,
    category: "Balance",
    subCategory: "Hand Balance",
    description: "Shifting weight dynamically to one arm in a handstand to build shoulder strength.",
    prerequisites: ["chest_to_wall_handstand"],
    steps: [
      "Perform a wall handstand (chest facing wall).",
      "Shift weight onto one hand, lifting the opposite hand to tap the same-side shoulder.",
      "Place hand down, shift weight, and tap the other shoulder."
    ],
    tips: ["Minimize hip sway by squeezing your glutes and core tight during the weight shift."],
    target: { reps: "3 sets of 10-12 taps total", hold: "" },
    muscleFocus: ["Shoulders", "Triceps", "Rotator Cuff"]
  },

  // Push
  {
    id: "archer_push_up",
    name: "Archer Push-up",
    level: 3,
    category: "Push",
    subCategory: "Push",
    description: "An advanced horizontal push where one arm bends while the other sweeps out straight.",
    prerequisites: ["decline_push_up", "wide_push_up"],
    steps: [
      "Place hands wide apart, fingers angled outwards.",
      "Lower your chest toward your right hand, keeping your left arm fully straight.",
      "Press back up to center using primarily your right side.",
      "Repeat on the left arm."
    ],
    tips: ["Focus on pushing with the bent arm; the straight arm behaves as an assistant."],
    target: { reps: "3 sets of 5-8 reps per side", hold: "" },
    muscleFocus: ["Chest", "Front Delts", "Triceps"]
  },
  {
    id: "ring_push_up",
    name: "Ring Push-up",
    level: 3,
    category: "Push",
    subCategory: "Push",
    description: "Push-ups on gymnastic rings, introducing extreme shoulder instability.",
    prerequisites: ["standard_push_up"],
    steps: [
      "Hold gymnast rings set close to the floor, body in a straight plank.",
      "Lower chest between the rings, keeping elbows tucked close to your ribs.",
      "Press back up, turning rings out (RTO - Rings Turned Out) at the top of the rep."
    ],
    tips: ["A Rings-Turned-Out position at lockout stabilizes shoulders and activates the chest deeply."],
    target: { reps: "3 sets of 8-10 reps", hold: "" },
    muscleFocus: ["Chest", "Shoulder Stabilizers", "Triceps"]
  },
  {
    id: "korean_dips",
    name: "Korean Dips",
    level: 3,
    category: "Push",
    subCategory: "Push",
    description: "Performing dips behind your back on a straight bar, requiring immense shoulder extension mobility.",
    prerequisites: ["parallel_bar_dips"],
    steps: [
      "Sit on a single straight bar and place hands behind you on the bar.",
      "Slide your hips off the bar, letting your legs hang under the bar.",
      "Lower your body down, bending elbows, allowing shoulders to stretch into extension.",
      "Press back up, pulling your hips forward and up to lock out."
    ],
    tips: ["Warm up your shoulders thoroughly. Avoid if you have shoulder impingement issues."],
    target: { reps: "3 sets of 5-8 reps", hold: "" },
    muscleFocus: ["Triceps", "Rear Delts", "Shoulder Flexors"]
  },
  {
    id: "straight_bar_dip",
    name: "Straight Bar Dip",
    level: 3,
    category: "Push",
    subCategory: "Push",
    description: "Dip performed on a single bar, the transition element of the Muscle-up.",
    prerequisites: ["parallel_bar_dips"],
    steps: [
      "Support your bodyweight on top of a single bar, hands shoulder-width.",
      "Lower your chest down to touch the bar, elbows folding back.",
      "Press up until your arms are fully locked out."
    ],
    tips: ["Keep your legs slightly forward (hollow body) to balance your center of gravity."],
    target: { reps: "3 sets of 8-10 reps", hold: "" },
    muscleFocus: ["Lower Chest", "Triceps", "Core"]
  },
  {
    id: "deep_dips",
    name: "Deep Dips",
    level: 3,
    category: "Push",
    subCategory: "Push",
    description: "Dips performed through a full range of motion, stretching and strengthening the shoulders at the bottom.",
    prerequisites: ["parallel_bar_dips"],
    steps: [
      "Setup on parallel bars.",
      "Lower yourself down as far as your mobility safely permits (shoulder well below elbow).",
      "Drive back up smoothly."
    ],
    tips: ["Build depth gradually to protect the shoulder capsule and chest attachments."],
    target: { reps: "3 sets of 6-8 reps", hold: "" },
    muscleFocus: ["Chest", "Triceps", "Shoulders"]
  },

  // Pull
  {
    id: "archer_pull_up",
    name: "Archer Pull-up",
    level: 3,
    category: "Pull",
    subCategory: "Pull",
    description: "Unilateral pull-up where one arm pulls while the other acts as a straight guide.",
    prerequisites: ["pull_up", "archer_row"],
    steps: [
      "Grip the bar with an ultra-wide overhand grip.",
      "Pull your body up and sideways toward your right hand.",
      "Extend your left arm completely straight across the bar.",
      "Lower under control, and switch to the left hand."
    ],
    tips: ["Ensure the straight arm's hand rolls over the bar as you shift sides."],
    target: { reps: "3 sets of 4-6 reps per side", hold: "" },
    muscleFocus: ["Lats", "Biceps", "Single-arm Pull"]
  },
  {
    id: "chest_to_bar_pull_up",
    name: "Chest-to-Bar Pull-up",
    level: 3,
    category: "Pull",
    subCategory: "Pull",
    description: "High-pullup targeting explosive pulling power, touching chest to the bar.",
    prerequisites: ["pull_up"],
    steps: [
      "Hang from the bar. Pull explosively.",
      "Instead of chin, pull your collarbone or lower chest straight to the bar.",
      "Keep elbows tucked and draw them behind your back."
    ],
    tips: ["Drive your chest up and lean your head back slightly to create a clear path."],
    target: { reps: "3 sets of 5-8 reps", hold: "" },
    muscleFocus: ["Lats", "Lower Traps", "Biceps", "Explosiveness"]
  },
  {
    id: "explosive_pull_up",
    name: "Explosive Pull-up",
    level: 3,
    category: "Pull",
    subCategory: "Pull",
    description: "Pulling as fast and hard as possible, trying to lift your hips/waist toward the bar.",
    prerequisites: ["chest_to_bar_pull_up"],
    steps: [
      "Hang from the bar. Initiate with an active retraction, then pull with maximum speed.",
      "Pull high enough that your hands can momentarily release the bar (clapping/hovering)."
    ],
    tips: ["Think about throwing the bar down to your feet rather than pulling yourself up."],
    target: { reps: "3 sets of 3-5 reps", hold: "" },
    muscleFocus: ["Fast-Twitch Lats", "Biceps", "Explosiveness"]
  },
  {
    id: "typewriter_pull_up",
    name: "Typewriter Pull-up",
    level: 3,
    category: "Pull",
    subCategory: "Pull",
    description: "Pulling chest over bar and sliding horizontally back and forth like a typewriter.",
    prerequisites: ["archer_pull_up"],
    steps: [
      "Pull up so your chest is at bar height.",
      "While keeping chest at bar height, slide your torso over to the right hand, straightening left arm.",
      "Slide all the way over to the left hand, straightening right arm.",
      "Return to center and lower."
    ],
    tips: ["Requires massive isometric back strength to keep the height during the slide."],
    target: { reps: "3 sets of 4-6 slides", hold: "" },
    muscleFocus: ["Lats", "Biceps", "Rhomboids", "Shoulder Girdle"]
  },

  // Legs
  {
    id: "full_pistol_squat",
    name: "Full Pistol Squat",
    level: 3,
    category: "Legs",
    subCategory: "Legs",
    description: "The classic bodyweight single-leg squat. Requires balance, hip flexibility, and quad strength.",
    prerequisites: ["assisted_pistol_squat", "bulgarian_split_squat"],
    steps: [
      "Stand on one leg, extending the opposite leg straight forward.",
      "Squat down fully on the standing leg, maintaining a straight extended leg.",
      "Lower until your glute touches your heel.",
      "Drive back up to standing without letting the extended foot touch the floor."
    ],
    tips: ["Hold your extended foot's toe if you lack hip flexor strength to keep the leg up."],
    target: { reps: "3 sets of 5-8 reps per leg", hold: "" },
    muscleFocus: ["Quads", "Glutes", "Ankle Flexors", "Balance"]
  },
  {
    id: "shrimp_squat",
    name: "Shrimp Squat",
    level: 3,
    category: "Legs",
    subCategory: "Legs",
    description: "Single-leg squat holding your rear foot behind you, shifting load onto the quadriceps.",
    prerequisites: ["shrimp_squat_progression"],
    steps: [
      "Stand on one leg, bending the other behind you.",
      "Hold your rear foot behind you with both hands (or one).",
      "Squat down until your rear knee touches the ground.",
      "Drive back up to a standing position."
    ],
    tips: ["Leaning forward at the hips helps keep balance over your active foot."],
    target: { reps: "3 sets of 5-8 reps per leg", hold: "" },
    muscleFocus: ["Quads", "Glutes", "Ankle Mobility"]
  },
  {
    id: "cossack_squat",
    name: "Cossack Squat",
    level: 3,
    category: "Legs",
    subCategory: "Legs",
    description: "Lateral single-leg squat that builds hamstring flexibility and inner thigh mobility.",
    prerequisites: ["bodyweight_squat"],
    steps: [
      "Stand in a very wide stance.",
      "Squat to one side, bending that knee fully while keeping the other leg completely straight.",
      "Rotate the heel of the straight leg down, toes pointing up.",
      "Press through the active foot to return to the wide standing position."
    ],
    tips: ["Keep your active foot's heel flat on the floor during the squat."],
    target: { reps: "3 sets of 8-10 reps per leg", hold: "" },
    muscleFocus: ["Quads", "Adductors", "Hamstrings", "Hips"]
  },
  {
    id: "nordic_curl",
    name: "Nordic Curl",
    level: 3,
    category: "Legs",
    subCategory: "Legs",
    description: "The ultimate bodyweight hamstring exercise, isolating knee flexion eccentrically.",
    prerequisites: ["glute_bridge"],
    steps: [
      "Kneel on the floor with ankles secured (under a bar, strap, or held by a partner).",
      "Keep a straight line from hips to knees.",
      "Slowly lean forward, using hamstrings to resist gravity.",
      "Lower as far as possible, catch yourself with hands, and push back up."
    ],
    tips: ["Focus on the lowering (eccentric) phase. Try to go down as slowly as possible."],
    target: { reps: "3 sets of 4-6 reps", hold: "" },
    muscleFocus: ["Hamstrings", "Glutes"]
  },

  // Static Skills
  {
    id: "l_sit",
    name: "L-Sit",
    level: 3,
    category: "Core",
    subCategory: "Static Skills",
    description: "Supporting your bodyweight on your hands with legs locked straight out at 90 degrees.",
    prerequisites: ["l_sit_tucked", "hanging_leg_raise"],
    steps: [
      "Place hands on floor or parallettes.",
      "Depress shoulders, lock elbows, and lift hips up.",
      "Extend both legs straight out in front of you, parallel to the ground.",
      "Keep chest open and point toes."
    ],
    tips: ["Floor L-sits are significantly harder than on bars because they require greater hip flexion and shoulder depression."],
    target: { reps: "", hold: "3 sets of 15-20s" },
    muscleFocus: ["Abs", "Hip Flexors", "Triceps", "Lats"]
  },
  {
    id: "v_sit_progression",
    name: "V-Sit Progression",
    level: 3,
    category: "Core",
    subCategory: "Static Skills",
    description: "Compressing the body further than an L-Sit, raising the feet up toward face height.",
    prerequisites: ["l_sit", "pancake_stretch"],
    steps: [
      "From an L-sit support, actively push your hips forward.",
      "Pull legs upward and backward toward your face, bending at the hips.",
      "Keep elbows locked."
    ],
    tips: ["Requires high hamstring flexibility. Keep hips actively pushed forward."],
    target: { reps: "", hold: "3 sets of 5-10s" },
    muscleFocus: ["Abs", "Hip Flexors", "Triceps", "Lats", "Hamstrings"]
  },
  {
    id: "elbow_lever",
    name: "Elbow Lever",
    level: 3,
    category: "Balance",
    subCategory: "Static Skills",
    description: "Balancing the abdomen on your elbows, keeping body parallel to the floor.",
    prerequisites: ["frog_stand", "wrist_mobility"],
    steps: [
      "Place hands close together on the floor, fingers pointing back.",
      "Bend elbows and tuck them firmly into your lower abdomen/hip bones.",
      "Lean forward, lifting feet off the floor until your body is parallel to the ground."
    ],
    tips: ["Squeeze your glutes and legs to keep your lower body straight."],
    target: { reps: "", hold: "3 sets of 20-30s" },
    muscleFocus: ["Wrists", "Lower Back", "Shoulders", "Core"]
  },
  {
    id: "tuck_planche",
    name: "Tuck Planche",
    level: 3,
    category: "Static Holds",
    subCategory: "Static Skills",
    description: "First real planche hold. Supporting bodyweight on hands with knees tucked close to chest.",
    prerequisites: ["pseudo_planche_push_up", "crow_pose"],
    steps: [
      "Place hands on floor or parallettes, shoulder-width apart.",
      "Lean forward, loading shoulders.",
      "Push floor away (protract shoulders) and lift knees and feet off the floor, tucking knees close to chest."
    ],
    tips: ["CRITICAL: Keep arms perfectly straight. Bending elbows turns it into a crow pose."],
    target: { reps: "", hold: "3 sets of 8-12s" },
    muscleFocus: ["Shoulders", "Upper Back (Serratus)", "Wrists", "Core"]
  },
  {
    id: "tuck_front_lever",
    name: "Tuck Front Lever",
    level: 3,
    category: "Static Holds",
    subCategory: "Static Skills",
    description: "Hanging from bar face up, back parallel to floor, with knees tucked tightly to chest.",
    prerequisites: ["pull_up", "hollow_hold"],
    steps: [
      "Hang from the bar.",
      "Pull down on the bar with straight arms, tilting your torso back.",
      "Tuck your knees to your chest and raise hips until your back is parallel to the floor.",
      "Keep elbows locked."
    ],
    tips: ["Focus on pulling the bar down to your hips; keep arms straight."],
    target: { reps: "", hold: "3 sets of 10-15s" },
    muscleFocus: ["Lats", "Rhomboids", "Shoulders", "Core"]
  },
  {
    id: "tuck_back_lever",
    name: "Tuck Back Lever",
    level: 3,
    category: "Static Holds",
    subCategory: "Static Skills",
    description: "Hanging face down, back parallel to floor, knees tucked, shoulders in extension.",
    prerequisites: ["parallel_bar_dips"],
    steps: [
      "Hang from the bar. Pull legs up and pass them through your arms.",
      "Face the floor. Hold hips at shoulder level, knees tucked to chest.",
      "Engage lower back and glutes, keep arms straight."
    ],
    tips: ["Easier than front lever, but puts high tension on biceps and shoulders. Keep elbows locked."],
    target: { reps: "", hold: "3 sets of 12-18s" },
    muscleFocus: ["Shoulders", "Biceps Tendons", "Lower Back", "Lats"]
  },

  // ================= LEVEL 4 - ADVANCED =================
  // Handstand
  {
    id: "press_to_handstand",
    name: "Press to Handstand",
    level: 4,
    category: "Balance",
    subCategory: "Handstand",
    description: "Lifting from the floor into a handstand using core compression and shoulder lean, without jumping.",
    prerequisites: ["freestanding_handstand", "pancake_stretch", "v_sit_progression"],
    steps: [
      "Place hands on the floor, legs in a wide straddle, toes on the floor.",
      "Lean shoulders forward of hands, shifting weight onto fingertips.",
      "Squeeze core and use hip flexors to float legs up sideways (straddle press) into handstand."
    ],
    tips: ["A deeper pancake stretch makes the press significantly easier as it reduces hip elevation requirements."],
    target: { reps: "3 sets of 3-5 reps", hold: "" },
    muscleFocus: ["Shoulders", "Abs", "Hip Flexors", "Wrists"]
  },
  {
    id: "straddle_handstand",
    name: "Straddle Handstand",
    level: 4,
    category: "Balance",
    subCategory: "Handstand",
    description: "Handstand held with legs spread wide in a straddle, lowering the center of gravity to assist balance.",
    prerequisites: ["freestanding_handstand"],
    steps: [
      "Kick up to handstand, then split legs wide.",
      "Keep hips rotated forward and toes pointed.",
      "Hold balance."
    ],
    tips: ["Excellent variation to work on shoulder tilt and pelvic alignment."],
    target: { reps: "", hold: "3 sets of 20-30s" },
    muscleFocus: ["Shoulders", "Hips", "Balance"]
  },
  {
    id: "handstand_push_up",
    name: "Handstand Push-up",
    level: 4,
    category: "Push",
    subCategory: "Handstand",
    description: "Pressing your bodyweight vertically while inverted against a wall.",
    prerequisites: ["wall_handstand", "pike_push_up", "parallel_bar_dips"],
    steps: [
      "Kick up against a wall (stomach or back facing wall).",
      "Lower yourself down slowly until your head lightly touches the floor, elbows folding back.",
      "Press back up dynamically to lockout."
    ],
    tips: ["Tuck your elbows to a 45-degree angle; do not flare them wide to the sides."],
    target: { reps: "3 sets of 5-8 reps", hold: "" },
    muscleFocus: ["Shoulders", "Triceps", "Traps"]
  },
  {
    id: "deficit_hspu",
    name: "Deficit Handstand Push-up",
    level: 4,
    category: "Push",
    subCategory: "Handstand",
    description: "Performing handstand pushups on parallettes, allowing head to go below hand level for full range of motion.",
    prerequisites: ["handstand_push_up"],
    steps: [
      "Kick up to a handstand on parallettes.",
      "Lower until shoulders touch the parallette bars (full depth).",
      "Press back up to lockout."
    ],
    tips: ["Extremely demanding on shoulder joints. Progress depth slowly."],
    target: { reps: "3 sets of 3-5 reps", hold: "" },
    muscleFocus: ["Shoulders", "Triceps", "Upper Chest"]
  },

  // Lever Skills
  {
    id: "adv_tuck_front_lever",
    name: "Advanced Tuck Front Lever",
    level: 4,
    category: "Static Holds",
    subCategory: "Lever Skills",
    description: "Front lever progression opening the hips from a tuck until the back is flat and thighs are perpendicular to torso.",
    prerequisites: ["tuck_front_lever"],
    steps: [
      "From a tuck front lever, extend your hips outward.",
      "Keep your back flat (do not round upper back) and knees bent at 90 degrees.",
      "Hold the shape parallel to the floor, arms straight."
    ],
    tips: ["Focus on retracting your shoulder blades; do not let your chest collapse."],
    target: { reps: "", hold: "3 sets of 8-12s" },
    muscleFocus: ["Lats", "Rhomboids", "Rear Delts", "Abs"]
  },
  {
    id: "one_leg_front_lever",
    name: "One Leg Front Lever",
    level: 4,
    category: "Static Holds",
    subCategory: "Lever Skills",
    description: "Extending one leg completely straight while keeping the other tucked to the chest.",
    prerequisites: ["adv_tuck_front_lever"],
    steps: [
      "Assume a tuck front lever.",
      "Extend one leg straight out, pointing the toe, while keeping the other knee tucked close to chest.",
      "Keep body level. Switch legs between sets."
    ],
    tips: ["Keep the hips completely level; do not let the hip of the extended leg drop."],
    target: { reps: "", hold: "3 sets of 6-10s per leg" },
    muscleFocus: ["Lats", "Rhomboids", "Core", "Lower Back"]
  },
  {
    id: "straddle_front_lever",
    name: "Straddle Front Lever",
    level: 4,
    category: "Static Holds",
    subCategory: "Lever Skills",
    description: "Extending both legs straight out but split wide apart, reducing the rotational lever length.",
    prerequisites: ["one_leg_front_lever", "pancake_stretch"],
    steps: [
      "From a tuck front lever, pull hips open and spread straight legs wide in a straddle.",
      "Keep body parallel to the ground.",
      "Ensure elbows are locked and chest is proud."
    ],
    tips: ["Squeeze glutes and outer thighs to keep legs spread wide and high."],
    target: { reps: "", hold: "3 sets of 5-8s" },
    muscleFocus: ["Lats", "Upper Back", "Abs", "Glutes"]
  },
  {
    id: "front_lever_pull",
    name: "Front Lever Pull",
    level: 4,
    category: "Pull",
    subCategory: "Lever Skills",
    description: "Dynamic pulling from dead hang straight into a tuck or straddle front lever.",
    prerequisites: ["adv_tuck_front_lever", "chest_to_bar_pull_up"],
    steps: [
      "Hang from the bar.",
      "Keeping arms locked, pull down on the bar to lift your entire body into front lever height.",
      "Lower slowly back to dead hang."
    ],
    tips: ["A straight-arm movement. Do not bend elbows at all."],
    target: { reps: "3 sets of 4-6 reps", hold: "" },
    muscleFocus: ["Lats", "Shoulder Extensors", "Core"]
  },
  {
    id: "adv_tuck_back_lever",
    name: "Advanced Tuck Back Lever",
    level: 4,
    category: "Static Holds",
    subCategory: "Lever Skills",
    description: "Back lever progression opening the hips so your back is flat and thighs are perpendicular to torso.",
    prerequisites: ["tuck_back_lever"],
    steps: [
      "From tuck back lever, push knees back away from chest.",
      "Align lower back flat with shoulders.",
      "Keep arms locked."
    ],
    tips: ["Ensure your chest faces the floor and hips do not sag."],
    target: { reps: "", hold: "3 sets of 10-15s" },
    muscleFocus: ["Shoulders", "Lower Back", "Core"]
  },
  {
    id: "one_leg_back_lever",
    name: "One Leg Back Lever",
    level: 4,
    category: "Static Holds",
    subCategory: "Lever Skills",
    description: "Back lever variation extending one leg straight out while the other remains tucked.",
    prerequisites: ["adv_tuck_back_lever"],
    steps: [
      "From tuck back lever, extend one leg straight out behind you.",
      "Keep hips square and body aligned.",
      "Alternate legs each set."
    ],
    tips: ["Point toes and squeeze the glute of the extended leg."],
    target: { reps: "", hold: "3 sets of 8-12s per leg" },
    muscleFocus: ["Shoulders", "Biceps Tendons", "Lower Back"]
  },
  {
    id: "straddle_back_lever",
    name: "Straddle Back Lever",
    level: 4,
    category: "Static Holds",
    subCategory: "Lever Skills",
    description: "Back lever with both legs straight and spread wide in a straddle.",
    prerequisites: ["one_leg_back_lever"],
    steps: [
      "Extend legs straight back, splitting them wide.",
      "Maintain a straight spine, chest facing the floor."
    ],
    tips: ["Squeeze glutes to keep legs at torso height."],
    target: { reps: "", hold: "3 sets of 6-10s" },
    muscleFocus: ["Shoulders", "Lower Back", "Biceps Tendons"]
  },
  {
    id: "full_back_lever",
    name: "Full Back Lever",
    level: 4,
    category: "Static Holds",
    subCategory: "Lever Skills",
    description: "Hanging face down, body aligned straight and parallel to the floor, supported by locked arms.",
    prerequisites: ["straddle_back_lever"],
    steps: [
      "Lower from a skin-the-cat position into a horizontal alignment.",
      "Squeeze legs together, point toes, and align head, hips, and feet.",
      "Protract shoulders slightly and squeeze lats."
    ],
    tips: ["Conditioning bicep tendons is key here. Do not rush this skill to avoid tendonitis."],
    target: { reps: "", hold: "3 sets of 5-8s" },
    muscleFocus: ["Shoulders", "Biceps Tendons", "Lower Back", "Glutes"]
  },

  // Planche
  {
    id: "planche_lean",
    name: "Planche Lean",
    level: 4,
    category: "Static Holds",
    subCategory: "Planche",
    description: "Fundamental planche preparation, leaning shoulders forward from a plank with protracted scapulae.",
    prerequisites: ["pseudo_planche_push_up"],
    steps: [
      "Get in a push-up position, hands rotated outwards.",
      "Protract (hollow) upper back and tuck hips (posterior pelvic tilt).",
      "Lean body forward as far as possible, wrists bearing weight.",
      "Keep legs locked straight and hold."
    ],
    tips: ["Protraction and posterior pelvic tilt are absolute requirements. Do not let lower back arch."],
    target: { reps: "", hold: "3 sets of 20-30s" },
    muscleFocus: ["Front Delts", "Serratus", "Wrists", "Core"]
  },
  {
    id: "frog_planche",
    name: "Frog Planche",
    level: 4,
    category: "Static Holds",
    subCategory: "Planche",
    description: "Crow pose variation with elbows straight, placing the weight entirely on front delts and wrists.",
    prerequisites: ["crow_pose", "planche_lean"],
    steps: [
      "Setup in a crow pose position.",
      "Slowly straighten your arms, transferring all balance to your shoulder lean.",
      "Keep knees resting on the outside of your elbows."
    ],
    tips: ["A bridge between hand balance and true planche. Keep elbows locked!"],
    target: { reps: "", hold: "3 sets of 10-15s" },
    muscleFocus: ["Front Delts", "Wrists", "Core"]
  },
  {
    id: "adv_frog_planche",
    name: "Advanced Frog",
    level: 4,
    category: "Static Holds",
    subCategory: "Planche",
    description: "Frog planche where the knees release from the elbows and float freely, keeping hips low.",
    prerequisites: ["frog_planche"],
    steps: [
      "Hold a frog planche with straight arms.",
      "Lift knees off your arms, holding them tucked underneath your chest, feet elevated."
    ],
    tips: ["Keep your shoulders protracted (pushed forward)."],
    target: { reps: "", hold: "3 sets of 8-12s" },
    muscleFocus: ["Front Delts", "Serratus", "Core"]
  },
  {
    id: "tuck_planche_lvl4",
    name: "Tuck Planche (Advanced)",
    level: 4,
    category: "Static Holds",
    subCategory: "Planche",
    description: "Tuck planche hold with clean execution, straight arms, and protracted shoulders.",
    prerequisites: ["tuck_planche"],
    steps: [
      "Hold tuck planche with straight arms, lifting feet off floor, knees close to chest."
    ],
    tips: ["Keep hips at shoulder height."],
    target: { reps: "", hold: "3 sets of 6-10s" },
    muscleFocus: ["Shoulders", "Serratus", "Core"]
  },
  {
    id: "adv_tuck_planche",
    name: "Advanced Tuck Planche",
    level: 4,
    category: "Static Holds",
    subCategory: "Planche",
    description: "Tuck planche where the hips are pulled back and opened up, flattening the upper spine.",
    prerequisites: ["tuck_planche_lvl4", "adv_frog_planche"],
    steps: [
      "From a tuck planche, push knees backward and flatten your lower back.",
      "Align hips with shoulder height, knees still bent under hips.",
      "Lean further forward to balance the shifted leg weight."
    ],
    tips: ["Very difficult. Requires massive anterior deltoid strength."],
    target: { reps: "", hold: "3 sets of 5-8s" },
    muscleFocus: ["Front Delts", "Serratus", "Lower Back", "Wrists"]
  },
  {
    id: "straddle_planche",
    name: "Straddle Planche",
    level: 4,
    category: "Static Holds",
    subCategory: "Planche",
    description: "Planche hold with straight arms and legs spread wide in a straddle.",
    prerequisites: ["adv_tuck_planche", "pancake_stretch"],
    steps: [
      "Lean forward, lift legs, and split them wide into a straddle layout parallel to floor."
    ],
    tips: ["Engage glutes to hold legs up high."],
    target: { reps: "", hold: "3 sets of 3-5s" },
    muscleFocus: ["Front Delts", "Serratus", "Hips", "Glutes"]
  },

  // Dynamic
  {
    id: "muscle_up",
    name: "Muscle-up",
    level: 4,
    category: "Dynamic",
    subCategory: "Dynamic",
    description: "The classic bar transition skill: pulling up over the bar and pressing into support.",
    prerequisites: ["explosive_pull_up", "straight_bar_dip"],
    steps: [
      "Hang with a false or semi-false grip. Swivel slightly forward.",
      "Pull explosively down and back, chest carving a C-curve around the bar.",
      "Transition wrists over the bar as chest clears it.",
      "Press up out of the dip to lock out."
    ],
    tips: ["Do not pull straight up like a pull-up; pull in a backward arc to allow space for the transition."],
    target: { reps: "3 sets of 3-5 reps", hold: "" },
    muscleFocus: ["Lats", "Explosive Pulling", "Triceps", "Core"]
  },
  {
    id: "slow_muscle_up",
    name: "Slow Muscle-up",
    level: 4,
    category: "Dynamic",
    subCategory: "Dynamic",
    description: "Muscle-up performed with no momentum (kipping), relying on pure strength and a false grip.",
    prerequisites: ["muscle_up"],
    steps: [
      "Use a deep false grip (wrists resting on top of the bar).",
      "Pull yourself up slowly.",
      "Roll chest slowly over the bar through the transition.",
      "Press out of the dip."
    ],
    tips: ["Extremely difficult. Requires strong wrist flexors and clean transition mechanics."],
    target: { reps: "3 sets of 1-3 reps", hold: "" },
    muscleFocus: ["Lats", "Biceps", "Triceps", "Wrist Flexors"]
  },
  {
    id: "ring_muscle_up",
    name: "Ring Muscle-up",
    level: 4,
    category: "Dynamic",
    subCategory: "Dynamic",
    description: "Muscle-up performed on gymnastic rings, which is easier on the transition but harder on stabilization.",
    prerequisites: ["muscle_up", "ring_push_up"],
    steps: [
      "Hang from rings with a false grip (palms resting on top of rings).",
      "Pull elbows down to chest, pulling rings close to sternum.",
      "Lean forward, shifting elbows over rings into a deep dip.",
      "Press up to support lockout, turning rings out."
    ],
    tips: ["Keep the rings close to your body throughout the entire transition."],
    target: { reps: "3 sets of 2-4 reps", hold: "" },
    muscleFocus: ["Lats", "Biceps", "Chest", "Triceps", "Shoulders"]
  },
  {
    id: "clap_pull_up",
    name: "Clap Pull-up",
    level: 4,
    category: "Dynamic",
    subCategory: "Dynamic",
    description: "Explosive pull-up where you release the bar and clap hands at the peak of the pull.",
    prerequisites: ["explosive_pull_up"],
    steps: [
      "Pull up with extreme speed.",
      "Release the bar at the top, clap hands quickly, and catch the bar before descending."
    ],
    tips: ["Ensure you are pulling high enough (chest or rib height) before releasing."],
    target: { reps: "3 sets of 4-6 reps", hold: "" },
    muscleFocus: ["Fast-Twitch Lats", "Biceps", "Explosiveness"]
  },
  {
    id: "explosive_muscle_up",
    name: "Explosive Muscle-up",
    level: 4,
    category: "Dynamic",
    subCategory: "Dynamic",
    description: "A muscle-up performed with such velocity that chest and waist clear the bar with minimal dip.",
    prerequisites: ["muscle_up"],
    steps: [
      "Pull with maximum speed, launching torso high above the bar.",
      "Push arms out straight immediately without struggling through the dip."
    ],
    tips: ["A standard in freestyle calisthenics to build height for releases."],
    target: { reps: "3 sets of 2-4 reps", hold: "" },
    muscleFocus: ["Lats", "Fast-Twitch Fibers", "Explosiveness"]
  },

  // Core
  {
    id: "dragon_flag",
    name: "Dragon Flag",
    level: 4,
    category: "Core",
    subCategory: "Core",
    description: "Holding the entire body completely straight, supported only on the shoulders and grip.",
    prerequisites: ["dragon_flag_progression", "hollow_hold"],
    steps: [
      "Lie on bench, grip support behind your head.",
      "Raise your body up into a vertical line.",
      "Lower body as a rigid board (shoulders to toes) until hovering an inch above bench.",
      "Pull back up, keeping spine perfectly locked."
    ],
    tips: ["Do not bend at the hips; the body must descend as a single solid unit."],
    target: { reps: "3 sets of 5-8 reps", hold: "" },
    muscleFocus: ["Abs", "Lower Back", "Glutes", "Lats"]
  },
  {
    id: "hanging_windshield_wipers",
    name: "Hanging Windshield Wipers",
    level: 4,
    category: "Core",
    subCategory: "Core",
    description: "Hanging in a back lever setup and rotating straight legs back and forth laterally.",
    prerequisites: ["hanging_leg_raise"],
    steps: [
      "Hang from bar, pull legs straight up, toes touching bar.",
      "Rotate legs side to side in a controlled arc, keeping them straight.",
      "Keep shoulders stable and arms relatively straight."
    ],
    tips: ["Controls oblique strength and rotational core stability."],
    target: { reps: "3 sets of 8-10 reps total", hold: "" },
    muscleFocus: ["Obliques", "Abs", "Grip"]
  },
  {
    id: "v_sit",
    name: "V-Sit",
    level: 4,
    category: "Core",
    subCategory: "Core",
    description: "Holding bodyweight on hands, legs locked straight and pulled back past a 45-degree angle.",
    prerequisites: ["v_sit_progression", "l_sit"],
    steps: [
      "Sit on floor or parallettes, press up.",
      "Raise legs high, knees straight, closing the angle between thighs and chest to less than 45 degrees.",
      "Extend hips forward, pointing toes high."
    ],
    tips: ["Requires excellent abdominal compression and hamstring flexibility."],
    target: { reps: "", hold: "3 sets of 8-12s" },
    muscleFocus: ["Abs", "Hip Flexors", "Triceps", "Hamstrings"]
  },
  {
    id: "compression_hold",
    name: "Compression Hold",
    level: 4,
    category: "Core",
    subCategory: "Core",
    description: "Seated floor compression, raising legs off floor to build raw hip flexor compression strength.",
    prerequisites: ["l_sit"],
    steps: [
      "Sit on floor, legs straight in front, hands placed near knees.",
      "Lean forward slightly, press palms down, and lift both feet off the floor.",
      "Keep legs straight and toes pointed."
    ],
    tips: ["Moving hands closer to your feet makes this exercise significantly harder."],
    target: { reps: "", hold: "3 sets of 10-15s" },
    muscleFocus: ["Lower Abs", "Hip Flexors", "Quads"]
  },

  // ================= LEVEL 5 - EXPERT =================
  // Planche Family
  {
    id: "full_planche",
    name: "Full Planche",
    level: 5,
    category: "Static Holds",
    subCategory: "Planche Family",
    description: "The holy grail of pushing. Supporting bodyweight horizontally on hands, body perfectly straight.",
    prerequisites: ["straddle_planche", "planche_lean"],
    steps: [
      "From parallettes or floor, lean shoulders forward.",
      "Protract shoulders and tilt pelvis under.",
      "Float legs off the ground, squeezing them together into a straight horizontal board."
    ],
    tips: ["Requires thousands of hours of shoulder conditioning. Keep elbows fully locked."],
    target: { reps: "", hold: "3 sets of 3-5s" },
    muscleFocus: ["Front Delts", "Serratus", "Lower Back", "Glutes"]
  },
  {
    id: "planche_push_up",
    name: "Planche Push-up",
    level: 5,
    category: "Push",
    subCategory: "Planche Family",
    description: "Performing pushups while maintaining a straddle or full planche hold.",
    prerequisites: ["full_planche", "adv_tuck_planche"],
    steps: [
      "Hold a straddle/full planche.",
      "Bend elbows, lowering chest to hands while keeping body parallel to the floor.",
      "Press back up to lock out, restoring shoulder protraction."
    ],
    tips: ["Do not let your legs drop as you lower; keep your center of mass balanced."],
    target: { reps: "3 sets of 3-5 reps", hold: "" },
    muscleFocus: ["Front Delts", "Triceps", "Chest", "Core"]
  },
  {
    id: "planche_press",
    name: "Planche Press",
    level: 5,
    category: "Push",
    subCategory: "Planche Family",
    description: "Pressing from a planche directly into a handstand using pure shoulder strength.",
    prerequisites: ["full_planche", "press_to_handstand"],
    steps: [
      "Hold a planche horizontal.",
      "Slowly raise hips up, transitioning your shoulder angle until you reach handstand."
    ],
    tips: ["A movement of extreme shoulder control and shoulder angle transition."],
    target: { reps: "3 sets of 1-3 reps", hold: "" },
    muscleFocus: ["Shoulders", "Triceps", "Traps"]
  },
  {
    id: "planche_to_handstand",
    name: "Planche to Handstand",
    level: 5,
    category: "Push",
    subCategory: "Planche Family",
    description: "Dynamic lift from planche, passing straight up to handstand.",
    prerequisites: ["planche_press"],
    steps: [
      "Maintain a planche, then press body weight upwards in a straight line to handstand."
    ],
    tips: ["Keep core fully locked during the vertical press."],
    target: { reps: "3 sets of 2-3 reps", hold: "" },
    muscleFocus: ["Shoulders", "Core", "Triceps"]
  },

  // Front Lever
  {
    id: "full_front_lever",
    name: "Full Front Lever",
    level: 5,
    category: "Static Holds",
    subCategory: "Front Lever",
    description: "The peak pulling hold. Hanging face up, body perfectly straight and parallel to the floor.",
    prerequisites: ["straddle_front_lever", "one_leg_front_lever"],
    steps: [
      "Hang from the bar.",
      "Pull down with straight arms, tilting body back.",
      "Squeeze legs together and extend them straight, aligning ankles, hips, and shoulders horizontally."
    ],
    tips: ["Actively squeeze your glutes and core to prevent hips from sagging below the shoulder line."],
    target: { reps: "", hold: "3 sets of 5-8s" },
    muscleFocus: ["Lats", "Upper Back", "Abs", "Glutes"]
  },
  {
    id: "front_lever_pull_up",
    name: "Front Lever Pull-up",
    level: 5,
    category: "Pull",
    subCategory: "Front Lever",
    description: "Performing pullups while holding a front lever parallel to the floor.",
    prerequisites: ["full_front_lever", "front_lever_pull"],
    steps: [
      "Hold a front lever.",
      "Pull your chest up to touch the bar, keeping your body horizontal.",
      "Lower under control back to front lever."
    ],
    tips: ["An incredibly heavy pull. Keep hips up as you pull to the bar."],
    target: { reps: "3 sets of 3-5 reps", hold: "" },
    muscleFocus: ["Lats", "Rhomboids", "Biceps", "Core"]
  },
  {
    id: "ice_cream_makers",
    name: "Ice Cream Makers",
    level: 5,
    category: "Pull",
    subCategory: "Front Lever",
    description: "Dynamic transition rocking between a pullup and a front lever.",
    prerequisites: ["full_front_lever", "pull_up"],
    steps: [
      "Perform a pullup, chest to bar.",
      "Push your body back, straightening arms into a front lever.",
      "Immediately pull back into the pullup position."
    ],
    tips: ["A great training tool to build dynamic entry strength for front levers."],
    target: { reps: "3 sets of 5-8 reps", hold: "" },
    muscleFocus: ["Lats", "Biceps", "Core"]
  },
  {
    id: "front_lever_raises",
    name: "Front Lever Raises",
    level: 5,
    category: "Pull",
    subCategory: "Front Lever",
    description: "Lifting your body from dead hang up to a vertical front lever position, arms locked.",
    prerequisites: ["full_front_lever"],
    steps: [
      "Hang from the bar, arms straight.",
      "Pull down to lift your entire body horizontally, then continue pulling up until feet point to ceiling.",
      "Lower slowly back to dead hang."
    ],
    tips: ["Keep your entire body locked straight; no knee or hip bending allowed."],
    target: { reps: "3 sets of 4-6 reps", hold: "" },
    muscleFocus: ["Lats", "Shoulder Extensors", "Abs"]
  },

  // Handstand (Level 5)
  {
    id: "oahs_progression",
    name: "One Arm Handstand Progression",
    level: 5,
    category: "Balance",
    subCategory: "Handstand",
    description: "Drills shifting weight to one arm, removing fingers of the support hand.",
    prerequisites: ["freestanding_handstand", "handstand_shoulder_taps"],
    steps: [
      "Hold a handstand, feet spread in a wide straddle.",
      "Shift weight over one hand, lifting the other to rest on fingers.",
      "Gradually lift support fingers, balancing on one arm."
    ],
    tips: ["Squeeze your legs and focus on keeping your shoulder stacked over the balancing hand."],
    target: { reps: "", hold: "3 sets of 5-10s per arm" },
    muscleFocus: ["Shoulders", "Wrist", "Obliques", "Balance"]
  },
  {
    id: "oahs_wall",
    name: "One Arm Wall Handstand",
    level: 5,
    category: "Balance",
    subCategory: "Handstand",
    description: "Practicing one arm handstand alignment against a wall.",
    prerequisites: ["oahs_progression"],
    steps: [
      "Kick up to wall handstand, shift weight, and hold balance on one arm with wall support."
    ],
    tips: ["Helps lock in the alignment of the shoulder and hip on the active side."],
    target: { reps: "", hold: "3 sets of 10-15s per arm" },
    muscleFocus: ["Shoulders", "Core Alignment"]
  },
  {
    id: "one_arm_handstand",
    name: "One Arm Handstand",
    level: 5,
    category: "Balance",
    subCategory: "Handstand",
    description: "The ultimate hand balance skill. Holding a freestanding handstand on a single arm.",
    prerequisites: ["oahs_wall"],
    steps: [
      "Kick up to freestanding handstand, straddle legs.",
      "Shift weight completely to one side, lock shoulder.",
      "Release non-balancing hand completely and hold balance."
    ],
    tips: ["Requires micro-adjustments in the wrist and oblique control to balance."],
    target: { reps: "", hold: "3 sets of 3-5s per arm" },
    muscleFocus: ["Shoulder", "Wrist", "Obliques", "Balance"]
  },

  // Pull (Level 5)
  {
    id: "oac",
    name: "One Arm Chin-up",
    level: 5,
    category: "Pull",
    subCategory: "Pull",
    description: "Pulling your entire bodyweight up with a single arm using a supinated grip.",
    prerequisites: ["archer_pull_up"],
    steps: [
      "Hang from the bar with one hand, underhand grip.",
      "Pull shoulder blade down (active scapular set).",
      "Pull elbow down to side, lifting chin over the bar."
    ],
    tips: ["Grip the bar tight; the non-pulling arm can brace the active shoulder to avoid rotation initially."],
    target: { reps: "3 sets of 1-2 reps per arm", hold: "" },
    muscleFocus: ["Biceps", "Lats", "Rhomboids", "Grip"]
  },
  {
    id: "oap",
    name: "One Arm Pull-up",
    level: 5,
    category: "Pull",
    subCategory: "Pull",
    description: "Pulling up with a single arm using an overhand grip (harder than chin-up).",
    prerequisites: ["oac"],
    steps: [
      "Hang with a single overhand grip.",
      "Pull chin over the bar."
    ],
    tips: ["Requires extreme lat and grip strength to prevent the body from spinning."],
    target: { reps: "3 sets of 1 rep per arm", hold: "" },
    muscleFocus: ["Lats", "Brachialis", "Forearms"]
  },
  {
    id: "archer_muscle_up",
    name: "Archer Muscle-up",
    level: 5,
    category: "Dynamic",
    subCategory: "Pull",
    description: "Muscle-up transition where one arm does the work while the other sweeps straight out.",
    prerequisites: ["muscle_up", "archer_pull_up"],
    steps: [
      "Pull up dynamically, shifting weight to one arm.",
      "Transition that shoulder over the bar while keeping the other arm straight."
    ],
    tips: ["Bridges the gap to the single arm muscle-up."],
    target: { reps: "3 sets of 2-3 reps per side", hold: "" },
    muscleFocus: ["Lats", "Triceps", "Shoulders"]
  },

  // Push (Level 5)
  {
    id: "one_arm_push_up",
    name: "One Arm Push-up",
    level: 5,
    category: "Push",
    subCategory: "Push",
    description: "Push-up on one arm, requiring massive rotational core strength and chest stabilization.",
    prerequisites: ["standard_push_up", "diamond_push_up"],
    steps: [
      "Place feet wide apart and one hand on the floor under your chest.",
      "Lower chest to floor, keeping hips square.",
      "Press up, resisting rotation."
    ],
    tips: ["Keep your core tight; do not let your hips sag or twist to the side."],
    target: { reps: "3 sets of 5-8 reps per side", hold: "" },
    muscleFocus: ["Chest", "Triceps", "Core Obliques"]
  },
  {
    id: "hspu_90_progression",
    name: "90° Handstand Push-up Progression",
    level: 5,
    category: "Push",
    subCategory: "Push",
    description: "Lowering from a handstand to a planche, then pressing back up. Done here with tuck/wall assist.",
    prerequisites: ["handstand_push_up", "planche_lean"],
    steps: [
      "From handstand, lower body while leaning shoulders forward, ending in a planche position.",
      "Press back up to handstand."
    ],
    tips: ["Warm up wrists and shoulders thoroughly. Requires massive shoulder transition strength."],
    target: { reps: "3 sets of 2-3 reps", hold: "" },
    muscleFocus: ["Shoulders", "Chest", "Triceps", "Core"]
  },

  // ================= LEVEL 6 - ELITE =================
  // Elite Static Skills
  {
    id: "full_maltese",
    name: "Full Maltese",
    level: 6,
    category: "Static Holds",
    subCategory: "Elite Static Skills",
    description: "Like a planche but arms are split wide to the sides, lowering the body close to the floor/rings.",
    prerequisites: ["full_planche"],
    steps: [
      "Lean forward on parallettes or rings.",
      "Open your arms wide to the sides, keeping them locked.",
      "Hold body horizontal and level, chest hovering just inches from the ground."
    ],
    tips: ["Puts extreme stress on the chest and shoulder biceps tendons. Keep elbows fully straight."],
    target: { reps: "", hold: "3 sets of 2-4s" },
    muscleFocus: ["Chest", "Front Delts", "Biceps Tendons", "Core"]
  },
  {
    id: "victorian_cross",
    name: "Victorian Cross",
    level: 6,
    category: "Static Holds",
    subCategory: "Elite Static Skills",
    description: "Hanging face up, body straight and held in line with rings, arms extended straight down/back.",
    prerequisites: ["full_front_lever", "iron_cross"],
    steps: [
      "Support on rings. Lower hips down, pulling arms straight back.",
      "Hold body perfectly straight and horizontal at ring height."
    ],
    tips: ["Considered one of the hardest pulling skills in gymnastics."],
    target: { reps: "", hold: "3 sets of 2-3s" },
    muscleFocus: ["Lats", "Teres Major", "Triceps", "Core"]
  },
  {
    id: "iron_cross",
    name: "Iron Cross",
    level: 6,
    category: "Ring Skills",
    subCategory: "Elite Static Skills",
    description: "Gymnastics classic. Supporting your bodyweight on rings with arms spread wide straight out.",
    prerequisites: ["parallel_bar_dips", "full_back_lever"],
    steps: [
      "Support on rings. Slowly lower body down, spreading arms straight out to the sides.",
      "Keep arms locked. Hold chest up and shoulders active."
    ],
    tips: ["Conditioning elbow ligaments is crucial; lower only to where you can safely pull back up."],
    target: { reps: "", hold: "3 sets of 3-5s" },
    muscleFocus: ["Lats", "Chest", "Shoulders", "Elbow Joint"]
  },
  {
    id: "zanetti_press",
    name: "Zanetti Press",
    level: 6,
    category: "Ring Skills",
    subCategory: "Elite Static Skills",
    description: "Pressing from a Maltese into a handstand on rings with straight arms.",
    prerequisites: ["full_maltese", "planche_press"],
    steps: [
      "Hold a Maltese on rings, then press straight arms upward to handstand."
    ],
    tips: ["Elite gymnastics strength. Requires absolute shoulder lock."],
    target: { reps: "3 sets of 1-2 reps", hold: "" },
    muscleFocus: ["Shoulders", "Chest", "Traps"]
  },
  {
    id: "inverted_cross",
    name: "Inverted Cross",
    level: 6,
    category: "Ring Skills",
    subCategory: "Elite Static Skills",
    description: "Holding a handstand on rings with arms spread wide straight to the sides.",
    prerequisites: ["iron_cross", "freestanding_handstand"],
    steps: [
      "From handstand on rings, slowly lower shoulders down, opening arms wide until body is inverted.",
      "Hold alignment."
    ],
    tips: ["Extremely challenging balance and shoulder-bearing capacity."],
    target: { reps: "", hold: "3 sets of 2-4s" },
    muscleFocus: ["Shoulders", "Traps", "Triceps"]
  },

  // Elite Dynamic Skills
  {
    id: "pull_360",
    name: "360 Pull-up",
    level: 6,
    category: "Dynamic",
    subCategory: "Elite Dynamic Skills",
    description: "Pulling up, releasing the bar, rotating 360 degrees in the air, and catching the bar.",
    prerequisites: ["explosive_muscle_up"],
    steps: [
      "Pull up explosively, driving hips to bar.",
      "Let go of the bar, spin your body 360 degrees, and catch the bar."
    ],
    tips: ["Spot the bar during rotation to catch it safely. Keep spin tight."],
    target: { reps: "3 sets of 2-3 reps", hold: "" },
    muscleFocus: ["Lats", "Core Rotation", "Explosiveness"]
  },
  {
    id: "pull_540",
    name: "540 Pull-up",
    level: 6,
    category: "Dynamic",
    subCategory: "Elite Dynamic Skills",
    description: "Explosive release rotating 540 degrees before catching the bar.",
    prerequisites: ["pull_360"],
    steps: [
      "Release bar, spin 540 degrees, and catch."
    ],
    tips: ["A freestyle calisthenics favorite."],
    target: { reps: "3 sets of 1-2 reps", hold: "" },
    muscleFocus: ["Core", "Fast-Twitch Lats", "Coordination"]
  },
  {
    id: "pull_720",
    name: "720 Pull-up",
    level: 6,
    category: "Dynamic",
    subCategory: "Elite Dynamic Skills",
    description: "Explosive pull rotating 720 degrees (two full spins) in mid-air before catch.",
    prerequisites: ["pull_540"],
    steps: [
      "Spin 720 degrees dynamically in the air."
    ],
    tips: ["Extremely high release height is mandatory."],
    target: { reps: "3 sets of 1 rep", hold: "" },
    muscleFocus: ["Lats", "Spin Speed", "Timing"]
  },
  {
    id: "double_muscle_up",
    name: "Double Muscle-up",
    level: 6,
    category: "Dynamic",
    subCategory: "Elite Dynamic Skills",
    description: "Performing two muscle-ups back-to-back without stopping or resetting at the bottom.",
    prerequisites: ["muscle_up"],
    steps: [
      "Perform a muscle up, and on the descent, throw your body forward to swing directly into the next rep."
    ],
    tips: ["Maintains constant momentum during the swing transition."],
    target: { reps: "3 sets of 3-5 reps", hold: "" },
    muscleFocus: ["Lats", "Triceps", "Core Rhythm"]
  },
  {
    id: "one_arm_muscle_up",
    name: "One Arm Muscle-up",
    level: 6,
    category: "Dynamic",
    subCategory: "Elite Dynamic Skills",
    description: "Performing a strict muscle-up using a single arm.",
    prerequisites: ["oap", "oac"],
    steps: [
      "Hang with one arm.",
      "Pull up explosively, shifting chest over your hand, and push out of the single-arm dip."
    ],
    tips: ["Requires world-class pulling strength and single-arm transition coordination."],
    target: { reps: "3 sets of 1 rep per arm", hold: "" },
    muscleFocus: ["Lats", "Biceps", "Triceps", "Shoulders"]
  },
  {
    id: "reverse_muscle_up",
    name: "Reverse Muscle-up",
    level: 6,
    category: "Dynamic",
    subCategory: "Elite Dynamic Skills",
    description: "Facing away from the bar, executing a swing and transition backwards over the bar.",
    prerequisites: ["muscle_up", "korean_dips"],
    steps: [
      "Swing, transition backward over the bar, ending up in a support dip behind your back."
    ],
    tips: ["Also known as a Hefesto precursor swing."],
    target: { reps: "3 sets of 1-2 reps", hold: "" },
    muscleFocus: ["Biceps Tendons", "Lats", "Triceps"]
  },
  {
    id: "hefesto",
    name: "Hefesto",
    level: 6,
    category: "Dynamic",
    subCategory: "Elite Dynamic Skills",
    description: "Hanging under a bar in a back lever, pulling up backward onto the bar.",
    prerequisites: ["korean_dips", "full_back_lever"],
    steps: [
      "Hang in a back lever or skin-the-cat position.",
      "Pull your hips up to the bar, bending your elbows backward.",
      "Roll your wrists and push up to sit on top of the bar."
    ],
    tips: ["Extremely heavy load on the wrists and biceps. Warm up fully."],
    target: { reps: "3 sets of 1-3 reps", hold: "" },
    muscleFocus: ["Biceps Tendons", "Rear Delts", "Wrists"]
  },
  {
    id: "impossible_dip",
    name: "Impossible Dip",
    level: 6,
    category: "Push",
    subCategory: "Elite Dynamic Skills",
    description: "Dipping on parallel bars by lowering forearms flat onto the bars, then pressing back up without changing wrist position.",
    prerequisites: ["parallel_bar_dips"],
    steps: [
      "Support on parallel bars.",
      "Lean torso back, lowering elbows until your forearms rest flat on the bars.",
      "Using pure triceps strength, press elbows off the bars back to lockout."
    ],
    tips: ["Requires incredible triceps and elbow joint tendon conditioning."],
    target: { reps: "3 sets of 2-4 reps", hold: "" },
    muscleFocus: ["Triceps", "Shoulders", "Elbows"]
  },
  {
    id: "impossible_muscle_up",
    name: "Impossible Muscle-up",
    level: 6,
    category: "Dynamic",
    subCategory: "Elite Dynamic Skills",
    description: "A slow muscle-up transition performed with elbows remaining tucked and close together, avoiding wrist rotation.",
    prerequisites: ["slow_muscle_up", "impossible_dip"],
    steps: [
      "Strict pull-up, transitioning over the bar with elbows tucked under chest throughout, resembling an impossible dip pull."
    ],
    tips: ["Maximum difficulty level. Zero momentum allowed."],
    target: { reps: "3 sets of 1 rep", hold: "" },
    muscleFocus: ["Biceps", "Triceps", "Lats"]
  },

  // Elite Handstand Skills
  {
    id: "hspu_90",
    name: "90° Push-up",
    level: 6,
    category: "Push",
    subCategory: "Elite Handstand Skills",
    description: "Lowering from handstand to a full planche, then pressing back up to handstand, keeping arms straight/bent accordingly.",
    prerequisites: ["hspu_90_progression", "full_planche"],
    steps: [
      "Start in freestanding handstand.",
      "Lower body into full planche (body parallel to floor, elbows bent).",
      "Press back up to handstand."
    ],
    tips: ["Requires perfect transition of shoulder angle under full load."],
    target: { reps: "3 sets of 1-3 reps", hold: "" },
    muscleFocus: ["Shoulders", "Chest", "Triceps", "Core"]
  },
  {
    id: "tiger_bend",
    name: "Tiger Bend",
    level: 6,
    category: "Push",
    subCategory: "Elite Handstand Skills",
    description: "Lowering from handstand to rest forearms on floor, then pressing back up to handstand using triceps.",
    prerequisites: ["freestanding_handstand", "impossible_dip"],
    steps: [
      "Hold handstand.",
      "Lower elbows down until forearms rest flat on the floor.",
      "Lean shoulders forward, push elbows off the floor, and press back to handstand."
    ],
    tips: ["A movement of high triceps strength and shoulder leverage shift."],
    target: { reps: "3 sets of 2-4 reps", hold: "" },
    muscleFocus: ["Triceps", "Shoulders", "Core"]
  },
  {
    id: "tiger_bend_to_hs",
    name: "Tiger Bend to Handstand",
    level: 6,
    category: "Push",
    subCategory: "Elite Handstand Skills",
    description: "Starting from forearm stand (pincha) and pressing up into handstand.",
    prerequisites: ["tiger_bend"],
    steps: [
      "Start in a forearm stand.",
      "Shift shoulders forward, lift elbows off the floor, and press straight up to handstand."
    ],
    tips: ["Requires explosive forearm push-off and shoulder angle shift."],
    target: { reps: "3 sets of 2-3 reps", hold: "" },
    muscleFocus: ["Triceps", "Shoulders", "Core"]
  },
  {
    id: "hs_pirouette",
    name: "Handstand Pirouette",
    level: 6,
    category: "Balance",
    subCategory: "Elite Handstand Skills",
    description: "Rotating 360 degrees on your hands while holding a handstand.",
    prerequisites: ["freestanding_handstand", "handstand_walking"],
    steps: [
      "Hold handstand.",
      "Walk hands in a circle, pivoting your body 360 degrees while maintaining vertical alignment."
    ],
    tips: ["Shift weight cleanly from one shoulder to the other."],
    target: { reps: "3 sets of 2 spins", hold: "" },
    muscleFocus: ["Shoulders", "Wrist", "Obliques"]
  },
  {
    id: "hs_press_variations",
    name: "Handstand Press Variations",
    level: 6,
    category: "Balance",
    subCategory: "Elite Handstand Skills",
    description: "Lifting to handstand using advanced positions (L-sit press, tuck press, hollow press).",
    prerequisites: ["press_to_handstand", "l_sit"],
    steps: [
      "From an L-sit support, press directly into a handstand with straight arms."
    ],
    tips: ["Requires massive compression, hip flexor strength, and shoulder angle adjustment."],
    target: { reps: "3 sets of 2-3 reps", hold: "" },
    muscleFocus: ["Shoulders", "Abs", "Hip Flexors"]
  },

  // ================= LEVEL 7 - WORLD CLASS / COMPETITION =================
  // Planche Variations
  {
    id: "full_planche_lvl7",
    name: "Full Planche (Level 7)",
    level: 7,
    category: "Static Holds",
    subCategory: "Planche Variations",
    description: "Full Planche held with clean execution, straight spine, and hollow body.",
    prerequisites: ["full_planche"],
    steps: [
      "Hold full planche with shoulders protracted, hips tucked, arms locked, parallel to the floor."
    ],
    tips: ["Aim for competition grade perfect posture."],
    target: { reps: "", hold: "3 sets of 5-8s" },
    muscleFocus: ["Shoulders", "Core", "Lower Back"]
  },
  {
    id: "straddle_planche_pu",
    name: "Straddle Planche Push-up",
    level: 7,
    category: "Push",
    subCategory: "Planche Variations",
    description: "Straddle Planche push-ups performed to depth with elbows tucked.",
    prerequisites: ["planche_push_up"],
    steps: [
      "Perform a push-up from straddle planche, chest to floor, keeping straight body line."
    ],
    tips: ["Keep hips high and core loaded."],
    target: { reps: "3 sets of 5-8 reps", hold: "" },
    muscleFocus: ["Front Delts", "Chest", "Triceps"]
  },
  {
    id: "maltese_lvl7",
    name: "Maltese",
    level: 7,
    category: "Static Holds",
    subCategory: "Planche Variations",
    description: "The wide-arm planche held on rings or flat floor, body horizontal.",
    prerequisites: ["full_maltese"],
    steps: [
      "Hold wide-arm planche layout, body close to ground, arms locked."
    ],
    tips: ["Keep wrists rotated outward slightly to reduce tendon stress."],
    target: { reps: "", hold: "3 sets of 3-5s" },
    muscleFocus: ["Chest", "Front Delts", "Biceps Tendons"]
  },
  {
    id: "victorian_lvl7",
    name: "Victorian",
    level: 7,
    category: "Static Holds",
    subCategory: "Planche Variations",
    description: "Hanging face up, body held straight in line with rings/bars, arms pulling straight back.",
    prerequisites: ["victorian_cross"],
    steps: [
      "Pull body up horizontally at ring level, back facing floor, shoulders in deep extension."
    ],
    tips: ["Considered world class pulling strength."],
    target: { reps: "", hold: "3 sets of 2-3s" },
    muscleFocus: ["Lats", "Rhomboids", "Core"]
  },
  {
    id: "full_zanetti",
    name: "Full Zanetti",
    level: 7,
    category: "Ring Skills",
    subCategory: "Planche Variations",
    description: "Gymnastics press: lying flat on rings, then pressing straight arms up to handstand.",
    prerequisites: ["zanetti_press"],
    steps: [
      "From horizontal Maltese, press straight arms vertical to handstand on rings."
    ],
    tips: ["Keep rings stable; do not let them shake."],
    target: { reps: "3 sets of 1 rep", hold: "" },
    muscleFocus: ["Shoulders", "Chest", "Core Stabilizers"]
  },

  // Lever Variations
  {
    id: "fl_pullup_lvl7",
    name: "Front Lever Pull-up",
    level: 7,
    category: "Pull",
    subCategory: "Lever Variations",
    description: "Performing pullups in full front lever horizontal alignment.",
    prerequisites: ["front_lever_pull_up"],
    steps: [
      "Hold full front lever, pull chest to bar, lower back to horizontal under control."
    ],
    tips: ["Avoid letting hips sag during the pull."],
    target: { reps: "3 sets of 4-6 reps", hold: "" },
    muscleFocus: ["Lats", "Upper Back", "Biceps"]
  },
  {
    id: "one_arm_fl",
    name: "One Arm Front Lever",
    level: 7,
    category: "Static Holds",
    subCategory: "Lever Variations",
    description: "Hanging face up, body straight and parallel to the floor, holding with a single arm.",
    prerequisites: ["full_front_lever", "oap"],
    steps: [
      "Hang from bar with one hand.",
      "Pull into horizontal front lever layout, body straight."
    ],
    tips: ["Requires massive rotational lat resistance and single-arm grip strength."],
    target: { reps: "", hold: "3 sets of 2-4s per arm" },
    muscleFocus: ["Lats", "Rhomboids", "Obliques", "Grip"]
  },
  {
    id: "victorian_lever",
    name: "Victorian Lever",
    level: 7,
    category: "Static Holds",
    subCategory: "Lever Variations",
    description: "Hanging face up, body held straight, pulling arms straight back.",
    prerequisites: ["victorian_lvl7"],
    steps: [
      "Hold horizontal layout, back facing floor, pulling back on bars."
    ],
    tips: ["Elite gymnastics pull hold."],
    target: { reps: "", hold: "3 sets of 3s" },
    muscleFocus: ["Lats", "Rhomboids", "Triceps"]
  },

  // Handstand Variations
  {
    id: "one_finger_hs",
    name: "One Finger Handstand",
    level: 7,
    category: "Balance",
    subCategory: "Handstand Variations",
    description: "Balancing on a single finger of one hand (usually supported/specialized setup).",
    prerequisites: ["one_arm_handstand"],
    steps: [
      "Balance bodyweight entirely on a single finger of the hand. Extremely rare / specialized training."
    ],
    tips: ["Extremely high risk. Build up wrist and finger joints over years."],
    target: { reps: "", hold: "1 set of 1-2s" },
    muscleFocus: ["Finger Tendons", "Wrist", "Shoulder"]
  },
  {
    id: "two_finger_hs",
    name: "Two Finger Handstand",
    level: 7,
    category: "Balance",
    subCategory: "Handstand Variations",
    description: "Handstand balanced on two fingers of one hand.",
    prerequisites: ["one_arm_handstand"],
    steps: [
      "Shift balance to one arm, resting only on two fingers of that hand."
    ],
    tips: ["Puts immense loading pressure on finger joints."],
    target: { reps: "", hold: "3 sets of 2-3s" },
    muscleFocus: ["Finger Joints", "Forearm", "Shoulder"]
  },
  {
    id: "press_hs_lvl7",
    name: "Press Handstand",
    level: 7,
    category: "Balance",
    subCategory: "Handstand Variations",
    description: "Pressing to handstand with perfect layout and form, no speed/momentum.",
    prerequisites: ["press_to_handstand"],
    steps: [
      "Press to handstand, showing extreme control at every stage."
    ],
    tips: ["Keep legs fully straight, toes pointed, movement slow."],
    target: { reps: "3 sets of 5 reps", hold: "" },
    muscleFocus: ["Shoulders", "Core", "Hips"]
  },
  {
    id: "hs_canes",
    name: "Handstand on Canes",
    level: 7,
    category: "Balance",
    subCategory: "Handstand Variations",
    description: "Handstand performed on elevated balancing canes.",
    prerequisites: ["freestanding_handstand"],
    steps: [
      "Grip handstand canes, kick up, and balance.",
      "Use shoulder tilts to balance since wrist flexing is restricted."
    ],
    tips: ["Gives visual elegance and requires high shoulder-driven balance adjustments."],
    target: { reps: "", hold: "3 sets of 30-45s" },
    muscleFocus: ["Shoulders", "Wrists", "Balance"]
  },

  // Pull Skills (Level 7)
  {
    id: "one_arm_mu",
    name: "One Arm Muscle-up",
    level: 7,
    category: "Dynamic",
    subCategory: "Pull Skills",
    description: "Dynamic pull on a single arm, transitioning over the bar to lockout.",
    prerequisites: ["one_arm_muscle_up"],
    steps: [
      "Pull up on one arm, swivel shoulder over bar, and push to lockout."
    ],
    tips: ["World class dynamic skill."],
    target: { reps: "3 sets of 1 rep per arm", hold: "" },
    muscleFocus: ["Lats", "Triceps", "Shoulders"]
  },
  {
    id: "one_finger_pull_up",
    name: "One Finger Pull-up",
    level: 7,
    category: "Pull",
    subCategory: "Pull Skills",
    description: "Pulling up your entire body weight suspended from a single index finger on each hand.",
    prerequisites: ["pull_up", "oap"],
    steps: [
      "Hang from the bar using only your index fingers.",
      "Pull chin over the bar under control."
    ],
    tips: ["Risk of tendon tear. Use warning. Build grip strength with finger boards first."],
    target: { reps: "3 sets of 2-3 reps", hold: "" },
    muscleFocus: ["Finger Tendons", "Lats", "Biceps"]
  },
  {
    id: "weighted_oap",
    name: "Weighted One Arm Pull-up",
    level: 7,
    category: "Pull",
    subCategory: "Pull Skills",
    description: "One arm pull-up performed while holding external weight.",
    prerequisites: ["oap"],
    steps: [
      "Hold weight belt, pull up with one arm until chin clears bar."
    ],
    tips: ["Add weight in small increments."],
    target: { reps: "3 sets of 1 rep", hold: "" },
    muscleFocus: ["Lats", "Biceps", "Grip"]
  },

  // Dynamic Freestyle
  {
    id: "giant_swing",
    name: "Giant Swing",
    level: 7,
    category: "Dynamic",
    subCategory: "Dynamic Freestyle",
    description: "Swinging 360 degrees around the bar with arms straight, a gymnast classic.",
    prerequisites: ["explosive_muscle_up"],
    steps: [
      "Cast up into handstand height above the bar.",
      "Swing down with straight arms, pulling through the bottom of the swing.",
      "Drive heels up to complete the circle back to the top."
    ],
    tips: ["Keep shoulders active at the bottom of the swing to absorb G-force."],
    target: { reps: "3 sets of 3-5 swings", hold: "" },
    muscleFocus: ["Lats", "Shoulders", "Core Timing"]
  },
  {
    id: "bar_360",
    name: "Bar 360",
    level: 7,
    category: "Freestyle",
    subCategory: "Dynamic Freestyle",
    description: "Dynamic freestyle rotate: spinning 360 degrees in the air and catching the bar.",
    prerequisites: ["pull_360"],
    steps: [
      "Swing, release the bar, rotate 360, and catch."
    ],
    tips: ["Maintain a tight spin axis."],
    target: { reps: "3 sets of 3 catches", hold: "" },
    muscleFocus: ["Core Rotation", "Lats", "Timing"]
  },
  {
    id: "bar_540",
    name: "Bar 540",
    level: 7,
    category: "Freestyle",
    subCategory: "Dynamic Freestyle",
    description: "Freestyle swing releasing the bar and spinning 540 degrees in the air.",
    prerequisites: ["pull_540", "bar_360"],
    steps: [
      "Swing, release, spin 540, and catch."
    ],
    tips: ["Requires high swing amplitude."],
    target: { reps: "3 sets of 2 catches", hold: "" },
    muscleFocus: ["Core", "Spin Speed"]
  },
  {
    id: "bar_720",
    name: "Bar 720",
    level: 7,
    category: "Freestyle",
    subCategory: "Dynamic Freestyle",
    description: "Double rotation spin 720 degrees release and catch.",
    prerequisites: ["pull_720", "bar_540"],
    steps: [
      "Release, spin 720 in the air, catch."
    ],
    tips: ["World class freestyle competition skill."],
    target: { reps: "3 sets of 1 catch", hold: "" },
    muscleFocus: ["Lats", "Spins", "Coordination"]
  },
  {
    id: "gienger",
    name: "Gienger",
    level: 7,
    category: "Freestyle",
    subCategory: "Dynamic Freestyle",
    description: "Swinging forward, releasing the bar, executing a back flip with a half twist, and catching the bar.",
    prerequisites: ["giant_swing"],
    steps: [
      "Swing forward, release, fly backward doing a flip + 180 turn, catch bar."
    ],
    tips: ["Requires gymnast level safety setup (mats/harness)."],
    target: { reps: "3 sets of 1-2 catches", hold: "" },
    muscleFocus: ["Core", "Glutes", "Coordination"]
  },
  {
    id: "kovacs",
    name: "Kovacs",
    level: 7,
    category: "Freestyle",
    subCategory: "Dynamic Freestyle",
    description: "Swinging forward, releasing, executing a double back somersault over the bar, and catching it.",
    prerequisites: ["giant_swing"],
    steps: [
      "Release bar on forward swing, perform double back flip over the bar, catch."
    ],
    tips: ["One of the most dangerous and elite gymnastics release moves."],
    target: { reps: "3 sets of 1 catch", hold: "" },
    muscleFocus: ["Core", "Glutes", "Air Awareness"]
  },
  {
    id: "double_back_release",
    name: "Double Back Release",
    level: 7,
    category: "Freestyle",
    subCategory: "Dynamic Freestyle",
    description: "Releasing at the back of the swing and executing a double back flip to land on the floor.",
    prerequisites: ["giant_swing"],
    steps: [
      "Swing, release at peak height, perform double back flip, land stable on mats."
    ],
    tips: ["Stick the landing with knees bent."],
    target: { reps: "3 sets of 2 dismounts", hold: "" },
    muscleFocus: ["Core", "Legs (Landing)"]
  },
  {
    id: "swing_360_catch",
    name: "Swing 360 Catch",
    level: 7,
    category: "Freestyle",
    subCategory: "Dynamic Freestyle",
    description: "Executing a 360-degree rotation during a under-bar swing, catching the bar.",
    prerequisites: ["bar_360"],
    steps: [
      "Swing under the bar, release, spin 360, catch."
    ],
    tips: ["Requires fast hand-eye coordination."],
    target: { reps: "3 sets of 3 catches", hold: "" },
    muscleFocus: ["Lats", "Core"]
  },
  {
    id: "swing_540_catch",
    name: "Swing 540 Catch",
    level: 7,
    category: "Freestyle",
    subCategory: "Dynamic Freestyle",
    description: "Swing release under bar spinning 540 degrees before catching.",
    prerequisites: ["bar_540", "swing_360_catch"],
    steps: [
      "Swing, release, spin 540, catch."
    ],
    tips: ["Elite freestyle catch skill."],
    target: { reps: "3 sets of 1 catch", hold: "" },
    muscleFocus: ["Lats", "Core", "Spins"]
  }
];
