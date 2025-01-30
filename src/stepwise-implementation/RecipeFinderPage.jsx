import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function RecipeFinderPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the recipe finder.',
          code: `
            <div id="recipe-container">
              <input type="text" id="searchRecipe" placeholder="Enter recipe name" />
              <button id="searchBtn">Search</button>
              <div id="recipeResults"></div>
            </div>
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-recipe-container"><input type="text" placeholder="Enter recipe name" /><button>Search</button><div id="demo-recipeResults"></div></div></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS styles to make the recipe finder look good.',
          code: `
            /* CSS code for styling */
            #recipe-container { text-align: center; }
            input { padding: 10px; margin-right: 10px; }
            button { padding: 10px; }
            #recipeResults { margin-top: 20px; }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-recipe-container" style="text-align: center;"><input type="text" placeholder="Enter recipe name" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Search</button><div id="demo-recipeResults" style="margin-top: 20px;"></div></div></div>',
        },
        {
          title: 'Step 3: JavaScript Logic',
          description: 'Write JavaScript code to fetch recipe data using an API.',
          code: `
            // JavaScript code for recipe finder functionality
            async function searchRecipe() {
              const recipeName = document.getElementById('searchRecipe').value;
              const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + recipeName);
              const data = await response.json();
              if (data.meals) {
                const results = data.meals.map(meal => \`<div>\${meal.strMeal}</div>\`).join('');
                document.getElementById('recipeResults').innerHTML = results;
              } else {
                document.getElementById('recipeResults').textContent = 'No recipes found.';
              }
            }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-recipe-container"><input type="text" placeholder="Enter recipe name" /><button>Search</button><div id="demo-recipeResults"></div></div></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <div id="recipe-container">
              <input type="text" id="searchRecipe" placeholder="Enter recipe name" />
              <button id="searchBtn">Search</button>
              <div id="recipeResults"></div>
            </div>

            /* CSS */
            #recipe-container { text-align: center; }
            input { padding: 10px; margin-right: 10px; }
            button { padding: 10px; }
            #recipeResults { margin-top: 20px; }

            // JavaScript
            async function searchRecipe() {
              const recipeName = document.getElementById('searchRecipe').value;
              const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + recipeName);
              const data = await response.json();
              if (data.meals) {
                const results = data.meals.map(meal => \`<div>\${meal.strMeal}</div>\`).join('');
                document.getElementById('recipeResults').innerHTML = results;
              } else {
                document.getElementById('recipeResults').textContent = 'No recipes found.';
              }
            }
            document.getElementById('searchBtn').addEventListener('click', searchRecipe);
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-recipe-container"><input type="text" placeholder="Enter recipe name" /><button>Search</button><div id="demo-recipeResults"></div></div></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default RecipeFinderPage;
