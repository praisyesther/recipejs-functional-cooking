/* =========================
   Recipe Data
========================= */

const recipes = [
  {
    id: 1,
    title: "Spaghetti Aglio e Olio",
    time: 20,
    difficulty: "easy",
    description: "Classic Italian pasta with garlic, olive oil, and chili flakes.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Chicken Caesar Salad",
    time: 25,
    difficulty: "easy",
    description: "Crisp romaine lettuce with grilled chicken and creamy dressing.",
    category: "salad"
  },
  {
    id: 3,
    title: "Beef Stir Fry",
    time: 35,
    difficulty: "medium",
    description: "Tender beef strips cooked with vegetables in savory sauce.",
    category: "stir-fry"
  },
  {
    id: 4,
    title: "Vegetable Curry",
    time: 50,
    difficulty: "medium",
    description: "Aromatic curry with seasonal vegetables and coconut milk.",
    category: "curry"
  },
  {
    id: 5,
    title: "Homemade Lasagna",
    time: 90,
    difficulty: "hard",
    description: "Layered pasta with rich meat sauce and creamy béchamel.",
    category: "pasta"
  },
  {
    id: 6,
    title: "Beef Wellington",
    time: 120,
    difficulty: "hard",
    description: "Tender beef wrapped in pastry with mushroom duxelles.",
    category: "main-course"
  },
  {
    id: 7,
    title: "Avocado Toast",
    time: 10,
    difficulty: "easy",
    description: "Toasted bread topped with smashed avocado and seasoning.",
    category: "breakfast"
  },
  {
    id: 8,
    title: "Shrimp Risotto",
    time: 60,
    difficulty: "medium",
    description: "Creamy risotto cooked slowly with shrimp and parmesan.",
    category: "seafood"
  }
];

/* =========================
   DOM Selection
========================= */

const recipeContainer = document.querySelector("#recipe-container");

/* =========================
   Create Recipe Card
========================= */

const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

/* =========================
   Render Recipes
========================= */

const renderRecipes = (recipeArray) => {
  const recipeHTML = recipeArray
    .map(recipe => createRecipeCard(recipe))
    .join("");

  recipeContainer.innerHTML = recipeHTML;
};

/* =========================
   Initialize App
========================= */

renderRecipes(recipes);