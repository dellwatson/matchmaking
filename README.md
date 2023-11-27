# STAR-EX Game README

## Welcome to STAR-EX (EXPLORE, EXPEDITION)

STAR-EX is a groundbreaking web3 game that combines the thrill of exploration with the excitement of an incremental speed challenge. Take control of a spaceship on an interstellar expedition through space, navigating a dynamic and challenging cosmic obstacle course. The game's speed increases over time, presenting players with ever-growing challenges to survive.

### Gameplay Highlights

- **360 Space Exploration:** Experience the classic Temple Run concept in 360 space with additional fun abilities.
- **Increasing Speed Challenge:** Survive and thrive as the game dynamically increases in speed.
- **Unique NFT Items:** Discover and collect NFTs representing unique in-game items, granting special abilities and tradable in a marketplace.
- **Crafting and Strategy:** Craft items crucial for obtaining energy to activate powerful abilities, adding depth and strategy to gameplay.
- **Action-Idle Integration:** Stake your spaceships, transforming the experience into an idle game with a rewarding stake.

### Action-Idle RPG Experience

STAR-EX goes beyond its action roots, aiming to become an "Action-Idle RPG." Each spaceship has unique abilities, and dimension locations have strengths and weaknesses for each spaceship. Stats carry within the LSP-8 standard, creating a rich gaming experience.

### Technical Details

- **Technology Stack:**

  - Frontend: React
  - Graphics: Three.js library with WEBGPU utilization
  - Backend: Node.js for score collection and leaderboard
  - Future: Game-server for PvP gameplay

- **Smart Contracts Used:**
  - (2x) LSP-7
  - (3x) LSP-8 collection
  - (1x) LSP-8 with ID

### Smart Contract Flow

1. Players play and obtain items through in-game exploration.
2. Backend records the items and provides an EIP712 signature.
3. Users use the signature to mint their NFTs through the manager contract.
4. Manager contract validates the signature and allows users to mint.

### Game Development Insights

- The game utilizes React and the Three.js library for enhanced graphics using WEBGPU.
- Smart contracts include (2x) LSP-7, (3x) LSP-8 collection, and (1x) LSP-8 with ID.
- Due to a hackathon time limit, contracts are not finalized, but the flow is outlined.

### Gamefi and NFTs

- Spaceships are represented as NFTs.
- Ticket-NFTs enhance gameplay in high-rate drop dimensions.
- Seasonal NFT-pass provides auto-tickets at a lower cost.
- The game is still enjoyable without NFTs, emphasizing a fun and challenging experience.

### Demo Preview

- The demo showcases one ability, a single map, and a limited set of features for security reasons.
- Stay tuned for future updates as the game evolves and becomes ready for a full showdown.

For more information, feedback, or inquiries, please contact our development team.

_Note: Due to security concerns, the demo showcases limited features, and certain aspects, features, abilities, map, and concept are intentionally kept undisclosed until the full release._
