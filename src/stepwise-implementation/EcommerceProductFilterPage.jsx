import React, { useState } from 'react';
import StepwiseComponent from './StepwiseComponent'; // Make sure this component handles stepwise navigation

function EcommerceProductFilterPage() {
  // Step data for the product filter implementation
  const steps = [
    {
      title: 'Step 1: HTML Structure',
      description: 'Create the basic HTML structure for the product filter.',
      code: `
        <div id="product-container">
          <input type="text" id="searchInput" placeholder="Search products..." />
          <div id="productList"></div>
        </div>
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <div id="demo-product-container">
            <input type="text" placeholder="Search products..." />
            <div id="demo-productList"></div>
          </div>
        </div>
      `,
    },
    {
      title: 'Step 2: CSS Styling',
      description: 'Add CSS styles to make the product filter look visually appealing.',
      code: `
        /* Basic styling */
        #product-container {
          text-align: center;
          max-width: 400px;
          margin: 0 auto;
        }

        #productList {
          margin-top: 20px;
          padding: 10px;
          border-top: 1px solid #ccc;
        }

        input {
          padding: 10px;
          width: 80%;
          font-size: 16px;
          margin-bottom: 10px;
        }
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <div id="demo-product-container" style="text-align: center;">
            <input type="text" placeholder="Search products..." />
            <div id="demo-productList" style="margin-top: 20px;"></div>
          </div>
        </div>
      `,
    },
    {
      title: 'Step 3: React Logic',
      description: 'Add React logic to filter products based on search input.',
      code: `
        import React, { useState } from 'react';

        function ProductFilter() {
          const [searchTerm, setSearchTerm] = useState('');
          const products = [
            { title: 'Product 1', category: 'Electronics' },
            { title: 'Product 2', category: 'Books' },
            { title: 'Product 3', category: 'Electronics' },
            { title: 'Product 4', category: 'Clothing' },
          ];

          const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
          );

          return (
            <div id="product-container">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <div id="productList">
                {filteredProducts.map((product, index) => (
                  <div key={index}>
                    {product.title} ({product.category})
                  </div>
                ))}
              </div>
            </div>
          );
        }
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <div id="demo-product-container">
            <input type="text" placeholder="Search products..." />
            <div id="demo-productList"></div>
          </div>
        </div>
      `,
    },
    {
        title: 'Step 4: Complete Implementation',
        description: 'Integrate all the code and run the project.',
        code: `
          // HTML Structure
          <div id="product-container">
            <input type="text" id="searchInput" placeholder="Search products..." />
            <div id="productList"></div>
          </div>

          // CSS Styling
          #product-container { text-align: center; }
          #productList { margin-top: 20px; }

          // React Code
          import React, { useState } from 'react';

          function ProductFilter() {
            const [searchTerm, setSearchTerm] = useState('');
            const products = [
              { title: 'Product 1', category: 'Electronics' },
              { title: 'Product 2', category: 'Books' },
              { title: 'Product 3', category: 'Electronics' },
              { title: 'Product 4', category: 'Clothing' },
            ];

            const filteredProducts = products.filter(product =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              product.category.toLowerCase().includes(searchTerm.toLowerCase())
            );

            return (
              <div id="product-container" style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  style={{
                    padding: '10px',
                    width: '80%',
                    fontSize: '16px',
                    marginBottom: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                  }}
                />
                <div id="productList" style={{ marginTop: '20px' }}>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                      <div key={index} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                        {product.title} ({product.category})
                      </div>
                    ))
                  ) : (
                    <div>No products found</div>
                  )}
                </div>
              </div>
            );
          }
        `,
        demo: `
          <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
            <div id="demo-product-container">
              <input type="text" placeholder="Search products..." />
              <div id="demo-productList"></div>
            </div>
          </div>
        `,
      }

  ];

  const renderDemo = (stepData) => {
    return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
  };

  return (
    <StepwiseComponent steps={steps} renderDemo={renderDemo} />
  );
}

export default EcommerceProductFilterPage;
