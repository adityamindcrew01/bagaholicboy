'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::product.product');



module.exports = createCoreController('api::product.product',({strapi}) => ({
    async findOne(ctx) {
        
      const {id} = ctx.params;


      const entry = await strapi.db.query('api::product.product').findOne({
        
        where: { id: id },
        populate: {
             image: "image" ,
            image2: "image2"
    }, 
       
       
      });
        const sanitizedResults = await this.sanitizeOutput(entry, ctx);
    
        return this.transformResponse(sanitizedResults);
      }
}))
